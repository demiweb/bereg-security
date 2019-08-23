import $ from 'jquery';
// import '@babel/polyfill';
import './lib/polyfill';
import sayHello from './lib/sayHello';
import { setTouch, setReady } from './components/setHTMLClassNames';
import setLazy from './components/setLazy';
import setSliders from './components/setSliders';

$(() => {
  sayHello();
  setTouch();
  setReady();
  setLazy();
  setSliders();
});
