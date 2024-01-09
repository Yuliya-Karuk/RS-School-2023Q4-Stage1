import { createElementWithProperties } from '../../utils/utils';
import './header.scss';
import logo from '../../img/logo.png';

class Header {
  constructor() {
    this.gameName = 'Hangman';
    this.authorGithub = 'https://github.com/Yuliya-Karuk';
    this.authorName = 'Yuliya Karuk';
  }

  init() {
    this.header = createElementWithProperties('header', 'header');
    this.logoLink = createElementWithProperties('a', 'link header__link', {
      href: `${this.authorGithub}`,
    });
    const img = createElementWithProperties('img', 'header__img', {
      alt: 'logo image',
      src: `${logo}`,
    });
    const span = createElementWithProperties('span', 'header__span', undefined, [
      { innerText: `${this.authorName}` },
    ]);
    this.logoLink.append(img, span);
    this.title = createElementWithProperties('h1', 'header__title', undefined, [
      { innerText: `${this.gameName}` },
    ]);
    this.header.append(this.logoLink, this.title);
    return this.header;
  }
}

export default Header;
