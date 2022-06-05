const stopwatch = document.getElementById('stopwatch');
const playPauseButton = document.getElementById('play-pause');
const secondsSphere = document.getElementById('seconds-sphere');

let stopwatchInterval;
let runningTime = 0;

const playPause = () => {
    const isPaused = !playPauseButton.classList.contains('running');
    if (isPaused) {
        playPauseButton.classList.add('running');
        start();
    } else {
        playPauseButton.classList.remove('running');
        pause();
    }
}

const pause = () => {
    secondsSphere.style.animationPlayState = 'paused';
    clearInterval(stopwatchInterval);
}

const stop = () => {
    secondsSphere.style.transform = 'rotate(-90deg) translateX(60px)';
    secondsSphere.style.animation = 'none';
    playPauseButton.classList.remove('running');
    runningTime = 0;
    clearInterval(stopwatchInterval);
    stopwatch.textContent = '00:00';
}

const start = () => {
    secondsSphere.style.animation = 'rotacion 60s linear infinite';
    let startTime = Date.now() - runningTime;
    secondsSphere.style.animationPlayState = 'running';
    stopwatchInterval = setInterval( () => {
        runningTime = Date.now() - startTime;
        stopwatch.textContent = calculateTime(runningTime);
    }, 1000)
}

const calculateTime = runningTime => {
    const total_seconds = Math.floor(runningTime / 1000);
    const total_minutes = Math.floor(total_seconds / 60);

    const display_seconds = (total_seconds % 60).toString().padStart(2, "0");
    const display_minutes = total_minutes.toString().padStart(2, "0");

    return `${display_minutes}:${display_seconds}`
}

function modeDay() {
    var night = document.getElementById('nigth');
    night.classList.remove('night');

    var modeNight = document.getElementById('modeNight');
    modeNight.classList.remove('modeNight');

    var circleNight = document.getElementById('circleNight');
    circleNight.classList.remove('circleNight');

    var sphere = document.getElementById('seconds-sphere');
    sphere.classList.remove('sphereNigth');

    var backNight = document.getElementById('backNight');
    backNight.classList.remove('backNight');

    var play = document.getElementById('play-pause');
    play.classList.remove('pausedNight');

    var stopNight = document.getElementById('stopNight');
    stopNight.classList.remove('stopNight');

}

function modeNight() {
    var night = document.getElementById('nigth');
    night.classList.add('night');

    var modeNight = document.getElementById('modeNight');
    modeNight.classList.add('modeNight');

    var circleNight = document.getElementById('circleNight');
    circleNight.classList.add('circleNight');

    var sphere = document.getElementById('seconds-sphere');
    sphere.classList.add('sphereNigth');

    var backNight = document.getElementById('backNight');
    backNight.classList.add('backNight');

    var play = document.getElementById('play-pause');
    play.classList.add('pausedNight');

    var stopNight = document.getElementById('stopNight');
    stopNight.classList.add('stopNight');
}