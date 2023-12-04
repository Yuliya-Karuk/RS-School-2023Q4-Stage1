/* eslint-disable class-methods-use-this */
import createElementWithProperties from './utils';
import infoSvg from '../img/icons/info.svg';

const ModalConst = {
  use: '<use href="./src/img/icons/sprite.svg#info"></use>',
  infoText: 'The cost is not final. Download our mobile app to see the final price and place your order. Earn loyalty points and enjoy your favorite coffee with up to 20% discount.',
  body: 'no-scroll',
  showModal: 'modal_active',
};

class Modal {
  constructor() {
    this.modal = document.querySelector('.modal');
    this.body = document.querySelector('body');
  }

  init(data) {
    this.data = data;
    this.sizes = Object.keys(this.data.sizes);
    this.startPrice = Number(this.data.price);
    this.totalPrice = this.data.price;
    this.modal.classList.add(ModalConst.showModal);
  }

  renderModal() {
    const container = createElementWithProperties('div', 'product');
    const imgContainer = this.renderImgBlock();
    const content = this.renderContentBlock();
    container.append(imgContainer, content);
    this.modal.append(container);
    this.body.append(this.modal);
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
    const divPrice = this.renderTotal();
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

  renderTotal() {
    const div = createElementWithProperties('div', 'product__total-wrapper');
    const title = createElementWithProperties('strong', 'product__total', undefined, [{ innerText: 'Total:' }]);
    this.price = createElementWithProperties('strong', 'product__total', undefined, [{ innerHTML: `&#36;${this.totalPrice}` }]);
    div.append(title, this.price);
    return div;
  }

  renderInfoBlock() {
    const div = createElementWithProperties('div', 'product__info-wrapper');
    const svg = createElementWithProperties('img', 'product__info-img', {
      alt: 'info icon', src: infoSvg, width: '16', height: '16',
    });
    const text = createElementWithProperties('span', 'product__info-text', undefined, [{ innerText: ModalConst.infoText }]);
    div.append(svg, text);
    return div;
  }

  bindListeners() {
    const context = this;
    this.tabs = this.modal.querySelectorAll('.tab');
    for (let i = 0; i < this.tabs.length; i += 1) {
      this.tabs[i].addEventListener('click', (e) => {
        if (e.target === this.tabs[i].firstChild) this.changePrice();
      });
    }
    this.buttonClose.addEventListener('click', () => this.closeModal());
    this.modal.addEventListener('click', (e) => {
      if (!e.target.closest('.product') && this.modal.classList.contains(ModalConst.showModal)) context.closeModal();
    });
  }

  changePrice() {
    this.countPrice();
    this.price.innerHTML = `&#36;${this.totalPrice}`;
  }

  countPrice() {
    let price = this.startPrice;
    for (let i = 0; i < this.tabs.length; i += 1) {
      if (this.tabs[i].firstChild.checked === true) {
        price += Number(this.tabs[i].firstChild.value);
      }
    }
    this.totalPrice = Number.parseFloat(price).toFixed(2);
  }

  closeModal() {
    this.modal.innerHTML = '';
    this.modal.classList.remove(ModalConst.showModal);
    this.body.classList.remove(ModalConst.body);
  }
}

export default Modal;
