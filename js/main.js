$('.carousel').on('mouseenter', function(event) {
  $(event.target).addClass('active');
});
$('.carousel').on('mouseleave', function(event) {
  $(event.target).removeClass('active');
});