import { createElementWithProperties, prepareTimeFormat } from '../../utils/utils';
import './modalScore.scss';

const ModalConst = {
  showModal: 'modal_active',
  scoreRows: 5,
  noScoreMessage: 'There are no win records',
};

class ModalScore {
  constructor() {
    this.element = createElementWithProperties('div', 'modal modal_score');
    this.renderModalContent();
  }

  renderModalContent() {
    this.container = createElementWithProperties('div', 'modal__content');
    this.title = createElementWithProperties('h2', 'modal__title', undefined, [{ innerText: 'Score Table' }]);
    this.scoreList = createElementWithProperties('div', 'modal__list');
    this.closeButton = createElementWithProperties('button', 'btn modal__button', { type: 'button' }, [
      { innerText: 'Close' },
    ]);
    this.container.append(this.title, this.scoreList, this.closeButton);
    this.element.append(this.container);
  }

  renderScoreList(results) {
    this.scoreList.innerHTML = '';
    if (results) {
      for (let i = 0; i < results.length; i += 1) {
        const text = `${i + 1}. Game (${results[i].name}) - ${results[i].level} - ${prepareTimeFormat(results[i].value)}`;
        const resultItem = createElementWithProperties('span', 'modal__score-item', undefined, [{ innerText: text }]);
        resultItem.classList.add('modal-score__item');
        this.scoreList.append(resultItem);
      }
    } else {
      const span = createElementWithProperties('span', 'modal__score-span', undefined, [
        { innerText: ModalConst.noScoreMessage },
      ]);
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

export default ModalScore;
