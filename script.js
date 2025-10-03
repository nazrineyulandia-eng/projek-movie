/*
  Static/local-data script for the project.
  - searchMovies(query): searches local dataset
  - trendingMovies(): returns curated trending list
  - renderResults(data): renders card grid into #results
  - favorites stored in localStorage (key: 'favorites')
*/

const IMAGE_PLACEHOLDER = 'https://via.placeholder.com/500x750?text=No+Poster';
const MOVIES = [
    {
        id: 1,
        title: 'The Shawshank Redemption',
        release_date: '1994-09-23',
        poster_path: 'https://image.tmdb.org/t/p/w500/q6y0Go1tsGEsmtFryDOJo3dEmqu.jpg',
        overview: 'Andy Dufresne, seorang bankir muda yang sukses, divonis penjara seumur hidup atas pembunuhan istri dan kekasihnya, meski ia mengaku tidak bersalah. Di penjara Shawshank yang keras dan korup, Andy akhirnya berteman dengan sesama narapidana, Ellis Boyd "Red" Redding, seorang penyelundup barang terlarang. Selama hampir dua dekade, Andy menjadi instrumen dalam skema pencucian uang yang dipimpin oleh sipir penjara Samuel Norton. Dengan kecerdasan dan determinasinya, Andy secara perlahan mendapat respek dari sesama narapidana, terutama Red, sambil menjaga harapan dan martabatnya. Film ini mengeksplorasi tema persahabatan, harapan, dan penebusan dosa dalam lingkungan yang paling tidak mungkin.',
        genres: ['Drama', 'Crime'],
        trailer_url: 'https://www.youtube.com/embed/6hB3S9bIaco',
        imdb_rating: 9.3
    },
    {
        id: 2,
        title: 'The Godfather',
        release_date: '1972-03-14',
        poster_path: 'https://image.tmdb.org/t/p/w500/3bhkrj58Vtu7enYsRolD1fZdja1.jpg',
        overview: 'Berlatar di New York tahun 1945-1955, film ini mengisahkan transformasi Michael Corleone dari anggota keluarga yang tidak ingin terlibat dalam bisnis keluarga menjadi pemimpin kejam salah satu dinasti kejahatan paling kuat di Amerika. Ketika patriark keluarga Vito Corleone selamat dari percobaan pembunuhan, Michael mengambil alih untuk membalas dendam dan melindungi keluarganya. Dengan latar belakang Amerika pasca-Perang Dunia II, film ini menampilkan gambaran mendalam tentang kekuasaan, keluarga, tradisi, dan korupsi yang mengakar dalam masyarakat Amerika. Francis Ford Coppola menghadirkan epik yang memukau tentang kejahatan terorganisir dengan kompleksitas karakter yang luar biasa.',
        genres: ['Crime', 'Drama'],
        trailer_url: 'https://www.youtube.com/embed/sY1S34973zA',
        imdb_rating: 9.2
    },
    {
        id: 3,
        title: 'The Dark Knight',
        release_date: '2008-07-14',
        poster_path: 'https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg',
        overview: 'Batman, James Gordon dan Harvey Dent bergabung untuk membersihkan kejahatan terorganisir di Gotham City. Namun, upaya mereka terganggu oleh kemunculan Joker, seorang penjahat anarki yang ingin menjerumuskan Gotham ke dalam kekacauan. Joker memaksa Batman menghadapi aturan moralnya yang paling ketat, sementara teror yang diciptakannya mengancam untuk menghancurkan segala sesuatu yang telah diperjuangkan Batman. Film ini mengeksplorasi tema keadilan, kekacauan, dan pengorbanan, sambil menampilkan pertarungan psikologis yang intens antara Batman dan Joker. Heath Ledger memberikan penampilan ikonik sebagai Joker yang menghantui, menciptakan salah satu villain terbaik dalam sejarah perfilman. Christopher Nolan menghadirkan film superhero yang gelap, realistis, dan penuh dengan dilema moral.',
        genres: ['Action', 'Crime', 'Drama'],
        trailer_url: 'https://www.youtube.com/embed/EXeTwQWrcwY',
        imdb_rating: 9.0
    },
    {
        id: 4,
        title: 'Inception',
        release_date: '2010-07-15',
        poster_path: 'https://image.tmdb.org/t/p/w500/9gk7adHYeDvHkCSEqAvQNLV5Uge.jpg',
        overview: 'Dom Cobb adalah seorang pencuri terampil yang mengkhususkan diri dalam seni ekstraksi - mencuri rahasia dari alam bawah sadar seseorang saat mereka bermimpi. Kemampuan langka Cobb telah membuatnya menjadi pemain yang dicari dalam dunia mata-mata korporat yang berbahaya, tetapi ini juga membuatnya menjadi buronan internasional dan kehilangan segalanya yang dicintainya. Sekarang Cobb ditawari kesempatan untuk menebus kesalahannya. Satu pekerjaan terakhir bisa mengembalikan hidupnya, tetapi hanya jika dia bisa menyelesaikan yang mustahil - inception. Alih-alih pencurian sempurna, Cobb dan timnya harus melakukan kebalikannya: tugas mereka bukan mencuri ide, tetapi menanamkannya. Jika mereka berhasil, ini bisa menjadi kejahatan sempurna. Namun, tidak ada perencanaan atau keahlian yang dapat mempersiapkan tim untuk musuh berbahaya yang tampaknya mengantisipasi setiap gerakan mereka.',
        genres: ['Action', 'Science Fiction', 'Adventure'],
        trailer_url: 'https://www.youtube.com/embed/YoHD9XEInc0',
        imdb_rating: 8.8
    },
    {
        id: 5,
        title: 'Parasite',
        release_date: '2019-05-30',
        poster_path: 'https://image.tmdb.org/t/p/w500/7IiTTgloJzvGI1TAYymCfbfl3vT.jpg',
        overview: 'Keluarga Ki-taek menjalani kehidupan yang sulit di apartemen semi-basement yang kumuh. Mereka bergantung pada pekerjaan serabutan dan WiFi gratis dari tetangga. Ketika anak tertua, Ki-woo, mendapat kesempatan untuk mengajar bahasa Inggris kepada anak keluarga kaya Park, dia melihat peluang untuk mengubah nasib keluarganya. Ki-woo meyakinkan keluarga Park untuk mempekerjakan saudara perempuannya sebagai guru seni untuk anak bungsu mereka, dengan menyamar sebagai mahasiswa bergengsi. Perlahan, seluruh keluarga Ki-taek berhasil menyusup ke rumah tangga keluarga Park dengan identitas palsu. Namun, kedamaian semu ini terguncang ketika rahasia kelam terungkap. Bong Joon-ho menciptakan thriller sosial yang brilian tentang ketimpangan kelas, materialisme, dan sifat manusia yang kompleks. Film ini memenangkan Palme d\'Or dan menjadi film berbahasa asing pertama yang memenangkan Oscar Best Picture.',
        genres: ['Comedy', 'Drama', 'Thriller'],
        trailer_url: 'https://www.youtube.com/embed/5xH0HfJHsaY',
        imdb_rating: 8.5
    },
    {
        id: 6,
        title: 'Spirited Away',
        release_date: '2001-07-20',
        poster_path: 'https://image.tmdb.org/t/p/w500/39wmItIWsg5sZMyRUHLkWBcuVCM.jpg',
        overview: 'Chihiro, gadis berusia 10 tahun yang pemarah dan manja, sedang pindah ke rumah baru bersama orang tuanya. Dalam perjalanan, mereka tersesat dan menemukan terowongan aneh yang mengarah ke kota hantu yang tampaknya ditinggalkan. Orang tua Chihiro mulai makan makanan dari salah satu restoran dan berubah menjadi babi. Chihiro menyadari bahwa dia telah memasuki dunia roh yang dipenuhi dewa, penyihir, dan makhluk supernatural. Untuk menyelamatkan orang tuanya dan kembali ke dunia manusia, Chihiro harus bekerja di rumah pemandian yang dikelola oleh penyihir Yubaba. Dalam petualangannya, Chihiro bertemu berbagai karakter unik termasuk Haku, seorang pemuda misterius yang bisa berubah menjadi naga. Hayao Miyazaki menciptakan dunia fantasi yang menakjubkan dengan tema tentang keberanian, persahabatan, dan pelestarian lingkungan. Film ini menjadi karya terbaik Studio Ghibli dan memenangkan Academy Award untuk Best Animated Feature.',
        genres: ['Animation', 'Family', 'Fantasy'],
        trailer_url: 'https://www.youtube.com/embed/ByXuk9QqQkk',
        imdb_rating: 9.3
    },
    {
        id: 7,
        title: 'Interstellar',
        release_date: '2014-11-05',
        poster_path: 'https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg',
        overview: 'Di masa depan yang tidak terlalu jauh, Bumi mengalami krisis lingkungan dan kelaparan global. Badai debu raksasa melanda planet, dan tanaman pangan satu per satu punah karena penyakit. Cooper, mantan pilot NASA yang kini menjadi petani jagung, menemukan koordinat rahasia yang mengarah ke fasilitas NASA bawah tanah. Di sana, dia bertemu dengan Profesor Brand yang memimpin misi rahasia untuk menyelamatkan umat manusia. Melalui lubang cacing dekat Saturnus, Cooper dan tim menjelajahi tiga planet di galaksi lain untuk mencari rumah baru bagi manusia. Dalam perjalanan yang merentang waktu dan ruang, Cooper harus memilih antara kembali kepada anak-anaknya di Bumi atau menyelamatkan masa depan umat manusia. Christopher Nolan mengombinasikan sains teoretis dengan emosi kemanusiaan dalam epik luar angkasa yang memukau. Film ini mengeksplorasi tema cinta, pengorbanan, dan hubungan antara orang tua dan anak melintasi dimensi ruang dan waktu.',
        genres: ['Adventure', 'Drama', 'Science Fiction'],
        trailer_url: 'https://www.youtube.com/embed/zSWdZVtXT7E',
        imdb_rating: 8.7
    },
    {
        id: 8,
        title: 'The Matrix',
        release_date: '1999-03-30',
        poster_path: 'https://image.tmdb.org/t/p/w500/f89U3ADr1oiB1s9GkdPOEpXUk5H.jpg',
        overview: 'Neo, seorang programmer komputer dan hacker malam hari, hidup dalam keraguan tentang realitas dunia di sekelilingnya. Pertanyaan-pertanyaan aneh dan pesan-pesan kriptik mulai bermunculan, mengarahkannya pada pertemuan dengan Morpheus, pemimpin kelompok pemberontak misterius. Morpheus mengungkap kebenaran yang menghancurkan: dunia yang Neo kenal hanyalah simulasi komputer yang disebut Matrix, diciptakan oleh mesin untuk memperbudak manusia sebagai sumber energi. Tubuh manusia yang sesungguhnya disimpan dalam polong-polong sementara pikiran mereka terperangkap dalam realitas virtual. Neo adalah "Yang Terpilih" yang diprediksi akan menghancurkan Matrix dan membebaskan umat manusia. Bersama Morpheus dan Trinity, Neo harus menguasai kekuatannya dalam dunia virtual untuk menghadapi Agent Smith dan pasukan mesin. Film revolusioner ini mengombinasikan filosofi mendalam dengan aksi spektakuler dan efek visual yang mengubah cara pandang sinema.',
        genres: ['Action', 'Science Fiction'],
        trailer_url: 'https://www.youtube.com/embed/vKQi3bBA1y8',
        imdb_rating: 8.7
    },
    {
        id: 9,
        title: 'Pulp Fiction',
        release_date: '1994-09-10',
        poster_path: 'https://image.tmdb.org/t/p/w500/dM2w364MScsjFf8pfMbaWUcWrR.jpg',
        overview: 'Film kultus Quentin Tarantino ini menceritakan beberapa alur cerita yang saling terkait dalam dunia kriminal Los Angeles. Vincent Vega dan Jules Winnfield adalah dua pembunuh bayaran yang bekerja untuk bos mob Marsellus Wallace. Dalam salah satu tugas mereka, mereka mengalami kejadian yang membuat Jules mempertanyakan hidupnya. Di sisi lain, Butch Coolidge, seorang petinju veteran, ditugaskan untuk kalah dalam pertandingan terakhirnya, tetapi dia memiliki rencana lain. Mia Wallace, istri Marsellus, menghabiskan malam yang berbahaya dengan Vincent. Semua kisah ini terjalin dalam narasi non-linear yang brilian, dipenuhi dengan dialog cerdas, kekerasan bergaya, dan momen-momen tak terduga. Tarantino menciptakan karya yang merayakan budaya pop sambil mengeksplorasi tema penebusan, kebetulan, dan moralitas dalam dunia kejahatan. Film ini merevitalisasi karier John Travolta dan menjadi fenomena budaya yang berpengaruh besar terhadap sinema independen.',
        genres: ['Crime', 'Drama'],
        trailer_url: 'https://www.youtube.com/embed/s7EdQ4FqbhY',
        imdb_rating: 8.9
    },
    {
        id: 10,
        title: 'The Lord of the Rings: The Return of the King',
        release_date: '2003-12-01',
        poster_path: 'https://image.tmdb.org/t/p/w500/rCzpDGLbOoPwLjy3OAm5NUPOTrC.jpg',
        overview: 'Bagian terakhir dari trilogi epik Peter Jackson ini menghadirkan klimaks yang menentukan nasib Middle-earth. Sementara Frodo dan Sam melanjutkan perjalanan berbahaya mereka ke Gunung Doom untuk menghancurkan One Ring, dengan Gollum sebagai pemandu yang tidak dapat dipercaya, Aragorn akhirnya menerima takdirnya sebagai raja Gondor. Gandalf dan Pippin terburu-buru ke Minas Tirith yang terkepung, sementara Théoden mempersiapkan Rohan untuk pertempuran terakhir. Pertempuran Pelennor Fields menjadi konfrontasi terbesar antara kekuatan baik dan jahat, dengan tentara Mordor yang tak terhitung banyaknya melawan gabungan pasukan manusia, elf, kurcaci, dan Ent. Dalam perjalanan paralel yang menegangkan, Frodo menghadapi cobaan terberatnya saat Ring semakin mengkorupsi jiwanya. Film ini mengeksplorasi tema persahabatan, pengorbanan, dan kekuatan harapan dalam menghadapi keputusasaan. Jackson berhasil menciptakan penutup yang memuaskan untuk salah satu adaptasi sastra terbesar dalam sejarah perfilman.',
        genres: ['Adventure', 'Fantasy', 'Action'],
        trailer_url: 'https://www.youtube.com/embed/r5X-hFf6Bwo',
        imdb_rating: 9.0
    },
    {
        id: 11,
        title: 'Fight Club',
        release_date: '1999-10-15',
        poster_path: 'https://image.tmdb.org/t/p/w500/adw6Lq9FiC9zjYEpOqfq03ituwp.jpg',
        overview: 'Seorang pekerja kantoran yang menderita insomnia dan merasa hampa dalam hidupnya yang dipenuhi konsumerisme bertemu dengan Tyler Durden, seorang penjual sabun yang karismatik dan anarkis. Bersama-sama, mereka membentuk fight club bawah tanah di mana pria-pria dapat melepaskan frustrasi mereka melalui perkelahian tanpa aturan. Apa yang dimulai sebagai terapi kelompok alternatif perlahan berkembang menjadi organisasi teroris bawah tanah yang disebut Project Mayhem, yang bertujuan menghancurkan struktur korporat modern. Namun, seiring dengan eskalasi kekerasan, narator mulai kehilangan kendali atas ciptaannya dan mempertanyakan identitas Tyler Durden yang sebenarnya. David Fincher menghadirkan kritik tajam terhadap materialisme, maskulinitas toxic, dan keterasingan dalam masyarakat modern. Film ini menjadi fenomena budaya dengan twist ending yang mengejutkan dan dialog ikonik yang mempertanyakan realitas dan identitas. Berdasarkan novel Chuck Palahniuk, film ini mengeksplorasi tema identitas, konsumerisme, dan pemberontakan terhadap norma sosial.',
        genres: ['Drama'],
        trailer_url: 'https://www.youtube.com/embed/SUXWAEX2jlg',
        imdb_rating: 8.8
    },
    {
        id: 12,
        title: 'Avengers: Endgame',
        release_date: '2019-04-24',
        poster_path: 'https://image.tmdb.org/t/p/w500/or06FN3Dka5tukK1e9sl16pB3iy.jpg',
        overview: 'Setelah peristiwa menghancurkan Infinity War di mana Thanos berhasil memusnahkan setengah dari seluruh kehidupan di alam semesta dengan Infinity Stones, para Avengers yang tersisa terpuruk dalam keputusasaan dan duka. Lima tahun kemudian, ketika Ant-Man kembali dari Quantum Realm, dia membawa harapan baru: kemungkinan untuk melakukan perjalanan waktu dan mengumpulkan Infinity Stones sebelum Thanos mendapatkannya. Tony Stark akhirnya menemukan cara untuk melakukan "Time Heist" yang aman. Para Avengers terpecah menjadi beberapa tim untuk mengunjungi berbagai periode waktu dan lokasi untuk mengambil setiap Stone. Namun, misi mereka memiliki konsekuensi yang tidak terduga ketika Thanos dari masa lalu mengetahui rencana mereka. Pertempuran final antara kekuatan gabungan dari seluruh alam semesta Marvel melawan Thanos dan pasukannya menentukan nasib realitas itu sendiri. Russo Brothers menciptakan klimaks yang emosional dan spektakuler untuk saga Infinity yang mencakup lebih dari 20 film MCU, dengan pengorbanan heroik dan momen-momen yang akan dikenang sepanjang masa.',
        genres: ['Action', 'Adventure', 'Science Fiction'],
        trailer_url: 'https://www.youtube.com/embed/TcMBFSGVi1c',
        imdb_rating: 8.4
    },
    // Narnia Series
    {
        id: 13,
        title: 'The Chronicles of Narnia: The Lion, the Witch and the Wardrobe',
        release_date: '2005-12-07',
        poster_path: 'https://image.tmdb.org/t/p/w500/iREd0rNCjYdf5Ar0vfaW32yrkm.jpg',
        overview: 'Empat anak bersaudara - Peter, Susan, Edmund, dan Lucy Pevensie - dievakuasi dari London selama Perang Dunia II ke rumah Profesor Kirk di pedesaan. Saat bermain petak umpet, Lucy menemukan lemari ajaib yang menjadi portal ke dunia fantasi Narnia. Di sana, dia bertemu Mr. Tumnus, seorang faun yang menceritakan bahwa Narnia dikuasai oleh Penyihir Putih yang menciptakan musim dingin abadi tanpa Natal. Ketika keempat anak masuk ke Narnia, mereka mengetahui dari para binatang yang dapat berbicara bahwa mereka adalah "Anak-anak Adam dan Hawa" yang diprediksi akan mengakhiri tirani Penyihir Putih. Dipimpin oleh Aslan, singa agung raja Narnia, mereka harus belajar keberanian dan pengorbanan untuk membebaskan Narnia. Edmund yang awalnya berkhianat karena tergoda Turkish Delight akhirnya menebus kesalahannya. Film ini mengeksplorasi tema keberanian, pengampunan, dan pertumbuhan karakter melalui petualangan magis yang memukau.',
        genres: ['Adventure', 'Family', 'Fantasy'],
        trailer_url: 'https://www.youtube.com/embed/ussCHoQttyQ',
        imdb_rating: 6.9
    },
    {
        id: 14,
        title: 'The Chronicles of Narnia: Prince Caspian',
        release_date: '2008-05-15',
        poster_path: 'https://image.tmdb.org/t/p/w500/qxz3WIyjZiSKUhaTQEqW4rmBqID.jpg',
        overview: 'Satu tahun setelah petualangan pertama mereka, Peter, Susan, Edmund, dan Lucy kembali dipanggil ke Narnia melalui stasiun kereta api. Namun, mereka menemukan bahwa 1300 tahun telah berlalu di Narnia, dan kerajaan yang mereka pimpin telah hancur. Orang-orang Telmarine yang dipimpin oleh Raja Miraz telah menaklukkan Narnia dan memburu makhluk-makhluk ajaib hingga hampir punah. Pangeran Caspian, pewaris sah takhta Narnia, melarikan diri dari pamannya Miraz yang ingin membunuhnya setelah kelahiran putra Miraz. Caspian meniup Tanduk Susan untuk memanggil bantuan, yang membawa kembali keempat Pevensie. Bersama dengan Reepicheep si tikus pemberani dan sisa-sisa pasukan Narnia lama, mereka harus merebut kembali Narnia dari Telmarine. Film ini mengeksplorasi tema kepercayaan, kepemimpinan, dan bagaimana waktu mengubah segalanya, sambil mempertahankan keajaiban dan petualangan yang memikat.',
        genres: ['Adventure', 'Family', 'Fantasy'],
        trailer_url: 'https://www.youtube.com/embed/268vjQy4UcE',
        imdb_rating: 6.5
    },
    {
        id: 15,
        title: 'The Chronicles of Narnia: The Voyage of the Dawn Treader',
        release_date: '2010-12-02',
        poster_path: 'https://image.tmdb.org/t/p/w500/1xIKJ5WW3hScO95oB6JrVqNmJO6.jpg',
        overview: 'Edmund dan Lucy Pevensie, bersama dengan sepupu mereka yang menyebalkan Eustace Scrubb, tersedot ke dalam lukisan kapal dan menemukan diri mereka di atas Dawn Treader, kapal milik Pangeran Caspian yang kini menjadi raja Narnia. Mereka berlayar ke ujung timur dunia dalam misi untuk menemukan tujuh lord Narnia yang dibuang oleh paman Caspian. Perjalanan mereka penuh dengan pulau-pulau ajaib dan makhluk fantastis: pulau di mana mimpi menjadi kenyataan, naga yang menjaga harta karun, dan air yang mengubah segala sesuatu menjadi emas. Eustace, yang awalnya egois dan sombong, mengalami transformasi literal menjadi naga sebelum belajar tentang kerendahan hati dan keberanian. Aslan memberikan ujian kepada masing-masing karakter, mengajarkan mereka tentang keberanian, ketamakan, dan kekuatan untuk mengatasi godaan. Petualangan laut ini menjadi perjalanan penemuan diri yang mendalam bagi setiap karakter.',
        genres: ['Adventure', 'Family', 'Fantasy'],
        trailer_url: 'https://www.youtube.com/embed/snbpDr_8dg8',
        imdb_rating: 6.3
    },
    // The Conjuring Series
    {
        id: 16,
        title: 'The Conjuring',
        release_date: '2013-07-15',
        poster_path: 'https://image.tmdb.org/t/p/w500/wVYREutTvI2tmxr6ujrHT704wGF.jpg',
        overview: 'Ed dan Lorraine Warren, pasangan investigator paranormal yang terkenal, dipanggil untuk membantu keluarga Perron yang mengalami kejadian supernatural mengerikan di rumah peternakan mereka di Rhode Island tahun 1971. Carolyn dan Roger Perron serta kelima anak perempuan mereka mulai mengalami fenomena aneh: suara-suara misterius, bau busuk yang tidak dapat dijelaskan, dan penampakan sosok-sosok gelap. Seiring waktu, aktivitas semakin intens dan mengancam keselamatan keluarga, terutama ketika kekuatan jahat mulai merasuki Carolyn. Lorraine Warren, yang memiliki kemampuan clairvoyant, merasakan kehadiran entitas yang sangat kuat dan jahat yang terikat pada tanah tersebut. Mereka menemukan bahwa rumah tersebut memiliki sejarah kelam yang melibatkan penyihir bernama Bathsheba Sherman. James Wan menciptakan film horor yang mengandalkan ketegangan psikologis dan atmosfer mencekam daripada shock effect murah, menghadirkan teror yang autentik dan mendalam.',
        genres: ['Horror', 'Mystery', 'Thriller'],
        trailer_url: 'https://www.youtube.com/embed/k10ETZ41q5o',
        imdb_rating: 7.5
    },
    {
        id: 17,
        title: 'The Conjuring 2',
        release_date: '2016-06-08',
        poster_path: 'https://image.tmdb.org/t/p/w500/zEqyD0SBt6HL7W9JQoWwtd5Do1T.jpg',
        overview: 'Ed dan Lorraine Warren melakukan perjalanan ke Enfield, London, untuk membantu Peggy Hodgson dan keempat anaknya yang mengalami aktivitas poltergeist yang mengerikan. Janet Hodgson, anak perempuan berusia 11 tahun, menjadi fokus utama hantu yang mengaku sebagai Bill Wilkins, pemilik rumah yang telah meninggal. Janet mulai berbicara dengan suara pria tua yang menyeramkan dan menunjukkan perilaku yang tidak normal. Sementara itu, Lorraine mengalami visi menakutkan tentang sosok biarawati jahat yang mengancam akan membunuh Ed. Kasus Enfield menjadi salah satu kasus poltergeist yang paling terdokumentasi dalam sejarah, dengan media massa dan skeptik mempertanyakan keaslian fenomena tersebut. Ed dan Lorraine harus menghadapi tidak hanya entitas supernatural yang kuat, tetapi juga keraguan publik dan tantangan terhadap kredibilitas mereka. James Wan kembali menghadirkan horor atmosferik yang menggabungkan ketegangan psikologis dengan jump scare yang efektif, sambil mengeksplorasi tema keluarga dan kepercayaan.',
        genres: ['Horror', 'Mystery', 'Thriller'],
        trailer_url: 'https://www.youtube.com/embed/VFsmuRPClr4',
        imdb_rating: 7.3
    },
    {
        id: 18,
        title: 'The Conjuring: The Devil Made Me Do It',
        release_date: '2021-06-04',
        poster_path: 'https://image.tmdb.org/t/p/w500/xbEy9BAIJiw4Q7PyrozhOq8N2wI.jpg',
        overview: 'Berdasarkan kasus nyata yang menggemparkan, film ini mengikuti Ed dan Lorraine Warren dalam penyelidikan mereka atas pembunuhan yang dilakukan oleh Arne Cheyenne Johnson. Arne mengklaim bahwa dia kerasukan setan saat membunuh tuan tanahnya, menjadikannya kasus pertama dalam sejarah Amerika Serikat di mana kerasukan setan digunakan sebagai pembelaan dalam persidangan pembunuhan. Kasus ini bermula dari eksorsisme yang dilakukan pada David Glatzel, anak berusia 11 tahun yang mengalami kerasukan parah. Selama ritual eksorsisme, Arne menantang setan untuk merasukinya sebagai gantinya, tidak menyadari konsekuensi mengerikan yang akan terjadi. Lorraine dan Ed harus menggali lebih dalam untuk menemukan sumber kutukan yang menghantui keluarga tersebut, yang membawa mereka pada penemuan praktik sihir hitam dan ritual okultis yang berbahaya. Michael Chaves mengambil alih sutradara dari James Wan, membawa formula The Conjuring ke wilayah yang lebih gelap dengan mengeksplorasi tema keadilan, iman, dan batas antara kebaikan dan kejahatan.',
        genres: ['Horror', 'Mystery', 'Thriller'],
        trailer_url: 'https://www.youtube.com/embed/h9Q4zZS2v1k',
        imdb_rating: 6.3
    },
    // Jumanji Series
    {
        id: 19,
        title: 'Jumanji',
        release_date: '1995-12-15',
        poster_path: 'https://image.tmdb.org/t/p/w500/vgpXmVaVyUL7GGiDeiK1mKEKzcX.jpg',
        overview: 'Alan Parrish, seorang anak laki-laki berusia 12 tahun, menemukan permainan papan misterius bernama Jumanji di tahun 1969. Ketika dia dan temannya Sarah mulai bermain, Alan tersedot ke dalam permainan dan menghilang selama 26 tahun. Pada tahun 1995, Judy dan Peter Shepherd, dua anak yatim piatu yang baru pindah ke rumah lama keluarga Parrish, menemukan permainan yang sama. Ketika mereka mulai bermain, mereka membebaskan Alan yang telah dewasa dari dunia Jumanji, namun juga melepaskan berbagai bahaya deadly dari hutan tropis yang mengancam kota Brantford. Gajah, badak, monyet nakal, tanaman karnivora, dan pemburu Van Pelt yang ganas mulai menyebar ke dunia nyata. Alan yang traumatis harus mengatasi ketakutannya dan bekerja sama dengan Sarah (yang kini dewasa dan masih trauma) serta anak-anak untuk menyelesaikan permainan. Hanya dengan mencapai akhir permainan mereka dapat mengembalikan segalanya ke normal. Film Robin Williams ini mengombinasikan petualangan fantasi dengan pesan mendalam tentang menghadapi ketakutan dan konsekuensi dari tindakan kita.',
        genres: ['Adventure', 'Family', 'Fantasy'],
        trailer_url: 'https://www.youtube.com/embed/2QKg5SZ_35I',
        imdb_rating: 7.1
    },
    {
        id: 20,
        title: 'Jumanji: Welcome to the Jungle',
        release_date: '2017-12-20',
        poster_path: 'https://image.tmdb.org/t/p/w500/pSgXKPU5h6U89ipF7HBYajvYt7j.jpg',
        overview: 'Dua puluh satu tahun setelah peristiwa film asli, permainan papan Jumanji telah berevolusi menjadi konsol video game retro. Empat remaja SMA yang berbeda kepribadian - Spencer si kutu buku, Fridge si atlet, Bethany si ratu sekolah, dan Martha si pemalu - terjebak dalam detention dan menemukan konsol game lama. Ketika mereka memilih avatar dan mulai bermain, mereka tersedot ke dalam dunia Jumanji dan menjadi karakter yang mereka pilih. Spencer menjadi Dr. Smolder Bravestone (Dwayne Johnson), penjelajah yang berotot dan pemberani - kebalikan dari kepribadian aslinya. Fridge menjadi Mouse Finbar (Kevin Hart), seorang ahli zoologi dan linguistik yang pendek. Bethany menjadi Professor Sheldon Oberon (Jack Black), seorang ahli kartografi pria gemuk, dan Martha menjadi Ruby Roundhouse (Karen Gillan), seorang penari martial arts yang mematikan. Mereka harus belajar bekerja sama dan menggunakan kekuatan unik masing-masing untuk menyelesaikan misi, menghadapi bahaya Jumanji, dan menemukan cara untuk keluar dari permainan sebelum kehilangan semua nyawa mereka.',
        genres: ['Action', 'Adventure', 'Comedy'],
        trailer_url: 'https://www.youtube.com/embed/2QKg5SZ_35I',
        imdb_rating: 6.9
    },
    // Studio Ghibli Films
    {
        id: 21,
        title: 'Spirited Away',
        release_date: '2001-07-20',
        poster_path: 'https://image.tmdb.org/t/p/w500/39wmItIWsg5sZMyRUHLkWBcuVCM.jpg',
        overview: 'Chihiro, gadis berusia 10 tahun yang pemarah dan manja, terjebak di dunia supernatural setelah keluarganya secara tidak sengaja memasuki terowongan misterius saat dalam perjalanan pindah rumah. Orang tuanya berubah menjadi babi setelah memakan makanan di tempat yang tampak seperti taman hiburan kosong, tetapi sebenarnya adalah dunia roh yang dipenuhi kami (dewa-dewa) dan makhluk supernatural Jepang. Untuk menyelamatkan orang tuanya dan kembali ke dunia manusia, Chihiro harus bekerja di rumah pemandian ajaib milik Yubaba, penyihir tua yang mengumpulkan nama untuk mengontrol orang. Dengan bantuan Haku, seorang anak laki-laki misterius yang dapat berubah menjadi naga, Chihiro belajar keberanian, empati, dan kekuatan dalam dirinya. Dia bertemu berbagai karakter unik seperti No-Face, roh tanpa wajah yang rakus, dan Kaonashi yang kesepian. Hayao Miyazaki menciptakan mahakarya yang mengeksplorasi tema lingkungan, spiritualitas Jepang, dan perjalanan dari kanak-kanak menuju kedewasaan melalui visual yang memukau dan storytelling yang mendalam.',
        genres: ['Animation', 'Family', 'Fantasy'],
        trailer_url: 'https://www.youtube.com/embed/ByXuk9QqQkk'
    },
    {
        id: 22,
        title: 'My Neighbor Totoro',
        release_date: '1988-04-16',
        poster_path: 'https://image.tmdb.org/t/p/w500/rtGDOeG9LzoerkDGZF9dnVeLppL.jpg',
        overview: 'Satsuki dan Mei, dua bersaudara kecil, pindah bersama ayah mereka ke rumah tua di pedesaan Jepang untuk lebih dekat dengan rumah sakit tempat ibu mereka dirawat karena penyakit yang tidak disebutkan secara spesifik. Rumah tua mereka penuh dengan jejak kehadiran makhluk halus yang disebut "susuwatari" atau dust bunnies. Mei, yang berusia empat tahun, menemukan makhluk hutan raksasa yang lembut bernama Totoro yang hidup di pohon kapur besar dekat rumah mereka. Totoro menjadi teman ajaib yang membantu anak-anak menghadapi kecemasan tentang kondisi ibu mereka dan adaptasi dengan kehidupan baru. Bersama dengan Catbus, kucing raksasa yang tubuhnya berbentuk bus, Totoro membawa mereka dalam petualangan magis yang mengajarkan tentang keajaiban alam dan kekuatan imajinasi anak-anak. Film Miyazaki yang paling ikonik ini merayakan kepolosan masa kanak-kanak, ikatan keluarga, dan hubungan harmonis antara manusia dengan alam, dicipta dengan visual yang hangat dan musik yang menyentuh hati.',
        genres: ['Animation', 'Family', 'Fantasy'],
        trailer_url: 'https://www.youtube.com/embed/92a7Hj0ijLs',
        imdb_rating: 8.2
    },
    {
        id: 23,
        title: 'Princess Mononoke',
        release_date: '1997-07-12',
        poster_path: 'https://image.tmdb.org/t/p/w500/jHWmNr7m544fJ8eItsfNk8fs2Ed.jpg',
        overview: 'Ashitaka, seorang pangeran muda dari klan Emishi, terkutuk setelah membunuh demon babi untuk melindungi desanya. Kutukan tersebut memberikannya kekuatan luar biasa namun juga akan membunuhnya secara perlahan. Dalam pencarian obat untuk kutukan, dia pergi ke barat dan menemukan konflik brutal antara Lady Eboshi yang memimpin Iron Town, sebuah pemukiman pekerja tambang besi, dengan para dewa hutan yang dipimpin oleh roh serigala raksasa Moro. San, gadis muda yang dibesarkan oleh serigala dan dikenal sebagai "Princess Mononoke," berjuang untuk melindungi hutan dari kehancuran yang disebabkan oleh aktivitas manusia. Ashitaka terjepit di tengah konflik ini, berusaha memahami kedua sisi dan mencari jalan damai. Film ini mengeksplorasi tema kompleks tentang industrialisasi versus konservasi alam, dengan karakter-karakter yang tidak hitam-putih melainkan memiliki motivasi yang dapat dipahami. Miyazaki menciptakan epik visual yang menakjubkan tentang perjuangan antara kemajuan peradaban dan pelestarian alam, dengan pesan bahwa manusia dan alam harus hidup dalam keseimbangan.',
        genres: ['Animation', 'Adventure', 'Fantasy'],
        trailer_url: 'https://www.youtube.com/embed/4OiMOHRDs14',
        imdb_rating: 8.4
    },
    {
        id: 24,
        title: 'Howl\'s Moving Castle',
        release_date: '2004-11-20',
        poster_path: 'https://image.tmdb.org/t/p/w500/8ue2xEo70WAKQRuDgBXpxKrqfUk.jpg',
        overview: 'Sophie Hatter, seorang gadis berusia 18 tahun yang bekerja di toko topi keluarganya, dikutuk oleh Witch of the Waste menjadi wanita tua berusia 90 tahun karena cemburu atas perhatian yang diberikan Howl, penyihir tampan yang berambut pirang, kepada Sophie. Malu dengan penampilannya, Sophie melarikan diri dan menemukan istana bergerak milik Howl yang berjalan dengan kaki-kaki mekanik raksasa. Dia menyamar sebagai pembersih dan berteman dengan Calcifer, demon api yang menghidupkan kastil tersebut, dan Markl, murid muda Howl. Sophie secara perlahan menemukan bahwa Howl, meskipun narsis dan dramatis, memiliki hati yang baik namun juga terikat kontrak dengan Calcifer yang membahayakan keduanya. Sementara itu, kerajaan sedang berperang, dan Howl terpaksa berpartisipasi sebagai penyihir perang meskipun membenci kekerasan. Sophie harus menemukan cara untuk memecahkan kutukan pada dirinya, membebaskan Howl dan Calcifer dari kontrak mereka, dan membantu menghentikan perang yang sia-sia. Miyazaki mengadaptasi novel Diana Wynne Jones ini dengan tema anti-perang, cinta sejati, dan kekuatan kepercayaan diri.',
        genres: ['Animation', 'Fantasy', 'Romance'],
        trailer_url: 'https://www.youtube.com/embed/iwROgK94zcM',
        imdb_rating: 8.2
    },
    // Marvel Avengers Series
    {
        id: 25,
        title: 'The Avengers',
        release_date: '2012-04-25',
        poster_path: 'https://image.tmdb.org/t/p/w500/RYMX2wcKCBAr24UyPD7xwmjaTn.jpg',
        overview: 'Nick Fury dari S.H.I.E.L.D. mengaktifkan "Avengers Initiative" ketika Loki, saudara tiri Thor, mencuri Tesseract dan mengancam akan menginvasi Bumi dengan bantuan pasukan alien Chitauri. Loki membuka portal dimensi di atas New York City, memulai invasi yang mengancam seluruh planet. Fury mengumpulkan tim superhero yang terdiri dari Tony Stark/Iron Man, Steve Rogers/Captain America, Thor, Bruce Banner/Hulk, Natasha Romanoff/Black Widow, dan Clint Barton/Hawkeye. Namun, ego dan perbedaan kepribadian masing-masing anggota membuat mereka sulit bekerja sama. Tony yang arogan bertentangan dengan Steve yang idealis, sementara Bruce berjuang mengendalikan Hulk dalam dirinya. Thor terbelah antara menyelamatkan Bumi dan saudaranya Loki. Setelah S.H.I.E.L.D. Helicarrier diserang dan Agent Phil Coulson terbunuh, para Avengers akhirnya bersatu untuk melawan ancaman bersama. Pertempuran epik di New York menjadi ujian pertama mereka sebagai tim, dengan masing-masing hero berkontribusi sesuai kemampuan unik mereka. Joss Whedon berhasil menyatukan karakter-karakter dari film solo Marvel menjadi ensemble yang kohesif dan menghibur.',
        genres: ['Action', 'Adventure', 'Science Fiction'],
        trailer_url: 'https://www.youtube.com/embed/eOrNdBpGMv8',
        imdb_rating: 8.0
    },
    {
        id: 26,
        title: 'Avengers: Infinity War',
        release_date: '2018-04-23',
        poster_path: 'https://image.tmdb.org/t/p/w500/7WsyChQLEftFiDOVTGkv3hFpyyt.jpg',
        overview: 'Thanos, titan yang obsesif dengan filosofi Malthusian tentang overpopulasi, memulai quest untuk mengumpulkan enam Infinity Stones yang akan memberinya kekuatan untuk memusnahkan setengah dari seluruh kehidupan di alam semesta dengan sekali jentikan jari. Para Avengers dan Guardians of the Galaxy harus bersatu untuk menghentikannya, meskipun mereka terpecah setelah peristiwa Civil War. Tim terbagi dalam beberapa front: Tony Stark, Doctor Strange, dan Spider-Man menghadapi Thanos di planet Titan dengan bantuan Guardians, sementara Steve Rogers, Black Widow, dan Falcon bergabung dengan Black Panther di Wakanda untuk melindungi Vision dan Mind Stone. Thor, yang telah kehilangan segalanya termasuk Asgard dan Mjolnir, mencari senjata baru untuk membunuh Thanos. Film ini menampilkan pertempuran skala kosmik dengan taruhan tertinggi dalam MCU, memperkenalkan konsep bahwa tidak semua hero menang. Russo Brothers menciptakan klimaks yang menghancurkan hati ketika Thanos berhasil dalam misinya, meninggalkan setengah dari heroes favorit berubah menjadi debu, termasuk Spider-Man, Black Panther, dan sebagian besar Guardians of the Galaxy.',
        genres: ['Action', 'Adventure', 'Science Fiction'],
        trailer_url: 'https://www.youtube.com/embed/6ZfuNTqbHE8',
        imdb_rating: 8.4
    },
    // Disney Classics
    {
        id: 27,
        title: 'The Lion King',
        release_date: '1994-06-12',
        poster_path: 'https://image.tmdb.org/t/p/w500/sKCr78MXSLixwmZ8DyJLrpMsd15.jpg',
        overview: 'Simba, anak singa muda yang adalah pewaris tahta Pride Rock, hidup bahagia bersama ayahnya Raja Mufasa dan seluruh keluarga singa. Mufasa mengajari Simba tentang "Circle of Life" dan tanggung jawab sebagai raja masa depan. Namun, Scar, saudara Mufasa yang iri dan ambisius, berkomplot dengan kawanan hyena untuk membunuh Mufasa dan mengambil alih tahta. Setelah menjebak Simba dalam stampede wildebeest yang menyebabkan kematian Mufasa, Scar meyakinkan Simba bahwa dialah yang bertanggung jawab atas kematian ayahnya. Merasa bersalah dan traumatis, Simba melarikan diri ke padang pasir di mana dia bertemu Timon dan Pumbaa, meerkat dan warthog yang mengajarinya filosofi "Hakuna Matata" (no worries). Bertahun-tahun kemudian, Simba dewasa bertemu kembali dengan Nala, teman masa kecilnya, yang memberitahu bahwa Pride Lands telah menjadi tandus di bawah kepemimpinan Scar. Dengan bimbingan spiritual dari arwah Mufasa dan dorongan dari Rafiki, Simba harus menghadapi masa lalunya dan mengklaim tempat yang seharusnya dalam "Circle of Life." Film Disney ini mengombinasikan musik yang memukau, animasi yang revolusioner, dan pesan mendalam tentang pertumbuhan, tanggung jawab, dan menemukan jati diri.',
        genres: ['Animation', 'Family', 'Drama'],
        trailer_url: 'https://www.youtube.com/embed/lFzVJEksoDY',
        imdb_rating: 8.5
    },
    {
        id: 28,
        title: 'Frozen',
        release_date: '2013-11-19',
        poster_path: 'https://image.tmdb.org/t/p/w500/kgwjIb2JDHRhNk13lmSxiClFjVk.jpg',
        overview: 'Elsa dan Anna adalah dua putri bersaudara dari kerajaan Arendelle. Elsa lahir dengan kekuatan magis untuk mengendalikan es dan salju, namun kekuatannya menjadi tidak terkendali dan berbahaya ketika dia ketakutan atau stress. Setelah secara tidak sengaja melukai Anna saat bermain di masa kecil, orang tua mereka memutuskan untuk mengisolasi Elsa dan menghapus ingatan Anna tentang kekuatan kakaknya. Elsa hidup dalam ketakutan dan mencoba menyembunyikan kekuatannya dengan motto "conceal, don\'t feel." Ketika orang tua mereka meninggal dalam kecelakaan kapal, Elsa harus menjadi ratu. Pada hari penobatan, kekuatannya terungkap secara tidak sengaja di depan umum, menyebabkan dia melarikan diri ke gunung dan secara tidak sadar menciptakan musim dingin abadi di Arendelle. Anna, yang selama ini merasa ditolak oleh kakaknya tanpa mengerti alasannya, berangkat untuk mencari Elsa dan mengembalikan musim panas. Dalam perjalanannya, dia bertemu Kristoff, penjual es dan rusa peliharaannya Sven, serta Olaf, manusia salju yang hidup. Film ini mengeksplorasi tema cinta saudara, penerimaan diri, dan kekuatan untuk mengatasi ketakutan, dengan lagu "Let It Go" yang menjadi fenomena budaya global.',
        genres: ['Animation', 'Family', 'Musical'],
        trailer_url: 'https://www.youtube.com/embed/TbQm5doF_Uc',
        imdb_rating: 7.4
    },
    {
        id: 29,
        title: 'Moana',
        release_date: '2016-11-14',
        poster_path: 'https://image.tmdb.org/t/p/w500/4JeejGugONWpJkbnvL12hVoYEDa.jpg',
        overview: 'Moana adalah putri dari kepala suku di pulau Motunui di Polynesia, yang sejak kecil merasa terpanggil oleh laut meskipun ayahnya melarang siapa pun untuk berlayar melampaui terumbu karang. Nenek Moana menceritakan legenda tentang Te Fiti, dewi yang menciptakan kehidupan, dan bagaimana demigod Maui mencuri jantungnya (Te Fiti\'s Heart), menyebabkan kegelapan menyebar dan mengancam semua pulau. Ketika pulau Motunui mulai mati dan ikan-ikan menghilang, Moana menyadari bahwa dia harus berlayar melintasi samudra untuk menemukan Maui dan memaksanya mengembalikan jantung Te Fiti. Perjalanannya dipenuhi tantangan: badai dahsyat, makhluk laut raksasa, dan Maui yang awalnya tidak kooperatif karena kehilangan kait ajaibnya yang memberikan kekuatan shapeshifting. Bersama dengan Maui dan ayam bodohnya Heihei, Moana belajar tentang navigasi tradisional Polynesia, menemukan warisan pelaut nenek moyangnya, dan yang terpenting, menemukan siapa dirinya sebenarnya. Film ini merayakan budaya Polynesia dengan musik yang memukau, mengeksplorasi tema pencarian jati diri, keberanian mengikuti panggilan hati, dan pentingnya melestarikan budaya dan lingkungan.',
        genres: ['Animation', 'Adventure', 'Family'],
        trailer_url: 'https://www.youtube.com/embed/LKFuXETZUsI',
        imdb_rating: 7.6
    },
    {
        id: 30,
        title: 'Beauty and the Beast',
        release_date: '1991-11-13',
        poster_path: 'https://image.tmdb.org/t/p/w500/pollReiLEuKqGZ6e8PEQzJJDAbu.jpg',
        overview: 'Belle, seorang gadis muda yang cerdas dan gemar membaca di desa kecil Prancis, merasa tidak cocok dengan kehidupan monoton desanya dan menolak lamaran Gaston, pemburu sombong yang populer di desa. Ketika ayahnya Maurice tersesat di hutan dan ditahan oleh Beast, makhluk mengerikan yang menghuni kastil terkutuk, Belle menawarkan diri untuk menggantikan ayahnya sebagai tawanan. Beast, yang sebenarnya adalah seorang pangeran yang dikutuk menjadi monster karena kesombongan dan ketidakpeduliannya terhadap orang lain, awalnya kasar dan temperamental. Namun, Belle secara perlahan melihat kebaikan di balik penampilan mengerikan Beast, sementara Beast belajar untuk menjadi lembut dan memperhatikan orang lain melalui interaksi dengan Belle. Mereka didukung oleh objek-objek ajaib yang merupakan pelayan kastil yang juga terkutuk: Lumiere si lilin, Cogsworth si jam, Mrs. Potts si teko, dan Chip si cangkir. Belle dan Beast jatuh cinta, tetapi Gaston yang cemburu memimpin serangan ke kastil untuk membunuh Beast. Film Disney ini mengeksplorasi tema bahwa kecantian sejati datang dari dalam, pentingnya tidak menilai dari penampilan luar, dan kekuatan cinta untuk mengubah dan menebus kesalahan masa lalu.',
        genres: ['Animation', 'Family', 'Romance'],
        trailer_url: 'https://www.youtube.com/embed/OvW_L8sTu5E',
        imdb_rating: 8.0
    }
];

const TRENDING_IDS = [12, 25, 26, 21, 27, 28, 3, 4, 1, 5, 8, 19, 20, 16];

// Custom (user-requested) movies persisted separately
const CUSTOM_KEY = 'customMovies_v1';
let CUSTOM_MOVIES = [];

// Watch history functions (moved to global scope)
function getWatchHistory() {
    try { return JSON.parse(localStorage.getItem('watchHistory') || '[]'); }
    catch (e) { return []; }
}

function saveWatchHistory(list) {
    localStorage.setItem('watchHistory', JSON.stringify(list));
}

function addToHistory(movie) {
    let history = getWatchHistory();
    // Remove if already exists to move to front
    history = history.filter(h => h.id !== movie.id);
    // Add to front, keep only last 10 items
    history.unshift({ 
        id: movie.id, 
        title: movie.title, 
        poster_path: movie.poster_path, 
        release_date: movie.release_date,
        watchedAt: Date.now()
    });
    history = history.slice(0, 10);
    saveWatchHistory(history);
    
    // Update history display if we're on main page
    if (typeof renderHistory === 'function') {
        renderHistory();
    }
}

function loadCustomMovies() {
    try { CUSTOM_MOVIES = JSON.parse(localStorage.getItem(CUSTOM_KEY) || '[]'); }
    catch (e) { CUSTOM_MOVIES = []; }
}

function saveCustomMovies() {
    localStorage.setItem(CUSTOM_KEY, JSON.stringify(CUSTOM_MOVIES));
}

function nextId() {
    const highest = Math.max(0, ...MOVIES.map(m => m.id), ...CUSTOM_MOVIES.map(m => m.id));
    return highest + 1;
}

function imageFor(movie) {
    return movie.poster_path || IMAGE_PLACEHOLDER;
}

function searchMovies(query) {
    const q = String(query || '').trim().toLowerCase();
    if (!q) return [];
    const pool = MOVIES.concat(CUSTOM_MOVIES);
    return pool.filter(m => m.title.toLowerCase().includes(q) || (m.overview && m.overview.toLowerCase().includes(q)));
}

function trendingMovies() {
    const combined = MOVIES.concat(CUSTOM_MOVIES);
    return TRENDING_IDS.map(id => combined.find(m => m.id === id)).filter(Boolean);
}

// Return top rated movies by imdb_rating. If there are fewer rated movies than
// requested, fill the rest with unrated movies to ensure the results grid is populated.
function topRatedMovies(count = 12) {
    const combined = MOVIES.concat(CUSTOM_MOVIES);
    const rated = combined.filter(m => typeof m.imdb_rating === 'number').sort((a,b) => b.imdb_rating - a.imdb_rating);
    if (rated.length >= count) return rated.slice(0, count);
    const others = combined.filter(m => !rated.includes(m));
    return rated.concat(others).slice(0, count);
}

function renderResults(data) {
    const results = document.getElementById('results');
    if (!results) return;
    results.innerHTML = '';
    const titlesEl = document.getElementById('titlesCount');
    if (!data || !data.results || data.results.length === 0) {
        // Determine if the user has selected any genre chips and show a tailored message
        const activeChips = Array.from(document.querySelectorAll('.chip.active')).map(c => c.textContent.trim());
        let msg = 'Tidak ada hasil.';
        if (activeChips.length > 0) {
            // join the active genres for display, example: "musik" or "musik, drama"
            const joined = activeChips.join(', ');
            msg = `Tidak ada hasil untuk genre "${joined}".`;
        }
    results.innerHTML = `<div class="empty-state"><p>${msg}</p></div>`;
        if (titlesEl) titlesEl.textContent = '0 titles';
        return;
    }
    if (titlesEl) titlesEl.textContent = `${data.results.length} titles`;

    data.results.forEach(m => {
        const div = document.createElement('div');
        div.className = 'card';

        const img = document.createElement('img');
        img.src = imageFor(m);
        img.alt = m.title;
        img.style.cursor = 'pointer';
        
        // Add error handling for failed image loads
        img.onerror = function() {
            this.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjQ1MCIgdmlld0JveD0iMCAwIDMwMCA0NTAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIzMDAiIGhlaWdodD0iNDUwIiBmaWxsPSIjMUEzNjVEIi8+CjxyZWN0IHg9IjUwIiB5PSIxMDAiIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiBmaWxsPSIjMkI3N0FEIiBvcGFjaXR5PSIwLjMiLz4KPHN2ZyB4PSI5MCIgeT0iMTQwIiB3aWR0aD0iMTIwIiBoZWlnaHQ9IjEyMCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIj4KPHN0cm9rZT0iIzY2NzI4MiIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiPgo8cGF0aCBkPSJtMTUgOSA2IDZtMC00LTQtNCIvPgo8cGF0aCBkPSJNMyAzdjE4aDEzYTUgNSAwIDAgMCA1LTVWOSIvPgo8L3N2Zz4KPHR0ZXh0IHg9IjE1MCIgeT0iMzMwIiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIxNiIgZmlsbD0iI0NCRDVFMSIgdGV4dC1hbmNob3I9Im1pZGRsZSI+UG9zdGVyPC90ZXh0Pgo8dGV4dCB4PSIxNTAiIHk9IjM1MCIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTQiIGZpbGw9IiM5QUEzQjIiIHRleHQtYW5jaG9yPSJtaWRkbGUiPk5vdCBBdmFpbGFibGU8L3RleHQ+Cjwvc3ZnPgo=';
            this.onerror = null; // Prevent infinite loop
        };
        
        img.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            console.log('Poster clicked for movie:', m.title);
            
            // Add to watch history when poster is clicked
            try {
                addToHistory(m);
            } catch (error) {
                console.warn('Could not add to history:', error);
            }
            
            // Navigate to detail page with movie ID
            window.location.href = `movie-detail.html?id=${m.id}`;
        });
        div.appendChild(img);

        const meta = document.createElement('div');
        meta.className = 'meta';

        const title = document.createElement('div');
        title.className = 'title';
        title.textContent = m.title
        const year = document.createElement('div');
        year.className = 'year';
        year.textContent = m.release_date ? m.release_date.slice(0, 4) : '';

        // genres (array of strings)
        const genresWrap = document.createElement('div');
        genresWrap.className = 'genres';
        if (Array.isArray(m.genres)) {
            m.genres.slice(0, 4).forEach(g => {
                const chip = document.createElement('span');
                chip.className = 'genre-chip';
                chip.textContent = g;
                genresWrap.appendChild(chip);
            });
        }

        // Add IMDb rating display
        const ratingStars = createRatingStars(m.id, 0, m);

        const actions = document.createElement('div');
        actions.className = 'actions';

        const details = document.createElement('button');
        details.className = 'small-btn icon-btn';
        details.setAttribute('aria-label', 'Details');
        details.title = 'Details';
    details.innerHTML = '<span class="icon">☰</span>';
        details.style.cursor = 'pointer';
        details.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            console.log('Details clicked for movie:', m.title); // Debug log
            
            // Add to watch history when Details is clicked
            try {
                addToHistory(m);
            } catch (error) {
                console.warn('Could not add to history:', error);
            }
            
            // Navigate to detail page with movie ID
            window.location.href = `movie-detail.html?id=${m.id}`;
        });

        const fav = document.createElement('button');
        fav.className = `small-btn fav icon-btn`;
        fav.setAttribute('aria-label', isFavorite(m.id) ? 'Saved' : 'Add to Favorite');
        fav.title = isFavorite(m.id) ? 'Saved' : 'Add to Favorite';
        fav.innerHTML = isFavorite(m.id) ? '<span class="icon">❤</span>' : '<span class="icon">♡</span>';
        fav.addEventListener('click', () => {
            toggleFavorite(m);
            const nowFav = isFavorite(m.id);
            fav.setAttribute('aria-label', nowFav ? 'Saved' : 'Add to Favorite');
            fav.title = nowFav ? 'Saved' : 'Add to Favorite';
            fav.innerHTML = nowFav ? '<span class="icon">❤</span>' : '<span class="icon">♡</span>';
        });

        actions.appendChild(details);
        actions.appendChild(fav);

        meta.appendChild(title);
        meta.appendChild(year);
        meta.appendChild(genresWrap);
        meta.appendChild(ratingStars);
        meta.appendChild(actions);

        div.appendChild(meta);
        results.appendChild(div);
    });
}

function getFavorites() {
    try { return JSON.parse(localStorage.getItem('favorites') || '[]'); }
    catch (e) { return []; }
}

function saveFavorites(list) {
    localStorage.setItem('favorites', JSON.stringify(list));
}

function isFavorite(id) {
    return getFavorites().some(f => f.id === id);
}

function toggleFavorite(movie) {
    const list = getFavorites();
    const idx = list.findIndex(f => f.id === movie.id);
    if (idx === -1) {
        list.push({ id: movie.id, title: movie.title, poster_path: movie.poster_path, release_date: movie.release_date, overview: movie.overview });
        showToast(`${movie.title} ditambahkan ke My Favorite`);
    } else {
        list.splice(idx, 1);
        showToast(`${movie.title} dihapus dari My Favorite`);
    }
    saveFavorites(list);
}

// Watchlist functions (saved for later)
function getWatchlist() {
    try { return JSON.parse(localStorage.getItem('watchlist') || '[]'); }
    catch (e) { return []; }
}

function saveWatchlist(list) {
    localStorage.setItem('watchlist', JSON.stringify(list));
}

function isInWatchlist(id) {
    return getWatchlist().some(w => w.id === id);
}

function toggleWatchlist(movie) {
    const list = getWatchlist();
    const idx = list.findIndex(f => f.id === movie.id);
    if (idx === -1) {
        list.push({ id: movie.id, title: movie.title, poster_path: movie.poster_path, release_date: movie.release_date, overview: movie.overview });
        showToast(`${movie.title} ditambahkan ke Watchlist`);
    } else {
        list.splice(idx, 1);
        showToast(`${movie.title} dihapus dari Watchlist`);
    }
    saveWatchlist(list);
}

// Toast helper (creates element on first call)
function showToast(message, timeout = 2200) {
    let toast = document.getElementById('app-toast');
    if (!toast) {
        toast = document.createElement('div');
        toast.id = 'app-toast';
        toast.className = 'toast';
        document.body.appendChild(toast);
    }
    toast.textContent = message;
    toast.classList.add('show');
    clearTimeout(toast._timer);
    toast._timer = setTimeout(() => {
        toast.classList.remove('show');
    }, timeout);
}

// Rating functions
// Create rating display with IMDb rating only
function createRatingStars(movieId, currentRating = 0, movie = null) {
    const ratingDiv = document.createElement('div');
    ratingDiv.className = 'rating';

    // Show IMDb rating if available
    if (movie && movie.imdb_rating) {
        const imdbRating = document.createElement('div');
        imdbRating.className = 'imdb-rating';
        imdbRating.innerHTML = `<span style="color: #f5c518;">⭐</span> <strong>${movie.imdb_rating}</strong>/10 <span style="color: #9aa3b2; font-size: 11px;">IMDb</span>`;
        ratingDiv.appendChild(imdbRating);
    }

    return ratingDiv;
}

// Update star display
function updateStars(starsContainer, rating) {
    const stars = starsContainer.querySelectorAll('.star');
    stars.forEach((star, index) => {
        star.classList.remove('filled', 'hover');
        if (index < rating) {
            star.classList.add('filled');
        }
    });
    
    const ratingText = starsContainer.parentElement.querySelector('.rating-text');
    if (ratingText) {
        ratingText.textContent = rating > 0 ? `${rating}/5` : 'Rate this';
    }
}

// Update stars on hover
function updateStarsHover(starsContainer, hoverRating) {
    const stars = starsContainer.querySelectorAll('.star');
    stars.forEach((star, index) => {
        star.classList.remove('filled', 'hover');
        if (index < hoverRating) {
            star.classList.add('hover');
        }
    });
}

// Add a custom movie (from user form). Persist and make available immediately.
function addCustomMovie({ title, year, overview, poster }) {
    const id = nextId();
    const movie = {
        id,
        title: String(title || '').trim(),
        release_date: year && String(year).match(/^\d{4}$/) ? `${year}-01-01` : '',
        poster_path: poster ? String(poster).trim() : '',
        overview: String(overview || '').trim()
    };
    CUSTOM_MOVIES.push(movie);
    saveCustomMovies();
    return movie;
}

document.addEventListener('DOMContentLoaded', function () {
    const input = document.getElementById('searchInput');
    const favBtn = document.getElementById('favBtn');
    const watchlistBtn = document.getElementById('watchlistBtn');

    // load custom movies from previous sessions
    loadCustomMovies();

    if (input) {
        input.addEventListener('keydown', function (e) {
            if (e.key === 'Enter') {
                const q = input.value.trim();
                if (!q) return;
                const data = { results: searchMovies(q) };
                renderResults(data);
            }
        });
    }

    if (favBtn) {
        favBtn.addEventListener('click', function () {
            window.location.href = 'favorites.html';
        });
    }

    if (watchlistBtn) {
        watchlistBtn.addEventListener('click', function () {
            window.location.href = 'watchlist.html';
        });
    }

    // Modal: Add Movie
    const addMovieBtn = document.getElementById('addMovieBtn');
    const modal = document.getElementById('addMovieModal');
    const closeModal = document.getElementById('closeModal');
    const modalBackdrop = document.getElementById('modalBackdrop');
    const form = document.getElementById('addMovieForm');

    function openModal() { if (modal) modal.setAttribute('aria-hidden', 'false'); }
    function hideModal() { if (modal) modal.setAttribute('aria-hidden', 'true'); }

    if (addMovieBtn) addMovieBtn.addEventListener('click', () => { openModal(); });
    if (closeModal) closeModal.addEventListener('click', () => { hideModal(); });
    if (modalBackdrop) modalBackdrop.addEventListener('click', () => { hideModal(); });

    // Watch history functions
    function getWatchHistory() {
        try { return JSON.parse(localStorage.getItem('watchHistory') || '[]'); }
        catch (e) { return []; }
    }

    function saveWatchHistory(list) {
        localStorage.setItem('watchHistory', JSON.stringify(list));
    }

    function addToHistory(movie) {
        let history = getWatchHistory();
        // Remove if already exists to move to front
        history = history.filter(h => h.id !== movie.id);
        // Add to front, keep only last 10 items
        history.unshift({ 
            id: movie.id, 
            title: movie.title, 
            poster_path: movie.poster_path, 
            release_date: movie.release_date,
            watchedAt: Date.now()
        });
        history = history.slice(0, 10);
        saveWatchHistory(history);
        renderHistory();
    }

    function clearHistory() {
        localStorage.removeItem('watchHistory');
        renderHistory();
    }

    function renderHistory() {
        const historyList = document.getElementById('historyList');
        if (!historyList) return;
        
        const history = getWatchHistory();
        historyList.innerHTML = '';
        
        if (history.length === 0) {
            historyList.innerHTML = '<div class="empty-state"><p>Belum ada riwayat tontonan.</p></div>';
            return;
        }

        history.forEach(item => {
            const div = document.createElement('div');
            div.className = 'history-item';

            const img = document.createElement('img');
            img.src = imageFor(item);
            img.alt = item.title;
            
            // Add error handling for history images
            img.onerror = function() {
                this.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTAiIGhlaWdodD0iNzUiIHZpZXdCb3g9IjAgMCA1MCA3NSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjUwIiBoZWlnaHQ9Ijc1IiBmaWxsPSIjMUEzNjVEIi8+CjxyZWN0IHg9IjEwIiB5PSIxNSIgd2lkdGg9IjMwIiBoZWlnaHQ9IjMwIiBmaWxsPSIjMkI3N0FEIiBvcGFjaXR5PSIwLjMiLz4KPHN2ZyB4PSIxNSIgeT0iMjAiIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIj4KPHN0cm9rZT0iIzY2NzI4MiIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiPgo8cGF0aCBkPSJtMTUgOSA2IDZtMC00LTQtNCIvPgo8cGF0aCBkPSJNMyAzdjE4aDEzYTUgNSAwIDAgMCA1LTVWOSIvPgo8L3N2Zz4KPHR0ZXh0IHg9IjI1IiB5PSI2MCIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iOCIgZmlsbD0iI0NCRDVFMSIgdGV4dC1hbmNob3I9Im1pZGRsZSI+Tm8gUG9zdGVyPC90ZXh0Pgo8L3N2Zz4K';
                this.onerror = null;
            };

            const info = document.createElement('div');
            info.className = 'history-item-info';

            const title = document.createElement('div');
            title.className = 'history-item-title';
            title.textContent = item.title;

            const year = document.createElement('div');
            year.className = 'history-item-year';
            year.textContent = item.release_date ? item.release_date.slice(0, 4) : '';

            info.appendChild(title);
            info.appendChild(year);
            div.appendChild(img);
            div.appendChild(info);
            historyList.appendChild(div);
        });
    }

    // History controls
    const clearHistoryBtn = document.getElementById('clearHistory');
    if (clearHistoryBtn) {
        clearHistoryBtn.addEventListener('click', clearHistory);
    }

    // Initialize history
    renderHistory();

    function openModal() { if (modal) modal.setAttribute('aria-hidden', 'false'); }
    function hideModal() { if (modal) modal.setAttribute('aria-hidden', 'true'); }

    if (addMovieBtn) addMovieBtn.addEventListener('click', () => { openModal(); });
    if (closeModal) closeModal.addEventListener('click', () => { hideModal(); });
    if (modalBackdrop) modalBackdrop.addEventListener('click', () => { hideModal(); });

    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const data = new FormData(form);
            const title = data.get('title');
            const year = data.get('year');
            const overview = data.get('overview');
            const poster = data.get('poster');
            if (!title) { alert('Title is required'); return; }
            const movie = addCustomMovie({ title, year, overview, poster });
            hideModal();
            // show added movie in results
            renderResults({ results: [movie] });
            form.reset();
        });
    }

    const exploreBtn = document.getElementById('exploreBtn');
    const historyBtn = document.getElementById('historyBtn');
    if (exploreBtn) {
        exploreBtn.addEventListener('click', function () {
            const data = { results: topRatedMovies(12) };
            renderResults(data);
            const resEl = document.getElementById('results');
            if (resEl) resEl.scrollIntoView({ behavior: 'smooth' });
        });
    }
    if (historyBtn) {
        // Navigate to a dedicated history page
        historyBtn.addEventListener('click', function () {
            window.location.href = 'history.html';
        });
    }

    // Chip click: toggle active visual state (limit selection to max 3)
    document.querySelectorAll('.chip').forEach(ch => {
        ch.addEventListener('click', () => {
            const isActive = ch.classList.contains('active');
            if (!isActive) {
                // trying to activate: only allow up to 3 active chips
                const activeCount = document.querySelectorAll('.chip.active').length;
                if (activeCount >= 2) {
                    // brief user feedback (Indonesian)
                    alert('Maksimum 2 genre yang dapat dipilih.');
                    return;
                }
                ch.classList.add('active');
            } else {
                // deactivate freely
                ch.classList.remove('active');
            }

            // Re-apply the current view so results are filtered immediately
            if (typeof applyView === 'function') {
                try { applyView(currentView || 'comfy'); } catch (e) { /* ignore */ }
            }
        });
    });

    // (Auto-fill posters via TMDB removed)

    // View selector: compact / comfy / spacious
    const viewBtns = document.querySelectorAll('.view-btn');
    const resultsEl = document.getElementById('results');
    let currentView = 'comfy';

    function getSelectedGenres(){
        return Array.from(document.querySelectorAll('.chip.active')).map(c=>c.textContent.trim().toLowerCase());
    }

    function applyGenreFilterToList(list){
        const selected = getSelectedGenres();
        if(!selected || selected.length === 0) return list;
        return list.filter(m => Array.isArray(m.genres) && m.genres.some(g => selected.includes(String(g).toLowerCase())));
    }

    function applyView(v){
        if(!resultsEl) return;
        currentView = v;
        resultsEl.classList.remove('view-compact','view-comfy','view-spacious');
        resultsEl.classList.add('view-' + v);
        // toggle active state
        viewBtns.forEach(b=>{ b.classList.toggle('active', b.dataset.view===v); });

        // prepare base data based on view
        let base = [];
        if (v === 'compact') {
            base = MOVIES.concat(CUSTOM_MOVIES);
        } else if (v === 'comfy') {
            base = trendingMovies();
        } else if (v === 'spacious') {
            base = MOVIES.concat(CUSTOM_MOVIES).slice(0, 8);
        }

        // if genres selected, filter the base list and render filtered results even if empty
        // so we can show an explicit "no results for genre" message. If no genre is selected,
        // render the base list.
        const filtered = applyGenreFilterToList(base);
        const selectedGenres = getSelectedGenres();
        if (selectedGenres && selectedGenres.length > 0) {
            // render filtered (may be empty) so renderResults can show the empty-state message
            renderResults({ results: filtered });
        } else {
            renderResults({ results: filtered.length ? filtered : base });
        }
    }
    // default
    applyView('comfy');
    viewBtns.forEach(b=> b.addEventListener('click', ()=> applyView(b.dataset.view)));

    // Ensure buttons are clickable by removing any overlays
    document.addEventListener('click', (e) => {
        console.log('Clicked element:', e.target.className, e.target.textContent);
    });

    // Titles count (movies + custom)
    function updateTitlesCount(){
        const count = (MOVIES.concat(CUSTOM_MOVIES)).length;
        const el = document.getElementById('titlesCount');
        if(el) el.textContent = `${count} titles`;
    }
    updateTitlesCount();
    // update after adding custom movie
    const originalAddCustom = addCustomMovie;
    window.addEventListener('load', ()=>{/*no-op to ensure load order*/});
    // wrap addCustomMovie so we can update count when called from form
    addCustomMovie = function(args){
        const m = originalAddCustom(args);
        updateTitlesCount();
        return m;
    };
});

// Movie Detail Page Logic (for movie-detail.html)
if (window.location.pathname && window.location.pathname.endsWith('movie-detail.html')) {
    document.addEventListener('DOMContentLoaded', () => {
        // Load custom movies
        loadCustomMovies();

        // Get movie ID from URL parameters
        const urlParams = new URLSearchParams(window.location.search);
        const movieId = parseInt(urlParams.get('id'));
        
        if (!movieId) {
            document.getElementById('movieDetailContent').innerHTML = 
                '<p style="text-align:center;color:#f87171;margin:40px 0;">Movie not found. <a href="index.html" style="color:#7c3aed;">Go back to home</a></p>';
            return;
        }

        // Find movie in combined dataset
        const allMovies = MOVIES.concat(CUSTOM_MOVIES);
        const movie = allMovies.find(m => m.id === movieId);
        
        if (!movie) {
            document.getElementById('movieDetailContent').innerHTML = 
                '<p style="text-align:center;color:#f87171;margin:40px 0;">Movie not found. <a href="index.html" style="color:#7c3aed;">Go back to home</a></p>';
            return;
        }

        // Render movie details
        renderMovieDetail(movie);

        // Setup navigation buttons
        const backBtn = document.getElementById('backBtn');
        const favBtn = document.getElementById('favBtn');

        if (backBtn) {
            backBtn.addEventListener('click', () => {
                window.location.href = 'index.html';
            });
        }

        if (favBtn) {
            favBtn.addEventListener('click', () => {
                window.location.href = 'favorites.html';
            });
        }
    });
}

function renderMovieDetail(movie) {
    const content = document.getElementById('movieDetailContent');
    if (!content) return;

    const detailHTML = `
        <div class="detail-hero">
            <div class="detail-poster">
                <img src="${imageFor(movie)}" alt="${movie.title}">
            </div>
            <div class="detail-info">
                <h1 class="detail-title">${movie.title}</h1>
                <div class="detail-year">${movie.release_date ? movie.release_date.slice(0, 4) : 'Unknown Year'}</div>
                <div class="detail-genres">
                    ${Array.isArray(movie.genres) ? 
                        movie.genres.map(g => `<span class="detail-genre-chip">${g}</span>`).join('') : 
                        '<span class="detail-genre-chip">No Genre</span>'
                    }
                </div>
                <div id="detailRating" class="rating-detail">
                    <!-- Rating will be added by JavaScript -->
                </div>
                <p class="detail-overview">
                    ${movie.overview || 'No description available for this movie.'}
                </p>
                <div class="detail-actions">
                    <button id="detailFavBtn" class="btn ${isFavorite(movie.id) ? 'primary' : ''}">
                        ${isFavorite(movie.id) ? '❤ Saved' : '♡ Add to Favorite'}
                    </button>
                    <button id="detailWatchlistBtn" class="btn ${isInWatchlist(movie.id) ? 'primary' : ''}">
                        ${isInWatchlist(movie.id) ? '🔖 Saved' : '＋ Add to Watchlist'}
                    </button>
                    <button id="trailerBtn" class="btn primary">🎬 Trailer</button>
                </div>
            </div>
        </div>
        
        <!-- Trailer Modal (hidden by default) -->
        ${movie.trailer_url ? `
        <div id="trailerModal" class="trailer-modal" aria-hidden="true">
            <div class="trailer-modal-backdrop"></div>
            <div class="trailer-modal-content">
                <div class="trailer-modal-header">
                    <h3 class="trailer-modal-title">🎬 ${movie.title} - Trailer</h3>
                    <button id="closeTrailer" class="trailer-close-btn">✕</button>
                </div>
                <div class="trailer-modal-video">
                    <!-- Do NOT set src here to avoid autoplay on page load. We'll set src when the user clicks the Trailer button. -->
                    <iframe 
                        id="trailerVideo"
                        data-src="${movie.trailer_url}"
                        src=""
                        title="${movie.title} Trailer"
                        frameborder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                        allowfullscreen>
                    </iframe>
                </div>
            </div>
        </div>
        ` : ''}
    `;

    content.innerHTML = detailHTML;

    // Setup rating stars for detail page
    const detailRatingContainer = document.getElementById('detailRating');
    if (detailRatingContainer) {
        const ratingStars = createRatingStars(movie.id, 0, movie);
        ratingStars.style.justifyContent = 'flex-start';
        ratingStars.style.marginBottom = '16px';
        detailRatingContainer.appendChild(ratingStars);
    }

    // Setup favorite toggle
    const detailFavBtn = document.getElementById('detailFavBtn');
    if (detailFavBtn) {
        detailFavBtn.addEventListener('click', () => {
            toggleFavorite(movie);
            // Update button text and style
            const isNowFav = isFavorite(movie.id);
            detailFavBtn.textContent = isNowFav ? '❤ Saved' : '♡ Add to Favorite';
            detailFavBtn.className = `btn ${isNowFav ? 'primary' : ''}`;
        });
    }

    // Setup watchlist toggle in detail page
    const detailWatchlistBtn = document.getElementById('detailWatchlistBtn');
    if (detailWatchlistBtn) {
        detailWatchlistBtn.addEventListener('click', () => {
            toggleWatchlist(movie);
            const now = isInWatchlist(movie.id);
            detailWatchlistBtn.textContent = now ? '🔖 Saved' : '＋ Add to Watchlist';
            detailWatchlistBtn.className = `btn ${now ? 'primary' : ''}`;
        });
    }

    // Setup trailer button
    const trailerBtn = document.getElementById('trailerBtn');
    const trailerModal = document.getElementById('trailerModal');
    const closeTrailer = document.getElementById('closeTrailer');
    const trailerVideo = document.getElementById('trailerVideo');
    
        if (trailerBtn && trailerModal) {
        // Open trailer modal
        trailerBtn.addEventListener('click', () => {
            console.log('Opening trailer modal for:', movie.title);
            // set iframe src only when user explicitly requests playback
            if (trailerVideo && trailerVideo.dataset && trailerVideo.dataset.src) {
                // build URL with autoplay enabled
                trailerVideo.src = `${trailerVideo.dataset.src}?autoplay=1&rel=0&modestbranding=1`;
            }
            trailerModal.setAttribute('aria-hidden', 'false');
            document.body.style.overflow = 'hidden'; // Prevent background scroll
            
            // Focus on modal for accessibility
            trailerModal.focus();
        });

        // Close trailer modal
        function closeTrailerModal() {
            console.log('Closing trailer modal');
            trailerModal.setAttribute('aria-hidden', 'true');
            document.body.style.overflow = 'auto'; // Restore scroll
            
            // Stop video by clearing iframe src (do NOT restore)
            if (trailerVideo) {
                trailerVideo.src = '';
            }
        }

        if (closeTrailer) {
            closeTrailer.addEventListener('click', closeTrailerModal);
        }

        // Close when clicking backdrop
        const backdrop = trailerModal.querySelector('.trailer-modal-backdrop');
        if (backdrop) {
            backdrop.addEventListener('click', closeTrailerModal);
        }

        // Close with Escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && trailerModal.getAttribute('aria-hidden') === 'false') {
                closeTrailerModal();
            }
        });
    } else if (trailerBtn && !movie.trailer_url) {
        // Fallback if no trailer available
        trailerBtn.addEventListener('click', () => {
            alert(`🎬 Maaf, trailer untuk "${movie.title}" tidak tersedia.`);
        });
    }
}

// If we're on favorites.html, render favorites list
if (window.location.pathname && window.location.pathname.endsWith('favorites.html')) {
    document.addEventListener('DOMContentLoaded', () => {
        const container = document.getElementById('fav-list');
        if (!container) return;
        const list = getFavorites();
        container.innerHTML = '';
    if (list.length === 0) { container.innerHTML = '<div class="empty-state"><p>Belum ada film di My Favorite.</p></div>'; return; }
        list.forEach(m => {
            const div = document.createElement('div'); div.className = 'card';
            const img = document.createElement('img'); img.src = imageFor(m); img.alt = m.title; div.appendChild(img);
            const meta = document.createElement('div'); meta.className = 'meta';
            const title = document.createElement('div'); title.className = 'title'; title.textContent = m.title;
            const year = document.createElement('div'); year.className = 'year'; year.textContent = m.release_date ? m.release_date.slice(0, 4) : '';
            const actions = document.createElement('div'); actions.className = 'actions';
            const remove = document.createElement('button'); remove.className = 'small-btn'; remove.textContent = 'Remove';
            remove.addEventListener('click', () => { const arr = getFavorites(); const i = arr.findIndex(x => x.id === m.id); if (i > -1) { arr.splice(i, 1); saveFavorites(arr); div.remove(); } });
            const open = document.createElement('button'); open.className = 'small-btn fav'; open.textContent = 'Open';
            open.addEventListener('click', () => { alert(`${m.title}\n\n${m.overview || ''}`); });
            actions.appendChild(remove); actions.appendChild(open);
            meta.appendChild(title); meta.appendChild(year); meta.appendChild(actions);
            div.appendChild(meta); container.appendChild(div);
        });

        // Page actions: back + clear favorites
        const back = document.getElementById('backBtn');
        const clearBtn = document.getElementById('clearListBtn');
        if (back) back.addEventListener('click', () => { window.location.href = 'index.html'; });
        if (clearBtn) {
            clearBtn.addEventListener('click', () => {
                // Live feedback: show processing state then clear
                clearBtn.classList.add('processing');
                clearBtn.disabled = true;
                const origText = clearBtn.textContent;
                clearBtn.textContent = 'Clearing...';
                setTimeout(() => {
                    saveFavorites([]);
                    container.innerHTML = '<div class="empty-state"><p>Belum ada film di My Favorite.</p></div>';
                    clearBtn.classList.remove('processing');
                    clearBtn.textContent = origText;
                    clearBtn.disabled = false;
                }, 600);
            });
        }
    });
}

// If we're on watchlist.html, render watchlist
if (window.location.pathname && window.location.pathname.endsWith('watchlist.html')) {
    document.addEventListener('DOMContentLoaded', () => {
        const container = document.getElementById('watchlist');
        if (!container) return;
        const list = getWatchlist();
        container.innerHTML = '';
    if (list.length === 0) { container.innerHTML = '<div class="empty-state"><p>Belum ada film di watchlist.</p></div>'; return; }
        list.forEach(m => {
            const div = document.createElement('div'); div.className = 'card';
            const img = document.createElement('img'); img.src = imageFor(m); img.alt = m.title; div.appendChild(img);
            const meta = document.createElement('div'); meta.className = 'meta';
            const title = document.createElement('div'); title.className = 'title'; title.textContent = m.title;
            const year = document.createElement('div'); year.className = 'year'; year.textContent = m.release_date ? m.release_date.slice(0, 4) : '';
            const actions = document.createElement('div'); actions.className = 'actions';
            const remove = document.createElement('button'); remove.className = 'small-btn'; remove.textContent = 'Remove';
            remove.addEventListener('click', () => { const arr = getWatchlist(); const i = arr.findIndex(x => x.id === m.id); if (i > -1) { arr.splice(i, 1); saveWatchlist(arr); div.remove(); } });
            const open = document.createElement('button'); open.className = 'small-btn fav'; open.textContent = 'Open';
            open.addEventListener('click', () => { window.location.href = `movie-detail.html?id=${m.id}`; });
            actions.appendChild(remove); actions.appendChild(open);
            meta.appendChild(title); meta.appendChild(year); meta.appendChild(actions);
            div.appendChild(meta); container.appendChild(div);
        });

        // Page actions: back + clear watchlist
        const back = document.getElementById('backBtn');
        const clearBtn = document.getElementById('clearListBtn');
        if (back) back.addEventListener('click', () => { window.location.href = 'index.html'; });
        if (clearBtn) {
            clearBtn.addEventListener('click', () => {
                // Live feedback: show processing state then clear
                clearBtn.classList.add('processing');
                clearBtn.disabled = true;
                const origText = clearBtn.textContent;
                clearBtn.textContent = 'Clearing...';
                setTimeout(() => {
                    saveWatchlist([]);
                    container.innerHTML = '<div class="empty-state"><p>Belum ada film di watchlist.</p></div>';
                    clearBtn.classList.remove('processing');
                    clearBtn.textContent = origText;
                    clearBtn.disabled = false;
                }, 600);
            });
        }
    });
}

// If we're on history.html, render watch history
if (window.location.pathname && window.location.pathname.endsWith('history.html')) {
    document.addEventListener('DOMContentLoaded', () => {
        const container = document.getElementById('historyList');
        if (!container) return;
        const list = getWatchHistory();
        container.innerHTML = '';
    if (list.length === 0) { container.innerHTML = '<div class="empty-state"><p>Belum ada riwayat tontonan.</p></div>'; return; }
        list.forEach(h => {
            const div = document.createElement('div'); div.className = 'card';
            const img = document.createElement('img'); img.src = imageFor(h); img.alt = h.title; div.appendChild(img);
            const meta = document.createElement('div'); meta.className = 'meta';
            const title = document.createElement('div'); title.className = 'title'; title.textContent = h.title;
            const year = document.createElement('div'); year.className = 'year'; year.textContent = h.release_date ? h.release_date.slice(0, 4) : '';
            const actions = document.createElement('div'); actions.className = 'actions';
            const remove = document.createElement('button'); remove.className = 'small-btn'; remove.textContent = 'Remove';
            remove.addEventListener('click', () => { const arr = getWatchHistory(); const i = arr.findIndex(x => x.id === h.id); if (i > -1) { arr.splice(i, 1); saveWatchHistory(arr); div.remove(); } });
            const open = document.createElement('button'); open.className = 'small-btn fav'; open.textContent = 'Open';
            open.addEventListener('click', () => { window.location.href = `movie-detail.html?id=${h.id}`; });
            actions.appendChild(remove); actions.appendChild(open);
            meta.appendChild(title); meta.appendChild(year); meta.appendChild(actions);
            div.appendChild(meta); container.appendChild(div);
        });

        // Wire clear history button if present
        const clearBtn = document.getElementById('clearHistory');
        if (clearBtn) {
            clearBtn.addEventListener('click', () => {
                localStorage.removeItem('watchHistory');
                container.innerHTML = '<div class="empty-state"><p>Belum ada riwayat tontonan.</p></div>';
            });
        }
    });
}
