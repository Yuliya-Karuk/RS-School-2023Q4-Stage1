import Keyboard from './components/keyboard/keyboard';
import Question from './components/question/question';
import './sass/index.scss';
import data from './data/data';

const body = document.querySelector('body');
const question = new Question(data[1]);
body.append(question.renderBlocks());
const keyboard = new Keyboard();
body.append(keyboard.renderKeyboard());
