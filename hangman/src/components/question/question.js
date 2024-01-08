import createElementWithProperties from '../../utils/utils';
import './question.scss';

class Question {
  constructor(data) {
    this.question = data.question;
    this.answer = data.answer.toUpperCase();
    this.counter = 0;
    this.maxMistakes = 6;
    this.guessedLetters = [];
    this.letterArray = Array.from({ length: this.answer.length }, () => []);
  }

  renderBlocks() {
    this.questionBlock = createElementWithProperties('div', 'question-block');
    const questionTitle = createElementWithProperties('h2', 'question-block__question', undefined, [
      { innerText: `${this.question}` },
    ]);
    this.counterBlock = createElementWithProperties('p', 'question-block__counter', undefined, [
      { innerText: `Incorrect guesses: ${this.counter}/${this.maxMistakes}` },
    ]);
    this.answerBlock = createElementWithProperties('div', 'question-block__letters');
    this.renderAnswerBlock();
    this.questionBlock.append(questionTitle, this.counterBlock, this.answerBlock);
    return this.questionBlock;
  }

  renderAnswerBlock() {
    this.answerBlock.innerHTML = '';
    for (let i = 0; i < this.letterArray.length; i += 1) {
      const newLetter = createElementWithProperties('span', 'letter', undefined, [
        { innerText: `${this.letterArray[i]}` },
      ]);
      this.answerBlock.append(newLetter);
    }
  }

  renderCounterBlock(attempt) {
    this.counter += attempt;
    this.counterBlock.innerText = `Incorrect guesses: ${this.counter}/${this.maxMistakes}`;
  }
}

export default Question;
