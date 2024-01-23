import { createElementWithProperties, countClues } from '../../utils/utils';
import templates from '../../data/easy';
import './playField.scss';

class PlayField {
  constructor() {
    this.mode = 'easy';
    this.image = 'buggy';
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
    return this.gameField;
  }

  renderPlayField() {
    for (let i = 0; i < templates[this.image].length; i += 1) {
      templates.camel[i].forEach(el => {
        const newCell = createElementWithProperties('li', 'cell', { id: `${el}` });
        this.playField.append(newCell);
      });
    }
  }

  renderClues() {
    this.clues = countClues(templates[this.image]);
    this.renderLeftClue();
    this.renderTopClue();
  }

  renderLeftClue() {
    const leftMax = Math.max(...this.clues[0].map(el => el.length));
    for (let i = 0; i < this.clues[0].length; i += 1) {
      const newRow = createElementWithProperties('div', 'left-clues__row');
      for (let j = 0; j < leftMax; j += 1) {
        const newCell = createElementWithProperties('span', 'clue', undefined, [
          { innerText: `${this.clues[0][i][j] ? this.clues[0][i][j] : ''}` },
        ]);
        newRow.append(newCell);
      }
      this.leftClues.append(newRow);
    }
  }

  renderTopClue() {
    const topMax = Math.max(...this.clues[1].map(el => el.length));
    for (let i = 0; i < this.clues[1].length; i += 1) {
      const newRow = createElementWithProperties('div', 'top-clues__column');
      for (let j = 0; j < topMax; j += 1) {
        const newCell = createElementWithProperties('span', 'clue', undefined, [
          { innerText: `${this.clues[0][i][j] ? this.clues[0][i][j] : ''}` },
        ]);
        newRow.append(newCell);
      }
      this.topClues.append(newRow);
    }
  }
}

export default PlayField;
