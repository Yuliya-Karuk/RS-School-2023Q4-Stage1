import './sass/index.scss';
import PlayField from './components/playField/playField';

const body = document.querySelector('body');
const newPlayField = new PlayField(0);
body.append(newPlayField.init());
