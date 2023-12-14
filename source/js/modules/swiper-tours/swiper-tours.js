const swiperTours = document.querySelector('[data-swiper="tours"]');
const swiperButtonPrev = document.querySelector('[data-swiper-button-prev="tours"]');
const swiperButtonNext = document.querySelector('[data-swiper-button-next="tours"]');

const initSwiperTours = () => {
  return new window.Swiper(swiperTours, {

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
      1200: {
        slidesPerView: 3, spaceBetween: 30,
      },

      768: {
        slidesPerView: 2, spaceBetween: 18,
      },

      350: {
        slidesPerView: 1, spaceBetween: 32,
      },
    },

    grabCursor: true,
    slideToClickedSlide: true,

  });
}

export {initSwiperTours};
