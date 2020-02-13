$(function(){


  $(".rate-star").rateYo({
    rating: 5,
    starWidth: "12px",
    spacing: "2px",
    readOnly: true
  });

  $('.product__slider-inner').slick({
    slidesToShow: 4,
    slidesToScroll: 4,
    dots: true,
    arrows: false,

  });


  var mixer = mixitup('.products__inner-box');

  
})