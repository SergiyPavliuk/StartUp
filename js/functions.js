$(function () {
    /*============================*/
    /* 01 - function on page load */
    /*============================*/
    $(window).load(function () {
        $('body').addClass('loaded');
        $('#loader-wrapper').fadeOut(500);
    });
    /*============================*/
    /* 02 - Click menu */
    /*============================*/
    $(window).resize(function () {
        var windW = $(window).width();
        if (windW > 769 && $('.navi ul').is(':hidden')) {
            $('.navi ul').removeAttr('style');
        }
    });
    $('.nav-btn').click(function () {
        $(this).toggleClass('active');
        $('.navi ul').slideToggle();
    });

    /*============================*/
    /* 03 - SCROll */
    /*============================*/
    var $menu = $(".site-nav");

    $(window).scroll(function () {
        if ($(this).scrollTop() > 50 && $menu.hasClass("site-nav")) {
            $menu.removeClass("site-nav").addClass("fix-nav");
        } else if ($(this).scrollTop() <= 50 && $menu.hasClass("fix-nav")) {
            $menu.removeClass("fix-nav").addClass("site-nav");
        }
    });

    /*============================*/
    /* 04 - Swiper */
    /*============================*/
    var mySwiperAboutSlider = new Swiper('.about .swiper-container', {
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        loop: true,
        grabCursor: true,
        speed: 800,
        slidesPerView: 4,
        spaceBetween: 30,
        breakpoints: {
            // when window width is <= 767px
            767: {
                slidesPerView: 1
            },
            // when window width is <= 991px
            991: {
                slidesPerView: 2
            },
            // when window width is <= 1199px
            1199: {
                slidesPerView: 3,
                spaceBetween: 10
            }
        }
    });
    var mySwiperClientsSlider = new Swiper('.clients .swiper-container', {
        pagination: '.swiper-pagination',
        paginationClickable: true,
        loop: true,
        grabCursor: true,
        speed: 800,
        slidesPerView: 1,
        autoplay: true
    });

    /*============================*/
    /* 05 - ISOTOPE */
    /*============================*/

    var $container = $('.grid').isotope({
        itemSelector: '.element-item',
        layoutMode: 'masonry',
        masonry: {
            columnWidth: '.element-item'
        }
    });
    $('#filters').on('click', 'button', function () {
        $('#filters button').removeClass('is-checked');
        $(this).addClass('is-checked');
        var filterValue = $(this).attr('data-filter');
        $container.isotope({
            filter: filterValue
        });
    });
    /*============================*/
    /* 06 - Scrollt2id */
    /*============================*/
    $("a[href*='#']").mPageScroll2id();
});
