var wrapper             = document.querySelector('.wrapper');
var images              = document.images;
var images_total_count  = images.length;
var images_loaded_count = 0;
var preloader           = document.querySelector('.preloader');
var perc_display        = document.querySelector('.load_perc');

for(var i = 0; i < images_total_count; i++){
  var image_clone     = new Image();
  image_clone.onload  = image_loaded;
  image_clone.onerror = image_loaded;
  image_clone.src     = images[i].src;
}

function image_loaded(){
  images_loaded_count ++;
  perc_display.innerHTML = (( (100 / images_total_count) * images_loaded_count) << 0) + ' %';
  if(images_loaded_count >= images_total_count) {
    if(!preloader.classList.contains('js-done')){
      preloader.classList.add('js-done');
    }
    wrapper.style.opacity="1";
  }
}
