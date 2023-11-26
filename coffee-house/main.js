/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/selfEsteem.js":
/*!******************************!*\
  !*** ./src/js/selfEsteem.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const selfEsteem1 = 'Coffee-House. Week-1 - Fixed Layout (100/100)\n1. Checking validation of pages: +18 (18/18)\n - The layout for both pages is validated and error-free according to the W3C Validator +12\n - Favicon is added to each page: +2\n - Each page has only one <h1> element: +2\n - The URL of the menu page differs from the URL of the home page (e.g. your-site.com for the home page and your-site.com/menu for the menu page): +2\n2. The layout matches the design (42/42)\n - <header> block on each page: +6\n - Enjoy block on home page: +6\n - Favorites Coffee block on home page: +6\n - About block on home page: +6\n - Mobile App block on home page: +6\n - Menu block on menu page: +6\n3. CSS Requirements: (10/10)\n - For positioning images in About block on home page and products in Menu block on menu page used Flexbox or Grid Layout: +4\n - When scaling the browser page (<100%) or increasing the page width (>1440px), the layout of both pages is centered rather than shifted to the side and not stretched across the entire width: +4\n - The background color Body stretches across the entire width of the page: +2\n4. Interactivity: +32\n - Navigation elements (except Contact us) lead to corresponding blocks on home page (anchor links): +4\n - Contact us in navigation panel links to the <footer> block on its own page (anchor link): +2\n - Smooth scrolling with anchor links: +2\n - When clicking on the Menu buttons in header and Enjoy block on home page, it navigates to the menu page: +2\n - The Menu button in header on menu page is non-interactive: +2\n - When clicking on the Logo in header, it navigates to the home page: +2\n - The active Coffee button in Menu block of Menu page is non-interactive: +2\n - Each Coffee-card in the Menu section of the Menu page is interactive when hovering over any area of the card: +4\n - In the <footer> block, clicking on the link with phone number (all area including icon) should initiate a phone call: +2\n - In the <footer> block, clicking on the link with the address (all area including icon) should open a new browser tab with Google Maps displaying any location of your choice: +2\n - Interactivity of links and buttons is implemented according to Figma layout. Interactivity includes not only changing cursor\'s appearance, for example, using the cursor: pointer property, but also the use of other visual effects, such as changing the background color or font color, following the Styleguide in Figma layout: +4\n - Mandatory requirement for interactivity: smooth change in the appearance of an element on hover and click, without affecting adjacent elements: +4';
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (selfEsteem1);

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
/* harmony import */ var _js_selfEsteem__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./js/selfEsteem */ "./src/js/selfEsteem.js");

console.log(_js_selfEsteem__WEBPACK_IMPORTED_MODULE_0__["default"]);
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