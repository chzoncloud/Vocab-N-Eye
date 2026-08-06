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
 id:"p6-lift", zone:"doc", part:6, kind:"ประกาศภายในบริษัท",
 doc:{
  head:[["To","All Staff"],["From","Building Management"],["Subject","Lift maintenance"],["Date","12 August"]],
  body:[
   "Please be advised that the lifts in the east wing will be out of service from Monday, 18 August until Thursday, 21 August. Engineers will carry out a full safety inspection during this period, which is ___1___ by law every two years.",
   "Staff on floors 4 to 9 should use the stairs in the west wing. ___2___ Please allow yourself a few extra minutes to reach your desk in the morning.",
   "We are sorry for the ___3___ this may cause. If you have any questions, please ___4___ the building office on extension 240. Thank you for your ___5___."
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
   "ตามด้วย ‘the building office on extension 240’ = ติดต่อสำนักงานที่เบอร์ต่อ 240 → contact · protect (ปกป้อง), improve (ทำให้ดีขึ้น), absorb (ดูดซับ) ใส่แล้วไม่เป็นภาษา"],
  ["ช่อง 5","cooperation",["cooperation","competition","celebration","conversation"],
   "‘Thank you for your cooperation’ = ขอบคุณที่ให้ความร่วมมือ เป็นประโยคปิดมาตรฐานของประกาศทางการ · อีก 3 คำหน้าตาคล้ายกันแต่แปลว่า การแข่งขัน / การเฉลิมฉลอง / การสนทนา ซึ่งไม่เข้ากับบริบทเลย"]
 ]
},

{
 id:"p6-parcel", zone:"doc", part:6, kind:"อีเมลร้องเรียน",
 doc:{
  head:[["To","Customer Service, Bright Home Ltd."],["From","Suda Meesuk"],
        ["Subject","Order BH-40912 – missing item"],["Date","3 September"]],
  body:[
   "I am writing about my order BH-40912, which arrived yesterday afternoon. The ___1___ on the box was correct, and the delivery itself was on time.",
   "However, the box contained only two of the three lamps I paid for. I have checked the invoice, and it clearly lists three. ___2___",
   "I have attached a photograph of the ___3___ and its contents. I would be grateful if you could send the missing lamp this week, as the shelves in my shop must be ready before Saturday. Your website states that a reply is normally sent within one working day, so I hope one day is ___4___ time for you to look into this. I look forward to your ___5___."
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
   "ผู้เขียนกำลังพูดแบบสุภาพว่า ‘หวังว่า 1 วันคงพอสำหรับตรวจสอบ’ → sufficient = เพียงพอ · insufficient แปลว่าไม่พอ ซึ่งขัดกับคำว่า hope · ระวังคำตรงข้ามที่หน้าตาคล้ายกันแบบนี้"],
  ["ช่อง 5","reply",["reply","refusal","receipt","request"],
   "‘I look forward to your reply’ = รอการตอบกลับ เป็นประโยคปิดจดหมายมาตรฐาน · refusal (การปฏิเสธ) ไม่มีใครรอ · receipt (ใบเสร็จ) เธอแนบไปเองแล้ว · request (คำขอ) คือสิ่งที่เธอเป็นฝ่ายส่ง ไม่ใช่รอรับ"]
 ]
},

// ---------- PART 7 : อ่านจับใจความ ----------
{
 id:"p7-chat", zone:"doc", part:7, kind:"แชทข้อความ",
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
   "9:14 บอกว่ารายการของคนขับมี 8 กล่อง · 9:18 บอกว่าใบแจ้งหนี้ระบุ 12 → เอกสารสองใบไม่ตรงกัน · เรื่องมาสาย/ส่งผิดบริษัท/ของเสียหาย ไม่มีใครพูดถึงเลย"],
  ["What does Ms. Wattana finally agree to do?","Accept the boxes and write a note about the missing ones",
   ["Accept the boxes and write a note about the missing ones","Send the driver away without taking anything",
    "Wait outside until the other boxes arrive","Telephone Ratana Supplies herself"],
   "9:22 คุณเฉินสั่งให้ ‘Take the 8 and write 4 boxes missing next to your signature’ แล้ว 9:23 คุณนกตอบ ‘Will do’ = ตกลงทำตาม · ส่วนการโทรหาซัพพลายเออร์เป็นงานของคุณเฉิน ไม่ใช่คุณนก"]
 ]
},

{
 id:"p7-form", zone:"doc", part:7, kind:"ใบรับซ่อม",
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
   "ระวังคำว่า NOT — เอกสารมีวันที่รับของ (14 October), เบอร์ติดต่อ (081-555-0192) และอาการเสีย (เปลี่ยนแบตเตอรี่/สายหลวม) แต่ ‘ไม่มีตัวเลขราคา’ อยู่ที่ไหนเลย มีแค่ส่วนลดเป็นเปอร์เซ็นต์"],
  ["How many days are there between the drop-off date and the day the watch should be ready?","Four",
   ["Four","Two","Fifteen","Eighteen"],
   "รับของ 14 October · นัดรับ 18 October → 18 − 14 = 4 วัน · ระวังอย่าหยิบตัวเลขในเอกสารมาตอบตรงๆ (2 คือวันที่บวกเพิ่มถ้าของขาดสต็อก, 18 คือวันนัดรับ ไม่ใช่จำนวนวัน)"]
 ]
},

{
 id:"p7-job", zone:"doc", part:6, kind:"ประกาศรับสมัครงาน",
 doc:{
  title:"WAREHOUSE TEAM LEADER WANTED",
  body:[
   "Sathorn Fresh Foods is looking for a team leader for its cold-storage warehouse in Bang Na. The successful applicant will manage a team of eight and will be ___1___ for checking every delivery against the order documents before it is accepted.",
   "Experience in a warehouse is essential. A ___2___ of chilled-food safety rules is highly desirable, although training will be given. ___3___",
   "The role is physical and involves standing for long periods in a cold environment. Working hours are 6 A.M. to 3 P.M., Monday to Friday. We ___4___ a starting salary of 28,000 baht per month, transport allowance, and annual health checks.",
   "Interested candidates should send a CV to jobs@sathornfresh.co.th before 30 September. Applications received after this date will not be ___5___."
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
   "ตามด้วย ‘เงินเดือนเริ่มต้น ค่าเดินทาง และตรวจสุขภาพประจำปี’ = สิ่งที่บริษัทให้ → offer (เสนอให้) · require (ต้องการจากผู้สมัคร) กลับด้านกัน · undergo (เข้ารับ) กับ distract (ทำให้เสียสมาธิ) ไม่เข้าโครงสร้าง"],
  ["ช่อง 5","considered",["considered","promoted","protected","improved"],
   "‘ใบสมัครที่ส่งหลังวันนี้จะไม่ถูก___’ → considered = ไม่ถูกนำมาพิจารณา · promoted (เลื่อนตำแหน่ง) ใช้กับคน ไม่ใช่ใบสมัคร · protected/improved ความหมายไม่เข้ากับใบสมัครที่ส่งช้า"]
 ]
},

// ---------- แนว CU-TEP : บทความสารคดี + คำถามจับใจความ ----------
{
 id:"cutep-banana", zone:"passage", part:7, kind:"บทความสารคดี (แนว CU-TEP)",
 doc:{
  title:"How Bananas Travel So Far",
  body:[
   "The Philippines is one of the biggest banana exporters in the world. Almost all of the fruit grown for export is a single variety called the Cavendish, and most of it comes from the southern island of Mindanao.",
   "Export bananas are never picked ripe. They are cut down while they are still hard and green, because a ripe banana would arrive as a bag of brown pulp. The boxes then travel in cold containers kept at roughly thirteen degrees. This is cool enough to slow the fruit down, but not cold enough to damage it.",
   "The last stage happens near the market rather than near the farm. The boxes are moved into sealed rooms and exposed to ethylene, a gas that bananas produce naturally as they ripen. Within a few days the skin turns yellow and the starch inside becomes sugar."
  ]
 },
 q:[
  ["This passage mainly discusses","how bananas are shipped and ripened for export",
   ["how bananas are shipped and ripened for export","why the Cavendish tastes better than other kinds",
    "the economy of the southern Philippines","how to keep fruit fresh at home"],
   "ทั้งบทความไล่ตามลำดับ: ปลูกที่ไหน → ตัดตอนเขียว → ขนส่งแช่เย็น → บ่มใกล้ตลาด · ข้ออื่นเป็นแค่รายละเอียดเดียว ไม่ใช่แก่นทั้งเรื่อง"],
  ["According to the passage, why are bananas cut down while they are green?",
   "A ripe banana would be ruined on the long journey",
   ["A ripe banana would be ruined on the long journey","Green bananas are cheaper to buy",
    "The plants are damaged if the fruit stays on","Buyers prefer the taste of green fruit"],
   "ย่อหน้า 2 บอกตรงๆ ว่ากล้วยสุกจะไปถึงปลายทางในสภาพ ‘ถุงเนื้อสีน้ำตาล’ · เรื่องราคาและรสชาติไม่มีในบทความเลย"],
  ["As used in paragraph 2, the word “roughly” is closest in meaning to","approximately",
   ["approximately","harshly","rarely","completely"],
   "‘roughly thirteen degrees’ = ประมาณ 13 องศา — เวลาอยู่หน้าตัวเลข roughly แปลว่า ‘ราวๆ’ · อีกความหมายคือ หยาบ/รุนแรง ซึ่งใช้กับตัวเลขไม่ได้ ต้องดูบริบทเสมอ"],
  ["It can be inferred that the ripening rooms are located","near the countries where the fruit is sold",
   ["near the countries where the fruit is sold","inside the plantations in Mindanao",
    "on board the ships","in the factories that make the boxes"],
   "ย่อหน้า 3 ขึ้นต้นว่า ‘near the market rather than near the farm’ = ใกล้ตลาด ไม่ใช่ใกล้ฟาร์ม → อนุมานได้ว่าอยู่ใกล้ประเทศปลายทาง"],
  ["Which of the following is NOT mentioned in the passage?","The price paid to the farmers",
   ["The price paid to the farmers","The temperature inside the containers",
    "The name of the banana variety","Where most of the fruit is grown"],
   "ระวังคำว่า NOT — บทความบอกอุณหภูมิ (13 องศา), ชื่อพันธุ์ (Cavendish) และแหล่งปลูก (Mindanao) แต่ ‘ราคาที่เกษตรกรได้รับ’ ไม่ถูกพูดถึงเลย"]
 ]
},

// ---------- แนว CU-TEP : บทความเจาะช่องว่าง (ทบทวนคำจากคลังเรา) ----------
{
 id:"cutep-cloze-sleep", zone:"passage", part:6, kind:"บทความเจาะช่องว่าง (แนว CU-TEP)",
 doc:{
  title:"Sleep and the Working Week",
  body:[
   "Many people believe that sleep is time taken away from work. Recent studies ___1___ the opposite. Workers who sleep fewer than six hours a night make more mistakes, and the errors are often ___2___ enough to cost the company money.",
   "Tired staff are also easier to ___3___. A worker who has slept well can return to a task quickly after an interruption, while a tired worker may need several minutes to find the thread again. Over a whole week, those lost minutes add up.",
   "Sleep does not only affect the mind. The body uses this time to repair itself, and the immune system ___4___ nutrients more efficiently during deep sleep than at any other time. Staff who sleep badly take more sick days, and recovery from illness takes them longer.",
   "Employers who consider the problem often see results within a month. Some companies now offer later starting times, and a few provide quiet rooms for short afternoon rests. These changes cost very little, and the ___5___ in output is usually easy to measure."
  ]
 },
 q:[
  ["ช่อง 1","suggest",["suggest","persuade","brag","offend"],
   "‘งานวิจัย___สิ่งตรงข้าม’ → suggest = ชี้ให้เห็น · persuade ต้องมีคนถูกโน้มน้าว · brag (โม้) กับ offend (ทำให้ขุ่นเคือง) ใช้กับงานวิจัยไม่ได้"],
  ["ช่อง 2","serious",["serious","popular","academic","humble"],
   "‘ข้อผิดพลาด___มากพอจนทำให้บริษัทเสียเงิน’ → serious = ร้ายแรง · popular/academic/humble ไม่เข้ากับคำว่าความผิดพลาดเลย"],
  ["ช่อง 3","distract",["distract","protect","embrace","harvest"],
   "ประโยคถัดไปพูดถึงคนที่ล้าแล้วกลับมาทำงานต่อหลังถูกขัดจังหวะได้ช้า → distract = ทำให้เสียสมาธิ · protect (ปกป้อง) ความหมายกลับกัน"],
  ["ช่อง 4","absorbs",["absorbs","offers","requires","climbs"],
   "‘ระบบภูมิคุ้มกัน___สารอาหารได้ดีขึ้น’ → absorbs = ดูดซึม · requires (ต้องการ) พอได้แต่ขัดกับคำว่า more efficiently ที่ตามมา"],
  ["ช่อง 5","improvement",["improvement","injury","accident","emphasis"],
   "‘___ของผลผลิตวัดได้ง่าย’ + ประโยคหน้าบอกว่าต้นทุนน้อยมาก → ต้องเป็นผลดี = improvement · injury/accident เป็นผลเสีย"]
 ]
},

// ---------- Passage จากข่าวจริง ----------
{
 id:"news-luffy-beetle", zone:"passage", part:7, kind:"ข่าววิทยาศาสตร์",
 source:"ZooKeys / Natural History Museum of Denmark (ก.ค. 2026) · pensoft.net",
 doc:{
  title:"A Beetle Named After Luffy",
  body:[
   "Scientists at the Natural History Museum of Denmark have established a new genus of rove beetle and named it after Monkey D. Luffy, the protagonist of the manga and anime One Piece. Their study was published in July 2026 in the journal ZooKeys.",
   "The team says the name was not chosen merely for fun. The species in this genus possess mandibles, antennae and palps that are significantly longer and more slender than those of closely related groups. This elongated proportion reminded the researchers of Luffy's rubber body, which can freely stretch and expand.",
   "Two species have been found so far. The first, Luffy schillhammeri, was collected in the broadleaf forests of Yunnan in southern China. It is named after Dr. Harald Schillhammer, a scientist in Vienna who has studied this family of beetles for many years.",
   "The second, Luffy nika, was discovered in Louang Namtha in northern Laos. The epithet nika originates from Luffy's Devil Fruit awakening, also known as Gear 5. This species features striking white band-like hairs across much of its body, closely resembling Luffy's all-white appearance during that transformation."
  ]
 },
 q:[
  ["What is the passage mainly about?","A new group of beetles and how it was named",
   ["A new group of beetles and how it was named","The story of the anime One Piece",
    "The forests of China and Laos","How scientists catch insects"],
   "ทั้งบทความพูดเรื่องด้วงสกุลใหม่กับที่มาของชื่อ · One Piece กับป่าในจีน-ลาว เป็นแค่รายละเอียดประกอบ ไม่ใช่แก่นเรื่อง"],
  ["Why did the researchers choose the name Luffy?","Parts of the beetles' bodies are unusually long and slender",
   ["Parts of the beetles' bodies are unusually long and slender","The beetles were found in Japan",
    "The beetles can stretch their bodies","One Piece is popular in Denmark"],
   "ย่อหน้า 2 บอกว่า mandibles (ขากรรไกร) กับ antennae (หนวด) ยาวและเรียว (slender) กว่าด้วงกลุ่มใกล้เคียง จึงทำให้นึกถึงร่างกายยางยืดของลูฟี่ · ระวังข้อ C — ตัวด้วงยืดตัวไม่ได้จริง แค่ ‘รูปร่างดูยืด’"],
  ["Where was Luffy schillhammeri collected?","In southern China",
   ["In southern China","In northern Laos","In Denmark","In Vienna"],
   "ย่อหน้า 3 ระบุยูนนานทางตอนใต้ของจีน · ลาวคือที่พบอีกชนิดหนึ่ง (Luffy nika) · เดนมาร์กกับเวียนนาเป็นที่อยู่ของนักวิทยาศาสตร์ ไม่ใช่ที่พบตัวด้วง"],
  ["The name schillhammeri was chosen to honour","a scientist who has studied these beetles for a long time",
   ["a scientist who has studied these beetles for a long time","the person who first drew One Piece",
    "the village where the beetle was found","the director of the museum in Denmark"],
   "ย่อหน้า 3: ตั้งตามชื่อ Dr. Harald Schillhammer นักวิทยาศาสตร์ที่เวียนนาซึ่งศึกษาด้วงตระกูลนี้มาหลายปี"],
  ["As used in paragraph 3, the word “collected” most nearly means","found and taken away for study",
   ["found and taken away for study","paid for","counted","photographed"],
   "ในบริบทงานวิจัยชีววิทยา collected = เก็บตัวอย่างมาศึกษา · ไม่ได้แปลว่าซื้อ นับ หรือถ่ายรูป — คำเดียวกันเปลี่ยนความหมายตามบริบทได้เสมอ"]
 ]
},

{
 id:"news-naruto-whirlpool", zone:"passage", part:7, kind:"บทความความรู้ (ที่มาของชื่อนารูโตะ)",
 source:"Naruto Strait whirlpools · japan.travel (JNTO) / Tokushima Prefecture",
 doc:{
  title:"The Whirlpools of the Naruto Strait",
  body:[
   "The Naruto Strait is a narrow channel about 1.3 kilometres wide, lying between the city of Naruto in Tokushima and Awaji Island in Hyogo, Japan. Several times a day the water there forms enormous spinning whirlpools, and these have been famous in Japan for centuries.",
   "The whirlpools are created by the tide. The sea on one side of the strait rises while the sea on the other side is still low, so an enormous volume of water is forced through the narrow gap at once. The current can reach twenty kilometres per hour, which is among the fastest tidal currents in the world, and a single whirlpool may measure twenty metres across.",
   "Because the whirlpools depend on the difference between high and low tide, they are not equally impressive every day. They are largest during spring tides, and visitors are advised to come in the days just before or after a new moon or a full moon. Sightseeing boats and a walkway suspended beneath the Onaruto Bridge allow people to watch them from above and from close range.",
   "The Naruto whirlpools are usually listed with the Strait of Messina in Italy and Seymour Narrows in Canada as the three greatest whirlpools on earth. The spiral pattern is also familiar far outside Japan: the pink and white swirl on narutomaki, the sliced fish cake often served on ramen, takes both its shape and its name from this stretch of water."
  ]
 },
 q:[
  ["What is the main cause of the whirlpools in the Naruto Strait?",
   "A large difference in sea level between the two sides of the strait",
   ["A large difference in sea level between the two sides of the strait",
    "Strong winds blowing through the channel","Boats passing through at high speed",
    "The shape of the Onaruto Bridge"],
   "ย่อหน้า 2 อธิบายว่าน้ำฝั่งหนึ่งขึ้นขณะที่อีกฝั่งยังลง ทำให้น้ำมหาศาลถูกดันผ่านช่องแคบพร้อมกัน · ลม สะพาน และเรือไม่ได้ถูกพูดถึงว่าเป็นสาเหตุเลย"],
  ["According to the passage, when is the best time to see large whirlpools?",
   "Around the time of a new moon or a full moon",
   ["Around the time of a new moon or a full moon","Early in the morning on any day",
    "During the winter months","When the wind is strongest"],
   "ย่อหน้า 3 บอกว่าให้มาช่วงก่อนหรือหลังวันเดือนใหม่/เดือนเต็มดวง เพราะช่วงนั้นน้ำขึ้นน้ำลงต่างกันมากที่สุด"],
  ["As used in paragraph 2, the word \u201cenormous\u201d is closest in meaning to","very large",
   ["very large","very fast","very deep","very rare"],
   "เดาจากบริบท: ใช้กับ \u2018spinning whirlpools\u2019 และ \u2018volume of water\u2019 ที่ถูกดันผ่านช่องแคบ → หมายถึงขนาดมหึมา ไม่ใช่ความเร็วหรือความลึก"],
  ["What can be inferred about the name narutomaki?",
   "The food was named after the whirlpools, not the other way round",
   ["The food was named after the whirlpools, not the other way round",
    "The fish cake is only sold near the Naruto Strait","The whirlpools were named after a type of ramen",
    "The pattern was invented by a chef in Tokushima"],
   "ย่อหน้าสุดท้าย: ลายวนของนารูโตะมากิ \u2018takes both its shape and its name from this stretch of water\u2019 = เอาทั้งรูปทรงและชื่อมาจากช่องแคบนี้ → ช่องแคบมาก่อน"],
  ["Which of the following is NOT mentioned in the passage?","The depth of the water in the strait",
   ["The depth of the water in the strait","The width of the strait",
    "The speed of the current","The size of a single whirlpool"],
   "ระวังคำว่า NOT — บทความบอกความกว้าง (1.3 กม.), ความเร็วกระแสน้ำ (20 กม./ชม.) และขนาดวังวน (20 เมตร) แต่ไม่เคยพูดถึง \u2018ความลึก\u2019 เลย"]
 ]
},

{
 id:"news-katana", zone:"passage", part:7, kind:"บทความความรู้ (ดาบญี่ปุ่น)",
 source:"Tamahagane & nihonto forging · toukenza.jp / swordsofjapan.com",
 doc:{
  title:"How a Japanese Sword Is Made",
  body:[
   "The steel used in a traditional Japanese sword is called tamahagane, and it does not come from a modern factory. It is smelted from iron sand and charcoal in a clay furnace known as a tatara. A single cycle consumes roughly ten tons of iron sand and twelve tons of charcoal, yet yields only about nine hundred kilograms of usable steel.",
   "The steel that emerges is not uniform. Within one block the carbon content varies from about 0.6 to 1.5 percent, so the smith breaks the block apart and sorts the pieces by hand. The harder, high-carbon steel becomes the outer skin and the cutting edge, while the softer, low-carbon steel is kept for the core. A blade made only of hard steel would be sharp but brittle; a blade made only of soft steel would bend.",
   "The sorted steel is then heated, hammered flat and folded, usually ten to fifteen times. Each fold doubles the number of layers, so ten folds produce over a thousand layers and fifteen produce more than thirty thousand. Folding does not make the steel infinitely stronger. Its real purpose is to break up impurities and spread them evenly, which also creates the faint surface grain visible on a polished blade.",
   "The final stage is the quench. The smith coats the blade with clay, thinly along the cutting edge and thickly along the spine, then heats it and plunges it into water. The thinly coated edge cools faster and becomes much harder than the back. This difference produces the curve of the blade and the wavy line along the edge known as the hamon, which is unique to every sword."
  ]
 },
 q:[
  ["Why does the smith sort the tamahagane by hand?",
   "The carbon content is uneven, and different parts of the blade need different steel",
   ["The carbon content is uneven, and different parts of the blade need different steel",
    "Some of the steel is damaged during smelting","The pieces must be weighed before forging",
    "Only the largest pieces can be folded"],
   "ย่อหน้า 2: คาร์บอนในก้อนเดียวกันต่างกัน 0.6\u20131.5% ช่างจึงคัดแยก \u2014 เหล็กแข็งไว้ทำคมและผิวนอก เหล็กอ่อนไว้ทำแกนใน"],
  ["According to the passage, what is the real purpose of folding the steel?",
   "To break up impurities and spread them evenly",
   ["To break up impurities and spread them evenly","To make the steel endlessly stronger",
    "To make the blade longer","To remove all the carbon from the steel"],
   "ย่อหน้า 3 บอกตรงๆ ว่า \u2018Folding does not make the steel infinitely stronger. Its real purpose is to break up impurities\u2019 \u2014 ข้อ B คือความเชื่อผิดๆ ที่บทความปฏิเสธไว้เอง"],
  ["What happens because the clay is thinner along the cutting edge?",
   "The edge cools faster and becomes harder than the spine",
   ["The edge cools faster and becomes harder than the spine","The edge stays soft so it can bend",
    "The clay burns away and colours the steel","The blade becomes lighter to hold"],
   "ย่อหน้า 4: ดินบางตรงคม \u2192 เย็นเร็วกว่า \u2192 แข็งกว่าสันดาบ ความต่างนี้เองที่ทำให้ดาบโค้งและเกิดลายฮามอน"],
  ["It can be inferred that a sword made only of high-carbon steel would","break more easily",
   ["break more easily","bend out of shape","be too heavy to lift","have no cutting edge"],
   "ย่อหน้า 2 บอกว่า \u2018sharp but brittle\u2019 = คมแต่เปราะ \u2192 อนุมานได้ว่าหักง่าย · ส่วนการงอเป็นปัญหาของเหล็กอ่อน ไม่ใช่เหล็กแข็ง"],
  ["Which of the following best describes the tatara process?",
   "It uses a very large amount of material to produce a small amount of steel",
   ["It uses a very large amount of material to produce a small amount of steel",
    "It is faster than modern factory methods","It produces steel of a single, even quality",
    "It requires no charcoal"],
   "ย่อหน้า 1: ใช้ทรายเหล็ก 10 ตัน + ถ่าน 12 ตัน แต่ได้เหล็กใช้ได้แค่ราว 900 กก. \u2014 คำว่า \u2018yet\u2019 เป็นสัญญาณว่ากำลังเทียบของเยอะกับผลได้น้อย"]
 ]
},

];
