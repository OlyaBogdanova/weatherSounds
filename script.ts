const body = document.body as HTMLElement,
    buttonsWeather = document.querySelectorAll(
        '.button_container'
    ) as NodeListOf<Element>,
    audioSun = new Audio('./sounds/summer.mp3') as HTMLAudioElement,
    audioRain = new Audio('./sounds/rain.mp3') as HTMLAudioElement,
    audioSnow = new Audio('./sounds/winter.mp3') as HTMLAudioElement,
    volume = document.querySelector('#volume-control') as HTMLInputElement;

let isPlayingSun: boolean, isPlayingRain: boolean, isPlayingSnow: boolean;
isPlayingSun = isPlayingRain = isPlayingSnow = false;

enum Weather {
    Sun = 'sun',
    Rain = 'rain',
    Snow = 'snow',
}

buttonsWeather.forEach((btn: Element) =>
    btn.addEventListener('click', () => {
        if (btn.classList.contains(Weather.Sun)) {
            if (isPlayingSun === false) {
                body.classList.remove(Weather.Snow, Weather.Rain);
                body.classList.add(Weather.Sun);
                isPlayingRain = isPlayingSnow = false;
                isPlayingSun = true;
                checkPlaying();
            } else {
                isPlayingSun = false;
                checkPlaying();
            }
        } else if (btn.classList.contains(Weather.Rain)) {
            if (isPlayingRain === false) {
                body.classList.remove(Weather.Sun, Weather.Snow);
                body.classList.add(Weather.Rain);
                isPlayingSun = isPlayingSnow = false;
                isPlayingRain = true;
                checkPlaying();
            } else {
                isPlayingRain = false;
                checkPlaying();
            }
        } else if (btn.classList.contains(Weather.Snow)) {
            if (isPlayingSnow === false) {
                body.classList.remove(Weather.Sun, Weather.Rain);
                body.classList.add(Weather.Snow);
                isPlayingSun = isPlayingRain = false;
                isPlayingSnow = true;
                checkPlaying();
            } else {
                isPlayingSnow = false;
                checkPlaying();
            }
        }
    })
);
function checkPlaying(): void {
    isPlayingSun ? audioSun.play() : audioSun.pause();
    isPlayingRain ? audioRain.play() : audioRain.pause();
    isPlayingSnow ? audioSnow.play() : audioSnow.pause();
}

volume.addEventListener('input', function (e: Event) {
    audioSun.volume =
        audioRain.volume =
        audioSnow.volume =
            +(e.target as HTMLInputElement).value / 100;
});
