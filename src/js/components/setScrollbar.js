import baron from 'baron';
import { isWebkit } from '../helpers';

class Scroll {
  constructor(container) {
    this.container = container;
  }

  init() {
    this.addElements();
    this.initPlugin();
  }

  addElements() {
    this.inner = document.createElement('div');
    this.track = document.createElement('div');
    this.bar = document.createElement('div');

    const { maxHeight } = window.getComputedStyle(this.container);
    const content = this.container.innerHTML;
    this.container.innerHTML = '';

    this.inner.className = 'scrollbar__inner';
    this.inner.innerHTML = content;
    this.inner.style.maxHeight = maxHeight;
    this.track.className = 'scrollbar__track';
    this.bar.className = 'scrollbar__bar';

    this.track.appendChild(this.bar);
    this.container.appendChild(this.inner);
    this.container.appendChild(this.track);
  }

  initPlugin() {
    this.plugin = baron({
      root: this.inner,
      bar: this.bar,
    });
  }
}

export default function setScrollbar() {
  if (isWebkit) return;
  const containers = [].slice.call(document.querySelectorAll('.js-scrollbar'));

  if (!containers.length) return;

  containers.forEach((container) => {
    const scroll = new Scroll(container);
    scroll.init();
  });
}
