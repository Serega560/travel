import {iosVhFix} from './utils/ios-vh-fix';
import {Form} from './modules/form-validate/form';
import {initSwiperHero} from './modules/swiper-hero/swiper-hero.js';
import {initVideo} from './modules/video.js';
import {initSwiperTours} from './modules/swiper-tours/swiper-tours.js';
import {initSwiperTraining} from './modules/swiper-training/swiper-training.js';
import {initSwiperReviews} from './modules/swiper-reviews/swiper-reviews.js';
import {initSwiperAdv} from './modules/swiper-adv/swiper-adv.js';
import {initSwiperGallery} from './modules/swiper-gallery/swiper-gallery.js';

window.addEventListener('DOMContentLoaded', () => {
  initSwiperHero();
  iosVhFix();

  window.addEventListener('load', () => {
    const form = new Form();
    window.form = form;
    form.init();
    initVideo();
    initSwiperTours();
    initSwiperTraining();
    initSwiperReviews();
    initSwiperAdv();
    initSwiperGallery();

    const header = document.querySelector('.header');
    const button = header.querySelector('.header__burger');
    button.addEventListener('click', () => header.classList.toggle('header--nav-opened'));
  });
});
