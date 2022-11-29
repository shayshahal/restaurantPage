"use strict";
(self["webpackChunkrestaurantpage"] = self["webpackChunkrestaurantpage"] || []).push([["src_tab2_js"],{

/***/ "./src/tab2.js":
/*!*********************!*\
  !*** ./src/tab2.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ loadTab)
/* harmony export */ });
/* harmony import */ var _assets_pizza2_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/pizza2.jpg */ "./src/assets/pizza2.jpg");
/* harmony import */ var _assets_italian_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/italian.jpg */ "./src/assets/italian.jpg");



function loadTab(tab)
{
    // Create blur for background
    content.style.backgroundImage = `url(${_assets_pizza2_jpg__WEBPACK_IMPORTED_MODULE_0__})`;
    const main = document.getElementById("main-container");
    main.style.backdropFilter = 'blur(7px) brightness(85%)';

    // Tab attributes
    tab.id = "tab2";
    tab.classList.add('tab');

    const list = document.createElement('div');
    list.classList.add("menu-list");
    tab.appendChild(list);

    // Create Menu title!
    const title = document.createElement('p');
    title.textContent = 'Menu:';
    title.id = 'menu';
    list.appendChild(title);

    addItem(list, _assets_italian_jpg__WEBPACK_IMPORTED_MODULE_1__, "Italian", "An italiano pizza", 10);
    addItem(list, _assets_italian_jpg__WEBPACK_IMPORTED_MODULE_1__, "Italian", "An italiano pizza", 20);
    addItem(list, _assets_italian_jpg__WEBPACK_IMPORTED_MODULE_1__, "Italian", "An italiano pizza", 30);
}

function addItem(list, imageSrc, title, text, prc)
{
    const menuItem = document.createElement('div');
    menuItem.classList.add("menu-item");
    list.appendChild(menuItem);

    const itemImgDiv = document.createElement('div');
    itemImgDiv.classList.add("item-image-div");
    menuItem.appendChild(itemImgDiv);

    const itemImg = new Image();
    itemImg.src = imageSrc;
    itemImgDiv.appendChild(itemImg);

    const wordsDiv = document.createElement("div");
    wordsDiv.classList.add('item-words');
    menuItem.appendChild(wordsDiv);

    const name = document.createElement("p");
    name.textContent = title + ":";
    name.classList.add('item-name');
    wordsDiv.appendChild(name);

    const desc = document.createElement("p");
    desc.textContent = text;
    desc.classList.add('item-desc');
    wordsDiv.appendChild(desc);

    const price = document.createElement("p");
    price.textContent = prc + "$";
    price.classList.add('item-price');
    wordsDiv.appendChild(price);
}

/***/ }),

/***/ "./src/assets/italian.jpg":
/*!********************************!*\
  !*** ./src/assets/italian.jpg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "06218923773904f61221.jpg";

/***/ }),

/***/ "./src/assets/pizza2.jpg":
/*!*******************************!*\
  !*** ./src/assets/pizza2.jpg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "2d9e7aecdb07212d4c5e.jpg";

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX3RhYjJfanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQXFDO0FBQ007O0FBRTVCO0FBQ2Y7QUFDQTtBQUNBLDJDQUEyQywrQ0FBRSxDQUFDO0FBQzlDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGtCQUFrQixnREFBTztBQUN6QixrQkFBa0IsZ0RBQU87QUFDekIsa0JBQWtCLGdEQUFPO0FBQ3pCOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnRwYWdlLy4vc3JjL3RhYjIuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGJnIGZyb20gJy4vYXNzZXRzL3BpenphMi5qcGcnO1xuaW1wb3J0IGl0YWxpYW4gZnJvbSAnLi9hc3NldHMvaXRhbGlhbi5qcGcnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBsb2FkVGFiKHRhYilcbntcbiAgICAvLyBDcmVhdGUgYmx1ciBmb3IgYmFja2dyb3VuZFxuICAgIGNvbnRlbnQuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gYHVybCgke2JnfSlgO1xuICAgIGNvbnN0IG1haW4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1haW4tY29udGFpbmVyXCIpO1xuICAgIG1haW4uc3R5bGUuYmFja2Ryb3BGaWx0ZXIgPSAnYmx1cig3cHgpIGJyaWdodG5lc3MoODUlKSc7XG5cbiAgICAvLyBUYWIgYXR0cmlidXRlc1xuICAgIHRhYi5pZCA9IFwidGFiMlwiO1xuICAgIHRhYi5jbGFzc0xpc3QuYWRkKCd0YWInKTtcblxuICAgIGNvbnN0IGxpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBsaXN0LmNsYXNzTGlzdC5hZGQoXCJtZW51LWxpc3RcIik7XG4gICAgdGFiLmFwcGVuZENoaWxkKGxpc3QpO1xuXG4gICAgLy8gQ3JlYXRlIE1lbnUgdGl0bGUhXG4gICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgdGl0bGUudGV4dENvbnRlbnQgPSAnTWVudTonO1xuICAgIHRpdGxlLmlkID0gJ21lbnUnO1xuICAgIGxpc3QuYXBwZW5kQ2hpbGQodGl0bGUpO1xuXG4gICAgYWRkSXRlbShsaXN0LCBpdGFsaWFuLCBcIkl0YWxpYW5cIiwgXCJBbiBpdGFsaWFubyBwaXp6YVwiLCAxMCk7XG4gICAgYWRkSXRlbShsaXN0LCBpdGFsaWFuLCBcIkl0YWxpYW5cIiwgXCJBbiBpdGFsaWFubyBwaXp6YVwiLCAyMCk7XG4gICAgYWRkSXRlbShsaXN0LCBpdGFsaWFuLCBcIkl0YWxpYW5cIiwgXCJBbiBpdGFsaWFubyBwaXp6YVwiLCAzMCk7XG59XG5cbmZ1bmN0aW9uIGFkZEl0ZW0obGlzdCwgaW1hZ2VTcmMsIHRpdGxlLCB0ZXh0LCBwcmMpXG57XG4gICAgY29uc3QgbWVudUl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBtZW51SXRlbS5jbGFzc0xpc3QuYWRkKFwibWVudS1pdGVtXCIpO1xuICAgIGxpc3QuYXBwZW5kQ2hpbGQobWVudUl0ZW0pO1xuXG4gICAgY29uc3QgaXRlbUltZ0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGl0ZW1JbWdEaXYuY2xhc3NMaXN0LmFkZChcIml0ZW0taW1hZ2UtZGl2XCIpO1xuICAgIG1lbnVJdGVtLmFwcGVuZENoaWxkKGl0ZW1JbWdEaXYpO1xuXG4gICAgY29uc3QgaXRlbUltZyA9IG5ldyBJbWFnZSgpO1xuICAgIGl0ZW1JbWcuc3JjID0gaW1hZ2VTcmM7XG4gICAgaXRlbUltZ0Rpdi5hcHBlbmRDaGlsZChpdGVtSW1nKTtcblxuICAgIGNvbnN0IHdvcmRzRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICB3b3Jkc0Rpdi5jbGFzc0xpc3QuYWRkKCdpdGVtLXdvcmRzJyk7XG4gICAgbWVudUl0ZW0uYXBwZW5kQ2hpbGQod29yZHNEaXYpO1xuXG4gICAgY29uc3QgbmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIG5hbWUudGV4dENvbnRlbnQgPSB0aXRsZSArIFwiOlwiO1xuICAgIG5hbWUuY2xhc3NMaXN0LmFkZCgnaXRlbS1uYW1lJyk7XG4gICAgd29yZHNEaXYuYXBwZW5kQ2hpbGQobmFtZSk7XG5cbiAgICBjb25zdCBkZXNjID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgZGVzYy50ZXh0Q29udGVudCA9IHRleHQ7XG4gICAgZGVzYy5jbGFzc0xpc3QuYWRkKCdpdGVtLWRlc2MnKTtcbiAgICB3b3Jkc0Rpdi5hcHBlbmRDaGlsZChkZXNjKTtcblxuICAgIGNvbnN0IHByaWNlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgcHJpY2UudGV4dENvbnRlbnQgPSBwcmMgKyBcIiRcIjtcbiAgICBwcmljZS5jbGFzc0xpc3QuYWRkKCdpdGVtLXByaWNlJyk7XG4gICAgd29yZHNEaXYuYXBwZW5kQ2hpbGQocHJpY2UpO1xufSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==