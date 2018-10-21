import Vue from 'vue';

new Vue({
  el: '.modal-form',
  methods: {
    validator(e){
      var modalForm = document.querySelector('.modal-form');
      if(modalForm.name.value == '') {
        modalForm.name.classList.add("input_error");
        e.preventDefault();
      }
      if(modalForm.email.value == ''){
          modalForm.email.classList.add("input_error");
          e.preventDefault();
      }
      if(modalForm.message.value == ''){
          modalForm.message.classList.add("input_error");
          e.preventDefault();
      }
    },
    clearBorderName(){
      var modalForm = document.querySelector('.modal-form');
      if(modalForm.name.classList.contains('input_error')){
        modalForm.name.classList.remove('input_error');
      }
    },
    clearBorderEmail(){
      var modalForm = document.querySelector('.modal-form');
      if(modalForm.email.classList.contains('input_error')){
        modalForm.email.classList.remove("input_error");
      }
    },
    clearBorderMessage(){
      var modalForm = document.querySelector('.modal-form');
      if(modalForm.message.classList.contains('input_error')){
        modalForm.message.classList.remove("input_error");
      }
    }
  }
});


