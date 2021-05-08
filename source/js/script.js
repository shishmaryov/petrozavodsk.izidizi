$(document).ready(function () {
  $('.slider').slick({
    adaptiveHeight: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 15000
  });

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

  $(window).scroll(function () {
    if ($(this).scrollTop() > 500) {
      $('.header--fixed').addClass('header--fixed-active');
    } else {
      $('.header--fixed').removeClass('header--fixed-active');
    }
  });

  [].forEach.call(document.querySelectorAll('img[data-src]'), function (img) {
    img.setAttribute('src', img.getAttribute('data-src'));
    img.onload = function () {
      img.removeAttribute('data-src');
    };
  });

  $('.header__burger').click(function () {
    $(".nav--mobile").toggleClass("nav--mobile-active");
  });

  $('.nav--mobile__close').click(function () {
    $(".nav--mobile-active").removeClass("nav--mobile-active");
  });

  $('.button--phone').click(function () {
    $("#formPhone").toggleClass("form__wrapper--active");
    $('.modal__overlay').addClass('modal__overlay--active');
  });

  $('#closeFormPhone').click(function () {
    $("#formPhone").removeClass("form__wrapper--active");
    $('.modal__overlay').removeClass('modal__overlay--active');
  });

  $('#buttonFormDownload').click(function () {
    $("#formDownload").toggleClass("form__wrapper--active");
    $('.modal__overlay').addClass('modal__overlay--active');
  });

  $('#closeFormDownload').click(function () {
    $("#formDownload").removeClass("form__wrapper--active");
    $('.modal__overlay').removeClass('modal__overlay--active');
  });

  $('#buttonGallery').click(function () {
    $("#formGallery").toggleClass("form__wrapper--active");
    $('.modal__overlay').addClass('modal__overlay--active');
  });

  $('#closeFormGallery').click(function () {
    $("#formGallery").removeClass("form__wrapper--active");
    $('.modal__overlay').removeClass('modal__overlay--active');
  });

  $('#buttonPlan').click(function () {
    $("#formPlan").toggleClass("form__wrapper--active");
    $('.modal__overlay').addClass('modal__overlay--active');
  });

  $('#closeFormPlan').click(function () {
    $("#formPlan").removeClass("form__wrapper--active");
    $('.modal__overlay').removeClass('modal__overlay--active');
  });

  $('#buttonPlanDownload').click(function () {
    $("#formPlanDownload").toggleClass("form__wrapper--active");
    $('.modal__overlay').addClass('modal__overlay--active');
  });

  $('#closeFormPlanDownload').click(function () {
    $("#formPlanDownload").removeClass("form__wrapper--active");
    $('.modal__overlay').removeClass('modal__overlay--active');
  });

  $('#buttonConcept').click(function () {
    $("#formConcept").toggleClass("form__wrapper--active");
    $('.modal__overlay').addClass('modal__overlay--active');
  });

  $('#closeFormConcept').click(function () {
    $("#formConcept").removeClass("form__wrapper--active");
    $('.modal__overlay').removeClass('modal__overlay--active');
  });

  $('#buttonConceptDownload').click(function () {
    $("#formConceptDownload").toggleClass("form__wrapper--active");
    $('.modal__overlay').addClass('modal__overlay--active');
  });

  $('#closeFormConceptDownload').click(function () {
    $("#formConceptDownload").removeClass("form__wrapper--active");
    $('.modal__overlay').removeClass('modal__overlay--active');
  });

  $('#buttonProject').click(function () {
    $("#formProject").toggleClass("form__wrapper--active");
    $('.modal__overlay').addClass('modal__overlay--active');
  });

  $('#closeFormProject').click(function () {
    $("#formProject").removeClass("form__wrapper--active");
    $('.modal__overlay').removeClass('modal__overlay--active');
  });

  $('#buttonProjectDownload').click(function () {
    $("#formProjectDownload").toggleClass("form__wrapper--active");
    $('.modal__overlay').addClass('modal__overlay--active');
  });

  $('#closeFormProjectDownload').click(function () {
    $("#formProjectDownload").removeClass("form__wrapper--active");
    $('.modal__overlay').removeClass('modal__overlay--active');
  });

  $('#buttonQuestion').click(function () {
    $("#formQuestion").toggleClass("form__wrapper--active");
    $('.modal__overlay').addClass('modal__overlay--active');
  });

  $('#closeFormQuestion').click(function () {
    $("#formQuestion").removeClass("form__wrapper--active");
    $('.modal__overlay').removeClass('modal__overlay--active');
  });

  $('#buttonRequisites').click(function () {
    $("#formRequisites").toggleClass("form__wrapper--active");
    $('.modal__overlay').addClass('modal__overlay--active');
  });

  $('#closeFormRequisites').click(function () {
    $("#formRequisites").removeClass("form__wrapper--active");
    $('.modal__overlay').removeClass('modal__overlay--active');
  });

  $('#buttonFranch').click(function () {
    $("#formFranch").toggleClass("form__wrapper--active");
    $('.modal__overlay').addClass('modal__overlay--active');
  });

  $('#closeFormFranch').click(function () {
    $("#formFranch").removeClass("form__wrapper--active");
    $('.modal__overlay').removeClass('modal__overlay--active');
  });

  var validateForms = function (selector, rules, messages, succesModal, yaGoal) {
    new window.JustValidate(selector, {
      rules: rules,
      messages: messages,
      submitHandler: function (form) {
        var formData = new FormData(form);

        var xhr = new XMLHttpRequest();

        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4) {
              if (xhr.status === 200) {
                console.log('Отправлено');
                document.querySelector(selector).innerHTML = '<h3 class="thanks__text">Спасибо! Данные успешно отправлены</h3>';
              }
            }
          },

          xhr.open('POST', '../mail.php', true);
        xhr.send(formData);

        form.reset();
      }
    });
  };

  validateForms(
    '.form', {
      name: {
        required: true,
        minLength: 3,
        maxLength: 30
      },
      tel: {
        required: true,
        minLength: 10,
        maxLength: 30
      },
    }, {
      name: 'Введите имя',
      tel: 'Введите корректный номер телефона'
    },
    'send-goal'
  );

  validateForms(
    '.form--2', {
      name: {
        required: true,
        minLength: 3,
        maxLength: 30
      },
      tel: {
        required: true,
        minLength: 10,
        maxLength: 30
      },
    }, {
      name: 'Введите имя',
      tel: 'Введите корректный номер телефона'
    },
    'send-goal'
  );

  validateForms(
    '.form--3', {
      name: {
        required: true,
        minLength: 3,
        maxLength: 30
      },
      tel: {
        required: true,
        minLength: 10,
        maxLength: 30
      },
    }, {
      name: 'Введите имя',
      tel: 'Введите корректный номер телефона'
    },
    'send-goal'
  );

  validateForms(
    '.form--4', {
      name: {
        required: true,
        minLength: 3,
        maxLength: 30
      },
      tel: {
        required: true,
        minLength: 10,
        maxLength: 30
      },
    }, {
      name: 'Введите имя',
      tel: 'Введите корректный номер телефона'
    },
    'send-goal'
  );

  validateForms(
    '.form--5', {
      name: {
        required: true,
        minLength: 3,
        maxLength: 30
      },
      tel: {
        required: true,
        minLength: 10,
        maxLength: 30
      },
    }, {
      name: 'Введите имя',
      tel: 'Введите корректный номер телефона'
    },
    'send-goal'
  );

  validateForms(
    '.form--6', {
      name: {
        required: true,
        minLength: 3,
        maxLength: 30
      },
      tel: {
        required: true,
        minLength: 10,
        maxLength: 30
      },
    }, {
      name: 'Введите имя',
      tel: 'Введите корректный номер телефона'
    },
    'send-goal'
  );

  validateForms(
    '.form--7', {
      name: {
        required: true,
        minLength: 3,
        maxLength: 30
      },
      tel: {
        required: true,
        minLength: 10,
        maxLength: 30
      },
    }, {
      name: 'Введите имя',
      tel: 'Введите корректный номер телефона'
    },
    'send-goal'
  );

  validateForms(
    '.form--8', {
      name: {
        required: true,
        minLength: 3,
        maxLength: 30
      },
      tel: {
        required: true,
        minLength: 10,
        maxLength: 30
      },
    }, {
      name: 'Введите имя',
      tel: 'Введите корректный номер телефона'
    },
    'send-goal'
  );


  validateForms(
    '.form--9', {
      name: {
        required: true,
        minLength: 3,
        maxLength: 30
      },
      tel: {
        required: true,
        minLength: 10,
        maxLength: 30
      },
    }, {
      name: 'Введите имя',
      tel: 'Введите корректный номер телефона'
    },
    'send-goal'
  );

  validateForms(
    '.form--10', {
      name: {
        required: true,
        minLength: 3,
        maxLength: 30
      },
      tel: {
        required: true,
        minLength: 10,
        maxLength: 30
      },
    }, {
      name: 'Введите имя',
      tel: 'Введите корректный номер телефона'
    },
    'send-goal'
  );

  validateForms(
    '.form--11', {
      name: {
        required: true,
        minLength: 3,
        maxLength: 30
      },
      tel: {
        required: true,
        minLength: 10,
        maxLength: 30
      },
    }, {
      name: 'Введите имя',
      tel: 'Введите корректный номер телефона'
    },
    'send-goal'
  );
});
