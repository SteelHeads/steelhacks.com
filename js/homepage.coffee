---
---

activeQuestion = null
mobileNavVisible = false

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

  # Mobile navbar trigger
  mobileNavButton = document.getElementById 'mobile-nav-trigger'
  menu = document.getElementById 'menu'
  mobileNavButton.addEventListener 'click', (event)->
    event.preventDefault()
    menu.classList.add 'visible' unless mobileNavVisible
    menu.classList.remove 'visible' if mobileNavVisible
    mobileNavVisible = !mobileNavVisible

  # Mock signup button click
  signupButton = document.getElementById 'signup-button'
  signupButton.addEventListener 'click', (event)->
    event.preventDefault()
    alert 'Sign up button clicked'

