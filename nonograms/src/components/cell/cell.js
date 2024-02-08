import { createElementWithProperties } from '../../utils/utils';
import './cell.scss';

const CellStates = {
  empty: 'cell',
  dark: 'cell cell_dark',
  crossed: 'cell cell_crossed',
};

class Cell {
  constructor(id, realValue, state = 'empty') {
    this.id = id;
    this.realValue = realValue;
    this.state = state;
    this.element = createElementWithProperties('li', CellStates[this.state], {
      id: this.id,
      realValue: this.realValue,
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

export default Cell;
