window.CODES = {
 "9": {
  "cat": "Beveiligingssoftware / Hardware",
  "msg": "De iPhone kan niet worden hersteld. Er heeft zich een onbekende fout voorgedaan (9).",
  "self": "Schakel antivirus/firewall van derden tijdelijk uit en probeer de update opnieuw; gebruik een originele kabel, een achterste USB-poort en een andere computer; forceer een herstart en kies eerst Werk bij (niet Herstel).",
  "hw": "Als alle softwareoplossingen mislukken, is het meestal NAND-opslag met koude soldering/defect, onvoldoende voeding of een communicatiefout opslag-CPU.",
  "tip": "Verschijnt de 9 pas lang nadat je de kabel hebt losgekoppeld, dan wordt de opslag helemaal niet gedetecteerd.",
  "scene": "Het vaakst wanneer het toestel in de tweede helft van het herstel de verbinding verbreekt."
 },
 "4005": {
  "cat": "USB-verbinding / Hardware",
  "msg": "De iPhone kan niet worden hersteld. Er heeft zich een onbekende fout voorgedaan (4005).",
  "self": "Probeer een originele kabel, een achterste USB-poort en een andere computer, en herstel daarna opnieuw in de DFU-modus.",
  "hw": "Meestal de CPU of het voedingscircuit ervan.",
  "tip": "",
  "scene": ""
 },
 "4013": {
  "cat": "USB-verbinding / Hardware",
  "msg": "De iPhone kan niet worden hersteld. Er heeft zich een onbekende fout voorgedaan (4013).",
  "self": "Gebruik een korte originele kabel, een achterste USB-poort en een andere computer; herstel opnieuw via DFU; bij een hosts-/proxyprobleem van iTunes het hosts-bestand herstellen en de firewall uitschakelen.",
  "hw": "Als alle softwarestappen mislukken, is het meestal een RAM-CPU-opslag-busprobleem; een grafische storing met herstart kan op een busfout wijzen.",
  "tip": "Verschijnt na de voortgangsbalk → neigt naar opslag; verschijnt meteen → controleer eerst kabel/USB.",
  "scene": "Vaak bij een downgrade, of wanneer een tool van derden het hosts-bestand herschrijft om gs.apple.com om te leiden (iTunes bereikt de server niet op poort 80/443)."
 },
 "4014": {
  "cat": "USB-verbinding / Hardware",
  "msg": "De iPhone kan niet worden hersteld. Er heeft zich een onbekende fout voorgedaan (4014).",
  "self": "Wissel kabel/poort en herstel opnieuw in de DFU-modus.",
  "hw": "Tijdelijke SDRAM en het circuit ervan defect / bovenste SoC instabiel / batterij te laag.",
  "tip": "Geen Apple-logo → vaak de bovenkap van de CPU; Apple-logo verschijnt → neigt naar opslag.",
  "scene": ""
 },
 "4037": {
  "cat": "Toestelstatus",
  "msg": "De iPhone kan niet worden hersteld. Er heeft zich een onbekende fout voorgedaan (4037).",
  "self": "Verschijnt wanneer het toestel een toegangscode heeft en niet ontgrendeld is. Ontgrendel het op het toestel, houd het scherm aan en herstel.",
  "hw": "",
  "tip": "",
  "scene": ""
 },
 "14": {
  "cat": "USB-verbinding / Hardware",
  "msg": "De iPhone kan niet worden hersteld. Er heeft zich een onbekende fout voorgedaan (14).",
  "self": "Wissel kabel / USB-poort; je kunt het ook een paar keer opnieuw proberen.",
  "hw": "Onvoldoende opslag of batterij, of een computerprobleem; oude notities noemen ook beschadigde firmware → verwijder de gedownloade firmware en download opnieuw.",
  "tip": "",
  "scene": ""
 },
 "11": {
  "cat": "Hardware / Opslag",
  "msg": "Herstellen niet mogelijk (11).",
  "self": "Maak ruimte vrij op de systeemschijf (houd ≥10 GB) en download de firmware opnieuw.",
  "hw": "Systeemschijf vol, of beschadigd firmwarebestand.",
  "tip": "",
  "scene": ""
 },
 "3194": {
  "cat": "Netwerk / Apple-servers",
  "msg": "De iPhone kan niet worden hersteld. Er heeft zich een onbekende fout voorgedaan (3194).",
  "self": "Herstel alleen een momenteel ondertekende versie; herstel het hosts-bestand (verwijder regels die naar oude ondertekeningsservers wijzen); schakel proxy/VPN uit.",
  "hw": "",
  "tip": "",
  "scene": "Verschijnt altijd bij een downgrade naar een iOS die Apple niet meer ondertekent."
 },
 "3004": {
  "cat": "Netwerk / Kabel",
  "msg": "Verschijnt vlak na het Apple-logo terwijl de voortgangsbalk loopt (3004 / 3014 / 2005).",
  "self": "Schakel over naar een stabiel netwerk, wissel de kabel en controleer het hosts-bestand.",
  "hw": "",
  "tip": "",
  "scene": "Verschijnt bij het begin van de voortgang → meestal een kabel-/computer-/netwerkprobleem."
 },
 "53": {
  "cat": "Hardware",
  "msg": "De iPhone kan niet worden hersteld. Er heeft zich een onbekende fout voorgedaan (53).",
  "self": "Verbind de computer via de hotspot van de telefoon en herstel opnieuw om authenticatie-/netwerkfactoren uit te sluiten.",
  "hw": "Meestal een beschadigde Touch ID- / Face ID-module; de gekoppelde hardware moet worden vervangen.",
  "tip": "",
  "scene": ""
 },
 "-1": {
  "cat": "Hardware / Basisband",
  "msg": "Herstellen niet mogelijk (-1).",
  "self": "Niet via software op te lossen; vereist een reparatie van het bord.",
  "hw": "Een voedingsrail van de basisband ontbreekt, of een rail is kortgesloten naar massa; de soldering van de basisband-CPU is onvolledig.",
  "tip": "",
  "scene": ""
 },
 "1": {
  "cat": "Hardware / Basisband",
  "msg": "Herstellen niet mogelijk (1).",
  "self": "Breng het voor een basisbandcontrole.",
  "hw": "Basisband-CPU niet gedetecteerd; controleer of de basisband-PMU voeding levert en of de basisband-CPU koude soldering heeft.",
  "tip": "",
  "scene": ""
 },
 "3": {
  "cat": "Hardware / Basisband",
  "msg": "Herstellen niet mogelijk (3).",
  "self": "Breng het voor een basisbandcontrole.",
  "hw": "Basisband, de EEPROM en het circuit ervan defect.",
  "tip": "",
  "scene": ""
 },
 "6": {
  "cat": "Hardware",
  "msg": "Herstellen niet mogelijk (6).",
  "self": "Herstel nog twee keer met een goede kabel / computer / netwerk; blijft het bestaan, repareer dan.",
  "hw": "SoC met koude soldering, of beschadigde opslag.",
  "tip": "",
  "scene": ""
 },
 "10": {
  "cat": "Software te nieuw",
  "msg": "Herstellen niet mogelijk (10).",
  "self": "De iOS van het toestel is nieuwer dan de computerkant; werk Mac / iTunes / de Apple Devices-app bij en probeer opnieuw.",
  "hw": "",
  "tip": "",
  "scene": ""
 },
 "1015": {
  "cat": "Jailbreak / downgrade",
  "msg": "De vereiste bron kan niet worden gevonden / (1015).",
  "self": "Treedt op bij toestellen met jailbreak of downgrade; gebruik de herstelmodus om naar de nieuwste iOS te herstellen.",
  "hw": "",
  "tip": "",
  "scene": ""
 },
 "9006": {
  "cat": "Beveiligingssoftware / Netwerk",
  "msg": "Verschijnt tijdens het downloaden van de firmware (9006).",
  "self": "De download wordt geblokkeerd door firewall/netwerk; schakel de firewall uit, of download de juiste IPSW handmatig en herstel lokaal.",
  "hw": "",
  "tip": "",
  "scene": ""
 },
 "50": {
  "cat": "Netwerk",
  "msg": "Time-out bij firmwaredownload (50 / -50).",
  "self": "50 is een downloadtime-out aan Apple-zijde; schakel over naar een stabiel netwerk of download de firmware handmatig. -50 is meestal een time-out van de aisi-helper-server; controleer de proxy of werk bij naar de nieuwste client.",
  "hw": "",
  "tip": "",
  "scene": ""
 },
 "0xE8000015": {
  "cat": "USB / Stuurprogramma",
  "msg": "0xE8000015",
  "self": "Installeer het Apple Mobile Device-stuurprogramma / AMDS opnieuw en wissel kabel/poort; of gebruik de één-klik-reparatie van iTunes & stuurprogramma's uit de reparatiekit.",
  "hw": "",
  "tip": "",
  "scene": ""
 }
};
