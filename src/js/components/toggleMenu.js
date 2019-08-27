import $ from 'jquery';
import {
  $DOC, $BODY, IS_ACTIVE, NO_SCROLL, IS_HIDDEN,
} from '../constants';

class Burger {
  init() {
    $DOC.on('click', `.${Burger.classNames.burger}`, this.toggle.bind(this));
  }

  toggle(e) {
    e.preventDefault();
    e.stopPropagation();

    this.$btn = $(e.currentTarget);
    this.name = e.currentTarget.getAttribute('data-menu-target');
    this.$target = this.name
      ? $(`.${Burger.classNames.menu}[data-menu="${this.name}"]`)
      : $(`.${Burger.classNames.menu}`);

    this.$btn.toggleClass(IS_ACTIVE);
    this.$target.toggleClass(IS_ACTIVE);

    if (this.onToggle) {
      this.onToggle(this.$btn, this.$target);
    }
  }

  close() {
    this.$burgers = $(`.${Burger.classNames.burger}`);
    this.$targets = $(`.${Burger.classNames.menu}`);

    if (this.$burgers.length > 0 && this.$targets.length > 0) {
      this.$burgers.removeClass(IS_ACTIVE);
      this.$targets.removeClass(IS_ACTIVE);

      if (this.onClose) {
        this.onClose(this.$burgers, this.$targets);
      }
    }
  }
}

Burger.classNames = {
  burger: 'js-burger',
  menu: 'js-menu',
};

export default function toggleMenu() {
  const burger = new Burger();
  burger.onToggle = () => {
    $BODY.toggleClass(NO_SCROLL);
    // $BODY.toggleClass(HAS_OPEN_MENU);

    if (burger.name === 'menu_nav') {
      const $header = $('.header');
      $header.toggleClass(IS_HIDDEN);
    }
  };
  burger.onClose = () => {
    $BODY.removeClass(NO_SCROLL);
    // $BODY.removeClass(HAS_OPEN_MENU);

    if (burger.name === 'menu_nav') {
      const $header = $('.header');
      $header.removeClass(IS_HIDDEN);
    }
  };
  burger.init();

  // close menu
  const close = 'js-menu-close';

  $DOC.on('click', `.${close}`, (e) => {
    e.preventDefault();
    burger.close();
  });
  // $DOC.on('click', (e) => {
  //   if (!$BODY.hasClass(HAS_OPEN_MENU)) return;

  //   const $menu = $(e.target).closest('.js-menu');
  //   if (!$menu.length) {
  //     burger.close();
  //   }
  // });
}
