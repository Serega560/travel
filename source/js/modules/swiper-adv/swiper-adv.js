const swiperAdv = document.querySelector('[data-swiper="adv"]');
const swiperButtonPrev = document.querySelector('[data-swiper-button-prev="adv"]');
const swiperButtonNext = document.querySelector('[data-swiper-button-next="adv"]');
const desktop = window.matchMedia('(min-width: 1440px)');
const initSwiperAdv = () => {
  if (desktop.matches) {
    new window.Swiper(swiperAdv, {

      // Параметры
      direction: 'horizontal',
      loop: true,
      effect: 'slider',

      // Пагинация
      navigation: {
        nextEl: swiperButtonNext,
        prevEl: swiperButtonPrev,
      },

      breakpoints: {
        1200: {
          slidesPerView: 2.9, spaceBetween: 30, initialSlide: 0
        },
      },
      grabCursor: true,
    });
  } else {
    new window.Swiper.destroy(); // то уничтожаем его
  }
};


export {initSwiperAdv};
