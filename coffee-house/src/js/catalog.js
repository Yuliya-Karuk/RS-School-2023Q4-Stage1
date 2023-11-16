import createElementWithProperties from './utils';
import Products from './productsList';

class Catalog {
  constructor(category) {
    this.category = category;
    this.parentEl = document.querySelector('.catalog');
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
    for (let i = 0; i < Products.length; i += 1) {
      if (Products[i].category === this.category) {
        const productItem = this.renderCard(Products[i]);
        this.parentEl.append(productItem);
      }
    }
  }
}

export default Catalog;
