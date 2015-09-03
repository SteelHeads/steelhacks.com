---
---

activeQuestion = null

addClickHandler = (el) ->
  el.addEventListener 'click', ->
    activeQuestion.classList.remove 'active'
    activeQuestion = this.parentElement
    activeQuestion.classList.add 'active'

window.onload = ->
  # Set the initial active question
  questions = document.querySelectorAll '.question'
  activeQuestion = questions[0]
  activeQuestion.classList.add 'active'

  # Set up the click handler on the question headers
  questionHeaders = document.querySelectorAll '.question__header'
  addClickHandler header for header in questionHeaders
