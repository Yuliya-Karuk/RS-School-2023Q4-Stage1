const BurgerClasses = {
  navMenu: 'nav_active',
  burgerButton: 'burger_active',
  body: 'no-scroll',
  navMenuLinkDisabled: 'nav__menu_disabled',
};

class Burger {
  constructor() {
    this.burgerButton = document.querySelector('.burger');
    this.navMenu = document.querySelector('.nav');
    this.navLinks = document.querySelectorAll('.nav__link');
    this.navMenuLink = document.querySelector('.nav__menu');
    this.body = document.querySelector('body');
  }

  toggleBurgerMenu() {
    this.navMenu.classList.add('nav_start');
    if (!this.navMenu.classList.contains(BurgerClasses.navMenu))
      window.scrollTo({ top: 0, left: 0 });
    this.navMenu.classList.toggle(BurgerClasses.navMenu);
    this.burgerButton.classList.toggle(BurgerClasses.burgerButton);
    this.body.classList.toggle(BurgerClasses.body);
  }

  clickLink(e) {
    if (e.animationName === 'burger-close' && this.clickedLink) {
      if (!this.clickedLink.classList.contains(BurgerClasses.navMenuLinkDisabled))
        this.clickedLink.click();
    }
  }

  handleClick(e, clickedEl) {
    if (e.isTrusted) e.preventDefault();
    if (window.innerWidth <= 768) {
      this.toggleBurgerMenu();
      this.clickedLink = clickedEl;
    } else {
      clickedEl.click();
    }
  }

  bindListeners() {
    const context = this;

    this.burgerButton.addEventListener('click', () => this.toggleBurgerMenu());

    window.addEventListener('keydown', e => {
      if (e.keyCode === 27 && context.navMenu.classList.contains(BurgerClasses.navMenu)) {
        context.toggleBurgerMenu();
      }
    });

    document.addEventListener('click', e => {
      if (
        !e.target.classList.contains('nav') &&
        context.navMenu.classList.contains(BurgerClasses.navMenu) &&
        !context.burgerButton.contains(e.target)
      )
        context.toggleBurgerMenu();
    });

    for (let i = 0; i < this.navLinks.length; i += 1) {
      this.navLinks[i].addEventListener('click', e => this.handleClick(e, this.navLinks[i]));
    }

    this.navMenuLink.addEventListener('click', e => this.handleClick(e, this.navMenuLink));

    this.navMenu.addEventListener('animationend', e => this.clickLink(e));
  }
}

export default Burger;
