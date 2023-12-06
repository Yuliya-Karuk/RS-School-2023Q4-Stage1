import Burger from './js/burger';
import Slider from './js/slider';
import { selfEsteem3 } from './js/selfEsteem';

console.log(selfEsteem3);

document.addEventListener('DOMContentLoaded', () => {
  const burger = new Burger();
  burger.bindListeners();
  const slider = new Slider();
  slider.bindListeners()
  slider.fillPagination();
});
