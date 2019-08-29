import { throttle } from 'throttle-debounce';

class HeroBg {
  constructor(img) {
    this.img = img;
    this.inView = false;
  }

  onScroll(e) {
    if (!this.inView) return;
    const top = window.pageYOffset;
    const scale = (top / 5000) + 1;

    this.img.style.transform = `scale(${scale})`;
  }

  _checkVieport() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          this.inView = true;
        } else {
          this.inView = false;
        }
      });
    }, { threshold: 0.1 });
    observer.observe(this.img);
  }

  _scaleImg() {
    this.onScrollThrottled = throttle(66, this.onScroll.bind(this));
    window.addEventListener('scroll', this.onScrollThrottled.bind(this));
  }

  init() {
    this._checkVieport();
    this._scaleImg();
  }
}

export default function scaleHeroBg() {
  const imgs = [].slice.call(document.querySelectorAll('.js-hero-bg'));
  if (!imgs) return;

  imgs.forEach((img) => {
    const heroBg = new HeroBg(img);
    heroBg.init();
  });
}
