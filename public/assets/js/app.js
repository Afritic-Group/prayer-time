const adhan = new Audio("assets/audios/adhan.mp3");
const refBtnSetTime = document.querySelector("#btnSetTime");
const refFormSetTime = document.querySelector("#formSetTime");

let prayerTimeArray = [];
let matched = [];

function setPlayTime(inputTime) {
  // get the selected play time
  const prayerTimeValue = document.querySelector(`#${inputTime}`).value;

  //Add Prayer Object
  prayerTimeArray.push({ name: inputTime, time: prayerTimeValue });
}

function checkPlayTime() {
  const checkMatchTime = (time) => {
    const timeInput = time;
    const currentTime = new Date();

    let currentHours = currentTime.getHours();
    let currentMinutes = currentTime.getMinutes();
    let currentAMPM = currentHours >= 12 ? `PM` : `AM`;

    currentHours = currentHours % 12;
    currentHours = currentHours ? currentHours : 12;

    let inputHours = parseInt(timeInput.substr(0, 2), 10);
    let inputMinutes = parseInt(timeInput.substr(3, 2), 10);
    let inputAMPM = timeInput.substr(0, 2) >= 12 ? `PM` : `AM`;

    if (
      currentAMPM === inputAMPM &&
      currentHours === inputHours &&
      currentMinutes === inputMinutes
    ) {
      return true;
    }
  };

  prayerTimeArray.map(({ name, time }) => {
    const isAMatch = checkMatchTime(time);

    if (isAMatch) {
      if (!matched.includes(name)) {
        // Add the name of the matched Prayer
        matched.push(name);

        // Play the Athan
        adhan.play();

        // Display Speaker
        const prayerTimeSpeaker = document.querySelector(`#${name}`);
        let speakerIcon = document.createElement("i");

        speakerIcon.classList.add("speaker-on");

        prayerTimeSpeaker.insertAdjacentElement("afterend", speakerIcon);

        setTimeout(() => {
          const speakersIcon = document.querySelectorAll(".speaker-on");
          console.log("speakersIcon", speakersIcon);
          speakersIcon.forEach((icon) => {
            icon.remove();
          });
        }, 183600);
      }
    }
  });
}

// Check Time
refFormSetTime.addEventListener("submit", (e) => {
  e.preventDefault();

  // check the play time every second
  setInterval(checkPlayTime, 1000);

  refBtnSetTime.classList.add("saved");
  refBtnSetTime.textContent = "Saved";
});
