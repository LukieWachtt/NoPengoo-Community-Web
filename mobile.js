document.addEventListener("DOMContentLoaded", function() {
  var mobile = document.getElementById("mobile");

  window.onscroll = function() {
    // Check if the user has scrolled down
    var scrollPosition = window.scrollY || document.documentElement.scrollTop;

    if (scrollPosition > 20) {
      mobile.style.backgroundColor = "rgba(0, 0, 0, 0.93)";
    } else {
      mobile.style.backgroundColor = "rgba(0, 0, 0, 0)";
    }
  };
});