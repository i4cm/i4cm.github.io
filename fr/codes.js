window.CODES = {
 "9": {
  "cat": "Logiciel de sécurité / Matériel",
  "msg": "L'iPhone n'a pas pu être restauré. Une erreur inconnue s'est produite (9).",
  "self": "Désactivez temporairement l'antivirus/pare-feu tiers et réessayez la mise à jour ; utilisez un câble d'origine, un port USB arrière et un autre ordinateur ; forcez le redémarrage et choisissez d'abord Mettre à jour (pas Restaurer).",
  "hw": "Si toutes les solutions logicielles échouent, c'est généralement le stockage NAND en soudure froide/défectueux, une alimentation insuffisante ou une panne de communication stockage-CPU.",
  "tip": "Si le 9 n'apparaît que longtemps après le débranchement du câble, le stockage n'est pas du tout détecté.",
  "scene": "Le plus fréquent lorsque l'appareil se déconnecte dans la seconde moitié de la restauration."
 },
 "4005": {
  "cat": "Connexion USB / Matériel",
  "msg": "L'iPhone n'a pas pu être restauré. Une erreur inconnue s'est produite (4005).",
  "self": "Essayez un câble d'origine, un port USB arrière et un autre ordinateur, puis restaurez à nouveau en mode DFU.",
  "hw": "Généralement le CPU ou son circuit d'alimentation.",
  "tip": "",
  "scene": ""
 },
 "4013": {
  "cat": "Connexion USB / Matériel",
  "msg": "L'iPhone n'a pas pu être restauré. Une erreur inconnue s'est produite (4013).",
  "self": "Utilisez un câble d'origine court, un port USB arrière et un autre ordinateur ; restaurez à nouveau via DFU ; si iTunes rencontre un problème hosts/proxy, restaurez le fichier hosts et désactivez le pare-feu.",
  "hw": "Quand toutes les étapes logicielles échouent, c'est souvent un problème de bus RAM-CPU-stockage ; un défaut graphique avec redémarrage peut indiquer une panne de bus.",
  "tip": "Apparaît après l'affichage de la barre de progression → plutôt le stockage ; apparaît aussitôt → vérifiez d'abord le câble/USB.",
  "scene": "Fréquent lors d'un downgrade, ou quand un outil tiers réécrit le fichier hosts pour rediriger gs.apple.com (iTunes n'atteint pas le serveur sur les ports 80/443)."
 },
 "4014": {
  "cat": "Connexion USB / Matériel",
  "msg": "L'iPhone n'a pas pu être restauré. Une erreur inconnue s'est produite (4014).",
  "self": "Changez de câble/port et restaurez à nouveau en mode DFU.",
  "hw": "SDRAM temporaire et son circuit défectueux / SoC supérieur instable / batterie trop faible.",
  "tip": "Pas de logo Apple → souvent le capot supérieur du CPU ; logo Apple affiché → plutôt le stockage.",
  "scene": ""
 },
 "4037": {
  "cat": "État de l'appareil",
  "msg": "L'iPhone n'a pas pu être restauré. Une erreur inconnue s'est produite (4037).",
  "self": "Apparaît quand l'appareil a un code et n'est pas déverrouillé. Déverrouillez-le sur l'appareil, gardez l'écran allumé, puis restaurez.",
  "hw": "",
  "tip": "",
  "scene": ""
 },
 "14": {
  "cat": "Connexion USB / Matériel",
  "msg": "L'iPhone n'a pas pu être restauré. Une erreur inconnue s'est produite (14).",
  "self": "Changez de câble / port USB ; vous pouvez aussi réessayer plusieurs fois.",
  "hw": "Stockage ou batterie insuffisants, ou un problème d'ordinateur ; d'anciennes notes mentionnent aussi un firmware corrompu → supprimez le firmware téléchargé et retéléchargez-le.",
  "tip": "",
  "scene": ""
 },
 "11": {
  "cat": "Matériel / Stockage",
  "msg": "Restauration impossible (11).",
  "self": "Libérez de l'espace sur le disque système (gardez ≥10 Go) et retéléchargez le firmware.",
  "hw": "Disque système plein, ou fichier firmware corrompu.",
  "tip": "",
  "scene": ""
 },
 "3194": {
  "cat": "Réseau / Serveurs Apple",
  "msg": "L'iPhone n'a pas pu être restauré. Une erreur inconnue s'est produite (3194).",
  "self": "Ne restaurez qu'une version actuellement signée ; restaurez le fichier hosts (supprimez les lignes pointant vers d'anciens serveurs de signature) ; désactivez proxy/VPN.",
  "hw": "",
  "tip": "",
  "scene": "Apparaît toujours lors d'un downgrade vers un iOS qu'Apple ne signe plus."
 },
 "3004": {
  "cat": "Réseau / Câble",
  "msg": "Apparaît juste après le logo Apple pendant que la barre de progression avance (3004 / 3014 / 2005).",
  "self": "Passez à un réseau stable, changez de câble et vérifiez le fichier hosts.",
  "hw": "",
  "tip": "",
  "scene": "Apparaît au début de la progression → généralement un problème de câble / ordinateur / réseau."
 },
 "53": {
  "cat": "Matériel",
  "msg": "L'iPhone n'a pas pu être restauré. Une erreur inconnue s'est produite (53).",
  "self": "Connectez l'ordinateur via le partage de connexion du téléphone et restaurez à nouveau pour écarter les facteurs d'authentification/réseau.",
  "hw": "Généralement un module Touch ID / Face ID endommagé ; le matériel apparié doit être remplacé.",
  "tip": "",
  "scene": ""
 },
 "-1": {
  "cat": "Matériel / Bande de base",
  "msg": "Restauration impossible (-1).",
  "self": "Non résoluble par logiciel ; nécessite une réparation de carte.",
  "hw": "Un rail d'alimentation de bande de base manque, ou un rail est en court-circuit à la masse ; la soudure du CPU de bande de base est incomplète.",
  "tip": "",
  "scene": ""
 },
 "1": {
  "cat": "Matériel / Bande de base",
  "msg": "Restauration impossible (1).",
  "self": "Confiez-le à une vérification de la bande de base.",
  "hw": "CPU de bande de base non détecté ; vérifiez si la PMU de bande de base délivre du courant et si le CPU de bande de base est en soudure froide.",
  "tip": "",
  "scene": ""
 },
 "3": {
  "cat": "Matériel / Bande de base",
  "msg": "Restauration impossible (3).",
  "self": "Confiez-le à une vérification de la bande de base.",
  "hw": "Bande de base, l'EEPROM et son circuit défectueux.",
  "tip": "",
  "scene": ""
 },
 "6": {
  "cat": "Matériel",
  "msg": "Restauration impossible (6).",
  "self": "Restaurez deux fois de plus avec un câble / ordinateur / réseau en bon état ; si cela persiste, réparez.",
  "hw": "SoC en soudure froide, ou stockage endommagé.",
  "tip": "",
  "scene": ""
 },
 "10": {
  "cat": "Logiciel trop récent",
  "msg": "Restauration impossible (10).",
  "self": "L'iOS de l'appareil est plus récent que côté ordinateur ; mettez à jour Mac / iTunes / l'app Appareils Apple et réessayez.",
  "hw": "",
  "tip": "",
  "scene": ""
 },
 "1015": {
  "cat": "Jailbreak / downgrade",
  "msg": "Ressource requise introuvable / (1015).",
  "self": "Se produit sur les appareils jailbreakés ou en downgrade ; utilisez le mode de récupération pour restaurer l'iOS le plus récent.",
  "hw": "",
  "tip": "",
  "scene": ""
 },
 "9006": {
  "cat": "Logiciel de sécurité / Réseau",
  "msg": "Apparaît lors du téléchargement du firmware (9006).",
  "self": "Le téléchargement est bloqué par le pare-feu/réseau ; désactivez le pare-feu, ou téléchargez le bon IPSW manuellement et restaurez en local.",
  "hw": "",
  "tip": "",
  "scene": ""
 },
 "50": {
  "cat": "Réseau",
  "msg": "Délai de téléchargement du firmware dépassé (50 / -50).",
  "self": "50 est un délai de téléchargement côté Apple ; passez à un réseau stable ou téléchargez le firmware manuellement. -50 est généralement un délai du serveur aisi-helper ; vérifiez le proxy ou mettez à jour vers le client le plus récent.",
  "hw": "",
  "tip": "",
  "scene": ""
 },
 "0xE8000015": {
  "cat": "USB / Pilote",
  "msg": "0xE8000015",
  "self": "Réinstallez le pilote Apple Mobile Device / AMDS et changez de câble/port ; ou utilisez la réparation en un clic d'iTunes et des pilotes du kit de réparation.",
  "hw": "",
  "tip": "",
  "scene": ""
 }
};
