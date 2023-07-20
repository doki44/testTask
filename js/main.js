$(document).ready(function () {
    
    $('.portfolio__slider').slick({
        arrows: false,
        dots: true,
        slidesToShow: 4,
        slidesToScroll: 4,
        rows: 2,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 800,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 550,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });

    $(window).scroll(function () {
        if ($(this).scrollTop() != 0) {
            $('.top-btn').fadeIn();
        } else {
            $('.top-btn').fadeOut();
        }
    });
    $('.top-btn').click(function () {
        $('body,html').animate({ scrollTop: 0 }, 1000);
    });

    $('.header__burger').on('click', function () {
        $('.header__burger, .menu__list').toggleClass('active');
        $('body').toggleClass('lock');
    });

});