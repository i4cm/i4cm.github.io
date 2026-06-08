window.CODES = {
 "9": {
  "cat": "Perangkat lunak keamanan / Perangkat keras",
  "msg": "iPhone tidak dapat dipulihkan. Terjadi kesalahan yang tidak diketahui (9).",
  "self": "Nonaktifkan sementara antivirus/firewall pihak ketiga lalu coba perbarui lagi; gunakan kabel asli, port USB di belakang casing, dan komputer lain; paksa mulai ulang lalu pilih Perbarui (bukan Pulihkan) terlebih dahulu.",
  "hw": "Jika semua perbaikan perangkat lunak gagal, biasanya penyimpanan NAND yang solder dingin/rusak, daya kurang, atau gangguan komunikasi penyimpanan-CPU.",
  "tip": "Jika 9 baru muncul lama setelah kabel dicabut, penyimpanan sama sekali tidak terdeteksi.",
  "scene": "Paling sering saat perangkat terputus di paruh kedua proses pemulihan."
 },
 "4005": {
  "cat": "Sambungan USB / Perangkat keras",
  "msg": "iPhone tidak dapat dipulihkan. Terjadi kesalahan yang tidak diketahui (4005).",
  "self": "Coba kabel asli, port USB belakang, dan komputer lain, lalu pulihkan ulang dalam mode DFU.",
  "hw": "Biasanya CPU atau sirkuit dayanya.",
  "tip": "",
  "scene": ""
 },
 "4013": {
  "cat": "Sambungan USB / Perangkat keras",
  "msg": "iPhone tidak dapat dipulihkan. Terjadi kesalahan yang tidak diketahui (4013).",
  "self": "Gunakan kabel asli pendek, port USB belakang, dan komputer lain; pulihkan ulang via DFU; jika iTunes terkena masalah hosts/proxy, pulihkan berkas hosts dan matikan firewall.",
  "hw": "Jika setiap langkah perangkat lunak tetap gagal, biasanya masalah bus RAM-CPU-penyimpanan; gangguan grafis lalu mulai ulang bisa berarti kerusakan bus.",
  "tip": "Muncul setelah bilah kemajuan tampil → cenderung penyimpanan; muncul seketika → periksa kabel/USB dahulu.",
  "scene": "Umum saat downgrade, atau saat alat pihak ketiga menulis ulang berkas hosts untuk mengalihkan gs.apple.com (iTunes gagal menjangkau server di port 80/443)."
 },
 "4014": {
  "cat": "Sambungan USB / Perangkat keras",
  "msg": "iPhone tidak dapat dipulihkan. Terjadi kesalahan yang tidak diketahui (4014).",
  "self": "Ganti kabel/port lalu pulihkan ulang dalam mode DFU.",
  "hw": "SDRAM sementara dan sirkuitnya rusak / SoC atas tidak stabil / baterai terlalu lemah.",
  "tip": "Tanpa logo Apple → sering masalah tutup atas CPU; logo Apple tampil → cenderung penyimpanan.",
  "scene": ""
 },
 "4037": {
  "cat": "Status perangkat",
  "msg": "iPhone tidak dapat dipulihkan. Terjadi kesalahan yang tidak diketahui (4037).",
  "self": "Muncul saat perangkat berkode sandi dan belum dibuka kuncinya. Buka kunci di perangkat, jaga layar tetap menyala, lalu pulihkan.",
  "hw": "",
  "tip": "",
  "scene": ""
 },
 "14": {
  "cat": "Sambungan USB / Perangkat keras",
  "msg": "iPhone tidak dapat dipulihkan. Terjadi kesalahan yang tidak diketahui (14).",
  "self": "Ganti kabel / port USB; bisa juga coba beberapa kali.",
  "hw": "Penyimpanan atau daya baterai kurang, atau masalah komputer; catatan lama juga menyebut firmware rusak → hapus firmware yang diunduh dan unduh ulang.",
  "tip": "",
  "scene": ""
 },
 "11": {
  "cat": "Perangkat keras / Penyimpanan",
  "msg": "Tidak dapat dipulihkan (11).",
  "self": "Kosongkan drive sistem (sisakan ≥10 GB) dan unduh ulang firmware.",
  "hw": "Drive sistem penuh, atau berkas firmware rusak.",
  "tip": "",
  "scene": ""
 },
 "3194": {
  "cat": "Jaringan / Server Apple",
  "msg": "iPhone tidak dapat dipulihkan. Terjadi kesalahan yang tidak diketahui (3194).",
  "self": "Pulihkan hanya versi yang sedang ditandatangani; pulihkan berkas hosts (hapus baris yang menunjuk server tanda tangan lama); matikan proxy/VPN.",
  "hw": "",
  "tip": "",
  "scene": "Selalu muncul saat downgrade ke iOS yang tidak lagi ditandatangani Apple."
 },
 "3004": {
  "cat": "Jaringan / Kabel",
  "msg": "Muncul tepat setelah logo Apple saat bilah kemajuan bergerak (3004 / 3014 / 2005).",
  "self": "Beralih ke jaringan stabil, ganti kabel, dan periksa berkas hosts.",
  "hw": "",
  "tip": "",
  "scene": "Muncul saat kemajuan baru mulai → biasanya masalah kabel / komputer / jaringan."
 },
 "53": {
  "cat": "Perangkat keras",
  "msg": "iPhone tidak dapat dipulihkan. Terjadi kesalahan yang tidak diketahui (53).",
  "self": "Sambungkan komputer lewat hotspot ponsel lalu pulihkan ulang untuk menyingkirkan faktor autentikasi/jaringan.",
  "hw": "Biasanya modul Touch ID / Face ID rusak; perangkat keras yang berpasangan harus diganti.",
  "tip": "",
  "scene": ""
 },
 "-1": {
  "cat": "Perangkat keras / Baseband",
  "msg": "Tidak dapat dipulihkan (-1).",
  "self": "Tidak bisa diperbaiki lewat perangkat lunak; perlu perbaikan papan.",
  "hw": "Rel daya baseband hilang, atau rel korslet ke ground; solder CPU baseband tidak sempurna.",
  "tip": "",
  "scene": ""
 },
 "1": {
  "cat": "Perangkat keras / Baseband",
  "msg": "Tidak dapat dipulihkan (1).",
  "self": "Bawa untuk pemeriksaan baseband.",
  "hw": "CPU baseband tidak terdeteksi; periksa apakah PMU baseband mengeluarkan daya dan apakah CPU baseband solder dingin.",
  "tip": "",
  "scene": ""
 },
 "3": {
  "cat": "Perangkat keras / Baseband",
  "msg": "Tidak dapat dipulihkan (3).",
  "self": "Bawa untuk pemeriksaan baseband.",
  "hw": "Baseband, EEPROM dan sirkuitnya rusak.",
  "tip": "",
  "scene": ""
 },
 "6": {
  "cat": "Perangkat keras",
  "msg": "Tidak dapat dipulihkan (6).",
  "self": "Pulihkan dua kali lagi dengan kabel / komputer / jaringan yang baik; jika tetap, perbaiki.",
  "hw": "SoC solder dingin, atau penyimpanan rusak.",
  "tip": "",
  "scene": ""
 },
 "10": {
  "cat": "Perangkat lunak terlalu baru",
  "msg": "Tidak dapat dipulihkan (10).",
  "self": "iOS perangkat lebih baru daripada sisi komputer; perbarui Mac / iTunes / app Perangkat Apple, lalu coba lagi.",
  "hw": "",
  "tip": "",
  "scene": ""
 },
 "1015": {
  "cat": "Jailbreak / downgrade",
  "msg": "Sumber daya yang diperlukan tidak dapat ditemukan / (1015).",
  "self": "Terjadi pada perangkat yang di-jailbreak atau di-downgrade; gunakan mode pemulihan untuk memulihkan ke iOS terbaru.",
  "hw": "",
  "tip": "",
  "scene": ""
 },
 "9006": {
  "cat": "Perangkat lunak keamanan / Jaringan",
  "msg": "Muncul saat mengunduh firmware (9006).",
  "self": "Unduhan diblokir firewall/jaringan; matikan firewall, atau unduh IPSW yang cocok secara manual lalu pulihkan lokal.",
  "hw": "",
  "tip": "",
  "scene": ""
 },
 "50": {
  "cat": "Jaringan",
  "msg": "Unduhan firmware kehabisan waktu (50 / -50).",
  "self": "50 adalah batas waktu unduhan sisi Apple; beralih ke jaringan stabil atau unduh firmware manual. -50 biasanya batas waktu server aisi-helper; periksa proxy atau perbarui ke klien terbaru.",
  "hw": "",
  "tip": "",
  "scene": ""
 },
 "0xE8000015": {
  "cat": "USB / Driver",
  "msg": "0xE8000015",
  "self": "Instal ulang driver Apple Mobile Device / AMDS dan ganti kabel/port; atau pakai perbaikan iTunes & driver satu klik dari kit perbaikan.",
  "hw": "",
  "tip": "",
  "scene": ""
 }
};
