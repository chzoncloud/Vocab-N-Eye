// ============================================================
// 📋 TOEIC — เอกสารจริงแนวข้อสอบ TOEIC (แก้ไฟล์นี้ไฟล์เดียวเพื่อเพิ่มชุด ดู CONTENT.md)
//
// part6 = เติมคำในช่องว่าง (ช่องว่างเขียน ___1___ ในเนื้อเอกสาร) เน้นทบทวนคำจากคลังเรา
// part7 = อ่านเอกสารแล้วตอบคำถาม (สืบจากร่องรอยในเอกสาร)
//
// doc รองรับ: title / head[[ป้าย,ค่า]] / body[ย่อหน้า] / chat[[ชื่อ,เวลา,ข้อความ]]
//            / rows[[ป้าย,ค่า]] / sign
// q: [คำถาม, คำตอบ, [ตัวเลือก], คำอธิบายไทย]
// ============================================================
const TOEIC = [

// ---------- PART 6 : เติมคำ ----------
{
 id:"p6-lift", part:6, kind:"ประกาศภายในบริษัท",
 doc:{
  head:[["To","All Staff"],["From","Building Management"],["Subject","Lift maintenance"],["Date","12 August"]],
  body:[
   "Please be advised that the lifts in the east wing will be out of service from Monday, 18 August until Thursday, 21 August. Engineers will carry out a full safety inspection during this period, which is ___1___ by law every two years.",
   "Staff on floors 4 to 9 should use the stairs in the west wing. ___2___ Please allow yourself a few extra minutes to reach your desk in the morning.",
   "We are sorry for the ___3___ this may cause. If you have any questions, please ___4___ the building office on extension 240."
  ],
  sign:"Kind regards,\nAlicia Reyes, Building Manager"
 },
 q:[
  ["ช่อง 1","required",["required","promoted","offered","considered"],
   "ประโยคบอกว่าการตรวจสอบความปลอดภัยนี้ ‘ถูกกฎหมายกำหนดให้ทำทุก 2 ปี’ → required by law = กฎหมายบังคับ · promoted (ส่งเสริม), offered (เสนอให้), considered (พิจารณา) ใส่แล้วความหมายเพี้ยนหมด"],
  ["ช่อง 2","The lifts in the west wing are not affected and will run as usual.",
   ["The lifts in the west wing are not affected and will run as usual.",
    "The building office will be closed for the whole week.",
    "Staff should avoid using the stairs at all times.",
    "The inspection was completed last year."],
   "ประโยคก่อนหน้าบอกให้พนักงานไปใช้บันไดฝั่งตะวันตก ประโยคที่เติมต้องเชื่อมกับ ‘ฝั่งตะวันตก’ · ข้อ B ขัดกับย่อหน้าสุดท้ายที่บอกให้โทรหาออฟฟิศ · ข้อ C ขัดกับประโยคก่อนหน้า · ข้อ D ขัดกับที่บอกว่าจะตรวจสัปดาห์หน้า"],
  ["ช่อง 3","inconvenience",["inconvenience","accident","injury","emphasis"],
   "สำนวนมาตรฐานในจดหมายทางการ: ‘We are sorry for the inconvenience’ = ขออภัยในความไม่สะดวก · accident (อุบัติเหตุ) กับ injury (บาดเจ็บ) ยังไม่เกิดขึ้น · emphasis (การเน้นย้ำ) ไม่เกี่ยว"],
  ["ช่อง 4","contact",["contact","protect","improve","absorb"],
   "ตามด้วย ‘the building office on extension 240’ = ติดต่อสำนักงานที่เบอร์ต่อ 240 → contact · protect (ปกป้อง), improve (ทำให้ดีขึ้น), absorb (ดูดซับ) ใส่แล้วไม่เป็นภาษา"]
 ]
},

{
 id:"p6-parcel", part:6, kind:"อีเมลร้องเรียน",
 doc:{
  head:[["To","Customer Service, Bright Home Ltd."],["From","Suda Meesuk"],
        ["Subject","Order BH-40912 – missing item"],["Date","3 September"]],
  body:[
   "I am writing about my order BH-40912, which arrived yesterday afternoon. The ___1___ on the box was correct, and the delivery itself was on time.",
   "However, the box contained only two of the three lamps I paid for. I have checked the invoice, and it clearly lists three. ___2___",
   "I have attached a photograph of the ___3___ and its contents. I would be grateful if you could send the missing lamp this week, as the shelves in my shop must be ready before Saturday. Your website states that a reply is normally sent within one working day, so I hope one day is ___4___ time for you to look into this."
  ],
  sign:"Yours faithfully,\nSuda Meesuk"
 },
 q:[
  ["ช่อง 1","address",["address","distance","channel","feature"],
   "พูดถึง ‘ที่อยู่บนกล่องถูกต้อง’ → address · distance (ระยะทาง), channel (ช่องสัญญาณ), feature (จุดเด่นสินค้า) ไม่ใช่สิ่งที่พิมพ์อยู่บนกล่องพัสดุ"],
  ["ช่อง 2","I did not sign for the delivery as complete.",
   ["I did not sign for the delivery as complete.",
    "I have already received a refund for the third lamp.",
    "The lamps were the wrong colour.",
    "I would like to order three more lamps."],
   "ต้องเชื่อมกับปัญหา ‘ได้ของไม่ครบ’ · ข้อ B ขัดกับย่อหน้าถัดไปที่ยังขอของอยู่ · ข้อ C เปลี่ยนปัญหาเป็นเรื่องสี ซึ่งไม่มีในจดหมาย · ข้อ D ขัดกับทั้งฉบับที่เป็นการร้องเรียน"],
  ["ช่อง 3","parcel",["parcel","sender","spectator","accessory"],
   "‘รูปถ่ายของ___ กับสิ่งที่อยู่ข้างใน’ → parcel (พัสดุ) · sender คือ ‘ผู้ส่ง’ ซึ่งเป็นคน ไม่มีข้างใน · spectator (ผู้ชม) กับ accessory (ของเสริม) ไม่เกี่ยว"],
  ["ช่อง 4","sufficient",["sufficient","insufficient","serious","mutual"],
   "ผู้เขียนกำลังพูดแบบสุภาพว่า ‘หวังว่า 1 วันคงพอสำหรับตรวจสอบ’ → sufficient = เพียงพอ · insufficient แปลว่าไม่พอ ซึ่งขัดกับคำว่า hope · ระวังคำตรงข้ามที่หน้าตาคล้ายกันแบบนี้"]
 ]
},

// ---------- PART 7 : อ่านจับใจความ ----------
{
 id:"p7-chat", part:7, kind:"แชทข้อความ",
 doc:{
  chat:[
   ["Nok Wattana","9:14 A.M.","Good morning. The delivery from Ratana Supplies is here, but the driver's list shows only 8 boxes. We ordered 12."],
   ["Marisa Chen","9:16 A.M.","Did you check the invoice inside the first box?"],
   ["Nok Wattana","9:18 A.M.","Yes. The invoice also says 12. He is still waiting outside."],
   ["Marisa Chen","9:19 A.M.","Don't sign anything."],
   ["Nok Wattana","9:20 A.M.","Understood. Should I send him away?"],
   ["Marisa Chen","9:22 A.M.","No. Take the 8 and write “4 boxes missing” next to your signature. I'll call their office at ten. We need the shelves filled before the sale on Saturday."],
   ["Nok Wattana","9:23 A.M.","Will do."]
  ]
 },
 q:[
  ["At 9:19 A.M., what does Ms. Chen most likely mean when she writes, “Don't sign anything”?",
   "She does not want the company to confirm that the whole order arrived",
   ["She does not want the company to confirm that the whole order arrived",
    "She thinks the driver has come to the wrong building",
    "She wants Ms. Wattana to wait for a manager",
    "She believes the invoice is false"],
   "ดูบริบทก่อนหน้า: ของขาด 4 กล่อง การเซ็นรับคือการยืนยันว่าได้ของครบ ถ้าเซ็นไปแล้วจะเรียกของที่ขาดคืนยาก · ตอน 9:22 เธอถึงให้เขียนกำกับว่า ‘ขาด 4 กล่อง’ ข้างลายเซ็น ซึ่งยืนยันเหตุผลนี้"],
  ["What kind of business do the writers most likely work for?","A shop that sells goods",
   ["A shop that sells goods","A delivery company","A printing company","A bank"],
   "ร่องรอยอยู่ที่ 9:22 ‘We need the shelves filled before the sale on Saturday’ = ต้องเติมของขึ้นชั้นก่อนวันลดราคา → เป็นร้านขายของ · ถ้าเป็นบริษัทขนส่งเองคงไม่ต้องรอรับของแบบนี้"],
  ["What will Ms. Chen do at 10:00 A.M.?","Telephone Ratana Supplies",
   ["Telephone Ratana Supplies","Sign for the delivery","Count the boxes again","Meet the driver"],
   "9:22 เธอเขียนว่า ‘I'll call their office at ten’ — their หมายถึง Ratana Supplies ที่พูดถึงตั้งแต่ข้อความแรก · ส่วนการเซ็นรับกับการนับกล่องเป็นหน้าที่ของคุณนก ไม่ใช่เธอ"],
  ["What is suggested about the delivery?","The invoice and the driver's list do not match",
   ["The invoice and the driver's list do not match","It arrived one day late",
    "It was sent to the wrong company","The boxes were damaged"],
   "9:14 บอกว่ารายการของคนขับมี 8 กล่อง · 9:18 บอกว่าใบแจ้งหนี้ระบุ 12 → เอกสารสองใบไม่ตรงกัน · เรื่องมาสาย/ส่งผิดบริษัท/ของเสียหาย ไม่มีใครพูดถึงเลย"]
 ]
},

{
 id:"p7-form", part:7, kind:"ใบรับซ่อม",
 doc:{
  title:"CHAROEN WATCH & CLOCK REPAIR",
  rows:[
   ["Order number","CW-2287"],["Drop-off date","14 October"],
   ["Customer","Ms. Pimchanok Sri"],["Contact number","081-555-0192"],
   ["Item","Lady's silver wristwatch"],["Requested repair","Replace battery; fix loose strap"],
   ["Ready by","18 October"],["Repair assigned to","Somchai P."],
   ["Notes","Apply 15% loyalty card reduction. Customer will collect after 5 P.M. Strap part must be ordered from supplier – allow 2 extra days if not in stock."]
  ]
 },
 q:[
  ["Who most likely is Somchai P.?","A repair worker at the shop",
   ["A repair worker at the shop","A friend of Ms. Sri","A delivery driver","The supplier of the strap"],
   "บรรทัด ‘Repair assigned to: Somchai P.’ = งานซ่อมถูกมอบหมายให้เขา → เขาคือช่างของร้าน · ส่วนซัพพลายเออร์ถูกพูดถึงแยกต่างหากในช่อง Notes"],
  ["What does the document indicate about Ms. Sri?","She will pay less than the full price",
   ["She will pay less than the full price","She is buying a new watch",
    "She will collect the watch in the morning","She has visited the shop twice this month"],
   "ช่อง Notes เขียนว่า ‘Apply 15% loyalty card reduction’ = ลดราคา 15% ให้ลูกค้าประจำ → จ่ายน้อยกว่าราคาเต็ม · ข้อ C ผิดเพราะเขียนไว้ว่ามารับหลัง 5 โมงเย็น"],
  ["Why might the repair take longer than planned?","The shop may not have the strap part in stock",
   ["The shop may not have the strap part in stock","Somchai P. is away on holiday",
    "The customer has not paid yet","The battery is a rare size"],
   "ประโยคสุดท้ายในช่อง Notes: ‘Strap part must be ordered from supplier – allow 2 extra days if not in stock’ = ถ้าของไม่มีในสต็อกต้องบวกอีก 2 วัน · ข้ออื่นไม่มีร่องรอยในเอกสารเลย"],
  ["What is NOT stated on this document?","The price of the repair",
   ["The price of the repair","The date the watch was brought in",
    "How to contact the customer","What is wrong with the watch"],
   "ระวังคำว่า NOT — เอกสารมีวันที่รับของ (14 October), เบอร์ติดต่อ (081-555-0192) และอาการเสีย (เปลี่ยนแบตเตอรี่/สายหลวม) แต่ ‘ไม่มีตัวเลขราคา’ อยู่ที่ไหนเลย มีแค่ส่วนลดเป็นเปอร์เซ็นต์"]
 ]
},

{
 id:"p7-job", part:6, kind:"ประกาศรับสมัครงาน",
 doc:{
  title:"WAREHOUSE TEAM LEADER WANTED",
  body:[
   "Sathorn Fresh Foods is looking for a team leader for its cold-storage warehouse in Bang Na. The successful applicant will manage a team of eight and will be ___1___ for checking every delivery against the order documents before it is accepted.",
   "Experience in a warehouse is essential. A ___2___ of chilled-food safety rules is highly desirable, although training will be given. ___3___",
   "The role is physical and involves standing for long periods in a cold environment. Working hours are 6 A.M. to 3 P.M., Monday to Friday. We ___4___ a starting salary of 28,000 baht per month, transport allowance, and annual health checks.",
   "Interested candidates should send a CV to jobs@sathornfresh.co.th before 30 September."
  ]
 },
 q:[
  ["ช่อง 1","responsible",["responsible","curious","gullible","humble"],
   "สำนวนงาน: ‘be responsible for + งาน’ = รับผิดชอบเรื่อง... · curious (อยากรู้อยากเห็น), gullible (หูเบา), humble (ถ่อมตัว) เป็นลักษณะนิสัย ใส่ในโครงสร้างนี้ไม่ได้"],
  ["ช่อง 2","knowledge",["knowledge","ambition","distance","majesty"],
   "‘___ ของกฎความปลอดภัยอาหารแช่เย็น เป็นที่ต้องการอย่างยิ่ง’ → knowledge = ความรู้ · ambition (ความทะเยอทะยาน) ไม่ใช่สิ่งที่มีเกี่ยวกับกฎ · ประโยคยังบอกต่อว่า ‘จะมีการฝึกอบรมให้’ ซึ่งเข้ากับเรื่องความรู้"],
  ["ช่อง 3","Applicants must also be able to work with a computer stock system.",
   ["Applicants must also be able to work with a computer stock system.",
    "The warehouse will close for two weeks in December.",
    "Our shops are open seven days a week.",
    "The company was founded thirty years ago."],
   "ย่อหน้านี้ทั้งย่อหน้าพูดเรื่อง ‘คุณสมบัติผู้สมัคร’ ประโยคที่เติมต้องอยู่เรื่องเดียวกัน · ข้อ B, C, D เป็นข้อมูลบริษัท ไม่ใช่คุณสมบัติ ใส่แล้วหลุดประเด็นย่อหน้า"],
  ["ช่อง 4","offer",["offer","require","undergo","distract"],
   "ตามด้วย ‘เงินเดือนเริ่มต้น ค่าเดินทาง และตรวจสุขภาพประจำปี’ = สิ่งที่บริษัทให้ → offer (เสนอให้) · require (ต้องการจากผู้สมัคร) กลับด้านกัน · undergo (เข้ารับ) กับ distract (ทำให้เสียสมาธิ) ไม่เข้าโครงสร้าง"]
 ]
},

// ---------- แนว CU-TEP : บทความสารคดี + คำถามจับใจความ ----------
{
 id:"cutep-banana", part:7, kind:"บทความสารคดี (แนว CU-TEP)",
 doc:{
  title:"How Bananas Reach the Other Side of the World",
  body:[
   "The Philippines is one of the largest exporters of bananas in the world, and most of its plantations are in the southern island of Mindanao, especially around Davao. Almost all of the fruit grown for export belongs to a single variety called the Cavendish. Because the plants are grown from cuttings rather than seeds, the trees in a plantation are close to identical to one another.",
   "Export bananas are never picked ripe. They are cut down while they are still hard and green, usually about twelve weeks after the flower appears. A ripe banana would arrive at its destination as a bag of brown pulp, so the fruit has to make the journey in an unfinished state. After cutting, the bunches are washed, divided into smaller hands, and packed into boxes on the same day.",
   "The boxes then travel in refrigerated containers kept at roughly thirteen degrees Celsius. This temperature is low enough to slow the fruit down but not low enough to damage it. A shipment to Japan or Korea may take under a week, while a shipment to the Middle East can take three weeks or more. Throughout the voyage the bananas are still alive and still breathing, and the containers must remove the gases the fruit produces.",
   "The last stage happens near the market rather than near the farm. The boxes are moved into sealed ripening rooms and exposed to ethylene, a gas that bananas themselves produce naturally as they ripen. Within a few days the skin turns yellow and the starch inside becomes sugar. Buyers can order fruit at a particular stage of ripeness, so a supermarket and a hotel kitchen may receive bananas from the same shipment on different days."
  ]
 },
 q:[
  ["This passage mainly discusses","how bananas are grown, shipped, and ripened for export",
   ["how bananas are grown, shipped, and ripened for export","why the Cavendish variety tastes better than others",
    "the economy of the southern Philippines","the correct way to store fruit at home"],
   "ทั้งบทความไล่ตามลำดับ: ปลูกที่ไหน → ตัดตอนเขียว → ขนส่งแบบแช่เย็น → บ่มให้สุกใกล้ตลาด · ข้อ B, C, D เป็นแค่รายละเอียดปลีกย่อยในย่อหน้าเดียว ไม่ใช่แก่นทั้งเรื่อง"],
  ["According to the passage, why are bananas cut down while they are still green?",
   "A ripe banana would be ruined during the long journey",
   ["A ripe banana would be ruined during the long journey","Green bananas are cheaper to buy",
    "The plants are damaged if the fruit stays on too long","Buyers prefer the taste of green fruit"],
   "ย่อหน้า 2 บอกตรงๆ ว่ากล้วยสุกจะไปถึงปลายทางในสภาพ ‘ถุงเนื้อสีน้ำตาล’ → ต้องตัดตอนยังดิบ · เรื่องราคาและรสชาติไม่มีในบทความเลย"],
  ["As used in paragraph 3, the word \"roughly\" is closest in meaning to","approximately",
   ["approximately","harshly","rarely","completely"],
   "\"roughly thirteen degrees\" = ประมาณ 13 องศา — ในบริบทตัวเลข roughly แปลว่า ‘ราวๆ’ · ความหมายอีกอันของ rough (หยาบ/รุนแรง) ใช้กับตัวเลขไม่ได้ ต้องดูบริบทเสมอ"],
  ["It can be inferred from the passage that the ripening rooms are located","close to the countries where the fruit is sold",
   ["close to the countries where the fruit is sold","inside the plantations in Mindanao",
    "on board the refrigerated ships","in the factories that make the boxes"],
   "ย่อหน้า 4 ขึ้นต้นว่า ‘happens near the market rather than near the farm’ = เกิดใกล้ตลาดไม่ใช่ใกล้ฟาร์ม → อนุมานได้ว่าอยู่ใกล้ประเทศปลายทาง"],
  ["Which of the following is NOT mentioned in the passage?","The price paid to the farmers",
   ["The price paid to the farmers","The temperature inside the containers",
    "The name of the banana variety","How long the voyage to Japan takes"],
   "ระวังคำว่า NOT — บทความบอกอุณหภูมิ (13 องศา), ชื่อพันธุ์ (Cavendish) และระยะเวลาส่งไปญี่ปุ่น (ไม่ถึงหนึ่งสัปดาห์) แต่ ‘ราคาที่เกษตรกรได้รับ’ ไม่ถูกพูดถึงเลย"],
  ["What can be inferred about the bananas during the voyage?","They are still changing and need to be controlled",
   ["They are still changing and need to be controlled","They are completely frozen until arrival",
    "They are treated with ethylene on the ship","They are sorted again by hand each day"],
   "ย่อหน้า 3 บอกว่ากล้วย ‘still alive and still breathing’ และตู้ต้องดึงแก๊สที่ผลไม้ปล่อยออกมา → ยังเปลี่ยนแปลงอยู่ ต้องควบคุม · ข้อ C ผิดเพราะเอทิลีนใช้ตอนถึงห้องบ่มแล้ว"]
 ]
},

// ---------- แนว CU-TEP : บทความเจาะช่องว่าง (ทบทวนคำจากคลังเรา) ----------
{
 id:"cutep-cloze-sleep", part:6, kind:"บทความเจาะช่องว่าง (แนว CU-TEP)",
 doc:{
  title:"Sleep and the Working Week",
  body:[
   "Many people believe that sleep is time taken away from work. Recent studies ___1___ the opposite. Workers who sleep fewer than six hours a night make more mistakes, and the errors are often ___2___ enough to cost the company money.",
   "Tired staff are also easier to ___3___. A worker who has slept well can return to a task quickly after an interruption, while a tired worker may need several minutes to find the thread again. Over a whole week, those lost minutes add up.",
   "Sleep does not only affect the mind. The body uses this time to repair itself, and the immune system ___4___ nutrients more efficiently during deep sleep than at any other time. Staff who sleep badly take more sick days, and ___5___ from illness takes them longer.",
   "Employers who ___6___ the problem often see results within a month. Some companies now ___7___ later starting times, and a few provide quiet rooms for short afternoon rests. These changes cost very little, and the ___8___ in output is usually easy to measure."
  ]
 },
 q:[
  ["ช่อง 1","suggest",["suggest","persuade","brag","offend"],
   "‘งานวิจัย___สิ่งตรงข้าม’ → suggest = ชี้ให้เห็น · persuade ต้องมีคนถูกโน้มน้าว · brag (โม้) กับ offend (ทำให้ขุ่นเคือง) ใช้กับงานวิจัยไม่ได้"],
  ["ช่อง 2","serious",["serious","popular","academic","humble"],
   "‘ข้อผิดพลาด___มากพอจนทำให้บริษัทเสียเงิน’ → serious = ร้ายแรง · popular/academic/humble ไม่เข้ากับคำว่า ‘ความผิดพลาด’ เลย"],
  ["ช่อง 3","distract",["distract","protect","embrace","harvest"],
   "ประโยคถัดไปพูดเรื่องกลับมาทำงานต่อหลังถูกขัดจังหวะ → distract = ทำให้เสียสมาธิ · protect (ปกป้อง) ความหมายกลับกัน"],
  ["ช่อง 4","absorbs",["absorbs","offers","requires","climbs"],
   "‘ระบบภูมิคุ้มกัน___สารอาหารได้ดีขึ้น’ → absorbs = ดูดซึม · requires (ต้องการ) พอได้แต่จะขัดกับคำว่า more efficiently ที่ตามมา"],
  ["ช่อง 5","recovery",["recovery","ambition","relation","majesty"],
   "‘___จากความเจ็บป่วยใช้เวลานานขึ้น’ → recovery = การฟื้นตัว · คำนี้เคยเจอในบทเรื่องกล้ามเนื้อมาแล้ว"],
  ["ช่อง 6","consider",["consider","waste","ruin","pry"],
   "‘นายจ้างที่___ปัญหานี้ มักเห็นผลภายในหนึ่งเดือน’ → consider = ให้ความสำคัญ/พิจารณา · waste (ทำสูญเปล่า) กับ ruin (ทำลาย) ความหมายตรงข้าม"],
  ["ช่อง 7","offer",["offer","undergo","interfere","slay"],
   "‘บริษัท___เวลาเข้างานที่สายขึ้น’ → offer = เสนอให้ · undergo คือ ‘เข้ารับ’ ซึ่งกลับด้าน · interfere (ก้าวก่าย) ไม่เข้าบริบท"],
  ["ช่อง 8","improvement",["improvement","injury","accident","emphasis"],
   "‘___ของผลผลิตวัดได้ง่าย’ → improvement = การดีขึ้น · สังเกตคำลงท้ายประโยคเป็นบวก (cost very little) → ต้องเป็นผลดี ไม่ใช่ injury/accident"]
 ]
},

];
