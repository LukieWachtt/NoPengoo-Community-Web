document.addEventListener("DOMContentLoaded", function() {
  var navbar = document.getElementById("navbar");

  window.onscroll = function() {
    // Check if the user has scrolled down
    var scrollPosition = window.scrollY || document.documentElement.scrollTop;

    if (scrollPosition > 20) {
      navbar.style.backgroundColor = "rgba(0, 0, 0, 0.93)";
    } else {
      navbar.style.backgroundColor = "rgba(0, 0, 0, 0)";
    }
  };
});