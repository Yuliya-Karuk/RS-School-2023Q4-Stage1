import { createElementWithProperties } from '../../utils/utils';
import './modalLevel.scss';
import { templatesByLevel } from '../../data';

const ModalConst = {
  message: 'Choose game, please',
  showModal: 'modal_active',
};

class ModalLevel {
  constructor(parentEl) {
    this.levelId = 0;
    this.level = Object.keys(templatesByLevel)[this.levelId];
    this.parentEl = parentEl;
    this.element = createElementWithProperties('div', 'modal modal_level');
    this.renderModalContent();
  }

  renderModalContent() {
    this.container = createElementWithProperties('div', 'modal__content');
    this.title = createElementWithProperties('h2', 'modal__title', undefined, [{ innerText: ModalConst.message }]);
    const buttonsContainer = createElementWithProperties('div', 'modal__buttons');
    for (let i = 0; i < Object.keys(templatesByLevel).length; i += 1) {
      const btn = createElementWithProperties('button', 'btn modal__button', { type: 'button' }, [
        { innerText: `${Object.keys(templatesByLevel)[i]}` },
      ]);
      if (i === this.levelId) btn.classList.add('modal__button_active');
      buttonsContainer.append(btn);
    }
    const imagesNamesButtons = this.renderImages();
    this.container.append(this.title, buttonsContainer, imagesNamesButtons);
    this.element.append(this.container);
  }

  renderImages() {
    const allImagesNames = Object.keys(templatesByLevel[this.level]);
    const buttonsContainer = createElementWithProperties('div', 'modal__level-buttons');
    for (let i = 0; i < allImagesNames.length; i += 1) {
      const btn = createElementWithProperties('button', 'btn modal__button', { type: 'button' }, [
        { innerText: `${allImagesNames[i]}` },
      ]);
      buttonsContainer.append(btn);
    }
    return buttonsContainer;
  }

  showModal() {
    this.element.classList.add(ModalConst.showModal);
  }

  closeModal() {
    this.element.classList.remove(ModalConst.showModal);
  }
}

export default ModalLevel;
