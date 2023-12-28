const swiperGallery = document.querySelector('[data-swiper="gallery"]');
const swiperButtonPrev = document.querySelector('[data-swiper-button-prev="gallery"]');
const swiperButtonNext = document.querySelector('[data-swiper-button-next="gallery"]');


const initSwiperGallery = () => new window.Swiper(swiperGallery, {

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
      slidesPerView: 0
    },

    768: {
      slidesPerView: 0, spaceBetween: 21, initialSlide: 4,
    },

    350: {
      slidesPerView: 0, spaceBetween: 20, initialSlide: 6,
    },
  },

  grabCursor: true,
});

export {initSwiperGallery};
