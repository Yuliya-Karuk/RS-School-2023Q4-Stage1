import { createElementWithProperties, countClues, createArrayOneSize } from '../../utils/utils';
import Cell from '../cell/cell';
import './gameFields.scss';

const GameMood = {
  5: 'easy',
  10: 'medium',
  15: 'hard',
};

const MatrixState = {
  0: 'empty',
  '-1': 'crossed',
  1: 'dark',
};
class GameFields {
  constructor(winImage, mood) {
    this.mode = GameMood[mood];
    this.winField = winImage;
    this.element = createElementWithProperties('div', `game-field game-field_${this.mode}`);
    this.cellsArray = [];
    this.init();
  }

  init(savedGame) {
    this.element.innerHTML = '';
    const gameFieldContainer = createElementWithProperties('div', 'game-field__container');
    const gameRowFirst = createElementWithProperties('div', 'game-field__row');
    this.topClues = createElementWithProperties('div', 'top-clues');
    const gameRowSecond = createElementWithProperties('div', 'game-field__row');
    this.playField = createElementWithProperties('ul', `play-field play-field_${this.mode}`);
    this.leftClues = createElementWithProperties('div', 'left-clues');
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
        const newCell = new Cell(`${i}.${index}`, `${el}`);
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
    this.clues = countClues(this.winField);
    this.renderLeftClue();
    this.renderTopClue();
  }

  renderLeftClue() {
    const leftClues = createArrayOneSize(this.clues[0]);
    for (let i = 0; i < leftClues.length; i += 1) {
      const newRow = createElementWithProperties('div', 'left-clues__row');
      for (let j = 0; j < leftClues[i].length; j += 1) {
        const newCell = createElementWithProperties('span', 'clue', undefined, [{ innerText: `${leftClues[i][j]}` }]);
        newRow.append(newCell);
      }
      this.leftClues.append(newRow);
    }
  }

  renderTopClue() {
    const topClues = createArrayOneSize(this.clues[1]);
    for (let i = 0; i < topClues.length; i += 1) {
      const newRow = createElementWithProperties('div', 'top-clues__column');
      for (let j = 0; j < topClues[i].length; j += 1) {
        const newCell = createElementWithProperties('span', 'clue', undefined, [{ innerText: `${topClues[i][j]}` }]);
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
        const newCell = new Cell(`${i}.${index}`, `${el === -1 ? 0 : el}`);
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

export default GameFields;
