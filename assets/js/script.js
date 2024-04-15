$('.reviews__slick-wrapper').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: $('.slick__prev'),
    nextArrow: $('.slick__next'),
});
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
