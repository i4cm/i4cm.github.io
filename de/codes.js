window.CODES = {
 "9": {
  "cat": "Sicherheitssoftware / Hardware",
  "msg": "Das iPhone konnte nicht wiederhergestellt werden. Ein unbekannter Fehler ist aufgetreten (9).",
  "self": "Deaktiviere vorübergehend Antivirus/Firewall von Drittanbietern und versuche das Update erneut; nutze ein Originalkabel, einen hinteren USB-Anschluss und einen anderen Computer; erzwinge einen Neustart und wähle zuerst Aktualisieren (nicht Wiederherstellen).",
  "hw": "Wenn alle Softwarelösungen scheitern, ist meist der NAND-Speicher kalt gelötet/defekt, die Stromversorgung unzureichend oder die Speicher-CPU-Kommunikation gestört.",
  "tip": "Erscheint die 9 erst lange nach dem Abziehen des Kabels, wird der Speicher gar nicht erkannt.",
  "scene": "Am häufigsten, wenn sich das Gerät in der zweiten Hälfte der Wiederherstellung trennt."
 },
 "4005": {
  "cat": "USB-Verbindung / Hardware",
  "msg": "Das iPhone konnte nicht wiederhergestellt werden. Ein unbekannter Fehler ist aufgetreten (4005).",
  "self": "Probiere ein Originalkabel, einen hinteren USB-Anschluss und einen anderen Computer und stelle dann im DFU-Modus erneut wieder her.",
  "hw": "Meist die CPU oder ihre Stromversorgungsschaltung.",
  "tip": "",
  "scene": ""
 },
 "4013": {
  "cat": "USB-Verbindung / Hardware",
  "msg": "Das iPhone konnte nicht wiederhergestellt werden. Ein unbekannter Fehler ist aufgetreten (4013).",
  "self": "Nutze ein kurzes Originalkabel, einen hinteren USB-Anschluss und einen anderen Computer; stelle per DFU erneut wieder her; bei einem hosts-/Proxy-Problem von iTunes die hosts-Datei wiederherstellen und die Firewall deaktivieren.",
  "hw": "Wenn alle Softwareschritte scheitern, meist ein RAM-CPU-Speicher-Bus-Problem; ein Grafikfehler mit Neustart kann auf einen Busfehler hindeuten.",
  "tip": "Erscheint nach der Fortschrittsanzeige → eher Speicher; erscheint sofort → zuerst Kabel/USB prüfen.",
  "scene": "Häufig beim Downgrade oder wenn ein Drittanbieter-Tool die hosts-Datei umschreibt, um gs.apple.com umzuleiten (iTunes erreicht den Server an Port 80/443 nicht)."
 },
 "4014": {
  "cat": "USB-Verbindung / Hardware",
  "msg": "Das iPhone konnte nicht wiederhergestellt werden. Ein unbekannter Fehler ist aufgetreten (4014).",
  "self": "Wechsle Kabel/Anschluss und stelle im DFU-Modus erneut wieder her.",
  "hw": "Temporärer SDRAM und dessen Schaltung defekt / oberer SoC instabil / Akku zu schwach.",
  "tip": "Kein Apple-Logo → oft die obere CPU-Kappe; Apple-Logo erscheint → eher Speicher.",
  "scene": ""
 },
 "4037": {
  "cat": "Gerätestatus",
  "msg": "Das iPhone konnte nicht wiederhergestellt werden. Ein unbekannter Fehler ist aufgetreten (4037).",
  "self": "Erscheint, wenn das Gerät einen Code hat und nicht entsperrt ist. Entsperre es am Gerät, halte den Bildschirm an und stelle dann wieder her.",
  "hw": "",
  "tip": "",
  "scene": ""
 },
 "14": {
  "cat": "USB-Verbindung / Hardware",
  "msg": "Das iPhone konnte nicht wiederhergestellt werden. Ein unbekannter Fehler ist aufgetreten (14).",
  "self": "Wechsle Kabel / USB-Anschluss; du kannst es auch mehrmals versuchen.",
  "hw": "Zu wenig Speicher oder Akku, oder ein Computerproblem; ältere Hinweise nennen auch beschädigte Firmware → lösche die heruntergeladene Firmware und lade sie neu.",
  "tip": "",
  "scene": ""
 },
 "11": {
  "cat": "Hardware / Speicher",
  "msg": "Wiederherstellung nicht möglich (11).",
  "self": "Schaffe Platz auf dem Systemlaufwerk (≥10 GB frei) und lade die Firmware neu.",
  "hw": "Systemlaufwerk voll, oder Firmware-Datei beschädigt.",
  "tip": "",
  "scene": ""
 },
 "3194": {
  "cat": "Netzwerk / Apple-Server",
  "msg": "Das iPhone konnte nicht wiederhergestellt werden. Ein unbekannter Fehler ist aufgetreten (3194).",
  "self": "Stelle nur eine aktuell signierte Version wieder her; stelle die hosts-Datei wieder her (entferne Zeilen, die auf alte Signierserver zeigen); deaktiviere Proxy/VPN.",
  "hw": "",
  "tip": "",
  "scene": "Erscheint immer beim Downgrade auf ein iOS, das Apple nicht mehr signiert."
 },
 "3004": {
  "cat": "Netzwerk / Kabel",
  "msg": "Erscheint direkt nach dem Apple-Logo, während die Fortschrittsanzeige läuft (3004 / 3014 / 2005).",
  "self": "Wechsle in ein stabiles Netzwerk, tausche das Kabel und prüfe die hosts-Datei.",
  "hw": "",
  "tip": "",
  "scene": "Erscheint zu Beginn des Fortschritts → meist ein Kabel-/Computer-/Netzwerkproblem."
 },
 "53": {
  "cat": "Hardware",
  "msg": "Das iPhone konnte nicht wiederhergestellt werden. Ein unbekannter Fehler ist aufgetreten (53).",
  "self": "Verbinde den Computer über den Hotspot des Telefons und stelle erneut wieder her, um Authentifizierungs-/Netzwerkfaktoren auszuschließen.",
  "hw": "Meist ein beschädigtes Touch-ID-/Face-ID-Modul; die gepaarte Hardware muss ersetzt werden.",
  "tip": "",
  "scene": ""
 },
 "-1": {
  "cat": "Hardware / Baseband",
  "msg": "Wiederherstellung nicht möglich (-1).",
  "self": "Nicht per Software lösbar; erfordert eine Platinenreparatur.",
  "hw": "Eine Baseband-Stromschiene fehlt, oder eine Schiene hat einen Masseschluss; die Lötung der Baseband-CPU ist unvollständig.",
  "tip": "",
  "scene": ""
 },
 "1": {
  "cat": "Hardware / Baseband",
  "msg": "Wiederherstellung nicht möglich (1).",
  "self": "Zur Baseband-Prüfung geben.",
  "hw": "Baseband-CPU nicht erkannt; prüfe, ob die Baseband-PMU Strom liefert und ob die Baseband-CPU kalt gelötet ist.",
  "tip": "",
  "scene": ""
 },
 "3": {
  "cat": "Hardware / Baseband",
  "msg": "Wiederherstellung nicht möglich (3).",
  "self": "Zur Baseband-Prüfung geben.",
  "hw": "Baseband, das EEPROM und dessen Schaltung defekt.",
  "tip": "",
  "scene": ""
 },
 "6": {
  "cat": "Hardware",
  "msg": "Wiederherstellung nicht möglich (6).",
  "self": "Stelle zweimal mehr mit einwandfreiem Kabel / Computer / Netzwerk wieder her; bleibt es bestehen, reparieren.",
  "hw": "SoC kalt gelötet, oder Speicher beschädigt.",
  "tip": "",
  "scene": ""
 },
 "10": {
  "cat": "Software zu neu",
  "msg": "Wiederherstellung nicht möglich (10).",
  "self": "Das iOS des Geräts ist neuer als die Computerseite; aktualisiere Mac / iTunes / die Apple-Geräte-App und versuche es erneut.",
  "hw": "",
  "tip": "",
  "scene": ""
 },
 "1015": {
  "cat": "Jailbreak / Downgrade",
  "msg": "Die erforderliche Ressource wurde nicht gefunden / (1015).",
  "self": "Tritt bei Geräten mit Jailbreak oder Downgrade auf; nutze den Wiederherstellungsmodus, um auf das neueste iOS wiederherzustellen.",
  "hw": "",
  "tip": "",
  "scene": ""
 },
 "9006": {
  "cat": "Sicherheitssoftware / Netzwerk",
  "msg": "Erscheint beim Herunterladen der Firmware (9006).",
  "self": "Der Download wird von Firewall/Netzwerk blockiert; deaktiviere die Firewall, oder lade die passende IPSW manuell und stelle lokal wieder her.",
  "hw": "",
  "tip": "",
  "scene": ""
 },
 "50": {
  "cat": "Netzwerk",
  "msg": "Zeitüberschreitung beim Firmware-Download (50 / -50).",
  "self": "50 ist eine Download-Zeitüberschreitung auf Apple-Seite; wechsle in ein stabiles Netzwerk oder lade die Firmware manuell. -50 ist meist eine Zeitüberschreitung des aisi-helper-Servers; prüfe den Proxy oder aktualisiere auf den neuesten Client.",
  "hw": "",
  "tip": "",
  "scene": ""
 },
 "0xE8000015": {
  "cat": "USB / Treiber",
  "msg": "0xE8000015",
  "self": "Installiere den Apple-Mobile-Device-Treiber / AMDS neu und wechsle Kabel/Anschluss; oder nutze die Ein-Klick-Reparatur von iTunes & Treibern aus dem Reparatur-Kit.",
  "hw": "",
  "tip": "",
  "scene": ""
 }
};
