import "./modules/preloader";
import "./modules/hero";
import "./modules/hamburgerMenu";
import "./modules/asideMenu";
import "./modules/btnScrollDown";

var menu = document.querySelector('.aside-menu');
var semicircle = document.querySelector('.semicircle');

(function asideMenuOpen(){
  semicircle.addEventListener('click', function(){
    menu.classList.toggle('js-aside-open');
  })
})();

(function asideMenuClose(){
  function closePanel(){
    document.addEventListener('click', function(e){
      menu.classList.remove('js-aside-open');
      e.stopPropagation();
    });
  }
  if (document.body.clientWidth<480) {
    document.addEventListener('DOMContentLoaded', closePanel);
    semicircle.addEventListener('click', function(e){
      e.stopPropagation();
    });
    menu.addEventListener('click', function(e){
      e.stopPropagation();
    })
  }
})();



