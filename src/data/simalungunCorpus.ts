export type PartOfSpeech = 'kb' | 'kk' | 'ks' | 'ket' | 'pron' | 'partikel' | 'ungkapan' | 'num';

export type LexiconCategory =
  | 'Alkitab / Pustaka'
  | 'Percakapan Harian'
  | 'Adat & Partuturan'
  | 'Doding Haleluya';

export interface DialectVariants {
  raya: string;
  silimakuta: string; // Simalungun Atas (Seribudolok / Purba)
  topiPasir: string;  // Horisan / Pinggir Danau Toba
  jaheJahe: string;   // Simalungun Bawah / Pesisir
  notes?: string;
}

export interface DailyExample {
  simalungun: string;
  indonesian: string;
  dialect: 'Umum / Raya' | 'Silimakuta (Atas)' | 'Topi Pasir' | 'Jahe-jahe (Bawah)' | 'Santai / Harian';
}

export interface BiblicalConcordance {
  reference: string;
  bookSimalungun: string;
  bookIndonesian: string;
  simalungunVerse: string;
  indonesianVerse: string;
}

export interface DictionaryEntry {
  id: string;
  simalungun: string;
  indonesian: string;
  synonymsSimalungun?: string[];
  synonymsIndonesian?: string[];
  partOfSpeech: PartOfSpeech;
  category: LexiconCategory;
  phonetic: string;
  dialects: DialectVariants;
  dailyExamples: DailyExample[];
  biblicalReferences: BiblicalConcordance[];
  verifiedSource: string;
}

export interface VideoReferenceItem {
  id: string;
  youtubeId: string;
  playlistId?: string;
  title: string;
  channelOrSource: string;
  category: 'Doding Haleluya GKPS' | 'Dialek & Percakapan' | 'Komedi & Sahap Santai';
  description: string;
  featuredVocabulary: {
    word: string;
    meaning: string;
    contextInVideo: string;
  }[];
}

export const VIDEO_REFERENCES: VideoReferenceItem[] = [
  {
    id: 'vid-komedi-1',
    youtubeId: 'GXQofRrxfYY',
    title: 'Komedi Simalungun — Logat & Sahap Santai Sehari-hari (GXQofRrxfYY)',
    channelOrSource: 'Komedi Simalungun (GXQofRrxfYY)',
    category: 'Komedi & Sahap Santai',
    description:
      'Referensi percakapan santai anak muda dan keluarga Simalungun yang kaya dengan partikel lisan alami (da, tene, ma, gelah, mando, dassa, hape) sehingga tidak terdengar kaku.',
    featuredVocabulary: [
      {
        word: 'Mahua do ho? / Aha do?',
        meaning: 'Kenapa kau? / Ada apa rupanya?',
        contextInVideo: 'Kalimat pembuka spontan saat bertanya keadaan teman secara akrab.',
      },
      {
        word: 'Mando dassa / Tong',
        meaning: 'Cuma itu-itu saja / Selalu terus',
        contextInVideo: 'Contoh: "Ai mando dassa horjamu tong!" (Itu-itu saja kerjamu terus!).',
      },
      {
        word: 'Hape / Gatni',
        meaning: 'Rupanya / Ternyata',
        contextInVideo: 'Contoh: "Ho do hape na roh ai, tene?" (Ternyata kau yang datang tadi, ya kan?).',
      },
      {
        word: 'Ulang pala sonai, da!',
        meaning: 'Janganlah sampai begitu, ya!',
        contextInVideo: 'Partikel "pala" (usah/sampai) + "da" (ya) membuat kalimat larangan terdengar akrab.',
      },
    ],
  },
  {
    id: 'vid-komedi-2',
    youtubeId: 'BAJjjw3qe7Q',
    title: 'Komedi Simalungun — Interaksi Huta & Humor Keluarga (BAJjjw3qe7Q)',
    channelOrSource: 'Komedi Simalungun (BAJjjw3qe7Q)',
    category: 'Komedi & Sahap Santai',
    description:
      'Dialog jenaka khas kehidupan kampung (huta) dan kedai (lopou) dengan kosakata sehari-hari yang lugas.',
    featuredVocabulary: [
      {
        word: 'Marbual-bual i lopou',
        meaning: 'Ngobrol santai / bercakap-cakap di warung',
        contextInVideo: 'Bukan berarti membual bohong, melainkan mengobrol santai bersama kawan.',
      },
      {
        word: 'Seng pala / Lang pala',
        meaning: 'Tidak usah / Gak perlu repot-repot',
        contextInVideo: 'Ungkapan halus menolak atau menyederhanakan sesuatu.',
      },
      {
        word: 'Girah / Podas ma!',
        meaning: 'Cepat-cepat / Lekaslah!',
        contextInVideo: 'Seruan sehari-hari saat mengajak kawan segera berangkat.',
      },
      {
        word: 'Loja tumang huahap',
        meaning: 'Capek kali kurasa',
        contextInVideo: 'Struktur alami Simalungun menggunakan "huahap" (kurasa), bukan terjemahan harfiah.',
      },
    ],
  },
  {
    id: 'vid-komedi-3',
    youtubeId: 'u3k7W8HMUbg',
    title: 'Komedi Simalungun dengan Subtitle — Belajar Kalimat Lisan (u3k7W8HMUbg)',
    channelOrSource: 'Komedi Simalungun Subtitle (u3k7W8HMUbg)',
    category: 'Komedi & Sahap Santai',
    description:
      'Video komedi Simalungun ber-subtitle untuk membandingkan teks terjemahan Bahasa Indonesia dengan pengucapan asli penutur jati.',
    featuredVocabulary: [
      {
        word: ' Sonaha / Naha do?',
        meaning: 'Bagaimana?',
        contextInVideo: 'Digunakan saat menanyakan kabar atau cara menyelesaikan sesuatu.',
      },
      {
        word: 'Lape / Leng',
        meaning: 'Belum',
        contextInVideo: 'Contoh: "Au lape mangan, ambia" (Aku belum makan, kawan).',
      },
      {
        word: 'Nantuari / Patar / Haduan',
        meaning: 'Kemarin / Besok / Lusa',
        contextInVideo: 'Keterangan waktu harian yang wajib dikuasai dalam obrolan.',
      },
      {
        word: 'Baya / Ambia',
        meaning: 'Panggilan akrab sesama perempuan (Baya) / sesama laki-laki (Ambia)',
        contextInVideo: 'Menunjukkan keakraban antar sahabat sebaya.',
      },
    ],
  },
  {
    id: 'vid-percakapan-1',
    youtubeId: 'WoY6YMRM-ho',
    title: 'Percakapan Bahasa Simalungun Sehari-hari — Bagian 1 (WoY6YMRM-ho)',
    channelOrSource: 'Pembelajaran Percakapan Simalungun (WoY6YMRM-ho)',
    category: 'Dialek & Percakapan',
    description:
      'Contoh dialog perkenalan, menanyakan marga (martarombo), tempat tinggal (huta), dan sapaan sopan menggunakan "Ham".',
    featuredVocabulary: [
      {
        word: 'Aha do margamu, Ham?',
        meaning: 'Apa marga Anda?',
        contextInVideo: 'Pertanyaan paling penting saat berkenalan agar tahu panggilan partuturan.',
      },
      {
        word: 'Hun ja do ham roh?',
        meaning: 'Dari mana Anda datang?',
        contextInVideo: 'Menanyakan asal kampung atau perjalanan lawan bicara.',
      },
      {
        word: 'I ja do rumahmu?',
        meaning: 'Di mana rumah Anda?',
        contextInVideo: 'Kata tanya tempat: i ja (di mana), hu ja (ke mana), hun ja (dari mana).',
      },
      {
        word: 'Torkis-torkis do hanami',
        meaning: 'Kami sehat-sehat saja',
        contextInVideo: 'Jawaban alami saat ditanya kabar kesehatan keluarga.',
      },
    ],
  },
  {
    id: 'vid-percakapan-2',
    youtubeId: '3ugtImal3NY',
    title: 'Percakapan Bahasa Simalungun Sehari-hari — Bagian 2 (3ugtImal3NY)',
    channelOrSource: 'Pembelajaran Percakapan Simalungun (3ugtImal3NY)',
    category: 'Dialek & Percakapan',
    description:
      'Latihan percakapan di rumah, pasar (tiga/pokan), dan ladang (juma) dengan intonasi yang tepat.',
    featuredVocabulary: [
      {
        word: 'Laho hu tiga mamboli lompah',
        meaning: 'Pergi ke pasar membeli sayur/lauk',
        contextInVideo: '"Tiga" atau "Pokan" berarti pasar/pekan, bukan angka tiga (tolu).',
      },
      {
        word: 'Sadiha hargani on, Inang?',
        meaning: 'Berapa harganya ini, Bu?',
        contextInVideo: 'Kalimat tawar-menawar di pasar tradisional Simalungun.',
      },
      {
        word: 'Eta mangan ma hita lobei',
        meaning: 'Ayo kita makan dulu',
        contextInVideo: 'Ajakan ramah tuan rumah kepada tamu.',
      },
      {
        word: 'Domma bosur au, diatei tupa',
        meaning: 'Saya sudah kenyang, terima kasih',
        contextInVideo: 'Ungkapan sopan setelah selesai makan bersama.',
      },
    ],
  },
  {
    id: 'vid-percakapan-3',
    youtubeId: 'AOaawIfZ8wk',
    title: 'Percakapan & Ungkapan Kasih Bahasa Simalungun (AOaawIfZ8wk)',
    channelOrSource: 'Pembelajaran Percakapan Simalungun (AOaawIfZ8wk)',
    category: 'Dialek & Percakapan',
    description:
      'Ungkapan perasaan, rindu (marsihol), kasih sayang (holong), dan nasihat orang tua (podah) dalam Bahasa Simalungun.',
    featuredVocabulary: [
      {
        word: 'Marsihol tumang au bamu, hasian',
        meaning: 'Aku rindu sekali padamu, sayang',
        contextInVideo: 'Ungkapan romantis yang lembut dan alami untuk pasangan.',
      },
      {
        word: 'Ulang ho margoni / mardandi',
        meaning: 'Janganlah kau merajuk / ngambek',
        contextInVideo: 'Kata "margoni" atau "mardandi" dipakai saat membujuk pacar/adik yang merajuk.',
      },
      {
        word: 'Jenges tumang sirommu',
        meaning: 'Manis/cantik sekali senyummu',
        contextInVideo: 'Pujian tulus menggunakan kata "jenges" (cantik/indah) dan "sirom" (senyum).',
      },
    ],
  },
  {
    id: 'vid-1',
    youtubeId: 'GgE924WxwCU',
    title: 'Referensi Kosakata, Pelafalan & Ungkapan Bahasa Simalungun (GgE924WxwCU)',
    channelOrSource: 'Referensi Audio-Visual Simalungun (GgE924WxwCU)',
    category: 'Dialek & Percakapan',
    description:
      'Referensi pelafalan autentik, intonasi kalimat, serta konfirmasi penggunaan kata sapaan dan kosakata sehari-hari masyarakat Simalungun.',
    featuredVocabulary: [
      {
        word: 'Horas / Diatei Tupa',
        meaning: 'Salam sejahtera / Terima kasih sebesar-besarnya',
        contextInVideo: 'Ungkapan pembuka dan apresiasi tulus dalam tutur sapa adat maupun harian.',
      },
      {
        word: 'Ham / Nasiam',
        meaning: 'Anda (sopan tunggal) / Kalian, Bapak-Ibu sekalian (jamak)',
        contextInVideo: 'Kata ganti orang kedua yang menunjukkan rasa hormat khas etika Simalungun.',
      },
    ],
  },
  {
    id: 'vid-2',
    youtubeId: 'BxYupi9ukwM',
    playlistId: 'PLdVjoWx7DO1E_vUKX8eHVC9u69MIReiMH',
    title: 'Koleksi Doding Haleluya GKPS & Kidung Rohani Simalungun',
    channelOrSource: 'Playlist Doding Haleluya GKPS (BxYupi9ukwM)',
    category: 'Doding Haleluya GKPS',
    description:
      'Daftar putar lagu rohani Doding Haleluya Gereja Kristen Protestan Simalungun (GKPS) yang melestarikan kosakata sastra, pujian, dan paralelisme Alkitab Simalungun.',
    featuredVocabulary: [
      {
        word: 'Doding / Mandoding',
        meaning: 'Nyanyian / Bernyanyi memuji',
        contextInVideo: 'Istilah utama untuk kidung pujian jemaat dalam tradisi GKPS.',
      },
      {
        word: 'Holong ni Atei',
        meaning: 'Kasih sayang / Kemurahan hati',
        contextInVideo: 'Frasa puitis untuk menggambarkan kasih setia Tuhan (Naibata) kepada manusia.',
      },
    ],
  },
];

// Built-in Offline Phrasebook for 0ms Instant Natural Simalungun Translation (Anti-Kaku / Anti-ChatGPT)
export interface NaturalPhrasePair {
  indonesian: string;
  simalungunNatural: string;
  simalungunPolite: string;
  phonetic: string;
  note: string;
}

export const NATURAL_PHRASEBOOK: NaturalPhrasePair[] = [
  {
    indonesian: 'kamu lagi ngapain?',
    simalungunNatural: 'Marhua do ho in, baya?',
    simalungunPolite: 'Aha do na ihorjahon ham sonari?',
    phonetic: 'mar-hu-a do ho in / a-ha do na i-hor-ja-hon ham so-na-ri',
    note: 'Jangan terjemahkan kata per kata ("kamu sedang buat apa"). Orang Simalungun memakai "Marhua do ho/ham?" atau "Sodang mardiha ho?".',
  },
  {
    indonesian: 'udah makan belum?',
    simalungunNatural: 'Domma mangan ho, tene? Atap lape?',
    simalungunPolite: 'Domma mangan ham?',
    phonetic: 'dom-ma ma-ngan ham',
    note: '"Domma" = sudah, "lape" = belum. Kepada pacar atau orang yang disayangi, menyapa dengan "ham" justru terdengar jauh lebih lembut dan romantis di Simalungun.',
  },
  {
    indonesian: 'aku kangen banget sama kamu',
    simalungunNatural: 'Marsihol tumang au bamu, hasian.',
    simalungunPolite: 'Marsihol tumang uhurhu bamu, Ham.',
    phonetic: 'mar-si-hol tu-mang au ba-mu ha-si-an',
    note: '"Marsihol" = rindu/kangen, "tumang" = banget/sekali, "bamu" = sama kamu/kepadamu, "hasian" = kesayangan.',
  },
  {
    indonesian: 'jangan marah-marah terus ya sayang',
    simalungunNatural: 'Ulang ma manggila-gila tong ham, da, hasian!',
    simalungunPolite: 'Ulang pala marimas ham tongtong, da.',
    phonetic: 'u-lang ma mang-gi-la gi-la tong ham da',
    note: 'Dalam Bahasa Simalungun (Kamus Balai Bahasa hal. 65), "manggila" artinya "marah" (bukan gila!). Sedangkan "merajuk/ngambek" adalah "margoni" atau "mardandi".',
  },
  {
    indonesian: 'jangan ngambek dong',
    simalungunNatural: 'Ulang ho margoni da! / Ulang mardandi ma!',
    simalungunPolite: 'Ulang pala margoni ham, da.',
    phonetic: 'u-lang ho mar-go-ni da',
    note: '"Goni / margoni" (hal. 69) atau "dandi / mardandi" (hal. 40) berarti merajuk/ngambek.',
  },
  {
    indonesian: 'capek banget aku hari ini',
    simalungunNatural: 'Loja tumang huahap sadari on, bah!',
    simalungunPolite: 'Loja tumang iahap angkula sadari on.',
    phonetic: 'lo-ja tu-mang hu-a-hap sa-da-ri on',
    note: 'Gunakan "loja tumang huahap" (lelah sekali kurasa) agar terdengar asli Simalungun.',
  },
  {
    indonesian: 'mau pergi ke mana?',
    simalungunNatural: 'Laho huja do ho in?',
    simalungunPolite: 'Na laho huja do ham?',
    phonetic: 'na la-ho hu-ja do ham',
    note: '"Laho" = pergi/mau, "huja" = ke mana.',
  },
  {
    indonesian: 'terima kasih banyak ya',
    simalungunNatural: 'Diatei tupa tumang ma da!',
    simalungunPolite: 'Diatei tupa ma bamu / Bujur tumang.',
    phonetic: 'di-a-tei tu-pa tu-mang ma da',
    note: '"Diatei tupa" adalah ungkapan terima kasih paling autentik di Simalungun.',
  },
  {
    indonesian: 'aku sayang sama kamu',
    simalungunNatural: 'Holong do uhurhu bamu, hasian.',
    simalungunPolite: 'Banggal do holong ni atei-hu bamu.',
    phonetic: 'ho-long do u-hur-hu ba-mu',
    note: 'Ungkapan alami Simalungun menyertakan kata "uhur" (hati) atau "atei" (hati): "Holong do uhurhu bamu".',
  },
  {
    indonesian: 'aku gak tahu soal itu',
    simalungunNatural: 'Lang hubotoh pasal ai, bah!',
    simalungunPolite: 'Seng hubotoh pasal ai.',
    phonetic: 'lang hu-bo-toh pa-sal ai',
    note: '"Lang hubotoh" / "Seng hubotoh" = aku tidak tahu.',
  },
  {
    indonesian: 'ayo kita jalan-jalan',
    simalungunNatural: 'Eta mardalan-dalan ma hita! / Eta marsulelet!',
    simalungunPolite: 'Eta laho madou-adou ma hita.',
    phonetic: 'e-ta mar-da-lan da-lan ma hi-ta',
    note: 'Dalam Kamus Simalungun, jalan-jalan santai disebut "mardalan-dalan", "madou-adou" (hal. 2), atau "marsulelet" (hal. 230).',
  },
];

export const SIMALUNGUN_LEXICON: DictionaryEntry[] = [
  // --- ENTRI INTI ALKITAB, PERCAKAPAN & KAMUS BALAI BAHASA (2015/2016) ---
  {
    id: 'lex-naibata',
    simalungun: 'Naibata',
    indonesian: 'Allah / Tuhan',
    synonymsSimalungun: ['Tuhan', 'Jahowa', 'Sitompa'],
    synonymsIndonesian: ['Allah', 'Tuhan Yang Maha Kuasa'],
    partOfSpeech: 'kb',
    category: 'Alkitab / Pustaka',
    phonetic: 'nay-ba-ta',
    dialects: {
      raya: 'Naibata',
      silimakuta: 'Naibata / Dibata',
      topiPasir: 'Naibata',
      jaheJahe: 'Naibata',
      notes: 'Tercatat di Kamus Balai Bahasa (2016) hal. 158: "naibata [naybata] n Allah; Tuhan; marnaibata v bertuhan".',
    },
    dailyExamples: [
      {
        simalungun: 'Sai ipasu-pasu Naibata ma horjanta ari on, da!',
        indonesian: 'Kiranya Tuhan memberkati pekerjaan kita hari ini, ya!',
        dialect: 'Umum / Raya',
      },
    ],
    biblicalReferences: [
      {
        reference: '1 Musa 1:1 (Kejadian 1:1)',
        bookSimalungun: '1 Musa',
        bookIndonesian: 'Kejadian',
        simalungunVerse: 'Bani mula ni mulani itompa Naibata ma langit pakon tanoh.',
        indonesianVerse: 'Pada mulanya Allah menciptakan langit dan bumi.',
      },
    ],
    verifiedSource: 'Kamus Bahasa Simalungun–Indonesia (2016) hal. 158 & Bibel Simalungun 2007 hal. 1',
  },
  {
    id: 'lex-holong',
    simalungun: 'Holong',
    indonesian: 'Sayang; Kasih sayang; Cinta',
    synonymsSimalungun: ['Haholongan (kekasih)', 'Mangholongi (menyayangi)', 'Parholong (penyayang)'],
    synonymsIndonesian: ['Kasih', 'Sayang', 'Cinta'],
    partOfSpeech: 'ks',
    category: 'Percakapan Harian',
    phonetic: 'hO-lOng',
    dialects: {
      raya: 'Holong',
      silimakuta: 'Holong / Keleng',
      topiPasir: 'Holong',
      jaheJahe: 'Holong',
      notes: 'Kamus Balai Bahasa (2016) hal. 91: "holong [hOlOg] a sayang; kasih sayang; haholongan n kesayangan, kekasih".',
    },
    dailyExamples: [
      {
        simalungun: 'Holong tumang do uhurhu bamu, hasian.',
        indonesian: 'Sayang sekali hatiku padamu, kekasihku.',
        dialect: 'Santai / Harian',
      },
    ],
    biblicalReferences: [
      {
        reference: '1 Korint 13:13 (1 Korintus 13:13)',
        bookSimalungun: '1 Korint',
        bookIndonesian: '1 Korintus',
        simalungunVerse: 'Ase tolu do na totap, ai ma haporsayaon, pangarapan ampa holong, tapi holong ai do sibanggalan.',
        indonesianVerse: 'Demikianlah tinggal ketiga hal ini, yaitu iman, pengharapan dan kasih, dan yang paling besar di antaranya ialah kasih.',
      },
    ],
    verifiedSource: 'Kamus Bahasa Simalungun–Indonesia (2016) hal. 91 & Bibel Simalungun 2007 hal. 4003',
  },
  {
    id: 'lex-diatei-tupa',
    simalungun: 'Diatei tupa',
    indonesian: 'Terima kasih; Rasa syukur',
    synonymsSimalungun: ['Tupa', 'Bujur'],
    synonymsIndonesian: ['Terima kasih banyak', 'Syukur'],
    partOfSpeech: 'ungkapan',
    category: 'Percakapan Harian',
    phonetic: 'di-a-tEy tu-pa',
    dialects: {
      raya: 'Diatei tupa',
      silimakuta: 'Diatei tupa / Bujur',
      topiPasir: 'Diatei tupa',
      jaheJahe: 'Diatei tupa',
      notes: 'Kamus Balai Bahasa (2016) hal. 45 & 254: "diatei [diatEy] v beruntung; diatei tupa n terima kasih; rasa syukur" dan "tupa adv bagus; mujur; terima kasih: tupa ma roh nasiam".',
    },
    dailyExamples: [
      {
        simalungun: 'Tupa ma roh nasiam hu jabu nami on, da!',
        indonesian: 'Terima kasih kalian sudah datang ke rumah kami ini, ya!',
        dialect: 'Umum / Raya',
      },
    ],
    biblicalReferences: [
      {
        reference: 'Psalmen 100:4 (Mazmur 100:4)',
        bookSimalungun: 'Psalmen',
        bookIndonesian: 'Mazmur',
        simalungunVerse: 'Masuki nasiam ma horbangan-Ni marhitei hatarimakasihon, sonai alaman-Ni marhitei puji-pujian. Martarima kasih ma nasiam Bani, puji nasiam ma goran-Ni!',
        indonesianVerse: 'Masuklah melalui pintu gerbang-Nya dengan nyanyian syukur, ke dalam pelataran-Nya dengan puji-pujian, bersyukurlah kepada-Nya dan pujilah nama-Nya!',
      },
    ],
    verifiedSource: 'Kamus Bahasa Simalungun–Indonesia (2016) hal. 45 & 254 & Bibel Simalungun 2007',
  },
  {
    id: 'lex-manggila',
    simalungun: 'Gila / Manggila',
    indonesian: 'Marah / Memarahi (Bukan "gila" hilang akal!)',
    synonymsSimalungun: ['Rimas / Marimas', 'Muruh', 'Utap'],
    synonymsIndonesian: ['Marah', 'Gusar', 'Memarahi'],
    partOfSpeech: 'kk',
    category: 'Percakapan Harian',
    phonetic: 'gi-la / mang-gi-la',
    dialects: {
      raya: 'Manggila / Marimas',
      silimakuta: 'Manggila / Merawa',
      topiPasir: 'Manggila / Muruk',
      jaheJahe: 'Manggila',
      notes: 'PENTING (Sering salah diterjemahkan AI biasa): Dalam Kamus Simalungun hal. 65, "gila / manggila" artinya MARAH ("ulang ho manggila!" = jangan kamu marah!). Sedangkan "gila (hilang akal)" dalam bahasa Simalungun adalah "podou", "hawar", "ratou", atau "pual-pualon".',
    },
    dailyExamples: [
      {
        simalungun: 'Ulang ho manggila bangku, da, hasian!',
        indonesian: 'Janganlah kamu marah padaku, ya, sayang!',
        dialect: 'Santai / Harian',
      },
    ],
    biblicalReferences: [
      {
        reference: 'Podah 15:1 (Amsal 15:1)',
        bookSimalungun: 'Podah',
        bookIndonesian: 'Amsal',
        simalungunVerse: 'Balos na lamlam pahombun ringis, tapi hata na kasar mamuhoi gila.',
        indonesianVerse: 'Jawaban yang lemah lembut meredakan kegeraman, tetapi perkataan yang pedas membangkitkan marah.',
      },
    ],
    verifiedSource: 'Kamus Bahasa Simalungun–Indonesia (2016) hal. 65 & Bibel Simalungun 2007 (Podah 15:1)',
  },
  {
    id: 'lex-tiga',
    simalungun: 'Tiga / Martiga',
    indonesian: 'Pasar / Pekan (Bukan angka 3!)',
    synonymsSimalungun: ['Pokan', 'Partiga-tiga (pedagang)'],
    synonymsIndonesian: ['Pasar', 'Pekan', 'Berbelanja ke pasar'],
    partOfSpeech: 'kb',
    category: 'Percakapan Harian',
    phonetic: 'ti-ga',
    dialects: {
      raya: 'Tiga / Pokan',
      silimakuta: 'Tiga',
      topiPasir: 'Tiga / Onan',
      jaheJahe: 'Tiga / Pajak',
      notes: 'PENTING: Dalam Bahasa Simalungun (hal. 243), "tiga" artinya PASAR/PEKAN ("laho hu tiga" = pergi ke pasar). Sedangkan angka 3 adalah "tolu" (hal. 247).',
    },
    dailyExamples: [
      {
        simalungun: 'Laho hu tiga do inang mamboli lompah.',
        indonesian: 'Ibu pergi ke pasar membeli sayur/lauk.',
        dialect: 'Umum / Raya',
      },
    ],
    biblicalReferences: [],
    verifiedSource: 'Kamus Bahasa Simalungun–Indonesia (2016) hal. 243',
  },
  {
    id: 'lex-bujur',
    simalungun: 'Bujur',
    indonesian: 'Baik; Benar; Jujur; Rajin (Bukan bujur sangkar!)',
    synonymsSimalungun: ['Dear', 'Pintor', 'Habujuron (kebaikan/ketulusan)'],
    synonymsIndonesian: ['Baik hati', 'Jujur', 'Tulus', 'Terima kasih (Silimakuta)'],
    partOfSpeech: 'ks',
    category: 'Percakapan Harian',
    phonetic: 'bu-jur',
    dialects: {
      raya: 'Bujur (Baik/Jujur)',
      silimakuta: 'Bujur (Baik / Terima kasih)',
      topiPasir: 'Bujur / Burju',
      jaheJahe: 'Bujur',
      notes: 'Kamus Balai Bahasa (2016) hal. 34: "bujur [bujur] Ry a baik; benar; tarbujur a agak baik".',
    },
    dailyExamples: [
      {
        simalungun: 'Bujur-bujur ma ho marlajar i kota ai, da!',
        indonesian: 'Baik-baik/rajin-rajinlah kau belajar di kota itu, ya!',
        dialect: 'Santai / Harian',
      },
    ],
    biblicalReferences: [
      {
        reference: 'Galatia 5:22',
        bookSimalungun: 'Galatia',
        bookIndonesian: 'Galatia',
        simalungunVerse: 'Tapi buah ni Tonduy ai ma: Holong ni atei, malas ni uhur, damei, lumbang ni uhur, habasaron, habujuron, haporsayaon.',
        indonesianVerse: 'Tetapi buah Roh ialah: kasih, sukacita, damai sejahtera, kesabaran, kemurahan, kebaikan, kesetiaan.',
      },
    ],
    verifiedSource: 'Kamus Bahasa Simalungun–Indonesia (2016) hal. 34',
  },
  {
    id: 'lex-jenges',
    simalungun: 'Jenges',
    indonesian: 'Cantik; Indah; Bagus',
    synonymsSimalungun: ['Jagiah', 'Gandal', 'Laing', 'Dear'],
    synonymsIndonesian: ['Cantik', 'Manis', 'Indah', 'Elok'],
    partOfSpeech: 'ks',
    category: 'Percakapan Harian',
    phonetic: 'jE-ngEs',
    dialects: {
      raya: 'Jenges',
      silimakuta: 'Jenges / Mejile',
      topiPasir: 'Jenges / Bagak',
      jaheJahe: 'Jenges',
      notes: 'Kamus Balai Bahasa (2016) hal. 111: "jenges [jEgEs] a cantik; pajengeshon v mencantikkan; sijengesan n yang paling cantik".',
    },
    dailyExamples: [
      {
        simalungun: 'Jenges tumang ham marbaju kebaya on, tene!',
        indonesian: 'Cantik sekali kamu memakai baju kebaya ini, ya kan!',
        dialect: 'Santai / Harian',
      },
    ],
    biblicalReferences: [],
    verifiedSource: 'Kamus Bahasa Simalungun–Indonesia (2016) hal. 111',
  },
  {
    id: 'lex-sihol',
    simalungun: 'Sihol / Marsihol',
    indonesian: 'Rindu; Kangen; Ingin',
    synonymsSimalungun: ['Hasiholan (kekasih tumpuan rindu)', 'Masihol'],
    synonymsIndonesian: ['Rindu', 'Kangen', 'Ingin sekali'],
    partOfSpeech: 'ks',
    category: 'Percakapan Harian',
    phonetic: 'si-hOl / mar-si-hOl',
    dialects: {
      raya: 'Sihol / Marsihol',
      silimakuta: 'Sihol / Tedeh',
      topiPasir: 'Sihol / Masihol',
      jaheJahe: 'Sihol',
      notes: 'Kamus Balai Bahasa (2016) hal. 215: "sihol [sihOl], marsihol a rindu; hasiholan n tumpuan rindu; kesayangan; kekasih".',
    },
    dailyExamples: [
      {
        simalungun: 'Isah uhurhu halani masihol bamu.',
        indonesian: 'Gelisah hatiku karena rindu padamu.',
        dialect: 'Santai / Harian',
      },
    ],
    biblicalReferences: [],
    verifiedSource: 'Kamus Bahasa Simalungun–Indonesia (2016) hal. 215',
  },
  {
    id: 'lex-margoni',
    simalungun: 'Goni / Margoni',
    indonesian: 'Merajuk; Ngambek',
    synonymsSimalungun: ['Mardandi', 'Pelu', 'Golut'],
    synonymsIndonesian: ['Merajuk', 'Ngambek', 'Cemberut'],
    partOfSpeech: 'kk',
    category: 'Percakapan Harian',
    phonetic: 'mar-gO-ni',
    dialects: {
      raya: 'Margoni / Mardandi',
      silimakuta: 'Margoni / Merawa',
      topiPasir: 'Mardandi',
      jaheJahe: 'Margoni',
      notes: 'Kamus Balai Bahasa (2016) hal. 40 & 69: "goni [gOni] Ry v rajuk; margoni v merajuk; pargoni n perajuk" dan "dandi, mardandi v merajuk".',
    },
    dailyExamples: [
      {
        simalungun: 'Ulang ho urah margoni da, anju ma anggimu!',
        indonesian: 'Janganlah kamu gampang ngambek ya, bujuklah adikmu!',
        dialect: 'Santai / Harian',
      },
    ],
    biblicalReferences: [],
    verifiedSource: 'Kamus Bahasa Simalungun–Indonesia (2016) hal. 40 & 69',
  },
  {
    id: 'lex-loja',
    simalungun: 'Loja',
    indonesian: 'Lelah; Letih; Capek; Penat',
    synonymsSimalungun: ['Aldak', 'Rongkih', 'Lotih', 'Torik'],
    synonymsIndonesian: ['Capek', 'Lelah', 'Letih'],
    partOfSpeech: 'ks',
    category: 'Percakapan Harian',
    phonetic: 'lO-ja',
    dialects: {
      raya: 'Loja',
      silimakuta: 'Loja / Latih',
      topiPasir: 'Loja',
      jaheJahe: 'Loja',
      notes: 'Kamus Balai Bahasa (2016) hal. 135: "loja [lOja] a lelah; letih; penat; halojaan n kelelahan; lojatu a terlalu lelah".',
    },
    dailyExamples: [
      {
        simalungun: 'Marsaran ma anggo domma loja ham.',
        indonesian: 'Beristirahatlah kalau kamu sudah capek.',
        dialect: 'Santai / Harian',
      },
    ],
    biblicalReferences: [
      {
        reference: 'Mateus 11:28 (Matius 11:28)',
        bookSimalungun: 'Mateus',
        bookIndonesian: 'Matius',
        simalungunVerse: 'Roh ma nasiam hu Bangku, nasiam na loja anjaha na boratan, ase Hupasonang nasiam.',
        indonesianVerse: 'Marilah kepada-Ku, semua yang letih lesu dan berbeban berat, Aku akan memberi kelegaan kepadamu.',
      },
    ],
    verifiedSource: 'Kamus Bahasa Simalungun–Indonesia (2016) hal. 135 & Bibel Simalungun 2007 (Mateus 11:28)',
  },
  {
    id: 'lex-lohei',
    simalungun: 'Lohei / Loheian',
    indonesian: 'Lapar; Kelaparan',
    synonymsSimalungun: ['Hodar', 'Gajur', 'Ipus'],
    synonymsIndonesian: ['Lapar', 'Perut keroncongan'],
    partOfSpeech: 'ks',
    category: 'Percakapan Harian',
    phonetic: 'lO-hEy / lO-he-yan',
    dialects: {
      raya: 'Loheian / Hodar',
      silimakuta: 'Loheian / Lihe',
      topiPasir: 'Loheian / Male',
      jaheJahe: 'Loheian',
      notes: 'Kamus Balai Bahasa (2016) hal. 135: "lohei [lOhEy] a lapar; loheian v menderita lapar; малоhei a merasa lapar".',
    },
    dailyExamples: [
      {
        simalungun: 'Eta mangan ma hita, domma loheian boltokhu!',
        indonesian: 'Ayo kita makan, sudah lapar perutku!',
        dialect: 'Santai / Harian',
      },
    ],
    biblicalReferences: [],
    verifiedSource: 'Kamus Bahasa Simalungun–Indonesia (2016) hal. 135',
  },
  {
    id: 'lex-horahan',
    simalungun: 'Horah / Horahan',
    indonesian: 'Kering / Haus; Dahaga',
    synonymsSimalungun: ['Horah-horahan'],
    synonymsIndonesian: ['Haus', 'Dahaga', 'Kering'],
    partOfSpeech: 'ks',
    category: 'Percakapan Harian',
    phonetic: 'hO-rah / hO-ra-han',
    dialects: {
      raya: 'Horahan',
      silimakuta: 'Horahan / Muas',
      topiPasir: 'Horahan / Mauas',
      jaheJahe: 'Horahan',
      notes: 'Kamus Balai Bahasa (2016) hal. 93: "horah [hOrah] Ry Hg a kering; horahan a haus; dahaga".',
    },
    dailyExamples: [
      {
        simalungun: 'Buathon bangku bah sotik, horahan tumang au.',
        indonesian: 'Ambilkan sedikit air untukku, haus sekali aku.',
        dialect: 'Santai / Harian',
      },
    ],
    biblicalReferences: [
      {
        reference: 'Johannes 4:14 (Yohanes 4:14)',
        bookSimalungun: 'Johannes',
        bookIndonesian: 'Yohanes',
        simalungunVerse: 'tapi na manginum bah sibereon-Kai, seng horahan be ia sadokah ni dokahni. Ia bah sibereon-Kai gabe bah tubuh do ai ibagas dirini, na marjullak-jullak ronsi hagoluhan sisadokah ni dokahni.',
        indonesianVerse: 'tetapi barangsiapa minum air yang akan Kuberikan kepadanya, ia tidak akan haus untuk selama-lamanya. Sebaliknya air yang akan Kuberikan kepadanya, akan menjadi mata air di dalam dirinya, yang terus-menerus memancar sampai kepada hidup yang kekal.',
      },
    ],
    verifiedSource: 'Kamus Bahasa Simalungun–Indonesia (2016) hal. 93 & Bibel Simalungun 2007 hal. 3684',
  },
  {
    id: 'lex-bosur',
    simalungun: 'Bosur',
    indonesian: 'Kenyang',
    synonymsSimalungun: ['Gojong', 'Egab'],
    synonymsIndonesian: ['Kenyang', 'Puas makan'],
    partOfSpeech: 'ks',
    category: 'Percakapan Harian',
    phonetic: 'bO-sur',
    dialects: {
      raya: 'Bosur',
      silimakuta: 'Bosur / Besur',
      topiPasir: 'Bosur',
      jaheJahe: 'Bosur',
      notes: 'Kamus Balai Bahasa (2016) hal. 33: "bosur [bOsur] Ry a kenyang; bosuri v makan sampai kenyang".',
    },
    dailyExamples: [
      {
        simalungun: 'Tambahi indahanmu ase bosur ho!',
        indonesian: 'Tambahi nasimu biar kenyang kau!',
        dialect: 'Santai / Harian',
      },
    ],
    biblicalReferences: [],
    verifiedSource: 'Kamus Bahasa Simalungun–Indonesia (2016) hal. 33',
  },
  {
    id: 'lex-taboh',
    simalungun: 'Taboh',
    indonesian: 'Enak; Lezat; Sedap',
    synonymsSimalungun: ['Mantin', 'Sodap', 'Lokut', 'Helpu'],
    synonymsIndonesian: ['Enak', 'Lezat', 'Gurih', 'Sedap'],
    partOfSpeech: 'ks',
    category: 'Percakapan Harian',
    phonetic: 'ta-bOh',
    dialects: {
      raya: 'Taboh / Mantin / Sodap',
      silimakuta: 'Taboh / Ntabeh',
      topiPasir: 'Taboh',
      jaheJahe: 'Taboh / Sodap',
      notes: 'Kamus Balai Bahasa (2016) hal. 233 & 145: "taboh [tabOh] a enak: gulei na iboanni nantuari taboh tumang" & "mantin a lezat; sedap".',
    },
    dailyExamples: [
      {
        simalungun: 'Taboh tumang dayok binatur ni inang on, tene!',
        indonesian: 'Enak sekali ayam naniura/batur buatan ibu ini, ya kan!',
        dialect: 'Santai / Harian',
      },
    ],
    biblicalReferences: [],
    verifiedSource: 'Kamus Bahasa Simalungun–Indonesia (2016) hal. 233',
  },
  {
    id: 'lex-lompah',
    simalungun: 'Lompah',
    indonesian: 'Sayur; Lauk-pauk; Masakan',
    synonymsSimalungun: ['Lowoh (sayur berkuah)', 'Gulei (lauk daging)'],
    synonymsIndonesian: ['Sayur', 'Lauk', 'Hidangan'],
    partOfSpeech: 'kb',
    category: 'Percakapan Harian',
    phonetic: 'lOm-pah',
    dialects: {
      raya: 'Lompah / Lowoh',
      silimakuta: 'Lompah /ulen',
      topiPasir: 'Lompah / Ingkau',
      jaheJahe: 'Lompah',
      notes: 'Kamus Balai Bahasa (2016) hal. 136: "lompah [lOppah] n 1 sayur; 2 lauk: indahan pakon lompah nasi dan lauk; malompah v memasak".',
    },
    dailyExamples: [
      {
        simalungun: 'Aha do lompahta bodari on, Inang?',
        indonesian: 'Apa sayur/lauk kita malam ini, Bu?',
        dialect: 'Santai / Harian',
      },
    ],
    biblicalReferences: [],
    verifiedSource: 'Kamus Bahasa Simalungun–Indonesia (2016) hal. 136',
  },
  {
    id: 'lex-tene',
    simalungun: 'Tene / Da',
    indonesian: 'Ya kan?; Kan?; Ya! (Partikel Keakraban Lisan)',
    synonymsSimalungun: ['Atene', 'Gelah', 'Mando', 'Dassa'],
    synonymsIndonesian: ['Ya kan', 'Kan', 'Dong', 'Lah'],
    partOfSpeech: 'partikel',
    category: 'Percakapan Harian',
    phonetic: 'tE-nE / da',
    dialects: {
      raya: 'Tene / Da',
      silimakuta: 'Tene / Ari',
      topiPasir: 'Tene / Ate',
      jaheJahe: 'Tene / Da',
      notes: 'Rahasia agar bahasa Simalungun tidak terdengar kaku seperti robot/ChatGPT adalah menyisipkan partikel penegas lisan: "da" (ya!), "tene" (ya kan?), "ma" (-lah), "mando dassa" (cuma itu saja), dan "hape" (ternyata).',
    },
    dailyExamples: [
      {
        simalungun: 'Ho do hape na roh ai nokkan, tene? Hundul ma lobei, da!',
        indonesian: 'Ternyata kamu yang datang tadi, ya kan? Duduklah dulu, ya!',
        dialect: 'Santai / Harian',
      },
    ],
    biblicalReferences: [],
    verifiedSource: 'Kamus Bahasa Simalungun–Indonesia (2016) hal. 38 & 81',
  },
  {
    id: 'lex-ham',
    simalungun: 'Ham',
    indonesian: 'Kamu / Anda (Sopan & Lembut)',
    synonymsSimalungun: ['Ho (sebaya/ke adik)', 'Nasiam (kalian sopan)'],
    synonymsIndonesian: ['Kamu', 'Anda', 'Engkau'],
    partOfSpeech: 'pron',
    category: 'Percakapan Harian',
    phonetic: 'ham',
    dialects: {
      raya: 'Ham',
      silimakuta: 'Ham / Kam',
      topiPasir: 'Ham',
      jaheJahe: 'Ham',
      notes: 'Kamus Balai Bahasa (2016) hal. 79: "ham [ham] pron kamu; kau; anda: laho hu ja do ham in?". Menyapa pacar/pasangan dengan "Ham" adalah ciri khas kelembutan tutur Simalungun.',
    },
    dailyExamples: [
      {
        simalungun: 'Domma mangan ham, hasian?',
        indonesian: 'Sudah makan kamu, sayang?',
        dialect: 'Santai / Harian',
      },
    ],
    biblicalReferences: [
      {
        reference: 'Mazmur 23:4 (Psalmen 23:4)',
        bookSimalungun: 'Psalmen',
        bookIndonesian: 'Mazmur',
        simalungunVerse: 'Ai Ham do hasomanku, tungkot-Mu pakon lonsing-Mu do na mangapohi ahu.',
        indonesianVerse: 'Sebab Engkau besertaku; gada-Mu dan tongkat-Mu, itulah yang menghibur aku.',
      },
    ],
    verifiedSource: 'Kamus Bahasa Simalungun–Indonesia (2016) hal. 79',
  },
  {
    id: 'lex-nasiam',
    simalungun: 'Nasiam (Nansiam)',
    indonesian: 'Kalian / Bapak-Ibu sekalian (Jamak Sopan)',
    synonymsSimalungun: ['Hanima'],
    synonymsIndonesian: ['Kalian', 'Saudara-saudara sekalian'],
    partOfSpeech: 'pron',
    category: 'Alkitab / Pustaka',
    phonetic: 'na-si-am',
    dialects: {
      raya: 'Nasiam / Hanima',
      silimakuta: 'Nasiam / Hanima',
      topiPasir: 'Nasiam',
      jaheJahe: 'Nasiam',
      notes: 'Kamus Balai Bahasa (2016) hal. 159: "nansiam [nas:iyam] pron kalian: lau huja nansiam?".',
    },
    dailyExamples: [
      {
        simalungun: 'Horas ma bani nasiam haganupan!',
        indonesian: 'Salam sejahtera bagi kalian semuanya!',
        dialect: 'Umum / Raya',
      },
    ],
    biblicalReferences: [
      {
        reference: 'Mateus 5:14 (Matius 5:14)',
        bookSimalungun: 'Mateus',
        bookIndonesian: 'Matius',
        simalungunVerse: 'Hanima do panondang ni dunia on! Seng boi ponop huta na i atas dolog.',
        indonesianVerse: 'Kamu adalah terang dunia. Kota yang terletak di atas gunung tidak mungkin tersembunyi.',
      },
    ],
    verifiedSource: 'Kamus Bahasa Simalungun–Indonesia (2016) hal. 159 & Bibel Simalungun 2007 hal. 3307',
  },
  {
    id: 'lex-uhur',
    simalungun: 'Uhur',
    indonesian: 'Hati; Pikiran; Perasaan',
    synonymsSimalungun: ['Atei-atei', 'Pingkiran'],
    synonymsIndonesian: ['Hati', 'Batin', 'Pikiran'],
    partOfSpeech: 'kb',
    category: 'Alkitab / Pustaka',
    phonetic: 'u-hur',
    dialects: {
      raya: 'Uhur',
      silimakuta: 'Uhur',
      topiPasir: 'Uhur / Roha',
      jaheJahe: 'Uhur',
      notes: 'Kamus Balai Bahasa (2016) hal. 257: "uhur [uhur] n hati; pikiran: marmalas uhurma namin nasiam bersuka hatilah kiranya kalian".',
    },
    dailyExamples: [
      {
        simalungun: 'Sonang tumang uhurhu pajumpah pakon ham.',
        indonesian: 'Senang sekali hatiku berjumpa denganmu.',
        dialect: 'Santai / Harian',
      },
    ],
    biblicalReferences: [
      {
        reference: 'Podah 4:23 (Amsal 4:23)',
        bookSimalungun: 'Podah',
        bookIndonesian: 'Amsal',
        simalungunVerse: 'Tang siporlunan, jaga ma uhurmu, ai hunjai do luar hagoluhan.',
        indonesianVerse: 'Jagalah hatimu dengan segala kewaspadaan, karena dari situlah terpancar kehidupan.',
      },
    ],
    verifiedSource: 'Kamus Bahasa Simalungun–Indonesia (2016) hal. 257 & Bibel Simalungun 2007 (Podah 4:23)',
  },
  {
    id: 'lex-partuturan',
    simalungun: 'Tutur / Partuturan',
    indonesian: 'Pertuturan; Silsilah Sapaan Kekerabatan Adat',
    synonymsSimalungun: ['Martutur', 'Martarombo'],
    synonymsIndonesian: ['Sistem sapaan kekerabatan', 'Silsilah marga'],
    partOfSpeech: 'kb',
    category: 'Adat & Partuturan',
    phonetic: 'par-tu-tu-ran',
    dialects: {
      raya: 'Partuturan',
      silimakuta: 'Partuturan / Ertutur',
      topiPasir: 'Partuturan',
      jaheJahe: 'Partuturan',
      notes: 'Kamus Balai Bahasa (2016) hal. 255: "partuturan n pertuturan: palobei nisungkun marga ase nibotoh partuturan (lebih dulu ditanya marga supaya jelas pertuturan/panggilan)".',
    },
    dailyExamples: [
      {
        simalungun: 'Palobei nisungkun marga ase nibotoh partuturan.',
        indonesian: 'Lebih dahulu ditanya marga supaya diketahui panggilan kekerabatannya.',
        dialect: 'Umum / Raya',
      },
    ],
    biblicalReferences: [],
    verifiedSource: 'Kamus Bahasa Simalungun–Indonesia (2016) hal. 255',
  },
  {
    id: 'lex-tondong',
    simalungun: 'Tondong',
    indonesian: 'Kerabat laki-laki dari pihak Ibu (Tulang) & pihak keluarga Istri',
    synonymsSimalungun: ['Tulang', 'Tondong Jabu', 'Tondong ni Tondong'],
    synonymsIndonesian: ['Pihak pemberi istri', 'Paman pihak ibu', 'Keluarga mertua'],
    partOfSpeech: 'kb',
    category: 'Adat & Partuturan',
    phonetic: 'tOn-dOng',
    dialects: {
      raya: 'Tondong',
      silimakuta: 'Tondong / Kalimbubu',
      topiPasir: 'Tondong / Hula-hula',
      jaheJahe: 'Tondong',
      notes: 'Kamus Balai Bahasa (2016) hal. 248: "tondong [tOndOg] n kerabat laki-laki dari pihak ibu; abang/kakak/adik istri; martondong v beripar".',
    },
    dailyExamples: [
      {
        simalungun: 'Hormat bani Tondong, manat bani Sanina, elek bani Boru.',
        indonesian: 'Hormat kepada Tondong, santun kepada Sanina, mengayomi kepada Boru.',
        dialect: 'Umum / Raya',
      },
    ],
    biblicalReferences: [],
    verifiedSource: 'Kamus Bahasa Simalungun–Indonesia (2016) hal. 248',
  },
  {
    id: 'lex-lawei',
    simalungun: 'Lawei (Lae)',
    indonesian: '1. Abang/adik laki-laki dari Istri; 2. Anak laki-laki dari Tulang/Amboru; 3. Ipar laki-laki',
    synonymsSimalungun: ['Lae'],
    synonymsIndonesian: ['Ipar laki-laki', 'Sepupu silang laki-laki'],
    partOfSpeech: 'pron',
    category: 'Adat & Partuturan',
    phonetic: 'la-wey',
    dialects: {
      raya: 'Lawei',
      silimakuta: 'Lawei / Silih',
      topiPasir: 'Lawei / Lae',
      jaheJahe: 'Lawei / Lae',
      notes: 'Kamus Balai Bahasa (2016) hal. 129: "lawei [lawey] pron 1 abang dari istri; 2 anak dari abang ibu; 3 anak dari kakak ayah; 4 ipar".',
    },
    dailyExamples: [
      {
        simalungun: 'Eta mangopi lobei hita i lopou, Lawei!',
        indonesian: 'Ayo ngopi dulu kita di warung, Ipar (Lawei)!',
        dialect: 'Santai / Harian',
      },
    ],
    biblicalReferences: [],
    verifiedSource: 'Kamus Bahasa Simalungun–Indonesia (2016) hal. 129',
  },
  {
    id: 'lex-nasikaha',
    simalungun: 'Nasikaha (Kaha)',
    indonesian: 'Ipar (Istri dari Abang, atau Abang dari Suami)',
    synonymsSimalungun: ['Kaha', 'Nasianggi (pasangannya)'],
    synonymsIndonesian: ['Kakak ipar', 'Abang ipar'],
    partOfSpeech: 'pron',
    category: 'Adat & Partuturan',
    phonetic: 'na-si-ka-ha',
    dialects: {
      raya: 'Nasikaha / Kaha',
      silimakuta: 'Nasikaha',
      topiPasir: 'Nasikaha / Angkang',
      jaheJahe: 'Nasikaha',
      notes: 'Kamus Balai Bahasa (2016) hal. 118 & 160: "kaha [kaha] pron ipar; istri dari abang; suami dari kakak" & "nasikaha pron abang dari suami; ipar".',
    },
    dailyExamples: [
      {
        simalungun: 'Ia kaha ku do, parinangon ni abanghu.',
        indonesian: 'Dia adalah iparku (istri dari abangku).',
        dialect: 'Umum / Raya',
      },
    ],
    biblicalReferences: [],
    verifiedSource: 'Kamus Bahasa Simalungun–Indonesia (2016) hal. 118 & 160',
  },
  {
    id: 'lex-bah',
    simalungun: 'Bah',
    indonesian: 'Air; Sungai',
    synonymsSimalungun: ['Aek', 'Bah bolon (sungai besar)', 'Bah tubuh (mata air)'],
    synonymsIndonesian: ['Air', 'Sungai'],
    partOfSpeech: 'kb',
    category: 'Percakapan Harian',
    phonetic: 'bah',
    dialects: {
      raya: 'Bah',
      silimakuta: 'Bah / Lau',
      topiPasir: 'Bah / Aek',
      jaheJahe: 'Bah',
      notes: 'Kamus Balai Bahasa (2016) hal. 18: "bah [bah] n 1 air; 2 sungai: marulu do bah, marindung do suhat, pb ada hulu sungai ada induk keladi (orang yang lebih dihormati)".',
    },
    dailyExamples: [
      {
        simalungun: 'Buat bangku bah inumon sangkibul galas.',
        indonesian: 'Ambilkan untukku air minum satu gelas.',
        dialect: 'Santai / Harian',
      },
    ],
    biblicalReferences: [],
    verifiedSource: 'Kamus Bahasa Simalungun–Indonesia (2016) hal. 18',
  },
  {
    id: 'lex-horja',
    simalungun: 'Horja',
    indonesian: '1. Kerja / Pekerjaan; 2. Pesta Adat',
    synonymsSimalungun: ['Marhorja (bekerja)', 'Parhorja (pekerja)', 'Hobas'],
    synonymsIndonesian: ['Pekerjaan', 'Pesta adat'],
    partOfSpeech: 'kb',
    category: 'Percakapan Harian',
    phonetic: 'hOr-ja',
    dialects: {
      raya: 'Horja',
      silimakuta: 'Horja / Dahin',
      topiPasir: 'Horja / Ulaon',
      jaheJahe: 'Horja',
      notes: 'Kamus Balai Bahasa (2016) hal. 94: "1 horja n kerja; marhorja v bekerja; 2 horja n pesta".',
    },
    dailyExamples: [
      {
        simalungun: 'Hinsah tumang ia marhorja tiap ari.',
        indonesian: 'Cekatan/rajin sekali dia bekerja setiap hari.',
        dialect: 'Umum / Raya',
      },
    ],
    biblicalReferences: [
      {
        reference: 'Mazmur 90:17 (Psalmen 90:17)',
        bookSimalungun: 'Psalmen',
        bookIndonesian: 'Mazmur',
        simalungunVerse: 'Sai totapkon Ham ma banta horja ni tanganta; enggo, horja ni tanganta, sai totapkon Ham ma in!',
        indonesianVerse: 'Kiranya Engkau meneguhkan perbuatan tangan kami, ya, perbuatan tangan kami, teguhkanlah itu!',
      },
    ],
    verifiedSource: 'Kamus Bahasa Simalungun–Indonesia (2016) hal. 94',
  },
  {
    id: 'lex-doding',
    simalungun: 'Doding',
    indonesian: 'Lagu; Nyanyian',
    synonymsSimalungun: ['Mandoding (menyanyi)', 'Pandoding (penyanyi)', 'Inggou (irama lagu)'],
    synonymsIndonesian: ['Lagu', 'Kidung', 'Nyanyian'],
    partOfSpeech: 'kb',
    category: 'Doding Haleluya',
    phonetic: 'dO-ding',
    dialects: {
      raya: 'Doding',
      silimakuta: 'Doding',
      topiPasir: 'Doding / Ende',
      jaheJahe: 'Doding',
      notes: 'Kamus Balai Bahasa (2016) hal. 47: "doding [dOdig] n lagu; mandoding v menyanyi; mardoding v bernyanyi".',
    },
    dailyExamples: [
      {
        simalungun: 'Pistar tumang anggita mandoding i gareja.',
        indonesian: 'Pandai sekali adik kita menyanyi di gereja.',
        dialect: 'Umum / Raya',
      },
    ],
    biblicalReferences: [
      {
        reference: 'Psalmen 96:1 (Mazmur 96:1)',
        bookSimalungun: 'Psalmen',
        bookIndonesian: 'Mazmur',
        simalungunVerse: 'Dodingkon nasiam ma sada doding na bayu bani Jahowa, dodingkon nasiam ma Jahowa, ale ganup tanoh on!',
        indonesianVerse: 'Nyanyikanlah nyanyian baru bagi TUHAN, menyanyilah bagi TUHAN, hai segenap bumi!',
      },
    ],
    verifiedSource: 'Kamus Bahasa Simalungun–Indonesia (2016) hal. 47 & Bibel Simalungun 2007 hal. 2171',
  },
  {
    id: 'lex-habonaron',
    simalungun: 'Bonar / Habonaron',
    indonesian: 'Benar / Kebenaran Hakiki (Habonaron do Bona)',
    synonymsSimalungun: ['Sintong / Hasintongan', 'Pintor'],
    synonymsIndonesian: ['Kebenaran', 'Kejujuran'],
    partOfSpeech: 'kb',
    category: 'Alkitab / Pustaka',
    phonetic: 'bO-nar / ha-bO-na-rOn',
    dialects: {
      raya: 'Habonaron',
      silimakuta: 'Habonaron',
      topiPasir: 'Habonaron',
      jaheJahe: 'Habonaron',
      notes: 'Kamus Balai Bahasa (2016) hal. 30: "bonar [bOnar] Ry a benar; habonaron n kebenaran: habonaron do bona kebenaran adalah segala-galanya".',
    },
    dailyExamples: [
      {
        simalungun: 'Habonaron do bona bani goluh ni halak Simalungun.',
        indonesian: 'Kebenaran adalah pangkal segala-galanya dalam hidup orang Simalungun.',
        dialect: 'Umum / Raya',
      },
    ],
    biblicalReferences: [
      {
        reference: 'Matius 6:33 (Mateus 6:33)',
        bookSimalungun: 'Mateus',
        bookIndonesian: 'Matius',
        simalungunVerse: 'Tapi pindahi nasiam ma lobei Harajaon ni Naibata pakon habonaron-Ni, dob ai tambahkonon-Ni do ganupan ai bani nasiam.',
        indonesianVerse: 'Tetapi carilah dahulu Kerajaan Allah dan kebenarannya, maka semuanya itu akan ditambahkan kepadamu.',
      },
    ],
    verifiedSource: 'Kamus Bahasa Simalungun–Indonesia (2016) hal. 30 & Mateus 6:33',
  },
];

export interface SampleCameraDocument {
  id: string;
  title: string;
  subtitle: string;
  sourceType: 'Halaman Bibel Simalungun' | 'Papan Sambutan Adat' | 'Halaman Kamus Simalungun';
  simalungunLines: {
    id: string;
    box_2d: [number, number, number, number];
    simalungun: string;
    indonesian: string;
  }[];
  vocabularyBreakdown: {
    word: string;
    meaning: string;
    partOfSpeech: string;
    dialectNote: string;
  }[];
}

export const SAMPLE_CAMERA_DOCUMENTS: SampleCameraDocument[] = [
  {
    id: 'sample-bibel-1musa',
    title: 'Kutipan Verbatim 1 Musa (Kejadian) Pasal 1:1–3 — Bibel Simalungun 2007 (Hal. 1)',
    subtitle: 'Teks asli 100% sesuai PDF Alkitab Bahasa Batak Simalungun (2007)',
    sourceType: 'Halaman Bibel Simalungun',
    simalungunLines: [
      {
        id: 'line-1',
        box_2d: [120, 80, 260, 920],
        simalungun: '1. Bani mula ni mulani itompa Naibata ma langit pakon tanoh.',
        indonesian: '1. Pada mulanya Allah menciptakan langit dan bumi.',
      },
      {
        id: 'line-2',
        box_2d: [310, 80, 490, 920],
        simalungun: '2. Tapi seng marrumang anjaha lumei do tanoh on; hagolapan do manrongkob luhung ai, anjaha mayap-ayap do Tonduy ni Naibata i atas bah ai.',
        indonesian: '2. Bumi belum berbentuk dan kosong; gelap gulita menutupi samudera raya, dan Roh Allah melayang-layang di atas permukaan air.',
      },
      {
        id: 'line-3',
        box_2d: [540, 80, 720, 920],
        simalungun: '3. Dob ai marsahap ma Naibata, “Jadi ma ho na lihar!” Gabe lihar ma tongon.',
        indonesian: '3. Berfirmanlah Allah: "Jadilah terang." Lalu terang itu jadi.',
      },
    ],
    vocabularyBreakdown: [
      {
        word: 'Mula ni mulani',
        meaning: 'Pada mulanya / Awal segala permulaan',
        partOfSpeech: 'ungkapan',
        dialectNote: 'Frasa pembuka autentik 1 Musa 1:1 di Bibel Simalungun 2007 (hal. 1): "Bani mula ni mulani itompa Naibata ma langit pakon tanoh."',
      },
      {
        word: 'Seng marrumang anjaha lumei',
        meaning: 'Belum berbentuk (tidak berupa) dan kosong',
        partOfSpeech: 'ks',
        dialectNote: 'Dari kata "rumang" (bentuk/rupa, Kamus hal. 201) dan "lumei" (kosong, Kamus hal. 139).',
      },
      {
        word: 'Manrongkob luhung',
        meaning: 'Menyelimuti / menutupi jurang samudera raya',
        partOfSpeech: 'kk',
        dialectNote: 'Kamus Balai Bahasa hal. 139: "luhung n jurang yang dalam; samudera".',
      },
    ],
  },
  {
    id: 'sample-papan-adat',
    title: 'Prasasti & Semboyan Adat — Habonaron do Bona & Tolu Sahundulan',
    subtitle: 'Simulasi foto papan semboyan budaya dan sapaan adat Simalungun',
    sourceType: 'Papan Sambutan Adat',
    simalungunLines: [
      {
        id: 'line-a1',
        box_2d: [140, 100, 290, 900],
        simalungun: 'HORAS! HABONARON DO BONA',
        indonesian: 'SALAM SEJAHTERA! KEBENARAN ADALAH PANGKAL SEGALANYA',
      },
      {
        id: 'line-a2',
        box_2d: [350, 100, 530, 900],
        simalungun: 'Hormat bani Tondong, Manat bani Sanina, Elek bani Boru.',
        indonesian: 'Hormat kepada Tondong (pemberi istri), Santun kepada Sanina (saudara semarga), Mengayomi kepada Boru.',
      },
      {
        id: 'line-a3',
        box_2d: [590, 100, 740, 900],
        simalungun: 'Diatei tupa bani parroh nasiam hu Huta nami on.',
        indonesian: 'Terima kasih atas kedatangan Bapak/Ibu sekalian ke Kampung kami ini.',
      },
    ],
    vocabularyBreakdown: [
      {
        word: 'Habonaron',
        meaning: 'Kebenaran / Kejujuran hakiki',
        partOfSpeech: 'kb',
        dialectNote: 'Kamus Balai Bahasa hal. 30: "bonar a benar; habonaron n kebenaran".',
      },
      {
        word: 'Elek',
        meaning: 'Bujuk / Mengayomi dengan kasih',
        partOfSpeech: 'kk',
        dialectNote: 'Kamus Balai Bahasa hal. 55: "elek [ElE?] Ry n bujuk; mengelek v membujuk".',
      },
      {
        word: 'Parroh',
        meaning: 'Kedatangan / Kehadiran',
        partOfSpeech: 'kb',
        dialectNote: 'Kamus Balai Bahasa hal. 197: dari kata dasar "roh" (datang/hadir).',
      },
    ],
  },
];
