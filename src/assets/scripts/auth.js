import "./modules/preloader";
import "./modules/contactForm";


(function parallax() {
  const parallaxContainer = document.querySelector('.parallax');
  const layers            = Array.from(parallaxContainer.children);

  const moveLayers = e => {
    const initialX = (window.innerWidth / 2) - e.pageX;
    const initialY = (window.innerHeight / 2) - e.pageY;

    layers.forEach((layer,i) => {
      const divider = i / 100;
      const positionX = initialX * divider;
      const positionY = initialY * divider;
      const bottomPosition = (window.innerHeight / 2) * divider;
      const image = layer.firstElementChild;

      image.style.bottom =`-${bottomPosition}px`;
      layer.style.transform = `translate(${positionX}px, ${positionY}px)`;
    });
  }
window.addEventListener('mousemove', moveLayers);

  })();

(function spinner(){

  document.addEventListener('DOMContentLoaded', onDomReady);

  function onDomReady() {
    const auth          = document.querySelector('.button__auth');
    const spinner       = document.querySelector('.spinner');
    const welcome       = document.querySelector('.button_form[type="button"]');
    const blockNoHidden = document.querySelector('.socials__auth');
    const front         = document.querySelector('.front');

    auth.addEventListener("click", function(e){
      auth.style.display="none";
      spinner.classList.add('js-flip');
      blockNoHidden.style.display="none";
      setTimeout(function() {
        front.style.display="none";
      }, 300);
      e.stopPropagation();
    });

    welcome.addEventListener("click", function(e){
      turnBack();
      e.stopPropagation();
    });

    spinner.addEventListener("click", function(e){
      e.stopPropagation();
    });

    function turnBack() {
      auth.style.display="";
      spinner.classList.remove('js-flip');
      setTimeout(function() {
        front.style.display="";
        blockNoHidden.style.display="";
      }, 300);
    }

    document.addEventListener('click',turnBack);
  }

})();

















