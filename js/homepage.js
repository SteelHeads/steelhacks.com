var activeQuestion, addClickHandler, mobileNavVisible;

activeQuestion = null;

mobileNavVisible = false;

addClickHandler = function(el) {
  return el.addEventListener('click', function() {
    activeQuestion.classList.remove('active');
    activeQuestion = this.parentElement;
    return activeQuestion.classList.add('active');
  });
};

window.onload = function() {
  var header, i, len, menu, mobileNavButton, questionHeaders, questions;
  questions = document.querySelectorAll('.question');
  activeQuestion = questions[0];
  activeQuestion.classList.add('active');
  questionHeaders = document.querySelectorAll('.question__header');
  for (i = 0, len = questionHeaders.length; i < len; i++) {
    header = questionHeaders[i];
    addClickHandler(header);
  }
  mobileNavButton = document.getElementById('mobile-nav-trigger');
  menu = document.getElementById('menu');
  return mobileNavButton.addEventListener('click', function(event) {
    event.preventDefault();
    if (!mobileNavVisible) {
      menu.classList.add('visible');
    }
    if (mobileNavVisible) {
      menu.classList.remove('visible');
    }
    return mobileNavVisible = !mobileNavVisible;
  });
};
