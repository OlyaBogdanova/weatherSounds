"use strict";
const body = document.body, buttonsWeather = document.querySelectorAll('.button_container'), audioSun = new Audio('./sounds/summer.mp3'), audioRain = new Audio('./sounds/rain.mp3'), audioSnow = new Audio('./sounds/winter.mp3'), volume = document.querySelector('#volume-control');
let isPlayingSun, isPlayingRain, isPlayingSnow;
isPlayingSun = isPlayingRain = isPlayingSnow = false;
var Weather;
(function (Weather) {
    Weather["Sun"] = "sun";
    Weather["Rain"] = "rain";
    Weather["Snow"] = "snow";
})(Weather || (Weather = {}));
buttonsWeather.forEach((btn) => btn.addEventListener('click', () => {
    if (btn.classList.contains(Weather.Sun)) {
        if (isPlayingSun === false) {
            body.classList.remove(Weather.Snow, Weather.Rain);
            body.classList.add(Weather.Sun);
            isPlayingRain = isPlayingSnow = false;
            isPlayingSun = true;
            checkPlaying();
        }
        else {
            isPlayingSun = false;
            checkPlaying();
        }
    }
    else if (btn.classList.contains(Weather.Rain)) {
        if (isPlayingRain === false) {
            body.classList.remove(Weather.Sun, Weather.Snow);
            body.classList.add(Weather.Rain);
            isPlayingSun = isPlayingSnow = false;
            isPlayingRain = true;
            checkPlaying();
        }
        else {
            isPlayingRain = false;
            checkPlaying();
        }
    }
    else if (btn.classList.contains(Weather.Snow)) {
        if (isPlayingSnow === false) {
            body.classList.remove(Weather.Sun, Weather.Rain);
            body.classList.add(Weather.Snow);
            isPlayingSun = isPlayingRain = false;
            isPlayingSnow = true;
            checkPlaying();
        }
        else {
            isPlayingSnow = false;
            checkPlaying();
        }
    }
}));
function checkPlaying() {
    isPlayingSun ? audioSun.play() : audioSun.pause();
    isPlayingRain ? audioRain.play() : audioRain.pause();
    isPlayingSnow ? audioSnow.play() : audioSnow.pause();
}
volume.addEventListener('input', function (e) {
    audioSun.volume =
        audioRain.volume =
            audioSnow.volume =
                +e.target.value / 100;
});
