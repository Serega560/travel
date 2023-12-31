const swiperHero = document.querySelector('[data-swiper="hero"]');

const initSwiperHero = () => new window.Swiper(swiperHero, {

  // Параметры
  direction: 'horizontal',
  loop: true,
  effect: 'slider',
  slidesPerView: 1,

  // Пагинация
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});

export {initSwiperHero};
