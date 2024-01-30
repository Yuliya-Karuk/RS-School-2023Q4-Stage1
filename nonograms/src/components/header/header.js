import { createElementWithProperties } from '../../utils/utils';
import './header.scss';
import logo from '../../images/logo.png';
import save from '../../images/save2.svg';
import load from '../../images/load2.svg';

class Header {
  constructor() {
    this.gameName = 'Nonograms';
    this.element = createElementWithProperties('header', 'header');
    this.init();
  }

  init() {
    const headerWrapper = createElementWithProperties('div', 'header__wrapper');
    const headerLogo = createElementWithProperties('div', 'header__logo');
    const img = createElementWithProperties('img', 'header__img', {
      alt: 'logo image',
      src: `${logo}`,
    });
    const title = createElementWithProperties('h1', 'header__title', undefined, [{ innerText: `${this.gameName}` }]);
    this.nav = createElementWithProperties('nav', 'nav');
    this.renderNav();
    headerLogo.append(img, title);
    headerWrapper.append(headerLogo, this.nav);
    this.element.append(headerWrapper);
  }

  renderNav() {
    this.resetButton = createElementWithProperties('button', 'btn nav__button', { type: 'button' }, [
      { innerText: 'Reset' },
    ]);
    this.solutionButton = createElementWithProperties('button', 'btn nav__button', { type: 'button' }, [
      { innerText: 'Solution' },
    ]);
    this.randomButton = createElementWithProperties('button', 'btn nav__button', { type: 'button' }, [
      { innerText: 'Random game' },
    ]);
    this.newGameButton = createElementWithProperties('button', 'btn nav__button', { type: 'button' }, [
      { innerText: 'New game' },
    ]);
    this.scoreButton = createElementWithProperties('button', 'btn nav__button', { type: 'button' }, [
      { innerText: 'Score' },
    ]);
    const imgSave = createElementWithProperties('img', 'nav__img', { alt: 'Save icon', src: `${save}` });
    const imgLoad = createElementWithProperties('img', 'nav__img', { alt: 'Save icon', src: `${load}` });
    this.saveGameButton = createElementWithProperties('button', 'btn nav__button nav__button_save', { type: 'button' });
    this.loadGameButton = createElementWithProperties('button', 'btn nav__button nav__button_load', { type: 'button' });
    this.saveGameButton.append(imgSave);
    this.loadGameButton.append(imgLoad);
    this.nav.append(
      this.resetButton,
      this.solutionButton,
      this.randomButton,
      this.newGameButton,
      this.saveGameButton,
      this.loadGameButton,
      this.scoreButton,
    );
  }
}

export default Header;
