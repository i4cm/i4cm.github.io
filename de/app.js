function esc(s){return (s||"").replace(/&/g,"&amp;").replace(/</g,"&lt;");}
function card(code,h){
  if(!h) return '<div class="card"><span class="code">'+esc(code)+'</span>: nicht aufgeführt - probiere einen anderen Code oder sieh die Tabelle unten.</div>';
  var p='<div class="card"><span class="code">Fehler '+esc(code)+'</span> <small>'+esc(h.cat)+'</small>';
  if(h.msg)  p+='<div class="label">Angezeigte Meldung</div><div>'+esc(h.msg)+'</div>';
  if(h.self) p+='<div class="label">Offizielle Lösung (Software)</div><div>'+esc(h.self)+'</div>';
  if(h.hw)   p+='<div class="label">Ursache auf Reparaturebene</div><div>'+esc(h.hw)+'</div>';
  if(h.tip)  p+='<div class="label">So erkennst du es</div><div>'+esc(h.tip)+'</div>';
  if(h.scene)p+='<div class="label">Praxisfall</div><div>'+esc(h.scene)+'</div>';
  return p+'</div>';
}
function norm(s){s=(s||"").trim();var m=s.match(/0x[0-9A-Fa-f]+/);if(m)return m[0];m=s.match(/-?\d+/);return m?m[0]:s;}
function go(){
  var raw=document.getElementById("q").value;
  if(!raw.trim()){document.getElementById("out").innerHTML="";return;}
  var C=window.CODES||{},k=norm(raw);
  document.getElementById("out").innerHTML=card(k, C[k]||C[raw.trim()]);
}
function table(){
  var C=window.CODES||{};
  var rows=Object.keys(C).map(function(k){var h=C[k];
    return '<tr><td class="code">'+esc(k)+'</td><td>'+esc(h.cat)+'</td><td>'+esc(h.self)+'</td><td>'+esc(h.hw||"-")+'</td></tr>';}).join("");
  document.getElementById("tbl").innerHTML='<tr><th>Code</th><th>Offizielle Kategorie</th><th>Offizielle Lösung</th><th>Ursache auf Reparaturebene</th></tr>'+rows;
}
document.getElementById("go").addEventListener("click",go);
document.getElementById("q").addEventListener("keydown",function(e){if(e.key==="Enter")go();});
table();
