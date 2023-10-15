let inputqr= document.getElementById("inputqr");
let imgQrCode= document.getElementById("image");
let boxB=document.getElementById("box");
const getqr =()=>{
imgQrCode.src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data="+inputqr.value;
inputqr.value="";
boxB.style.width= "400px";
boxB.style.height="400px";

}
btnqr.addEventListener("click",getqr);
