const timer = document.getElementById("stopwatch");
let hr = 0;
let min = 0;
let sec = 0;
let stoptime = true;

const startTimer = () => {
    if (stoptime === true) {
        stoptime = false;
        timeCycle();
    }
}

const stopTimer = () => {
    if (stoptime === false) {
        stoptime = true;
    }
}

const timeCycle = () => {
    if (stoptime === false) {
        sec = parseInt(sec);
        min = parseInt(min);
        hr = parseInt(hr);

        sec++;
        if (sec === 60) {
            min++;
            sec = 0;
        }

        if (min === 60) {
            hr++;
            min = 0;
            sec = 0;
        }
        
        if (sec < 10) {
            sec = "0" + sec;
        }
        if (min < 10) {
            min = "0" + min;
        }
        if (hr < 10) {
            hr = "0" + hr;
        }
        timer.innerHTML = hr + ":" + min + ":" + sec;

        setTimeout(timeCycle(), 1000);
    }
}

    const resetTimer = () => {
        timer.innerHTML = "00:00:00";
        stoptime = true;
        hr = 0;
        sec = 0;
        min = 0;
    }