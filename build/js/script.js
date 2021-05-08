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
  $('.header__burger').click(function () {
    $(".nav--mobile").toggleClass("nav--mobile-active");
  });
});



$(document).ready(function () {
  $('.nav--mobile__close').click(function () {
    $(".nav--mobile-active").removeClass("nav--mobile-active");
  });
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
  $('#buttonPlanDownload').click(function () {
    $("#formPlanDownload").toggleClass("form__wrapper--active");
    $('.modal__overlay').addClass('modal__overlay--active');
  });
});

$(document).ready(function () {
  $('#closeFormPlanDownload').click(function () {
    $("#formPlanDownload").removeClass("form__wrapper--active");
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
  $('#buttonConceptDownload').click(function () {
    $("#formConceptDownload").toggleClass("form__wrapper--active");
    $('.modal__overlay').addClass('modal__overlay--active');
  });
});

$(document).ready(function () {
  $('#closeFormConceptDownload').click(function () {
    $("#formConceptDownload").removeClass("form__wrapper--active");
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
  $('#buttonProjectDownload').click(function () {
    $("#formProjectDownload").toggleClass("form__wrapper--active");
    $('.modal__overlay').addClass('modal__overlay--active');
  });
});

$(document).ready(function () {
  $('#closeFormProjectDownload').click(function () {
    $("#formProjectDownload").removeClass("form__wrapper--active");
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

$(document).ready(function () {
  $('#buttonRequisites').click(function () {
    $("#formRequisites").toggleClass("form__wrapper--active");
    $('.modal__overlay').addClass('modal__overlay--active');
  });
});

$(document).ready(function () {
  $('#closeFormRequisites').click(function () {
    $("#formRequisites").removeClass("form__wrapper--active");
    $('.modal__overlay').removeClass('modal__overlay--active');
  });
});



var selector = document.querySelectorAll('input[type="tel"]');
var im = new Inputmask("+7 (999) 999-99-99");
im.mask(selector);

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
