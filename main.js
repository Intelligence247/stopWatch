
let minutes = 0
let hrs = 0
let seconds = 0
let milliseconds = 0
let hrsLeading = 0
let secondsleading = 0
const displayTimer = document.querySelector('.timer')
const play = document.querySelector('.play')
const reset = document.querySelector('.reset')
// Varriables for setintervals and timers
let timerInterval = null;
let timerStatus = 'stopped';
const displayFunc = () => {
    ++seconds
    if (seconds / 60 === 1) {
        minutes += 1
        seconds = 0
    }
    if (minutes / 60 == 1) {
        minutes = 0
        hrs += 1
    }
    hrs < 10 ? hrsLeading = '0' + hrs : hrsLeading = hrs
    minutes < 10 ? minutesLeading = `0${minutes}` : minutesLeading = minutes
    seconds < 10 ? secondsleading = '0' + seconds : secondsleading = seconds


    displayTimer.innerText = `${hrsLeading}:${minutesLeading}:${secondsleading}`
}
// window.setInterval(displayFunc, 10)
play.addEventListener('click', () => {
    if (timerStatus == 'stopped') {
        timerInterval = window.setInterval(displayFunc, 1000);
        const playImg = document.querySelector('#playImg')
        playImg.src = './media/pause.png'
        timerStatus = 'started'
    } else {
        window.clearInterval(timerInterval);
        const playImg = document.querySelector('#playImg')
        playImg.src = './media/play-fill.png'
        timerStatus = 'stopped'
    }
})
reset.addEventListener('click', () => {

    window.clearInterval(timerInterval)
    minutes = 0
    hrs = 0
    seconds = 0
    displayTimer.innerText = '00:00:00'
})
