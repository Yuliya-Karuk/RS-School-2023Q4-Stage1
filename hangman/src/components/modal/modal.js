import { createElementWithProperties } from '../../utils/utils';
import './modal.scss';

const ModalConst = {
  lose: 'You lose 😔',
  win: 'You win 😉',
  showModal: 'modal_active',
};

class Modal {
  constructor(answer) {
    this.answer = answer.toUpperCase();
  }

  init() {
    this.modal = createElementWithProperties('div', 'modal');
    this.renderModalContent();
    return this.modal;
  }

  renderModalContent() {
    this.container = createElementWithProperties('div', 'final');
    this.title = createElementWithProperties('h2', 'final__title');
    this.secretWord = createElementWithProperties('p', 'final__answer', undefined, [
      { innerText: `${this.answer}` },
    ]);
    this.button = createElementWithProperties('button', 'final__button', { type: 'button' }, [
      { innerText: 'Play again' },
    ]);
    this.container.append(this.title, this.secretWord, this.button);
    this.modal.append(this.container);
  }

  showModal(result) {
    this.title.innerText = '';
    this.modal.classList.add(ModalConst.showModal);
    this.title.innerText = `${ModalConst[result]}`;
  }

  restartModal(newAnswer) {
    this.modal.classList.remove(ModalConst.showModal);
    this.answer = newAnswer.toUpperCase();
    this.secretWord.innerText = `${this.answer}`;
  }
}

export default Modal;
