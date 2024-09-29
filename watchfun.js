let startBtn = document.getElementById('start');
let stopBtn = document.getElementById('stop');
let resetBtn = document.getElementById ('reset');

let hour = 0;
let minute = 0;
let second = 0;
let millisecond = 0;


startBtn.addEventListener('click', function () {
    timer = true;
    stopWatch();
});

stopBtn.addEventListener('click', function () {
    timer = false;
});

resetBtn.addEventListener('click', function () {
    timer = false;
    hour = 0;
    minute = 0;
    second = 0;
    millisecond = 0;
    document.getElementById('hour').innerHTML = "00";
    document.getElementById('minute').innerHTML = "00";
    document.getElementById('second').innerHTML = "00";
    document.getElementById('millisecond').innerHTML = "00";
});

function stopWatch() {
    if (timer) {
        millisecond++;

        if (millisecond == 1000) {
            second++;
            count = 0;
        }

        if (second == 60) {
            minute++;
            second = 0;
        }

        if (minute == 60) {
            hour++;
            minute = 0;
            second = 0;
        }

        let hrString = hour;
        let minString = minute;
        let secString = second;
        let countString = millisecond;

        if (hour < 10) {
            hrString = "0" + hrString;
        }

        if (minute < 10) {
            minString = "0" + minString;
        }

        if (second < 10) {
            secString = "0" + secString;
        }

        if (millisecond < 10) {
            countString = "0" + countString;
        }

        document.getElementById('hour').innerHTML = hrString;
        document.getElementById('minute').innerHTML = minString;
        document.getElementById('second').innerHTML = secString;
        document.getElementById('millisecond').innerHTML = countString;
        setTimeout(stopWatch, 10);
    }
}