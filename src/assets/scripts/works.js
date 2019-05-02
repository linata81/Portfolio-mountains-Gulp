import "./modules/preloader";
import './modules/hero';
import './modules/slider';
import "./modules/hamburgerMenu";
import "./modules/btnScrollDown";
import "./modules/contactForm";
require('jquery-modal');


(function blur (){
  var blur = (function(){
    var wrapper = document.querySelector('.modal-form__wrapper'),
        form = document.querySelector('.modal-form__bg');
  
        return {
          set(){
            var imgWidth = document.querySelector('.reviews__bg').offsetWidth,
                posLeft = -wrapper.offsetLeft,
                posTop = -wrapper.offsetTop,
                blurCSS = form.style;
  
            blurCSS.backgroundSize = `${imgWidth}px auto`;
            blurCSS.backgroundPosition = `${posLeft}px ${posTop}px`;
  
          }
        }
  }());
  
  blur.set();
  window.onresize = function(){
    blur.set();
  }
  
})();

(function pageScrollUp (){
  var btnScrollUp   = document.querySelector('.down-arrow_my-works');
  var windowCoords  = document.documentElement.clientHeight;
  function scrollUp(e) {
    var title = document.querySelector('.my-works__title');
    var heightTitle = title.offsetHeight;
    var coords = heightTitle+windowCoords;
    e.preventDefault();
    (function scroll() {
      if (window.pageYOffset > coords) {
        window.scrollBy(0, -50);
        setTimeout(scroll, 20);
      }
    })();
  }
  btnScrollUp.addEventListener('click', scrollUp);
})();



