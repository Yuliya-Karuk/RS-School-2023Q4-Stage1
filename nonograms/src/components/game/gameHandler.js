// import { createElementWithProperties } from '../../utils/utils';
import GameFields from '../gameFields/gameFields';
import Header from '../header/header';
import Footer from '../footer/footer';
import Main from '../main/main';
import { getRandomNumber, launchTimer } from '../../utils/utils';
import { templatesByNumber } from '../../data';
import ModalWin from '../modalWin/modalWin';
import ModalLevel from '../modalLevel/modalLevel';

class GameHandler {
  constructor(parentEl) {
    this.parentEl = parentEl;
    this.header = new Header();
    this.footer = new Footer();
    this.main = new Main();
    this.modalWin = new ModalWin();
    this.modalLevel = new ModalLevel();
    this.timerIsStarted = false;
    this.chooseRandomGame();
  }

  init() {
    this.parentEl.append(
      this.header.element,
      this.main.element,
      this.footer.element,
      this.modalWin.element,
      this.modalLevel.element,
    );
    this.gameFields = new GameFields(this.gameImage, this.size);
    this.main.element.append(this.gameFields.element);
    this.bindButtonListeners();
    this.bindGameFieldListeners();
  }

  bindButtonListeners() {
    this.header.resetButton.addEventListener('click', () => this.resetGame());
    // this.header.solutionButton.addEventListener('click', () => this.showSolution());
    this.header.solutionButton.addEventListener('click', () => this.winGame());
    this.header.randomButton.addEventListener('click', () => this.renderRandomGame());
    this.modalWin.randomButton.addEventListener('click', () => this.renderRandomGame());
    this.modalWin.chooseGameButton.addEventListener('click', () => this.chooseGame());
  }

  bindGameFieldListeners() {
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

  chooseRandomGame() {
    const randomId = getRandomNumber(0, templatesByNumber.length);
    this.gameImage = templatesByNumber[randomId];
    this.size = this.gameImage.length;
    this.startField = Array.from({ length: this.size }, () => Array.from({ length: this.size }, () => 0));
  }

  renderRandomGame() {
    this.modalWin.closeModal();
    this.chooseRandomGame();
    this.gameFields.changeGame(this.gameImage, this.size);
    this.resetTimer();
    this.bindGameFieldListeners();
  }

  winGame() {
    const time = this.main.timerElement.innerText;
    this.modalWin.showModal(time);
    this.resetTimer();
  }

  chooseGame() {
    this.modalWin.closeModal();
    this.modalLevel.showModal();
  }
}

export default GameHandler;
