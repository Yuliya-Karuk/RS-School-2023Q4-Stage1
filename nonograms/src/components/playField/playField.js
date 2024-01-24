import { createElementWithProperties, countClues, createArrayOneSize } from '../../utils/utils';
import mediumTemplates from '../../data/medium';
import './playField.scss';

class PlayField {
  constructor() {
    this.mode = 'medium';
    this.size = 10;
    this.image = 'duck';
    this.startField = Array.from({ length: this.size }, () => Array.from({ length: this.size }, () => 0));
    this.winField = mediumTemplates[this.image];
  }

  init() {
    this.gameField = createElementWithProperties('div', 'game-field');
    const gameRow = createElementWithProperties('div', 'game-block');
    this.playField = createElementWithProperties('ul', `play-field play-field_${this.mode}`);
    this.leftClues = createElementWithProperties('div', 'left-clues');
    this.topClues = createElementWithProperties('div', 'top-clues');
    this.renderPlayField();
    this.renderClues();
    gameRow.append(this.leftClues, this.playField);
    this.gameField.append(this.topClues, gameRow);
    this.playField.addEventListener('contextmenu', e => e.preventDefault());
    this.gameField.addEventListener('mouseup', e => this.handleClick(e));
    return this.gameField;
  }

  renderPlayField() {
    for (let i = 0; i < mediumTemplates[this.image].length; i += 1) {
      mediumTemplates[this.image][i].forEach((el, index) => {
        const newCell = createElementWithProperties('li', 'cell', { id: `${i}.${index}` });
        this.playField.append(newCell);
      });
    }
  }

  renderClues() {
    this.clues = countClues(mediumTemplates[this.image]);
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

  handleClick(e) {
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
    if (this.startField.toString() === this.winField.toString()) console.log('win');
  }
}

export default PlayField;
