const playButton = document.getElementById("play");
const pauseButton = document.getElementById("pause");
const photo = document.getElementById("photo");

const myAudio = document.getElementById("myAudio");
const progressBar = document.getElementById("progressBar");

let isPaused = false;

function changeBackground(){
    var colors = ["#bdbdbd","#de2146"];
    switch(isPaused){
        case true:
            document.body.style.background = colors[0];
            photo.style.borderColor = colors[0];
            break;
        case false:
            document.body.style.background = colors[1];
            photo.style.borderColor = colors[1];
            break;
    }
}

function updateProgressBar(){
    progressBar.max = myAudio.duration;
    progressBar.value = myAudio.currentTime;
}

function changeProgressBar() {
    myAudio.currentTime = progressBar.value;
};

function playAudio() {
    isPaused = false;
    myAudio.play();
    changeBackground();
    if(!isPaused){
        play.style.display = 'none';
        pause.style.display = '';
    }
}
function pauseAudio() {
    isPaused = true;
    myAudio.pause();
    if(isPaused){
        changeBackground();
        play.style.display = '';
        pause.style.display = 'none';
    }
}

window.onload = function(){
    playButton.style.display = '';
    pauseButton.style.display = 'none';
    setInterval(updateProgressBar, 1000);
}