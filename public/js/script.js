$(function () {

    //slick-------------------------------------
    $(".header-slide").slick({
        autoplay: true,
        autoplayspeed: 500,
        fade: true,
        pauseOnHover: false,
        arrows: false
    });

    //ハンバーガーメニュー-------------------------

    $(".menu-trigger").stop().click(function () {
        $(this).stop().toggleClass("active");
        $(".gnav-320").stop().slideToggle();
        return false;
    });

    //要素フレームインで表示-----------------------

    $('.js-inview').on('inview', function (event, isInView, visiblePartX, visiblePartY) {
        if (isInView) {
            $(this).stop().addClass('anime');
        } else {
            $(this).stop().removeClass('anime');
        }
    });

    $('.js-inview-slide').on('inview', function (event, isInView, visiblePartX, visiblePartY) {
        if (isInView) {
            $(this).stop().addClass('anime-header');
        } else {
            $(this).stop().removeClass('anime-header');
        }
    });

    $('.js-inview-header').on('inview', function (event, isInView, visiblePartX, visiblePartY) {
        if (isInView) {
            $(this).stop().addClass('anime-header');
        } else {
            $(this).stop().removeClass('anime-header');
        }
    });

    //フッターナブでホームに戻る--------------------

    $(".gnav-footer-top").stop().click(function () {
        $("html,body").stop().animate({
            scrollTop: 0
        }, 700);
        return false;
    });

});
