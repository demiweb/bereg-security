import { isTouch } from '../helpers';
import { NO_TOUCH, IS_READY } from '../constants';

export function setTouch() {
  if (!isTouch) {
    document.documentElement.classList.add(NO_TOUCH);
  }
}

export function setReady() {
  document.documentElement.classList.add(IS_READY);
}
