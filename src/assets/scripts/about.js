import "./modules/skills";
import "./modules/hero";

(function () {

  var menuWrapper = document.querySelector('.hamburger-menu__wrapper-pic');
  var hamburger = document.querySelector('.hamburger-pic');

  menuWrapper.onclick = function () {
    hamburger.classList.toggle('animate');
  }

})();



