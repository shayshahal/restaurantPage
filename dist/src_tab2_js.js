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
/* harmony import */ var _assets_Pizza_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/Pizza.jpg */ "./src/assets/Pizza.jpg");
/* harmony import */ var _assets_italian_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/italian.jpg */ "./src/assets/italian.jpg");



function loadTab(tab)
{
    // Change background for tab
    const content = document.getElementById("content");
    content.style.backgroundImage = `url(${_assets_Pizza_jpg__WEBPACK_IMPORTED_MODULE_0__})`;

    // Create blur for background
    const main = document.getElementById("main-container");
    main.style.backdropFilter = 'blur(7px)';

    // Tab attributes
    tab.id = "tab2";
    tab.classList.add('tab');

    // Create Menu message!
    const title = document.createElement('p');
    title.textContent = 'Menu:';
    title.id = 'menu';
    tab.appendChild(title);

    const list = document.createElement('div');
    list.classList.add("menu-list");
    tab.appendChild(list);

    addItem(list, _assets_italian_jpg__WEBPACK_IMPORTED_MODULE_1__, "Italian", "An italiano pizza");
    addItem(list, _assets_italian_jpg__WEBPACK_IMPORTED_MODULE_1__, "Italian", "An italiano pizza");
    addItem(list, _assets_italian_jpg__WEBPACK_IMPORTED_MODULE_1__, "Italian", "An italiano pizza");
}

function addItem(list, imageSrc, title, text)
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
}

/***/ }),

/***/ "./src/assets/Pizza.jpg":
/*!******************************!*\
  !*** ./src/assets/Pizza.jpg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "d8ba615d52e110714e4e.jpg";

/***/ }),

/***/ "./src/assets/italian.jpg":
/*!********************************!*\
  !*** ./src/assets/italian.jpg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "06218923773904f61221.jpg";

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX3RhYjJfanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQW9DO0FBQ087O0FBRTVCO0FBQ2Y7QUFDQTtBQUNBO0FBQ0EsMkNBQTJDLDhDQUFFLENBQUM7O0FBRTlDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsa0JBQWtCLGdEQUFPO0FBQ3pCLGtCQUFrQixnREFBTztBQUN6QixrQkFBa0IsZ0RBQU87QUFDekI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudHBhZ2UvLi9zcmMvdGFiMi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYmcgZnJvbSAnLi9hc3NldHMvUGl6emEuanBnJztcbmltcG9ydCBpdGFsaWFuIGZyb20gJy4vYXNzZXRzL2l0YWxpYW4uanBnJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbG9hZFRhYih0YWIpXG57XG4gICAgLy8gQ2hhbmdlIGJhY2tncm91bmQgZm9yIHRhYlxuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbnRlbnRcIik7XG4gICAgY29udGVudC5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBgdXJsKCR7Ymd9KWA7XG5cbiAgICAvLyBDcmVhdGUgYmx1ciBmb3IgYmFja2dyb3VuZFxuICAgIGNvbnN0IG1haW4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1haW4tY29udGFpbmVyXCIpO1xuICAgIG1haW4uc3R5bGUuYmFja2Ryb3BGaWx0ZXIgPSAnYmx1cig3cHgpJztcblxuICAgIC8vIFRhYiBhdHRyaWJ1dGVzXG4gICAgdGFiLmlkID0gXCJ0YWIyXCI7XG4gICAgdGFiLmNsYXNzTGlzdC5hZGQoJ3RhYicpO1xuXG4gICAgLy8gQ3JlYXRlIE1lbnUgbWVzc2FnZSFcbiAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICB0aXRsZS50ZXh0Q29udGVudCA9ICdNZW51Oic7XG4gICAgdGl0bGUuaWQgPSAnbWVudSc7XG4gICAgdGFiLmFwcGVuZENoaWxkKHRpdGxlKTtcblxuICAgIGNvbnN0IGxpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBsaXN0LmNsYXNzTGlzdC5hZGQoXCJtZW51LWxpc3RcIik7XG4gICAgdGFiLmFwcGVuZENoaWxkKGxpc3QpO1xuXG4gICAgYWRkSXRlbShsaXN0LCBpdGFsaWFuLCBcIkl0YWxpYW5cIiwgXCJBbiBpdGFsaWFubyBwaXp6YVwiKTtcbiAgICBhZGRJdGVtKGxpc3QsIGl0YWxpYW4sIFwiSXRhbGlhblwiLCBcIkFuIGl0YWxpYW5vIHBpenphXCIpO1xuICAgIGFkZEl0ZW0obGlzdCwgaXRhbGlhbiwgXCJJdGFsaWFuXCIsIFwiQW4gaXRhbGlhbm8gcGl6emFcIik7XG59XG5cbmZ1bmN0aW9uIGFkZEl0ZW0obGlzdCwgaW1hZ2VTcmMsIHRpdGxlLCB0ZXh0KVxue1xuICAgIGNvbnN0IG1lbnVJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbWVudUl0ZW0uY2xhc3NMaXN0LmFkZChcIm1lbnUtaXRlbVwiKTtcbiAgICBsaXN0LmFwcGVuZENoaWxkKG1lbnVJdGVtKTtcblxuICAgIGNvbnN0IGl0ZW1JbWdEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBpdGVtSW1nRGl2LmNsYXNzTGlzdC5hZGQoXCJpdGVtLWltYWdlLWRpdlwiKTtcbiAgICBtZW51SXRlbS5hcHBlbmRDaGlsZChpdGVtSW1nRGl2KTtcblxuICAgIGNvbnN0IGl0ZW1JbWcgPSBuZXcgSW1hZ2UoKTtcbiAgICBpdGVtSW1nLnNyYyA9IGltYWdlU3JjO1xuICAgIGl0ZW1JbWdEaXYuYXBwZW5kQ2hpbGQoaXRlbUltZyk7XG5cbiAgICBjb25zdCB3b3Jkc0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgd29yZHNEaXYuY2xhc3NMaXN0LmFkZCgnaXRlbS13b3JkcycpO1xuICAgIG1lbnVJdGVtLmFwcGVuZENoaWxkKHdvcmRzRGl2KTtcblxuICAgIGNvbnN0IG5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICBuYW1lLnRleHRDb250ZW50ID0gdGl0bGUgKyBcIjpcIjtcbiAgICBuYW1lLmNsYXNzTGlzdC5hZGQoJ2l0ZW0tbmFtZScpO1xuICAgIHdvcmRzRGl2LmFwcGVuZENoaWxkKG5hbWUpO1xuXG4gICAgY29uc3QgZGVzYyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIGRlc2MudGV4dENvbnRlbnQgPSB0ZXh0O1xuICAgIGRlc2MuY2xhc3NMaXN0LmFkZCgnaXRlbS1kZXNjJyk7XG4gICAgd29yZHNEaXYuYXBwZW5kQ2hpbGQoZGVzYyk7XG59Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9