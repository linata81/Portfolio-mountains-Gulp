(function() {

  var btnScrollDown = document.querySelector('.down-arrow_hero');
  var windowCoords  = document.documentElement.clientHeight;

  function scrollDown(e) {
    e.preventDefault();
    (function scroll() {
      if (window.pageYOffset < windowCoords) {
        window.scrollBy(0, 10);
        setTimeout(scroll, 0);
      }
      if (window.pageYOffset > windowCoords) {
        window.scrollTo(0, windowCoords);
      }
    })();
  }
  btnScrollDown.addEventListener('click', scrollDown);
})();

