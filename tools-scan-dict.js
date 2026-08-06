// สแกนคำที่ "กดแล้วไม่มีคำแปล" ครอบคลุมทั้งเรื่องเล่า + อ่านสอบ (TOEIC) ทุกฟิลด์
const fs=require('fs'),vm=require('vm'),path=require('path');
const d='C:/Users/shado/Vocab-N-Eye';
const src=['data.js','stories.js','toeic.js'].map(f=>fs.readFileSync(path.join(d,f),'utf8')).join('\n')
 +'\n;globalThis.__X={VOCAB,IELTS,BIZ,EXAMS,DICT,STORIES,TOEIC};';
const ctx={globalThis:{}};vm.createContext(ctx);vm.runInContext(src,ctx);
const X=ctx.globalThis.__X;

const map={};
const put=(w,th)=>{const k=String(w).toLowerCase().trim();if(k&&!(k in map))map[k]=th;};
X.VOCAB.forEach(r=>put(r[0],r[1]));
[X.IELTS,X.BIZ].forEach(a=>a.forEach(r=>put(r[0],String(r[1]).replace(/^\([^)]*\)\s*/,''))));
Object.values(X.EXAMS).forEach(ex=>[...(ex.main||[]),...(ex.extra||[])].forEach(r=>put(r[0],r[1])));
Object.keys(X.DICT).forEach(k=>map[k.toLowerCase()]=X.DICT[k]);

function look(tok){
  const w=tok.toLowerCase().replace(/[.,!?;:'"\u2014()\u201c\u201d\u2018\u2019]/g,'').replace(/[\u2019']s$/,'').trim();
  if(!w||/^\d+$/.test(w))return 'SKIP';
  if(map[w])return map[w];
  const c=[],add=x=>{if(x.length>=2)c.push(x)};
  if(w.endsWith('ies'))add(w.slice(0,-3)+'y');
  if(w.endsWith('ied'))add(w.slice(0,-3)+'y');
  if(w.endsWith('es'))add(w.slice(0,-2));
  if(w.endsWith('s'))add(w.slice(0,-1));
  if(w.endsWith('ing')){add(w.slice(0,-3));add(w.slice(0,-3)+'e');if(w.length>5&&w[w.length-4]===w[w.length-5])add(w.slice(0,-4));}
  if(w.endsWith('ed')){add(w.slice(0,-2));add(w.slice(0,-1));if(w.length>4&&w[w.length-3]===w[w.length-4])add(w.slice(0,-3));}
  if(w.endsWith('er')){add(w.slice(0,-2));add(w.slice(0,-1));}
  if(w.endsWith('est')){add(w.slice(0,-3));add(w.slice(0,-2));}
  if(w.endsWith('ly'))add(w.slice(0,-2));
  for(const x of c)if(map[x])return map[x];
  return null;
}
// เก็บข้อความทุกที่ที่ผู้ใช้แตะได้
const texts=[];
X.STORIES.forEach(s=>texts.push(['story:'+s.t, s.text]));
X.TOEIC.forEach(t=>{
  const d2=t.doc;
  (d2.body||[]).forEach((p,i)=>texts.push([t.id+':body'+i, p]));
  (d2.rows||[]).forEach(r=>texts.push([t.id+':row', r[1]]));
  (d2.chat||[]).forEach(c=>texts.push([t.id+':chat', c[2]]));
});
const miss={};
texts.forEach(([where,txt])=>{
  String(txt).split(/\s+/).forEach(tok=>{
    const r=look(tok);
    if(r===null){
      const w=tok.toLowerCase().replace(/[.,!?;:'"\u2014()\u201c\u201d\u2018\u2019]/g,'').replace(/[\u2019']s$/,'').trim();
      if(w && !/^_+\d*_*$/.test(w)) (miss[w]=miss[w]||new Set()).add(where.split(':')[0]);
    }
  });
});
const list=Object.keys(miss).sort();
console.log('กดแล้วไม่มีคำแปล:',list.length,'คำ');
console.log(JSON.stringify(list));
