var activeQuestion = null;

function addClickHandler(el) {
  return el.addEventListener('click', function() {
    if(activeQuestion) {
      activeQuestion.classList.remove('active');
    }

    if (activeQuestion === this.parentElement) {
      activeQuestion = null;
    } else {
      activeQuestion = this.parentElement;
      activeQuestion.classList.add('active');
    }
  });
}

window.addEventListener("DOMContentLoaded", function() {
  var questions = document.querySelectorAll('.question');
  activeQuestion = questions[0];
  activeQuestion.classList.add('active');
  var questionHeaders = document.querySelectorAll('.question__header');
  for (var i = 0, len = questionHeaders.length; i < len; i++) {
    var header = questionHeaders[i];
    addClickHandler(header);
  }
});
