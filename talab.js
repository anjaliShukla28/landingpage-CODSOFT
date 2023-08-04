var slideImg = document.getElementById("slideImg");
var images = new Array(
    "./photos/1000_F_324739203_keeq8udvv0P2h1MLYJ0GLSlTBagoXS48.jpg",
    "./photos/istockphoto-104704117-170667a.jpg",
    "./photos/medium.jpg",
    "./photos/1000_F_351800036_7prenomG9ITcpllDRrCr5JBs1rEUcj8Z.jpg",
    "./photos/1000_F_403775173_7Q1IMCaRrECOkitDPmnhzWckjNexqkBo.jpg",
    "./photos/200522-fine-dining-al-0903.webp",
);

var len = images.length;
var i = 0;

function slider(){
    if(i > len-1){
        i = 0;
    }
    slideImg.src = images[i];
    i++;
    setTimeout('slider()',2000);
}

