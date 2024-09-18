function getTimeDifferenceText(start, other) {
  var diff = moment.duration(other.diff(start));
  var months = diff.months();
  var days = diff.days();
  var hours = diff.hours();
  var minutes = diff.minutes();
  var string = hours + " hours, " + minutes + " minutes";
  if (days > 0) {
    string = days + " days, " + string;
  }
  if (months > 0) {
    string = months + " months, " + string;
  }
  return string;
}

function updateTimerCaption(caption) {
  document.getElementById("timer__post").innerHTML = caption;
}

function handleEndOfEvent() {
  document.getElementById("timer").innerHTML = "<h1>Thanks for coming!</h1>";
}

(function () {
  var startTime = moment("2018-02-24 13:00:00");
  var endTime = moment("2018-02-25 15:00:00");
  var currentTime = moment();
  var timeOfInterest;

  if (currentTime < startTime) {
    timeOfInterest = startTime;
    updateTimerCaption("until hacking begins");
  } else if (currentTime > startTime && currentTime < endTime) {
    timeOfInterest = endTime;
    updateTimerCaption("until hacking ends");
  } else {
    return handleEndOfEvent();
  }

  var difference = getTimeDifferenceText(currentTime, timeOfInterest);
  document.getElementById("time").innerHTML = difference;
})();

var openingCeremonyDate = new Date("Sep 28, 2024 10:00:00").getTime();
var x = setInterval(function () {
  var currTime = new Date().getTime();
  var difference = openingCeremonyDate - currTime;

  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("countdown-days").innerHTML = days;
  // document.getElementById("countdown-hours").innerHTML = days;
  // document.getElementById("countdown-minutes").innerHTML = days;
  // document.getElementById("countdown-seconds").innerHTML = seconds;
}, 1000);
