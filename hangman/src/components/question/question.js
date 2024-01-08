import { createElementWithProperties } from '../../utils/utils';
import './question.scss';

class Question {
  constructor() {
    this.maxMistakes = 6;
  }

  init(data) {
    this.questionBlock = createElementWithProperties('div', 'question-block');
    this.renderInnerBlocks(data);
    return this.questionBlock;
  }

  renderInnerBlocks(data) {
    this.questionBlock.innerHTML = '';
    this.question = data.question;
    this.answer = data.answer.toUpperCase();
    this.counter = 0;
    this.letterArray = Array.from({ length: this.answer.length }, () => []);
    const questionTitle = createElementWithProperties('h2', 'question-block__question', undefined, [
      { innerText: `${this.question}` },
    ]);
    this.counterBlock = createElementWithProperties('p', 'question-block__counter', undefined, [
      { innerText: `Incorrect guesses: ${this.counter}/${this.maxMistakes}` },
    ]);
    this.answerBlock = createElementWithProperties('div', 'question-block__letters');
    this.renderAnswerBlock();
    this.questionBlock.append(questionTitle, this.counterBlock, this.answerBlock);
  }

  renderAnswerBlock() {
    this.answerBlock.innerHTML = '';
    for (let i = 0; i < this.letterArray.length; i += 1) {
      const newLetter = createElementWithProperties('span', 'letter', undefined, [
        { innerText: `${this.letterArray[i]}` },
      ]);
      if (this.letterArray[i].length !== 0) newLetter.classList.add('letter_guessed');
      this.answerBlock.append(newLetter);
    }
  }

  checkAnswerBlock() {
    let check = true;
    for (let i = 0; i < this.letterArray.length; i += 1) {
      if (!this.letterArray[i].length) check = false;
    }
    return check;
  }

  renderCounterBlock(attempt) {
    this.counter += attempt;
    this.counterBlock.innerText = `Incorrect guesses: ${this.counter}/${this.maxMistakes}`;
  }
}

export default Question;
