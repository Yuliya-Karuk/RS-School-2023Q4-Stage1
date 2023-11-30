/* eslint-disable class-methods-use-this */
import createElementWithProperties from './utils';
import infoSvg from '../img/icons/info.svg';

const ModalClasses = {
  use: '<use href="./src/img/icons/sprite.svg#info"></use>',
  infoText: 'The cost is not final. Download our mobile app to see the final price and place your order. Earn loyalty points and enjoy your favorite coffee with up to 20% discount.',
};

class Modal {
  constructor(data) {
    this.data = data;
    this.sizes = Object.keys(this.data.sizes);
    this.totalPrice = this.data.price;
    this.priceChanged = false;
  }

  renderModal() {
    this.modal = createElementWithProperties('div', 'modal modal_active');
    const container = createElementWithProperties('div', 'product');
    const imgContainer = this.renderImgBlock();
    const content = this.renderContentBlock();
    container.append(imgContainer, content);
    this.modal.append(container);
    return this.modal;
  }

  renderImgBlock() {
    const imgContainer = createElementWithProperties('div', 'product__img-container');
    const img = createElementWithProperties('img', 'product__img', { alt: `${this.data.name} image`, src: `${this.data.img}` });
    imgContainer.append(img);
    return imgContainer;
  }

  renderContentBlock() {
    const content = createElementWithProperties('div', 'product__content');
    const divTitle = this.renderTitleBlock();
    const divSizes = this.renderSizes();
    const divAdditives = this.renderAdditives();
    const divPrice = this.renderTotal(this.priceChanged);
    const divInfo = this.renderInfoBlock();
    this.buttonClose = createElementWithProperties('button', 'btn btn_dark product__button', { type: 'button' }, [{ innerText: 'Close' }]);
    content.append(divTitle, divSizes, divAdditives, divPrice, divInfo, this.buttonClose);
    return content;
  }

  renderTitleBlock() {
    const div = createElementWithProperties('div', 'product__title-wrapper');
    const title = createElementWithProperties('h3', 'product__title', undefined, [{ innerText: this.data.name }]);
    const description = createElementWithProperties('p', 'product__desc', undefined, [{ innerText: this.data.description }]);
    div.append(title, description);
    return div;
  }

  renderSizes() {
    const div = createElementWithProperties('div', 'product__list-wrapper');
    const title = createElementWithProperties('p', 'product__list-title', null, [{ innerText: 'Size' }]);
    const ul = createElementWithProperties('ul', 'product__list');
    for (let i = 0; i < this.sizes.length; i += 1) {
      const li = createElementWithProperties('li', 'btn tab');
      const input = createElementWithProperties('input', 'tab__input', {
        type: 'radio', id: `${this.sizes[i].toUpperCase()}`, name: 'size', value: `${this.data.sizes[this.sizes[i]]['add-price']}`,
      });
      if (i === 0) input.checked = true;
      const span = createElementWithProperties('span', 'tab__img-wrapper tab__span', undefined, [{ innerText: `${this.sizes[i].toUpperCase()}` }]);
      const label = createElementWithProperties('label', 'tab__label', { for: `${this.sizes[i].toUpperCase()}` }, [{ innerText: this.data.sizes[this.sizes[i]].size }]);
      li.append(input, span, label);
      ul.append(li);
    }
    div.append(title, ul);
    return div;
  }

  renderAdditives() {
    const div = createElementWithProperties('div', 'product__list-wrapper');
    const title = createElementWithProperties('p', 'product__list-title', null, [{ innerText: 'Additives' }]);
    const ul = createElementWithProperties('ul', 'product__list');
    for (let i = 0; i < this.sizes.length; i += 1) {
      const li = createElementWithProperties('li', 'btn tab');
      const input = createElementWithProperties('input', 'tab__input', {
        type: 'checkbox', id: `${this.data.additives[i].name}`, name: 'additives', value: `${this.data.additives[i]['add-price']}`,
      });
      const span = createElementWithProperties('span', 'tab__img-wrapper tab__span', undefined, [{ innerText: `${i + 1}` }]);
      const label = createElementWithProperties('label', 'tab__label', { for: `${this.data.additives[i].name}` }, [{ innerText: this.data.additives[i].name }]);
      li.append(input, span, label);
      ul.append(li);
    }
    div.append(title, ul);
    return div;
  }

  renderTotal(isChanged) {
    const div = createElementWithProperties('div', 'product__total-wrapper');
    const title = createElementWithProperties('strong', 'product__total', undefined, [{ innerText: 'Total:' }]);
    if (isChanged) this.countPrice();
    const price = createElementWithProperties('strong', 'product__total', undefined, [{ innerHTML: `&#36;${this.totalPrice}` }]);
    div.append(title, price);
    return div;
  }

  renderInfoBlock() {
    const div = createElementWithProperties('div', 'product__info-wrapper');
    const svg = createElementWithProperties('img', 'product__info-img', {
      alt: 'info icon', src: infoSvg, width: '16', height: '16',
    });
    const text = createElementWithProperties('span', 'product__info-text', undefined, [{ innerText: ModalClasses.infoText }]);
    div.append(svg, text);
    return div;
  }

  countPrice() {
    console.log(this.modal);
    const tabs = document.querySelectorAll('.tab');
    console.log(tabs);
    for (let i = 0; i < tabs.length; i += 1) {
      this.price += Number(tabs[i].firstChild.value);
    }
  }
}

export default Modal;
