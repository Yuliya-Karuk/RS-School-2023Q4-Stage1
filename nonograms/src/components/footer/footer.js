import { createElementWithProperties } from '../../utils/utils';
import './footer.scss';
import logoRS from '../../images/rs.svg';
import logoGithub from '../../images/github.svg';

class Footer {
  constructor() {
    this.githubLink = 'https://github.com/Yuliya-Karuk';
    this.RSLink = 'https://github.com/rolling-scopes-school/tasks/tree/master/stage1';
  }

  init() {
    this.footer = createElementWithProperties('footer', 'footer');
    const footerWrapper = createElementWithProperties('div', 'footer__wrapper');
    const linkGithub = createElementWithProperties('a', 'link footer__link', { href: `${this.githubLink}` }, [
      { innerText: 'Yuliya' },
    ]);
    const githubImg = createElementWithProperties('img', 'footer__img', {
      alt: 'Github logo',
      src: `${logoGithub}`,
    });
    const linkRS = createElementWithProperties('a', 'footer__link', {
      href: `${this.RSLink}`,
      'aria-label': 'link to RS School',
    });
    const rsImg = createElementWithProperties('img', 'footer__img', {
      alt: 'RS School logo',
      src: `${logoRS}`,
    });
    linkGithub.append(githubImg);
    linkRS.append(rsImg);
    footerWrapper.append(linkGithub, linkRS);
    this.footer.append(footerWrapper);
    return this.footer;
  }
}

export default Footer;
