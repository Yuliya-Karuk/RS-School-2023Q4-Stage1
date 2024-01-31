import GameFields from '../gameFields/gameFields';
import Header from '../header/header';
import Footer from '../footer/footer';
import Main from '../main/main';
import { getRandomNumber, launchTimer, convertTimeToSec } from '../../utils/utils';
import { templatesById, templatesByLevel } from '../../data';
import ModalWin from '../modalWin/modalWin';
import ModalLevel from '../modalLevel/modalLevel';
import Storage from '../../utils/storage';
import ModalScore from '../modalScore/modalScore';
import AudioHandler from '../audio/audio';
import images from '../images';

class GameHandler {
  constructor(parentEl, theme) {
    this.parentEl = parentEl;
    this.header = new Header();
    this.footer = new Footer();
    this.main = new Main();
    this.modalWin = new ModalWin();
    this.modalLevel = new ModalLevel();
    this.storage = new Storage();
    this.modalScore = new ModalScore();
    this.audioHandler = new AudioHandler();
    this.timerIsStarted = false;
    this.themes = ['dark', 'light'];
    this.theme = theme;
    this.chooseRandomGame(templatesByLevel.easy.length);
  }

  init() {
    this.parentEl.append(
      this.header.element,
      this.main.element,
      this.footer.element,
      this.modalWin.element,
      this.modalLevel.element,
      this.modalScore.element,
      this.audioHandler.audioContainer,
    );
    this.gameFields = new GameFields(this.gameImage, this.size);
    this.main.element.append(this.gameFields.element);
    this.bindButtonListeners();
    this.bindGameFieldListeners();
    this.bindChooseGameListeners();
    this.bindBurgerHandlers();
    this.parentEl.style.backgroundImage = `url(${images[this.theme].bg})`;
    this.gameFields.element.style.backgroundImage = `url(${images[this.theme].main})`;
  }

  bindButtonListeners() {
    this.header.resetButton.addEventListener('click', () => this.resetGame());
    this.header.solutionButton.addEventListener('click', () => this.showSolution());
    this.header.newGameButton.addEventListener('click', () => this.chooseLevelGame());
    this.header.randomButton.addEventListener('click', () => this.renderGame());
    this.header.scoreButton.addEventListener('click', () => this.showScoreModal());
    this.modalWin.randomButton.addEventListener('click', () => this.renderGame());
    this.modalWin.chooseGameButton.addEventListener('click', () => this.chooseLevelGame());
    for (let i = 0; i < this.modalLevel.buttonsLevelContainer.children.length; i += 1) {
      const btn = this.modalLevel.buttonsLevelContainer.children[i];
      btn.addEventListener('click', () => this.handleChooseLevel(btn.innerText));
    }
    this.modalWin.scoreButton.addEventListener('click', () => this.showScoreModal());
    this.modalScore.closeButton.addEventListener('click', () => this.modalScore.closeModal());
    this.header.saveGameButton.addEventListener('click', () => this.saveGame());
    this.header.loadGameButton.addEventListener('click', () => this.loadGame());
    this.header.switcherInput.addEventListener('change', () => this.toggleTheme());
    this.header.volumeButton.addEventListener('click', () => this.toggleVolume());
  }

  bindBurgerHandlers() {
    const context = this;

    this.header.settingsButton.addEventListener('click', () => this.toggleBurger());
    document.addEventListener('click', e => {
      if (
        !e.target.classList.contains('nav') &&
        context.header.nav.classList.contains('nav_active') &&
        !context.header.settingsButton.contains(e.target)
      )
        context.toggleBurger();
    });
  }

  bindGameFieldListeners() {
    this.gameFields.playField.addEventListener('contextmenu', e => this.handleRightClick(e));
    this.gameFields.playField.addEventListener('mouseup', e => this.handleClick(e));
  }

  bindChooseGameListeners() {
    const context = this;
    for (let i = 0; i < this.modalLevel.buttonsImgContainer.children.length; i += 1) {
      const btn = this.modalLevel.buttonsImgContainer.children[i];
      btn.addEventListener('click', () => this.renderGame(btn.innerText));
    }
    document.addEventListener('click', e => {
      if (context.modalLevel.element.classList.contains('modal_active')) e.stopPropagation();
      if (
        !e.target.classList.contains('modal__content') &&
        context.modalLevel.element.classList.contains('modal_active') &&
        e.target.classList.contains('modal')
      )
        context.modalLevel.closeModal();
    });
  }

  handleRightClick(e) {
    e.preventDefault();
    this.handleClick(e);
  }

  handleClick(e) {
    if (!this.timerIsStarted) {
      this.timerId = launchTimer(this.main.timerElement, this.main.timerElement.innerText);
      this.timerIsStarted = true;
    }
    if (
      (e.target.classList.contains('cell') && e.button === 2) ||
      (e.target.classList.contains('cell') && e.button === -1)
    ) {
      e.target.classList.remove('cell_dark');
      e.target.classList.toggle('cell_crossed');
    }
    if (e.target.classList.contains('cell') && e.button === 0) {
      e.target.classList.remove('cell_crossed');
      e.target.classList.toggle('cell_dark');
    }
    if (e.target.classList.contains('cell_dark')) {
      this.audioHandler.playAudio(this.audioHandler.lkmAudio);
    } else if (e.target.classList.contains('cell_crossed')) {
      this.audioHandler.playAudio(this.audioHandler.pkmAudio);
    } else {
      this.audioHandler.playAudio(this.audioHandler.emptyAudio);
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
    if (this.startField.toString() === this.gameFields.winField.toString()) this.winGame();
  }

  resetTimer(savedTime) {
    this.main.timerElement.innerText = savedTime || '00:00';
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

  chooseRandomGame(maxId) {
    const randomId = getRandomNumber(0, maxId || templatesById.length - 1);
    this.gameImage = templatesById[randomId].matrix;
    this.gameName = templatesById[randomId].name;
    this.size = this.gameImage.length;
    this.startField = Array.from({ length: this.size }, () => Array.from({ length: this.size }, () => 0));
  }

  chooseGame(gameName) {
    this.gameImage = templatesById.filter(el => el.name === gameName)[0].matrix;
    this.gameName = gameName;
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
    this.storage.saveResult(this.gameName, this.modalLevel.level, convertTimeToSec(time));
    this.gameFields.toggleBlockCells();
    this.modalWin.showModal(time);
    this.resetTimer();
    this.audioHandler.playAudio(this.audioHandler.winAudio);
  }

  chooseLevelGame() {
    this.modalWin.closeModal();
    this.modalLevel.showModal();
  }

  handleChooseLevel(level) {
    this.modalLevel.renderImages(level);
    this.bindChooseGameListeners();
  }

  showScoreModal() {
    this.modalWin.closeModal();
    const results = this.storage.getResults();
    this.modalScore.renderScoreList(results);
    this.modalScore.showModal();
  }

  saveGame() {
    this.storage.saveGame(this.startField, this.main.timerElement.innerText, this.gameName);
    this.resetTimer(this.main.timerElement.innerText);
  }

  loadGame() {
    const savedGameParams = this.storage.getSavedGame();
    const { matrix, timer, nameWinImage } = savedGameParams;
    this.size = matrix.length;
    this.gameName = nameWinImage;
    this.gameImage = templatesById.filter(el => el.name === this.gameName)[0].matrix;
    this.startField = matrix;
    this.gameFields.changeGame(this.gameImage, this.size, matrix);
    this.resetTimer(timer);
    this.bindGameFieldListeners();
  }

  toggleTheme() {
    const newTheme = this.themes.filter(el => el !== this.theme)[0];
    this.theme = newTheme;
    this.parentEl.style.backgroundImage = `url(${images[this.theme].bg})`;
    this.gameFields.element.style.backgroundImage = `url(${images[this.theme].main})`;
    document.documentElement.setAttribute('theme', this.theme);
  }

  toggleBurger() {
    this.header.nav.classList.toggle('nav_active');
  }

  toggleVolume() {
    if (!this.audioHandler.lkmAudio.muted) {
      this.audioHandler.toggleMuteAll(true);
    } else {
      this.audioHandler.toggleMuteAll(false);
    }
    this.header.volumeButton.classList.toggle('nav__button_volume_muted');
  }
}

export default GameHandler;
