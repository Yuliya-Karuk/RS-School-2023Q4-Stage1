/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/burger.js":
/*!**************************!*\
  !*** ./src/js/burger.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const BurgerClasses = {
  navMenu: 'nav_active',
  burgerButton: 'burger_active',
  body: 'no-scroll',
  navMenuLinkDisabled: 'nav__menu_disabled'
};
class Burger {
  constructor() {
    this.burgerButton = document.querySelector('.burger');
    this.navMenu = document.querySelector('.nav');
    this.navLinks = document.querySelectorAll('.nav__link');
    this.navMenuLink = document.querySelector('.nav__menu');
    this.body = document.querySelector('body');
  }
  toggleBurgerMenu() {
    this.navMenu.classList.add('nav_start');
    if (!this.navMenu.classList.contains(BurgerClasses.navMenu)) window.scrollTo({
      top: 0,
      left: 0
    });
    this.navMenu.classList.toggle(BurgerClasses.navMenu);
    this.burgerButton.classList.toggle(BurgerClasses.burgerButton);
    this.body.classList.toggle(BurgerClasses.body);
  }
  clickLink(e) {
    if (e.animationName === 'burger-close' && this.clickedLink) {
      if (!this.clickedLink.classList.contains(BurgerClasses.navMenuLinkDisabled)) this.clickedLink.click();
    }
  }
  handleClick(e, clickedEl) {
    if (e.isTrusted) e.preventDefault();
    if (window.innerWidth <= 768) {
      this.toggleBurgerMenu();
      this.clickedLink = clickedEl;
    } else {
      clickedEl.click();
    }
  }
  bindListeners() {
    const context = this;
    this.burgerButton.addEventListener('click', () => this.toggleBurgerMenu());
    window.addEventListener('keydown', e => {
      if (e.keyCode === 27 && context.navMenu.classList.contains(BurgerClasses.navMenu)) {
        context.toggleBurgerMenu();
      }
    });
    document.addEventListener('click', e => {
      if (!e.target.classList.contains('nav') && context.navMenu.classList.contains(BurgerClasses.navMenu) && !context.burgerButton.contains(e.target)) context.toggleBurgerMenu();
    });
    for (let i = 0; i < this.navLinks.length; i += 1) {
      this.navLinks[i].addEventListener('click', e => this.handleClick(e, this.navLinks[i]));
    }
    this.navMenuLink.addEventListener('click', e => this.handleClick(e, this.navMenuLink));
    this.navMenu.addEventListener('animationend', e => this.clickLink(e));
  }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Burger);

/***/ }),

/***/ "./src/js/selfEsteem.js":
/*!******************************!*\
  !*** ./src/js/selfEsteem.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   selfEsteem1: () => (/* binding */ selfEsteem1),
/* harmony export */   selfEsteem2: () => (/* binding */ selfEsteem2),
/* harmony export */   selfEsteem3: () => (/* binding */ selfEsteem3)
/* harmony export */ });
const selfEsteem1 = "Coffee-House. Week-1 - Fixed Layout (100/100)\n1. Checking validation of pages: +18 (18/18)\n - The layout for both pages is validated and error-free according to the W3C Validator +12\n - Favicon is added to each page: +2\n - Each page has only one <h1> element: +2\n - The URL of the menu page differs from the URL of the home page (e.g. your-site.com for the home page and your-site.com/menu for the menu page): +2\n2. The layout matches the design (42/42)\n - <header> block on each page: +6\n - Enjoy block on home page: +6\n - Favorites Coffee block on home page: +6\n - About block on home page: +6\n - Mobile App block on home page: +6\n - Menu block on menu page: +6\n3. CSS Requirements: (10/10)\n - For positioning images in About block on home page and products in Menu block on menu page used Flexbox or Grid Layout: +4\n - When scaling the browser page (<100%) or increasing the page width (>1440px), the layout of both pages is centered rather than shifted to the side and not stretched across the entire width: +4\n - The background color Body stretches across the entire width of the page: +2\n4. Interactivity: +32\n - Navigation elements (except Contact us) lead to corresponding blocks on home page (anchor links): +4\n - Contact us in navigation panel links to the <footer> block on its own page (anchor link): +2\n - Smooth scrolling with anchor links: +2\n - When clicking on the Menu buttons in header and Enjoy block on home page, it navigates to the menu page: +2\n - The Menu button in header on menu page is non-interactive: +2\n - When clicking on the Logo in header, it navigates to the home page: +2\n - The active Coffee button in Menu block of Menu page is non-interactive: +2\n - Each Coffee-card in the Menu section of the Menu page is interactive when hovering over any area of the card: +4\n - In the <footer> block, clicking on the link with phone number (all area including icon) should initiate a phone call: +2\n - In the <footer> block, clicking on the link with the address (all area including icon) should open a new browser tab with Google Maps displaying any location of your choice: +2\n - Interactivity of links and buttons is implemented according to Figma layout. Interactivity includes not only changing cursor's appearance, for example, using the cursor: pointer property, but also the use of other visual effects, such as changing the background color or font color, following the Styleguide in Figma layout: +4\n - Mandatory requirement for interactivity: smooth change in the appearance of an element on hover and click, without affecting adjacent elements: +4";
const selfEsteem2 = 'Coffee-House. Week-2 - Responsive Design (90/90)\n1. The layout of the pages aligns the design at a screen width of 1440px: (14/14)\n - <header> block on each page: +2\n - Enjoy block on home page: +2\n - Favourites Coffee block on home page: +2\n - About block on home page: +2\n - Mobile App block on home page: +2\n - Menu block on menu page: +2\n - <footer> block on each page: +2\n2. The layout of the pages aligns the design at a screen width of 768px: (14/14)\n - <header> block on each page: +2\n - Enjoy block on home page: +2\n - Favourites Coffee block on home page: +2\n - About block on home page: +2\n - Mobile App block on home page: +2\n - Menu block on menu page: +2\n - <footer> block on each page: +2\n3. The layout of the pages aligns the design at a screen width of 380px: (14/14)\n - <header> block on each page: +2\n - Enjoy block on home page: +2\n - Favourites Coffee block on home page: +2\n - About block on home page: +2\n - Mobile App block on home page: +2\n - Menu block on menu page: +2\n - <footer> block on each page: +2\n4. There is no horizontal scrollbar at all screen width up to 380px inclusive. All page content remains as per the design: it is not cropped, removed, or shifted to the side: (20/20)\n - home page: no horizontal scroll bar between 1440px and 768px widths: +5\n - home page: no horizontal scroll bar between 768px and 380px widths: +5\n - menu page: no horizontal scroll bar between 1440px and 768px widths: +5\n - menu page: no horizontal scroll bar between 768px and 380px widths: +5\n5. During smooth resizing of the browser window from 1440px to 380px, the layout occupies the full width of the window (including specified margins), elements adjust their sizes and positions appropriately without full scaling, no elements overlap, and images maintain their correct aspect ratios: (8/8)\n - On home page: +4\n - On menu page: +4\n6. At screen widths of 768px and below, the menu and navigation buttons in the header are concealed on both pages, and a burger menu icon is displayed: (4/4)\n7. Hover effects are active on desktop devices (as per the Desktop device type in DevTools) and are disabled for mobile devices (as per the Mobile device type in DevTools) on both pages: (4/4)\n8. The layout for both pages is validated and error-free according to the W3C Validator: (12/12)';
const selfEsteem3 = "Coffee-House. Week-3 - Adding Functionality (90/90)\n1. Implementation of the burger menu on both pages: (22/22)\n - At a page width of 768px or less, the navigation panel hides, and the burger icon appears: +2\n - When clicking the burger icon, the burger menu slides out from the right, and the burger icon smoothly transforms into a cross: +4\n - The burger menu occupies the entire available screen area below the <header> block: +2\n - When clicking the cross, the burger menu smoothly hides, moving to the right of the screen, and the cross smoothly transforms into a burger icon: +4\n - The burger icon is created using HTML and CSS without the use of images: +2\n - Links in the burger menu work, providing smooth scrolling to anchor points: +2\n - When clicking on any link (interactive or non-interactive) in the menu, the burger menu smoothly hides to the right, and the cross smoothly transforms into a burger icon: +2\n - The placement and dimensions of elements in the burger menu match the layout (horizontal centering of menu items): +2\n - When the page width increases to 769px or higher, the burger icon and the open burger menu hide, and the navigation panel appears: +2\n2. Implementation of the carousel on the home page: (24/24)\n - Carousel elements are automatically scroll to the left with a specified time interval by default. The time interval duration is at the student's choose, but the recommended value is 5-7 seconds: +4\n - The current state until the next automatic switch is shown in the progress bar of the corresponding slide by filling it with color: +4\n - Only the progress bar of the current slide can be filled; the rest remain in their default state: +2\n - When hovering the mouse or touch-and-hold on the displayed carousel element, the time to the element switch is paused. When the mouse cursor moves out, or the hold ends, the time continues from where it stopped: +2\n - The switch slides is accompanied by like the carousel animation (the method of animation execution is not verified): +4\n -Manual switching in the corresponding direction is implemented by pressing left arrow button or right arrow button: +2\n -For mobile devices, manual switching in the corresponding direction is additionally implemented by swiping left or right: +2\n - When manually switching, the progress bar state of the switched slide resets, and the progress bar of the displayed slide starts to fill: +2\n - When switching to the right after the third element, it returns to the first. When switching to the left after the first element, it returns to the third: +2\n3. Categories of products on the menu page: (16/16)\n - The Coffee category is active and the corresponding products are displayed when opening or reloading the menu page: +2\n - When switching categories, the products of the selected category are displayed: +2\n - For screens with a width of 768px or less, when opening/reloading the page or switching categories, only 4 products are displayed. If there are more than 4 products in the displayed category, a Load More button is displayed below: +4\n - When clicking the Load More button below the displayed products, the missing products are added, and the Load More button is hidden: +4\n - When changing the screen width, the product display mode (8 products per page or 4 products with a Load More button) changes without page reloading: +4\n4. The Modal on the menu page: (20/20)\n - The Modal with the description of a specific product opens when clicking on any part of a card of product: +2\n - The part of the page outside the Modal is darkened: +2\n - When the Modal is open, the vertical scroll of the page becomes inactive; when closed, it becomes active again: +2\n - Clicking on the area around the Modal and Close button closes it: +2\n - The Modal is centered on both axes, sizes of modal elements and their layout match the design: +2\n - After the Modal is opened, the 'Size' option 'S' is selected, and no option in the 'Additives' section is selected. The product's final price is the same as in the card: +2\n - Only one 'Size' option can be selected. Changing this option also changes the final price of the product based on the choice (+$0.00 for S, +$0.50 for M, +$1.00 for L): +4\n5.Video on the home page:(8/8)\n - In the Enjoy block of the home page, a video is played in the background instead of an image, without sound and control elements, and without the ability to interact with it: +4\n - After the video is finished, it automatically starts over: +4";


/***/ }),

/***/ "./src/js/slider.js":
/*!**************************!*\
  !*** ./src/js/slider.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const SliderConst = {
  numberOfSlide: 3,
  slideTime: 5000,
  minSwipeWidth: 50
};
class Slider {
  constructor() {
    this.sliderParent = document.querySelector('.slider');
    this.sliderParent.contextMenu = false;
    this.sliderButtonLeft = document.querySelector('.slider__btn_left');
    this.sliderButtonRight = document.querySelector('.slider__btn_right');
    this.slider = document.querySelector('.slider_list');
    this.sliderItems = document.querySelectorAll('.slider__item');
    this.paginationBars = document.querySelectorAll('.pagination__bar');
    this.currentSlide = 0;
    this.paginationBtnActive = this.paginationBars[this.currentSlide].firstElementChild;
    this.timeStep = 10;
    this.filledSpace = 0;
  }
  fillPagination() {
    let start = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
    if (start) {
      this.interval = setInterval(this.fillStep.bind(this), SliderConst.slideTime / this.timeStep);
    }
    if (!start) {
      clearInterval(this.interval);
    }
  }
  fillStep() {
    if (this.filledSpace >= 100) {
      this.changeSlide(1);
    } else {
      this.filledSpace += this.timeStep;
      this.paginationBtnActive.style.width = `${this.filledSpace}%`;
    }
  }
  findNextSlide(offset) {
    this.currentSlide += offset;
    if (this.currentSlide > SliderConst.numberOfSlide - 1) this.currentSlide = 0;
    if (this.currentSlide < 0) this.currentSlide = SliderConst.numberOfSlide - 1;
  }
  changePgnBar() {
    for (let i = 0; i < this.paginationBars.length; i += 1) {
      this.paginationBars[i].firstElementChild.style.width = 0;
    }
    this.paginationBtnActive = this.paginationBars[this.currentSlide].firstElementChild;
  }
  changeSlide(offset) {
    this.findNextSlide(offset);
    this.move();
    this.changePgnBar();
    this.filledSpace = 0;
  }
  move() {
    this.slider.style.transform = `translateX(-${this.currentSlide * 100}%)`;
  }
  handleTouch(e) {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === 'touchstart') {
      this.touchStartX = e.touches[0].clientX;
      this.fillPagination(false);
    }
    if (e.type === 'touchend') {
      this.touchEndX = e.changedTouches[0].clientX;
      const swipeWidth = Math.abs(this.touchStartX - this.touchEndX);
      if (e.cancelable && swipeWidth > SliderConst.minSwipeWidth) {
        const side = this.touchStartX - this.touchEndX > 0 ? 1 : -1;
        this.changeSlide(side);
      }
      this.fillPagination(false);
      this.fillPagination();
    }
  }
  bindListeners() {
    const context = this;
    this.sliderButtonRight.addEventListener('click', () => this.changeSlide(1));
    this.sliderButtonLeft.addEventListener('click', () => this.changeSlide(-1));
    for (let i = 0; i < this.sliderItems.length; i += 1) {
      this.sliderItems[i].addEventListener('mouseover', () => this.fillPagination(false));
      this.sliderItems[i].addEventListener('mouseout', () => this.fillPagination());
      this.sliderItems[i].addEventListener('touchstart', e => this.handleTouch(e));
      this.sliderItems[i].addEventListener('touchend', e => this.handleTouch(e));
    }
    document.addEventListener('resize', () => {
      context.fillPagination(false);
      context.fillPagination();
    });
  }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Slider);

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
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other entry modules.
(() => {
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _js_burger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./js/burger */ "./src/js/burger.js");
/* harmony import */ var _js_slider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/slider */ "./src/js/slider.js");
/* harmony import */ var _js_selfEsteem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./js/selfEsteem */ "./src/js/selfEsteem.js");



console.log(_js_selfEsteem__WEBPACK_IMPORTED_MODULE_2__.selfEsteem3);
document.addEventListener('DOMContentLoaded', () => {
  const burger = new _js_burger__WEBPACK_IMPORTED_MODULE_0__["default"]();
  burger.bindListeners();
  const slider = new _js_slider__WEBPACK_IMPORTED_MODULE_1__["default"]();
  slider.bindListeners();
  slider.fillPagination();
});
})();

// This entry need to be wrapped in an IIFE because it need to be isolated against other entry modules.
(() => {
/*!*****************************!*\
  !*** ./src/sass/index.scss ***!
  \*****************************/
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin

})();

/******/ })()
;
//# sourceMappingURL=main.js.map