setInterval(() => {
    d = new Date();
    hTime = d.getHours();
    mTime = d.getMinutes();
    sTime = d.getSeconds();
    date = d.toDateString();
    hRotation = 30*hTime + mTime/2 ;
    mRotation = 6*mTime ;
    sRotation = 6*sTime ;
    
    document.getElementById("digital").innerHTML = date;
    document.getElementById("digital").style.paddingLeft = "1vw";
    document.getElementById("digital").style.paddingTop = "1vw";
    document.getElementById("digital").style.fontSize = "1vw";
    document.getElementById("digital").style.fontWeight = "bold";
    document.getElementById("digital").style.color = "red";
    hour.style.transform = `Rotate(${hRotation}deg)`;
    minute.style.transform = `Rotate(${mRotation}deg)`;
    second.style.transform = `Rotate(${sRotation}deg)`;

}, 1000);

