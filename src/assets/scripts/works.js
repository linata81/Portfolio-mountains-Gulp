import './modules/hero';

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



