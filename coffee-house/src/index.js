import Burger from './js/burger';
import selfEsteem1 from './js/selfEsteem';

console.log(selfEsteem1);

document.addEventListener('DOMContentLoaded', () => {
  const burger = new Burger();
  burger.bindListeners();
});
