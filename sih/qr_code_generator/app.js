const value=document.getElementById("text");
const img=document.getElementById("img");
const btn=document.getElementById("btn");

btn.onclick = ()=>{
    if(value.value==="")return;
    let link = ("https://quickchart.io/qr");
    img.src= link + "?size=200&text=" + value.value;
};
