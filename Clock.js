function display(){
    let time=new Date();
    let hh=time.getHours();
    let mm=time.getMinutes();
    let ss=time.getSeconds();
    let c=hh+" : "+mm+" : "+ss;
document.getElementById("clock").innerHTML=c;
 
     }
    setInterval(display,10);