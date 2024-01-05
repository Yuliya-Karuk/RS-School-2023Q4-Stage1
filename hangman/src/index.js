import Keyboard from './components/keyboard/keyboard';
import './sass/index.scss';

const body = document.querySelector('body');
const keyboard = new Keyboard();
body.append(keyboard.renderKeyboard());
