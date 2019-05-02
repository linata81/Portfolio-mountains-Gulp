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
          $('.contact-form__message ').html("<h2>Сообщение отправлено!</h2>")
          form.trigger("reset");
        });
        request.fail(function() {
          $('.contact-form__message ').addClass('message-err').html("<h2>Произошла ошибка, попробуйте позже.</h2>")
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

// request.fail(function() { // с 1 варианта но для 2 формы
//   $.modal.close();
//   $(".status-popup__error").css("display","block");
// });
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







