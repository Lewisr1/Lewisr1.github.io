$(document).ready(function(){
  $('.main-pics').slick({
    //dots: true,
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: 'linear',
    arrows: true,
    autoplay: true,
    autoplaySpeed: 3000
  });

  $('.condensers').slick({
    dots: true,
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: 'linear',
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000
  });
});