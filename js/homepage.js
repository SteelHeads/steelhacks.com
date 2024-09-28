var activeQuestion = null;

function addClickHandler(el) {
  return el.addEventListener("click", function () {
    if (activeQuestion) {
      activeQuestion.classList.remove("active");
    }

    if (activeQuestion === this.parentElement) {
      activeQuestion = null;
    } else {
      activeQuestion = this.parentElement;
      activeQuestion.classList.add("active");
    }
  });
}

window.addEventListener("DOMContentLoaded", function () {
  var questions = document.querySelectorAll(".question");
  activeQuestion = questions[0];
  var questionHeaders = document.querySelectorAll(".question__header");
  for (var i = 0, len = questionHeaders.length; i < len; i++) {
    var header = questionHeaders[i];
    addClickHandler(header);
  }
});

var openingCeremonyDate = new Date("Sep 29, 2024 11:00:00").getTime();
var x = setInterval(function () {
  var currTime = new Date().getTime();
  var difference = openingCeremonyDate - currTime;

  var days = Math.floor(difference / (1000 * 60 * 60 * 24));
  var hours = Math.floor(
    (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  var minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((difference % (1000 * 60)) / 1000);

  console.log(days);
  document.getElementById("countdown-hours").innerHTML = hours;
  document.getElementById("countdown-minutes").innerHTML = minutes;
  document.getElementById("countdown-seconds").innerHTML = seconds;
}, 1000);
