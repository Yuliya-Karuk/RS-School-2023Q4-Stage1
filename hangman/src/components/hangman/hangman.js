/* eslint-disable class-methods-use-this */
import { createElementWithProperties } from '../../utils/utils';
import images from '../images/images';
import './hangman.scss';

class Hangman {
  constructor() {
    this.hangmanList = [];
    this.counter = 0;
  }

  init() {
    this.hangmanBlock = createElementWithProperties('div', 'hangman');
    this.renderImages();
    return this.hangmanBlock;
  }

  renderImages() {
    this.hangmanBlock.innerHTML = '';
    this.hangmanList = [];
    this.counter = 0;
    for (let i = 0; i < Object.keys(images).length; i += 1) {
      const newImg = this.createImg(images[Object.keys(images)[i]]);
      if (i === 0) newImg.classList.add('hangman__img_seen');
      this.hangmanBlock.append(newImg);
      this.hangmanList.push(newImg);
    }
  }

  createImg(img) {
    const div = createElementWithProperties('div', 'hangman__img');
    div.style.backgroundImage = `url(${img})`;
    return div;
  }

  showNextBodyPart(attempt) {
    this.counter += attempt;
    this.hangmanList[this.counter].classList.add('hangman__img_seen');
  }
}

export default Hangman;
