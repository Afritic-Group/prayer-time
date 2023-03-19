const adhan = new Audio("assets/audios/adhan.mp3");
const refBtnSetTime = document.querySelector("#btnSetTime");
const refPlayTime = document.querySelector("#playTime");
let playTime;

function setPlayTime() {
  // get the selected play time
  playTime = new Date(refPlayTime.value);
}

function checkPlayTime() {
  if (playTime !== undefined) {
    // get the current time
    let currentTime = new Date();

    currentTime.setMilliseconds(0);
    playTime.setMilliseconds(0);

    // check if the local time matches the play time
    if (currentTime.toISOString() === playTime.toISOString()) {
      // play the Adhan
      adhan.play();
    }
  }
}

// Check Time
refBtnSetTime.addEventListener("click", () => {
  // check the play time every second
  setInterval(checkPlayTime, 1000);
});
