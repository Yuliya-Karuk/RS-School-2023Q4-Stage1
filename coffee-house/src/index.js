import Burger from './js/burger';
import { selfEsteem2 } from './js/selfEsteem';

console.log(selfEsteem2);

document.addEventListener('DOMContentLoaded', () => {
  const burger = new Burger();
  burger.bindListeners();
});
