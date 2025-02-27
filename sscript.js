
let minutes = 0;
let seconds = 0;
let milliseconds = 0;
let interval;
let laps = [];

function startStopwatch() {
    interval = setInterval(updateTime, 10);
}

function pauseStopwatch() {
    clearInterval(interval);
}

function resetStopwatch() {
    clearInterval(interval);
    minutes = 0;
    seconds = 0;
    milliseconds = 0;
    document.getElementById('minutes').textContent = '00';
    document.getElementById('seconds').textContent = '00';
    document.getElementById('milliseconds').textContent = '00';
    laps = [];
    document.getElementById('laps').innerHTML = '';
}

function lapStopwatch() {
    let lapTime = `${pad(minutes)}:${pad(seconds)}:${pad(milliseconds)}`;
    laps.push(lapTime);
    let li = document.createElement('li');
    li.textContent = lapTime;
    document.getElementById('laps').appendChild(li);
}

function updateTime() {
    milliseconds++;
    if (milliseconds === 100) {
        milliseconds = 0;
        seconds++;
    }
    if (seconds === 60) {
        seconds = 0;
        minutes++;
    }

    document.getElementById('minutes').textContent = pad(minutes);
    document.getElementById('seconds').textContent = pad(seconds);
    document.getElementById('milliseconds').textContent = pad(milliseconds);
}

function pad(number) {
    return (number < 10) ? '0' + number : number;
}

document.getElementById('startBtn').addEventListener('click', startStopwatch);
document.getElementById('pauseBtn').addEventListener('click', pauseStopwatch);
document.getElementById('resetBtn').addEventListener('click', resetStopwatch);
document.getElementById('lapBtn').addEventListener('click', lapStopwatch);
