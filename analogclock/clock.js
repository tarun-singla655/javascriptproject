setInterval(setClock,0.0000000000001);
const hour = document.getElementById('H');
const minute = document.getElementById('M');
const second = document.getElementById('S');
function setClock(){
    const nowDate = new Date;
    const sR = nowDate.getSeconds()/60;
    const mR = (sR+nowDate.getMinutes())/60;
    
    const hR = (mR+nowDate.getHours())/12;
    setRotation(second,sR);
    setRotation(minute,mR);
    setRotation(hour,hR);
}

function setRotation(element,rR){
    element.style.setProperty('--r',rR*360);
}


// 23:15:00 ;
// 15 
  