import { createElementWithProperties } from '../../utils/utils';
import './footer.scss';
import logoRS from '../../img/rs.svg';

class Footer {
  constructor() {
    this.learnLink = 'https://javascript.info/';
    this.RSLink = 'https://rs.school/js-stage0/';
    this.date = '2024';
  }

  init() {
    this.footer = createElementWithProperties('footer', 'footer');
    const linkJS = createElementWithProperties(
      'a',
      'link footer__link footer__link_js',
      { href: `${this.learnLink}` },
      [{ innerText: 'Learn more about JavaScript' }],
    );
    const linkRS = createElementWithProperties('a', 'footer__link footer__link_rs', {
      href: `${this.RSLink}`,
    });
    const img = createElementWithProperties('img', 'footer__img', {
      alt: 'RS School logo',
      src: `${logoRS}`,
    });
    linkRS.append(img);
    this.footer.append(linkJS, linkRS);
    return this.footer;
  }
}

export default Footer;
