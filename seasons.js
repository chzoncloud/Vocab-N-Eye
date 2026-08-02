// ============================================================
// 🏆 SEASONS — ธีมการ์ดสะสมรายซีซั่น  (แก้ไฟล์นี้ไฟล์เดียวเพื่อเพิ่ม/แก้ซีซั่น)
// วิธีเพิ่มซีซั่นใหม่ → ดู CONTENT.md
// rarity: common (ออกง่าย) · secret (หายาก) · supersecret (หายากสุด)
// รูปการ์ด = dir + n + ".png"
// ============================================================
const RARITY = {
  common:      { label:"ธรรมดา",       icon:"⚪", weight:10, color:"#8496A6" },
  secret:      { label:"Secret",       icon:"✨", weight:3,  color:"#9AAABA" }, // เงิน
  supersecret: { label:"Super Secret", icon:"🌟", weight:1,  color:"#E3A82F" }, // ทอง
};

const SEASONS = [
  {
    id:"toystory",
    name:"Toy Story",
    dir:"assets/seasons/toystory/",
    cards:[
      { n:1,  name:"Buzz Lightyear",  rarity:"supersecret" },
      { n:2,  name:"Woody",           rarity:"common" },
      { n:3,  name:"Jessie",          rarity:"common" },
      { n:4,  name:"Hamm",            rarity:"common" },
      { n:5,  name:"Rex",             rarity:"common" },
      { n:6,  name:"Slinky Dog",      rarity:"common" },
      { n:7,  name:"Mrs. Potato Head",rarity:"common" },
      { n:8,  name:"Mr. Potato Head", rarity:"common" },
      { n:9,  name:"Aliens",          rarity:"common" },
      { n:10, name:"Bullseye",        rarity:"common" },
      { n:11, name:"N'Eye & Woody",   rarity:"secret" },
      { n:12, name:"N'Eye & Rex",     rarity:"secret" },
      { n:13, name:"N'Eye ผจญภัย",     rarity:"common" },
      { n:14, name:"วันสนุกๆ",         rarity:"secret" },
      { n:15, name:"เราสองคน 💙",      rarity:"supersecret" },
      { n:16, name:"N'Eye & ปราสาท",   rarity:"supersecret" },
    ]
  },
];
