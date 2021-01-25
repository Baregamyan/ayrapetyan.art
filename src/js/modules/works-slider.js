import Swiper, { Autoplay, Navigation, Pagination, EffectFade } from 'swiper';

Swiper.use([Navigation, Pagination, Autoplay, EffectFade]);

const worksSlider = new Swiper('.works__slider', {
  slidesPerView: 1,
  loop: true,
  spaceBetween: 100,
  autoplay: {
    delay: 5000,
  },
  slideActiveClass: 'works__slide--active',
  navigation: {
    nextEl: '.works__slider-button--next',
    prevEl: '.works__slider-button--prev'
  },
  breakpoints: {
    768: {
      slidesPerView: 2
    },
    1440: {
      slidesPerView: 3
    }
  }
})
