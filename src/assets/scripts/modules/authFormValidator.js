import Vue from 'vue';

new Vue({
  el: '.auth-form',
  methods: {
    validator(e){
      var authForm = document.querySelector('.auth-form');
      if(authForm.name.value == '') {
        e.preventDefault();
        authForm.name.parentNode.classList.add("authError");
      }
      if(authForm.pass.value == '') {
        e.preventDefault();
        authForm.pass.parentNode.classList.add("authError");
      }
      if(authForm.human.checked == false) {
        e.preventDefault();
        authForm.human.parentNode.classList.add("authError");
      }
      if(authForm.answer.value !== "да") {
        e.preventDefault();
        document.getElementById('input_yes').parentNode.style="color:#e34844";
      }
      e.preventDefault();
      // authForm.splice(0, authForm.length);
      alert (11111);
    },
    clearBorderName(){
      var authForm = document.querySelector('.auth-form');
      if(authForm.name.parentNode.classList.contains('authError')){
        authForm.name.parentNode.classList.remove('authError');
      }
    },
    clearBorderPass(){
      var authForm = document.querySelector('.auth-form');
      if(authForm.pass.parentNode.classList.contains('authError')){
        authForm.pass.parentNode.classList.remove('authError');
      }
    },
    clearCheckbox(){
      var authForm = document.querySelector('.auth-form');
      if(authForm.human.parentNode.classList.contains('authError')){
        authForm.human.parentNode.classList.remove('authError');
      }
    },
    answerYes() {
      document.getElementById('input_yes').parentNode.style="color: #00bfa5";
    }

  }
});



