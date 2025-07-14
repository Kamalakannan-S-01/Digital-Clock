function displayTime() {
  var d = new Date();
  var hrs = d.getHours();
  var min = d.getMinutes();
  var sec = d.getSeconds();
  var session = "AM";

  if (hrs >= 12) {
    session = "PM";
  }

  if (hrs == 0) {
    hrs = 12;
  } else if (hrs > 12) {
    hrs = hrs - 12;
  }

  if (hrs < 10) hrs = "0" + hrs;
  if (min < 10) min = "0" + min;
  if (sec < 10) sec = "0" + sec;

  document.getElementById("Hours").innerHTML = hrs;
  document.getElementById("Minutes").innerHTML = min;
  document.getElementById("Seconds").innerHTML = sec;
  document.getElementById("session").innerHTML = session;
}

setInterval(displayTime, 1000);
displayTime();
