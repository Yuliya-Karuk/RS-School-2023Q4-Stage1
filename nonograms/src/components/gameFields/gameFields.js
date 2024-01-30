import { createElementWithProperties, countClues, createArrayOneSize } from '../../utils/utils';
import './playField.scss';

const GameMood = {
  5: 'easy',
  10: 'medium',
  15: 'hard',
};
class GameFields {
  constructor(winImage, mood) {
    this.mode = GameMood[mood];
    this.winField = winImage;
    this.element = createElementWithProperties('div', `game-field game-field_${this.mode}`);
    this.init();
  }

  init(savedGame) {
    this.element.innerHTML = '';
    const gameRow = createElementWithProperties('div', 'game-block');
    this.playField = createElementWithProperties('ul', `play-field play-field_${this.mode}`);
    this.leftClues = createElementWithProperties('div', 'left-clues');
    this.topClues = createElementWithProperties('div', 'top-clues');
    const frame = createElementWithProperties('div', 'frame');
    if (!savedGame) this.renderPlayField();
    if (savedGame) this.renderSavedField(savedGame);
    this.renderClues();
    gameRow.append(this.leftClues, this.playField);
    frame.append(this.topClues, gameRow);
    this.element.append(frame);
  }

  renderPlayField() {
    this.playField.innerHTML = '';
    this.playField.classList.remove('play-field_blocked');
    for (let i = 0; i < this.winField.length; i += 1) {
      this.winField[i].forEach((el, index) => {
        const newCell = createElementWithProperties('li', 'cell', { id: `${i}.${index}`, realValue: `${el}` });
        this.playField.append(newCell);
      });
    }
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
    const winArray = this.winField.flat();
    for (let i = 0; i < this.playField.children.length; i += 1) {
      if (this.playField.children[i].getAttribute('realValue') === '1' || winArray[i] === 1) {
        this.playField.children[i].classList.add('cell_dark');
      } else {
        this.playField.children[i].classList = 'cell';
      }
    }
    this.toggleBlockCells();
  }

  toggleBlockCells() {
    this.playField.classList.add('play-field_blocked');
  }

  changeGame(winImage, mood, savedGame) {
    this.mode = GameMood[mood];
    this.winField = winImage;
    this.element.classList = `game-field game-field_${this.mode}`;
    this.init(savedGame);
  }

  renderSavedField(savedGame) {
    this.playField.innerHTML = '';
    this.playField.classList.remove('play-field_blocked');
    for (let i = 0; i < savedGame.length; i += 1) {
      savedGame[i].forEach((el, index) => {
        const newCell = createElementWithProperties('li', 'cell', { id: `${i}.${index}` });
        if (el === 1) newCell.classList.add('cell_dark');
        this.playField.append(newCell);
      });
    }
  }
}

export default GameFields;