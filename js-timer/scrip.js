var duration = 300;
var timeLeft = duration;
var timer = null;

function updateDisplay() {
    var minutes = Math.floor(timeLeft / 60);
    var seconds = timeLeft % 60;
    document.getElementById('display').textContent =
        `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
}



function startTimer() {
    if (timer) return;
    timer = setInterval(() => {
        if (timeLeft > 0) {
            timeLeft--;
            updateDisplay();
        } else {
            clearInterval(timer);
            timer = null;
            document.getElementById('alarmSound').play();
            alert("Time's up!");
        }
    }, 1000);
}



function pauseTimer() {
    clearInterval(timer);
    timer = null;
}



function resetTimer() {
    clearInterval(timer);
    timer = null;
    timeLeft = duration;
    updateDisplay();
}



updateDisplay();