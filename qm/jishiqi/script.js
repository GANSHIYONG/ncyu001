let timerDisplay = document.getElementById('timer');
let startStopBtn = document.getElementById('startStopBtn');
let resetBtn = document.getElementById('resetBtn');

let startTime;
let updatedTime;
let difference;
let tInterval;
let running = false;

function startTimer() {
    startTime = new Date().getTime();
    tInterval = setInterval(updateTimer, 1000);
    startStopBtn.innerText = 'Pause';
    running = true;
}

function pauseTimer() {
    clearInterval(tInterval);
    startStopBtn.innerText = 'Start';
    running = false;
}

function resetTimer() {
    clearInterval(tInterval);
    timerDisplay.innerText = '00:00:00';
    startStopBtn.innerText = 'Start';
    running = false;
}

function updateTimer() {
    updatedTime = new Date().getTime();
    difference = updatedTime - startTime;

    let hours = Math.floor(difference / (1000 * 60 * 60));
    let minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((difference % (1000 * 60)) / 1000);

    hours = (hours < 10) ? '0' + hours : hours;
    minutes = (minutes < 10) ? '0' + minutes : minutes;
    seconds = (seconds < 10) ? '0' + seconds : seconds;

    timerDisplay.innerText = hours + ':' + minutes + ':' + seconds;
}

startStopBtn.addEventListener('click', () => {
    if (!running) {
        startTimer();
    } else {
        pauseTimer();
    }
});

resetBtn.addEventListener('click', resetTimer);