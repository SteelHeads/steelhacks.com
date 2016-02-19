var mobileNavVisible = false;

window.addEventListener("DOMContentLoaded", function() {
  var mobileNavButton = document.getElementById('mobile-nav-trigger');
  var menu = document.getElementById('menu');
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
});
