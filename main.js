// Script for the Digital Clock

setInterval(showTime, 1000);
function showTime() {
    let time = new Date();
    let hour = time.getHours();
    let min = time.getMinutes();
    let sec = time.getSeconds();
    am_pm = "AM";

    if (hour > 12) {
        hour -= 12;
        am_pm = "PM";
    }
    if (hour == 0) {
        hr = 12;
        am_pm = "AM";
    }

    hour = hour < 10 ? "0" + hour : hour;
    min = min < 10 ? "0" + min : min;
    sec = sec < 10 ? "0" + sec : sec;

    let currentTime = hour + ":" 
        + min + ":" + sec + am_pm;

    document.getElementById("digiclock")
        .innerHTML = currentTime;
}

showTime();



// Script for the Analogue Clock

    var hour = document.getElementById("hour");
    var min = document.getElementById("min");
    var sec = document.getElementById("sec");

    function initClock(){
        var date = new Date();
        var hours = date.getHours() % 12; // 0 - 23
        var minute = date.getMinutes();
        var second = date.getSeconds();


        var hourDeg = hours * 30;
        var minuteDeg = minute * 6;
        var secondDeg = second * 6; // 360 / 60

        hour.style.transform = 'rotate(' + hourDeg + 'deg)';
        min.style.transform = 'rotate(' + minuteDeg + 'deg)';
        sec.style.transform = 'rotate(' + secondDeg + 'deg)';
        

        setTimeout(initClock, 1000);
    };

    initClock();

    function Digital(){
        document.getElementById("digiclock").style.display = "Block";
        document.getElementById("analogue").style.display = "none";
    }

    function Analogue(){
        document.getElementById("analogue").style.display = "block";
        document.getElementById("digiclock").style.display = "none";
    }
