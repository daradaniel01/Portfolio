var diaILines = document.getElementsByClassName('diallines');
var clockEI = document.getElementsByClassName('clock')[0];
for (var i = 1; i < 60; i++){
    clockEI.innerHTML += "<div class='diallines'></div>";
    diaILines[i].style.transform="rotate(" + 6 * i +"deg)";
}
function clock(){
    var weekday= [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
    ],
    d = new Date(),
    h = d.getHours(),
    m = d.getMinutes(),
    s = d.getSeconds(),
    date = d.getDate(),
    month = d.getMonth() + 1,
    year = d.getFullYear(),

    hDeg = h*30+m*(360/720),
    mDeg = m*6+s*(360/3600),
    sDeg = s*6,

    hEI=
    document.querySelector('.hour-hand'),
    mEI=
    document.querySelector('.mnute-hand'),
    sEI=
    document.querySelector('.secound-hand'),
    dateEI=
    document.querySelector('.date'),
    dayEI=
    document.querySelector('.day');

    var day = weekday[d.getDay()];

    if(month<9){
        month="0"+month;
    }

    hEI.style.transform=
    "rotate("+hDeg+"deg)";
    
    sEI.style.transform=
    "rotate("+sDeg+"deg)";
    dateEI.innerHTML=date+"/"+month+"/"+year;
    dayEI.innerHTML = day;
}
setInterval("clock()", 100);