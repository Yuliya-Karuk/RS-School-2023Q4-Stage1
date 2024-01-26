import { createElementWithProperties } from '../../utils/utils';
import './modalWin.scss';

const ModalConst = {
  win: 'Great! You have solved the nonogram in ## seconds! 😉',
  showModal: 'modal_active',
};

class ModalWin {
  constructor(parentEl) {
    this.parentEl = parentEl;
    this.element = createElementWithProperties('div', 'modal modal_win');
    this.renderModalContent();
  }

  renderModalContent() {
    this.container = createElementWithProperties('div', 'modal__content');
    this.title = createElementWithProperties('h2', 'modal__title');
    const buttonsContainer = createElementWithProperties('div', 'modal__buttons');
    this.randomButton = createElementWithProperties('button', 'btn modal__button', { type: 'button' }, [
      { innerText: 'Random game' },
    ]);
    this.scoreButton = createElementWithProperties('button', 'btn modal__button', { type: 'button' }, [
      { innerText: 'Score' },
    ]);
    this.chooseGameButton = createElementWithProperties('button', 'btn modal__button', { type: 'button' }, [
      { innerText: 'Choose game' },
    ]);
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

export default ModalWin;
