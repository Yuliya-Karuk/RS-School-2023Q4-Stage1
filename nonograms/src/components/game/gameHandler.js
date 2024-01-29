// import { createElementWithProperties } from '../../utils/utils';
import GameFields from '../gameFields/gameFields';
import Header from '../header/header';
import Footer from '../footer/footer';
import Main from '../main/main';
import { getRandomNumber, launchTimer } from '../../utils/utils';
import { templatesByLevel, templatesByNumber } from '../../data';
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
    this.bindChooseGameListeners();
  }

  bindButtonListeners() {
    this.header.resetButton.addEventListener('click', () => this.resetGame());
    this.header.solutionButton.addEventListener('click', () => this.showSolution());
    this.header.newGameButton.addEventListener('click', () => this.chooseLevelGame());
    this.header.randomButton.addEventListener('click', () => this.renderGame());
    this.modalWin.randomButton.addEventListener('click', () => this.renderGame());
    this.modalWin.chooseGameButton.addEventListener('click', () => this.chooseLevelGame());
    for (let i = 0; i < this.modalLevel.buttonsLevelContainer.children.length; i += 1) {
      const btn = this.modalLevel.buttonsLevelContainer.children[i];
      btn.addEventListener('click', () => this.handleChooseLevel(btn.innerText));
    }
  }

  bindGameFieldListeners() {
    this.gameFields.playField.addEventListener('contextmenu', e => e.preventDefault());
    this.gameFields.playField.addEventListener('mouseup', e => this.handleClick(e));
  }

  bindChooseGameListeners() {
    for (let i = 0; i < this.modalLevel.buttonsImgContainer.children.length; i += 1) {
      const btn = this.modalLevel.buttonsImgContainer.children[i];
      btn.addEventListener('click', () => this.renderGame(btn.innerText));
    }
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

  chooseGame(gameName) {
    this.gameImage = templatesByLevel[this.modalLevel.level][gameName];
    this.size = this.gameImage.length;
    this.startField = Array.from({ length: this.size }, () => Array.from({ length: this.size }, () => 0));
  }

  renderGame(gameName) {
    this.modalWin.closeModal();
    this.modalLevel.closeModal();
    if (!gameName) this.chooseRandomGame();
    if (gameName) this.chooseGame(gameName);
    this.gameFields.changeGame(this.gameImage, this.size);
    this.resetTimer();
    this.bindGameFieldListeners();
  }

  winGame() {
    const time = this.main.timerElement.innerText;
    this.modalWin.showModal(time);
    this.resetTimer();
  }

  chooseLevelGame() {
    this.modalWin.closeModal();
    this.modalLevel.showModal();
  }

  handleChooseLevel(level) {
    this.modalLevel.renderImages(level);
    this.bindChooseGameListeners();
  }
}

export default GameHandler;
