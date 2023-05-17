import Swiper, { Navigation } from 'swiper';
import 'swiper/swiper-bundle.min.css';
import { supportList } from '../components/support-list';
import { createImageItemMurkup } from './createMarkupSupport';

const supportContainer = document.querySelector('.swiper-wrapper');
const imageMarkup = createImageItemMurkup(supportList);

supportContainer.insertAdjacentHTML('beforeend', imageMarkup);

new Swiper('.swiper-container', {
  modules: [Navigation],
  direction: 'vertical',
  slidesPerView: 4,
  spaceBetween: 20,
  rewind: true,
  speed: 400,
  loop: true,
  paginationClickable: true,
  grabCursor: true,
  waitForTransition: false,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    1440: {
      slidesPerView: 6,
      spaceBetween: 20,
    },
  },
});
