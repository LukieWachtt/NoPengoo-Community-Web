document.addEventListener("DOMContentLoaded", function() {
  var navbar = document.getElementById("navbar");

  window.addEventListener("scroll", function() {
    // Check if the user has scrolled down
    var scrollPosition = window.scrollY || document.documentElement.scrollTop;

    // Set a threshold value for the scroll position
    var threshold = 20;

    if (scrollPosition > threshold) {
      navbar.style.backgroundColor = "rgba(0, 0, 0, 0.93)";
    } else {
      navbar.style.backgroundColor = "rgba(0, 0, 0, 0)";
    }
  });
});