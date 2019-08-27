import { throttle } from 'throttle-debounce';

const IS_SHORT = 'is-short';
const HAS_SHORT_HEADER = 'has-short-header';

class Header {
  constructor(header) {
    this.header = header;
    this.out = document.querySelector('.out');
    this.OFFSET = 100;
    this.lastScrollTop = 0;
  }

  init() {
    this.toggleHeader();
  }

  addShortClasses() {
    this.header.classList.add(IS_SHORT);
    // this.out.classList.add(HAS_SHORT_HEADER);
  }

  removeShortClasses() {
    this.header.classList.remove(IS_SHORT);
    this.out.classList.remove(HAS_SHORT_HEADER);
  }

  scroll(e) {
    const st = window.pageYOffset || document.documentElement.scrollTop;
    if (st > this.lastScrollTop) {
      this.addShortClasses();
    } else {
      this.removeShortClasses();
    }

    this.lastScrollTop = st <= 0 ? 0 : st;
  }

  toggleHeader() {
    this.onScroll = throttle(66, this.scroll.bind(this));
    window.addEventListener('scroll', this.onScroll);
  }
}

export default function setFixedHeader() {
  const header = document.querySelector('.js-header');
  if (!header) return;

  const hd = new Header(header);
  hd.init();
}
