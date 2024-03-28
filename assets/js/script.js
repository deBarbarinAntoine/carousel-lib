"use strict"

var swiper = new Swiper('.mySwiper', {
    spaceBetween: 30,
    loop: true,
    breakpoints: {
        // 0px <= window width < 768px (phones)
        0: {
            slidesPerView: 2,
            spaceBetween: 20
        },
        // 768px <= window width < 1024px (tablets)
        768: {
            slidesPerView: 3,
            spaceBetween: 30
        },
        // 1024px <= window width (desktop)
        1024: {
            slidesPerView: 5,
            spaceBetween: 40
        },
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        prevEl: '.swiper-button-prev',
        nextEl: '.swiper-button-next',
    },
});