function getTimeDifferenceText(start, other) {
  var diff = moment.duration(other.diff(start));
  var days = diff.days();
  var hours = diff.hours();
  var minutes = diff.minutes();
  var string = hours + ' hours, ' + minutes + ' minutes';
  if (days > 0) {
    string = days + ' day, ' + string;
  }
  return string;
}

function updateTimerCaption(caption) {
  document.getElementById('timer__post').innerHTML = caption;
}

function handleEndOfEvent() {
  document.getElementById('timer').innerHTML = '<h1>Thanks for coming!</h1>';
}

(function() {
  var startTime = moment('2016-02-19 20:00:00')
  var endTime = moment('2016-02-21 08:00:00')
  var currentTime = moment();
  var timeOfInterest;

  if (currentTime < startTime) {
    timeOfInterest = startTime;
    updateTimerCaption('until hacking begins');
  } else if (currentTime > startTime && currentTime < endTime) {
    timeOfInterest = endTime;
    updateTimerCaption('until hacking ends');
  } else {
    return handleEndOfEvent();
  }

  var difference = getTimeDifferenceText(currentTime, timeOfInterest);
  document.getElementById('time').innerHTML = difference;
}());
