import GameHandler from './components/game/gameHandler';
import './sass/index.scss';

const body = document.querySelector('body');
const game = new GameHandler(body);
game.init();
