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
/* harmony import */ var _assets_Baratie_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/Baratie.jpg */ "./src/assets/Baratie.jpg");


function loadTab(tab)
{
    // Change background for tab
    const main = document.getElementById("main-container");
    main.style.backgroundImage = _assets_Baratie_jpg__WEBPACK_IMPORTED_MODULE_0__;

    // Tab attributes
    tab.id = "tab2";
    tab.classList.add('tab');

    // Create Welcome message!
    const welcome = document.createElement('h1');
    welcome.textContent = 'haha';
    tab.appendChild(welcome);

}

/***/ }),

/***/ "./src/assets/Baratie.jpg":
/*!********************************!*\
  !*** ./src/assets/Baratie.jpg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "30cdc7c337756ef151fc.jpg";

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX3RhYjJfanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBc0M7O0FBRXZCO0FBQ2Y7QUFDQTtBQUNBO0FBQ0EsaUNBQWlDLGdEQUFFOztBQUVuQztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50cGFnZS8uL3NyYy90YWIyLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBiZyBmcm9tICcuL2Fzc2V0cy9CYXJhdGllLmpwZyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGxvYWRUYWIodGFiKVxue1xuICAgIC8vIENoYW5nZSBiYWNrZ3JvdW5kIGZvciB0YWJcbiAgICBjb25zdCBtYWluID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtYWluLWNvbnRhaW5lclwiKTtcbiAgICBtYWluLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IGJnO1xuXG4gICAgLy8gVGFiIGF0dHJpYnV0ZXNcbiAgICB0YWIuaWQgPSBcInRhYjJcIjtcbiAgICB0YWIuY2xhc3NMaXN0LmFkZCgndGFiJyk7XG5cbiAgICAvLyBDcmVhdGUgV2VsY29tZSBtZXNzYWdlIVxuICAgIGNvbnN0IHdlbGNvbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuICAgIHdlbGNvbWUudGV4dENvbnRlbnQgPSAnaGFoYSc7XG4gICAgdGFiLmFwcGVuZENoaWxkKHdlbGNvbWUpO1xuXG59Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9