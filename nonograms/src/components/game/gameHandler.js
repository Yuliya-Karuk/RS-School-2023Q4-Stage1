// import { createElementWithProperties } from '../../utils/utils';
import GameFields from '../gameFields/gameFields';
import Header from '../header/header';
import Footer from '../footer/footer';
import Main from '../main/main';
import { launchTimer } from '../../utils/utils';

class GameHandler {
  constructor(parentEl) {
    this.parentEl = parentEl;
    this.header = new Header();
    this.footer = new Footer();
    this.main = new Main();
    this.gameFields = new GameFields(0);
    this.size = 15;
    this.startField = Array.from({ length: this.size }, () => Array.from({ length: this.size }, () => 0));
    this.timerIsStarted = false;
  }

  init() {
    this.main.element.append(this.gameFields.element);
    this.parentEl.append(this.header.element, this.main.element, this.footer.element);
    this.bindListeners();
  }

  bindListeners() {
    this.header.resetButton.addEventListener('click', () => this.resetGame());
    this.header.solutionButton.addEventListener('click', () => this.showSolution());
    this.gameFields.playField.addEventListener('contextmenu', e => e.preventDefault());
    this.gameFields.playField.addEventListener('mouseup', e => this.handleClick(e));
  }

  handleClick(e) {
    if (!this.timerIsStarted) {
      this.startTimer();
      this.timerIsStarted = true;
    }
    if (e.target.classList.contains('cell') && e.button === 2) {
      e.target.classList.remove('cell_dark');
      e.target.classList.toggle('cell_crossed');
    }
    if (e.target.classList.contains('cell') && e.button === 0) {
      e.target.classList.remove('cell_crossed');
      e.target.classList.toggle('cell_dark');
    }
    this.fillStartField(e);
    this.checkEndGame();
  }

  fillStartField(e) {
    const indexesArray = e.target.id.split('.').map(el => Number(el));
    if (e.button === 0) {
      const num = e.target.classList.contains('cell_dark') ? 1 : 0;
      this.startField[indexesArray[0]][indexesArray[1]] = num;
    }
  }

  checkEndGame() {
    if (this.startField.toString() === this.gameFields.winField.toString()) console.log('win');
  }

  startTimer() {
    this.timerId = launchTimer(this.main.timerElement);
  }

  resetTimer() {
    this.main.timerElement.innerText = '00:00';
    this.timerIsStarted = false;
    clearInterval(this.timerId);
  }

  resetGame() {
    this.resetTimer();
    this.gameFields.startField = Array.from({ length: this.size }, () => Array.from({ length: this.size }, () => 0));
    this.gameFields.renderPlayField();
  }

  showSolution() {
    this.resetTimer();
    this.gameFields.renderSolution();
  }
}

export default GameHandler;
