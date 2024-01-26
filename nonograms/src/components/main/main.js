import { createElementWithProperties } from '../../utils/utils';
import './main.scss';

class Main {
  constructor() {
    this.githubLink = 'https://github.com/Yuliya-Karuk';
    this.element = createElementWithProperties('main', 'main');
    this.init();
  }

  init() {
    this.timerElement = createElementWithProperties('div', 'timer', undefined, [{ innerText: `00:00` }]);
    this.element.append(this.timerElement);
  }
}

export default Main;
