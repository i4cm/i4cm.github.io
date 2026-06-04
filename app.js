function render(code, hit){
  if(!hit) return `<div class="card"><span class="code">${code}</span>：未收录该错误码，换个码或看下方全表。</div>`;
  return `<div class="card"><span class="code">错误 ${code}</span>
    <div class="label">原因</div><div>${hit.cause}</div>
    <div class="label">解决</div><div>${hit.fix}</div></div>`;
}
function norm(s){
  s=s.trim();
  let m=s.match(/0x[0-9A-Fa-f]+/); if(m) return m[0];
  m=s.match(/-?\d+/); return m?m[0].replace(/^-/,""):s;
}
function go(){
  const raw=document.getElementById("q").value;
  if(!raw.trim()){document.getElementById("out").innerHTML="";return;}
  const codes=window.CODES||{};
  const key=norm(raw);
  document.getElementById("out").innerHTML=render(key, codes[key]);
}
function table(){
  const codes=window.CODES||{};
  const rows=Object.keys(codes).sort().map(k=>
    `<tr><td class="code">${k}</td><td>${codes[k].cause}</td><td>${codes[k].fix}</td></tr>`).join("");
  document.getElementById("tbl").innerHTML=`<tr><th>错误码</th><th>原因</th><th>解决</th></tr>${rows}`;
}
document.getElementById("go").addEventListener("click", go);
document.getElementById("q").addEventListener("keydown", e=>{if(e.key==="Enter")go();});
table();
