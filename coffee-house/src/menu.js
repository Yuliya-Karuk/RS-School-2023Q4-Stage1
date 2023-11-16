import Catalog from './js/catalog';

document.addEventListener('DOMContentLoaded', () => {
  const catalog = new Catalog('coffee');
  catalog.renderCatalog();
});
