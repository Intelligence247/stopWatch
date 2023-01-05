
let minutes = 0
let hrs = 0
let seconds = 0
let minutesLeading = 0
let hrsLeading = 0
const displayTimer = document.querySelector('.timer')
const play = document.querySelector('.play')


const displayFunc = () => {
    seconds++
    if (seconds / 60 === 1) {
        minutes += 1
        seconds = 0
    }
    if (minutes / 60 == 1) {
        minutes = 0
        hrs += 1
    }
    hr = hrs < 10 ? hrsLeading = '0' + hrs : hrsLeading = hrs
    minutes < 10 ? minutesLeading = `0${minutes}` : minutesLeading = minutes
    seconds = seconds < 10 ? '0' + seconds : seconds


    displayTimer.innerText = `${hrsLeading}:${minutesLeading}:${seconds}`
}
setInterval(displayFunc, 1000)