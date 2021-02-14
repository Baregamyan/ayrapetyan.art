import Swiper, { Autoplay, Navigation, Pagination, EffectFade } from 'swiper';

Swiper.use([Navigation, Pagination, Autoplay, EffectFade]);

const homeSlider = new Swiper('.home__slider-container', {
  loop: true,
  spaceBetween: 100,
  autoplay: {
    delay: 5000,
  },
  pagination: {
    el: '.home__slider-progressbar',
    type: 'progressbar',
    progressbarFillClass: 'home__slider-progressbar-fill'
  }
});

