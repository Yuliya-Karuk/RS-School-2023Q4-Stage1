import './sass/index.scss';
import GameHandler from './components/game/gameHandler';
import Header from './components/header/header';
import { createElementWithProperties } from './utils/utils';
import Footer from './components/footer/footer';

const body = document.querySelector('body');
const header = new Header();
const main = createElementWithProperties('main', 'main');
const footer = new Footer();
body.append(header.init(), main, footer.init());
const game = new GameHandler(main);
game.init();
game.bindListeners();
