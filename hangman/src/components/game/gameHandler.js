import Keyboard from '../keyboard/keyboard';
import Question from '../question/question';
import data from '../../data/data';
import Keys from '../keyboard/Keys';

class GameHandler {
  constructor(parentEl) {
    this.parentEl = parentEl;
  }

  init() {
    this.question = new Question(data[1]);
    this.parentEl.append(this.question.renderBlocks());
    this.keyboard = new Keyboard();
    this.parentEl.append(this.keyboard.renderKeyboard());
    this.bindVirtualKeyboardListeners();
    this.bindRealKeyboardListeners();
  }

  bindVirtualKeyboardListeners() {
    for (let i = 0; i < this.keyboard.keyboardList.length; i += 1) {
      const button = this.keyboard.keyboardList[i].firstChild;
      button.addEventListener('click', e => this.handleKey(e, button));
    }
  }

  bindRealKeyboardListeners() {
    document.addEventListener('keyup', e => this.handleKeyUp(e));
  }

  handleKeyUp(e) {
    if (Keys[e.code]) {
      const button = document.getElementById(Keys[e.code]).firstChild;
      this.handleKey(e, button);
    }
  }

  handleKey(e, clickedBtn) {
    const key = e.type === 'click' ? e.target.innerText : Keys[e.code];
    clickedBtn.setAttribute('disabled', 'disabled');
    this.checkKey(key);
  }

  checkKey(key) {
    let attempt = 1;
    for (let i = 0; i < this.question.answer.length; i += 1) {
      if (this.question.answer[i] === key) {
        this.question.letterArray[i] = key;
        attempt = 0;
      }
    }
    this.question.renderAnswerBlock();
    this.question.renderCounterBlock(attempt);
  }
}

export default GameHandler;
