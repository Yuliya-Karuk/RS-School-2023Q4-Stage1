export function createElementWithProperties(el, elClassName, attr, props) {
  const element = document.createElement(el);
  element.className = elClassName;
  if (attr) {
    for (let i = 0; i < Object.keys(attr).length; i += 1) {
      const key = Object.keys(attr)[i];
      element.setAttribute(key, attr[key]);
    }
  }
  if (props) Object.assign(element, ...props);
  return element;
}

export function getRandomNumberExceptPrevious(min, max, previous) {
  let newNumber = Math.floor(Math.random() * (max - min + 1) + min);
  while (newNumber === previous) {
    newNumber = Math.floor(Math.random() * (max - min + 1) + min);
  }
  return newNumber;
}
