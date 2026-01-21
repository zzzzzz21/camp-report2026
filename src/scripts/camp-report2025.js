import Disclosure from './modules/disclosure';
import NavigationCurrent from './modules/navigationCurrent';
import FloatingImage from './modules/floatingImage';
import Dialog from './modules/dialog';

document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('.js-dialog').forEach(element => {
    const instance = new Dialog(element);
    instance.init();
  });
  document.querySelectorAll('.js-disclosure').forEach(element => {
    const instance = new Disclosure(element);
    instance.init();
  });

  document.querySelectorAll('.js-navigation-current').forEach(element => {
    const instance = new NavigationCurrent(element);
    instance.init();
  });
});

window.addEventListener('load', function () {
  document.querySelectorAll('.js-floating-image').forEach(element => {
    const instance = new FloatingImage(element);
    instance.init();
  });
});
