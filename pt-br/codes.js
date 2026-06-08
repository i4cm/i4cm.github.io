window.CODES = {
 "9": {
  "cat": "Software de segurança / Hardware",
  "msg": "O iPhone não pôde ser restaurado. Ocorreu um erro desconhecido (9).",
  "self": "Desative temporariamente o antivírus/firewall de terceiros e tente atualizar novamente; use um cabo original, uma porta USB traseira e outro computador; force a reinicialização e escolha Atualizar (não Restaurar) primeiro.",
  "hw": "Se todas as soluções de software falharem, geralmente é o armazenamento NAND com solda fria/defeituoso, energia insuficiente ou falha de comunicação armazenamento-CPU.",
  "tip": "Se o 9 aparece só muito depois de desconectar o cabo, o armazenamento não está sendo detectado.",
  "scene": "Mais comum quando o dispositivo se desconecta na segunda metade da restauração."
 },
 "4005": {
  "cat": "Conexão USB / Hardware",
  "msg": "O iPhone não pôde ser restaurado. Ocorreu um erro desconhecido (4005).",
  "self": "Tente um cabo original, uma porta USB traseira e outro computador, depois restaure novamente no modo DFU.",
  "hw": "Geralmente a CPU ou seu circuito de alimentação.",
  "tip": "",
  "scene": ""
 },
 "4013": {
  "cat": "Conexão USB / Hardware",
  "msg": "O iPhone não pôde ser restaurado. Ocorreu um erro desconhecido (4013).",
  "self": "Use um cabo original curto, uma porta USB traseira e outro computador; restaure novamente via DFU; se o iTunes tiver problema de hosts/proxy, restaure o arquivo hosts e desative o firewall.",
  "hw": "Quando todas as etapas de software falham, geralmente é um problema do barramento RAM-CPU-armazenamento; falha gráfica com reinício pode ser falha do barramento.",
  "tip": "Aparece após a barra de progresso surgir → tende a armazenamento; aparece na hora → verifique cabo/USB primeiro.",
  "scene": "Comum ao fazer downgrade, ou quando uma ferramenta de terceiros reescreve o arquivo hosts para redirecionar gs.apple.com (o iTunes não alcança o servidor nas portas 80/443)."
 },
 "4014": {
  "cat": "Conexão USB / Hardware",
  "msg": "O iPhone não pôde ser restaurado. Ocorreu um erro desconhecido (4014).",
  "self": "Troque o cabo/porta e restaure novamente no modo DFU.",
  "hw": "SDRAM temporária e seu circuito com defeito / SoC superior instável / bateria muito fraca.",
  "tip": "Sem o logotipo da Apple → geralmente a tampa superior da CPU; com o logotipo → tende a armazenamento.",
  "scene": ""
 },
 "4037": {
  "cat": "Estado do dispositivo",
  "msg": "O iPhone não pôde ser restaurado. Ocorreu um erro desconhecido (4037).",
  "self": "Aparece quando o dispositivo tem código e não está desbloqueado. Desbloqueie no dispositivo, mantenha a tela ligada e restaure.",
  "hw": "",
  "tip": "",
  "scene": ""
 },
 "14": {
  "cat": "Conexão USB / Hardware",
  "msg": "O iPhone não pôde ser restaurado. Ocorreu um erro desconhecido (14).",
  "self": "Troque o cabo / porta USB; também é possível tentar várias vezes.",
  "hw": "Armazenamento ou bateria insuficientes, ou problema do computador; notas antigas também mencionam firmware corrompido → exclua o firmware baixado e baixe de novo.",
  "tip": "",
  "scene": ""
 },
 "11": {
  "cat": "Hardware / Armazenamento",
  "msg": "Não foi possível restaurar (11).",
  "self": "Libere espaço no disco do sistema (mantenha ≥10 GB) e baixe o firmware novamente.",
  "hw": "Disco do sistema cheio, ou arquivo de firmware corrompido.",
  "tip": "",
  "scene": ""
 },
 "3194": {
  "cat": "Rede / Servidores da Apple",
  "msg": "O iPhone não pôde ser restaurado. Ocorreu um erro desconhecido (3194).",
  "self": "Restaure apenas uma versão assinada no momento; restaure o arquivo hosts (remova linhas que apontam para servidores de assinatura antigos); desative proxy/VPN.",
  "hw": "",
  "tip": "",
  "scene": "Sempre aparece ao fazer downgrade para um iOS que a Apple não assina mais."
 },
 "3004": {
  "cat": "Rede / Cabo",
  "msg": "Aparece logo após o logotipo da Apple enquanto a barra de progresso anda (3004 / 3014 / 2005).",
  "self": "Mude para uma rede estável, troque o cabo e verifique o arquivo hosts.",
  "hw": "",
  "tip": "",
  "scene": "Aparece quando o progresso começa → geralmente problema de cabo / computador / rede."
 },
 "53": {
  "cat": "Hardware",
  "msg": "O iPhone não pôde ser restaurado. Ocorreu um erro desconhecido (53).",
  "self": "Conecte o computador pelo ponto de acesso do telefone e restaure novamente para descartar fatores de autenticação/rede.",
  "hw": "Geralmente um módulo Touch ID / Face ID danificado; o hardware pareado precisa ser substituído.",
  "tip": "",
  "scene": ""
 },
 "-1": {
  "cat": "Hardware / Banda base",
  "msg": "Não foi possível restaurar (-1).",
  "self": "Não tem solução por software; requer reparo de placa.",
  "hw": "Falta um trilho de alimentação de banda base, ou um trilho em curto para o terra; a solda da CPU de banda base está incompleta.",
  "tip": "",
  "scene": ""
 },
 "1": {
  "cat": "Hardware / Banda base",
  "msg": "Não foi possível restaurar (1).",
  "self": "Leve para verificação de banda base.",
  "hw": "CPU de banda base não detectada; verifique se a PMU de banda base fornece energia e se a CPU de banda base está com solda fria.",
  "tip": "",
  "scene": ""
 },
 "3": {
  "cat": "Hardware / Banda base",
  "msg": "Não foi possível restaurar (3).",
  "self": "Leve para verificação de banda base.",
  "hw": "Banda base, a EEPROM e seu circuito com defeito.",
  "tip": "",
  "scene": ""
 },
 "6": {
  "cat": "Hardware",
  "msg": "Não foi possível restaurar (6).",
  "self": "Restaure mais duas vezes com cabo / computador / rede em bom estado; se persistir, repare.",
  "hw": "SoC com solda fria, ou armazenamento danificado.",
  "tip": "",
  "scene": ""
 },
 "10": {
  "cat": "Software novo demais",
  "msg": "Não foi possível restaurar (10).",
  "self": "O iOS do dispositivo é mais novo que o do computador; atualize Mac / iTunes / app Dispositivos Apple e tente de novo.",
  "hw": "",
  "tip": "",
  "scene": ""
 },
 "1015": {
  "cat": "Jailbreak / downgrade",
  "msg": "O recurso necessário não pode ser encontrado / (1015).",
  "self": "Ocorre em dispositivos com jailbreak ou em downgrade; use o modo de recuperação para restaurar ao iOS mais recente.",
  "hw": "",
  "tip": "",
  "scene": ""
 },
 "9006": {
  "cat": "Software de segurança / Rede",
  "msg": "Aparece ao baixar o firmware (9006).",
  "self": "O download está bloqueado pelo firewall/rede; desative o firewall, ou baixe o IPSW correto manualmente e restaure localmente.",
  "hw": "",
  "tip": "",
  "scene": ""
 },
 "50": {
  "cat": "Rede",
  "msg": "Tempo de download do firmware esgotado (50 / -50).",
  "self": "O 50 é um tempo esgotado de download do lado da Apple; mude para uma rede estável ou baixe o firmware manualmente. O -50 geralmente é tempo esgotado do servidor do aisi-helper; verifique o proxy ou atualize para o cliente mais recente.",
  "hw": "",
  "tip": "",
  "scene": ""
 },
 "0xE8000015": {
  "cat": "USB / Driver",
  "msg": "0xE8000015",
  "self": "Reinstale o driver Apple Mobile Device / AMDS e troque o cabo/porta; ou use o reparo de iTunes e drivers com um clique do kit de reparo.",
  "hw": "",
  "tip": "",
  "scene": ""
 }
};
