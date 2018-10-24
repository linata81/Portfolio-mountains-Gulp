import "./modules/preloader";
import "./modules/hero";
import "./modules/blogComponent";
import "./modules/hamburgerMenu";
import "./modules/asideMenu";
import "./modules/btnScrollDown";

(function asideMenuOpen(){
  var semicircle = document.querySelector('.semicircle');
  var menu = document.querySelector('.aside-menu');

  semicircle.addEventListener('click', function(){
    menu.classList.toggle('js-aside-open');
  })
})();




