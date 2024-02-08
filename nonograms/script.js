/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/components/audio/audio.js":
/*!***************************************!*\
  !*** ./src/components/audio/audio.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _audio_lkm2_mp3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../audio/lkm2.mp3 */ "./src/audio/lkm2.mp3");
/* harmony import */ var _audio_pkm2_mp3__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../audio/pkm2.mp3 */ "./src/audio/pkm2.mp3");
/* harmony import */ var _audio_empty2_mp3__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../audio/empty2.mp3 */ "./src/audio/empty2.mp3");
/* harmony import */ var _audio_win2_mp3__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../audio/win2.mp3 */ "./src/audio/win2.mp3");
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils/utils */ "./src/utils/utils.js");
/* eslint-disable class-methods-use-this */





class AudioHandler {
  constructor() {
    this.audioContainer = (0,_utils_utils__WEBPACK_IMPORTED_MODULE_4__.createElementWithProperties)('div', 'audio');
    this.init();
  }
  init() {
    this.lkmAudio = (0,_utils_utils__WEBPACK_IMPORTED_MODULE_4__.createElementWithProperties)('audio', 'audio_lkm', {
      src: _audio_lkm2_mp3__WEBPACK_IMPORTED_MODULE_0__
    });
    this.pkmAudio = (0,_utils_utils__WEBPACK_IMPORTED_MODULE_4__.createElementWithProperties)('audio', 'audio_pkm', {
      src: _audio_pkm2_mp3__WEBPACK_IMPORTED_MODULE_1__
    });
    this.emptyAudio = (0,_utils_utils__WEBPACK_IMPORTED_MODULE_4__.createElementWithProperties)('audio', 'audio_empty', {
      src: _audio_empty2_mp3__WEBPACK_IMPORTED_MODULE_2__
    });
    this.winAudio = (0,_utils_utils__WEBPACK_IMPORTED_MODULE_4__.createElementWithProperties)('audio', 'audio_win', {
      src: _audio_win2_mp3__WEBPACK_IMPORTED_MODULE_3__
    });
    this.audioContainer.append(this.lkmAudio, this.pkmAudio, this.emptyAudio, this.winAudio);
  }
  playAudio(audio) {
    const playedAudio = audio;
    playedAudio.currentTime = 0;
    playedAudio.play();
  }
  toggleMuteAll(bool) {
    this.pkmAudio.muted = bool;
    this.lkmAudio.muted = bool;
    this.emptyAudio.muted = bool;
    this.winAudio.muted = bool;
  }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AudioHandler);

/***/ }),

/***/ "./src/components/cell/cell.js":
/*!*************************************!*\
  !*** ./src/components/cell/cell.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/utils */ "./src/utils/utils.js");
/* harmony import */ var _cell_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cell.scss */ "./src/components/cell/cell.scss");


const CellStates = {
  empty: 'cell',
  dark: 'cell cell_dark',
  crossed: 'cell cell_crossed'
};
class Cell {
  constructor(id, realValue) {
    let state = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'empty';
    this.id = id;
    this.realValue = realValue;
    this.state = state;
    this.element = (0,_utils_utils__WEBPACK_IMPORTED_MODULE_0__.createElementWithProperties)('li', CellStates[this.state], {
      id: this.id,
      realValue: this.realValue
    });
  }
  bindListeners() {
    this.element.addEventListener('contextmenu', e => e.preventDefault(), false);
    this.element.addEventListener('selectstart', e => e.preventDefault());
  }

  // get state() {
  //   return this.state;
  // }

  changeState(value) {
    this.state = value;
    this.element.className = CellStates[this.state];
  }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Cell);

/***/ }),

/***/ "./src/components/footer/footer.js":
/*!*****************************************!*\
  !*** ./src/components/footer/footer.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/utils */ "./src/utils/utils.js");
/* harmony import */ var _footer_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./footer.scss */ "./src/components/footer/footer.scss");


class Footer {
  constructor() {
    this.githubLink = 'https://github.com/Yuliya-Karuk';
    this.RSLink = 'https://github.com/rolling-scopes-school/tasks/tree/master/stage1';
    this.element = (0,_utils_utils__WEBPACK_IMPORTED_MODULE_0__.createElementWithProperties)('footer', 'footer');
    this.init();
  }
  init() {
    const footerWrapper = (0,_utils_utils__WEBPACK_IMPORTED_MODULE_0__.createElementWithProperties)('div', 'footer__wrapper');
    const linkGithub = (0,_utils_utils__WEBPACK_IMPORTED_MODULE_0__.createElementWithProperties)('a', 'footer__link', {
      href: `${this.githubLink}`
    }, [{
      innerText: 'Yuliya'
    }]);
    const githubImg = (0,_utils_utils__WEBPACK_IMPORTED_MODULE_0__.createElementWithProperties)('span', 'footer__img footer__img_github');
    const linkRS = (0,_utils_utils__WEBPACK_IMPORTED_MODULE_0__.createElementWithProperties)('a', 'footer__link', {
      href: `${this.RSLink}`,
      'aria-label': 'link to RS School'
    });
    const rsImg = (0,_utils_utils__WEBPACK_IMPORTED_MODULE_0__.createElementWithProperties)('span', 'footer__img footer__img_rs');
    linkGithub.append(githubImg);
    linkRS.append(rsImg);
    footerWrapper.append(linkGithub, linkRS);
    this.element.append(footerWrapper);
  }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Footer);

/***/ }),

/***/ "./src/components/gameFields/gameFields.js":
/*!*************************************************!*\
  !*** ./src/components/gameFields/gameFields.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/utils */ "./src/utils/utils.js");
/* harmony import */ var _cell_cell__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../cell/cell */ "./src/components/cell/cell.js");
/* harmony import */ var _gameFields_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./gameFields.scss */ "./src/components/gameFields/gameFields.scss");



const GameMood = {
  5: 'easy',
  10: 'medium',
  15: 'hard'
};
const MatrixState = {
  0: 'empty',
  '-1': 'crossed',
  1: 'dark'
};
class GameFields {
  constructor(winImage, mood) {
    this.mode = GameMood[mood];
    this.winField = winImage;
    this.element = (0,_utils_utils__WEBPACK_IMPORTED_MODULE_0__.createElementWithProperties)('div', `game-field game-field_${this.mode}`);
    this.cellsArray = [];
    this.init();
  }
  init(savedGame) {
    this.element.innerHTML = '';
    const gameFieldContainer = (0,_utils_utils__WEBPACK_IMPORTED_MODULE_0__.createElementWithProperties)('div', 'game-field__container');
    const gameRowFirst = (0,_utils_utils__WEBPACK_IMPORTED_MODULE_0__.createElementWithProperties)('div', 'game-field__row');
    this.topClues = (0,_utils_utils__WEBPACK_IMPORTED_MODULE_0__.createElementWithProperties)('div', 'top-clues');
    const gameRowSecond = (0,_utils_utils__WEBPACK_IMPORTED_MODULE_0__.createElementWithProperties)('div', 'game-field__row');
    this.playField = (0,_utils_utils__WEBPACK_IMPORTED_MODULE_0__.createElementWithProperties)('ul', `play-field play-field_${this.mode}`);
    this.leftClues = (0,_utils_utils__WEBPACK_IMPORTED_MODULE_0__.createElementWithProperties)('div', 'left-clues');
    if (!savedGame) this.renderPlayField();
    if (savedGame) this.renderSavedField(savedGame);
    this.renderClues();
    gameRowFirst.append(this.topClues);
    gameRowSecond.append(this.leftClues, this.playField);
    gameFieldContainer.append(gameRowFirst, gameRowSecond);
    this.element.append(gameFieldContainer);
  }
  renderPlayField() {
    this.cellsArray = [];
    this.playField.innerHTML = '';
    this.playField.classList.remove('play-field_blocked');
    for (let i = 0; i < this.winField.length; i += 1) {
      this.winField[i].forEach((el, index) => {
        const newCell = new _cell_cell__WEBPACK_IMPORTED_MODULE_1__["default"](`${i}.${index}`, `${el}`);
        // const newCell = createElementWithProperties('li', 'cell', { id: `${i}.${index}`, realValue: `${el}` });
        // newCell.addEventListener('contextmenu', e => e.preventDefault(), false);
        // newCell.addEventListener('selectstart', e => e.preventDefault());
        this.cellsArray.push(newCell);
        this.playField.append(newCell.element);
      });
    }
    console.log('Solution for easier Cross Check', this.winField);
  }
  renderClues() {
    this.clues = (0,_utils_utils__WEBPACK_IMPORTED_MODULE_0__.countClues)(this.winField);
    this.renderLeftClue();
    this.renderTopClue();
  }
  renderLeftClue() {
    const leftClues = (0,_utils_utils__WEBPACK_IMPORTED_MODULE_0__.createArrayOneSize)(this.clues[0]);
    for (let i = 0; i < leftClues.length; i += 1) {
      const newRow = (0,_utils_utils__WEBPACK_IMPORTED_MODULE_0__.createElementWithProperties)('div', 'left-clues__row');
      for (let j = 0; j < leftClues[i].length; j += 1) {
        const newCell = (0,_utils_utils__WEBPACK_IMPORTED_MODULE_0__.createElementWithProperties)('span', 'clue', undefined, [{
          innerText: `${leftClues[i][j]}`
        }]);
        newRow.append(newCell);
      }
      this.leftClues.append(newRow);
    }
  }
  renderTopClue() {
    const topClues = (0,_utils_utils__WEBPACK_IMPORTED_MODULE_0__.createArrayOneSize)(this.clues[1]);
    for (let i = 0; i < topClues.length; i += 1) {
      const newRow = (0,_utils_utils__WEBPACK_IMPORTED_MODULE_0__.createElementWithProperties)('div', 'top-clues__column');
      for (let j = 0; j < topClues[i].length; j += 1) {
        const newCell = (0,_utils_utils__WEBPACK_IMPORTED_MODULE_0__.createElementWithProperties)('span', 'clue', undefined, [{
          innerText: `${topClues[i][j]}`
        }]);
        newRow.append(newCell);
      }
      this.topClues.append(newRow);
    }
  }
  renderSolution() {
    for (let i = 0; i < this.cellsArray.length; i += 1) {
      if (this.cellsArray[i].realValue === '1') {
        this.cellsArray[i].changeState('dark');
      } else {
        this.cellsArray[i].changeState('empty');
      }
    }
    this.blockCells();
  }
  blockCells() {
    this.playField.classList.add('play-field_blocked');
  }
  resetCells() {
    for (let i = 0; i < this.cellsArray.length; i += 1) {
      this.cellsArray[i].changeState('empty');
    }
    this.playField.classList.remove('play-field_blocked');
  }
  changeGame(winImage, mood, savedGame) {
    this.mode = GameMood[mood];
    this.winField = winImage;
    this.element.classList = `game-field game-field_${this.mode}`;
    this.init(savedGame);
  }
  renderSavedField(savedGame) {
    this.cellsArray = [];
    this.playField.innerHTML = '';
    this.playField.classList.remove('play-field_blocked');
    for (let i = 0; i < savedGame.length; i += 1) {
      savedGame[i].forEach((el, index) => {
        const newCell = new _cell_cell__WEBPACK_IMPORTED_MODULE_1__["default"](`${i}.${index}`, `${el === -1 ? 0 : el}`);
        // const newCell = createElementWithProperties('li', 'cell', { id: `${i}.${index}`, realValue: `${el}` });
        // newCell.addEventListener('contextmenu', e => e.preventDefault(), false);
        // newCell.addEventListener('selectstart', e => e.preventDefault());
        newCell.changeState(MatrixState[el]);
        this.cellsArray.push(newCell);
        this.playField.append(newCell.element);
      });
    }
  }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (GameFields);

/***/ }),

/***/ "./src/components/game/gameHandler.js":
/*!********************************************!*\
  !*** ./src/components/game/gameHandler.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _gameFields_gameFields__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../gameFields/gameFields */ "./src/components/gameFields/gameFields.js");
/* harmony import */ var _header_header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../header/header */ "./src/components/header/header.js");
/* harmony import */ var _footer_footer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../footer/footer */ "./src/components/footer/footer.js");
/* harmony import */ var _main_main__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../main/main */ "./src/components/main/main.js");
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils/utils */ "./src/utils/utils.js");
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../data */ "./src/data/index.js");
/* harmony import */ var _modalWin_modalWin__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../modalWin/modalWin */ "./src/components/modalWin/modalWin.js");
/* harmony import */ var _modalLevel_modalLevel__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../modalLevel/modalLevel */ "./src/components/modalLevel/modalLevel.js");
/* harmony import */ var _utils_storage__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../utils/storage */ "./src/utils/storage.js");
/* harmony import */ var _modalScore_modalScore__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../modalScore/modalScore */ "./src/components/modalScore/modalScore.js");
/* harmony import */ var _audio_audio__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../audio/audio */ "./src/components/audio/audio.js");
/* eslint-disable no-nested-ternary */
/* eslint-disable class-methods-use-this */











class GameHandler {
  constructor(parentEl, theme) {
    this.parentEl = parentEl;
    this.header = new _header_header__WEBPACK_IMPORTED_MODULE_1__["default"]();
    this.footer = new _footer_footer__WEBPACK_IMPORTED_MODULE_2__["default"]();
    this.main = new _main_main__WEBPACK_IMPORTED_MODULE_3__["default"]();
    this.modalWin = new _modalWin_modalWin__WEBPACK_IMPORTED_MODULE_6__["default"]();
    this.modalLevel = new _modalLevel_modalLevel__WEBPACK_IMPORTED_MODULE_7__["default"]();
    this.storage = new _utils_storage__WEBPACK_IMPORTED_MODULE_8__["default"]();
    this.modalScore = new _modalScore_modalScore__WEBPACK_IMPORTED_MODULE_9__["default"]();
    this.audioHandler = new _audio_audio__WEBPACK_IMPORTED_MODULE_10__["default"]();
    this.timerIsStarted = false;
    this.themes = ['dark', 'light'];
    this.theme = theme;
    this.chooseRandomGame(_data__WEBPACK_IMPORTED_MODULE_5__.templatesByLevel.easy.length - 1);
  }
  init() {
    this.parentEl.append(this.header.element, this.main.element, this.footer.element, this.modalWin.element, this.modalLevel.element, this.modalScore.element, this.audioHandler.audioContainer);
    this.gameFields = new _gameFields_gameFields__WEBPACK_IMPORTED_MODULE_0__["default"](this.gameImage, this.size);
    this.main.element.append(this.gameFields.element);
    this.bindButtonListeners();
    this.bindGameFieldListeners();
    this.bindChooseGameListeners();
    this.bindBurgerHandlers();
    this.bindCellListeners();
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
      if (!e.target.classList.contains('nav') && context.header.nav.classList.contains('nav_active') && !context.header.settingsButton.contains(e.target)) context.toggleBurger();
    });
  }
  bindGameFieldListeners() {
    this.gameFields.element.addEventListener('contextmenu', e => e.preventDefault(), false);
    document.addEventListener('contextmenu', e => e.preventDefault());
    // this.gameFields.playField.addEventListener('mouseup', e => this.handleClick(e));
    // this.gameFields.playField.addEventListener('touchend', e => this.handleMobileTouch(e));
    // this.gameFields.playField.addEventListener('touchstart', e => this.handleMobileTouch(e));
    this.gameFields.playField.addEventListener('selectstart', e => this.stopSelection(e, this.gameFields.playField));
    // this.gameFields.playField.addEventListener('pointerdown', e => this.handleClick(e));
    // this.gameFields.playField.addEventListener('pointerup', e => this.handleClick(e));
  }
  bindCellListeners() {
    for (let i = 0; i < this.gameFields.cellsArray.length; i += 1) {
      const cell = this.gameFields.cellsArray[i];
      cell.element.addEventListener('pointerdown', e => this.handleClick(e, cell));
      cell.element.addEventListener('pointerup', e => this.handleClick(e, cell));
    }
  }
  stopSelection(e, element) {
    e.preventDefault();
    e.stopPropagation();
    element.blur();
  }
  bindChooseGameListeners() {
    const context = this;
    for (let i = 0; i < this.modalLevel.buttonsImgContainer.children.length; i += 1) {
      const btn = this.modalLevel.buttonsImgContainer.children[i];
      btn.addEventListener('click', () => this.renderGame(btn.innerText));
    }
    document.addEventListener('click', e => {
      if (context.modalLevel.element.classList.contains('modal_active')) e.stopPropagation();
      if (!e.target.classList.contains('modal__content') && context.modalLevel.element.classList.contains('modal_active') && e.target.classList.contains('modal')) context.modalLevel.closeModal();
      if (!e.target.classList.contains('modal__content') && context.modalScore.element.classList.contains('modal_active') && e.target.classList.contains('modal')) context.modalScore.closeModal();
      if (!e.target.classList.contains('modal__content') && context.modalWin.element.classList.contains('modal_active') && e.target.classList.contains('modal')) context.modalWin.closeModal();
    });
  }
  handleClick(e, cell) {
    e.preventDefault();
    e.stopPropagation();
    if (!this.timerIsStarted) {
      this.timerId = (0,_utils_utils__WEBPACK_IMPORTED_MODULE_4__.launchTimer)(this.main.timerElement, this.main.timerElement.innerText);
      this.timerIsStarted = true;
    }
    if (e.pointerType === 'mouse' && e.type === 'pointerup') this.handleMouseClick(e, cell);
    if (e.pointerType === 'touch') this.handleTouchClick(e, cell);
    if (e.type === 'pointerup') {
      this.fillStartField(e, cell);
      this.checkEndGame();
    }
  }
  handleMouseClick(e, cell) {
    if (cell.state !== 'dark' && e.button === 0) {
      cell.changeState('dark');
    } else if (cell.state !== 'crossed' && e.button === 2) {
      cell.changeState('crossed');
    } else {
      cell.changeState('empty');
    }
    this.handleCellSound(cell.state);
  }
  handleTouchClick(e, cell) {
    let time;
    if (e.type === 'pointerdown') {
      this.timeStart = e.timeStamp;
    }
    if (e.type === 'pointerup') {
      this.timeEnd = e.timeStamp;
      time = this.timeEnd - this.timeStart;
      if (cell.state !== 'dark' && time < 500) {
        cell.changeState('dark');
      } else if (cell.state !== 'crossed' && time >= 500) {
        cell.changeState('crossed');
      } else {
        cell.changeState('empty');
      }
      this.handleCellSound(cell.state);
    }
  }
  handleCellSound(cellState) {
    if (cellState === 'dark') {
      this.audioHandler.playAudio(this.audioHandler.lkmAudio);
    } else if (cellState === 'crossed') {
      this.audioHandler.playAudio(this.audioHandler.pkmAudio);
    } else {
      this.audioHandler.playAudio(this.audioHandler.emptyAudio);
    }
  }
  fillStartField(e, cell) {
    const indexesArray = cell.id.split('.').map(el => Number(el));
    const num = cell.state === 'dark' ? 1 : cell.state === 'crossed' ? -1 : 0;
    this.startField[indexesArray[0]][indexesArray[1]] = num;
  }
  checkEndGame() {
    const preparedStartField = this.startField.map(el => el.map(elem => elem === -1 ? 0 : elem));
    if (preparedStartField.toString() === this.gameFields.winField.toString()) this.winGame();
  }
  resetTimer(savedTime) {
    this.main.timerElement.innerText = savedTime || '00:00';
    this.timerIsStarted = false;
    clearInterval(this.timerId);
  }
  resetGame() {
    this.resetTimer();
    this.startField = Array.from({
      length: this.size
    }, () => Array.from({
      length: this.size
    }, () => 0));
    this.gameFields.resetCells();
  }
  showSolution() {
    this.resetTimer();
    this.gameFields.renderSolution();
  }
  chooseRandomGame(maxId) {
    const randomId = (0,_utils_utils__WEBPACK_IMPORTED_MODULE_4__.getRandomNumber)(0, maxId || _data__WEBPACK_IMPORTED_MODULE_5__.templatesById.length - 1);
    this.gameImage = _data__WEBPACK_IMPORTED_MODULE_5__.templatesById[randomId].matrix;
    this.gameName = _data__WEBPACK_IMPORTED_MODULE_5__.templatesById[randomId].name;
    this.size = this.gameImage.length;
    this.startField = Array.from({
      length: this.size
    }, () => Array.from({
      length: this.size
    }, () => 0));
  }
  chooseGame(gameName) {
    this.gameImage = _data__WEBPACK_IMPORTED_MODULE_5__.templatesById.filter(el => el.name === gameName)[0].matrix;
    this.gameName = gameName;
    this.size = this.gameImage.length;
    this.startField = Array.from({
      length: this.size
    }, () => Array.from({
      length: this.size
    }, () => 0));
  }
  renderGame(gameName) {
    this.modalWin.closeModal();
    this.modalLevel.closeModal();
    if (!gameName) this.chooseRandomGame();
    if (gameName) this.chooseGame(gameName);
    this.gameFields.changeGame(this.gameImage, this.size);
    this.resetTimer();
    this.bindGameFieldListeners();
    this.bindCellListeners();
  }
  winGame() {
    const time = this.main.timerElement.innerText;
    this.storage.saveResult(this.gameName, this.modalLevel.level, (0,_utils_utils__WEBPACK_IMPORTED_MODULE_4__.convertTimeToSec)(time));
    this.gameFields.blockCells();
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
    const {
      matrix,
      timer,
      nameWinImage
    } = savedGameParams;
    this.size = matrix.length;
    this.gameName = nameWinImage;
    this.gameImage = _data__WEBPACK_IMPORTED_MODULE_5__.templatesById.filter(el => el.name === this.gameName)[0].matrix;
    this.startField = matrix;
    this.gameFields.changeGame(this.gameImage, this.size, matrix);
    this.resetTimer(timer);
    this.bindGameFieldListeners();
    this.bindCellListeners();
  }
  toggleTheme() {
    const newTheme = this.themes.filter(el => el !== this.theme)[0];
    this.theme = newTheme;
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (GameHandler);

/***/ }),

/***/ "./src/components/header/header.js":
/*!*****************************************!*\
  !*** ./src/components/header/header.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/utils */ "./src/utils/utils.js");
/* harmony import */ var _header_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./header.scss */ "./src/components/header/header.scss");
/* harmony import */ var _images_logo_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../images/logo.png */ "./src/images/logo.png");



class Header {
  constructor() {
    this.gameName = 'Nonograms';
    this.element = (0,_utils_utils__WEBPACK_IMPORTED_MODULE_0__.createElementWithProperties)('header', 'header');
    this.init();
  }
  init() {
    this.headerWrapper = (0,_utils_utils__WEBPACK_IMPORTED_MODULE_0__.createElementWithProperties)('div', 'header__wrapper');
    const headerLogo = (0,_utils_utils__WEBPACK_IMPORTED_MODULE_0__.createElementWithProperties)('div', 'header__logo');
    const img = (0,_utils_utils__WEBPACK_IMPORTED_MODULE_0__.createElementWithProperties)('img', 'header__img', {
      alt: 'logo image',
      src: `${_images_logo_png__WEBPACK_IMPORTED_MODULE_2__}`
    });
    const title = (0,_utils_utils__WEBPACK_IMPORTED_MODULE_0__.createElementWithProperties)('h1', 'header__title', undefined, [{
      innerText: `${this.gameName}`
    }]);
    this.nav = (0,_utils_utils__WEBPACK_IMPORTED_MODULE_0__.createElementWithProperties)('nav', 'nav');
    this.renderNav();
    this.settingsButton = (0,_utils_utils__WEBPACK_IMPORTED_MODULE_0__.createElementWithProperties)('button', 'btn nav__button nav__button_settings', {
      type: 'button'
    });
    const imgSettings = (0,_utils_utils__WEBPACK_IMPORTED_MODULE_0__.createElementWithProperties)('span', 'nav__img nav__img_settings', {
      'aria-label': 'Settings icon'
    });
    this.volumeButton = (0,_utils_utils__WEBPACK_IMPORTED_MODULE_0__.createElementWithProperties)('button', 'btn nav__button nav__button_volume', {
      type: 'button'
    });
    const imgVolume = (0,_utils_utils__WEBPACK_IMPORTED_MODULE_0__.createElementWithProperties)('span', 'nav__img nav__img_volume', {
      'aria-label': 'Volume icon'
    });
    this.settingsButton.append(imgSettings);
    this.volumeButton.append(imgVolume);
    headerLogo.append(img, title);
    this.headerWrapper.append(headerLogo, this.headerSwitcher, this.volumeButton, this.nav, this.settingsButton);
    this.element.append(this.headerWrapper);
  }
  renderNav() {
    this.resetButton = (0,_utils_utils__WEBPACK_IMPORTED_MODULE_0__.createElementWithProperties)('button', 'btn nav__button', {
      type: 'button'
    }, [{
      innerText: 'Reset'
    }]);
    this.solutionButton = (0,_utils_utils__WEBPACK_IMPORTED_MODULE_0__.createElementWithProperties)('button', 'btn nav__button', {
      type: 'button'
    }, [{
      innerText: 'Solution'
    }]);
    this.randomButton = (0,_utils_utils__WEBPACK_IMPORTED_MODULE_0__.createElementWithProperties)('button', 'btn nav__button', {
      type: 'button'
    }, [{
      innerText: 'Random game'
    }]);
    this.newGameButton = (0,_utils_utils__WEBPACK_IMPORTED_MODULE_0__.createElementWithProperties)('button', 'btn nav__button', {
      type: 'button'
    }, [{
      innerText: 'Choose game'
    }]);
    this.scoreButton = (0,_utils_utils__WEBPACK_IMPORTED_MODULE_0__.createElementWithProperties)('button', 'btn nav__button', {
      type: 'button'
    }, [{
      innerText: 'Score'
    }]);
    this.saveGameButton = (0,_utils_utils__WEBPACK_IMPORTED_MODULE_0__.createElementWithProperties)('button', 'btn nav__button nav__button_save', {
      type: 'button'
    }, [{
      innerText: 'Save game'
    }]);
    this.loadGameButton = (0,_utils_utils__WEBPACK_IMPORTED_MODULE_0__.createElementWithProperties)('button', 'btn nav__button nav__button_load', {
      type: 'button'
    }, [{
      innerText: 'Load game'
    }]);
    this.renderThemeSwitcher();
    this.nav.append(this.resetButton, this.solutionButton, this.randomButton, this.newGameButton, this.saveGameButton, this.loadGameButton, this.scoreButton);
  }
  renderThemeSwitcher() {
    this.headerSwitcher = (0,_utils_utils__WEBPACK_IMPORTED_MODULE_0__.createElementWithProperties)('div', 'switcher');
    const switcherLabel = (0,_utils_utils__WEBPACK_IMPORTED_MODULE_0__.createElementWithProperties)('label', 'switcher__label', {
      for: 'switcher'
    });
    this.switcherInput = (0,_utils_utils__WEBPACK_IMPORTED_MODULE_0__.createElementWithProperties)('input', 'switcher__input', {
      id: 'switcher',
      type: 'checkbox'
    });
    const switcherRound = (0,_utils_utils__WEBPACK_IMPORTED_MODULE_0__.createElementWithProperties)('span', 'switcher__round round');
    switcherLabel.append(this.switcherInput, switcherRound);
    this.headerSwitcher.append(switcherLabel);
  }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Header);

/***/ }),

/***/ "./src/components/main/main.js":
/*!*************************************!*\
  !*** ./src/components/main/main.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/utils */ "./src/utils/utils.js");
/* harmony import */ var _main_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./main.scss */ "./src/components/main/main.scss");


class Main {
  constructor() {
    this.githubLink = 'https://github.com/Yuliya-Karuk';
    this.element = (0,_utils_utils__WEBPACK_IMPORTED_MODULE_0__.createElementWithProperties)('main', 'main');
    this.init();
  }
  init() {
    this.timerElement = (0,_utils_utils__WEBPACK_IMPORTED_MODULE_0__.createElementWithProperties)('div', 'timer', undefined, [{
      innerText: `00:00`
    }]);
    this.element.append(this.timerElement);
  }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Main);

/***/ }),

/***/ "./src/components/modalLevel/modalLevel.js":
/*!*************************************************!*\
  !*** ./src/components/modalLevel/modalLevel.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/utils */ "./src/utils/utils.js");
/* harmony import */ var _modalLevel_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modalLevel.scss */ "./src/components/modalLevel/modalLevel.scss");
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../data */ "./src/data/index.js");



const ModalConst = {
  message: 'Choose game, please',
  showModal: 'modal_active'
};
class ModalLevel {
  constructor() {
    this.level = 'easy';
    this.element = (0,_utils_utils__WEBPACK_IMPORTED_MODULE_0__.createElementWithProperties)('div', 'modal modal_level');
    this.renderModalContent();
  }
  renderModalContent() {
    this.container = (0,_utils_utils__WEBPACK_IMPORTED_MODULE_0__.createElementWithProperties)('div', 'modal__content');
    this.title = (0,_utils_utils__WEBPACK_IMPORTED_MODULE_0__.createElementWithProperties)('h2', 'modal__title', undefined, [{
      innerText: ModalConst.message
    }]);
    this.buttonsLevelContainer = (0,_utils_utils__WEBPACK_IMPORTED_MODULE_0__.createElementWithProperties)('div', 'modal__buttons');
    for (let i = 0; i < Object.keys(_data__WEBPACK_IMPORTED_MODULE_2__.templatesByLevel).length; i += 1) {
      const btn = (0,_utils_utils__WEBPACK_IMPORTED_MODULE_0__.createElementWithProperties)('button', 'btn modal__button', {
        type: 'button'
      }, [{
        innerText: `${Object.keys(_data__WEBPACK_IMPORTED_MODULE_2__.templatesByLevel)[i]}`
      }]);
      if (btn.innerText === this.level) btn.classList.add('modal__button_active');
      this.buttonsLevelContainer.append(btn);
    }
    this.buttonsImgContainer = (0,_utils_utils__WEBPACK_IMPORTED_MODULE_0__.createElementWithProperties)('div', 'modal__level-buttons');
    this.renderImages(this.level);
    this.container.append(this.title, this.buttonsLevelContainer, this.buttonsImgContainer);
    this.element.append(this.container);
  }
  renderImages(level) {
    this.level = level;
    this.changeActiveLevelButton(this.level);
    this.buttonsImgContainer.innerHTML = '';
    const allImagesNames = _data__WEBPACK_IMPORTED_MODULE_2__.templatesByLevel[this.level];
    for (let i = 0; i < allImagesNames.length; i += 1) {
      const btn = (0,_utils_utils__WEBPACK_IMPORTED_MODULE_0__.createElementWithProperties)('button', 'btn modal__button', {
        type: 'button'
      }, [{
        innerText: `${allImagesNames[i].name}`
      }]);
      this.buttonsImgContainer.append(btn);
    }
  }
  changeActiveLevelButton(newLevel) {
    for (let i = 0; i < this.buttonsLevelContainer.children.length; i += 1) {
      const btn = this.buttonsLevelContainer.children[i];
      btn.classList.remove('modal__button_active');
      if (btn.innerText === newLevel) btn.classList.add('modal__button_active');
    }
  }
  showModal() {
    this.element.classList.add(ModalConst.showModal);
  }
  closeModal() {
    this.element.classList.remove(ModalConst.showModal);
  }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ModalLevel);

/***/ }),

/***/ "./src/components/modalScore/modalScore.js":
/*!*************************************************!*\
  !*** ./src/components/modalScore/modalScore.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/utils */ "./src/utils/utils.js");
/* harmony import */ var _modalScore_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modalScore.scss */ "./src/components/modalScore/modalScore.scss");


const ModalConst = {
  showModal: 'modal_active',
  scoreRows: 5,
  noScoreMessage: 'There are no win records'
};
class ModalScore {
  constructor() {
    this.element = (0,_utils_utils__WEBPACK_IMPORTED_MODULE_0__.createElementWithProperties)('div', 'modal modal_score');
    this.renderModalContent();
  }
  renderModalContent() {
    this.container = (0,_utils_utils__WEBPACK_IMPORTED_MODULE_0__.createElementWithProperties)('div', 'modal__content');
    this.title = (0,_utils_utils__WEBPACK_IMPORTED_MODULE_0__.createElementWithProperties)('h2', 'modal__title', undefined, [{
      innerText: 'Score Table'
    }]);
    this.scoreList = (0,_utils_utils__WEBPACK_IMPORTED_MODULE_0__.createElementWithProperties)('div', 'modal__list');
    this.closeButton = (0,_utils_utils__WEBPACK_IMPORTED_MODULE_0__.createElementWithProperties)('button', 'btn modal__button', {
      type: 'button'
    }, [{
      innerText: 'Close'
    }]);
    this.container.append(this.title, this.scoreList, this.closeButton);
    this.element.append(this.container);
  }
  renderScoreList(results) {
    this.scoreList.innerHTML = '';
    if (results) {
      for (let i = 0; i < results.length; i += 1) {
        const text = `${i + 1}. Game (${results[i].name}) - ${results[i].level} - ${(0,_utils_utils__WEBPACK_IMPORTED_MODULE_0__.prepareTimeFormat)(results[i].value)}`;
        const resultItem = (0,_utils_utils__WEBPACK_IMPORTED_MODULE_0__.createElementWithProperties)('span', 'modal__score-item', undefined, [{
          innerText: text
        }]);
        resultItem.classList.add('modal-score__item');
        this.scoreList.append(resultItem);
      }
    } else {
      const span = (0,_utils_utils__WEBPACK_IMPORTED_MODULE_0__.createElementWithProperties)('span', 'modal__score-span', undefined, [{
        innerText: ModalConst.noScoreMessage
      }]);
      this.scoreList.append(span);
    }
  }
  showModal() {
    this.element.classList.add(ModalConst.showModal);
  }
  closeModal() {
    this.element.classList.remove(ModalConst.showModal);
  }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ModalScore);

/***/ }),

/***/ "./src/components/modalWin/modalWin.js":
/*!*********************************************!*\
  !*** ./src/components/modalWin/modalWin.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/utils */ "./src/utils/utils.js");
/* harmony import */ var _modalWin_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modalWin.scss */ "./src/components/modalWin/modalWin.scss");


const ModalConst = {
  win: 'Great! You have solved the nonogram in ## seconds! 😉',
  showModal: 'modal_active'
};
class ModalWin {
  constructor() {
    this.element = (0,_utils_utils__WEBPACK_IMPORTED_MODULE_0__.createElementWithProperties)('div', 'modal modal_win');
    this.renderModalContent();
  }
  renderModalContent() {
    this.container = (0,_utils_utils__WEBPACK_IMPORTED_MODULE_0__.createElementWithProperties)('div', 'modal__content');
    this.title = (0,_utils_utils__WEBPACK_IMPORTED_MODULE_0__.createElementWithProperties)('h2', 'modal__title');
    const buttonsContainer = (0,_utils_utils__WEBPACK_IMPORTED_MODULE_0__.createElementWithProperties)('div', 'modal__buttons');
    this.randomButton = (0,_utils_utils__WEBPACK_IMPORTED_MODULE_0__.createElementWithProperties)('button', 'btn modal__button', {
      type: 'button'
    }, [{
      innerText: 'Random game'
    }]);
    this.scoreButton = (0,_utils_utils__WEBPACK_IMPORTED_MODULE_0__.createElementWithProperties)('button', 'btn modal__button', {
      type: 'button'
    }, [{
      innerText: 'Score'
    }]);
    this.chooseGameButton = (0,_utils_utils__WEBPACK_IMPORTED_MODULE_0__.createElementWithProperties)('button', 'btn modal__button', {
      type: 'button'
    }, [{
      innerText: 'Choose game'
    }]);
    buttonsContainer.append(this.randomButton, this.scoreButton, this.chooseGameButton);
    this.container.append(this.title, buttonsContainer);
    this.element.append(this.container);
  }
  showModal(result) {
    this.title.innerText = ModalConst.win.replace('##', result);
    this.element.classList.add(ModalConst.showModal);
  }
  closeModal() {
    this.element.classList.remove(ModalConst.showModal);
  }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ModalWin);

/***/ }),

/***/ "./src/data/easy/index.js":
/*!********************************!*\
  !*** ./src/data/easy/index.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const easyTemplates = [{
  matrix: [[0, 0, 0, 1, 1], [1, 1, 0, 1, 0], [1, 1, 1, 1, 0], [1, 0, 1, 0, 0], [1, 0, 1, 0, 0]],
  name: 'camel'
}, {
  matrix: [[0, 1, 0, 0, 0], [0, 1, 0, 1, 1], [0, 0, 1, 0, 0], [1, 1, 0, 1, 0], [0, 0, 0, 1, 0]],
  name: 'boomerang'
}, {
  matrix: [[0, 1, 1, 0, 0], [1, 1, 0, 0, 1], [1, 1, 1, 1, 0], [0, 1, 1, 0, 0], [1, 0, 0, 1, 0]],
  name: 'buggy'
}, {
  matrix: [[0, 1, 0, 0, 0], [1, 1, 0, 1, 1], [0, 1, 1, 1, 0], [0, 1, 1, 1, 0], [0, 0, 1, 0, 0]],
  name: 'cockerel'
}, {
  matrix: [[0, 1, 0, 1, 0], [1, 1, 1, 1, 1], [1, 1, 1, 1, 1], [0, 1, 1, 1, 0], [0, 0, 1, 0, 0]],
  name: 'heart'
}, {
  matrix: [[1, 0, 0, 0, 1], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [1, 0, 0, 0, 1]],
  name: 'test'
}];
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (easyTemplates);

/***/ }),

/***/ "./src/data/hard/index.js":
/*!********************************!*\
  !*** ./src/data/hard/index.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const hardTemplates = [{
  matrix: [[0, 1, 1, 1, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0], [1, 0, 0, 1, 1, 1, 0, 0, 1, 0, 1, 0, 0, 0, 0], [0, 0, 0, 1, 0, 1, 0, 0, 1, 1, 1, 1, 0, 0, 0], [0, 0, 1, 0, 1, 1, 0, 0, 1, 1, 0, 1, 1, 0, 0], [0, 1, 1, 0, 1, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0], [0, 1, 0, 0, 1, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0], [1, 1, 0, 1, 0, 0, 1, 1, 1, 1, 0, 0, 1, 1, 1], [1, 0, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1], [1, 0, 0, 1, 0, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1], [1, 0, 0, 1, 1, 1, 1, 1, 0, 0, 1, 0, 1, 1, 1], [1, 0, 0, 1, 1, 1, 1, 1, 0, 0, 1, 0, 0, 1, 0], [1, 1, 0, 0, 1, 1, 1, 0, 0, 1, 1, 0, 0, 0, 0], [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0], [0, 0, 1, 1, 0, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0]],
  name: 'squirrel'
}, {
  matrix: [[1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0], [1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 1, 1, 0], [1, 1, 0, 0, 1, 1, 1, 1, 1, 0, 0, 1, 0, 0, 0], [0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 0, 1, 1, 0, 0], [1, 0, 1, 1, 0, 1, 1, 1, 1, 0, 0, 0, 1, 1, 0], [1, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 0], [1, 1, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1], [0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1], [0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1], [1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0], [1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0], [1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0]],
  name: 'cat'
}, {
  matrix: [[1, 1, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 1], [1, 1, 0, 1, 1, 0, 1, 0, 0, 1, 0, 1, 1, 0, 1], [0, 1, 1, 1, 1, 0, 1, 0, 0, 1, 0, 1, 1, 0, 1], [0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1], [0, 0, 0, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 0, 0], [0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0], [0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 1, 1, 1, 1, 0], [0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1], [0, 1, 0, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1], [0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1], [0, 0, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1], [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1]],
  name: 'deer'
}, {
  matrix: [[0, 0, 1, 1, 1, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0], [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0], [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0], [1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0], [1, 1, 1, 0, 1, 0, 1, 0, 1, 1, 1, 0, 0, 1, 0], [1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 1, 1, 1], [0, 1, 1, 1, 0, 1, 0, 1, 1, 1, 0, 0, 1, 1, 1], [0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 0, 0, 1, 0], [0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1], [0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 1, 1, 0, 0, 1], [0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 0, 1], [0, 0, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 1, 1, 1], [0, 0, 1, 1, 0, 1, 0, 1, 0, 1, 1, 0, 0, 1, 0], [0, 0, 1, 0, 1, 0, 0, 1, 1, 1, 0, 0, 0, 1, 0], [0, 0, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0]],
  name: 'lion'
}, {
  matrix: [[0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0], [0, 0, 0, 0, 1, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0], [0, 0, 1, 1, 1, 0, 1, 0, 0, 1, 1, 0, 0, 0, 0], [0, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0], [0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0], [0, 0, 1, 0, 1, 0, 0, 1, 0, 1, 1, 1, 0, 0, 0], [0, 0, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0], [0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 1, 1, 1, 1], [1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1], [1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 1, 1], [1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 1], [1, 0, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0], [0, 0, 0, 1, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0], [0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0], [0, 0, 1, 1, 1, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0]],
  name: 'penguin'
}, {
  matrix: [[0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0], [0, 0, 0, 1, 1, 1, 0, 0, 1, 0, 0, 1, 0, 0, 0], [0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 0], [0, 0, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0], [0, 0, 1, 0, 0, 1, 1, 1, 1, 0, 1, 0, 0, 0, 0], [0, 0, 0, 1, 1, 1, 1, 0, 1, 1, 1, 0, 0, 0, 0], [0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0], [0, 0, 0, 0, 0, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 1, 1, 1, 1, 0, 1, 0, 0, 0, 0, 1], [0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1], [0, 0, 0, 1, 1, 1, 1, 0, 0, 1, 0, 0, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1], [1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0], [1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]],
  name: 'mouse'
}];
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (hardTemplates);

/***/ }),

/***/ "./src/data/index.js":
/*!***************************!*\
  !*** ./src/data/index.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   templatesById: () => (/* binding */ templatesById),
/* harmony export */   templatesByLevel: () => (/* binding */ templatesByLevel)
/* harmony export */ });
/* harmony import */ var _easy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./easy */ "./src/data/easy/index.js");
/* harmony import */ var _medium__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./medium */ "./src/data/medium/index.js");
/* harmony import */ var _hard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./hard */ "./src/data/hard/index.js");



const templatesByLevel = {
  easy: _easy__WEBPACK_IMPORTED_MODULE_0__["default"],
  medium: _medium__WEBPACK_IMPORTED_MODULE_1__["default"],
  hard: _hard__WEBPACK_IMPORTED_MODULE_2__["default"]
};
function createTemplateById() {
  const copyTemplates = JSON.parse(JSON.stringify(templatesByLevel));
  let start = 0;
  const result = [];
  for (let i = 0; i < Object.keys(copyTemplates).length; i += 1) {
    for (let j = 0; j < copyTemplates[Object.keys(copyTemplates)[i]].length; j += 1) {
      const obj = copyTemplates[Object.keys(copyTemplates)[i]][j];
      obj.id = start;
      obj.level = Object.keys(copyTemplates)[i];
      result.push(obj);
      start += 1;
    }
  }
  return result;
}
const templatesById = createTemplateById();


/***/ }),

/***/ "./src/data/medium/index.js":
/*!**********************************!*\
  !*** ./src/data/medium/index.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const mediumTemplates = [{
  matrix: [[0, 1, 1, 1, 0, 0, 0, 0, 0, 0], [0, 1, 0, 1, 1, 0, 0, 0, 0, 0], [1, 1, 1, 1, 1, 0, 0, 0, 0, 0], [0, 0, 1, 1, 0, 0, 0, 1, 0, 0], [0, 1, 1, 0, 0, 0, 0, 1, 1, 0], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 0, 0, 1, 1, 1, 1, 1, 0], [1, 1, 1, 1, 0, 1, 1, 1, 0, 0], [0, 1, 1, 1, 1, 1, 1, 1, 0, 0], [0, 0, 1, 1, 1, 1, 0, 0, 0, 0]],
  name: 'duck'
}, {
  matrix: [[0, 0, 0, 1, 0, 0, 0, 0, 0, 0], [0, 0, 0, 1, 0, 0, 0, 0, 0, 0], [0, 0, 1, 1, 1, 0, 0, 0, 0, 0], [1, 1, 1, 1, 1, 0, 0, 0, 0, 0], [1, 1, 1, 1, 1, 1, 0, 0, 1, 0], [0, 0, 0, 1, 1, 1, 1, 0, 0, 1], [0, 0, 0, 1, 1, 1, 1, 1, 0, 1], [0, 0, 0, 1, 1, 1, 1, 1, 1, 1], [0, 0, 0, 0, 1, 0, 1, 1, 1, 1], [0, 0, 0, 1, 1, 1, 1, 1, 1, 0]],
  name: 'dog'
}, {
  matrix: [[1, 1, 1, 0, 1, 1, 1, 0, 0, 0], [0, 0, 0, 1, 0, 0, 0, 0, 0, 0], [0, 1, 1, 1, 1, 1, 0, 0, 0, 0], [1, 1, 0, 1, 1, 1, 1, 0, 0, 1], [1, 0, 0, 1, 1, 1, 1, 1, 1, 1], [1, 0, 0, 1, 1, 1, 1, 1, 0, 1], [1, 1, 1, 1, 1, 1, 1, 0, 0, 0], [0, 1, 1, 1, 1, 1, 0, 0, 0, 0], [1, 0, 1, 0, 1, 0, 0, 0, 0, 0], [1, 1, 1, 1, 1, 1, 1, 0, 0, 0]],
  name: 'helicopter'
}, {
  matrix: [[0, 0, 1, 1, 1, 1, 1, 0, 0, 0], [0, 1, 1, 1, 0, 1, 1, 1, 0, 0], [1, 0, 1, 1, 1, 1, 1, 0, 1, 0], [1, 1, 1, 0, 1, 1, 0, 1, 1, 1], [0, 1, 1, 1, 1, 1, 1, 1, 1, 0], [0, 0, 0, 1, 0, 1, 0, 0, 0, 0], [0, 0, 1, 0, 0, 1, 0, 0, 0, 0], [0, 0, 1, 0, 0, 0, 1, 0, 0, 0], [0, 0, 1, 0, 0, 0, 1, 0, 0, 0], [0, 0, 0, 1, 1, 1, 0, 0, 0, 0]],
  name: 'amanita'
}, {
  matrix: [[0, 0, 0, 1, 1, 0, 0, 0, 0, 0], [0, 0, 1, 0, 1, 0, 0, 0, 0, 0], [0, 1, 1, 1, 0, 0, 0, 0, 0, 0], [1, 0, 1, 1, 0, 0, 0, 0, 0, 0], [1, 1, 1, 1, 1, 1, 1, 1, 0, 0], [1, 1, 1, 1, 1, 1, 1, 1, 1, 0], [0, 1, 1, 1, 1, 1, 1, 1, 1, 1], [0, 0, 1, 1, 1, 1, 1, 1, 1, 0], [0, 1, 1, 1, 0, 0, 1, 1, 1, 0], [1, 1, 1, 0, 1, 1, 1, 1, 0, 0]],
  name: 'rabbit'
}, {
  matrix: [[0, 0, 1, 0, 0, 0, 0, 0, 1, 0], [0, 0, 1, 1, 0, 0, 0, 1, 1, 0], [0, 0, 1, 1, 1, 1, 1, 1, 1, 0], [0, 0, 1, 1, 1, 1, 1, 1, 1, 0], [0, 0, 1, 0, 1, 1, 1, 0, 1, 0], [0, 1, 1, 1, 1, 1, 1, 1, 1, 1], [0, 0, 0, 0, 0, 1, 0, 0, 0, 0], [1, 1, 0, 0, 1, 1, 1, 0, 0, 0], [0, 1, 1, 0, 1, 1, 1, 0, 0, 0], [0, 0, 1, 1, 1, 1, 1, 1, 0, 0]],
  name: 'kitty'
}];
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (mediumTemplates);

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_game_gameHandler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/game/gameHandler */ "./src/components/game/gameHandler.js");
/* harmony import */ var _sass_index_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sass/index.scss */ "./src/sass/index.scss");


const startTheme = 'dark';
document.documentElement.setAttribute('theme', startTheme);
const body = document.querySelector('body');
const game = new _components_game_gameHandler__WEBPACK_IMPORTED_MODULE_0__["default"](body, startTheme);
game.init();

/***/ }),

/***/ "./src/utils/storage.js":
/*!******************************!*\
  !*** ./src/utils/storage.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
class Storage {
  constructor() {
    this.score = 'YKaruk-nonograms';
    this.savedGame = 'YKaruk-saved';
  }
  saveResult(name, level, value) {
    const games = localStorage.getItem(this.score);
    if (!games) {
      localStorage.setItem(this.score, JSON.stringify([{
        name,
        level,
        value
      }]));
    } else {
      const parsedGames = JSON.parse(games);
      if (parsedGames.length === 5) parsedGames.pop();
      parsedGames.push({
        name,
        level,
        value
      });
      parsedGames.sort((a, b) => a.value - b.value);
      localStorage.setItem(this.score, JSON.stringify(parsedGames));
    }
  }
  getResults() {
    const games = localStorage.getItem(this.score);
    return JSON.parse(games);
  }
  saveGame(matrix, timer, nameWinImage) {
    localStorage.setItem(this.savedGame, JSON.stringify({
      matrix,
      timer,
      nameWinImage
    }));
  }
  getSavedGame() {
    const savedGame = localStorage.getItem(this.savedGame);
    return JSON.parse(savedGame);
  }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Storage);

/***/ }),

/***/ "./src/utils/utils.js":
/*!****************************!*\
  !*** ./src/utils/utils.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   convertTimeToSec: () => (/* binding */ convertTimeToSec),
/* harmony export */   countClues: () => (/* binding */ countClues),
/* harmony export */   createArrayOneSize: () => (/* binding */ createArrayOneSize),
/* harmony export */   createElementWithProperties: () => (/* binding */ createElementWithProperties),
/* harmony export */   getRandomNumber: () => (/* binding */ getRandomNumber),
/* harmony export */   launchTimer: () => (/* binding */ launchTimer),
/* harmony export */   prepareTimeFormat: () => (/* binding */ prepareTimeFormat)
/* harmony export */ });
function createElementWithProperties(el, elClassName, attr, props) {
  const element = document.createElement(el);
  element.className = elClassName;
  if (attr) {
    for (let i = 0; i < Object.keys(attr).length; i += 1) {
      const key = Object.keys(attr)[i];
      element.setAttribute(key, attr[key]);
    }
  }
  if (props) Object.assign(element, ...props);
  return element;
}
function countClues(arr) {
  const left = [];
  const top = [];
  for (let i = 0; i < arr.length; i += 1) {
    const partLeft = [];
    const partTop = [];
    let countLeft = 0;
    let countTop = 0;
    for (let j = 0; j < arr[i].length; j += 1) {
      if (arr[i][j] === 1) {
        countLeft += 1;
      }
      if (arr[i][j] === 0 && countLeft !== 0 || countLeft !== 0 && j === arr[i].length - 1) {
        partLeft.push(countLeft);
        countLeft = 0;
      }
      if (arr[j][i] === 1) {
        countTop += 1;
      }
      if (arr[j][i] === 0 && countTop !== 0 || countTop !== 0 && j === arr[i].length - 1) {
        partTop.push(countTop);
        countTop = 0;
      }
    }
    left.push(partLeft);
    top.push(partTop);
  }
  return [left, top];
}
function createArrayOneSize(arr) {
  const max = Math.max(...arr.map(el => el.length));
  for (let i = 0; i < arr.length; i += 1) {
    while (arr[i].length < max) {
      arr[i].unshift('');
    }
  }
  return arr;
}
function launchTimer(timerEl, startTime) {
  const timerElement = timerEl;
  let timerMinutes = +startTime.split(':')[0];
  let timerSeconds = +startTime.split(':')[1];
  return setInterval(() => {
    timerSeconds += 1;
    if (timerSeconds === 60) {
      timerMinutes += 1;
      timerSeconds = 0;
    }
    const formattedSec = String(timerSeconds).padStart(2, '0');
    const formattedMin = String(timerMinutes).padStart(2, '0');
    timerElement.innerText = `${formattedMin}:${formattedSec}`;
  }, 1000);
}
function prepareTimeFormat(timeInSec) {
  const timeSec = timeInSec % 60;
  const timeMin = Math.floor(timeInSec / 60);
  const formattedSec = String(timeSec).padStart(2, '0');
  const formattedMin = String(timeMin).padStart(2, '0');
  return `${formattedMin}:${formattedSec}`;
}
function getRandomNumber(min, max) {
  const newNumber = Math.floor(Math.random() * (max - min + 1) + min);
  return newNumber;
}
function convertTimeToSec(timeStr) {
  const timeArr = timeStr.split(':');
  const min = +timeArr[0];
  const sec = +timeArr[1] + min * 60;
  return sec;
}

/***/ }),

/***/ "./src/components/cell/cell.scss":
/*!***************************************!*\
  !*** ./src/components/cell/cell.scss ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/components/footer/footer.scss":
/*!*******************************************!*\
  !*** ./src/components/footer/footer.scss ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/components/gameFields/gameFields.scss":
/*!***************************************************!*\
  !*** ./src/components/gameFields/gameFields.scss ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/components/header/header.scss":
/*!*******************************************!*\
  !*** ./src/components/header/header.scss ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/components/main/main.scss":
/*!***************************************!*\
  !*** ./src/components/main/main.scss ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/components/modalLevel/modalLevel.scss":
/*!***************************************************!*\
  !*** ./src/components/modalLevel/modalLevel.scss ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/components/modalScore/modalScore.scss":
/*!***************************************************!*\
  !*** ./src/components/modalScore/modalScore.scss ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/components/modalWin/modalWin.scss":
/*!***********************************************!*\
  !*** ./src/components/modalWin/modalWin.scss ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/sass/index.scss":
/*!*****************************!*\
  !*** ./src/sass/index.scss ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/audio/empty2.mp3":
/*!******************************!*\
  !*** ./src/audio/empty2.mp3 ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "5a00299f4634373f5b64.mp3";

/***/ }),

/***/ "./src/audio/lkm2.mp3":
/*!****************************!*\
  !*** ./src/audio/lkm2.mp3 ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "f46ee667333b58155c59.mp3";

/***/ }),

/***/ "./src/audio/pkm2.mp3":
/*!****************************!*\
  !*** ./src/audio/pkm2.mp3 ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "869370b4c8719a4d6dea.mp3";

/***/ }),

/***/ "./src/audio/win2.mp3":
/*!****************************!*\
  !*** ./src/audio/win2.mp3 ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "5b8a80d44b5c4f373d3f.mp3";

/***/ }),

/***/ "./src/images/logo.png":
/*!*****************************!*\
  !*** ./src/images/logo.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "e2877725930c1f23c1e4.png";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	__webpack_require__("./src/index.js");
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/sass/index.scss");
/******/ 	
/******/ })()
;
//# sourceMappingURL=script.js.map