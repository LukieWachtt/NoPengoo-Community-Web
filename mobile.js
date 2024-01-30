document.addEventListener("DOMContentLoaded", function() {
  var mobile = document.getElementById("mobile");
  var navbar = document.getElementById("navbar");

  // Event listener for the burger icon click
  document.getElementById("burger-icon").addEventListener("click", function() {
   
    navbar.style.backgroundColor = "black";

    mobile.style.visibility = "visible";
  });

  window.onscroll = function() {

  };
});

// Javascript is confusing me wtf