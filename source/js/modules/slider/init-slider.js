import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
const advantages = document.querySelector('.advantages');
const advantagesSwiper = advantages.querySelector('.advantages__swiper');
const btnNext = advantages.querySelector('.advantages__button--next');
const btnPrev = advantages.querySelector('.advantages__button--prev');
const advantagesGlobalSwiper = advantages.querySelector('.advantages__global-swiper');
const nextBtn = advantages.querySelector('.advantages__global-button--next');
const prevBtn = advantages.querySelector('.advantages__global-button--prev');
const pagination = advantages.querySelector('.advantages__pagination');
const paginationSecond = advantages.querySelector('.advantages__global-pagination');


const getSlider = () => {
  let advantagesSlider;
  let advantagesGlobalSlider;

  if (advantagesSwiper) {
    advantagesSlider = new Swiper(advantagesSwiper, {
      modules: [Navigation, Pagination],

      direction: 'horizontal',
      loop: true,
      speed: 1000,
      enabled: false,
      breakpoints: {
        320: {
          enabled: true,
          slidesPerView: 1,
          centeredSlides: true,
          spaceBetween: 15,
        },
        480: {
          enabled: true,
          centeredSlides: false,
          slidesPerView: 2,
          spaceBetween: 25,
        },
        641: {
          enabled: false,
          slidesPerView: 2,
        },

        960: {
          enabled: false,
          slidesPerView: 'auto',
        },
      },
      navigation: {
        nextEl: btnNext,
        prevEl: btnPrev,
      },
      pagination: {
        el: pagination,
        type: 'bullets',
        clickable: true,
      },
    });
  }

  if (advantagesGlobalSwiper) {
    advantagesGlobalSlider = new Swiper(advantagesGlobalSwiper, {
      modules: [Navigation, Pagination],

      direction: 'horizontal',
      loop: true,
      speed: 1000,
      enabled: false,
      breakpoints: {
        320: {
          enabled: true,
          centeredSlides: true,
          slidesPerView: 1,
          spaceBetween: 15,
        },
        480: {
          enabled: true,
          centeredSlides: false,
          slidesPerView: 2,
          spaceBetween: 26,
        },
        641: {
          centeredSlides: false,
          enabled: false,
          slidesPerView: 'auto',
        },
      },
      navigation: {
        nextEl: nextBtn,
        prevEl: prevBtn,
      },
      pagination: {
        el: paginationSecond,
        type: 'bullets',
        clickable: true,
      },
    });
  }
  return { advantagesSlider, advantagesGlobalSlider };
};

export { getSlider };
