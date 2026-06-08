window.CODES = {
 "9": {
  "cat": "Güvenlik yazılımı / Donanım",
  "msg": "iPhone'a geri yüklenemedi. Bilinmeyen bir hata oluştu (9).",
  "self": "Üçüncü taraf antivirüs/güvenlik duvarını geçici olarak kapatın ve güncellemeyi yeniden deneyin; orijinal kablo, arka USB bağlantı noktası ve başka bir bilgisayar kullanın; zorla yeniden başlatın ve önce Geri Yükle değil Güncelle'yi seçin.",
  "hw": "Tüm yazılım çözümleri başarısız olursa, genellikle soğuk lehimli/arızalı NAND depolama, yetersiz güç veya depolama-CPU iletişim hatasıdır.",
  "tip": "9, kablo çıkarıldıktan çok sonra çıkıyorsa depolama hiç algılanmıyordur.",
  "scene": "En sık, cihaz geri yüklemenin ikinci yarısında bağlantısı kesildiğinde."
 },
 "4005": {
  "cat": "USB bağlantısı / Donanım",
  "msg": "iPhone'a geri yüklenemedi. Bilinmeyen bir hata oluştu (4005).",
  "self": "Orijinal kablo, arka USB bağlantı noktası ve başka bir bilgisayar deneyin, ardından DFU modunda yeniden geri yükleyin.",
  "hw": "Genellikle CPU veya güç devresi.",
  "tip": "",
  "scene": ""
 },
 "4013": {
  "cat": "USB bağlantısı / Donanım",
  "msg": "iPhone'a geri yüklenemedi. Bilinmeyen bir hata oluştu (4013).",
  "self": "Kısa orijinal kablo, arka USB bağlantı noktası ve başka bir bilgisayar kullanın; DFU ile yeniden geri yükleyin; iTunes'da hosts/proxy sorunu varsa hosts dosyasını geri yükleyin ve güvenlik duvarını kapatın.",
  "hw": "Tüm yazılım adımları başarısız olduğunda genellikle RAM-CPU-depolama veri yolu sorunudur; yeniden başlatmayla birlikte grafik bozulması veri yolu arızası olabilir.",
  "tip": "İlerleme çubuğundan sonra çıkar → depolamaya yakın; hemen çıkar → önce kablo/USB kontrol edin.",
  "scene": "Eski sürüme geçişte ya da üçüncü taraf bir araç gs.apple.com'u yönlendirmek için hosts dosyasını değiştirdiğinde sık görülür (iTunes 80/443 bağlantı noktalarından sunucuya erişemez)."
 },
 "4014": {
  "cat": "USB bağlantısı / Donanım",
  "msg": "iPhone'a geri yüklenemedi. Bilinmeyen bir hata oluştu (4014).",
  "self": "Kabloyu/bağlantı noktasını değiştirin ve DFU modunda yeniden geri yükleyin.",
  "hw": "Geçici SDRAM ve devresi arızalı / üst SoC kararsız / pil çok düşük.",
  "tip": "Apple logosu yoksa → genellikle üst CPU kapağı; Apple logosu çıkarsa → depolamaya yakın.",
  "scene": ""
 },
 "4037": {
  "cat": "Cihaz durumu",
  "msg": "iPhone'a geri yüklenemedi. Bilinmeyen bir hata oluştu (4037).",
  "self": "Cihazın parolası varken kilidi açılmadığında çıkar. Cihazda kilidi açın, ekranı açık tutun ve geri yükleyin.",
  "hw": "",
  "tip": "",
  "scene": ""
 },
 "14": {
  "cat": "USB bağlantısı / Donanım",
  "msg": "iPhone'a geri yüklenemedi. Bilinmeyen bir hata oluştu (14).",
  "self": "Kabloyu / USB bağlantı noktasını değiştirin; birkaç kez de deneyebilirsiniz.",
  "hw": "Yetersiz depolama veya pil ya da bilgisayar sorunu; eski notlar bozuk donanım yazılımından da söz eder → indirilen donanım yazılımını silip yeniden indirin.",
  "tip": "",
  "scene": ""
 },
 "11": {
  "cat": "Donanım / Depolama",
  "msg": "Geri yüklenemedi (11).",
  "self": "Sistem diskinde yer açın (≥10 GB bırakın) ve donanım yazılımını yeniden indirin.",
  "hw": "Sistem diski dolu ya da donanım yazılımı dosyası bozuk.",
  "tip": "",
  "scene": ""
 },
 "3194": {
  "cat": "Ağ / Apple sunucuları",
  "msg": "iPhone'a geri yüklenemedi. Bilinmeyen bir hata oluştu (3194).",
  "self": "Yalnızca o anda imzalanan sürümü geri yükleyin; hosts dosyasını geri yükleyin (eski imza sunucularına işaret eden satırları silin); proxy/VPN'yi kapatın.",
  "hw": "",
  "tip": "",
  "scene": "Apple'ın artık imzalamadığı bir iOS'a geçişte her zaman çıkar."
 },
 "3004": {
  "cat": "Ağ / Kablo",
  "msg": "İlerleme çubuğu ilerlerken Apple logosunun hemen ardından çıkar (3004 / 3014 / 2005).",
  "self": "Kararlı bir ağa geçin, kabloyu değiştirin ve hosts dosyasını kontrol edin.",
  "hw": "",
  "tip": "",
  "scene": "İlerleme yeni başlarken çıkar → genellikle kablo / bilgisayar / ağ sorunu."
 },
 "53": {
  "cat": "Donanım",
  "msg": "iPhone'a geri yüklenemedi. Bilinmeyen bir hata oluştu (53).",
  "self": "Bilgisayarı telefonun kişisel erişim noktası üzerinden bağlayın ve kimlik doğrulama/ağ etkenlerini elemek için yeniden geri yükleyin.",
  "hw": "Genellikle hasarlı Touch ID / Face ID modülü; eşleştirilmiş donanım değiştirilmelidir.",
  "tip": "",
  "scene": ""
 },
 "-1": {
  "cat": "Donanım / Baz bant",
  "msg": "Geri yüklenemedi (-1).",
  "self": "Yazılımla çözülemez; kart onarımı gerekir.",
  "hw": "Bir baz bant güç hattı eksik ya da bir hat toprağa kısa devre; baz bant CPU lehimlemesi eksik.",
  "tip": "",
  "scene": ""
 },
 "1": {
  "cat": "Donanım / Baz bant",
  "msg": "Geri yüklenemedi (1).",
  "self": "Baz bant kontrolüne verin.",
  "hw": "Baz bant CPU algılanmıyor; baz bant PMU'nun güç verip vermediğini ve baz bant CPU'da soğuk lehim olup olmadığını kontrol edin.",
  "tip": "",
  "scene": ""
 },
 "3": {
  "cat": "Donanım / Baz bant",
  "msg": "Geri yüklenemedi (3).",
  "self": "Baz bant kontrolüne verin.",
  "hw": "Baz bant, EEPROM ve devresi arızalı.",
  "tip": "",
  "scene": ""
 },
 "6": {
  "cat": "Donanım",
  "msg": "Geri yüklenemedi (6).",
  "self": "Sağlam kablo / bilgisayar / ağ ile iki kez daha geri yükleyin; sürerse onarın.",
  "hw": "Soğuk lehimli SoC ya da hasarlı depolama.",
  "tip": "",
  "scene": ""
 },
 "10": {
  "cat": "Yazılım çok yeni",
  "msg": "Geri yüklenemedi (10).",
  "self": "Cihazın iOS'u bilgisayar tarafından daha yeni; Mac / iTunes / Apple Aygıtları uygulamasını güncelleyip yeniden deneyin.",
  "hw": "",
  "tip": "",
  "scene": ""
 },
 "1015": {
  "cat": "Jailbreak / eski sürüm",
  "msg": "Gerekli kaynak bulunamıyor / (1015).",
  "self": "Jailbreak yapılmış ya da eski sürüme geçirilen cihazlarda olur; en son iOS'a geri yüklemek için kurtarma modunu kullanın.",
  "hw": "",
  "tip": "",
  "scene": ""
 },
 "9006": {
  "cat": "Güvenlik yazılımı / Ağ",
  "msg": "Donanım yazılımı indirilirken çıkar (9006).",
  "self": "İndirme, güvenlik duvarı/ağ tarafından engelleniyor; güvenlik duvarını kapatın ya da doğru IPSW'yi elle indirip yerel olarak geri yükleyin.",
  "hw": "",
  "tip": "",
  "scene": ""
 },
 "50": {
  "cat": "Ağ",
  "msg": "Donanım yazılımı indirme zaman aşımı (50 / -50).",
  "self": "50, Apple tarafındaki indirme zaman aşımıdır; kararlı bir ağa geçin ya da donanım yazılımını elle indirin. -50 genellikle aisi-helper sunucu zaman aşımıdır; proxy'yi kontrol edin ya da en son istemciye güncelleyin.",
  "hw": "",
  "tip": "",
  "scene": ""
 },
 "0xE8000015": {
  "cat": "USB / Sürücü",
  "msg": "0xE8000015",
  "self": "Apple Mobile Device sürücüsünü / AMDS'yi yeniden kurun ve kablo/bağlantı noktasını değiştirin; ya da onarım kitindeki tek tıkla iTunes & sürücü onarımını kullanın.",
  "hw": "",
  "tip": "",
  "scene": ""
 }
};
