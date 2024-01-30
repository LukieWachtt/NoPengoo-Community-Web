document.addEventListener("DOMContentLoaded", function() {
  var mobile = document.getElementById("mobile");
  var navbar = document.getElementById("navbar");

  // Event listener for the burger icon click
  document.getElementById("burger-icon").addEventListener("click", function() {
    // Toggle the background color when the burger icon is clicked
    navbar.style.backgroundColor = navbar.style.backgroundColor === "rgba(0, 0, 0, 0.93)" ? "rgba(0, 0, 0, 0.93)" : "rgba(0, 0, 0, 0.93)";
  });

  window.onscroll = function() {
    // No need to update the background color on scroll for mobile
  };
});
