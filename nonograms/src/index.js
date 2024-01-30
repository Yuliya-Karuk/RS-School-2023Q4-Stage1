import GameHandler from './components/game/gameHandler';
import './sass/index.scss';

const startTheme = 'dark';

document.documentElement.setAttribute('theme', startTheme);
const body = document.querySelector('body');
const game = new GameHandler(body, startTheme);
game.init();
