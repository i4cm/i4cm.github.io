window.CODES = {
 "9": {
  "cat": "Software di protezione / Hardware",
  "msg": "Impossibile ripristinare iPhone. Si è verificato un errore sconosciuto (9).",
  "self": "Disattiva temporaneamente antivirus/firewall di terze parti e riprova l'aggiornamento; usa un cavo originale, una porta USB posteriore e un altro computer; forza il riavvio e scegli prima Aggiorna (non Ripristina).",
  "hw": "Se tutte le soluzioni software falliscono, di solito è l'archiviazione NAND con saldatura fredda/difettosa, alimentazione insufficiente o un guasto di comunicazione archiviazione-CPU.",
  "tip": "Se il 9 compare solo molto dopo aver scollegato il cavo, l'archiviazione non viene rilevata affatto.",
  "scene": "Più comune quando il dispositivo si disconnette nella seconda metà del ripristino."
 },
 "4005": {
  "cat": "Collegamento USB / Hardware",
  "msg": "Impossibile ripristinare iPhone. Si è verificato un errore sconosciuto (4005).",
  "self": "Prova un cavo originale, una porta USB posteriore e un altro computer, poi ripristina di nuovo in modalità DFU.",
  "hw": "Di solito la CPU o il suo circuito di alimentazione.",
  "tip": "",
  "scene": ""
 },
 "4013": {
  "cat": "Collegamento USB / Hardware",
  "msg": "Impossibile ripristinare iPhone. Si è verificato un errore sconosciuto (4013).",
  "self": "Usa un cavo originale corto, una porta USB posteriore e un altro computer; ripristina di nuovo via DFU; se iTunes ha un problema hosts/proxy, ripristina il file hosts e disattiva il firewall.",
  "hw": "Quando tutti i passaggi software falliscono, di solito è un problema del bus RAM-CPU-archiviazione; un difetto grafico con riavvio può indicare un guasto del bus.",
  "tip": "Compare dopo la barra di avanzamento → tende all'archiviazione; compare subito → controlla prima cavo/USB.",
  "scene": "Comune durante un downgrade, o quando uno strumento di terze parti riscrive il file hosts per reindirizzare gs.apple.com (iTunes non raggiunge il server sulle porte 80/443)."
 },
 "4014": {
  "cat": "Collegamento USB / Hardware",
  "msg": "Impossibile ripristinare iPhone. Si è verificato un errore sconosciuto (4014).",
  "self": "Cambia cavo/porta e ripristina di nuovo in modalità DFU.",
  "hw": "SDRAM temporanea e il suo circuito difettosi / SoC superiore instabile / batteria troppo scarica.",
  "tip": "Nessun logo Apple → spesso il cappuccio superiore della CPU; logo Apple visibile → tende all'archiviazione.",
  "scene": ""
 },
 "4037": {
  "cat": "Stato del dispositivo",
  "msg": "Impossibile ripristinare iPhone. Si è verificato un errore sconosciuto (4037).",
  "self": "Compare quando il dispositivo ha un codice e non è sbloccato. Sbloccalo sul dispositivo, mantieni lo schermo acceso e ripristina.",
  "hw": "",
  "tip": "",
  "scene": ""
 },
 "14": {
  "cat": "Collegamento USB / Hardware",
  "msg": "Impossibile ripristinare iPhone. Si è verificato un errore sconosciuto (14).",
  "self": "Cambia cavo / porta USB; puoi anche riprovare più volte.",
  "hw": "Archiviazione o batteria insufficienti, o un problema del computer; vecchie note menzionano anche firmware danneggiato → elimina il firmware scaricato e riscaricalo.",
  "tip": "",
  "scene": ""
 },
 "11": {
  "cat": "Hardware / Archiviazione",
  "msg": "Impossibile ripristinare (11).",
  "self": "Libera spazio sul disco di sistema (mantieni ≥10 GB) e riscarica il firmware.",
  "hw": "Disco di sistema pieno, o file firmware danneggiato.",
  "tip": "",
  "scene": ""
 },
 "3194": {
  "cat": "Rete / Server Apple",
  "msg": "Impossibile ripristinare iPhone. Si è verificato un errore sconosciuto (3194).",
  "self": "Ripristina solo una versione attualmente firmata; ripristina il file hosts (rimuovi le righe che puntano a vecchi server di firma); disattiva proxy/VPN.",
  "hw": "",
  "tip": "",
  "scene": "Compare sempre quando si esegue il downgrade a un iOS che Apple non firma più."
 },
 "3004": {
  "cat": "Rete / Cavo",
  "msg": "Compare subito dopo il logo Apple mentre la barra di avanzamento si muove (3004 / 3014 / 2005).",
  "self": "Passa a una rete stabile, cambia il cavo e controlla il file hosts.",
  "hw": "",
  "tip": "",
  "scene": "Compare all'inizio dell'avanzamento → di solito un problema di cavo / computer / rete."
 },
 "53": {
  "cat": "Hardware",
  "msg": "Impossibile ripristinare iPhone. Si è verificato un errore sconosciuto (53).",
  "self": "Collega il computer tramite l'hotspot del telefono e ripristina di nuovo per escludere fattori di autenticazione/rete.",
  "hw": "Di solito un modulo Touch ID / Face ID danneggiato; l'hardware abbinato va sostituito.",
  "tip": "",
  "scene": ""
 },
 "-1": {
  "cat": "Hardware / Banda base",
  "msg": "Impossibile ripristinare (-1).",
  "self": "Non risolvibile via software; richiede la riparazione della scheda.",
  "hw": "Manca un binario di alimentazione della banda base, o un binario è in cortocircuito a massa; la saldatura della CPU di banda base è incompleta.",
  "tip": "",
  "scene": ""
 },
 "1": {
  "cat": "Hardware / Banda base",
  "msg": "Impossibile ripristinare (1).",
  "self": "Portalo a una verifica della banda base.",
  "hw": "CPU di banda base non rilevata; verifica se la PMU di banda base eroga corrente e se la CPU di banda base ha una saldatura fredda.",
  "tip": "",
  "scene": ""
 },
 "3": {
  "cat": "Hardware / Banda base",
  "msg": "Impossibile ripristinare (3).",
  "self": "Portalo a una verifica della banda base.",
  "hw": "Banda base, l'EEPROM e il suo circuito difettosi.",
  "tip": "",
  "scene": ""
 },
 "6": {
  "cat": "Hardware",
  "msg": "Impossibile ripristinare (6).",
  "self": "Ripristina altre due volte con cavo / computer / rete in buono stato; se persiste, ripara.",
  "hw": "SoC con saldatura fredda, o archiviazione danneggiata.",
  "tip": "",
  "scene": ""
 },
 "10": {
  "cat": "Software troppo recente",
  "msg": "Impossibile ripristinare (10).",
  "self": "L'iOS del dispositivo è più recente del lato computer; aggiorna Mac / iTunes / l'app Dispositivi Apple e riprova.",
  "hw": "",
  "tip": "",
  "scene": ""
 },
 "1015": {
  "cat": "Jailbreak / downgrade",
  "msg": "Impossibile trovare la risorsa richiesta / (1015).",
  "self": "Si verifica su dispositivi con jailbreak o in downgrade; usa la modalità di recupero per ripristinare l'iOS più recente.",
  "hw": "",
  "tip": "",
  "scene": ""
 },
 "9006": {
  "cat": "Software di protezione / Rete",
  "msg": "Compare durante il download del firmware (9006).",
  "self": "Il download è bloccato da firewall/rete; disattiva il firewall, o scarica manualmente l'IPSW corretto e ripristina in locale.",
  "hw": "",
  "tip": "",
  "scene": ""
 },
 "50": {
  "cat": "Rete",
  "msg": "Timeout del download del firmware (50 / -50).",
  "self": "Il 50 è un timeout di download lato Apple; passa a una rete stabile o scarica il firmware manualmente. Il -50 è di solito un timeout del server aisi-helper; controlla il proxy o aggiorna al client più recente.",
  "hw": "",
  "tip": "",
  "scene": ""
 },
 "0xE8000015": {
  "cat": "USB / Driver",
  "msg": "0xE8000015",
  "self": "Reinstalla il driver Apple Mobile Device / AMDS e cambia cavo/porta; oppure usa la riparazione con un clic di iTunes e driver del kit di riparazione.",
  "hw": "",
  "tip": "",
  "scene": ""
 }
};
