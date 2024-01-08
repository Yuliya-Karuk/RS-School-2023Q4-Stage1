import './sass/index.scss';
import GameHandler from './components/game/gameHandler';

const body = document.querySelector('body');
const game = new GameHandler(body);
game.init();
game.bindListeners();
