export type MargaUtama = 'Sinaga' | 'Saragih' | 'Damanik' | 'Purba';

export interface MargaBranch {
  id: string;
  mainMarga: MargaUtama;
  subMarga: string;
  originNote: string;
}

export const MARGA_SISADAPUR: MargaBranch[] = [
  // 1. SINAGA
  { id: 'sinaga-bonor', mainMarga: 'Sinaga', subMarga: 'Sinaga Bonor (Sidasuhut / Pande)', originNote: 'Keturunan Raja Tanoh Jawa & Pamatang Tanah Jawa' },
  { id: 'sinaga-dadihoyong', mainMarga: 'Sinaga', subMarga: 'Sinaga Dadihoyong', originNote: 'Cabang asli Simalungun' },
  { id: 'sinaga-porti', mainMarga: 'Sinaga', subMarga: 'Sinaga Porti', originNote: 'Cabang asli Simalungun' },
  { id: 'sinaga-simaibang', mainMarga: 'Sinaga', subMarga: 'Sinaga Simaibang', originNote: 'Cabang asli Simalungun' },
  { id: 'sinaga-simanjorang', mainMarga: 'Sinaga', subMarga: 'Sinaga Simanjorang', originNote: 'Cabang asli Simalungun' },
  { id: 'sinaga-sipayung', mainMarga: 'Sinaga', subMarga: 'Sinaga Sipayung', originNote: 'Afiliasi marga Sinaga di Simalungun' },
  { id: 'sinaga-sihaloho', mainMarga: 'Sinaga', subMarga: 'Sinaga Sihaloho / Haloho', originNote: 'Afiliasi marga Sinaga di Simalungun' },
  { id: 'sinaga-silalahi', mainMarga: 'Sinaga', subMarga: 'Sinaga Silalahi', originNote: 'Afiliasi marga Sinaga di Simalungun' },

  // 2. SARAGIH
  { id: 'saragih-sumbayak', mainMarga: 'Saragih', subMarga: 'Saragih Sumbayak', originNote: 'Keturunan Tuan Raya Tongah (Kerajaan Raya)' },
  { id: 'saragih-garingging', mainMarga: 'Saragih', subMarga: 'Saragih Garingging', originNote: 'Bercabang menjadi Dasalak dan Dajawak' },
  { id: 'saragih-dasalak', mainMarga: 'Saragih', subMarga: 'Saragih Sidasalak (Dasalak)', originNote: 'Cabang Saragih Garingging' },
  { id: 'saragih-dajawak', mainMarga: 'Saragih', subMarga: 'Saragih Sidajawak (Dajawak)', originNote: 'Cabang Saragih Garingging' },
  { id: 'saragih-simarmata', mainMarga: 'Saragih', subMarga: 'Saragih Simarmata', originNote: 'Afiliasi marga Saragih di Simalungun' },
  { id: 'saragih-turnip', mainMarga: 'Saragih', subMarga: 'Saragih Turnip', originNote: 'Afiliasi marga Saragih di Simalungun' },
  { id: 'saragih-sitio', mainMarga: 'Saragih', subMarga: 'Saragih Sitio', originNote: 'Afiliasi marga Saragih di Simalungun' },

  // 3. DAMANIK
  { id: 'damanik-nagur', mainMarga: 'Damanik', subMarga: 'Damanik Nagur (Soro Tilu)', originNote: 'Keturunan Raja Nagur & kawasan Dolok Simbolon' },
  { id: 'damanik-tomok', mainMarga: 'Damanik', subMarga: 'Damanik Tomok (Timo Raya)', originNote: 'Keturunan Raja Siantar & Sidamanik' },
  { id: 'damanik-hajangan', mainMarga: 'Damanik', subMarga: 'Damanik Hajangan', originNote: 'Cabang Damanik Soro Tilu' },
  { id: 'damanik-bayu', mainMarga: 'Damanik', subMarga: 'Damanik Bayu', originNote: 'Cabang Damanik Soro Tilu' },
  { id: 'damanik-rih', mainMarga: 'Damanik', subMarga: 'Damanik Rih', originNote: 'Cabang Damanik Soro Tilu' },
  { id: 'damanik-simaringga', mainMarga: 'Damanik', subMarga: 'Damanik Simaringga', originNote: 'Cabang Damanik Soro Tilu' },
  { id: 'damanik-malau', mainMarga: 'Damanik', subMarga: 'Damanik Malau / Manik', originNote: 'Afiliasi marga Damanik di Simalungun' },

  // 4. PURBA
  { id: 'purba-pakpak', mainMarga: 'Purba', subMarga: 'Purba Pakpak', originNote: 'Keturunan Kerajaan Purba (Pamatang Purba)' },
  { id: 'purba-girsang', mainMarga: 'Purba', subMarga: 'Purba Girsang', originNote: 'Keturunan Kerajaan Silimakuta (Naga Saribu)' },
  { id: 'purba-tambak', mainMarga: 'Purba', subMarga: 'Purba Tambak', originNote: 'Keturunan Kerajaan Dolog Silou' },
  { id: 'purba-dasuha', mainMarga: 'Purba', subMarga: 'Purba Dasuha (Sidasuha)', originNote: 'Keturunan Kerajaan Panei' },
  { id: 'purba-sidadolog', mainMarga: 'Purba', subMarga: 'Purba Sidadolog', originNote: 'Cabang asli marga Purba Simalungun' },
  { id: 'purba-sidagambir', mainMarga: 'Purba', subMarga: 'Purba Sidagambir', originNote: 'Cabang asli marga Purba Simalungun' },
  { id: 'purba-sigumonrong', mainMarga: 'Purba', subMarga: 'Purba Sigumonrong', originNote: 'Cabang asli marga Purba Simalungun' },
  { id: 'purba-tua', mainMarga: 'Purba', subMarga: 'Purba Tua', originNote: 'Cabang asli marga Purba Simalungun' },
  { id: 'purba-tondang', mainMarga: 'Purba', subMarga: 'Purba Tondang', originNote: 'Cabang asli marga Purba Simalungun' },
  { id: 'purba-tanjung', mainMarga: 'Purba', subMarga: 'Purba Tanjung', originNote: 'Cabang asli marga Purba Simalungun' },
  { id: 'purba-silangit', mainMarga: 'Purba', subMarga: 'Purba Silangit', originNote: 'Cabang asli marga Purba Simalungun' },
  { id: 'purba-sihala', mainMarga: 'Purba', subMarga: 'Purba Sihala', originNote: 'Cabang asli marga Purba Simalungun' },
];

// Daftar Marga Batak Toba, Karo, Pakpak & Sekitarnya untuk Auto-Suggest Plain Text
export const POPULAR_TOBA_KARO_MARGAS: string[] = [
  'Simanjuntak',
  'Siahaan',
  'Siregar',
  'Pasaribu',
  'Situmorang',
  'Lumbantobing (Tobing)',
  'Panjaitan',
  'Sitorus',
  'Nainggolan',
  'Tampubolon',
  'Hutabarat',
  'Panggabean',
  'Simatupang',
  'Aritonang',
  'Sihombing',
  'Nababan',
  'Silaban',
  'Hutasoit',
  'Siburian',
  'Manurung',
  'Butarbutar',
  'Sirait',
  'Sinambela',
  'Marpaung',
  'Napitupulu',
  'Pardede',
  'Samosir',
  'Gultom',
  'Pakpahan',
  'Sitinjak',
  'Harianja',
  'Simamora',
  'limbong',
  'Sagala',
  'Nadeak',
  'Sitompul',
  'Hutagalung',
  'Hutapea',
  'Lubis',
  'Nasution',
  'Harahap',
  'Ginting',
  'Sembiring',
  'Tarigan',
  'Karo-karo',
  'Perangin-angin',
  'Berutu',
  'Tumanggor',
  'Bancin',
];

export type ToluSahundulanCategory =
  | 'Tondong (Pihak yang Dihormati)'
  | 'Tondong ni Tondong (Pemberi Berkat Tertinggi)'
  | 'Sanina (Saudara Semarga / Sejajar)'
  | 'Boru / Anak Boru (Pihak yang Diayomi)'
  | 'Anak Boru Mintori (Boru Lapis Kedua)';

export interface PartuturanTerm {
  id: string;
  sapaanSimalungun: string;
  artiHubungan: string;
  panggilanBalasan: string;
  posisiAdat: ToluSahundulanCategory;
  sumberKamus: string;
  penjelasanEtika: string;
  forGender: 'Laki-laki' | 'Perempuan' | 'Keduanya';
}

export const PARTUTURAN_DIRECTORY: PartuturanTerm[] = [
  {
    id: 'tutur-ompung-dalahi',
    sapaanSimalungun: 'Ompung (Ompung Dalahi / Ompung Daboru)',
    artiHubungan: 'Kakek / Nenek (Ayah dan Ibu dari Bapa maupun Inang)',
    panggilanBalasan: 'Pahompu (Cucu)',
    posisiAdat: 'Sanina (Saudara Semarga / Sejajar)',
    sumberKamus: 'Kamus Bahasa Simalungun–Indonesia (2016) hal. xiv & 165',
    penjelasanEtika: 'Sapaan penuh hormat kepada leluhur tingkat ke-2 di atas kita. Untuk tingkat ke-3 disebut Ompung Nono (ayah dari kakek / ibu dari nenek) dan Ompung Nini (ayah dari nenek / ibu dari kakek).',
    forGender: 'Keduanya',
  },
  {
    id: 'tutur-ompung-tondong',
    sapaanSimalungun: 'Tulang Matua / Ompung Tondong',
    artiHubungan: 'Ompung dari Istri (Ayah dari Bapak/Mama Mertua) atau Tulang dari Ibu kita',
    panggilanBalasan: 'Pahompu / Bere / Hela',
    posisiAdat: 'Tondong ni Tondong (Pemberi Berkat Tertinggi)',
    sumberKamus: 'Partuturan Halak Simalungun (Lima Saodoran)',
    penjelasanEtika: 'Termasuk Tondong ni Tondong (tingkat ke-2 ke atas dari pihak ibu atau istri). Sangat dihormati dalam adat (Hormat / Somba bani Tondong).',
    forGender: 'Keduanya',
  },
  {
    id: 'tutur-bapa',
    sapaanSimalungun: 'Bapa / Amang',
    artiHubungan: 'Ayah kandung',
    panggilanBalasan: 'Anak (laki-laki) / Boru (perempuan) / Niombah',
    posisiAdat: 'Sanina (Saudara Semarga / Sejajar)',
    sumberKamus: 'Kamus Bahasa Simalungun–Indonesia (2016) hal. 6 & 22',
    penjelasanEtika: 'Orang tua kandung laki-laki. Saudara laki-laki ayah disapa sesuai urutan lahir: Bapa Tua (abang tertua ayah), Bapa Tongah (urutan tengah), dan Bapa Anggi / Amburu (adik ayah).',
    forGender: 'Keduanya',
  },
  {
    id: 'tutur-bapatua',
    sapaanSimalungun: 'Bapa Tua (Bapatua) & Inang Tua (Inangtua)',
    artiHubungan: '1. Abang kandung/semarga dari Bapak & Istrinya; 2. Suami dari Kakak perempuan Ibu & Kakak perempuan Ibu',
    panggilanBalasan: 'Anak / Boru',
    posisiAdat: 'Sanina (Saudara Semarga / Sejajar)',
    sumberKamus: 'Kamus Bahasa Simalungun–Indonesia (2016) hal. 22 & 104',
    penjelasanEtika: 'Abang dari ayah kita adalah orang tua kita sendiri dalam satu marga, disapa "Bapa Tua" (Bapatua) dan istrinya disapa "Inang Tua" (Inangtua). Anak-anak mereka adalah saudara semarga (Abang/Kaha, Anggi, atau Botou).',
    forGender: 'Keduanya',
  },
  {
    id: 'tutur-bapatongah',
    sapaanSimalungun: 'Bapa Tongah (Bapatongah) & Inang Tongah (Inangtongah)',
    artiHubungan: '1. Saudara laki-laki Bapak urutan tengah & Istrinya; 2. Saudari perempuan Ibu urutan tengah & Suaminya',
    panggilanBalasan: 'Anak / Boru',
    posisiAdat: 'Sanina (Saudara Semarga / Sejajar)',
    sumberKamus: 'Kamus Bahasa Simalungun–Indonesia (2016) hal. 22 & 248 (tongah = tengah)',
    penjelasanEtika: 'Ciri khas kekerabatan Simalungun: saudara ayah atau saudari ibu yang berada di urutan tengah (di antara yang sulung/Tua dan bungsu/Anggi) disapa "Bapa Tongah" (Bapatongah) dan "Inang Tongah" (Inangtongah).',
    forGender: 'Keduanya',
  },
  {
    id: 'tutur-bapanggi',
    sapaanSimalungun: 'Bapa Anggi (Bapanggi / Amburu) & Inang Anggi (Inanggi)',
    artiHubungan: '1. Adik laki-laki dari Bapak & Istrinya; 2. Suami dari Adik perempuan Ibu & Adik perempuan Ibu',
    panggilanBalasan: 'Anak / Boru',
    posisiAdat: 'Sanina (Saudara Semarga / Sejajar)',
    sumberKamus: 'Kamus Bahasa Simalungun–Indonesia (2016) hal. 8, 22 & 104',
    penjelasanEtika: 'Adik laki-laki dari ayah kandung disapa "Bapa Anggi" (sering disingkat "Bapanggi" atau disebut "Amburu"), sedangkan istrinya (atau adik perempuan dari ibu) disapa "Inang Anggi" ("Inanggi").',
    forGender: 'Keduanya',
  },
  {
    id: 'tutur-inang',
    sapaanSimalungun: 'Inang',
    artiHubungan: 'Ibu kandung',
    panggilanBalasan: 'Anak / Boru / Niombah',
    posisiAdat: 'Sanina (Saudara Semarga / Sejajar)',
    sumberKamus: 'Kamus Bahasa Simalungun–Indonesia (2016) hal. 104',
    penjelasanEtika: 'Orang tua kandung perempuan. Kakak perempuan ibu disapa Inang Tua (Inangtua), yang tengah disapa Inang Tongah, dan adik perempuan ibu disapa Inang Anggi (Inanggi).',
    forGender: 'Keduanya',
  },
  {
    id: 'tutur-tulang',
    sapaanSimalungun: 'Tulang (Tulang Tua / Tulang Tongah / Tulang Anggi)',
    artiHubungan: 'Saudara laki-laki dari Ibu (Paman) & Ayah dari Istri (Bapak Mertua bagi Laki-laki)',
    panggilanBalasan: 'Panogolan / Bere / Hela',
    posisiAdat: 'Tondong (Pihak yang Dihormati)',
    sumberKamus: 'Kamus Bahasa Simalungun–Indonesia (2016) hal. 252',
    penjelasanEtika: 'Saudara laki-laki ibu (Tulang) adalah Tondong Jabu. Jika ibu memiliki beberapa saudara laki-laki, dapat diperjelas menjadi Tulang Tua (tertua), Tulang Tongah (tengah), dan Tulang Anggi / Naposo (termuda). Ayah mertua laki-laki juga disapa Tulang.',
    forGender: 'Keduanya',
  },
  {
    id: 'tutur-anturang',
    sapaanSimalungun: 'Anturang (Anturang Tua / Tongah / Anggi)',
    artiHubungan: 'Istri dari Tulang (Bibi ipar ibu) & Ibu dari Istri (Mama Mertua bagi Laki-laki)',
    panggilanBalasan: 'Panogolan / Bere / Hela',
    posisiAdat: 'Tondong (Pihak yang Dihormati)',
    sumberKamus: 'Kamus Bahasa Simalungun–Indonesia (2016) hal. 13',
    penjelasanEtika: 'Pasangan dari Tulang. Bagi seorang suami, ibu dari istri (Mama Mertua) wajib disapa "Anturang" dengan sikap penuh hormat.',
    forGender: 'Keduanya',
  },
  {
    id: 'tutur-amboru',
    sapaanSimalungun: 'Amboru (Amboru Tua / Tongah / Anggi)',
    artiHubungan: 'Saudara perempuan dari Ayah (Bibi) & Ibu dari Suami (Mama Mertua bagi Perempuan)',
    panggilanBalasan: 'Parumaen (ke menantu/anak abang) / Anak',
    posisiAdat: 'Boru / Anak Boru (Pihak yang Diayomi)',
    sumberKamus: 'Kamus Bahasa Simalungun–Indonesia (2016) hal. 7',
    penjelasanEtika: 'Kakak atau adik perempuan dari ayah kita. Bagi seorang istri, ibu dari suaminya disapa Amboru (atau Inang Simatua).',
    forGender: 'Keduanya',
  },
  {
    id: 'tutur-makkela',
    sapaanSimalungun: 'Makkela (Amangboru)',
    artiHubungan: 'Suami dari Amboru (Suami dari saudara perempuan Ayah) & Ayah dari Suami (Bapak Mertua bagi Perempuan)',
    panggilanBalasan: 'Parumaen / Lawei / Anak',
    posisiAdat: 'Boru / Anak Boru (Pihak yang Diayomi)',
    sumberKamus: 'Kamus Bahasa Simalungun–Indonesia (2016) hal. 86',
    penjelasanEtika: 'Berasal dari kata "hela" (menantu laki-laki kakek kita). Memegang peran penting sebagai Anak Boru Jabu dalam kerja adat.',
    forGender: 'Keduanya',
  },
  {
    id: 'tutur-tondong-bolon',
    sapaanSimalungun: 'Tulang (Tondong ni Tondong)',
    artiHubungan: 'Saudara laki-laki dari Mama Istri (Tulang dari Istri kita)',
    panggilanBalasan: 'Hela / Bere',
    posisiAdat: 'Tondong ni Tondong (Pemberi Berkat Tertinggi)',
    sumberKamus: 'Partuturan Halak Simalungun (Lima Saodoran)',
    penjelasanEtika: 'Karena marga beliau adalah marga dari Mama Mertua kita (Anturang), maka beliau adalah Tondong dari mertua kita (Tondong ni Tondong). Kita menyapanya Tulang.',
    forGender: 'Laki-laki',
  },
  {
    id: 'tutur-lawei',
    sapaanSimalungun: 'Lawei (Lae)',
    artiHubungan: '1. Abang/adik laki-laki dari Istri; 2. Suami dari saudara perempuan (Botou); 3. Anak laki-laki dari Tulang atau Amboru',
    panggilanBalasan: 'Lawei',
    posisiAdat: 'Tondong (Pihak yang Dihormati)',
    sumberKamus: 'Kamus Bahasa Simalungun–Indonesia (2016) hal. 129',
    penjelasanEtika: 'Sapaan timbal-balik sesama laki-laki yang beripar. Namun secara posisi adat, abang/adik laki-laki istri adalah Tondong kita, sedangkan suami dari saudari kita adalah Anak Boru kita.',
    forGender: 'Laki-laki',
  },
  {
    id: 'tutur-eda',
    sapaanSimalungun: 'Eda (Gawei)',
    artiHubungan: 'Sapaan sesama perempuan yang beripar (Saudara perempuan dari Suami, atau Istri dari saudara laki-laki)',
    panggilanBalasan: 'Eda / Gawei',
    posisiAdat: 'Boru / Anak Boru (Pihak yang Diayomi)',
    sumberKamus: 'Kamus Bahasa Simalungun–Indonesia (2016) hal. 54',
    penjelasanEtika: 'Digunakan antar perempuan: seorang istri menyapa saudara perempuan suaminya (atau istri dari abang/adiknya) dengan Eda atau Gawei.',
    forGender: 'Perempuan',
  },
  {
    id: 'tutur-nasikaha',
    sapaanSimalungun: 'Nasikaha (Kaha)',
    artiHubungan: 'Istri dari Abang kandung/semarga (bagi Laki-laki), atau Abang dari Suami (bagi Perempuan)',
    panggilanBalasan: 'Nasianggi',
    posisiAdat: 'Sanina (Saudara Semarga / Sejajar)',
    sumberKamus: 'Kamus Bahasa Simalungun–Indonesia (2016) hal. 118 & 160',
    penjelasanEtika: 'Hubungan "marnasikaha" memiliki aturan kesopanan tinggi (pantang berbicara sembarangan atau duduk terlalu berdekatan tanpa adab).',
    forGender: 'Keduanya',
  },
  {
    id: 'tutur-nasianggi',
    sapaanSimalungun: 'Nasianggi',
    artiHubungan: 'Istri dari Adik laki-laki (bagi Abang), atau Adik laki-laki dari Suami (bagi Kakak Ipar)',
    panggilanBalasan: 'Nasikaha (Kaha)',
    posisiAdat: 'Sanina (Saudara Semarga / Sejajar)',
    sumberKamus: 'Kamus Bahasa Simalungun–Indonesia (2016) hal. 10',
    penjelasanEtika: 'Pasangan timbal-balik dari Nasikaha. Menjaga keharmonisan dan kesantunan dalam keluarga besar.',
    forGender: 'Keduanya',
  },
  {
    id: 'tutur-botou',
    sapaanSimalungun: 'Botou',
    artiHubungan: 'Saudara perempuan kandung/semarga (bagi Laki-laki), atau Saudara laki-laki kandung/semarga (bagi Perempuan)',
    panggilanBalasan: 'Botou',
    posisiAdat: 'Boru / Anak Boru (Pihak yang Diayomi)',
    sumberKamus: 'Kamus Bahasa Simalungun–Indonesia (2016) hal. 33',
    penjelasanEtika: 'Sapaan lintas jenis kelamin untuk saudara kandung atau semarga.',
    forGender: 'Keduanya',
  },
  {
    id: 'tutur-pariban',
    sapaanSimalungun: 'Pariban (Kaha / Anggi)',
    artiHubungan: '1. Putri dari Tulang (bagi Laki-laki) / Putra dari Amboru (bagi Perempuan); 2. Sesama suami yang istrinya kakak-beradik',
    panggilanBalasan: 'Pariban',
    posisiAdat: 'Sanina (Saudara Semarga / Sejajar)',
    sumberKamus: 'Partuturan Halak Simalungun',
    penjelasanEtika: 'Jika merujuk pada sesama laki-laki yang menikahi kakak-beradik (se-Tondong), mereka bersaudara sejajar (Sanina Sapanganonkon): yang menikahi kakak disapa Kaha/Abang, yang menikahi adik disapa Anggi.',
    forGender: 'Keduanya',
  },
  {
    id: 'tutur-besan',
    sapaanSimalungun: 'Besan (Bajo / Nasibesan)',
    artiHubungan: 'Orang tua dari menantu (Hubungan antara orang tua suami dan orang tua istri)',
    panggilanBalasan: 'Besan',
    posisiAdat: 'Tondong (Pihak yang Dihormati)',
    sumberKamus: 'Kamus Bahasa Simalungun–Indonesia (2016) hal. 19 & 26',
    penjelasanEtika: 'Orang tua pihak pengantin perempuan berkedudukan sebagai Tondong, sedangkan orang tua pihak pengantin laki-laki berkedudukan sebagai Anak Boru.',
    forGender: 'Keduanya',
  },
  {
    id: 'tutur-panogolan',
    sapaanSimalungun: 'Panogolan (Bere)',
    artiHubungan: 'Keponakan (Anak laki-laki dan perempuan dari Botou / saudara perempuan kita)',
    panggilanBalasan: 'Tulang / Anturang',
    posisiAdat: 'Boru / Anak Boru (Pihak yang Diayomi)',
    sumberKamus: 'Kamus Bahasa Simalungun–Indonesia (2016) hal. 173',
    penjelasanEtika: 'Kita adalah Tulang bagi mereka. Suami dari keponakan perempuan kita menjadi Anak Boru Mintori.',
    forGender: 'Laki-laki',
  },
];

// Hymns Concordance & Simalungun Songs (Supports both Official KJ/English Concordance & System Auto-Translation)
export interface HymnConcordanceItem {
  id: string;
  haleluyaNumber: string;
  haleluyaTitle: string;
  kjNumber: string;
  kjTitle: string;
  englishTitle: string;
  isSystemAutoTranslated?: boolean;
  originalGermanOrAuthor?: string;
  biblicalParallel: {
    reference: string;
    simalungunText: string;
    indonesianText: string;
  };
  stanzaComparison: {
    simalungunStanza: string;
    indonesianStanza: string;
    englishStanza: string;
  };
  keyVocabulary: {
    simalungun: string;
    indonesian: string;
    english: string;
  }[];
}

export const HYMN_CONCORDANCE_LIST: HymnConcordanceItem[] = [
  {
    id: 'hymn-hal-1',
    haleluyaNumber: 'Doding Haleluya No. 1',
    haleluyaTitle: 'Jahowa Sihol Pujionku',
    kjNumber: 'KJ No. 8',
    kjTitle: 'Bagi-Mu, Tuhan, Nyanyianku',
    englishTitle: 'To Thee, O Lord, I Sing My Praise',
    isSystemAutoTranslated: false,
    originalGermanOrAuthor: 'Johann Jakob Schütz (Sei Lob und Ehr dem höchsten Gut)',
    biblicalParallel: {
      reference: 'Psalmen 146:2 (Mazmur 146:2)',
      simalungunText: 'Sai pujionku do Jahowa sadokah ahu manggoluh, sai dodingkononku do Naibata sadokah dong ahu.',
      indonesianText: 'Aku hendak memuliakan TUHAN selama aku hidup, dan bermazmur bagi Allahku selagi aku ada.',
    },
    stanzaComparison: {
      simalungunStanza:
        'Jahowa sihol pujionku, sadokah na manggoluh au;\nPasangaponku Naibatangku, sadokah na marhosah au.',
      indonesianStanza:
        'Bagi-Mu, Tuhan, nyanyianku, kar’na setara-Mu siapakah?\nHendak kupuji Kau selalu; padaku Roh Kudus berikanlah.',
      englishStanza:
        'Sing praise to God who reigns above, the God of all creation,\nThe God of power, the God of love, the God of our salvation.',
    },
    keyVocabulary: [
      { simalungun: 'Pujionku', indonesian: 'Akan kupuji', english: 'I will praise' },
      { simalungun: 'Sadokah manggoluh', indonesian: 'Selama hidup', english: 'As long as I live' },
      { simalungun: 'Marhosah', indonesian: 'Bernapas', english: 'Breathing / having breath' },
    ],
  },
  {
    id: 'hymn-hal-3',
    haleluyaNumber: 'Doding Haleluya No. 3',
    haleluyaTitle: 'Sai Puji Naibata',
    kjNumber: 'KJ No. 287',
    kjTitle: 'Sekarang B’ri Syukur',
    englishTitle: 'Now Thank We All Our God',
    isSystemAutoTranslated: false,
    originalGermanOrAuthor: 'Martin Rinckart, 1636 (Nun danket alle Gott)',
    biblicalParallel: {
      reference: 'Psalmen 100:4 (Mazmur 100:4)',
      simalungunText: 'Masuki nasiam ma horbangan-Ni marhitei hatarimakasihon, sonai alaman-Ni marhitei puji-pujian. Martarima kasih ma nasiam Bani, puji nasiam ma goran-Ni!',
      indonesianText: 'Masuklah melalui pintu gerbang-Nya dengan nyanyian syukur, ke dalam pelataran-Nya dengan puji-pujian!',
    },
    stanzaComparison: {
      simalungunStanza:
        'Sai puji Naibata, marhasoman malas uhur!\nAi banggal tumang do holong-Ni banta ganup.',
      indonesianStanza:
        'Sekarang b’ri syukur, hai hati, mulut, tangan!\nSempurna dan besar segala karya Tuhan!',
      englishStanza:
        'Now thank we all our God, with heart and hands and voices,\nWho wondrous things hath done, in whom His world rejoices.',
    },
    keyVocabulary: [
      { simalungun: 'Malas uhur', indonesian: 'Sukacita hati', english: 'Joyful heart' },
      { simalungun: 'Banggal tumang', indonesian: 'Sangat besar', english: 'Wondrously great' },
      { simalungun: 'Holong-Ni', indonesian: 'Kasih-Nya', english: 'His love / grace' },
    ],
  },
  {
    id: 'hymn-hal-4',
    haleluyaNumber: 'Doding Haleluya No. 4',
    haleluyaTitle: 'Puji Jahowa na Sangap',
    kjNumber: 'KJ No. 10',
    kjTitle: 'Pujilah Tuhan, Sang Raja',
    englishTitle: 'Praise to the Lord, the Almighty',
    isSystemAutoTranslated: false,
    originalGermanOrAuthor: 'Joachim Neander, 1680 (Lobe den Herren, den mächtigen König)',
    biblicalParallel: {
      reference: 'Psalmen 103:1–2 (Mazmur 103:1–2)',
      simalungunText: 'Puji ma Jahowa, ale tonduyhu, anjaha humbani gok ni uhurhu mamuji goran-Ni na pansing in! Puji ma Jahowa, ale tonduyhu, anjaha ulang ma halupahon ganup dear layak-Ni!',
      indonesianText: 'Pujilah TUHAN, hai jiwaku! Pujilah nama-Nya yang kudus, hai segenap batinku!',
    },
    stanzaComparison: {
      simalungunStanza:
        'Puji Jahowa na sangap janah marmulia!\nAle tonduyhu, pasangap ma Tuhan Naibata!',
      indonesianStanza:
        'Pujilah Tuhan, Sang Raja yang Mahamulia!\nSegenap hati dan jiwaku, pujilah Dia!',
      englishStanza:
        'Praise to the Lord, the Almighty, the King of creation!\nO my soul, praise Him, for He is thy health and salvation!',
    },
    keyVocabulary: [
      { simalungun: 'Na sangap', indonesian: 'Yang mulia / terhormat', english: 'The glorious / Almighty' },
      { simalungun: 'Ale tonduyhu', indonesian: 'Hai jiwaku', english: 'O my soul' },
      { simalungun: 'Pasangap', indonesian: 'Muliakanlah / hormatilah', english: 'Magnify / honor' },
    ],
  },
  {
    id: 'hymn-hal-39',
    haleluyaNumber: 'Doding Haleluya No. 39',
    haleluyaTitle: 'Borngin na Pansing',
    kjNumber: 'KJ No. 92',
    kjTitle: 'Malam Kudus',
    englishTitle: 'Silent Night, Holy Night',
    isSystemAutoTranslated: false,
    originalGermanOrAuthor: 'Joseph Mohr & Franz Xaver Gruber, 1818 (Stille Nacht, heilige Nacht)',
    biblicalParallel: {
      reference: 'Lukas 2:14',
      simalungunText: '“Hasangapon ma bani Naibata na i babou, damei ma i tanoh on bani jolma hinarosuhkon-Ni in.”',
      indonesianText: '"Kemuliaan bagi Allah di tempat yang mahatinggi dan damai sejahtera di bumi di antara manusia yang berkenan kepada-Nya."',
    },
    stanzaComparison: {
      simalungunStanza:
        'Borngin na pansing, sonang do ganup!\nPitah dua halak na puho ope, manjaga Anak na majenges in.',
      indonesianStanza:
        'Malam kudus, sunyi senyap; dunia terlelap.\nHanya dua berjaga terus, ayah bunda mesra dan kudus.',
      englishStanza:
        'Silent night, holy night, all is calm, all is bright\nRound yon virgin mother and Child, Holy Infant so tender and mild.',
    },
    keyVocabulary: [
      { simalungun: 'Borngin na pansing', indonesian: 'Malam yang kudus / suci', english: 'Holy night' },
      { simalungun: 'Puho', indonesian: 'Bangun / terjaga', english: 'Awake / keeping watch' },
      { simalungun: 'Sonang', indonesian: 'Tenang / damai tenteram', english: 'Calm / peaceful' },
    ],
  },
  {
    id: 'hymn-hal-136',
    haleluyaNumber: 'Doding Haleluya No. 136',
    haleluyaTitle: 'Ise do Diha-dihanta (Jesus Hasoman na Sintong)',
    kjNumber: 'KJ No. 453',
    kjTitle: 'Yesus Kawan yang Sejati',
    englishTitle: 'What a Friend We Have in Jesus',
    isSystemAutoTranslated: false,
    originalGermanOrAuthor: 'Joseph M. Scriven, 1855',
    biblicalParallel: {
      reference: 'Johannes 15:15 (Yohanes 15:15)',
      simalungunText: 'Seng Hugoran be hanima jabolon, ai seng ibotoh jabolon na hinorjahon ni tuanni; huan-huan do hanima Huhatahon, ai domma Hupabotohkon bannima, na Hutangar humbani Bapa.',
      indonesianText: 'Aku tidak menyebut kamu lagi hamba, sebab hamba tidak tahu, apa yang diperbuat oleh tuannya, tetapi Aku menyebut kamu sahabat, karena Aku telah memberitahukan kepada kamu segala sesuatu yang telah Kudengar dari Bapa-Ku.',
    },
    stanzaComparison: {
      simalungunStanza:
        'Ise do diha-dihanta, na mangurupi hita?\nJesus do hasoman sintong, na mamorsan horunta.',
      indonesianStanza:
        'Yesus Kawan yang sejati bagi kita yang lemah.\nTiap hal boleh dibawa dalam doa pada-Nya.',
      englishStanza:
        'What a Friend we have in Jesus, all our sins and griefs to bear!\nWhat a privilege to carry everything to God in prayer!',
    },
    keyVocabulary: [
      { simalungun: 'Diha-diha', indonesian: 'Sanak saudara / kerabat dekat', english: 'Kindred / close friend' },
      { simalungun: 'Hasoman sintong', indonesian: 'Sahabat sejati', english: 'True Friend' },
      { simalungun: 'Horu', indonesian: 'Dukacita / beban kesedihan', english: 'Griefs / sorrows' },
    ],
  },
  {
    id: 'hymn-hal-138',
    haleluyaNumber: 'Doding Haleluya No. 138',
    haleluyaTitle: 'Jahowa Naibatanta Do (Batar-batar na Tenger)',
    kjNumber: 'KJ No. 250',
    kjTitle: 'Allahmu Benteng yang Teguh',
    englishTitle: 'A Mighty Fortress Is Our God',
    isSystemAutoTranslated: false,
    originalGermanOrAuthor: 'Martin Luther, 1529 (Ein feste Burg ist unser Gott)',
    biblicalParallel: {
      reference: 'Psalmen 46:1–2 (Mazmur 46:2)',
      simalungunText: 'Naibata do haporusan ampa hagogohon banta, pangurupi banggal tongon bani panorang hasosakan.',
      indonesianText: 'Allah itu bagi kita tempat perlindungan dan kekuatan, sebagai penolong dalam kesesakan sangat terbukti.',
    },
    stanzaComparison: {
      simalungunStanza:
        'Jahowa Naibatanta do batar-batar na tenger;\nSinjata na mapansing do, paluahkon hita on.',
      indonesianStanza:
        'Allahmu benteng yang teguh, perisai dan senjata;\nBetapa pun sengsaranya, pertolongan-Nya nyata!',
      englishStanza:
        'A mighty fortress is our God, a bulwark never failing;\nOur helper He, amid the flood of mortal ills prevailing.',
    },
    keyVocabulary: [
      { simalungun: 'Batar-batar', indonesian: 'Benteng pertahanan', english: 'Fortress / bulwark' },
      { simalungun: 'Tenger', indonesian: 'Teguh / kokoh / keras', english: 'Mighty / steadfast' },
      { simalungun: 'Paluahkon', indonesian: 'Melepaskan / menyelamatkan', english: 'Delivers / saves' },
    ],
  },
  {
    id: 'hymn-hal-340',
    haleluyaNumber: 'Doding Haleluya No. 340',
    haleluyaTitle: 'Idop ni Uhur na Banggal (Amazing Grace)',
    kjNumber: 'KJ No. 40',
    kjTitle: 'Ajaib Benar Anugerah',
    englishTitle: 'Amazing Grace',
    isSystemAutoTranslated: false,
    originalGermanOrAuthor: 'John Newton, 1779',
    biblicalParallel: {
      reference: 'Epesus 2:8 (Efesus 2:8)',
      simalungunText: 'Ai humbani idop ni uhur do ase maluah nasiam, marhitei haporsayaon; sedo binahen nasiam, sibere-bere ni Naibata do.',
      indonesianText: 'Sebab karena kasih karunia kamu diselamatkan oleh iman; itu bukan hasil usahamu, tetapi pemberian Allah.',
    },
    stanzaComparison: {
      simalungunStanza:
        'Idop ni uhur na banggal, na paluahkon au!\nNa kahou hinan do ahu, sonari jumpah ma.',
      indonesianStanza:
        'Ajaib benar anugerah pembaru hidupku!\n’Ku hilang, buta, bercela; oleh-Nya ’ku sembuh.',
      englishStanza:
        'Amazing grace! How sweet the sound that saved a wretch like me!\nI once was lost, but now am found; was blind, but now I see.',
    },
    keyVocabulary: [
      { simalungun: 'Idop ni uhur', indonesian: 'Anugerah / belas kasih karunia', english: 'Amazing grace / mercy' },
      { simalungun: 'Kahou', indonesian: 'Tersesat / hilang', english: 'Lost / gone astray' },
      { simalungun: 'Hinan', indonesian: 'Dahulu', english: 'Once / formerly' },
    ],
  },
  // --- LAGU DODING HALELUYA & LAGU RAKYAT SIMALUNGUN DENGAN TERJEMAHAN OTOMATIS SISTEM ---
  {
    id: 'hymn-hal-311-auto',
    haleluyaNumber: 'Doding Haleluya No. 311',
    haleluyaTitle: 'Diatei Tupa ma Bamu Ham Naibata',
    kjNumber: 'Lagu Asli Simalungun (Tanpa KJ)',
    kjTitle: 'Terima Kasih Kepada-Mu Ya Tuhan (Terjemahan Otomatis)',
    englishTitle: 'Thank You Unto Thee, O Lord God (Auto-Translated)',
    isSystemAutoTranslated: true,
    originalGermanOrAuthor: 'Doding Haleluya GKPS Asli Simalungun',
    biblicalParallel: {
      reference: 'Psalmen 103:2 (Mazmur 103:2)',
      simalungunText: 'Puji ma Jahowa, ale tonduyhu, anjaha ulang ma halupahon ganup dear layak-Ni!',
      indonesianText: 'Pujilah TUHAN, hai jiwaku, dan janganlah lupakan segala kebaikan-Nya!',
    },
    stanzaComparison: {
      simalungunStanza:
        'Diatei tupa ma Bamu Ham Naibata,\nBani ganup pasu-pasu ampa holong-Mu banta.',
      indonesianStanza:
        '[Terjemahan Otomatis Sistem]\nTerima kasih sebesar-besarnya kepada-Mu ya Tuhan Allah,\nAtas segala berkat serta kasih sayang-Mu bagi kita.',
      englishStanza:
        '[System Auto-Translation]\nHeartfelt thanks be unto You, O Lord God,\nFor all the blessings and Your lovingkindness toward us.',
    },
    keyVocabulary: [
      { simalungun: 'Diatei tupa', indonesian: 'Terima kasih / Syukur', english: 'Thankfulness / Gratitude' },
      { simalungun: 'Pasu-pasu', indonesian: 'Berkat', english: 'Blessings' },
      { simalungun: 'Ganup', indonesian: 'Semua / Segala', english: 'All / Every' },
    ],
  },
  {
    id: 'hymn-hal-251-auto',
    haleluyaNumber: 'Doding Haleluya No. 251',
    haleluyaTitle: 'Sai Togu Ahu Tuhan',
    kjNumber: 'Padanan Makna Bebas',
    kjTitle: 'Tuntunlah Aku, Tuhan (Terjemahan Otomatis)',
    englishTitle: 'Lead Me Always, O Lord (Auto-Translated)',
    isSystemAutoTranslated: true,
    originalGermanOrAuthor: 'Doding Haleluya GKPS',
    biblicalParallel: {
      reference: 'Psalmen 23:1–2 (Mazmur 23:1–2)',
      simalungunText: 'Jahowa do siparmahan ahu, seng anjai hurangan ahu. Ipatudu do ahu bani sampalan na mombur, anjaha itogu-togu do ahu hu bah parsaranan.',
      indonesianText: 'TUHAN adalah gembalaku, takkan kekurangan aku. Ia membaringkan aku di padang yang berumput hijau, Ia membimbing aku ke air yang tenang.',
    },
    stanzaComparison: {
      simalungunStanza:
        'Sai togu ahu Tuhan bani pardalanankin,\nUlang lopas ahu kahou hun lambung-Mu Tuhan.',
      indonesianStanza:
        '[Terjemahan Otomatis Sistem]\nTuntunlah aku selalu ya Tuhan dalam perjalananku,\nJangan biarkan aku tersesat jauh dari sisi-Mu, Tuhan.',
      englishStanza:
        '[System Auto-Translation]\nAlways lead me, O Lord, along my journey,\nDo not let me wander astray from Your side, O Lord.',
    },
    keyVocabulary: [
      { simalungun: 'Togu / Itogu-togu', indonesian: 'Tuntun / Dibimbing', english: 'Lead / Guided' },
      { simalungun: 'Pardalanan', indonesian: 'Perjalanan hidup', english: 'Journey / Walk' },
      { simalungun: 'Lambung-Mu', indonesian: 'Sisi-Mu / Dekat-Mu', english: 'Your side' },
    ],
  },
  {
    id: 'hymn-lagu-sitalasari-auto',
    haleluyaNumber: 'Lagu Daerah Simalungun Populer',
    haleluyaTitle: 'Sitalasari',
    kjNumber: 'Lagu Budaya Simalungun',
    kjTitle: 'Bunga Sitalasari (Terjemahan Otomatis Sistem)',
    englishTitle: 'Sitalasari Flower of Simalungun (Auto-Translated)',
    isSystemAutoTranslated: true,
    originalGermanOrAuthor: 'Taralamsyah Saragih (Lagu Klasik Simalungun)',
    biblicalParallel: {
      reference: 'Podah 4:23 (Amsal 4:23)',
      simalungunText: 'Tang siporlunan, jaga ma uhurmu, ai hunjai do luar hagoluhan.',
      indonesianText: 'Jagalah hatimu dengan segala kewaspadaan, karena dari situlah terpancar kehidupan.',
    },
    stanzaComparison: {
      simalungunStanza:
        'Sitalasari, bunga na jenges i Simalungun,\nSai dingat ma huta hatubuhan ampa podah ni namatoras.',
      indonesianStanza:
        '[Terjemahan Otomatis Sistem]\nSitalasari, bunga yang cantik di tanah Simalungun,\nIngatlah selalu kampung kelahiran serta nasihat orang tua.',
      englishStanza:
        '[System Auto-Translation]\nSitalasari, the beautiful flower in Simalungun,\nAlways remember your homeland of birth and the counsel of your parents.',
    },
    keyVocabulary: [
      { simalungun: 'Jenges', indonesian: 'Cantik / Indah', english: 'Beautiful / Lovely' },
      { simalungun: 'Huta hatubuhan', indonesian: 'Kampung halaman tempat lahir', english: 'Birthplace homeland' },
      { simalungun: 'Podah ni namatoras', indonesian: 'Nasihat orang tua', english: 'Parents’ wisdom/advice' },
    ],
  },
];

export interface ExternalReferenceLink {
  id: string;
  title: string;
  url: string;
  category: 'Kamus & Dokumentasi' | 'Partuturan & Marga' | 'Doding Haleluya' | 'Video Percakapan';
  description: string;
}

export const EXTERNAL_REFERENCES: ExternalReferenceLink[] = [
  {
    id: 'ref-doding-net',
    title: 'Indeks Lagu Doding Haleluya GKPS & Padanan Kidung Jemaat',
    url: 'https://dodinghaleluya.simalungun.net/2019/07/23/indeks-lagu/',
    category: 'Doding Haleluya',
    description: 'Indeks lengkap nomor dan judul lagu Doding Haleluya GKPS beserta tautan persamaan lagunya di Kidung Jemaat (KJ).',
  },
  {
    id: 'ref-wiki-partuturan',
    title: 'Wikipedia: Partuturan (Batak Simalungun)',
    url: 'https://id.wikipedia.org/wiki/Partuturan_(Batak_Simalungun)',
    category: 'Partuturan & Marga',
    description: 'Ensiklopedia sistem kekerabatan Tolu Sahundulan, Lima Saodoran, dan daftar istilah panggilan adat Simalungun.',
  },
  {
    id: 'ref-girsang-partuturan',
    title: 'Girsang Sipartogi: Partuturan dalam Kekerabatan Suku Simalungun',
    url: 'http://girsangsipartogi.blogspot.com/2019/11/partuturan-dalam-kekerabatan-suku.html',
    category: 'Partuturan & Marga',
    description: 'Penjelasan mendalam mengenai cara memanggil kerabat (Tondong, Sanina, Boru, Lawei, Makkela, Nasikaha, Nasianggi, Pariban).',
  },
  {
    id: 'ref-scribd-partuturan',
    title: 'Dokumen Scribd: PARTUTURAN HALAK SIMALUNGUN',
    url: 'https://www.scribd.com/document/402845188/PARTUTURAN-HALAK-SIMALUNGUN-docx',
    category: 'Partuturan & Marga',
    description: 'Naskah rujukan struktur tutur sapa keluarga besar dan etika adat masyarakat Simalungun.',
  },
  {
    id: 'ref-stekom-partuturan',
    title: 'Ensiklopedia STEKOM: Partuturan (Batak Simalungun)',
    url: 'https://p2k.stekom.ac.id/ensiklopedia/Partuturan_(Batak_Simalungun)',
    category: 'Partuturan & Marga',
    description: 'Referensi akademik mengenai struktur sosial dan istilah kekerabatan Batak Simalungun.',
  },
  {
    id: 'ref-wiki-marga',
    title: 'Wikipedia: Marga Simalungun (SISADAPUR)',
    url: 'https://id.wikipedia.org/wiki/Marga_Simalungun',
    category: 'Partuturan & Marga',
    description: 'Sejarah dan daftar cabang 4 marga utama Simalungun: Sinaga, Saragih, Damanik, dan Purba.',
  },
];
