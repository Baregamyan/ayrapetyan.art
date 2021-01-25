import Swiper, { Autoplay, Navigation, Pagination, EffectFade } from 'swiper';

Swiper.use([Navigation, Pagination, Autoplay, EffectFade]);

const homeSlider = new Swiper('.home__slider', {
  loop: true,
  spaceBetween: 100,
  autoplay: {
    delay: 5000,
  },
  pagination: {
    el: '.home__slider-pagination',
    type: 'bullets',
    bulletClass: 'home__slider-bullet',
    bulletActiveClass: 'home__slider-bullet--current',
    bulletElement: 'button',
    clickable: true
  }
});

