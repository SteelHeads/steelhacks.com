// Simple countdown clock
// Tim Parenti, 2011-03-13

function updateclock() {
  now = new Date();
  difference = countdownTo.getTime() - now.getTime() + 1000;
	 // add 1 sec here so we can still round the seconds down with a "rounded up" effect,
	 // i.e., clock reads "1" right up until the target instant, then reads "0".
  
  if (difference > 0) {
  
	mspersec = 1000
	mspermin = mspersec * 60
	msperhour = mspermin * 60
	msperday = msperhour * 24
	
	dayleft = Math.floor( (difference) / msperday )
	hourleft = Math.floor( (difference - (dayleft*msperday)) / msperhour )
	minleft = Math.floor( (difference - (dayleft*msperday) - (hourleft*msperhour)) / mspermin )
	secleft = Math.floor( (difference - (dayleft*msperday) - (hourleft*msperhour) - (minleft*mspermin)) / mspersec )
	
	if (hourleft<=9) { hourleft="0"+hourleft }
	if (minleft<=9) { minleft="0"+minleft }
	if (secleft<=9) { secleft="0"+secleft }
	
  }
  else {
	dayleft = 0
	hourleft = "00"
	minleft = "00"
	secleft = "00"
  }
  
  document.getElementById("cd_days").innerHTML=dayleft
  document.getElementById("cd_hours").innerHTML=hourleft
  document.getElementById("cd_minutes").innerHTML=minleft
  document.getElementById("cd_seconds").innerHTML=secleft
}

function showallclocks() {
  if (document.all||document.getElementById) {
	
	setInterval("updateclock()",100)

  } // close if

}
