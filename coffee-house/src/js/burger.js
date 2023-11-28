const BurgerClasses = {
  navMenu: 'nav_active',
  burgerButton: 'burger_active',
  body: 'no-scroll',
};

class Burger {
  constructor() {
    this.burgerButton = document.querySelector('.burger');
    this.navMenu = document.querySelector('.nav');
    this.navLinks = document.querySelectorAll('.nav__link');
    this.navMenuLink = document.querySelector('.nav__menu_disabled');
    this.body = document.querySelector('body');
  }

  toggleBurgerMenu() {
    this.navMenu.classList.add('nav_start');
    this.navMenu.classList.toggle(BurgerClasses.navMenu);
    this.burgerButton.classList.toggle(BurgerClasses.burgerButton);
    this.body.classList.toggle(BurgerClasses.body);
  }

  bindListeners() {
    const context = this;

    this.burgerButton.addEventListener('click', () => context.toggleBurgerMenu());

    window.addEventListener('keydown', (e) => {
      if (e.keyCode === 27 && context.navMenu.classList.contains(BurgerClasses.navMenu)) {
        context.toggleBurgerMenu();
      }
    });

    document.addEventListener('click', (e) => {
      if (!e.target.classList.contains('nav') && context.navMenu.classList.contains(BurgerClasses.navMenu) && !context.burgerButton.contains(e.target)) context.toggleBurgerMenu();
    });

    for (let i = 0; i < this.navLinks.length; i += 1) {
      this.navLinks[i].addEventListener('click', () => context.toggleBurgerMenu());
    }

    this.navMenuLink.addEventListener('click', (e) => {
      e.preventDefault();
      context.toggleBurgerMenu();
    });
  }
}

export default Burger;
