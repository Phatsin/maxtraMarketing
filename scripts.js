function menuToggle(id) {
  var y = document.getElementsByClassName("sub-menu");
  for(var i=0; i<y.length; i++){
      y[i].style.display="none";
  }
  var x = document.getElementById(id);
  x.style.display="block";
} 

var data= {
  contact: {
    title: "",
    text: "ช่องทางการติดต่อ",
    image: "images/contact.jpg"    
  },
  promotion1: {
    title: "ฝาก $50 รับเครดิตโบนัส $100",
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
    Linkสมัคร : https://maxtrarich.com/",
    image: "images/promotion1.jpg"    
  },
  promotion2: {
    title: "รับเครดิตโบนัส 50% สูงสุด $500",
    text: "ข้อมูลโบนัส 50%\n\
    เครดิตสูงสุดที่ให้ในข้อเสนอนี้คือ 500 USD\n\
    Leverage 1:500\n\
    ฝากเงินขั้น ต่ำเพียง $50\n\
    Maximum Bonus  $500\n\
    ไม่มีกำหนดระยะเวลาในการใช้โบนัส\n\
    ข้อเสนอนี้จำกัด 1 บัญชี ต่อลูกค้า 1 คน ต่อ 1 IP Addressเท่านั้นจะได้รับเครดิตโบนัสทุกครั้งเมื่อมีรายการฝาก\n\
    เครดิตโบนัสจะถูกยกเลิกตามสัดส่วนในการถอน\n\
    เครดิตโบนัสจะถูกยกเลิกในกรณี Equity อยู่ในระดับที่โดน Stop out",
    image: "images/promotion2.jpg"    
  },
}
function showContent(option) {
  select=document.getElementById(option).value;
  if(data[select]===undefined){
    document.getElementById("text").innerText="ไม่มีข้อมูล";
    document.getElementById("image").src=data.contact.image;  
  }else{
    document.getElementById("text").innerText=data[select].text;
    document.getElementById("image").src=data[select].image;  
  }
}
function copyText() {
  document.getElementById("textarea").value=document.getElementById("text").innerText;
  var copyText = document.getElementById("textarea");
  copyText.select();
  copyText.setSelectionRange(0, 99999);
  navigator.clipboard.writeText(copyText.value);
  document.getElementById("copyed").innerText=new Date().toLocaleTimeString()+" คัดลอกข้อความ";
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