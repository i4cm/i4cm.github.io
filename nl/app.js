function esc(s){return (s||"").replace(/&/g,"&amp;").replace(/</g,"&lt;");}
function card(code,h){
  if(!h) return '<div class="card"><span class="code">'+esc(code)+'</span>: niet vermeld - probeer een andere code of zie de tabel hieronder.</div>';
  var p='<div class="card"><span class="code">Fout '+esc(code)+'</span> <small>'+esc(h.cat)+'</small>';
  if(h.msg)  p+='<div class="label">Getoonde melding</div><div>'+esc(h.msg)+'</div>';
  if(h.self) p+='<div class="label">Officiële oplossing (software)</div><div>'+esc(h.self)+'</div>';
  if(h.hw)   p+='<div class="label">Oorzaak op reparatieniveau</div><div>'+esc(h.hw)+'</div>';
  if(h.tip)  p+='<div class="label">Hoe te onderscheiden</div><div>'+esc(h.tip)+'</div>';
  if(h.scene)p+='<div class="label">Praktijkgeval</div><div>'+esc(h.scene)+'</div>';
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
  document.getElementById("tbl").innerHTML='<tr><th>Code</th><th>Officiële categorie</th><th>Officiële oplossing</th><th>Oorzaak op reparatieniveau</th></tr>'+rows;
}
document.getElementById("go").addEventListener("click",go);
document.getElementById("q").addEventListener("keydown",function(e){if(e.key==="Enter")go();});
table();
