$(document).ready(function () {
  $('.slider').slick({
    adaptiveHeight: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 15000
  });
});

$(document).ready(function () {
  $('.nav__link').click(function (e) {
    if ($(this).attr('href').indexOf('#') != -1) {
      e.preventDefault();
      var href = $(this).attr('href').replace('#', '');
      if ($('#' + href).length > 0) {
        var tophref = $('body').find('#' + href).offset().top;
        $('html, body').animate({
          scrollTop: tophref
        }, 800);
      }
    }
  });
});

$(window).scroll(function () {
  if ($(this).scrollTop() > 500) {
    $('.header--fixed').addClass('header--fixed-active');
  } else {
    $('.header--fixed').removeClass('header--fixed-active');
  }
});

$(document).ready(function () {
      $('.button--phone').click(function () {
            $("#formPhone").toggleClass("form__wrapper--active");
            $('.modal__overlay').addClass('modal__overlay--active');
});
});

$(document).ready(function () {
  $('#closeFormPhone').click(function () {
        $("#formPhone").removeClass("form__wrapper--active");
        $('.modal__overlay').removeClass('modal__overlay--active');
});
});

$(document).ready(function () {
  $('#buttonFormDownload').click(function () {
        $("#formDownload").toggleClass("form__wrapper--active");
        $('.modal__overlay').addClass('modal__overlay--active');
});
});

$(document).ready(function () {
$('#closeFormDownload').click(function () {
    $("#formDownload").removeClass("form__wrapper--active");
    $('.modal__overlay').removeClass('modal__overlay--active');
});
});

$(document).ready(function () {
  $('#buttonGallery').click(function () {
        $("#formGallery").toggleClass("form__wrapper--active");
        $('.modal__overlay').addClass('modal__overlay--active');
});
});

$(document).ready(function () {
$('#closeFormGallery').click(function () {
    $("#formGallery").removeClass("form__wrapper--active");
    $('.modal__overlay').removeClass('modal__overlay--active');
});
});

$(document).ready(function () {
  $('#buttonPlan').click(function () {
        $("#formPlan").toggleClass("form__wrapper--active");
        $('.modal__overlay').addClass('modal__overlay--active');
});
});

$(document).ready(function () {
$('#closeFormPlan').click(function () {
    $("#formPlan").removeClass("form__wrapper--active");
    $('.modal__overlay').removeClass('modal__overlay--active');
});
});

$(document).ready(function () {
  $('#buttonConcept').click(function () {
        $("#formConcept").toggleClass("form__wrapper--active");
        $('.modal__overlay').addClass('modal__overlay--active');
});
});

$(document).ready(function () {
$('#closeFormConcept').click(function () {
    $("#formConcept").removeClass("form__wrapper--active");
    $('.modal__overlay').removeClass('modal__overlay--active');
});
});

$(document).ready(function () {
  $('#buttonProject').click(function () {
        $("#formProject").toggleClass("form__wrapper--active");
        $('.modal__overlay').addClass('modal__overlay--active');
});
});

$(document).ready(function () {
$('#closeFormProject').click(function () {
    $("#formProject").removeClass("form__wrapper--active");
    $('.modal__overlay').removeClass('modal__overlay--active');
});
});

$(document).ready(function () {
  $('#buttonQuestion').click(function () {
        $("#formQuestion").toggleClass("form__wrapper--active");
        $('.modal__overlay').addClass('modal__overlay--active');
});
});

$(document).ready(function () {
$('#closeFormQuestion').click(function () {
    $("#formQuestion").removeClass("form__wrapper--active");
    $('.modal__overlay').removeClass('modal__overlay--active');
});
});
