$(function(){

  $('.clients__inner-slider').slick({
    prevArrow: '<button type="button" class="slick-arrow slick-prev"><img src="images/slide-left.png"></button>',
    nextArrow: '<button type="button" class="slick-arrow slick-next"><img src="images/slide-right.png"></button>',
  });

  $('.menu__btn').on('click', function () {
    $('.menu > ul').slideToggle();
  });

  $('.howwork__list-1, .howwork__list-2, .howwork__list-3, .howwork__list-4, .howwork__list-5, .howwork__list-6').on('click', function () {
    $(this).children('p').slideToggle();
    $(this).children('div').toggleClass('div__active');
  });


});