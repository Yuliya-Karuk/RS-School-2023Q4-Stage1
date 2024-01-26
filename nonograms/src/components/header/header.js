import { createElementWithProperties } from '../../utils/utils';
import './header.scss';
import logo from '../../images/logo.png';

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
    this.resetButton = createElementWithProperties('button', 'nav__button nav__button_reset', { type: 'button' }, [
      { innerText: 'Reset' },
    ]);
    this.solutionButton = createElementWithProperties('button', 'nav__button nav__button_reset', { type: 'button' }, [
      { innerText: 'Solution' },
    ]);
    this.randomButton = createElementWithProperties('button', 'nav__button nav__button_random', { type: 'button' }, [
      { innerText: 'Random game' },
    ]);
    this.nav.append(this.resetButton, this.solutionButton, this.randomButton);
  }
}

export default Header;
