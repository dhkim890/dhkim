// listen for when the user clicks on the hamburger icon
$('.hamburger').on('click', function(){
  // $('.menu').addClass('open')
  // // if menu is closed, slide down
  // if ($('.menu').hasClass('open')) {
  //   $('.menu').removeClass('open');
  // } else {
  //   // if menu in open, slide up
  //   $('.menu').addClass('open');
  // }
  $('.menu').toggleClass('open');
});
