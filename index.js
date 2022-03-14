let navMenu = document.getElementById('nav-menu');

window.onscroll = function() {scrollHeight()};

function scrollHeight() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 75;
  navMenu.style.top = scrolled + "%";
}