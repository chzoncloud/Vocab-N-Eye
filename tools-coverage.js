const fs=require('fs'),vm=require('vm'),path=require('path');
const d='C:/Users/shado/Vocab-N-Eye';
const src=['data.js','stories.js'].map(f=>fs.readFileSync(path.join(d,f),'utf8')).join('\n')
 +'\n;globalThis.__X={VOCAB,IELTS,BIZ,FORMAL,EXAMS,STORIES};';
const ctx={globalThis:{}};vm.createContext(ctx);vm.runInContext(src,ctx);
const X=ctx.globalThis.__X;

const bank=new Set();
X.VOCAB.forEach(r=>bank.add(r[0].toLowerCase()));
[X.IELTS,X.BIZ].forEach(a=>a.forEach(r=>bank.add(r[0].toLowerCase())));
X.FORMAL.forEach(r=>bank.add(String(r[1]).toLowerCase()));
Object.values(X.EXAMS).forEach(e=>[...(e.main||[]),...(e.extra||[])].forEach(r=>bank.add(r[0].toLowerCase())));

const STOP=new Set(('a an the and or but if of to in on at for with as is are was were be been being do does did done '+
'have has had he she it they we you i his her their our your my them him us this that these those not no so then than '+
'there here when what which who how why more most very can could will will would should may might must one two three '+
'some all each other into from out up down about after before while also just only even still much many few '+
'because they\'re it\'s don\'t does not new next last first second another every both same off over under again').split(/\s+/));

const forms=w=>[w,w.replace(/ies$/,'y'),w.replace(/es$/,''),w.replace(/s$/,''),w.replace(/ed$/,''),
  w.replace(/ed$/,'e'),w.replace(/ing$/,''),w.replace(/ing$/,'e'),w.replace(/ly$/,''),w.replace(/er$/,''),w.replace(/est$/,'')];
const inBank=w=>forms(w).find(f=>bank.has(f))||null;

console.log('เนื้อเรื่องใช้คำจาก "คลังคำศัพท์ของเรา" กี่ %  (นับเฉพาะคำเนื้อหา ตัดคำพื้นฐานออก)\n');
let rows=[];
X.STORIES.forEach((s,i)=>{
  const toks=[...new Set(s.text.toLowerCase().replace(/[^a-z\s']/g,' ').split(/\s+/)
    .filter(w=>w.length>2 && !STOP.has(w)))];
  const hits=[...new Set(toks.map(inBank).filter(Boolean))];
  const pct=Math.round(hits.length/toks.length*100);
  rows.push({i:i+1,lv:s.lv||1,t:s.t,toks:toks.length,hit:hits.length,pct,hits});
});
rows.forEach(r=>console.log(
  `${String(r.i).padStart(2)}. lv${r.lv}  ${(r.t+'                          ').slice(0,26)}  คำเนื้อหา ${String(r.toks).padStart(3)}  อยู่ในคลัง ${String(r.hit).padStart(3)}  = ${String(r.pct).padStart(3)}%`));
const last=rows[rows.length-1];
console.log('\n--- เรื่องล่าสุด ('+last.t+') คำที่มาจากคลังเรา ---');
console.log(last.hits.sort().join(', '));
