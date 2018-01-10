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

    //要素フレームイン時のアクション-----------------

    //メイン内画像ズーム
    $('.js-inview').on('inview', function (event, isInView, visiblePartX, visiblePartY) {
        if (isInView) {
            $(this).stop().addClass('show');
        } else {
            $(this).stop().removeClass('show');
        }
    });

    //トップページヘッダーフェードイン
    $('.js-inview-slide').on('inview', function (event, isInView, visiblePartX, visiblePartY) {
        if (isInView) {
            $(this).stop().addClass('show-fade');
        } else {
            $(this).stop().removeClass('show-fade');
        }
    });

    //ヘッダー内ナビゲーションフェードイン
    $('.js-inview-header').on('inview', function (event, isInView, visiblePartX, visiblePartY) {
        if (isInView) {
            $(this).stop().addClass('show-fade');
        } else {
            $(this).stop().removeClass('show-fade');
        }
    });

    $('.show-drop').on('inview', function (event, isInView, visiblePartX, visiblePartY) {
        if (isInView) {
            $(this).stop().addClass('show-drop2');
        } else {
            $(this).stop().removeClass('show-drop2');
        }
    });


    //フッターナブでページトップに戻る--------------------
    $(".gnav-footer-top").stop().click(function () {
        $("html,body").stop().animate({
            scrollTop: 0
        }, 700);
        return false;
    });
});
