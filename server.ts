import express from 'express';
import fs from 'fs';
import path from 'path';
import dotenv from 'dotenv';
import { createServer as createViteServer } from 'vite';
import { GoogleGenAI, ThinkingLevel, Type } from '@google/genai';
import { PDFParse } from 'pdf-parse';
import { SIMALUNGUN_LEXICON, NATURAL_PHRASEBOOK } from './src/data/simalungunCorpus.ts';

dotenv.config();

const app = express();
const PORT = 3000;

app.use(express.json({ limit: '25mb' }));

// Server-side in-memory cache so repeated translations return in <5ms without extra quota/latency
const translationCache = new Map<string, any>();

// Lazy-loaded Verbatim PDF Corpus Cache (from the 4 attached PDFs in public/assets/aistudio/)
interface LoadedPdfCorpus {
  bibelSimalungunText: string;
  alkitabTbText: string;
  kamus2016Text: string;
  kamus2015Text: string;
  isLoaded: boolean;
}

const pdfCorpus: LoadedPdfCorpus = {
  bibelSimalungunText: '',
  alkitabTbText: '',
  kamus2016Text: '',
  kamus2015Text: '',
  isLoaded: false,
};

let loadingPromise: Promise<void> | null = null;

async function ensurePdfCorpusLoaded(): Promise<void> {
  if (pdfCorpus.isLoaded) return;
  if (loadingPromise) return loadingPromise;

  loadingPromise = (async () => {
    try {
      const readPdfText = async (relPath: string): Promise<string> => {
        const fullPath = path.resolve(process.cwd(), relPath);
        if (!fs.existsSync(fullPath)) return '';
        const parser = new PDFParse({ data: fs.readFileSync(fullPath) });
        const res = await parser.getText();
        return (res.text || '').replace(/Ɵ/g, 'ti');
      };

      const [kamus2016, kamus2015, bibelSmg] = await Promise.all([
        readPdfText('public/assets/aistudio/Kamus_Bahasa_Simalungun-Indonesia__2016__cdb45e49.pdf'),
        readPdfText('public/assets/aistudio/KAMUS-SIMALUNGUN-INDONESIA_e0d70b76.pdf'),
        readPdfText('public/assets/aistudio/alkitab_simalungun_00d96e9c.pdf'),
      ]);

      pdfCorpus.kamus2016Text = kamus2016;
      pdfCorpus.kamus2015Text = kamus2015;
      pdfCorpus.bibelSimalungunText = bibelSmg;
      pdfCorpus.isLoaded = true;
      console.log(
        `[PDF Corpus Indexed] Kamus 2016: ${kamus2016.length} chars, Bibel Simalungun: ${bibelSmg.length} chars`
      );
    } catch (err) {
      console.error('Error indexing PDF corpus:', err);
    }
  })();

  return loadingPromise;
}

// Kick off background indexing after server boots
setTimeout(() => {
  ensurePdfCorpusLoaded().catch(() => {});
}, 1500);

function searchVerbatimInPdfText(sourceText: string, query: string, maxResults = 6): string[] {
  if (!sourceText || !query.trim()) return [];
  const q = query.trim().toLowerCase();
  const lines = sourceText.split('\n');
  const results: string[] = [];

  for (let i = 0; i < lines.length; i++) {
    if (lines[i].toLowerCase().includes(q)) {
      const start = Math.max(0, i - 1);
      const end = Math.min(lines.length - 1, i + 2);
      const snippet = lines
        .slice(start, end + 1)
        .join(' ')
        .replace(/\s+/g, ' ')
        .trim();
      if (snippet.length > 10 && !results.includes(snippet)) {
        results.push(snippet.slice(0, 320));
        if (results.length >= maxResults) break;
      }
    }
  }
  return results;
}

function getAiClient(): GoogleGenAI {
  return new GoogleGenAI({
    apiKey: process.env.GEMINI_API_KEY,
    httpOptions: {
      headers: {
        'User-Agent': 'aistudio-build',
      },
    },
  });
}

function getNaturalSimalungunInstruction(): string {
  const phraseExamples = NATURAL_PHRASEBOOK.map(
    (p) =>
      `- Indonesia: "${p.indonesian}" -> Simalungun Santai/Alami: "${p.simalungunNatural}" | Sopan: "${p.simalungunPolite}" (${p.note})`
  ).join('\n');

  return `Anda adalah penutur asli (native speaker) Bahasa Simalungun sekaligus penyusun Kamus Bahasa Simalungun–Indonesia (Balai Bahasa Sumatera Utara) dan penerjemah Bibel Simalungun GKPS (Edisi 2007).

ATURAN WAJIB AGAR TERJEMAHAN TIDAK KAKU / TIDAK "CHATGPT BANGET" & TIDAK TERCAMPUR BAHASA BATAK TOBA:
1. JANGAN PERNAH mencampur kosakata Batak Toba ke dalam Bahasa Simalungun!
   - Contoh di 1 Musa 1:1 Bibel Simalungun asli: "Bani mula ni mulani itompa Naibata ma langit pakon tanoh." (BUKAN "mungkahni").
   - Gunakan "lang" atau "seng" (bukan "ndang"), "domma" (bukan "nunga"), "lape" (bukan "ndang dope"), "anjaha" / "ampa" / "pakon" (bukan "jala" / "dohot"), "uhur" (bukan "roha"), "ham" / "nasiam" (bukan "hamu"), "sonaha" (bukan "boha"), "mase" (bukan "boasa"), "humbani" (bukan "sian").
2. Gunakan struktur kalimat VOS / Predikat-di-depan khas Simalungun:
   - SALAH (Kaku/ChatGPT): "Ahu marsihol tumang hubani ho" atau "Ho sedang mambahen aha?"
   - BENAR (Alami Simalungun): "Marsihol tumang au bamu, hasian" atau "Marhua do ho in?" / "Aha do na ihorjahon ham?"
3. Gunakan partikel lisan alami Simalungun sesuai konteks:
   - "da" (ya / dong di akhir kalimat: "Ulang sonai, da!")
   - "tene" (ya kan?: "Jenges tumang, tene?")
   - "ma" (-lah: "Mangan ma hita lobei")
   - "mando dassa" (cuma itu-itu saja)
   - "hape" / "gatni" (ternyata / rupanya: "Ho do hape!")
   - "namin" (sebenarnya / tadinya)
   - "bah!" (seruan ekspresif khas Simalungun)
4. Waspadai "False Friends" (kata yang sering salah diterjemahkan AI umum):
   - "MARAH" dalam bahasa Simalungun adalah "MANGGILA" atau "MARIMAS" (di Podah 15:1: "mamuhoi gila" = membangkitkan marah).
   - "MERAJUK / NGAMBEK" adalah "MARGONI" atau "MARDANDI".
   - "PASAR" adalah "TIGA" atau "POKAN" (sedangkan angka 3 adalah "TOLU").
   - "BAIK / JUJUR" adalah "BUJUR" atau "DEAR".
   - "CANTIK / BAGUS" adalah "JENGES".
   - "ENAK / LEZAT" adalah "TABOH", "MANTIN", atau "SODAP".
   - "CAPEK / LELAH" adalah "LOJA" ("Loja tumang huahap" = capek banget kurasa).
   - "LAPAR" adalah "LOHEIAN" atau "HODAR". "HAUS" adalah "HORAHAN". "KENYANG" adalah "BOSUR".
   - "SUDAH" = "DOMMA", "BELUM" = "LAPE", "TIDAK" = "LANG / SENG", "JANGAN" = "ULANG".

Contoh Kalimat Percakapan Alami (Sahap Siap Ari):
${phraseExamples}`;
}

// 1. Endpoint Status Korpus PDF
app.get('/api/corpus-info', (_req, res) => {
  res.json({
    status: 'ready',
    pdfIndexed: pdfCorpus.isLoaded,
    pdfs: [
      {
        id: 'pdf-kamus-2016',
        title: 'Kamus Bahasa Simalungun–Indonesia Edisi Kedua (2016)',
        url: '/assets/aistudio/Kamus_Bahasa_Simalungun-Indonesia__2016__cdb45e49.pdf',
        category: 'Kamus Balai Bahasa Kemendikbud',
      },
      {
        id: 'pdf-kamus-2015',
        title: 'Kamus Bahasa Simalungun–Indonesia (2015)',
        url: '/assets/aistudio/KAMUS-SIMALUNGUN-INDONESIA_e0d70b76.pdf',
        category: 'Kamus Balai Bahasa Kemendikbud',
      },
      {
        id: 'pdf-bibel-smg',
        title: 'Bibel — Alkitab Bahasa Batak Simalungun (2007)',
        url: '/assets/aistudio/alkitab_simalungun_00d96e9c.pdf',
        category: 'Korpus Alkitab Sejajar',
      },
      {
        id: 'pdf-alkitab-tb',
        title: 'Alkitab Terjemahan Baru (LAI)',
        url: '/assets/aistudio/alkitab_terjemahan_baru_37df3eea.pdf',
        category: 'Korpus Alkitab Sejajar',
      },
    ],
    lexiconCount: SIMALUNGUN_LEXICON.length,
  });
});

// 1B. Endpoint Pencarian Verbatim Langsung di Dalam 4 File PDF Asli!
app.post('/api/pdf-search', async (req, res) => {
  try {
    const { query } = req.body;
    if (!query || typeof query !== 'string') {
      res.status(400).json({ error: 'Kata kunci pencarian PDF tidak boleh kosong.' });
      return;
    }

    await ensurePdfCorpusLoaded();

    const kamus2016Matches = searchVerbatimInPdfText(pdfCorpus.kamus2016Text, query, 5);
    const kamus2015Matches = searchVerbatimInPdfText(pdfCorpus.kamus2015Text, query, 4);
    const bibelMatches = searchVerbatimInPdfText(pdfCorpus.bibelSimalungunText, query, 6);

    res.json({
      query,
      kamus2016Matches,
      kamus2015Matches,
      bibelMatches,
    });
  } catch (error: any) {
    console.error('Error in /api/pdf-search:', error);
    res.status(500).json({ error: 'Gagal mencari di dalam dokumen PDF.' });
  }
});

// 2. Endpoint Terjemahan Teks Cepat & Alami (Grounded pada PDF Kamus & Bibel Simalungun Asli)
app.post('/api/translate', async (req, res) => {
  try {
    const {
      text,
      direction = 'auto',
      dialect = 'Dialek Raya (Umum)',
      style = 'santai',
    } = req.body;

    if (!text || typeof text !== 'string') {
      res.status(400).json({ error: 'Teks untuk diterjemahkan tidak boleh kosong.' });
      return;
    }

    const cacheKey = `${text.trim().toLowerCase()}|${direction}|${dialect}|${style}`;
    if (translationCache.has(cacheKey)) {
      res.json({ ...translationCache.get(cacheKey), cached: true });
      return;
    }

    await ensurePdfCorpusLoaded();
    const firstWord = text.trim().split(/\s+/)[0] || '';
    const verbatimKamusSnippets = searchVerbatimInPdfText(pdfCorpus.kamus2016Text, firstWord, 3);
    const verbatimBibelSnippets = searchVerbatimInPdfText(pdfCorpus.bibelSimalungunText, firstWord, 2);

    const ai = getAiClient();
    const prompt = `${getNaturalSimalungunInstruction()}

Kutipan Verbatim dari PDF Kamus Simalungun (2016) & PDF Bibel Simalungun (2007) untuk referensi kata "${firstWord}":
- Kamus 2016: ${verbatimKamusSnippets.join(' | ') || 'Gunakan kosakata Simalungun murni.'}
- Bibel Simalungun 2007: ${verbatimBibelSnippets.join(' | ') || '1 Musa 1:1: Bani mula ni mulani itompa Naibata ma langit pakon tanoh.'}

Tugas: Terjemahkan kalimat berikut agar terdengar 100% alami seperti penutur asli Simalungun (dan jika mengutip ayat Bibel Simalungun, WAJIB sama persis dengan teks Bibel Simalungun 2007 di atas!).
- Teks Masukan: "${text}"
- Arah Bahasa: ${direction === 'id-to-smg' ? 'Indonesia ke Simalungun' : direction === 'smg-to-id' ? 'Simalungun ke Indonesia' : 'Deteksi otomatis (Indonesia <-> Simalungun)'}
- Dialek Prioritas: ${dialect}
- Gaya Bahasa: ${style === 'santai' ? 'Santai / Akrab Sehari-hari (untuk ngobrol dengan pacar/teman, gunakan partikel da, tene, ma, huahap, hasian, baya/ambia)' : style === 'sopan' ? 'Sopan & Halus (untuk menyapa orang tua/mertua/tondong, wajib gunakan kata ganti "Ham" atau "Nasiam")' : 'Bahasa Pustaka / Liturgi Alkitab Simalungun'}`;

    const response = await ai.models.generateContent({
      model: 'gemini-3.8-flash',
      contents: prompt,
      config: {
        thinkingConfig: { thinkingLevel: ThinkingLevel.LOW },
        responseMimeType: 'application/json',
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            detectedSourceLanguage: { type: Type.STRING },
            targetLanguage: { type: Type.STRING },
            translatedText: { type: Type.STRING },
            naturalCasualVersion: { type: Type.STRING },
            politeFormalVersion: { type: Type.STRING },
            phoneticGuide: { type: Type.STRING },
            dialectComparison: {
              type: Type.OBJECT,
              properties: {
                raya: { type: Type.STRING },
                silimakuta: { type: Type.STRING },
                topiPasir: { type: Type.STRING },
                jaheJahe: { type: Type.STRING },
                linguisticNote: { type: Type.STRING },
              },
              required: ['raya', 'silimakuta', 'topiPasir', 'jaheJahe', 'linguisticNote'],
            },
            wordBreakdown: {
              type: Type.ARRAY,
              items: {
                type: Type.OBJECT,
                properties: {
                  word: { type: Type.STRING },
                  meaning: { type: Type.STRING },
                  partOfSpeech: { type: Type.STRING },
                  morphologyNote: { type: Type.STRING },
                },
                required: ['word', 'meaning', 'partOfSpeech', 'morphologyNote'],
              },
            },
            relatedBibleParallel: {
              type: Type.OBJECT,
              properties: {
                reference: { type: Type.STRING },
                simalungunVerse: { type: Type.STRING },
                indonesianVerse: { type: Type.STRING },
              },
              required: ['reference', 'simalungunVerse', 'indonesianVerse'],
            },
          },
          required: [
            'detectedSourceLanguage',
            'targetLanguage',
            'translatedText',
            'naturalCasualVersion',
            'politeFormalVersion',
            'phoneticGuide',
            'dialectComparison',
            'wordBreakdown',
            'relatedBibleParallel',
          ],
        },
      },
    });

    const parsed = JSON.parse((response.text ?? '{}').trim());
    translationCache.set(cacheKey, parsed);
    res.json(parsed);
  } catch (error: any) {
    console.error('Error in /api/translate:', error);
    res.status(500).json({
      error: error?.message || 'Gagal menerjemahkan teks.',
    });
  }
});

// 3. Endpoint Penerjemah Suara Otomatis
app.post('/api/voice-translate', async (req, res) => {
  try {
    const {
      audioBase64,
      mimeType = 'audio/webm',
      direction = 'auto',
      dialect = 'Dialek Raya (Umum)',
    } = req.body;
    if (!audioBase64) {
      res.status(400).json({ error: 'Data rekaman audio tidak ditemukan.' });
      return;
    }

    const ai = getAiClient();

    const transcribeResponse = await ai.models.generateContent({
      model: 'gemini-3.5-transcribe',
      contents: {
        parts: [
          {
            inlineData: {
              mimeType,
              data: audioBase64,
            },
          },
          {
            text: 'Transkripsikan rekaman suara ini. Pembicara berbicara dalam Bahasa Indonesia atau Bahasa Simalungun sehari-hari (Horas, Diatei tupa, Ham, Nasiam, Domma, Lape, Mangan, Laho, Manggila, Margoni, Marsihol, Jenges, Taboh, Loja). Tuliskan hanya teks transkripsinya.',
          },
        ],
      },
    });

    const transcript = (transcribeResponse.text ?? '').trim();
    if (!transcript) {
      res.status(422).json({ error: 'Suara tidak terdengar jelas. Silakan coba rekam kembali.' });
      return;
    }

    const translatePrompt = `${getNaturalSimalungunInstruction()}

Hasil transkripsi suara pengguna: "${transcript}"
Arah penerjemahan: ${direction === 'id-to-smg' ? 'Indonesia ke Simalungun' : direction === 'smg-to-id' ? 'Simalungun ke Indonesia' : 'Deteksi otomatis (Indonesia <-> Simalungun)'}
Dialek Simalungun tujuan: ${dialect}

Terjemahkan dengan gaya bahasa lisan Simalungun yang alami, luwes, dan tidak kaku.`;

    const translationResponse = await ai.models.generateContent({
      model: 'gemini-3.8-flash',
      contents: translatePrompt,
      config: {
        thinkingConfig: { thinkingLevel: ThinkingLevel.LOW },
        responseMimeType: 'application/json',
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            rawTranscript: { type: Type.STRING },
            correctedTranscript: { type: Type.STRING },
            detectedLanguage: { type: Type.STRING },
            translatedText: { type: Type.STRING },
            simalungunTextToSpeak: { type: Type.STRING },
            phoneticGuide: { type: Type.STRING },
            dialectNote: { type: Type.STRING },
            wordBreakdown: {
              type: Type.ARRAY,
              items: {
                type: Type.OBJECT,
                properties: {
                  word: { type: Type.STRING },
                  meaning: { type: Type.STRING },
                  partOfSpeech: { type: Type.STRING },
                },
                required: ['word', 'meaning', 'partOfSpeech'],
              },
            },
          },
          required: [
            'rawTranscript',
            'correctedTranscript',
            'detectedLanguage',
            'translatedText',
            'simalungunTextToSpeak',
            'phoneticGuide',
            'dialectNote',
            'wordBreakdown',
          ],
        },
      },
    });

    const resultData = JSON.parse((translationResponse.text ?? '{}').trim());
    res.json(resultData);
  } catch (error: any) {
    console.error('Error in /api/voice-translate:', error);
    res.status(500).json({
      error: error?.message || 'Gagal memproses rekaman suara.',
    });
  }
});

// 4. Endpoint Pelafalan Suara (TTS WAV)
app.post('/api/tts', async (req, res) => {
  try {
    const { text, voiceName = 'Kore' } = req.body;
    if (!text || typeof text !== 'string') {
      res.status(400).json({ error: 'Teks untuk pelafalan tidak boleh kosong.' });
      return;
    }

    const ai = getAiClient();
    const response = await ai.models.generateContent({
      model: 'gemini-3.8-flash-lite-tts',
      contents: [
        {
          role: 'user',
          parts: [
            {
              text: text,
              speechMetadata: {
                style:
                  'Warm, natural Nusantara Batak Simalungun and Indonesian articulation with clear vowel endings',
              },
            } as any,
          ],
        },
      ],
      config: {
        responseModalities: ['AUDIO'],
        speechConfig: {
          voiceConfig: {
            prebuiltVoiceConfig: { voiceName },
          },
        },
      },
    });

    const base64Audio = response.candidates?.[0]?.content?.parts?.[0]?.inlineData?.data;
    if (!base64Audio) {
      res.status(500).json({ error: 'Model tidak mengembalikan data audio.' });
      return;
    }

    res.json({
      audioWavBase64: base64Audio,
      mimeType: 'audio/wav',
    });
  } catch (error: any) {
    console.error('Error in /api/tts:', error);
    res.status(500).json({
      error: error?.message || 'Gagal menghasilkan suara pelafalan.',
    });
  }
});

// 5. Endpoint Kamera & Foto Langsung Translate
app.post('/api/vision-translate', async (req, res) => {
  try {
    const { imageBase64, mimeType = 'image/jpeg', targetDirection = 'auto' } = req.body;
    if (!imageBase64) {
      res.status(400).json({ error: 'Gambar tidak ditemukan.' });
      return;
    }

    const ai = getAiClient();
    const prompt = `${getNaturalSimalungunInstruction()}

Tugas: Analisis gambar/foto ini. Deteksi semua baris atau blok teks yang terlihat di dalam gambar.
1. Berikan koordinat kotak pembatas (box_2d) dalam format [ymin, xmin, ymax, xmax] skala 0–1000.
2. Ekstrak teks aslinya (sourceText) secara persis sesuai gambar.
3. Terjemahkan secara alami dan akurat (translatedText) (${targetDirection}).
4. Bedah kosakata penting (vocabularyBreakdown) sesuai Kamus Bahasa Simalungun–Indonesia.`;

    const response = await ai.models.generateContent({
      model: 'gemini-3.8-flash',
      contents: {
        parts: [
          {
            inlineData: {
              mimeType,
              data: imageBase64,
            },
          },
          { text: prompt },
        ],
      },
      config: {
        thinkingConfig: { thinkingLevel: ThinkingLevel.LOW },
        responseMimeType: 'application/json',
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            summaryTitle: { type: Type.STRING },
            fullSourceText: { type: Type.STRING },
            fullTranslatedText: { type: Type.STRING },
            detectedRegions: {
              type: Type.ARRAY,
              items: {
                type: Type.OBJECT,
                properties: {
                  id: { type: Type.STRING },
                  box_2d: {
                    type: Type.ARRAY,
                    items: { type: Type.NUMBER },
                  },
                  sourceText: { type: Type.STRING },
                  translatedText: { type: Type.STRING },
                  detectedLanguage: { type: Type.STRING },
                },
                required: ['id', 'box_2d', 'sourceText', 'translatedText', 'detectedLanguage'],
              },
            },
            vocabularyBreakdown: {
              type: Type.ARRAY,
              items: {
                type: Type.OBJECT,
                properties: {
                  word: { type: Type.STRING },
                  meaning: { type: Type.STRING },
                  partOfSpeech: { type: Type.STRING },
                  dialectNote: { type: Type.STRING },
                },
                required: ['word', 'meaning', 'partOfSpeech', 'dialectNote'],
              },
            },
          },
          required: [
            'summaryTitle',
            'fullSourceText',
            'fullTranslatedText',
            'detectedRegions',
            'vocabularyBreakdown',
          ],
        },
      },
    });

    const parsed = JSON.parse((response.text ?? '{}').trim());
    res.json(parsed);
  } catch (error: any) {
    console.error('Error in /api/vision-translate:', error);
    res.status(500).json({
      error: error?.message || 'Gagal memindai dan menerjemahkan gambar.',
    });
  }
});

// 6. Endpoint Verifikasi Kosakata, Partuturan & Dialek (Dengan Kutipan Verbatim dari 4 PDF!)
app.post('/api/verify-dialect', async (req, res) => {
  try {
    const { query } = req.body;
    if (!query || typeof query !== 'string') {
      res.status(400).json({ error: 'Kata atau topik pencarian tidak boleh kosong.' });
      return;
    }

    await ensurePdfCorpusLoaded();
    const kamusHits = searchVerbatimInPdfText(pdfCorpus.kamus2016Text, query, 4);
    const bibelHits = searchVerbatimInPdfText(pdfCorpus.bibelSimalungunText, query, 4);

    const ai = getAiClient();
    const prompt = `${getNaturalSimalungunInstruction()}

Kutipan Verbatim Langsung dari File PDF Asli yang Dilampirkan Pengguna:
- PDF Kamus Bahasa Simalungun–Indonesia (2016): ${kamusHits.join(' || ') || 'Tidak ada kemunculan persis untuk frasa penuh, gunakan lema dasar.'}
- PDF Alkitab Bahasa Batak Simalungun (2007): ${bibelHits.join(' || ') || 'Tidak ada kemunculan persis untuk frasa penuh.'}

Pengguna ingin mengonfirmasi kebenaran kata, ayat Bibel Simalungun, partuturan (panggilan kekerabatan adat Simalungun termasuk Bapatua, Bapatongah, Bapanggi), lirik Doding Haleluya GKPS / Kidung Jemaat, atau gaya bicara santai sehari-hari untuk: "${query}".
Berikan penjelasan yang akurat berdasarkan kutipan verbatim PDF di atas, Kamus Bahasa Simalungun–Indonesia (Balai Bahasa Sumut), adat Tolu Sahundulan / Lima Saodoran, dan penggunaan lisan sehari-hari.`;

    const response = await ai.models.generateContent({
      model: 'gemini-3.8-flash',
      contents: prompt,
      config: {
        thinkingConfig: { thinkingLevel: ThinkingLevel.LOW },
        tools: [{ googleSearch: {} }],
      },
    });

    const groundingChunks = response.candidates?.[0]?.groundingMetadata?.groundingChunks || [];
    const sources = groundingChunks
      .map((chunk: any) => chunk?.web)
      .filter((web: any) => web && web.uri && web.title);

    res.json({
      analysis: response.text ?? '',
      sources,
      pdfVerbatimMatches: {
        kamus2016: kamusHits,
        bibelSimalungun: bibelHits,
      },
    });
  } catch (error: any) {
    console.error('Error in /api/verify-dialect:', error);
    res.status(500).json({
      error: error?.message || 'Gagal memverifikasi kosakata dan dialek.',
    });
  }
});

async function startServer() {
  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.resolve(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (_req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Pustaha Simalungun server running on http://0.0.0.0:${PORT}`);
  });
}

startServer().catch((err) => {
  console.error('Failed to start server:', err);
});
