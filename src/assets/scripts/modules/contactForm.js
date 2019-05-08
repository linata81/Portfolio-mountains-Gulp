import $, { ajax } from 'jquery';
import Inputmask from 'inputmask';
import 'jquery-validation';

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
        url  = "callback.php",
        data = form.serialize();

        var request = ajax({
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