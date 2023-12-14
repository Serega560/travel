const swiperTraining = document.querySelector('[data-swiper="training"]');
const swiperButtonPrev = document.querySelector('[data-swiper-button-prev="training"]');
const swiperButtonNext = document.querySelector('[data-swiper-button-next="training"]');


const initSwiperTraining = () => {
  return new window.Swiper(swiperTraining, {

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
        slidesPerView: 4, spaceBetween: 20,
      },

      768: {
        slidesPerView: 3, spaceBetween: 20,
      },

      350: {
        slidesPerView: 1, spaceBetween: 20,
      },
    },

    grabCursor: true,
  });
}

export {initSwiperTraining};
