const playBtn = document.getElementById('play');
const musicContainer = document.querySelector('.music-player');
const audio = document.getElementById('audio');

let playing = false;

// Play song
function playSong() {
    playing = true;
    playBtn.querySelector('i.fas').classList.remove('fa-play');
    playBtn.querySelector('i.fas').classList.add('fa-pause');
    audio.play();
}

// Pause song
function pauseSong() {
    playing = false;
    playBtn.querySelector('i.fas').classList.remove('fa-pause');
    playBtn.querySelector('i.fas').classList.add('fa-play');
    audio.pause();
}


// Event listeners
playBtn.addEventListener('click', () => {
    if (playing) {
        pauseSong();
    } else {
        playSong();
    }
});

audio.addEventListener('ended', () => {
    console.log('song ended');
    playing = false;
    playBtn.querySelector('i.fas').classList.remove('fa-pause');
    playBtn.querySelector('i.fas').classList.add('fa-play');
});