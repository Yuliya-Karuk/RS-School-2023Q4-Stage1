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

export function countClues(arr) {
  const left = [];
  const top = [];
  for (let i = 0; i < arr.length; i += 1) {
    const partLeft = [];
    const partTop = [];
    let countLeft = 0;
    let countTop = 0;
    for (let j = 0; j < arr[i].length; j += 1) {
      if (arr[i][j] === 1) {
        countLeft += 1;
      }
      if ((arr[i][j] === 0 && countLeft !== 0) || (countLeft !== 0 && j === arr[i].length - 1)) {
        partLeft.push(countLeft);
        countLeft = 0;
      }
      if (arr[j][i] === 1) {
        countTop += 1;
      }
      if ((arr[j][i] === 0 && countTop !== 0) || (countTop !== 0 && j === arr[i].length - 1)) {
        partTop.push(countTop);
        countTop = 0;
      }
    }
    left.push(partLeft);
    top.push(partTop);
  }
  return [left, top];
}

export function createArrayOneSize(arr) {
  const max = Math.max(...arr.map(el => el.length));
  for (let i = 0; i < arr.length; i += 1) {
    while (arr[i].length < max) {
      arr[i].unshift('');
    }
  }
  return arr;
}

export function launchTimer(timerEl) {
  const timerElement = timerEl;
  let timerSeconds = 0;
  let timerMinutes = 0;

  return setInterval(() => {
    timerSeconds += 1;

    if (timerSeconds === 60) {
      timerMinutes += 1;
      timerSeconds = 0;
    }

    const formattedSec = String(timerSeconds).padStart(2, '0');
    const formattedMin = String(timerMinutes).padStart(2, '0');
    timerElement.innerText = `${formattedMin}:${formattedSec}`;
  }, 1000);
}
