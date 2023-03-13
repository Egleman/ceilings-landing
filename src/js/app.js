import * as flsFunction from "./modules/function.js";

flsFunction.isWebp();
flsFunction.calcWidthScroll();
flsFunction.mask();
flsFunction.openHeaderCallback();
flsFunction.rangeSlider();
flsFunction.tabs();
flsFunction.showMoreBlocks();
flsFunction.calc();
flsFunction.playVideo();
flsFunction.accordion();

let im = new Inputmask({
    mask: '8 (999) 999-99-99',
    showMaskOnHover: false,
    showMaskOnFocus: false,
    jitMasking: true,
    inputmode: 'tel'
});
document.querySelectorAll('.masked').forEach(input => {
    im.mask(input);
})


import Swiper, { FreeMode, Navigation, Scrollbar, Pagination, Autoplay, EffectCreative, Thumbs } from 'swiper';


var swiper = new Swiper(".about-thumb", {
    modules: [FreeMode],
    loop: true,
    spaceBetween: 10,
    slidesPerView: 4,
    // freeMode: true,
    watchSlidesProgress: true,
    breakpoints: {
        0: {
            slidesPerView: 3,
        },
        606: {
            slidesPerView: 4,
        }
    }
});
var swiper2 = new Swiper(".about-swiper", {
    modules: [Navigation, Thumbs],
    loop: true,
    spaceBetween: 10,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    thumbs: {
      swiper: swiper,
    },
});
var swiper3 = new Swiper(".production-swiper", {
    modules: [Navigation, Pagination],
    loop: true,
    // spaceBetween: 35,
    // slidesPerView: 3,
    // navigation: {
    //   nextEl: ".swiper-button-next",
    //   prevEl: ".swiper-button-prev",
    // },
    pagination: {
        el: '.product-pagination',
        clickable: true
    },
    breakpoints: {
        0: {
            spaceBetween: 0,
            slidesPerView: 1,
        },
        475: {
            spaceBetween: 35,
            slidesPerView: 2,
        },
        625: {
            spaceBetween: 40,
            slidesPerView: 3,
        },
        798: {
            spaceBetween: 35,
            slidesPerView: 3,
        }
    }
});
var swiper4 = new Swiper(".swiper-certificates", {
    modules: [Navigation, Pagination],
    loop: true,
    // spaceBetween: 35,
    // slidesPerView: 3,
    // navigation: {
    //   nextEl: ".swiper-button-next",
    //   prevEl: ".swiper-button-prev",
    // },
    pagination: {
        el: '.certificates-pagination',
        clickable: true
    },
    breakpoints: {
        0: {
            spaceBetween: 0,
            slidesPerView: 1,
        },
        475: {
            spaceBetween: 35,
            slidesPerView: 2,
        },
        625: {
            spaceBetween: 40,
            slidesPerView: 3,
        },
        798: {
            spaceBetween: 35,
            slidesPerView: 3,
        }
    }
});
