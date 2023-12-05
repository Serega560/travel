const swiperHero = document.querySelector('[data-swiper="hero"]');

const initSwiperHero = () => {
  return new window.Swiper(swiperHero, {

    // Параметры
    direction: 'horizontal',
    loop: false,
    effect: 'slider',
    slidesPerView: 1,

    // Пагинация
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  });
}

export {initSwiperHero};
