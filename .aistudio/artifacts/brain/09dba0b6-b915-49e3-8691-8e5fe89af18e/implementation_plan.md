# Pustaha Simalungun — Kamus Korpus, Dialek & Penerjemah Multimodal

Aplikasi kamus komprehensif dan penerjemah otomatis Bahasa Simalungun ↔ Bahasa Indonesia yang dibangun di atas korpus sejajar Alkitab Simalungun (*Bibel*) dan Alkitab Terjemahan Baru, diperkaya dengan kosakata percakapan sehari-hari, perbandingan dialek wilayah Simalungun, referensi lagu/video *Doding Haleluya GKPS*, penerjemah suara dua arah dengan audio pelafalan, serta pemindai kamera/foto dengan penanda teks (*bounding box*) dan bedah kosakata.

## User Review & Critical Decisions

> [!IMPORTANT]
> Berikut adalah rangkuman keputusan produk yang telah dikonfirmasi beserta rancangan arsitektur untuk tinjauan Anda sebelum tahap penulisan kode dimulai.

- **Confirmed Decision 1 — Cakupan Kosakata & Dialek**: Menggabungkan kosakata pustaka/formal dari korpus Alkitab Simalungun & Terjemahan Baru, percakapan harian (*Sahap السhari-hari*), serta variasi dialek wilayah (**Dialek Raya**, **Dialek Silimakuta / Simalungun Atas**, **Dialek Topi Pasir / Purba**, dan **Dialek Jahe-jahe / Bawah**) dan konfirmasi istilah dari referensi video/lagu *Doding Haleluya GKPS*.
- **Confirmed Decision 2 — Tampilan Terjemahan Kamera & Foto**: Menampilkan deteksi teks langsung di atas foto (*interactive bounding boxes*) disertai panel rincian kosakata, arti kata per kata, dan terjemahan kalimat utuh.
- **Confirmed Decision 3 — Penerjemah Suara & Pelafalan Audio**: Mendukung rekam suara langsung (mikrofon), transkripsi & terjemahan otomatis Simalungun ↔ Indonesia, serta fitur tombol dengarkan pelafalan (*Text-to-Speech*) untuk teks maupun per kata di kamus.

---

## 1. Overview & Core Concept

- **What It Does**:
  1. **Kamus Leksikon & Korpus Sejajar**: Mencari kata atau frasa dalam Bahasa Simalungun maupun Bahasa Indonesia, menampilkan kelas kata, ragam bahasa (Pustaka/Alkitab, Percakapan Harian, Adat), perbandingan lintas dialek, contoh kalimat sehari-hari, serta **Ayat Sejajar (Parallel Verse Concordance)** langsung dari PDF *Alkitab Simalungun* dan *Alkitab Terjemahan Baru* yang dilampirkan.
  2. **Penerjemah Suara Otomatis (Voice Auto-Translate)**: Merekam ucapan pengguna dalam Bahasa Indonesia atau Simalungun, mentranskripsikan dan menerjemahkannya secara otomatis disertai analisis struktur kata dan pemutar suara pelafalan (*Text-to-Speech*).
  3. **Penerjemah Kamera & Foto (Visual OCR & Lexicon Lens)**: Mengambil foto langsung dari kamera perangkat atau mengunggah gambar dokumen/buku/papan nama, mendeteksi posisi teks di atas foto dengan kotak interaktif (*bounding box*), menerjemahkan teks secara utuh, dan membedah arti setiap kata Simalungun yang ditemukan di dalam gambar.
  4. **Konfirmasi Dialek & Referensi Video/Doding**: Menyediakan modul verifikasi penggunaan kata dalam *Doding Haleluya GKPS* dan video pembelajaran bahasa Simalungun (termasuk tautan referensi YouTube yang diberikan) beserta pencarian terverifikasi untuk memastikan keaslian istilah dan dialek.
- **Target Audience / Persona**: Penutur dan pembelajar Bahasa Simalungun, pelayan gereja/pembaca *Bibel* Simalungun & *Doding Haleluya*, peneliti bahasa daerah, serta generasi muda dan wisatawan yang ingin berkomunikasi atau menerjemahkan teks/suara Simalungun secara instan.
- **Key Value**: Menghubungkan warisan literatur cetak (*Bibel Simalungun* & *Alkitab TB*) dan tradisi lisan/lagu dengan teknologi penerjemahan suara serta penglihatan komputer (*computer vision*) dalam satu ruang kerja kuratorial yang elegan.

---

## 2. User Experience & Visual Design

- **Key User Flows**:
  1. **Eksplorasi Kamus & Konkordansi Alkitab**: Pengguna mengetik kata (misal: *"holong"*, *"bah"*, *"horja"*, *"domma"*, *"ham"*, atau *"kasih"*). Sistem menampilkan entri kamus lengkap, tabel variasi dialek (*Raya, Silimakuta/Atas, Topi Pasir, Jahe-jahe*), tombol dengarkan pelafalan, contoh percakapan harian, serta kutipan ayat sejajar dari dokumen PDF Alkitab Simalungun & Terjemahan Baru. Pengguna juga dapat membuka penampil dokumen PDF asli secara berdampingan (*Parallel PDF Reader*).
  2. **Penerjemah Suara & Teks Dua Arah**: Pengguna memilih arah bahasa (Indonesia → Simalungun, Simalungun → Indonesia, atau Deteksi Otomatis), menekan tombol mikrofon untuk berbicara (atau mengetik kalimat), lalu melihat hasil transkripsi, terjemahan dalam dialek pilihan, rincian morfologi kata, dan menekan tombol **Dengarkan Pelafalan** untuk memutar audio suara.
  3. **Kamera & Foto Langsung Translate**: Pengguna membuka tab Kamera/Foto, memotret objek/halaman teks melalui *webcam*/kamera HP atau mengunggah gambar. Kanvas foto menampilkan kotak penanda (*bounding box*) di atas baris teks yang terdeteksi. Saat kotak diklik atau disorot, panel samping menampilkan teks asli, terjemahan Bahasa Indonesia/Simalungun, serta daftar kosakata (*word-by-word breakdown*) yang bisa disimpan ke kamus.
  4. **Verifikasi Video, Doding & Dialek**: Pengguna menelusuri referensi video YouTube (termasuk *Doding Haleluya GKPS* dan video referensi yang dilampirkan) serta melakukan pengecekan silang istilah/dialek dengan dukungan pencarian web terintegrasi (*Google Search Grounding*) untuk memvalidasi arti kata langka atau ungkapan adat (*umpasa*).

- **Visual Identity & Theme**:
  - *Aesthetic Direction*: **Archival Warm Paper & Simalungun Pinar (Hiou) Editorial** — memadukan keanggunan katalog pustaka/museum dengan sentuhan warna tenun tradisional Simalungun (*Hiou Ragi Panei / Suri-suri*: merah marun bata, hitam arang, dan putih gading hangat).
  - *Color Palette & Mood*:
    - `--background`: `#FBF9F5` (Archival Warm Alabaster) pada mode terang; `#141210` (Deep Obsidian Bark) pada mode gelap.
    - `--surface`: `#F3EFE6` (Warm Limestone Paper) dengan garis batas tipis 1px `#E4DEC3`.
    - `--text-primary`: `#1C1917` (Antique Charcoal Ink).
    - `--text-secondary`: `#57534E` (Muted Stone).
    - `--accent-primary`: `#9A3412` (Simalungun Terracotta / Merah Hiou) untuk aksi utama, penanda aktif, dan sorotan kata kunci.
    - `--accent-secondary`: `#1E3A8A` (Deep Indigo / Biru Suri-suri) untuk penanda korpus Alkitab dan kutipan dialek.
  - *Typography & Hierarchy*:
    - **Display & Judul Entri Kamus**: `Fraunces` atau `Cormorant Garamond` — memberikan karakter kamus cetak klasik dan wibawa literatur.
    - **Body Prose & Terjemahan**: `Plus Jakarta Sans` — keterbacaan tinggi untuk definisi, antarmuka penerjemah, dan perbandingan teks.
    - **Fonem, Konkordansi Ayat & Koordinat**: `JetBrains Mono` (`tabular-nums`) untuk nomor pasal/ayat, transkripsi fonetik, dan stempel waktu.
  - *Component Styling & Layout*:
    - Mengikuti **Top Bar Contract** satu baris dengan 3 zona bersih: Wordmark *Pustaha Simalungun* di kiri, 4 tautan navigasi teks satu baris (*Kamus & Korpus*, *Suara & Teks*, *Kamera & Foto*, *Dialek & Video*) di tengah, dan tombol aksi cepat di kanan.
    - Metadata (kelas kata, asal dialek, nomor ayat) ditampilkan sebagai teks bersih dengan pemisah tipografis (`kb · Dialek Raya · Kej 1:1`), tanpa tumpukan *pill badges* berlebihan.

- **Interactive Feedback & Motion**:
  - Transisi halus $\le 200\text{ms}$ saat berpindah tab dan menyorot *bounding box* pada foto.
  - Indikator gelombang suara (*audio waveform*) saat merekam mikrofon atau memutar pelafalan TTS.
  - Sorotan kata interaktif (*hover/click word lookup*) pada ayat Alkitab dan hasil terjemahan untuk melihat arti kata secara instan.

---

## 3. Key Product Decisions & Trade-Offs

- **Decision 1: Ekstraksi & Indeks Korpus Sejajar dari PDF Alkitab di Server**
  - *Chosen Approach*: Mengekstrak dan mengindeks teks dari kedua file PDF yang dilampirkan (`/public/assets/aistudio/alkitab_simalungun_00d96e9c.pdf` dan `/public/assets/aistudio/alkitab_terjemahan_baru_37df3eea.pdf`) di sisi server (`server.ts`), dipadukan dengan basis data leksikon terstruktur Simalungun–Indonesia (mencakup kosakata Alkitab, percakapan harian, dan 4 dialek utama).
  - *Why*: Memastikan pencarian kata dan perbandingan ayat sejajar berjalan sangat cepat (instan), akurat sesuai dokumen PDF pengguna, sekaligus memberikan konteks nyata kepada model AI saat menerjemahkan kalimat baru.
  - *Alternatives Considered*: Mengirim seluruh file PDF 15MB ke model AI di setiap permintaan (terlalu lambat dan boros kuota) atau hanya mengandalkan pengetahuan umum model tanpa membaca PDF pengguna.

- **Decision 2: Arsitektur Penerjemah Suara & Pelafalan (Server-Side Gemini Audio & TTS)**
  - *Chosen Approach*: Menggunakan perekam audio browser (`MediaRecorder`) yang dikirim ke endpoint server `/api/voice-translate` menggunakan model transkripsi `gemini-3.5-transcribe` + penerjemah kontekstual `gemini-3.8-flash` (dengan kamus/korpus Simalungun sebagai konteks), serta endpoint `/api/tts` menggunakan `gemini-3.8-flash-lite-tts` untuk menghasilkan audio WAV pelafalan yang jernih.
  - *Why*: Web Speech API bawaan browser tidak memiliki dukungan Bahasa Simalungun dan sering mengubah kata Simalungun menjadi kata Indonesia yang salah. Dengan memproses audio melalui server Gemini yang dibekali leksikon Simalungun, kata-kata seperti *"Horja"*, *"Domma"*, *"Bani"*, *"Naibata"*, dan *"Diatei Tupa"* dapat dikenali dan dilafalkan dengan tepat.

- **Decision 3: Deteksi Teks Visual (Bounding Box) & Bedah Kosakata Foto**
  - *Chosen Approach*: Menggunakan input kamera langsung (`navigator.mediaDevices.getUserMedia`) dan unggah foto yang dikirim ke endpoint `/api/vision-translate` (`gemini-3.8-flash` dengan skema JSON terstruktur) yang mengembalikan koordinat kotak teks (`box_2d: [ymin, xmin, ymax, xmax]`), teks asli, terjemahan, serta daftar kosakata yang ditemukan di dalam gambar.
  - *Why*: Memenuhi preferensi pengguna untuk melihat penanda deteksi teks langsung di atas foto beserta rincian arti kosakata secara interaktif.

---

## 4. Technical Architecture & Data Strategy

### Architecture & Component Diagram

```
┌──────────────────────────────────────────────────────────────────────────────┐
│                        FRONTEND (React 19 + Tailwind v4)                     │
│                                                                              │
│  ┌────────────────────────────────────────────────────────────────────────┐  │
│  │ Top Bar: Pustaha Simalungun  |  Kamus · Suara · Kamera · Dialek & Video│  │
│  └────────────────────────────────────────────────────────────────────────┘  │
│          │                         │                        │                │
│          ▼                         ▼                        ▼                │
│  ┌──────────────────┐     ┌──────────────────┐     ┌──────────────────────┐  │
│  │ Kamus & Korpus   │     │ Penerjemah Suara │     │ Kamera & Foto OCR    │  │
│  │ - Pencarian Kata │     │ - Rekam Mikrofon │     │ - Live Camera Stream │  │
│  │ - Tabel 4 Dialek │     │ - Auto Translate │     │ - Upload Foto/Gambar │  │
│  │ - Ayat Sejajar   │     │ - Audio Waveform │     │ - Bounding Box Canvas│  │
│  │ - PDF Dual Viewer│     │ - TTS Pelafalan  │     │ - Rincian Kosakata   │  │
│  └────────┬─────────┘     └────────┬─────────┘     └──────────┬───────────┘  │
│           │                        │                          │              │
│           └────────────────────────┼──────────────────────────┘              │
│                                    ▼                                         │
│  ┌────────────────────────────────────────────────────────────────────────┐  │
│  │ Modul Konfirmasi Dialek, Doding Haleluya GKPS & Video Referensi        │  │
│  │ - Embed Video YouTube (GgE924WxwCU & Playlist Doding Haleluya)         │  │
│  │ - Verifikasi Kosakata & Umpasa dengan Google Search Grounding          │  │
│  └─────────────────────────────────┬──────────────────────────────────────┘  │
└────────────────────────────────────┼─────────────────────────────────────────┘
                                     │ HTTP / JSON (/api/*)
┌────────────────────────────────────▼─────────────────────────────────────────┐
│                       BACKEND (Express + server.ts)                          │
│                                                                              │
│  ┌─────────────────────────────────┐  ┌───────────────────────────────────┐  │
│  │ Corpus & Lexicon Engine         │  │ Gemini AI Service (@google/genai) │  │
│  │ - Parser PDF Alkitab Simalungun │  │ - /api/translate (Text + Dialect) │  │
│  │ - Parser PDF Alkitab TB         │  │ - /api/voice-translate (Audio)    │  │
│  │ - Parallel Verse Matcher        │  │ - /api/tts (WAV Speech Output)    │  │
│  │ - Simalungun Dialect Dictionary │  │ - /api/vision-translate (OCR Box) │  │
│  │   (Raya, Atas, Pasir, Jahe)     │  │ - /api/verify-dialect (Search+URL)│  │
│  └─────────────────────────────────┘  └───────────────────────────────────┘  │
└──────────────────────────────────────────────────────────────────────────────┘
```

### Data Model & State

1. **`DictionaryEntry` (Entri Kamus & Leksikon)**:
   - `id`, `simalungun` (kata utama), `indonesian` (arti utama), `partOfSpeech` (`kb`, `kk`, `ks`, `partikel`, `ungkapan`), `category` (`Alkitab / Pustaka`, `Percakapan Harian`, `Adat & Budaya`, `Doding Haleluya`).
   - `phonetic` (panduan baca dan tekanan bunyi sengau/glotal).
   - `dialects`: Objek perbandingan untuk `raya` (Dialek Raya), `silimakuta` (Simalungun Atas), `topiPasir` (Horisan/Purba), dan `jaheJahe` (Simalungun Bawah).
   - `dailyExamples`: Array contoh kalimat percakapan sehari-hari (`simalungun`, `indonesian`).
   - `biblicalReferences`: Array kutipan ayat sejajar (`book`, `chapter`, `verse`, `simalungunText`, `indonesianText`).
   - `verifiedSource`: Catatan konfirmasi dari PDF Alkitab, Doding Haleluya, atau referensi linguistik.

2. **`VisionTranslationResult` (Hasil Terjemahan Kamera/Foto)**:
   - `detectedRegions`: Array objek berisi `id`, `box_2d` (`[ymin, xmin, ymax, xmax]` dalam skala 0–1000), `sourceText`, `translatedText`, `detectedLanguage`.
   - `fullSourceText` & `fullTranslatedText`: Gabungan seluruh teks di gambar beserta terjemahannya.
   - `vocabularyBreakdown`: Array rincian kata penting yang ditemukan di dalam foto (`word`, `meaning`, `dialectNote`, `partOfSpeech`).

3. **`VoiceTranslationSession` (Sesi Terjemahan Suara)**:
   - `id`, `timestamp`, `sourceLang`, `targetLang`, `targetDialect`, `transcript`, `translation`, `phoneticGuide`, `wordBreakdown`, dan `audioWavBase64` untuk pemutaran ulang.

### Interactive Component & State Mapping

- **Pencarian & Filter Kamus**: Mendukung pencarian instan (*real-time search*) baik dari kata Simalungun maupun Indonesia, filter berdasarkan kategori (*Semua*, *Alkitab/Pustaka*, *Percakapan Harian*, *Adat & Umpasa*, *Doding Haleluya*), filter berdasarkan dialek, serta fitur **Tambah Kata / Kontribusi Catatan Dialek** yang tersimpan di penyimpanan lokal & server.
- **Konkordansi & Penampil PDF Sejajar**: Setiap kata menampilkan ayat sejajar dari PDF *Alkitab Simalungun* dan *Alkitab Terjemahan Baru*. Pengguna juga dapat membuka modal/panel **Bandingkan PDF Asli** untuk melihat dokumen `/assets/aistudio/alkitab_simalungun_00d96e9c.pdf` dan `/assets/aistudio/alkitab_terjemahan_baru_37df3eea.pdf` secara berdampingan.
- **Perekam Suara & Pemutar TTS**: Menggunakan `navigator.mediaDevices.getUserMedia({ audio: true })` dengan visualisasi gelombang suara, tombol mulai/berhenti rekam, transkripsi otomatis ke teks, terjemahan instan, dan tombol **Putar Suara (TTS)** yang memutar respons `audio/wav` dari `gemini-3.8-flash-lite-tts`.
- **Kamera Langsung & Kanvas Interaktif**: Menyediakan mode **Buka Kamera** (dengan pilihan kamera depan/belakang `facingMode: "environment"` dan tombol **Ambil Foto**) serta mode **Unggah Foto / Contoh Dokumen Simalungun**. Setelah diproses, kanvas menggambar kotak *bounding box* di atas foto; mengklik kotak mana pun akan memfokuskan kartu terjemahan dan rincian kosakata untuk bagian teks tersebut.
- **Verifikasi Dialek & Video Referensi**: Menampilkan pemutar tersemat (*embed*) untuk video YouTube referensi (`GgE924WxwCU` dan daftar putar `BxYupi9ukwM` / `PLdVjoWx7DO1E_vUKX8eHVC9u69MIReiMH`), daftar kosakata khas *Doding Haleluya GKPS*, serta fitur **Cek & Konfirmasi Kata via Web/AI** yang menggunakan `googleSearch` grounding untuk mencari bukti penggunaan kata dan dialek dari sumber eksternal.
