import Keyboard from '../keyboard/keyboard';
import Question from '../question/question';
import data from '../../data/data';
import Keys from '../keyboard/Keys';
import Hangman from '../hangman/hangman';
import { getRandomNumber } from '../../utils/utils';
import Modal from '../modal/modal';

class GameHandler {
  constructor(parentEl) {
    this.parentEl = parentEl;
  }

  init() {
    this.questionNumber = getRandomNumber(1, 10);
    this.question = new Question();
    this.keyboard = new Keyboard();
    this.hangman = new Hangman();
    this.modal = new Modal(data[this.questionNumber].answer);
    this.parentEl.append(
      this.question.init(data[this.questionNumber]),
      this.keyboard.init(),
      this.hangman.init(),
      this.modal.init(),
    );
  }

  bindListeners() {
    this.bindVirtualKeyboardListeners();
    this.bindRealKeyboardListeners();
    this.bindModalListeners();
  }

  bindModalListeners() {
    this.modal.button.addEventListener('click', () => this.restartGame());
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
    clickedBtn.setAttribute('disabled', 'true');
    this.checkKey(key);
  }

  checkKey(key) {
    let attempt = 1;
    for (let i = 0; i < this.question.answer.length; i += 1) {
      if (this.question.answer[i] === key) {
        this.question.letterArray[i] = key;
        attempt = 0;
        this.question.renderAnswerBlock();
        console.log(this.question.letterArray);
        if (this.question.checkAnswerBlock()) this.modal.showModal('win');
      }
    }
    if (attempt === 1) {
      this.question.renderCounterBlock(attempt);
      this.hangman.showNextBodyPart(attempt);
      if (this.question.counter === 6) this.modal.showModal('lose');
    }
  }

  restartGame() {
    this.questionNumber = getRandomNumber(1, 10);
    this.question.renderInnerBlocks(data[this.questionNumber]);
    this.hangman.renderImages();
    this.modal.restartModal(data[this.questionNumber].answer);
    this.keyboard.enableKeys();
  }
}

export default GameHandler;