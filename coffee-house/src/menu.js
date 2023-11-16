import Catalog from './js/catalog';

console.log('second');

document.addEventListener('DOMContentLoaded', () => {
  const catalog = new Catalog('coffee');
  catalog.renderCatalog();
});
