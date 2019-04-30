var parallaxScroll = (function(){
  var bg = document.querySelector('.hero__bg');
  var sectionBg = document.querySelector('.hero__portfolio-bg');
  var user = document.querySelector('.user-block__position');
  var btn = document.querySelector('.button_hero');

  return {
    move: function(block, windowScroll, strafeAmount){
      var strafe = windowScroll / -strafeAmount + '%';
      var transformString = 'translate3d(0,'+ strafe +',0)';
      var style = block.style;
      style.transform = transformString;
      style.webkitTransform = transformString;
    },
    init: function(wScroll){
      this.move(bg, wScroll, -100);
      this.move(sectionBg, wScroll, 60);
      this.move(user, wScroll, -40);
      this.move(btn, wScroll, -40);
    }
  }
}());

window.onscroll = function(){
  var wScroll = window.pageYOffset;
  parallaxScroll.init(wScroll);
}



