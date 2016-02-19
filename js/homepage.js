var activeQuestion = null;

function addClickHandler(el) {
  return el.addEventListener('click', function() {
    activeQuestion.classList.remove('active');
    activeQuestion = this.parentElement;
    return activeQuestion.classList.add('active');
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
