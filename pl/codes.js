window.CODES = {
 "9": {
  "cat": "Oprogramowanie zabezpieczające / Sprzęt",
  "msg": "Nie można było odtworzyć iPhone'a. Wystąpił nieznany błąd (9).",
  "self": "Tymczasowo wyłącz antywirus/zaporę innej firmy i ponów uaktualnianie; użyj oryginalnego kabla, tylnego portu USB i innego komputera; wymuś ponowne uruchomienie i najpierw wybierz Uaktualnij (nie Odtwórz).",
  "hw": "Jeśli wszystkie sposoby programowe zawiodą, to zwykle pamięć NAND z zimnym lutem/uszkodzona, niewystarczające zasilanie lub błąd komunikacji pamięć-CPU.",
  "tip": "Jeśli 9 pojawia się dopiero długo po odłączeniu kabla, pamięć w ogóle nie jest wykrywana.",
  "scene": "Najczęściej, gdy urządzenie rozłącza się w drugiej połowie odtwarzania."
 },
 "4005": {
  "cat": "Połączenie USB / Sprzęt",
  "msg": "Nie można było odtworzyć iPhone'a. Wystąpił nieznany błąd (4005).",
  "self": "Wypróbuj oryginalny kabel, tylny port USB i inny komputer, a następnie odtwórz ponownie w trybie DFU.",
  "hw": "Zwykle CPU lub jego obwód zasilania.",
  "tip": "",
  "scene": ""
 },
 "4013": {
  "cat": "Połączenie USB / Sprzęt",
  "msg": "Nie można było odtworzyć iPhone'a. Wystąpił nieznany błąd (4013).",
  "self": "Użyj krótkiego oryginalnego kabla, tylnego portu USB i innego komputera; odtwórz ponownie przez DFU; jeśli iTunes ma problem z hosts/proxy, przywróć plik hosts i wyłącz zaporę.",
  "hw": "Gdy wszystkie kroki programowe zawodzą, to zwykle problem magistrali RAM-CPU-pamięć; błąd graficzny z restartem może oznaczać awarię magistrali.",
  "tip": "Pojawia się po pasku postępu → bliżej pamięci; pojawia się od razu → najpierw sprawdź kabel/USB.",
  "scene": "Częste przy zmianie na starszą wersję lub gdy narzędzie innej firmy przepisuje plik hosts, by przekierować gs.apple.com (iTunes nie dociera do serwera na portach 80/443)."
 },
 "4014": {
  "cat": "Połączenie USB / Sprzęt",
  "msg": "Nie można było odtworzyć iPhone'a. Wystąpił nieznany błąd (4014).",
  "self": "Zmień kabel/port i odtwórz ponownie w trybie DFU.",
  "hw": "Tymczasowa SDRAM i jej obwód uszkodzone / niestabilny górny SoC / zbyt niska bateria.",
  "tip": "Brak logo Apple → często górna pokrywa CPU; logo Apple widoczne → bliżej pamięci.",
  "scene": ""
 },
 "4037": {
  "cat": "Stan urządzenia",
  "msg": "Nie można było odtworzyć iPhone'a. Wystąpił nieznany błąd (4037).",
  "self": "Pojawia się, gdy urządzenie ma kod i nie jest odblokowane. Odblokuj je na urządzeniu, nie pozwól, by ekran zgasł, i odtwórz.",
  "hw": "",
  "tip": "",
  "scene": ""
 },
 "14": {
  "cat": "Połączenie USB / Sprzęt",
  "msg": "Nie można było odtworzyć iPhone'a. Wystąpił nieznany błąd (14).",
  "self": "Zmień kabel / port USB; możesz też spróbować kilka razy.",
  "hw": "Za mało pamięci lub baterii, albo problem komputera; stare notatki wspominają też uszkodzone oprogramowanie układowe → usuń pobrane oprogramowanie układowe i pobierz je ponownie.",
  "tip": "",
  "scene": ""
 },
 "11": {
  "cat": "Sprzęt / Pamięć",
  "msg": "Nie można odtworzyć (11).",
  "self": "Zwolnij miejsce na dysku systemowym (zostaw ≥10 GB) i pobierz oprogramowanie układowe ponownie.",
  "hw": "Dysk systemowy pełny lub uszkodzony plik oprogramowania układowego.",
  "tip": "",
  "scene": ""
 },
 "3194": {
  "cat": "Sieć / Serwery Apple",
  "msg": "Nie można było odtworzyć iPhone'a. Wystąpił nieznany błąd (3194).",
  "self": "Odtwarzaj tylko aktualnie podpisywaną wersję; przywróć plik hosts (usuń wiersze wskazujące stare serwery podpisu); wyłącz proxy/VPN.",
  "hw": "",
  "tip": "",
  "scene": "Zawsze pojawia się przy zejściu do iOS, którego Apple już nie podpisuje."
 },
 "3004": {
  "cat": "Sieć / Kabel",
  "msg": "Pojawia się tuż po logo Apple, gdy pasek postępu się przesuwa (3004 / 3014 / 2005).",
  "self": "Przełącz się na stabilną sieć, zmień kabel i sprawdź plik hosts.",
  "hw": "",
  "tip": "",
  "scene": "Pojawia się na początku postępu → zwykle problem kabla / komputera / sieci."
 },
 "53": {
  "cat": "Sprzęt",
  "msg": "Nie można było odtworzyć iPhone'a. Wystąpił nieznany błąd (53).",
  "self": "Podłącz komputer przez hotspot telefonu i odtwórz ponownie, aby wykluczyć czynniki uwierzytelniania/sieci.",
  "hw": "Zwykle uszkodzony moduł Touch ID / Face ID; sparowany sprzęt trzeba wymienić.",
  "tip": "",
  "scene": ""
 },
 "-1": {
  "cat": "Sprzęt / Modem",
  "msg": "Nie można odtworzyć (-1).",
  "self": "Nie da się rozwiązać programowo; wymaga naprawy płyty.",
  "hw": "Brak szyny zasilania modemu lub szyna zwarta do masy; lutowanie CPU modemu jest niepełne.",
  "tip": "",
  "scene": ""
 },
 "1": {
  "cat": "Sprzęt / Modem",
  "msg": "Nie można odtworzyć (1).",
  "self": "Oddaj do sprawdzenia modemu.",
  "hw": "Nie wykryto CPU modemu; sprawdź, czy PMU modemu wydaje zasilanie i czy CPU modemu nie ma zimnego lutu.",
  "tip": "",
  "scene": ""
 },
 "3": {
  "cat": "Sprzęt / Modem",
  "msg": "Nie można odtworzyć (3).",
  "self": "Oddaj do sprawdzenia modemu.",
  "hw": "Modem, EEPROM i jego obwód uszkodzone.",
  "tip": "",
  "scene": ""
 },
 "6": {
  "cat": "Sprzęt",
  "msg": "Nie można odtworzyć (6).",
  "self": "Odtwórz jeszcze dwa razy ze sprawnym kablem / komputerem / siecią; jeśli się powtarza, napraw.",
  "hw": "Zimny lut SoC lub uszkodzona pamięć.",
  "tip": "",
  "scene": ""
 },
 "10": {
  "cat": "Oprogramowanie zbyt nowe",
  "msg": "Nie można odtworzyć (10).",
  "self": "iOS urządzenia jest nowszy niż po stronie komputera; uaktualnij Mac / iTunes / aplikację Urządzenia Apple i spróbuj ponownie.",
  "hw": "",
  "tip": "",
  "scene": ""
 },
 "1015": {
  "cat": "Jailbreak / starsza wersja",
  "msg": "Nie można odnaleźć wymaganego zasobu / (1015).",
  "self": "Występuje na urządzeniach po jailbreaku lub przy zejściu wersji; użyj trybu odzyskiwania, aby odtworzyć najnowszy iOS.",
  "hw": "",
  "tip": "",
  "scene": ""
 },
 "9006": {
  "cat": "Oprogramowanie zabezpieczające / Sieć",
  "msg": "Pojawia się podczas pobierania oprogramowania układowego (9006).",
  "self": "Pobieranie blokuje zapora/sieć; wyłącz zaporę albo pobierz właściwy IPSW ręcznie i odtwórz lokalnie.",
  "hw": "",
  "tip": "",
  "scene": ""
 },
 "50": {
  "cat": "Sieć",
  "msg": "Przekroczono czas pobierania oprogramowania układowego (50 / -50).",
  "self": "50 to przekroczenie czasu pobierania po stronie Apple; przełącz się na stabilną sieć lub pobierz oprogramowanie układowe ręcznie. -50 to zwykle przekroczenie czasu serwera aisi-helper; sprawdź proxy lub zaktualizuj klienta do najnowszej wersji.",
  "hw": "",
  "tip": "",
  "scene": ""
 },
 "0xE8000015": {
  "cat": "USB / Sterownik",
  "msg": "0xE8000015",
  "self": "Zainstaluj ponownie sterownik Apple Mobile Device / AMDS i zmień kabel/port; albo użyj naprawy iTunes i sterowników jednym kliknięciem z zestawu naprawczego.",
  "hw": "",
  "tip": "",
  "scene": ""
 }
};
