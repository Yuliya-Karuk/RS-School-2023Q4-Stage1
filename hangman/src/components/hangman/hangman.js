/* eslint-disable class-methods-use-this */
import createElementWithProperties from '../../utils/utils';
import images from '../images/images';
import './hangman.scss';

class Hangman {
  constructor() {
    this.hangmanList = [];
  }

  init() {
    this.hangmanBlock = createElementWithProperties('div', 'hangman');
    for (let i = 0; i < Object.keys(images).length; i += 1) {
      const newImg = this.createImg(images[Object.keys(images)[i]]);
      if (i === 0) newImg.classList.add('hangman__img_seen');
      this.hangmanBlock.append(newImg);
    }
    return this.hangmanBlock;
  }

  createImg(img) {
    const div = createElementWithProperties('div', 'hangman__img');
    div.style.backgroundImage = `url(${img})`;
    return div;
  }
}

export default Hangman;
