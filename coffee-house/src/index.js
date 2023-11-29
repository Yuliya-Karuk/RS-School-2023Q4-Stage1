import Burger from './js/burger';
import Slider from './js/slider';
// import { selfEsteem2 } from './js/selfEsteem';

// console.log(selfEsteem2);

document.addEventListener('DOMContentLoaded', () => {
  const burger = new Burger();
  burger.bindListeners();
  const slider = new Slider();
  slider.bindListeners();
  slider.fillPagination();
});
