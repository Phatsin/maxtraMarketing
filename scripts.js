var data= {
  contact: {
    title: "ช่องทางการติดต่อ",
    text: "ช่องทางการติดต่อ",
    image: "images/contact.jpg"    
  },
  promotion1: {
    title: "ฝาก $50 รับเครดิตโบนัส $100",
    image: "images/promotion1.jpg",  
    text: "Promotion $100 กับ Maxtra Rich Forex\n\
    * เปิดบัญชีและทำการฝากเงิน $50\n\
    * ระยะเวลาการใช้โบนัส 60 วัน นับตั้งแต่วันที่ได้รับโบนัส\n\
    * ไม่สารมารถทำการ Hedging/Square\n\
    Maximum Leverage 1:100\n\
    โบนัสจะถูกยกเลิกอัตโนมัติ ในกรณีที่ลูกค้าทำการถอนเงิน\n\
    สามารถถอนเงินได้ไม่มีเงื่อนไขจำกัด\n\
    เงินโบนัสเข้าสู่บัญชีท่านโดยอัตโนมัติ\n\
    หากยังไม่ได้รับ Bonus 100$ สามารถติดต่อเจ้าหน้าที่ได้ทุกช่องทาง\n\
    ข้อเสนอนี้จำกัด 1 บัญชี ต่อลูกค้า 1 คน ต่อ 1 IP Addressเท่านั้น\n\
    โบนัสจะถูกยกเลิกอัตโนมัติ ในกรณี Equity อยู่ในระดับที่โดน Stop out\n\
    Linkสมัคร : https://maxtrarich.com/"
  },
  promotion2: {
    title: "รับเครดิตโบนัส 50% สูงสุด $500",
    image: "images/promotion2.jpg",
    text: "ข้อมูลโบนัส 50%\n\
    เครดิตสูงสุดที่ให้ในข้อเสนอนี้คือ 500 USD\n\
    Leverage 1:500\n\
    ฝากเงินขั้น ต่ำเพียง $50\n\
    Maximum Bonus  $500\n\
    ไม่มีกำหนดระยะเวลาในการใช้โบนัส\n\
    ข้อเสนอนี้จำกัด 1 บัญชี ต่อลูกค้า 1 คน ต่อ 1 IP Addressเท่านั้นจะได้รับเครดิตโบนัสทุกครั้งเมื่อมีรายการฝาก\n\
    เครดิตโบนัสจะถูกยกเลิกตามสัดส่วนในการถอน\n\
    เครดิตโบนัสจะถูกยกเลิกในกรณี Equity อยู่ในระดับที่โดน Stop out"
  },
  service1: {
    title: "ห้องซิกแนล",
    image: "images/contact.jpg",
    text: "1.ห้อง VIP Signal\n\
    กลยุทธ์ : แนวรับแนวต้าน\n\
    ปริมาณความถี่ของสัญญาณต่อวัน : สูง\n\
    ความแม่นยำ : 70-85%\n\
    สัญญาณจากสินค้าประเภท : สกุลเงินและทองคำ\n\
    เงื่อนไขการฝากเงินขั้นต่ำเพื่อเข้าห้อง : 1000$\n\
    2.ห้อง Moo Moo Signal\n\
    กลยุทธ์: แนวรับแนวต้าน\n\
    ปริมาณความถี่ของสัญญาณต่อวัน: วันละ 1-2 ครั้ง\n\
    ความแม่นยำ: 65-80\n\
    สัญญาณจากสินค้าประเภท: สกุลเงินและทองคำ\n\
    เงื่อนไขการฝากเงินขั้นต่ำเพื่อเข้าห้อง: 100$"
  },
  activity1: {
    title: "เมษา มหาสนุก",
    image: "images/contact.jpg",
    text: "เทรดครบ 44 Lots \n\
    แจกของรางวัลมูลค่า 2000-3000 บาท\n\
    เทรดครบ 88 Lots \n\
    แจกของรางวัลมูลค่า 5000-7000 บาท\n\
    เทรดครบ 144 Lots \n\
    แจกของรางวัลมูลค่า 10000-12000 บาท \n\
    เทรดครบ 244 Lots \n\
    แจกของรางวัลมูลค่า  30000-40000 บาท\n\
    \n\
    เงื่อนไขเข้าร่วมกิจกรรม : \n\
         - ฝากเงิน 400 USD เพื่อเข้าร่วมแคมเปญ\n\
         - เฉพาะบัญชี Standard เท่านั้น\n\
         - ไม่สามารถใช้ร่วมกับบัญชี Promotion อื่นได้\n\
         -  ระยะเวลาเข้าร่วมโปโมชั่น ตั้งแต่วันที่1 เมษายน ถึง  30 มิถุนายน 2565 \n\
         \n\
    *** ไม่สามารถทำการเทรด Hedging/Square "
  },
}
function menuToggle(id) {
  var x = document.getElementsByClassName("sub-menu");
  for(var i=0; i<x.length; i++){
      x[i].style.display="none";
      x[i].children[0].value="contact";
  }
  var xx = document.getElementById(id);
  xx.style.display="block";

  var y = document.getElementsByClassName("menuButton");
  for(var i=0; i<y.length; i++){
    y[i].style.background="";
  }
  var yy = document.getElementById(id+"-button");
  yy.style.background="green";

} 
function showContent(select) {
  if(data[select]===undefined){
    document.getElementById("text").innerText="ไม่มีข้อมูล";
    document.getElementById("image").src=data.contact.image;
    document.getElementById("textarea").value=document.getElementById("text").innerText;
  }else{
    document.getElementById("text").innerText=data[select].text;
    document.getElementById("image").src=data[select].image;
    document.getElementById("textarea").value=document.getElementById("text").innerText;
  }
}
function copyText() {
  document.getElementById("textarea").value=document.getElementById("text").innerText;
  var copyText = document.getElementById("textarea");
  copyText.select();
  copyText.setSelectionRange(0, 99999);
  navigator.clipboard.writeText(copyText.value);
  document.getElementById("copyButton").innerText="คัดลอกข้อความแล้ว";
  sleep(1500).then(() => {
    document.getElementById("copyButton").innerText="คัดลอกข้อความ";
  });
}
function copyImage() {
  try {
    navigator.clipboard.write([
        new ClipboardItem({
            'image/png': pngImageBlob
        })
    ]);
  } catch (e) {
      console.error(e);
  }
}
function sleep (time) {
  return new Promise((resolve) => setTimeout(resolve, time));
}
