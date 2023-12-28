const swiperAdv = document.querySelector('[data-swiper="adv"]');
const swiperButtonPrev = document.querySelector('[data-swiper-button-prev="adv"]');
const swiperButtonNext = document.querySelector('[data-swiper-button-next="adv"]');

const initSwiperAdv = () => new window.Swiper(swiperAdv, {

  // Параметры
  direction: 'horizontal',
  loop: true,
  effect: 'slider',
  slidesPerView: 1,

  // Пагинация
  navigation: {
    nextEl: swiperButtonNext,
    prevEl: swiperButtonPrev,
  },

  breakpoints: {
    1200: {
      slidesPerView: 3, spaceBetween: 120, initialSlide: 0
    },

    768: {
      slidesPerView: 2, spaceBetween: 30, initialSlide: 0
    },

    350: {
      slidesPerView: 1, spaceBetween: 20,
    },
  },

  grabCursor: true,
});

export {initSwiperAdv};
