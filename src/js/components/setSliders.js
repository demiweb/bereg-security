import { tns } from 'tiny-slider/src/tiny-slider';
import setLazy from './setLazy';

class Slider {
  constructor(slider, getOptions) {
    this.slider = slider;
    this.name = slider.dataset.slider;
    this.wrap = slider.closest('.slider__wrap');
    this.prev = this.wrap.querySelector('.js-prev');
    this.next = this.wrap.querySelector('.js-next');
    this.pagination = this.wrap.querySelector('.js-pagination');
    this.slides = [].slice.call(slider.querySelectorAll('.slide'));

    this.options = getOptions({
      container: this.slider,
      next: this.next,
      prev: this.prev,
      pagination: this.pagination,
    })[this.name];
  }

  init() {
    this._initSlider();
  }

  _initSlider() {
    this.myTns = tns(this.options);
  }
}

export default function setSliders() {
  const sliders = [].slice.call(document.querySelectorAll('.js-slider'));
  if (!sliders.length) return;

  function getOptions({
    container, next, prev, pagination,
  }) {
    return {
      hero: {
        container,
        items: 1,
        // navContainer: pagination,
        nav: true,
        mouseDrag: true,
        controls: false,
        onInit: setLazy,
      },
      clients: {
        container,
        items: 2,
        prevButton: prev,
        nextButton: next,
        onInit: setLazy,
        mouseDrag: true,
        nav: false,
        gutter: 30,
        responsive: {
          320: {
            items: 2,
            nav: true,
          },
          576: {
            items: 3,
            nav: false,
          },
          768: {
            items: 4,
          },
          992: {
            items: 5,
          },
        },
      },
    };
  }

  sliders.forEach((slider) => {
    const mySlider = new Slider(slider, getOptions);
    mySlider.init();
  });
}
