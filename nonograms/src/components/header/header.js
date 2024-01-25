import { createElementWithProperties } from '../../utils/utils';
import './header.scss';
import logo from '../../images/logo.png';

class Header {
  constructor() {
    this.gameName = 'Nonograms';
  }

  init() {
    this.header = createElementWithProperties('header', 'header');
    const headerWrapper = createElementWithProperties('div', 'header__wrapper');
    const headerLogo = createElementWithProperties('div', 'header__logo');
    const img = createElementWithProperties('img', 'header__img', {
      alt: 'logo image',
      src: `${logo}`,
    });
    const title = createElementWithProperties('h1', 'header__title', undefined, [{ innerText: `${this.gameName}` }]);
    headerLogo.append(img, title);
    headerWrapper.append(headerLogo);
    this.header.append(headerWrapper);
    return this.header;
  }
}

export default Header;
