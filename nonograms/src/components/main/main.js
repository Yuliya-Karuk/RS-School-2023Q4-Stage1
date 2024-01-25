import { createElementWithProperties } from '../../utils/utils';
import './main.scss';

class Main {
  constructor() {
    this.githubLink = 'https://github.com/Yuliya-Karuk';
    this.main = createElementWithProperties('main', 'main');
    this.init();
  }

  init() {
    this.timer = createElementWithProperties('div', 'timer');
    this.main.append(this.timer);
  }
}

export default Main;
