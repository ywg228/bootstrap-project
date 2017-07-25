$(function () {

    //预加载
    $(window).load(function () {
        $('.preloader').delay(500).fadeOut('slow');
    });

    $('.navbar-nav a').click(function () {
        $('.navbar-collapse').removeClass('in');
    });

    //初始化轮播图高度
   $('.carousel-section').css('height', $(window).height());

    $(window).resize(function () {
        $('.carousel-section').css('height', $(window).height());
    });

    //全屏轮播图
    $('.carousel-section').vegas({
        slide: 0,
        preload: true,
        timer: true,
        overlay: './images/overlay_06.png',
        autoplay: true,
        loop: true,
        shuffle: true,
        delay: 5000,
        cover: true,
        transition: 'fade',
        transitionDuration: 1000,
        slides: [
            {src: './images/slide_img01.jpg'},
            {src: './images/slide_img02.jpg'},
            {src: './images/slide_img03.jpg'}
        ]
    });

    /*$('.carousel-section').click(function () {
        $(this).vegas('next');
    });*/

    //滚动监听
    $(window).scroll(function () {
        if ($(this).scrollTop() > 200) {
            $('body').addClass('sticky-nav');
            $('.navbar-brand').addClass('animated jello');
        } else {
            $('body').removeClass('sticky-nav');
            $('.navbar-collapse').removeClass('in');
            $('.navbar-brand').removeClass('animated jello');
        }
    });

    $('body').scrollspy({
        target: '.navbar',
        offset: 60
    });

    //平滑滚动
    $('a[href*=#]:not([href=#]):not([data-toggle])').click(function () {
        console.log(123141)
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var hash = this.hash;
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html,body').animate({
                    scrollTop: target.offset().top - 60
                }, 500, function () {
                    window.location.hash = hash;
                });
                return false;
            }
        }
    });

    /*滚动显示动画*/
    var wow = new WOW({
            boxClass: 'wow',
            animateClass: 'animated',
            offset: 0,
            mobile: true,
            live: true,
            callback: function (box) {

            },
            scrollContainer: 'body'
        }
    );
    wow.init();
});