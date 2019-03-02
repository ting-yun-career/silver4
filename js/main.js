$(document).ready(function(){
  $("#carousel").unitegallery({
    gallery_width: '100%',
    gallery_min_width: '100%',
    gallery_height: 600,
    gallery_min_height: 600,
    gallery_theme: 'default',
    slider_scale_mode: 'fit',
    slider_transition: "fade",
    slider_transition_speed: 1500,
    gallery_autoplay: true,
    gallery_play_interval: 6000,
  });
  $("#thumbnail-container").unitegallery({
    gallery_width: 900,
    gallery_min_width: '80%',
    gallery_theme: 'tiles',
  });
});