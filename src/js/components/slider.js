import Swiper, { Autoplay, Navigation, Pagination } from 'swiper';
Swiper.use([Navigation, Pagination, Autoplay]);
const swiper = new Swiper('.swiper', {
  slidesPerView: 'auto',
  pagination: {
    el: ".swiper-pagination",
  },
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  }
});

