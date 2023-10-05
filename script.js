let qrText=document.getElementById("qrtexts");
let thisIsQr=document.getElementById("thisisqr");

function showQr(){
    thisIsQr.src = "https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=" + qrText.value;
}