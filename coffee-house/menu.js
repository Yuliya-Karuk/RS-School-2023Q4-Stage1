/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/catalog.js":
/*!***************************!*\
  !*** ./src/js/catalog.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "./src/js/utils.js");
/* harmony import */ var _productsList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./productsList */ "./src/js/productsList.js");


class Catalog {
  constructor(category) {
    this.category = category;
    this.parentEl = document.querySelector('.catalog');
  }
  renderCard(data) {
    const li = (0,_utils__WEBPACK_IMPORTED_MODULE_0__["default"])('li', 'catalog__item');
    const imgContainer = (0,_utils__WEBPACK_IMPORTED_MODULE_0__["default"])('div', 'catalog__img-container');
    const img = (0,_utils__WEBPACK_IMPORTED_MODULE_0__["default"])('img', 'catalog__img', {
      alt: `${this.category} image`,
      src: `${data.img}`
    });
    imgContainer.append(img);
    const content = (0,_utils__WEBPACK_IMPORTED_MODULE_0__["default"])('div', 'catalog__content');
    const title = (0,_utils__WEBPACK_IMPORTED_MODULE_0__["default"])('h3', 'catalog__title');
    title.innerText = data.name;
    const description = (0,_utils__WEBPACK_IMPORTED_MODULE_0__["default"])('p', 'catalog__desc');
    description.innerText = data.description;
    const price = (0,_utils__WEBPACK_IMPORTED_MODULE_0__["default"])('strong', 'catalog__price');
    price.innerHTML = `&#x24;${data.price}`;
    content.append(title, description, price);
    li.append(imgContainer, content);
    return li;
  }
  renderCatalog() {
    for (let i = 0; i < _productsList__WEBPACK_IMPORTED_MODULE_1__["default"].length; i += 1) {
      if (_productsList__WEBPACK_IMPORTED_MODULE_1__["default"][i].category === this.category) {
        const productItem = this.renderCard(_productsList__WEBPACK_IMPORTED_MODULE_1__["default"][i]);
        this.parentEl.append(productItem);
      }
    }
  }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Catalog);

/***/ }),

/***/ "./src/js/productsList.js":
/*!********************************!*\
  !*** ./src/js/productsList.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _img_menu_coffee1_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../img/menu/coffee1.jpg */ "./src/img/menu/coffee1.jpg");
/* harmony import */ var _img_menu_coffee2_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../img/menu/coffee2.jpg */ "./src/img/menu/coffee2.jpg");
/* harmony import */ var _img_menu_coffee3_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../img/menu/coffee3.jpg */ "./src/img/menu/coffee3.jpg");
/* harmony import */ var _img_menu_coffee4_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../img/menu/coffee4.jpg */ "./src/img/menu/coffee4.jpg");
/* harmony import */ var _img_menu_coffee5_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../img/menu/coffee5.jpg */ "./src/img/menu/coffee5.jpg");
/* harmony import */ var _img_menu_coffee6_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../img/menu/coffee6.jpg */ "./src/img/menu/coffee6.jpg");
/* harmony import */ var _img_menu_coffee7_jpg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../img/menu/coffee7.jpg */ "./src/img/menu/coffee7.jpg");
/* harmony import */ var _img_menu_coffee8_jpg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../img/menu/coffee8.jpg */ "./src/img/menu/coffee8.jpg");
/* harmony import */ var _img_menu_tea1_jpg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../img/menu/tea1.jpg */ "./src/img/menu/tea1.jpg");
/* harmony import */ var _img_menu_tea2_jpg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../img/menu/tea2.jpg */ "./src/img/menu/tea2.jpg");
/* harmony import */ var _img_menu_tea3_jpg__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../img/menu/tea3.jpg */ "./src/img/menu/tea3.jpg");
/* harmony import */ var _img_menu_tea4_jpg__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../img/menu/tea4.jpg */ "./src/img/menu/tea4.jpg");
/* harmony import */ var _img_menu_dessert1_jpg__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../img/menu/dessert1.jpg */ "./src/img/menu/dessert1.jpg");
/* harmony import */ var _img_menu_dessert2_jpg__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../img/menu/dessert2.jpg */ "./src/img/menu/dessert2.jpg");
/* harmony import */ var _img_menu_dessert3_jpg__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../img/menu/dessert3.jpg */ "./src/img/menu/dessert3.jpg");
/* harmony import */ var _img_menu_dessert4_jpg__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../img/menu/dessert4.jpg */ "./src/img/menu/dessert4.jpg");
/* harmony import */ var _img_menu_dessert5_jpg__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../img/menu/dessert5.jpg */ "./src/img/menu/dessert5.jpg");
/* harmony import */ var _img_menu_dessert6_jpg__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../img/menu/dessert6.jpg */ "./src/img/menu/dessert6.jpg");
/* harmony import */ var _img_menu_dessert7_jpg__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../img/menu/dessert7.jpg */ "./src/img/menu/dessert7.jpg");
/* harmony import */ var _img_menu_dessert8_jpg__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../img/menu/dessert8.jpg */ "./src/img/menu/dessert8.jpg");




















const Products = [{
  name: 'Irish coffee',
  description: 'Fragrant black coffee with Jameson Irish whiskey and whipped milk',
  price: '7.00',
  category: 'coffee',
  sizes: {
    s: {
      size: '200 ml',
      'add-price': '0.00'
    },
    m: {
      size: '300 ml',
      'add-price': '0.50'
    },
    l: {
      size: '400 ml',
      'add-price': '1.00'
    }
  },
  additives: [{
    name: 'Sugar',
    'add-price': '0.50'
  }, {
    name: 'Cinnamon',
    'add-price': '0.50'
  }, {
    name: 'Syrup',
    'add-price': '0.50'
  }],
  img: _img_menu_coffee1_jpg__WEBPACK_IMPORTED_MODULE_0__
}, {
  name: 'Kahlua coffee',
  description: 'Classic coffee with milk and Kahlua liqueur under a cap of frothed milk',
  price: '7.00',
  category: 'coffee',
  sizes: {
    s: {
      size: '200 ml',
      'add-price': '0.00'
    },
    m: {
      size: '300 ml',
      'add-price': '0.50'
    },
    l: {
      size: '400 ml',
      'add-price': '1.00'
    }
  },
  additives: [{
    name: 'Sugar',
    'add-price': '0.50'
  }, {
    name: 'Cinnamon',
    'add-price': '0.50'
  }, {
    name: 'Syrup',
    'add-price': '0.50'
  }],
  img: _img_menu_coffee2_jpg__WEBPACK_IMPORTED_MODULE_1__
}, {
  name: 'Honey raf',
  description: 'Espresso with frothed milk, cream and aromatic honey',
  price: '5.50',
  category: 'coffee',
  sizes: {
    s: {
      size: '200 ml',
      'add-price': '0.00'
    },
    m: {
      size: '300 ml',
      'add-price': '0.50'
    },
    l: {
      size: '400 ml',
      'add-price': '1.00'
    }
  },
  additives: [{
    name: 'Sugar',
    'add-price': '0.50'
  }, {
    name: 'Cinnamon',
    'add-price': '0.50'
  }, {
    name: 'Syrup',
    'add-price': '0.50'
  }],
  img: _img_menu_coffee3_jpg__WEBPACK_IMPORTED_MODULE_2__
}, {
  name: 'Ice cappuccino',
  description: 'Cappuccino with soft thick foam in summer version with ice',
  price: '5.00',
  category: 'coffee',
  sizes: {
    s: {
      size: '200 ml',
      'add-price': '0.00'
    },
    m: {
      size: '300 ml',
      'add-price': '0.50'
    },
    l: {
      size: '400 ml',
      'add-price': '1.00'
    }
  },
  additives: [{
    name: 'Sugar',
    'add-price': '0.50'
  }, {
    name: 'Cinnamon',
    'add-price': '0.50'
  }, {
    name: 'Syrup',
    'add-price': '0.50'
  }],
  img: _img_menu_coffee4_jpg__WEBPACK_IMPORTED_MODULE_3__
}, {
  name: 'Espresso',
  description: 'Classic black coffee',
  price: '4.50',
  category: 'coffee',
  sizes: {
    s: {
      size: '200 ml',
      'add-price': '0.00'
    },
    m: {
      size: '300 ml',
      'add-price': '0.50'
    },
    l: {
      size: '400 ml',
      'add-price': '1.00'
    }
  },
  additives: [{
    name: 'Sugar',
    'add-price': '0.50'
  }, {
    name: 'Cinnamon',
    'add-price': '0.50'
  }, {
    name: 'Syrup',
    'add-price': '0.50'
  }],
  img: _img_menu_coffee5_jpg__WEBPACK_IMPORTED_MODULE_4__
}, {
  name: 'Latte',
  description: 'Espresso coffee with the addition of steamed milk and dense milk foam',
  price: '5.50',
  category: 'coffee',
  sizes: {
    s: {
      size: '200 ml',
      'add-price': '0.00'
    },
    m: {
      size: '300 ml',
      'add-price': '0.50'
    },
    l: {
      size: '400 ml',
      'add-price': '1.00'
    }
  },
  additives: [{
    name: 'Sugar',
    'add-price': '0.50'
  }, {
    name: 'Cinnamon',
    'add-price': '0.50'
  }, {
    name: 'Syrup',
    'add-price': '0.50'
  }],
  img: _img_menu_coffee6_jpg__WEBPACK_IMPORTED_MODULE_5__
}, {
  name: 'Latte macchiato',
  description: 'Espresso with frothed milk and chocolate',
  price: '5.50',
  category: 'coffee',
  sizes: {
    s: {
      size: '200 ml',
      'add-price': '0.00'
    },
    m: {
      size: '300 ml',
      'add-price': '0.50'
    },
    l: {
      size: '400 ml',
      'add-price': '1.00'
    }
  },
  additives: [{
    name: 'Sugar',
    'add-price': '0.50'
  }, {
    name: 'Cinnamon',
    'add-price': '0.50'
  }, {
    name: 'Syrup',
    'add-price': '0.50'
  }],
  img: _img_menu_coffee7_jpg__WEBPACK_IMPORTED_MODULE_6__
}, {
  name: 'Coffee with cognac',
  description: 'Fragrant black coffee with cognac and whipped cream',
  price: '6.50',
  category: 'coffee',
  sizes: {
    s: {
      size: '200 ml',
      'add-price': '0.00'
    },
    m: {
      size: '300 ml',
      'add-price': '0.50'
    },
    l: {
      size: '400 ml',
      'add-price': '1.00'
    }
  },
  additives: [{
    name: 'Sugar',
    'add-price': '0.50'
  }, {
    name: 'Cinnamon',
    'add-price': '0.50'
  }, {
    name: 'Syrup',
    'add-price': '0.50'
  }],
  img: _img_menu_coffee8_jpg__WEBPACK_IMPORTED_MODULE_7__
}, {
  name: 'Moroccan',
  description: 'Fragrant black tea with the addition of tangerine, cinnamon, honey, lemon and mint',
  price: '4.50',
  category: 'tea',
  sizes: {
    s: {
      size: '200 ml',
      'add-price': '0.00'
    },
    m: {
      size: '300 ml',
      'add-price': '0.50'
    },
    l: {
      size: '400 ml',
      'add-price': '1.00'
    }
  },
  additives: [{
    name: 'Sugar',
    'add-price': '0.50'
  }, {
    name: 'Lemon',
    'add-price': '0.50'
  }, {
    name: 'Syrup',
    'add-price': '0.50'
  }],
  img: _img_menu_tea1_jpg__WEBPACK_IMPORTED_MODULE_8__
}, {
  name: 'Ginger',
  description: 'Original black tea with fresh ginger, lemon and honey',
  price: '5.00',
  category: 'tea',
  sizes: {
    s: {
      size: '200 ml',
      'add-price': '0.00'
    },
    m: {
      size: '300 ml',
      'add-price': '0.50'
    },
    l: {
      size: '400 ml',
      'add-price': '1.00'
    }
  },
  additives: [{
    name: 'Sugar',
    'add-price': '0.50'
  }, {
    name: 'Lemon',
    'add-price': '0.50'
  }, {
    name: 'Syrup',
    'add-price': '0.50'
  }],
  img: _img_menu_tea2_jpg__WEBPACK_IMPORTED_MODULE_9__
}, {
  name: 'Cranberry',
  description: 'Invigorating black tea with cranberry and honey',
  price: '5.00',
  category: 'tea',
  sizes: {
    s: {
      size: '200 ml',
      'add-price': '0.00'
    },
    m: {
      size: '300 ml',
      'add-price': '0.50'
    },
    l: {
      size: '400 ml',
      'add-price': '1.00'
    }
  },
  additives: [{
    name: 'Sugar',
    'add-price': '0.50'
  }, {
    name: 'Lemon',
    'add-price': '0.50'
  }, {
    name: 'Syrup',
    'add-price': '0.50'
  }],
  img: _img_menu_tea3_jpg__WEBPACK_IMPORTED_MODULE_10__
}, {
  name: 'Sea buckthorn',
  description: 'Toning sweet black tea with sea buckthorn, fresh thyme and cinnamon',
  price: '5.50',
  category: 'tea',
  sizes: {
    s: {
      size: '200 ml',
      'add-price': '0.00'
    },
    m: {
      size: '300 ml',
      'add-price': '0.50'
    },
    l: {
      size: '400 ml',
      'add-price': '1.00'
    }
  },
  additives: [{
    name: 'Sugar',
    'add-price': '0.50'
  }, {
    name: 'Lemon',
    'add-price': '0.50'
  }, {
    name: 'Syrup',
    'add-price': '0.50'
  }],
  img: _img_menu_tea4_jpg__WEBPACK_IMPORTED_MODULE_11__
}, {
  name: 'Marble cheesecake',
  description: 'Philadelphia cheese with lemon zest on a light sponge cake and red currant jam',
  price: '3.50',
  category: 'dessert',
  sizes: {
    s: {
      size: '50 g',
      'add-price': '0.00'
    },
    m: {
      size: '100 g',
      'add-price': '0.50'
    },
    l: {
      size: '200 g',
      'add-price': '1.00'
    }
  },
  additives: [{
    name: 'Berries',
    'add-price': '0.50'
  }, {
    name: 'Nuts',
    'add-price': '0.50'
  }, {
    name: 'Jam',
    'add-price': '0.50'
  }],
  img: _img_menu_dessert1_jpg__WEBPACK_IMPORTED_MODULE_12__
}, {
  name: 'Red velvet',
  description: 'Layer cake with cream cheese frosting',
  price: '4.00',
  category: 'dessert',
  sizes: {
    s: {
      size: '50 g',
      'add-price': '0.00'
    },
    m: {
      size: '100 g',
      'add-price': '0.50'
    },
    l: {
      size: '200 g',
      'add-price': '1.00'
    }
  },
  additives: [{
    name: 'Berries',
    'add-price': '0.50'
  }, {
    name: 'Nuts',
    'add-price': '0.50'
  }, {
    name: 'Jam',
    'add-price': '0.50'
  }],
  img: _img_menu_dessert2_jpg__WEBPACK_IMPORTED_MODULE_13__
}, {
  name: 'Cheesecakes',
  description: 'Soft cottage cheese pancakes with sour cream and fresh berries and sprinkled with powdered sugar',
  price: '4.50',
  category: 'dessert',
  sizes: {
    s: {
      size: '50 g',
      'add-price': '0.00'
    },
    m: {
      size: '100 g',
      'add-price': '0.50'
    },
    l: {
      size: '200 g',
      'add-price': '1.00'
    }
  },
  additives: [{
    name: 'Berries',
    'add-price': '0.50'
  }, {
    name: 'Nuts',
    'add-price': '0.50'
  }, {
    name: 'Jam',
    'add-price': '0.50'
  }],
  img: _img_menu_dessert3_jpg__WEBPACK_IMPORTED_MODULE_14__
}, {
  name: 'Creme brulee',
  description: 'Delicate creamy dessert in a caramel basket with wild berries',
  price: '4.00',
  category: 'dessert',
  sizes: {
    s: {
      size: '50 g',
      'add-price': '0.00'
    },
    m: {
      size: '100 g',
      'add-price': '0.50'
    },
    l: {
      size: '200 g',
      'add-price': '1.00'
    }
  },
  additives: [{
    name: 'Berries',
    'add-price': '0.50'
  }, {
    name: 'Nuts',
    'add-price': '0.50'
  }, {
    name: 'Jam',
    'add-price': '0.50'
  }],
  img: _img_menu_dessert4_jpg__WEBPACK_IMPORTED_MODULE_15__
}, {
  name: 'Pancakes',
  description: 'Tender pancakes with strawberry jam and fresh strawberries',
  price: '4.50',
  category: 'dessert',
  sizes: {
    s: {
      size: '50 g',
      'add-price': '0.00'
    },
    m: {
      size: '100 g',
      'add-price': '0.50'
    },
    l: {
      size: '200 g',
      'add-price': '1.00'
    }
  },
  additives: [{
    name: 'Berries',
    'add-price': '0.50'
  }, {
    name: 'Nuts',
    'add-price': '0.50'
  }, {
    name: 'Jam',
    'add-price': '0.50'
  }],
  img: _img_menu_dessert5_jpg__WEBPACK_IMPORTED_MODULE_16__
}, {
  name: 'Honey cake',
  description: 'Classic honey cake with delicate custard',
  price: '4.50',
  category: 'dessert',
  sizes: {
    s: {
      size: '50 g',
      'add-price': '0.00'
    },
    m: {
      size: '100 g',
      'add-price': '0.50'
    },
    l: {
      size: '200 g',
      'add-price': '1.00'
    }
  },
  additives: [{
    name: 'Berries',
    'add-price': '0.50'
  }, {
    name: 'Nuts',
    'add-price': '0.50'
  }, {
    name: 'Jam',
    'add-price': '0.50'
  }],
  img: _img_menu_dessert6_jpg__WEBPACK_IMPORTED_MODULE_17__
}, {
  name: 'Chocolate cake',
  description: 'Cake with hot chocolate filling and nuts with dried apricots',
  price: '5.50',
  category: 'dessert',
  sizes: {
    s: {
      size: '50 g',
      'add-price': '0.00'
    },
    m: {
      size: '100 g',
      'add-price': '0.50'
    },
    l: {
      size: '200 g',
      'add-price': '1.00'
    }
  },
  additives: [{
    name: 'Berries',
    'add-price': '0.50'
  }, {
    name: 'Nuts',
    'add-price': '0.50'
  }, {
    name: 'Jam',
    'add-price': '0.50'
  }],
  img: _img_menu_dessert7_jpg__WEBPACK_IMPORTED_MODULE_18__
}, {
  name: 'Black forest',
  description: 'A combination of thin sponge cake with cherry jam and light chocolate mousse',
  price: '6.50',
  category: 'dessert',
  sizes: {
    s: {
      size: '50 g',
      'add-price': '0.00'
    },
    m: {
      size: '100 g',
      'add-price': '0.50'
    },
    l: {
      size: '200 g',
      'add-price': '1.00'
    }
  },
  additives: [{
    name: 'Berries',
    'add-price': '0.50'
  }, {
    name: 'Nuts',
    'add-price': '0.50'
  }, {
    name: 'Jam',
    'add-price': '0.50'
  }],
  img: _img_menu_dessert8_jpg__WEBPACK_IMPORTED_MODULE_19__
}];
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Products);

/***/ }),

/***/ "./src/js/utils.js":
/*!*************************!*\
  !*** ./src/js/utils.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ createElementWithProperties)
/* harmony export */ });
function createElementWithProperties(el, elClassName, attr) {
  const element = document.createElement(el);
  element.className = elClassName;
  if (attr) {
    for (let i = 0; i < Object.keys(attr).length; i += 1) {
      const key = Object.keys(attr)[i];
      element.setAttribute(key, attr[key]);
    }
  }
  return element;
}

/***/ }),

/***/ "./src/img/menu/coffee1.jpg":
/*!**********************************!*\
  !*** ./src/img/menu/coffee1.jpg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "img/5bf879eba1df1b4c9396.jpg";

/***/ }),

/***/ "./src/img/menu/coffee2.jpg":
/*!**********************************!*\
  !*** ./src/img/menu/coffee2.jpg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "img/dc0250762f2808e7545b.jpg";

/***/ }),

/***/ "./src/img/menu/coffee3.jpg":
/*!**********************************!*\
  !*** ./src/img/menu/coffee3.jpg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "img/fec6a880cb0271f80b94.jpg";

/***/ }),

/***/ "./src/img/menu/coffee4.jpg":
/*!**********************************!*\
  !*** ./src/img/menu/coffee4.jpg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "img/124d5f8c8cee5299ebae.jpg";

/***/ }),

/***/ "./src/img/menu/coffee5.jpg":
/*!**********************************!*\
  !*** ./src/img/menu/coffee5.jpg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "img/dcfa86e96960595cc10c.jpg";

/***/ }),

/***/ "./src/img/menu/coffee6.jpg":
/*!**********************************!*\
  !*** ./src/img/menu/coffee6.jpg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "img/4807b30fde1d758ec61c.jpg";

/***/ }),

/***/ "./src/img/menu/coffee7.jpg":
/*!**********************************!*\
  !*** ./src/img/menu/coffee7.jpg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "img/e8dbd402348fcb569609.jpg";

/***/ }),

/***/ "./src/img/menu/coffee8.jpg":
/*!**********************************!*\
  !*** ./src/img/menu/coffee8.jpg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "img/cf09be39f39350201fcc.jpg";

/***/ }),

/***/ "./src/img/menu/dessert1.jpg":
/*!***********************************!*\
  !*** ./src/img/menu/dessert1.jpg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "img/f643161909a554cda591.jpg";

/***/ }),

/***/ "./src/img/menu/dessert2.jpg":
/*!***********************************!*\
  !*** ./src/img/menu/dessert2.jpg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "img/12c3ccf0b388d7aaf1ea.jpg";

/***/ }),

/***/ "./src/img/menu/dessert3.jpg":
/*!***********************************!*\
  !*** ./src/img/menu/dessert3.jpg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "img/a9b35ccca68a71259ce0.jpg";

/***/ }),

/***/ "./src/img/menu/dessert4.jpg":
/*!***********************************!*\
  !*** ./src/img/menu/dessert4.jpg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "img/88a3ccc077075b0f04ba.jpg";

/***/ }),

/***/ "./src/img/menu/dessert5.jpg":
/*!***********************************!*\
  !*** ./src/img/menu/dessert5.jpg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "img/0bfb022e211d4c47b6c4.jpg";

/***/ }),

/***/ "./src/img/menu/dessert6.jpg":
/*!***********************************!*\
  !*** ./src/img/menu/dessert6.jpg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "img/d9c20327044bb8218abd.jpg";

/***/ }),

/***/ "./src/img/menu/dessert7.jpg":
/*!***********************************!*\
  !*** ./src/img/menu/dessert7.jpg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "img/e6644c2c77d468bccfaa.jpg";

/***/ }),

/***/ "./src/img/menu/dessert8.jpg":
/*!***********************************!*\
  !*** ./src/img/menu/dessert8.jpg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "img/3ffb4beebcbb5fa25d0a.jpg";

/***/ }),

/***/ "./src/img/menu/tea1.jpg":
/*!*******************************!*\
  !*** ./src/img/menu/tea1.jpg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "img/bb4481e27f294ba95b65.jpg";

/***/ }),

/***/ "./src/img/menu/tea2.jpg":
/*!*******************************!*\
  !*** ./src/img/menu/tea2.jpg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "img/ac6361ad888ce156a0ff.jpg";

/***/ }),

/***/ "./src/img/menu/tea3.jpg":
/*!*******************************!*\
  !*** ./src/img/menu/tea3.jpg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "img/25fae96b39322abe57a8.jpg";

/***/ }),

/***/ "./src/img/menu/tea4.jpg":
/*!*******************************!*\
  !*** ./src/img/menu/tea4.jpg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "img/82064a636ba6e3675f3b.jpg";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other entry modules.
(() => {
var __webpack_exports__ = {};
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _js_catalog__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./js/catalog */ "./src/js/catalog.js");

document.addEventListener('DOMContentLoaded', () => {
  const catalog = new _js_catalog__WEBPACK_IMPORTED_MODULE_0__["default"]('coffee');
  catalog.renderCatalog();
});
})();

// This entry need to be wrapped in an IIFE because it need to be isolated against other entry modules.
(() => {
/*!****************************!*\
  !*** ./src/sass/menu.scss ***!
  \****************************/
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin

})();

/******/ })()
;
//# sourceMappingURL=menu.js.map