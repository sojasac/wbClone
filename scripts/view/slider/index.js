import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.esm.browser.min.js'

export class SliderView {
  constructor(){
    this.slider = new Swiper('.image-slider', {
      spaceBetween: 1,
      // Стрелки
      navigation: {
        nextEl : '#slider_next',
        prevEl : '#slider_prev'
      },
      // Пагинация
      pagination: {
        el: '.image-slider__pagination',
        clickable: true,
        dynamicBullets: true
      },
      // Убираем тачлуп на пк
      // simulateTouch: false,
      watchOverflow: true,
      // Карусельность
      loop: true,
      // Автопроигрываетль
      autoplay: {
        // Скорость
        delay: 3000,
        // Выключить после русного управления
        disableOnInteraction: true,
      },
      // Скорость езды
      speed: 700,
    })
  }

}
