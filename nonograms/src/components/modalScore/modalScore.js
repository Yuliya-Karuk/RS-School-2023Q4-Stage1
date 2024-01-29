import { createElementWithProperties, prepareTimeFormat } from '../../utils/utils';
import './modalScore.scss';

const ModalConst = {
  showModal: 'modal_active',
  scoreRows: 5,
};

class ModalScore {
  constructor(parentEl) {
    this.parentEl = parentEl;
    this.element = createElementWithProperties('div', 'modal modal_score');
    this.renderModalContent();
  }

  renderModalContent() {
    this.container = createElementWithProperties('div', 'modal__content');
    this.title = createElementWithProperties('h2', 'modal__title', undefined, [{ innerText: 'Score Table' }]);
    this.scoreList = createElementWithProperties('ul', 'modal__list');
    this.closeButton = createElementWithProperties('button', 'btn modal__button', { type: 'button' }, [
      { innerText: 'Close' },
    ]);
    this.container.append(this.title, this.scoreList, this.closeButton);
    this.element.append(this.container);
  }

  renderScoreList(results) {
    this.scoreList.innerHTML = '';
    for (let i = 0; i < results.length; i += 1) {
      const text = `${i + 1}. Game (${results[i].name}) - ${results[i].level} - ${prepareTimeFormat(results[i].value)}`;
      const resultItem = createElementWithProperties('li', 'modal__score-item', undefined, [{ innerText: text }]);
      resultItem.classList.add('modal-score__item');
      this.scoreList.append(resultItem);
    }
  }

  showModal() {
    this.element.classList.add(ModalConst.showModal);
  }

  closeModal() {
    this.element.classList.remove(ModalConst.showModal);
  }
}

export default ModalScore;
