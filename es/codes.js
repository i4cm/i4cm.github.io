window.CODES = {
 "9": {
  "cat": "Software de seguridad / Hardware",
  "msg": "El iPhone no ha podido restaurarse. Se ha producido un error desconocido (9).",
  "self": "Desactiva temporalmente el antivirus/cortafuegos de terceros y reintenta la actualización; usa un cable original, un puerto USB trasero y otro ordenador; fuerza el reinicio y elige Actualizar (no Restaurar) primero.",
  "hw": "Si fallan todas las soluciones de software, suele ser almacenamiento NAND con soldadura fría/defectuoso, alimentación insuficiente o un fallo de comunicación almacenamiento-CPU.",
  "tip": "Si el 9 aparece solo mucho después de desconectar el cable, el almacenamiento no se detecta en absoluto.",
  "scene": "Lo más habitual cuando el dispositivo se desconecta en la segunda mitad de la restauración."
 },
 "4005": {
  "cat": "Conexión USB / Hardware",
  "msg": "El iPhone no ha podido restaurarse. Se ha producido un error desconocido (4005).",
  "self": "Prueba un cable original, un puerto USB trasero y otro ordenador, y luego restaura de nuevo en modo DFU.",
  "hw": "Suele ser la CPU o su circuito de alimentación.",
  "tip": "",
  "scene": ""
 },
 "4013": {
  "cat": "Conexión USB / Hardware",
  "msg": "El iPhone no ha podido restaurarse. Se ha producido un error desconocido (4013).",
  "self": "Usa un cable original corto, un puerto USB trasero y otro ordenador; restaura de nuevo en DFU; si iTunes tiene un problema de hosts/proxy, restaura el archivo hosts y desactiva el cortafuegos.",
  "hw": "Cuando fallan todos los pasos de software, suele ser un problema del bus RAM-CPU-almacenamiento; un fallo gráfico con reinicio puede indicar un fallo del bus.",
  "tip": "Aparece tras mostrarse la barra de progreso → tiende a almacenamiento; aparece al instante → revisa cable/USB primero.",
  "scene": "Habitual al bajar de versión, o cuando una herramienta de terceros reescribe el archivo hosts para redirigir gs.apple.com (iTunes no alcanza el servidor en los puertos 80/443)."
 },
 "4014": {
  "cat": "Conexión USB / Hardware",
  "msg": "El iPhone no ha podido restaurarse. Se ha producido un error desconocido (4014).",
  "self": "Cambia el cable/puerto y restaura de nuevo en modo DFU.",
  "hw": "SDRAM temporal y su circuito defectuosos / SoC superior inestable / batería demasiado baja.",
  "tip": "Sin logotipo de Apple → suele ser la tapa superior de la CPU; con logotipo → tiende a almacenamiento.",
  "scene": ""
 },
 "4037": {
  "cat": "Estado del dispositivo",
  "msg": "El iPhone no ha podido restaurarse. Se ha producido un error desconocido (4037).",
  "self": "Aparece cuando el dispositivo tiene código y no está desbloqueado. Desbloquéalo en el dispositivo, mantén la pantalla encendida y restaura.",
  "hw": "",
  "tip": "",
  "scene": ""
 },
 "14": {
  "cat": "Conexión USB / Hardware",
  "msg": "El iPhone no ha podido restaurarse. Se ha producido un error desconocido (14).",
  "self": "Cambia el cable / puerto USB; también puedes reintentar varias veces.",
  "hw": "Almacenamiento o batería insuficientes, o un problema del ordenador; notas antiguas también mencionan firmware dañado → elimina el firmware descargado y vuelve a descargarlo.",
  "tip": "",
  "scene": ""
 },
 "11": {
  "cat": "Hardware / Almacenamiento",
  "msg": "No se pudo restaurar (11).",
  "self": "Libera espacio en el disco del sistema (mantén ≥10 GB) y vuelve a descargar el firmware.",
  "hw": "Disco del sistema lleno, o archivo de firmware dañado.",
  "tip": "",
  "scene": ""
 },
 "3194": {
  "cat": "Red / Servidores de Apple",
  "msg": "El iPhone no ha podido restaurarse. Se ha producido un error desconocido (3194).",
  "self": "Restaura solo una versión firmada actualmente; restaura el archivo hosts (elimina las líneas que apuntan a servidores de firma antiguos); desactiva proxy/VPN.",
  "hw": "",
  "tip": "",
  "scene": "Aparece siempre al bajar a un iOS que Apple ya no firma."
 },
 "3004": {
  "cat": "Red / Cable",
  "msg": "Aparece justo tras el logotipo de Apple mientras avanza la barra de progreso (3004 / 3014 / 2005).",
  "self": "Cambia a una red estable, cambia el cable y revisa el archivo hosts.",
  "hw": "",
  "tip": "",
  "scene": "Aparece al iniciarse el progreso → suele ser un problema de cable / ordenador / red."
 },
 "53": {
  "cat": "Hardware",
  "msg": "El iPhone no ha podido restaurarse. Se ha producido un error desconocido (53).",
  "self": "Conecta el ordenador mediante el punto de acceso del teléfono y restaura de nuevo para descartar factores de autenticación/red.",
  "hw": "Suele ser un módulo Touch ID / Face ID dañado; hay que sustituir el hardware emparejado.",
  "tip": "",
  "scene": ""
 },
 "-1": {
  "cat": "Hardware / Banda base",
  "msg": "No se pudo restaurar (-1).",
  "self": "No se soluciona por software; requiere reparación de placa.",
  "hw": "Falta un raíl de alimentación de banda base, o un raíl está cortocircuitado a masa; la soldadura de la CPU de banda base es incompleta.",
  "tip": "",
  "scene": ""
 },
 "1": {
  "cat": "Hardware / Banda base",
  "msg": "No se pudo restaurar (1).",
  "self": "Llévalo a revisión de banda base.",
  "hw": "No se detecta la CPU de banda base; comprueba si la PMU de banda base entrega corriente y si la CPU de banda base tiene soldadura fría.",
  "tip": "",
  "scene": ""
 },
 "3": {
  "cat": "Hardware / Banda base",
  "msg": "No se pudo restaurar (3).",
  "self": "Llévalo a revisión de banda base.",
  "hw": "Banda base, la EEPROM y su circuito defectuosos.",
  "tip": "",
  "scene": ""
 },
 "6": {
  "cat": "Hardware",
  "msg": "No se pudo restaurar (6).",
  "self": "Restaura dos veces más con un cable / ordenador / red en buen estado; si persiste, repara.",
  "hw": "SoC con soldadura fría, o almacenamiento dañado.",
  "tip": "",
  "scene": ""
 },
 "10": {
  "cat": "Software demasiado nuevo",
  "msg": "No se pudo restaurar (10).",
  "self": "El iOS del dispositivo es más nuevo que el del ordenador; actualiza Mac / iTunes / la app Dispositivos Apple y reintenta.",
  "hw": "",
  "tip": "",
  "scene": ""
 },
 "1015": {
  "cat": "Jailbreak / bajada de versión",
  "msg": "No se encuentra el recurso necesario / (1015).",
  "self": "Ocurre en dispositivos con jailbreak o que bajan de versión; usa el modo de recuperación para restaurar al iOS más reciente.",
  "hw": "",
  "tip": "",
  "scene": ""
 },
 "9006": {
  "cat": "Software de seguridad / Red",
  "msg": "Aparece al descargar el firmware (9006).",
  "self": "La descarga está bloqueada por el cortafuegos/red; desactiva el cortafuegos, o descarga el IPSW correcto manualmente y restaura en local.",
  "hw": "",
  "tip": "",
  "scene": ""
 },
 "50": {
  "cat": "Red",
  "msg": "Tiempo de espera agotado al descargar el firmware (50 / -50).",
  "self": "El 50 es un tiempo de espera de descarga del lado de Apple; cambia a una red estable o descarga el firmware manualmente. El -50 suele ser un tiempo de espera del servidor de aisi-helper; revisa el proxy o actualiza al cliente más reciente.",
  "hw": "",
  "tip": "",
  "scene": ""
 },
 "0xE8000015": {
  "cat": "USB / Controlador",
  "msg": "0xE8000015",
  "self": "Reinstala el controlador Apple Mobile Device / AMDS y cambia el cable/puerto; o usa la reparación de iTunes y controladores con un clic del kit de reparación.",
  "hw": "",
  "tip": "",
  "scene": ""
 }
};
