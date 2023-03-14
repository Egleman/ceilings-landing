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
flsFunction.scrollButtons();
flsFunction.openModal();

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

document.addEventListener('DOMContentLoaded', function() {
    function hasTouchDevice() {
      return !!('ontouchstart' in window || navigator.maxTouchPoints);
    }
    if (!hasTouchDevice()) {
      const toUp = document.querySelectorAll('.calc__card-countwr a');
      toUp.forEach(link => {
        link.classList.add('hover');
        link.onmouseenter = function(){
            link.classList.add('hover');
          }
        link.onmouseleave = function() {
            link.classList.remove('hover');
        }
      })
      
    }
  });

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
            spaceBetween: 15,
            slidesPerView: 2,
        },
        625: {
            spaceBetween: 15,
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
        500: {
            spaceBetween: 15,
            slidesPerView: 2,
        },
        798: {
            spaceBetween: 15,
            slidesPerView: 3,
        },
        1230: {
            spaceBetween: 15,
            slidesPerView: 4,
        }
    }
});
var swiper5 = new Swiper(".modal-swiper", {
    modules: [Navigation],
    loop: true,
    spaceBetween: 0,
    slidesPerView: 1,
    navigation: {
      nextEl: ".slider__next",
      prevEl: ".slider__prev",
    },
});