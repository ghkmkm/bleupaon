$(function () {
    $(".header-slide").slick({
        autoplay: true,
        autoplayspeed: 400,
        fade: true,
        pauseOnHover: false
    });

    $(".menu-trigger").stop().click(function () {
        $(this).stop().toggleClass("active");
        $(".gnav").stop().slideToggle();
        return false;
    });

    $('.js-inview').on('inview', function (event, isInView, visiblePartX, visiblePartY) {
        if (isInView) {
            $(this).stop().addClass('anime');
        } else {
            $(this).stop().removeClass('anime');
        }
    });

});
