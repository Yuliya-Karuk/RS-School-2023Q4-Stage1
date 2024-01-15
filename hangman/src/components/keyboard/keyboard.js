/* eslint-disable class-methods-use-this */
import { createElementWithProperties } from '../../utils/utils';
import Keys from './Keys';
import './keyboard.scss';

class Keyboard {
  constructor() {
    this.keyboardList = [];
  }

  init() {
    this.keyboard = createElementWithProperties('ul', 'keyboard');
    this.renderKeyboard();
    return this.keyboard;
  }

  renderKeyboard() {
    for (let i = 0; i < Object.keys(Keys).length; i += 1) {
      const newKey = this.createKey(Keys[Object.keys(Keys)[i]]);
      this.keyboard.append(newKey);
      this.keyboardList.push(newKey);
    }
  }

  createKey(keyName) {
    const li = createElementWithProperties('li', 'key', { id: `${keyName}` });
    const button = createElementWithProperties('button', 'key__button', undefined, [
      { innerText: `${keyName}` },
    ]);
    li.append(button);
    return li;
  }

  enableKeys() {
    for (let i = 0; i < this.keyboardList.length; i += 1) {
      this.keyboardList[i].firstChild.removeAttribute('disabled');
    }
  }

  disableKeys() {
    for (let i = 0; i < this.keyboardList.length; i += 1) {
      if (!this.keyboardList[i].firstChild.hasAttribute('disabled')) {
        this.keyboardList[i].firstChild.setAttribute('disabled', 'true');
      }
    }
  }
}

export default Keyboard;
