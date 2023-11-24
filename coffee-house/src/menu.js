import Catalog from './js/catalog';
import Burger from './js/burger';

document.addEventListener('DOMContentLoaded', () => {
  const catalog = new Catalog('coffee');
  catalog.bindListeners();
  catalog.renderCatalog();
  const burger = new Burger();
  burger.bindListeners();
});
