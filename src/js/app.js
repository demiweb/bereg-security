import $ from 'jquery';
// import '@babel/polyfill';
import './lib/polyfill';
import sayHello from './lib/sayHello';
import setHTMLClassNames from './components/setHTMLClassNames';
import setLazy from './components/setLazy';
import setSliders from './components/setSliders';
import setScrollbar from './components/setScrollbar';
import setFixedHeader from './components/setFixedHeader';
import toggleMenu from './components/toggleMenu';
import setTextareaHeight from './components/setTextareaHeight';
import setInputMask from './components/setInputMask';
import setPopups from './components/setPopups';

$(() => {
  sayHello();
  setHTMLClassNames();
  setLazy();
  setSliders();
  setScrollbar();
  setFixedHeader();
  toggleMenu();
  setTextareaHeight();
  setInputMask();
  setPopups();
});
