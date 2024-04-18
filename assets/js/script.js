$('.reviews__slick-wrapper').slick(
    {
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        prevArrow: $('.slick__prev'),
        nextArrow: $('.slick__next'),
    }
);
$('.reviews__slick-wrapper-video').slick(
    {
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        prevArrow: $('.slick__prev-video'),
        nextArrow: $('.slick__next-video'),
    }
);
$(document).ready(function () {
    $('.question__acc-body').slideUp();
    $('.question__acc-head').click(function () {
        var $accBody = $(this).next('.question__acc-body');
        $accBody.slideToggle();
        $(this).find('.arrow').toggleClass('down');
        $('.question__acc-body').not($accBody).slideUp();
        $('.question__acc-head').not($(this)).find('.arrow').removeClass('down');
    });
});
$(document).ready(function () {
    var minutes = parseInt($('.time span:eq(0)').text());
    var seconds = parseInt($('.time span:eq(1)').text());
    var totalSeconds = minutes * 60 + seconds;
    var timer = setInterval(function () {
        totalSeconds--;
        if (totalSeconds < 0) {
            clearInterval(timer);
        }
        else {
            var minutesLeft = Math.floor(totalSeconds / 60);
            var secondsLeft = totalSeconds % 60;
            $('.time span:eq(0)').text(minutesLeft);
            $('.time span:eq(1)').text(secondsLeft);
        }
    }, 1000);
});
$(".get__popup").click(function () {
    $(".modalbox").toggleClass("modalbox__active");
});
$(".modal__send").submit(function (event) {
    event.preventDefault();
    $(".modalbox__second").fadeIn();
});
$(".open__tel").click(function () {
    $(this).css("display", "none")
})
$(function () {
    $(document).click((e) => {
        const { target } = e;
        if (target.nodeName === 'A' && target.getAttribute('href') === '#') {
            e.preventDefault();
        }
    });
});
$(document).ready(function () {
    var links = $('.zone__nav-links-random li a');
    var randomIndex = Math.floor(Math.random() * links.length);
    var randomLink = links.eq(randomIndex);

    randomLink.css('color', '#2CB742');
});
$('.find__map-tel-input').hide();

$('.find__map-tel-btn').prop('disabled', true);

$(document).ready(function () {
    // Функция, которая будет вызываться при изменении значения первого поля ввода
    $('input[placeholder="Укажите ваш адрес"]').on('input', function () {
        var addressValue = $(this).val();

        // Проверяем, содержит ли первое поле ввода значение
        if (addressValue) {
            // Если содержит, то показываем второе поле ввода
            $('.find__map-tel-input').show();
        } else {
            // Если не содержит, то скрываем второе поле ввода
            $('.find__map-tel-input').hide();
        }
    });

    // Функция, которая будет вызываться при изменении значений обоих полей ввода
    function checkFields() {
        var addressValue = $('input[placeholder="Укажите ваш адрес"]').val();
        var telValue = $('.find__map-tel-input').val();

        // Проверка наличия значений в обоих полях
        if (addressValue && telValue) {
            $('.btn__red').prop('disabled', false); // Включаем кнопку
        } else {
            $('.btn__red').prop('disabled', true); // Выключаем кнопку
        }
    }

    // Привязываем функцию к событиям изменения значений в полях ввода
    $('input[placeholder="Укажите ваш адрес"], .find__map-tel-input').on('input', checkFields);
});