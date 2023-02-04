const swiper = new Swiper('.swiper', {
        // Optional parameters
        slidesPerView: 3,
        direction: 'horizontal',
        spaceBetween: 30,
        setWrapperSize: true,
        width: 950,
        grabCursor: true,
        preloadImages: true,
        preventClicks: true,
        rewind: true,
        slideToClickedSlide: true,
        // If we need pagination
        pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
        },

        // Navigation arrows
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });
$(window).scroll(function() {
    let scroll = $(window).scrollTop();
    if (scroll > 20) {
        $('div.nav-item-1').css({
            "padding": "40px 10px 35px 10px",
            "background": "rgba(255,255,255,1)"
        })
    }
    else {
        $('div.nav-item-1').css({
            "padding": "23px 10px 15px 10px",
            "background": "none"
        })
    }
});
function goTo(where) {
        document.getElementById(where).scrollIntoView({block: "center", behavior: "smooth"});
}