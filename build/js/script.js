$(document).ready(function(){
  $('.slider').slick({
    adaptiveHeight: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 15000
  });
});

$(document).ready(function(){
  $('.nav__link').click(function(e){
      if($(this).attr('href').indexOf('#') != -1){
      e.preventDefault();
            var href = $(this).attr('href').replace('#', '');
      if($('#'+href).length > 0){
              var tophref = $('body').find('#'+href).offset().top;
              $('html, body').animate({scrollTop: tophref}, 800);
      }
    }
    });
});

$(window).scroll(function(){
  if ($(this).scrollTop() > 500) {
      $('.header--fixed').addClass('header--fixed-active');
  } else {
    $('.header--fixed').removeClass('header--fixed-active');
  }
});