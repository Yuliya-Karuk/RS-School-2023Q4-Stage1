import './sass/index.scss';
import PlayField from './components/playField/playField';
import Header from './components/header/header';
import Footer from './components/footer/footer';
import Main from './components/main/main';

const body = document.querySelector('body');
const main = new Main();
const newPlayField = new PlayField(0);
const header = new Header();
const footer = new Footer();
main.main.append(newPlayField.init());
body.append(header.init(), main.main, footer.init());
