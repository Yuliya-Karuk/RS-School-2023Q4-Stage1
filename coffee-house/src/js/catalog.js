import createElementWithProperties from './utils';
import Products from './productsList';
import Modal from './modal';

class Catalog {
  constructor(category) {
    this.category = category;
    this.parentEl = document.querySelector('.catalog');
    this.body = document.querySelector('body');
    this.products = [];
    this.size = Products.length;
  }

  bindListeners() {
    const context = this;
    window.addEventListener('resize', () => context.renderCatalog());
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
    for (let i = 0; i < Products.length && this.products.length < this.size; i += 1) {
      if (Products[i].category === this.category) {
        const productItem = this.renderCard(Products[i]);
        productItem.addEventListener('click', () => this.createModal(Products[i]));
        this.parentEl.append(productItem);
        this.products.push(productItem);
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

  createModal(data) {
    console.log('bla');
    this.modal = new Modal(data);
    this.body.append(this.modal.renderModal());
  }
}

export default Catalog;
