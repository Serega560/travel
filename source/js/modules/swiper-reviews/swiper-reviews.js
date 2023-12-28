const swiperReviews = document.querySelector('[data-swiper="reviews"]');
const swiperButtonPrev = document.querySelector('[data-swiper-button-prev="reviews"]');
const swiperButtonNext = document.querySelector('[data-swiper-button-next="reviews"]');

const initSwiperReviews = () => new window.Swiper(swiperReviews, {

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
      slidesPerView: 1.6, spaceBetween: 120, initialSlide: 0
    },

    768: {
      slidesPerView: 1.2, spaceBetween: 30, initialSlide: 0
    },

    350: {
      slidesPerView: 1, spaceBetween: 20,
    },
  },

  grabCursor: true,
});

export {initSwiperReviews};
