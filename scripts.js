$(document).read(function(){
$('.menu-toggle').on('click',function(){

$('.nav').toggleClass('showing')

});

$('.post-wrapper').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  });
});