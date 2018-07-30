$('.carousel_item').on('mouseenter', function(event) {
  $(event.target).addClass('active');
});
$('.carousel_item').on('mouseleave', function(event) {
  $(event.target).removeClass('active');
});