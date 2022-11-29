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
/* harmony import */ var _assets_new_yorker2_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assets/new-yorker2.jpg */ "./src/assets/new-yorker2.jpg");
/* harmony import */ var _assets_mex_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./assets/mex.jpg */ "./src/assets/mex.jpg");





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
    title.classList.add('title');
    list.appendChild(title);

    addItem(list, _assets_italian_jpg__WEBPACK_IMPORTED_MODULE_1__, "Italian:", "An italiano pizza", 10);
    addItem(list, _assets_mex_jpg__WEBPACK_IMPORTED_MODULE_3__, "Mexican:", "A Mexicano pizza", 20);
    addItem(list, _assets_new_yorker2_jpg__WEBPACK_IMPORTED_MODULE_2__, "New-Yorker:", "A New-Yorker pizza", 30);
}

function addItem(list, imageSrc, title, text, prc)
{
    const menuItem = document.createElement('div');
    menuItem.classList.add("menu-item");
    list.appendChild(menuItem);

    const itemImgDiv = document.createElement('div');
    itemImgDiv.classList.add("item-image-div");
    menuItem.appendChild(itemImgDiv);

    itemImgDiv.style.backgroundImage = `url(${imageSrc})`;

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

/***/ "./src/assets/mex.jpg":
/*!****************************!*\
  !*** ./src/assets/mex.jpg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "1457585e0613728c10af.jpg";

/***/ }),

/***/ "./src/assets/new-yorker2.jpg":
/*!************************************!*\
  !*** ./src/assets/new-yorker2.jpg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "fc086a7724dc43c08fa0.jpg";

/***/ }),

/***/ "./src/assets/pizza2.jpg":
/*!*******************************!*\
  !*** ./src/assets/pizza2.jpg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "2d9e7aecdb07212d4c5e.jpg";

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX3RhYjJfanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBcUM7QUFDTTtBQUNEO0FBQ1I7O0FBRW5CO0FBQ2Y7QUFDQTtBQUNBLDJDQUEyQywrQ0FBRSxDQUFDO0FBQzlDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGtCQUFrQixnREFBTztBQUN6QixrQkFBa0IsNENBQUU7QUFDcEIsa0JBQWtCLG9EQUFFO0FBQ3BCOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLDhDQUE4QyxTQUFTOztBQUV2RDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnRwYWdlLy4vc3JjL3RhYjIuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGJnIGZyb20gJy4vYXNzZXRzL3BpenphMi5qcGcnO1xuaW1wb3J0IGl0YWxpYW4gZnJvbSAnLi9hc3NldHMvaXRhbGlhbi5qcGcnO1xuaW1wb3J0IG55IGZyb20gJy4vYXNzZXRzL25ldy15b3JrZXIyLmpwZyc7XG5pbXBvcnQgbXggZnJvbSAnLi9hc3NldHMvbWV4LmpwZyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGxvYWRUYWIodGFiKVxue1xuICAgIC8vIENyZWF0ZSBibHVyIGZvciBiYWNrZ3JvdW5kXG4gICAgY29udGVudC5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBgdXJsKCR7Ymd9KWA7XG4gICAgY29uc3QgbWFpbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWFpbi1jb250YWluZXJcIik7XG4gICAgbWFpbi5zdHlsZS5iYWNrZHJvcEZpbHRlciA9ICdibHVyKDdweCkgYnJpZ2h0bmVzcyg4NSUpJztcblxuICAgIC8vIFRhYiBhdHRyaWJ1dGVzXG4gICAgdGFiLmlkID0gXCJ0YWIyXCI7XG4gICAgdGFiLmNsYXNzTGlzdC5hZGQoJ3RhYicpO1xuXG4gICAgY29uc3QgbGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGxpc3QuY2xhc3NMaXN0LmFkZChcIm1lbnUtbGlzdFwiKTtcbiAgICB0YWIuYXBwZW5kQ2hpbGQobGlzdCk7XG5cbiAgICAvLyBDcmVhdGUgTWVudSB0aXRsZSFcbiAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICB0aXRsZS50ZXh0Q29udGVudCA9ICdNZW51Oic7XG4gICAgdGl0bGUuY2xhc3NMaXN0LmFkZCgndGl0bGUnKTtcbiAgICBsaXN0LmFwcGVuZENoaWxkKHRpdGxlKTtcblxuICAgIGFkZEl0ZW0obGlzdCwgaXRhbGlhbiwgXCJJdGFsaWFuOlwiLCBcIkFuIGl0YWxpYW5vIHBpenphXCIsIDEwKTtcbiAgICBhZGRJdGVtKGxpc3QsIG14LCBcIk1leGljYW46XCIsIFwiQSBNZXhpY2FubyBwaXp6YVwiLCAyMCk7XG4gICAgYWRkSXRlbShsaXN0LCBueSwgXCJOZXctWW9ya2VyOlwiLCBcIkEgTmV3LVlvcmtlciBwaXp6YVwiLCAzMCk7XG59XG5cbmZ1bmN0aW9uIGFkZEl0ZW0obGlzdCwgaW1hZ2VTcmMsIHRpdGxlLCB0ZXh0LCBwcmMpXG57XG4gICAgY29uc3QgbWVudUl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBtZW51SXRlbS5jbGFzc0xpc3QuYWRkKFwibWVudS1pdGVtXCIpO1xuICAgIGxpc3QuYXBwZW5kQ2hpbGQobWVudUl0ZW0pO1xuXG4gICAgY29uc3QgaXRlbUltZ0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGl0ZW1JbWdEaXYuY2xhc3NMaXN0LmFkZChcIml0ZW0taW1hZ2UtZGl2XCIpO1xuICAgIG1lbnVJdGVtLmFwcGVuZENoaWxkKGl0ZW1JbWdEaXYpO1xuXG4gICAgaXRlbUltZ0Rpdi5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBgdXJsKCR7aW1hZ2VTcmN9KWA7XG5cbiAgICBjb25zdCB3b3Jkc0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgd29yZHNEaXYuY2xhc3NMaXN0LmFkZCgnaXRlbS13b3JkcycpO1xuICAgIG1lbnVJdGVtLmFwcGVuZENoaWxkKHdvcmRzRGl2KTtcblxuICAgIGNvbnN0IG5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICBuYW1lLnRleHRDb250ZW50ID0gdGl0bGUgKyBcIjpcIjtcbiAgICBuYW1lLmNsYXNzTGlzdC5hZGQoJ2l0ZW0tbmFtZScpO1xuICAgIHdvcmRzRGl2LmFwcGVuZENoaWxkKG5hbWUpO1xuXG4gICAgY29uc3QgZGVzYyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIGRlc2MudGV4dENvbnRlbnQgPSB0ZXh0O1xuICAgIGRlc2MuY2xhc3NMaXN0LmFkZCgnaXRlbS1kZXNjJyk7XG4gICAgd29yZHNEaXYuYXBwZW5kQ2hpbGQoZGVzYyk7XG5cbiAgICBjb25zdCBwcmljZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIHByaWNlLnRleHRDb250ZW50ID0gcHJjICsgXCIkXCI7XG4gICAgcHJpY2UuY2xhc3NMaXN0LmFkZCgnaXRlbS1wcmljZScpO1xuICAgIHdvcmRzRGl2LmFwcGVuZENoaWxkKHByaWNlKTtcbn0iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=