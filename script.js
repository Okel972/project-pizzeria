$(document).ready(function(){
  $('.slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    dots: true,
  });
  
    $('.slider').on('swipe', function(event, slick, direction){
      console.log(direction);
      // left
    });
  });