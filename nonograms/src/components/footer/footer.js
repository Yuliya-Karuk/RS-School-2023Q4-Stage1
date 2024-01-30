import { createElementWithProperties } from '../../utils/utils';
import './footer.scss';

class Footer {
  constructor() {
    this.githubLink = 'https://github.com/Yuliya-Karuk';
    this.RSLink = 'https://github.com/rolling-scopes-school/tasks/tree/master/stage1';
    this.element = createElementWithProperties('footer', 'footer');
    this.init();
  }

  init() {
    const footerWrapper = createElementWithProperties('div', 'footer__wrapper');
    const linkGithub = createElementWithProperties('a', 'footer__link', { href: `${this.githubLink}` }, [
      { innerText: 'Yuliya' },
    ]);
    const githubImg = createElementWithProperties('span', 'footer__img footer__img_github');
    const linkRS = createElementWithProperties('a', 'footer__link', {
      href: `${this.RSLink}`,
      'aria-label': 'link to RS School',
    });
    const rsImg = createElementWithProperties('span', 'footer__img footer__img_rs');
    linkGithub.append(githubImg);
    linkRS.append(rsImg);
    footerWrapper.append(linkGithub, linkRS);
    this.element.append(footerWrapper);
  }
}

export default Footer;
