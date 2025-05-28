let count = 0;
let intervalId = null;

const counter = document.getElementById('counter');
const startBtn = document.getElementById('startBtn');
const stopBtn = document.getElementById('stopBtn');
const resetBtn = document.getElementById('resetBtn');

function updateCounter() {
    if (count < 100) {
        count++;
        counter.textContent = count;
    } else {
        clearInterval(intervalId);
        intervalId = null;
        startBtn.disabled = false;
        stopBtn.disabled = true;
    }
}

startBtn.addEventListener('click', () => {
    if (!intervalId && count < 100) {
        intervalId = setInterval(updateCounter, 100);
        startBtn.disabled = true;
        stopBtn.disabled = false;
    }
});

stopBtn.addEventListener('click', () => {
    clearInterval(intervalId);
    intervalId = null;
    startBtn.disabled = false;
    stopBtn.disabled = true;
});

resetBtn.addEventListener('click', () => {
    clearInterval(intervalId);
    intervalId = null;
    count = 0;
    counter.textContent = count;
    startBtn.disabled = false;
    stopBtn.disabled = true;
});
