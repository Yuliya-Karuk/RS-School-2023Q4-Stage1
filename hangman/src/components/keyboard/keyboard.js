/* eslint-disable class-methods-use-this */
import createElementWithProperties from '../../utils/utils';
// import GameHandler from '../game/gameHandler';
import Keys from './Keys';
import './keyboard.scss';

class Keyboard {
  constructor() {
    this.keyboardList = [];
  }

  renderKeyboard() {
    this.keyboard = createElementWithProperties('ul', 'keyboard');
    for (let i = 0; i < Object.keys(Keys).length; i += 1) {
      const newKey = this.createKey(Keys[Object.keys(Keys)[i]]);
      this.keyboard.append(newKey);
      this.keyboardList.push(newKey);
    }
    return this.keyboard;
  }

  createKey(keyName) {
    const li = createElementWithProperties('li', 'key', { id: `${keyName}` });
    const button = createElementWithProperties('button', 'key__button', undefined, [
      { innerText: `${keyName}` },
    ]);
    li.append(button);
    return li;
  }
}

export default Keyboard;
