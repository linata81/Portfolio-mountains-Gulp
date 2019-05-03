import "./modules/preloader";
import './modules/hero';
import './modules/slider';
import "./modules/hamburgerMenu";
import "./modules/btnScrollDown";
import "./modules/contactForm";
var $ = require('jquery');
require('jquery-modal');
require('jquery-validation');


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

//проверяем и отправляем modal-form с помощью Qjuerry 
$(document).ready(function(){

  $('#modal-form').validate({
    rules: {
      name: {
        required: true,
        minlength: 2,
        maxlength: 33
      },
      email: {
        required: true,
        email: true
      },
      message: {
        required: true,
      }
    },
    submitHandler: function() {

        var form = $('#modal-form'),
        url  = "mail.php",
        data = form.serialize();

        var request = $.ajax({
          type: 'POST',
          url: url,
          data: data
        });

        request.done(function() {
          $(".popup").show();
          $('.status-popup__success').show();
          form.trigger("reset");
        });
        request.fail(function() {
          $(".popup").show();
          $('.status-popup__error').show();
        });
    }
  });

  $('.status-popup__close').on('click', function(){
    $(".popup").hide();
    $('.status-popup__error').hide();
    $('.status-popup__success').hide();
  });
});


