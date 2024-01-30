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
    const imgSave = createElementWithProperties('span', 'nav__img nav__img_save', { 'aria-label': 'Save icon' });
    const imgLoad = createElementWithProperties('span', 'nav__img nav__img_load', { 'aria-label': 'Save icon' });
    this.saveGameButton = createElementWithProperties('button', 'btn nav__button nav__button_save', { type: 'button' });
    this.loadGameButton = createElementWithProperties('button', 'btn nav__button nav__button_load', { type: 'button' });
    this.saveGameButton.append(imgSave);
    this.loadGameButton.append(imgLoad);
    this.renderThemeSwitcher();
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

  renderThemeSwitcher() {
    const headerSwitcher = createElementWithProperties('div', 'switcher');
    const switcherLabel = createElementWithProperties('label', 'switcher__label', { for: 'switcher' });
    this.switcherInput = createElementWithProperties('input', 'switcher__input', { id: 'switcher', type: 'checkbox' });
    const switcherRound = createElementWithProperties('span', 'switcher__round round');
    switcherLabel.append(this.switcherInput, switcherRound);
    headerSwitcher.append(switcherLabel);
    this.nav.append(headerSwitcher);
  }
}

export default Header;
