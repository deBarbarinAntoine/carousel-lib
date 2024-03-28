"use strict"

var swiper = new Swiper(".mySwiper", {
    autoHeight: true,
    slidesPerView: 3,
    spaceBetween: 30,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});