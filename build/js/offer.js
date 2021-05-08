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
    '.form--1', {
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

