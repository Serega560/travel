const swiperTours = document.querySelector('[data-swiper="tours"]');
const swiperButtonPrev = document.querySelector('[data-swiper-button-prev="tours"]');
const swiperButtonNext = document.querySelector('[data-swiper-button-next="tours"]');

const initSwiperTours = () => new window.Swiper(swiperTours, {

  // Параметры
  direction: 'horizontal',
  loop: false,
  effect: 'slider',
  slidesPerView: 1,

  // Пагинация
  navigation: {
    nextEl: swiperButtonNext,
    prevEl: swiperButtonPrev,
  },

  breakpoints: {
    1199: {
      slidesPerView: 3, spaceBetween: 30, initialSlide: 3
    },

    768: {
      slidesPerView: 2, spaceBetween: 18, initialSlide: 3
    },

    350: {
      slidesPerView: 1, spaceBetween: 32, initialSlide: 3
    },
  },

  grabCursor: true,
  slideToClickedSlide: true,

});


export {initSwiperTours};
