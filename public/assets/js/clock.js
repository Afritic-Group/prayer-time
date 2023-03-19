function updateTime() {
  // create a new date object
  const currentTime = new Date();

  // format the time as hours, minutes, and seconds
  let hours = currentTime.getHours();
  let minutes = currentTime.getMinutes();
  let seconds = currentTime.getSeconds();

  hours = hours.toString().length < 2 ? `0${hours}` : hours;
  minutes = minutes.toString().length < 2 ? `0${minutes}` : minutes;
  seconds = seconds.toString().length < 2 ? `0${seconds}` : seconds;

  let ampm = hours < 12 ? "AM" : "PM";

  if (hours > 12) {
    hours -= 12;
  }

  const timeString = `${hours}:${minutes}:${seconds} ${ampm}`;

  // display the time on the page
  document.getElementById("clock").innerHTML = timeString;
}

// update the time every second
setInterval(updateTime, 1000);
