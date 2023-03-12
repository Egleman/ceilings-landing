import * as flsFunction from "./modules/function.js";

flsFunction.isWebp();
flsFunction.calcWidthScroll();
flsFunction.mask();
flsFunction.openHeaderCallback();
flsFunction.rangeSlider();
flsFunction.tabs();
flsFunction.showMoreBlocks();
// flsFunction.accordion();

let im = new Inputmask({
    mask: '8 (999) 999-99-99',
    showMaskOnHover: false,
    showMaskOnFocus: false,
    jitMasking: true,
    inputmode: 'tel'
});
im.mask(document.querySelector('.masked'));

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
// var swiperTabs = new Swiper('.swiper-tabs', {
//     modules: [Navigation],
//     // freeMode: true,
//     slidesPerView: 'auto',
// })
// const swiperHeader = new Swiper('.swiper-header', {
//     // configure Swiper to use modules
//     modules: [FreeMode, Navigation, Scrollbar],
//     // FreeMode: true,
//     slidesPerView: 3,
//     allowTouchMove: true,
//     spaceBetween: 30,
//     speed: 1500,
//     slidesPerColumn: 1,
//     // loop: true,
//     // freeMode: true,
//     // sticky: true,
//     scrollbar: {
//         el: '.swiper-scrollbar',
//         hide: false,
//         draggable: true,
//         dragSize: 237
//     },
//     on: {
//         init: function () {
//             setTimeout(() => {
//                 const slider = document.querySelector('.swiper-header');
//                 const slides = slider.querySelectorAll('.header__card-block');
//                 const arrayHeight = []
//                 slides.forEach(item => {
//                     const height = window.getComputedStyle(item);
//                     arrayHeight.push(parseInt(height.height));
//                 })
//                 slides.forEach(elem => {
//                     elem.style.minHeight= `${Math.max.apply(null, arrayHeight)}px`;
//                 })
//                 console.log(arrayHeight)
//             }, 500)

//             if (window.innerWidth < 1935) {
//                 const distance = document.querySelector('.header__left').getBoundingClientRect();
//                 const swiperHeader = document.querySelector('.swiper-header');
//                 const scrollbar = document.querySelector('.swiper-scrollbar');
//                 swiperHeader.style.maxWidth = `${window.innerWidth - distance.right - 40}px`;
//                 scrollbar.style.width = `${window.innerWidth - distance.right - 40}px`;
//             } else {
//                 const distance = document.querySelector('.header__left').getBoundingClientRect();
//                 const swiperHeader = document.querySelector('.swiper-header');
//                 const scrollbar = document.querySelector('.swiper-scrollbar');
//                 swiperHeader.style.maxWidth = `1215px`;
//                 // scrollbar.style.width = `${window.innerWidth - distance.right - 40}px`;
//                 scrollbar.style.width = `1215px`;
//             }
//             window.addEventListener('resize', () => {
//                 if (window.innerWidth < 1935) {
//                     const distance = document.querySelector('.header__left').getBoundingClientRect();
//                     const swiperHeader = document.querySelector('.swiper-header');
//                     const scrollbar = document.querySelector('.swiper-scrollbar');
//                     swiperHeader.style.maxWidth = `${window.innerWidth - distance.right - 40}px`;
//                     scrollbar.style.width = `${window.innerWidth - distance.right - 40}px`;
//                 } else {
//                     // const distance = document.querySelector('.header__left').getBoundingClientRect();
//                     const swiperHeader = document.querySelector('.swiper-header');
//                     const scrollbar = document.querySelector('.swiper-scrollbar');
//                     swiperHeader.style.maxWidth = `1215px`;
//                     // scrollbar.style.width = `${window.innerWidth - distance.right - 40}px`;
//                     scrollbar.style.width = `1215px`;
//                 }
//             })
//         },
//         slideChange: function() {
//             swiperHeader.update();
//         }
//     }
// });


// let im = new Inputmask({
//     mask: '(+7|8) (999) 999-99-99',
//     showMaskOnHover: false,
//     showMaskOnFocus: false,
//     jitMasking: true,
//     inputmode: 'tel'
// });
// im.mask(phoneInput);