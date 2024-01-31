import { createElementWithProperties } from '../../utils/utils';
import './modalLevel.scss';
import { templatesByLevel } from '../../data';

const ModalConst = {
  message: 'Choose game, please',
  showModal: 'modal_active',
};

class ModalLevel {
  constructor() {
    this.level = 'easy';
    this.element = createElementWithProperties('div', 'modal modal_level');
    this.renderModalContent();
  }

  renderModalContent() {
    this.container = createElementWithProperties('div', 'modal__content');
    this.title = createElementWithProperties('h2', 'modal__title', undefined, [{ innerText: ModalConst.message }]);
    this.buttonsLevelContainer = createElementWithProperties('div', 'modal__buttons');
    for (let i = 0; i < Object.keys(templatesByLevel).length; i += 1) {
      const btn = createElementWithProperties('button', 'btn modal__button', { type: 'button' }, [
        { innerText: `${Object.keys(templatesByLevel)[i]}` },
      ]);
      if (btn.innerText === this.level) btn.classList.add('modal__button_active');
      this.buttonsLevelContainer.append(btn);
    }
    this.buttonsImgContainer = createElementWithProperties('div', 'modal__level-buttons');
    this.renderImages(this.level);
    this.container.append(this.title, this.buttonsLevelContainer, this.buttonsImgContainer);
    this.element.append(this.container);
  }

  renderImages(level) {
    this.level = level;
    this.changeActiveLevelButton(this.level);
    this.buttonsImgContainer.innerHTML = '';
    const allImagesNames = templatesByLevel[this.level];
    for (let i = 0; i < allImagesNames.length; i += 1) {
      const btn = createElementWithProperties('button', 'btn modal__button', { type: 'button' }, [
        { innerText: `${allImagesNames[i].name}` },
      ]);
      this.buttonsImgContainer.append(btn);
    }
  }

  changeActiveLevelButton(newLevel) {
    for (let i = 0; i < this.buttonsLevelContainer.children.length; i += 1) {
      const btn = this.buttonsLevelContainer.children[i];
      btn.classList.remove('modal__button_active');
      if (btn.innerText === newLevel) btn.classList.add('modal__button_active');
    }
  }

  showModal() {
    this.element.classList.add(ModalConst.showModal);
  }

  closeModal() {
    this.element.classList.remove(ModalConst.showModal);
  }
}

export default ModalLevel;
