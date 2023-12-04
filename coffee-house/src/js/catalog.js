import createElementWithProperties from './utils';
import Products from './productsList';
import Modal from './modal';

const CatalogConst = {
  categories: {
    0: 'coffee',
    1: 'tea',
    2: 'dessert',
  },
  firstCategory: 0,
  body: 'no-scroll',
  tabChecked: 'tab_checked',
  itemHidden: 'catalog__item_hidden',
  menuActive: 'menu__btn_active',
};

class Catalog {
  constructor() {
    this.category = CatalogConst.categories[CatalogConst.firstCategory];
    this.parentEl = document.querySelector('.catalog');
    this.body = document.querySelector('body');
    this.addButton = document.querySelector('.menu__btn');
    this.tabs = document.querySelectorAll('.menu__tabs .tab');
    this.products = [];
    this.size = Products.length;
    this.modal = new Modal();
  }

  bindListeners() {
    const context = this;
    window.addEventListener('resize', () => context.renderCatalog());
    this.addButton.addEventListener('click', () => this.showMoreProducts());
    for (let i = 0; i < this.tabs.length; i += 1) {
      this.tabs[i].addEventListener('click', () => this.changeCategory(i));
    }
  }

  renderCard(data) {
    const li = createElementWithProperties('li', 'catalog__item');
    const imgContainer = createElementWithProperties('div', 'catalog__img-container');
    const img = createElementWithProperties('img', 'catalog__img', { alt: `${this.category} image`, src: `${data.img}` });
    imgContainer.append(img);
    const content = createElementWithProperties('div', 'catalog__content');
    const title = createElementWithProperties('h3', 'catalog__title');
    title.innerText = data.name;
    const description = createElementWithProperties('p', 'catalog__desc');
    description.innerText = data.description;
    const price = createElementWithProperties('strong', 'catalog__price');
    price.innerHTML = `&#x24;${data.price}`;
    content.append(title, description, price);
    li.append(imgContainer, content);
    return li;
  }

  renderCatalog() {
    this.findCatalogSize();
    this.parentEl.innerHTML = '';
    this.products = [];
    this.addButton.classList.remove(CatalogConst.menuActive);
    for (let i = 0; i < Products.length; i += 1) {
      if (Products[i].category === this.category) {
        const productItem = this.renderCard(Products[i]);
        productItem.addEventListener('click', () => this.createModal(Products[i]));
        this.parentEl.append(productItem);
        this.products.push(productItem);
        if (this.products.length > this.size) {
          productItem.classList.add(CatalogConst.itemHidden);
          this.addButton.classList.add(CatalogConst.menuActive);
        }
      }
    }
  }

  findCatalogSize() {
    if (window.innerWidth <= 768) {
      this.size = 4;
    }
    if (window.innerWidth > 768) {
      this.size = Products.length;
    }
  }

  showMoreProducts() {
    for (let i = 0; i < this.products.length; i += 1) {
      if (this.products[i].classList.contains(CatalogConst.itemHidden)) {
        this.products[i].classList.remove(CatalogConst.itemHidden);
      }
    }
    this.addButton.classList.remove(CatalogConst.menuActive);
  }

  createModal(data) {
    this.modal.init(data);
    this.modal.renderModal();
    this.modal.bindListeners();
    this.body.classList.add(CatalogConst.body);
  }

  changeTab(numberOfCategory) {
    for (let i = 0; i < this.tabs.length; i += 1) {
      this.tabs[i].classList.remove(CatalogConst.tabChecked);
    }
    this.tabs[numberOfCategory].classList.add(CatalogConst.tabChecked);
  }

  changeCategory(numberOfCategory) {
    this.category = CatalogConst.categories[numberOfCategory];
    this.changeTab(numberOfCategory);
    this.renderCatalog();
  }
}

export default Catalog;
