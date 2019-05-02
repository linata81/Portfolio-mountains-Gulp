var $ = require('jquery');
var Inputmask = require('inputmask');
require('jquery-validation');

$(document).ready(function(){

  var phone = $(".input-phone");
  var im = new Inputmask("+7(999) 99-99-999");
  im.mask(phone);


  $('.contact-form').validate({
    rules: {
      name: {
        required: true,
        minlength: 2,
        maxlength: 33
      },
      phone: {
        required: true,
      }
    },
    submitHandler: function() {

        var form = $('.contact-form'),
        url  = "php/callback.php",
        data = form.serialize();

        var request = $.ajax({
          type: 'POST',
          url: url,
          data: data
        });

        request.done(function() {
          alert("Валидация успешна!");
          form.trigger("reset");
        });
        request.fail(function() {
          alert("Что то пошло не так!");
        });
    }
  });

});

//отправляем форму на странице мои работы с помощью Qjuerry 

// $(document).ready(function(){

//   var submitForm = function(e) {
//     e.preventDefault();
//     var form = $(e.target),
//         url  = "mail.php",
//         data = form.serialize();

//     var request = $.ajax({
//         type: 'POST',
//         url: url,
//         data: data
//     });

//     request.done(function() {
//       $('.status-popup__success').show();
//       form.trigger("reset");
//     });
//     request.fail(function() {
//       $('.status-popup__error').show();
//     });
// };

//   $('#modal-form').on('submit', submitForm);

//   $('.status-popup__close').on('click', function(e){
//     e.preventDefault();
//     $('.status-popup__error').hide();
//     $('.status-popup__success').hide();
//   });
// });























//   $('.contact-form').validate({
//     rules: {
//       name: {
//         required: true,
//         minlength: 3
//       },
//       phone : {
  
//       }
//     }
//   })







