// Data portal: mapel, materi ringkas, video YouTube, topik soal kuis.
// Diisi dengan materi nyata sesuai soal di kuis SAS 1 Kelas 4.
window.PORTAL_DATA = {
  "matematika": {
    label: "Matematika",
    emoji: "📐",
    semester: "Semester 1",
    deskripsi: "Bilangan cacah, operasi hitung, faktor & kelipatan, pecahan, serta pola bilangan.",
    topik: ["Bilangan Cacah & Nilai Tempat","Operasi Hitung (Tambah, Kali, Bagi)","Faktor & Kelipatan","Pecahan, Desimal & Persen","Pola Bilangan & Pola Gambar"],
    materi: [
      {judul:"Bilangan Cacah & Nilai Tempat", isi:"Bilangan cacah adalah bilangan yang dimulai dari 0, 1, 2, 3, dan seterusnya. Setiap angka pada bilangan memiliki nilai tempat: satuan, puluhan, ratusan, ribuan. Contoh pada bilangan 8.395, angka 3 menempati nilai tempat ratusan, sehingga nilainya 300. Untuk menulis bilangan, gunakan dekomposisi: 5.382 = 5.000 + 300 + 80 + 2."},
      {judul:"Operasi Hitung", isi:"Penjumlahan dan pengurangan bilangan cacah dilakukan per nilai tempat dari kanan. Perkalian adalah penjumlahan berulang: 234 × 3 = 234 + 234 + 234 = 702. Pembagian adalah pembagian rata: 36 kue ÷ 6 anak = 6 kue per anak. Selalu periksa kembali hasil hitung dengan operasi kebalikannya."},
      {judul:"Faktor & Kelipatan", isi:"Faktor dari suatu bilangan adalah bilangan yang dapat membagi habis bilangan tersebut. Contoh himpunan faktor 12 adalah {1, 2, 3, 4, 6, 12}. Kelipatan suatu bilangan diperoleh dengan mengalikannya: kelipatan 5 yang pertama adalah 5, 10, 15, 20."},
      {judul:"Pecahan, Desimal & Persen", isi:"Pecahan menyatakan bagian dari keseluruhan. Pecahan senilai adalah pecahan yang nilainya sama, misalnya 1/2 = 2/4 = 3/6. Desimal 0,25 sama dengan pecahan 25/100 = 1/4. Persen adalah pecahan per seratus: 40% = 0,4 = 40/100. Untuk mengubah pecahan ke persen, kalikan dengan 100."},
      {judul:"Pola Bilangan & Pola Gambar", isi:"Pola bilangan adalah urutan bilangan dengan aturan tertentu. Pola naik 5, 10, 15, 20, ... memiliki aturan +5, sehingga suku ke-7 adalah 5 × 7 = 35. Pola gambar bintang bertambah 2 setiap urutan (2, 4, 6, 8), sehingga urutan ke-n berisi 2 × n bintang."}
    ],
        video: [
      {id:"R5R51RHmbrI", judul:"Nilai Tempat Bilangan — Matematika Kelas 4 SD", sumber:"Pojok Kelas"},
      {id:"6kM-GPczs-k", judul:"Menentukan & Menggunakan Nilai Tempat Bilangan Cacah", sumber:"Buyung Andis"},
      {id:"V298M_22YNA", judul:"FPB dan KPK — Matematika Kelas 4 SD", sumber:"Nita Cahyo"},
      {id:"qxYSQDnLhK8", judul:"Cara Mencari FPB dan KPK dengan Sederhana", sumber:"Tintus Edu"},
      {id:"z4DvDVi6Ong", judul:"Pecahan Senilai — Matematika Kelas 4 SD", sumber:"Kurikulum Merdeka"},
      {id:"lP_eabdWFo8", judul:"Bab 2: Pecahan Senilai (Penjelasan Lengkap)", sumber:"Matematika Kelas 4 Semester 1"},
    ],
    pdf: { href: "https://drive.google.com/uc?export=download&id=1fIzBjN3aC0_-bbTh3xYwkHHlfi7MxjA8", nama: "Buku Siswa Matematika Kelas 4 (Kurikulum Merdeka)", sumber: "Google Drive (Buku Sekolah)" }
  },
  "ipas": {
    label: "IPAS",
    emoji: "🌱",
    semester: "Semester 1",
    deskripsi: "Energi & perubahannya, gaya & magnet, fotosintesis, peta, serta cuaca & lingkungan.",
    topik: ["Energi & Perubahannya","Gaya & Gaya Gesek","Magnet","Fotosintesis","Peta, Skala & Ketampakan","Cuaca, Bumi & Lingkungan"],
    materi: [
      {judul:"Energi & Perubahannya", isi:"Energi tidak dapat diciptakan atau dimusnahkan, hanya berubah bentuk. Energi listrik pada setrika berubah menjadi energi panas. Energi kimia dari makanan berguna bagi tubuh sebagai sumber tenaga. Contoh perubahan energi cahaya: lampu menyala (listrik → cahaya), tanaman memasak makanan (cahaya → kimia)."},
      {judul:"Gaya & Gaya Gesek", isi:"Gaya adalah dorongan atau tarikan terhadap suatu benda yang dapat mengubah bentuk, gerak, atau arah benda. Gaya gesek adalah gaya yang muncul ketika dua permukaan saling bergesekan. Cara memperbesar gaya gesek: memperluas permukaan atau memperkasar permukaan. Contoh: memperkasar ban agar tidak slip."},
      {judul:"Magnet", isi:"Magnet memiliki dua kutub: utara dan selatan. Benda yang dapat ditarik magnet adalah benda berbahan besi atau baja. Dua magnet dengan kutub sama (utara-utara) jika didekatkan akan saling menolak, sedangkan kutub berbeda akan saling menarik. Kompas menggunakan magnet untuk menunjukkan arah utara-selatan."},
      {judul:"Fotosintesis", isi:"Fotosintesis adalah proses pembuatan makanan oleh tumbuhan hijau menggunakan cahaya matahari, air, dan karbon dioksida. Klorofil (zat hijau daun) berfungsi menangkap cahaya matahari. Hasil fotosintesis adalah zat makanan (glukosa) dan oksigen yang bermanfaat bagi makhluk hidup lain."},
      {judul:"Peta, Skala & Ketampakan", isi:"Peta adalah gambar permukaan bumi pada bidang datar dengan skala tertentu. Peta yang menampilkan informasi penduduk, tanaman, dan hewan disebut peta tematik. Skala peta 1:100.000 berarti 1 cm di peta = 100.000 cm = 1 km di sebenarnya. Simbol garis pada peta menunjukkan jalan atau sungai."},
      {judul:"Cuaca, Bumi & Lingkungan", isi:"Cuaca dibentuk oleh suhu, kelembapan, angin, dan awan. Lapisan bumi paling luar yang kita pijak adalah kulit bumi (kerak). Lapisan bumi yang mengandung banyak logam disebut inti bumi. Pemanasan global menyebabkan es di kutub mencair, permukaan laut naik, dan cuaca tidak menentu. Jaga lingkungan dengan tidak membuang sampah sembarangan."}
    ],
        video: [
      {id:"nlXwuNHF8JM", judul:"Proses Fotosintesis pada Tumbuhan — IPAS Kelas 4", sumber:"Ratih Setyaningrum"},
      {id:"7JTCfih_T3A", judul:"Fotosintesis pada Tumbuhan (Penjelasan)", sumber:"Fendra Nugroho"},
      {id:"zjThHqsqpIQ", judul:"Pengelompokan Hewan — IPAS Kelas 4 SD", sumber:"PMPD 2025"},
      {id:"UwAFvY_eoX4", judul:"Hewan Berdasarkan Makanannya (Karnivora/Herbivora/Omnivora)", sumber:"Ida Matul Izah"},
      {id:"lmjtybyvuJk", judul:"Rahasia Gaya Magnet — IPAS Kelas 4 SD", sumber:"Kurikulum Merdeka"},
      {id:"INw1dt9s4oE", judul:"Jenis Hewan Berdasarkan Makanannya", sumber:"Aisah Nur Fitri"},
    ],
    pdf: { href: "https://drive.google.com/uc?export=download&id=1Kg4N4m78zbmPjVEqK3TS0NVv1CusfgBs", nama: "Buku Siswa IPAS Kelas 4 (Kurikulum Merdeka)", sumber: "Google Drive (Buku Sekolah)" }
  },
  "b_indonesia": {
    label: "Bahasa Indonesia",
    emoji: "📝",
    semester: "Semester 1",
    deskripsi: "Teks cerita, kalimat transitif, ide pokok paragraf, imbuhan, serta pendapat & wawancara.",
    topik: ["Teks Cerita & Tokoh","Kalimat Transitif & Intransitif","Ide Pokok Paragraf","Imbuhan me- & ber-","Pendapat, Sanggahan & Wawancara"],
    materi: [
      {judul:"Teks Cerita & Tokoh", isi:"Cerita memiliki tokoh dengan permasalahan dan penyelesaian. Dalam cerita 'Agus Ingin Membantu Teman', permasalahan inti melibatkan tokoh Budi yang membutuhkan bantuan. Membaca cerita dengan teliti membantu kita memahami perasaan tokoh dan pesan yang ingin disampaikan."},
      {judul:"Kalimat Transitif & Intransitif", isi:"Kalimat transitif adalah kalimat yang predikatnya memerlukan objek, contoh: 'Ibu memasak nasi' (S-P-O). Kalimat intransitif adalah kalimat yang predikatnya tidak memerlukan objek, contoh: 'Adik tertawa'. Pola S-P-O adalah Subjek-Predikat-Objek; ditambah keterangan menjadi SPOK."},
      {judul:"Ide Pokok Paragraf", isi:"Ide pokok adalah gagasan utama yang menjadi dasar pengembangan sebuah paragraf. Ide pokok biasanya terletak di kalimat utama, bisa di awal, di akhir, atau di awal-akhir paragraf. Mencari ide pokok: tanyakan 'tentang apa paragraf ini sebenarnya?'. Paragraf argumentasi dibangun dari rangkaian pendapat, alasan, dan bukti."},
      {judul:"Imbuhan me- & ber-", isi:"Awalan me- pada kata dasar yang dimulai huruf b, f, v berubah menjadi mem-. Contoh: me- + baca = membaca. Awalan ber- menyatakan memiliki atau melakukan, contoh: 'bertani' (berusaha di ladang). Kata berimbuhan harus dipakai sesuai kaidah agar kalimat bermakna tepat."},
      {judul:"Pendapat, Sanggahan & Wawancara", isi:"Pendapat yang meyakinkan harus disertai alasan atau bukti. Sanggahan yang santun dan efektif dimulai dengan pengakuan, baru bantahan, misalnya: 'Saya setuju sebagian, namun...'. Wawancara adalah tanya jawab untuk memperoleh informasi; narasumber adalah pihak yang diwawancara. Gunakan kata tanya yang tepat: apa, mengapa, bagaimana, kapan, siapa."}
    ],
        video: [
      {id:"lfRMxnr0h2M", judul:"Teks Narasi — Bahasa Indonesia Kelas 4", sumber:"Betty Marlina"},
      {id:"IFg9NaZtqZ4", judul:"Teks Cerita — Bahasa Indonesia Kelas 4", sumber:"SD Birrul Sragen"},
      {id:"CfhmEyvUKTo", judul:"Teks Narasi (Penjelasan & Contoh)", sumber:"Kejarcita"},
      {id:"BO056iHJ6co", judul:"Kalimat Transitif & Intransitif — Kelas 4 SD", sumber:"Kurikulum Merdeka"},
      {id:"fFxujW9T5ec", judul:"Kalimat Transitif dan Intransitif (Bab 2)", sumber:"Bahasa Indonesia Kelas 4"},
      {id:"iVb9A07WlwU", judul:"Pembelajaran Bahasa Indonesia Kelas 4 SD", sumber:"Buk Yat Channel"},
    ],
    pdf: { href: "https://drive.google.com/uc?export=download&id=13vm_4STNNX_P6dAoucrZcQCL-Iezw_3d", nama: "Buku Siswa Bahasa Indonesia Kelas 4 (Kurikulum Merdeka)", sumber: "Google Drive (Buku Sekolah)" }
  },
  "pancasila": {
    label: "Pendidikan Pancasila",
    emoji: "🇮🇩",
    semester: "Semester 1",
    deskripsi: "Keberagaman bangsa, pemerintahan desa, ketampakan, aturan, serta hak & kewajiban.",
    topik: ["Keberagaman Bangsa","Pemerintahan Desa","Ketampakan Alam & Buatan","Aturan di Keluarga & Sekolah","Hak & Kewajiban Anak"],
    materi: [
      {judul:"Keberagaman Bangsa", isi:"Indonesia memiliki keberagaman suku, agama, ras, dan antar golongan (SARA). Pakaian adat kebaya berasal dari Jawa, rendang dari Sumatra Barat, angklung dari Jawa Barat. Toleransi berarti menghargai perbedaan. Manfaat keberagaman: memperkaya budaya, mempererat persatuan, dan saling belajar."},
      {judul:"Pemerintahan Desa", isi:"Pemerintahan desa adalah satuan pemerintahan terkecil yang mengatur wilayah desa. Struktur pemerintahan desa dipimpin oleh kepala desa dan dibantu perangkat desa (sekretaris desa, kepala dusun). Lurah adalah kepala wilayah tingkat kelurahan; lurah dilantik oleh camat atas nama bupati/wali kota."},
      {judul:"Ketampakan Alam & Buatan", isi:"Ketampakan alam adalah bagian permukaan bumi yang terbentuk secara alami: gunung, sungai, danau, laut. Ketampakan buatan dibuat manusia: jalan, jembatan, waduk. Waduk adalah perairan buatan untuk menampung air, biasanya untuk irigasi, pengairan, dan pembangkit listrik."},
      {judul:"Aturan di Keluarga & Sekolah", isi:"Aturan adalah ketentuan yang harus ditaati bersama. Tujuan aturan: menciptakan ketertiban, ketertiban, dan keadilan. Contoh aturan keluarga: makan bersama, tidur tepat waktu. Contoh aturan sekolah: seragam rapi, tidak terlambat. Jika melanggar aturan ada sanksi. Manfaat menaati aturan: terciptanya keamanan dan kenyamanan."},
      {judul:"Hak & Kewajiban Anak", isi:"Hak adalah sesuatu yang harus diterima. Kewajiban adalah sesuatu yang harus dilakukan. Contoh hak anak di rumah: dikasihi, mendapat pendidikan, mendapat makan. Kewajiban harus dilaksanakan terlebih dahulu sebelum menuntut hak. Contoh kewajiban anak di sekolah: belajar tekun, menghormati guru, menjaga kebersihan kelas."}
    ],
        video: [
      {id:"9w9mODrBWnE", judul:"Animasi Simbol Sila Pancasila", sumber:"Hikmah Triyani"},
      {id:"qD339HjXGBk", judul:"Makna 5 Lambang Sila Pancasila", sumber:"Majalah Bobo"},
      {id:"_0PvJh-RE9M", judul:"Lagu Simbol Sila Pancasila (Lagu Anak)", sumber:"DenDis"},
      {id:"faQcT9WSuco", judul:"Hak dan Kewajiban — PPKN Kelas 4 Bab 2", sumber:"Bimbel Online"},
      {id:"C8UEQlge4yQ", judul:"Hak dan Kewajiban Anak — Pendidikan Pancasila", sumber:"Guru Belajar86"},
      {id:"OTyVK-sUBIw", judul:"Garuda Pancasila — Lagu Wajib Nasional", sumber:"Lagu Nasional"},
    ],
    pdf: { href: "https://drive.google.com/uc?export=download&id=1g92GfjDUkcCYGsgT_tfEr_-yjvdcqsGI", nama: "Buku Siswa Pendidikan Pancasila Kelas 4 (Kurikulum Merdeka)", sumber: "Google Drive (Buku Sekolah)" }
  },
  "b_inggris": {
    label: "Bahasa Inggris",
    emoji: "🔤",
    semester: "Semester 1",
    deskripsi: "Telling time, daily activities, taste, size & shape, dan toys.",
    topik: ["Telling Time (Jam)","Daily Activities","Taste (Rasa)","Size & Shape","Toys (Mainan)"],
    materi: [
      {judul:"Telling Time (Jam)", isi:"Untuk bertanya waktu: 'What time is it?'. Pukul 07.00 = It is seven o'clock. Pukul 08.00 = It is eight o'clock. Pukul 07.30 = It is half past seven atau seven thirty. Short hand (jarum pendek) menunjuk angka, long hand (jarum panjang) di angka 12 artinya tepat pukul."},
      {judul:"Daily Activities (Aktivitas Sehari-hari)", isi:"Aktivitas pagi (morning activity) dan aktivitas harian (daily activity). Urutan benar: I wake up → I take a bath → I have breakfast → I go to school. Terjemahan: 'sarapan' = breakfast, 'aktivitas pagi' = morning activity. Gunakan Simple Present Tense untuk rutinitas."},
      {judul:"Taste (Rasa)", isi:"sweet = manis (gula), sour = asam (lemon), bitter = pahit (kopi), salty = asin (garam). Contoh kalimat: 'The apple is sweet.' 'The lemon is sour.' 'The coffee is bitter.' Untuk menanyakan rasa: 'How does it taste?'."},
      {judul:"Size & Shape (Ukuran & Bentuk)", isi:"big = besar, small = kecil, tall = tinggi, short = pendek, long = panjang. Shape (bentuk): round = bulat (bola), rectangular = persegi panjang (buku). Contoh: 'The toy robot is taller than the toy car.' artinya robot lebih tinggi dari mobil mainan."},
      {judul:"Toys (Mainan)", isi:"Toys adalah mainan. Contoh: toy car (mobil-mobilan), toy robot (robot mainan), ball (bola). Untuk menyebut ukuran mainan: 'The toy car is bigger than the ball.' Terjemahan: big = besar, small = kecil, round = bulat."}
    ],
        video: [
      {id:"d3ulKq-pQ8Q", judul:"Telling Time — Bahasa Inggris Kelas 4 SD", sumber:"Kurikulum Merdeka"},
      {id:"ThwiGd5EaZI", judul:"Daily Activities & Daily Routines", sumber:"Bahasa Inggris Kelas 4"},
      {id:"LBTW92gwepQ", judul:"Pet Animals — Binatang Peliharaan", sumber:"Kejarcita"},
      {id:"Y5vN0FRg050", judul:"My Pets — Binatang Peliharaanku", sumber:"Miss Esti"},
      {id:"RU_e4MUFNfQ", judul:"Fruits and Vegetables — Bahasa Inggris Kelas 4", sumber:"Primagama Jepara"},
      {id:"W5MunpE_nMk", judul:"Favourite Food & Drink — Kelas 4", sumber:"Video Pendidikan Indonesia"},
    ],
    pdf: { href: "https://drive.google.com/uc?export=download&id=1dwtP-pYLVdbHFex3nUFt4WNL7v-Oyv0b", nama: "Buku Siswa Bahasa Inggris Kelas 4 (Kurikulum Merdeka)", sumber: "Google Drive (Buku Sekolah)" }
  },
  "b_jawa": {
    label: "Bahasa Jawa",
    emoji: "🎭",
    semester: "Semester 1",
    deskripsi: "Geguritan, tokoh Yudhistira, tradhisi Begalan, dan sandhangan swara aksara Jawa.",
    topik: ["Geguritan","Tokoh Yudhistira","Tradhisi Begalan","Sandhangan Swara"],
    materi: [
      {judul:"Geguritan (Puisi Jawa)", isi:"Geguritan iku karya sastra Jawa sing wujude guritan utawa puisi. Ciri geguritan: kaendahan basa, pola lan rima, ngemot rasa lan pesen. Tema geguritan sing ngandharake babagan alam kasebut tema alam. Nalika maca geguritan, wigati nggatekake laras (nada), palet (rasa), lan rima (pola bunyi)."},
      {judul:"Tokoh Yudhistira", isi:"Yudhistiraiku salah sijine tokoh Pandhawa. Yudhistira iku saudara tuwa dhewe (kangmas) saka Bima, Arjuna, Nakula, lan Sadewa. Sifat Yudhistira sing bisa diteladani: jujur, sabar, lan ora srakah. Pesen moral: tansah tetep jujur apa wahe kahanane, amarga kejujuran nggawa berkah."},
      {judul:"Tradhisi Begalan", isi:"Begalan iku tradhisi masyarakat Jawa sing asale saka daerah Banyumas. Tujuane pelaksanaan tradhisi Begalan yaiku kanggo nambut srah-srahan (srah-terima) manten. Perlengkapan sing digunakake yaiku perkakas dapur kayu: ilir, tampah, kemenyan, lan liya-liyane. Piwulang sing kasimpen: sakabehing perkakas nduweni teges filosofis babagan urip bebrayan."},
      {judul:"Sandhangan Swara (Aksara Jawa)", isi:"Sandhangan swara iku duwe fungsi kanggo ngowahi lan nambahi swara vokal ing aksara Jawa. Macam-macam sandhangan swara: wulu (bunyi i), suku (bunyi u), taling (bunyi é), pepet (bunyi e). Sandhangan wulu ngasilake swara vokal 'i', dene sandhangan suku ngasilake swara vokal 'u'. Conto: aksara 'ba' diwenehi sandhangan wulu dadi diwaca 'bi'."}
    ],
        video: [
      {id:"Enb-jclXiy8", judul:"Mengenal Sandhangan Aksara Jawa", sumber:"Bahasa Jawa Kelas 4"},
      {id:"N_SS8SCc90I", judul:"Sandhangan Aksara Jawa — Semester 2", sumber:"Kurikulum Merdeka"},
      {id:"fnFE0ur6BJE", judul:"Basa Ngoko lan Krama — Unggah-ungguh Basa", sumber:"Iimsani"},
      {id:"Y5r0nYpKGAg", judul:"Sinau Unggah-ungguh Basa Kelas 4", sumber:"Evi Wulandari"},
      {id:"1AbQ64pr5CA", judul:"Sinau Tatakrama ing Pacelathon", sumber:"SAE SMART"},
      {id:"dHIFlnKlW2I", judul:"Belajar Menulis Aksara Jawa (Ha Na Ca Ra Ka)", sumber:"Belajar Aksara Jawa"},
    ],
    pdf: { href: "/materi-bahasa-jawa-kelas4.pdf", nama: "Buku Basa Jawa 'Uniknya Bahasa Jawaku' (Badan Bahasa)", sumber: "Lokal" }
  },
  "seni_rupa": {
    label: "Seni Rupa",
    emoji: "🎨",
    semester: "Semester 1",
    deskripsi: "Sketsa & kostum, bahan keras (tanah liat, gips), seni 2 & 3 dimensi, dan diorama.",
    topik: ["Sketsa & Unsur Sketsa","Pakaian & Sketsa Kostum","Bahan Keras (Tanah Liat, Gips)","Seni 2 & 3 Dimensi","Diorama & Seni Lingkungan"],
    materi: [
      {judul:"Sketsa & Unsur Sketsa", isi:"Sketsa adalah gambar rancangan yang dibuat dengan cepat sebagai ide awal. Unsur utama pembentuk sketsa adalah garis. Unsur lain: titik, bidang, gelap-terang. Alat untuk membuat sketsa: pensil, pulpen, kertas. Fungsi sketsa: sebagai rancangan atau acuan sebelum membuat karya sesungguhnya, misalnya sebelum menjahit pakaian."},
      {judul:"Pakaian & Sketsa Kostum", isi:"Jenis pakaian sehari-hari: kaos, kemeja, sweater, celana. Pakaian impian adalah pakaian yang diinginkan, sesuai minat. Sketsa kostum cosplay bertujuan untuk merancang bentuk pakaian tokoh yang akan diperankan. Sketsa bentuk dasar rok biasanya digambar dengan bentuk dasar segitiga atau trapesium."},
      {judul:"Bahan Keras (Tanah Liat, Gips)", isi:"Bahan keras alam adalah bahan dari alam yang bersifat keras: batu, kayu, tanah liat. Tanah liat mudah dibentuk karena lunak dan lembut saat basah, lalu mengeras setelah kering/dibakar. Gips adalah bahan mineral padat berwarna putih, dipakai untuk cetak cetakan. Cat akrilik berbahan dasar plastik (akrilik)."},
      {judul:"Seni 2 & 3 Dimensi", isi:"Karya seni rupa 2 dimensi: karya yang memiliki panjang dan lebar, contoh lukisan, gambar. Karya seni rupa 3 dimensi: karya yang memiliki panjang, lebar, dan volume (tebal), contoh patung, gerabah, keramik. Gerabah/keramik dari tanah liat termasuk karya 3 dimensi buatan tangan. Guci termasuk karya seni rupa berdimensi 3."},
      {judul:"Diorama & Seni Lingkungan", isi:"Diorama adalah karya 3 dimensi yang menggambarkan adegan/bentang alam dalam kotak. Bahan dasar diorama: kardus, tanah liat, kertas warna. Seni lingkungan (environmental art) bertujuan mempercantik lingkungan dan menyadarkan orang untuk menjaga alam. Warna primer (utama) yang tidak berasal dari campuran: merah, biru, kuning."}
    ],
        video: [
      {id:"y__iORZ-n8M", judul:"Praktik Teknik Pilin (Coiling) Tanah Liat — Membuat Gerabah", sumber:"Dea Permata"},
      {id:"6o00tCNxsmo", judul:"Teknik Pinching dan Coiling Keramik", sumber:"Martkas Seni"},
      {id:"8ZAncVL9OwI", judul:"Praktik Membuat Diorama Sederhana — Kelas 4", sumber:"Mustikaa"},
      {id:"b0oU54cFHvA", judul:"Miniatur Rumah Adat — Praktik Kelas 4", sumber:"SD Muhtadin TV"},
      {id:"FFcqlMfl5h0", judul:"Praktik Membuat Poster 'Hemat Energi'", sumber:"Janu Art"},
      {id:"LEHcmgi5uc8", judul:"Membuat Gerabah dari Tanah Liat (Tutorial)", sumber:"Kurikulum Merdeka"},
    ],
    pdf: { href: "https://drive.google.com/uc?export=download&id=1m5Yn3JOpDvATrlLIyA4ROHVe7t8HFra6", nama: "Buku Guru Seni Rupa Kelas 4 (Kurikulum Merdeka)", sumber: "Google Drive (Buku Sekolah)" }
  },
  "b_banyumas": {
    label: "Budaya Banyumasan",
    emoji: "🏯",
    semester: "Semester 1",
    deskripsi: "Tata krama, makanan khas (combro, mendoan), permainan bentengan, begalan, dan alat pertanian.",
    topik: ["Tata Krama di Sekolah","Makanan Khas Banyumas","Permainan Bentengan","Kesenian Begalan","Alat Pertanian Tradisional"],
    materi: [
      {judul:"Tata Krama di Sekolah", isi:"Tata krama yang baik saat tiba di sekolah: mengucap salam kepada guru dan teman. Saat pelajaran dimulai: mendoakan bersama, menjaga ketenangan. Jika terlambat: meminta izin dan meminta maaf kepada guru sebelum masuk kelas. Saat pelajaran berlangsung: menyimak dengan tenang. Saat pulang sekolah: mengucap terima kasih dan salam kepada guru."},
      {judul:"Makanan Khas Banyumas", isi:"Makanan khas Banyumas banyak berbahan dasar singkong: combro, mendoan, getuk singkong, dan timus. Combro dibuat dengan cara digoreng, isinya kelapa. Mendoan dibuat dari tempe dibalung tepung, digoreng setengah matang. Tempat wadah disesuaikan bahan: getuk biasanya dibungkus daun pisang. Bahan combro: singkong parut, kelapa, bumbu, garam."},
      {judul:"Permainan Tradisional Bentengan", isi:"Bentengan adalah permainan tradisional dari daerah Banyumas. Jumlah pemain biasanya 8-12 orang, dibagi 2 regu. Aturan: tiap regu wajib menjaga benteng (markas) masing-masing supaya tidak dikuasai lawan. Nilai luhur yang terkandung: kerja sama, sportivitas, kekompakan. Istilah 'bentengan' di Jawa Timur dikenal sebagai gobak sodor."},
      {judul:"Kesenian Begalan", isi:"Begalan adalah kesenian tradisi dari Banyumas, digandhengake karo upacara perkawinan (srah-terima). Tokoh pemeran disebut 'pak bangsok' atau 'warok begalan'. Perkakas dapur yang dibawa diberi makna filosofis, contoh: ilir (pengayak) melambangkan ketenangan, tampah melambangkan kesabaran. Perlengkapan: ilir, tampah, kemenyan, saringan, dan sebagainya."},
      {judul:"Alat Pertanian Tradisional", isi:"Alat pertanian tradisional Banyumas: luku (untuk membajak sawah), ani-ani (untuk memotong padi saat panen), garu (meratakan tanah), cangkul (menggemburkan tanah), arit (memotong rumput/gulma). Luku ditarik hewan (kerbau/sapi) untuk mengolah sawah. Alat-alat ini mencerminkan kearifan lokal masyarakat tani Banyumas."}
    ],
        video: [
      {id:"Jekvp3p0yAo", judul:"Membuat Combro — Budaya Banyumasan Kelas 4", sumber:"Materi Mulok Kelas 4 SD"},
      {id:"BfvFoV0aLv8", judul:"Resep Gorengan Mudah (Combro/Mendoan)", sumber:"Dapur Atik"},
      {id:"s071gXhTz0M", judul:"Kesenian Ebeg Banyumasan — Gelar Seni Rakyat", sumber:"Badan Penghubung Jateng"},
      {id:"Pzywo6IAE9U", judul:"Kesenian Rakyat Kuda Kepang 'Ebeg Banyumasan'", sumber:"Indonesia Culture"},
      {id:"fnkLThZIvBo", judul:"Lebih Dekat dgn Kesenian Ebeg Asli Banyumas", sumber:"Cahunsoedcom"},
      {id:"8Rhqj6yd1tI", judul:"Begalan Banyumasan — Tradisi Seni", sumber:"Kesenian Banyumasan"},
    ],
    pdf: { href: "/materi-budaya-banyumasan-kelas4.pdf", nama: "Materi Budaya Banyumasan Kelas 4 (Ringkas)", sumber: "Lokal" }
  }
};
