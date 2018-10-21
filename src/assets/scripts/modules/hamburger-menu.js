const hamburgerMenu = document.querySelector('.hamburger-menu-nav');
const menuWrapper   = document.querySelector('.hamburger-menu');
const hamburger     = document.querySelector('.hamburger-pic');
const navItems      = document.querySelectorAll('.hamburger-nav__item');

menuWrapper.addEventListener("click", function(){
  hamburgerMenu.classList.toggle('js-hamburger-menu-nav_open');
  hamburger.classList.toggle('animate');
  hamburgerMenuBg();
  removeOpacity();
  changeOpacityOnTheHamburgerNav();
});


function removeOpacity(){
  for(var i=0; i <navItems.length; i++){
    navItems[i].style.opacity="0"; 
  }
}
function addOpacity(item){
  const promise = new Promise(function(resolve) {
    setTimeout(function() {
       item.style.opacity="1"; 
      }, 600);
    resolve();
  });
 return promise;
}
function changeOpacityOnTheHamburgerNav(){
  addOpacity(navItems[0])
  .then(setTimeout(function(){
    return addOpacity(navItems[1]);
  },100))
  .then(setTimeout(function(){
    return addOpacity(navItems[2]);
  },300))
  .then(setTimeout(function(){
    return addOpacity(navItems[3]);
  },500));
}
function hamburgerMenuBg(){
  hamburgerMenu.classList.remove('js-hamburger-menu-nav_bg');
  setTimeout(function() {
    hamburgerMenu.classList.add('js-hamburger-menu-nav_bg');
  }, 40);
}


