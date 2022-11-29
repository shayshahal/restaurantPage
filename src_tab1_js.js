"use strict";
(self["webpackChunkrestaurantpage"] = self["webpackChunkrestaurantpage"] || []).push([["src_tab1_js"],{

/***/ "./src/tab1.js":
/*!*********************!*\
  !*** ./src/tab1.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ loadTab)
/* harmony export */ });
/* harmony import */ var _assets_Pizza_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/Pizza.jpg */ "./src/assets/Pizza.jpg");
/* harmony import */ var _assets_papa_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/papa.png */ "./src/assets/papa.png");



function loadTab(tab)
{
    // Create blur for background
    const main = document.getElementById("main-container");
    content.style.backgroundImage = `url(${_assets_Pizza_jpg__WEBPACK_IMPORTED_MODULE_0__})`;
    main.style.backdropFilter = 'blur(7px)';
    
    // Tab attributes
    tab.id = "tab1";
    tab.classList.add('tab');

    // Create Welcome message!
    const welcome = document.createElement('div');
    welcome.textContent = 'Welcome to Papa Pizza';
    welcome.id = 'welcome';
    tab.appendChild(welcome);

    const papa = document.createElement('div');
    papa.textContent = 'The Pizza of Papa';
    papa.id = 'papa';
    const img = new Image();
    img.src = _assets_papa_png__WEBPACK_IMPORTED_MODULE_1__;
    papa.appendChild(img);
    tab.appendChild(papa);
}

/***/ }),

/***/ "./src/assets/Pizza.jpg":
/*!******************************!*\
  !*** ./src/assets/Pizza.jpg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "d8ba615d52e110714e4e.jpg";

/***/ }),

/***/ "./src/assets/papa.png":
/*!*****************************!*\
  !*** ./src/assets/papa.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "8820815e7bbb66ca02b4.png";

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX3RhYjFfanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQW9DO0FBQ0M7O0FBRXRCO0FBQ2Y7QUFDQTtBQUNBO0FBQ0EsMkNBQTJDLDhDQUFFLENBQUM7QUFDOUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYyw2Q0FBSTtBQUNsQjtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50cGFnZS8uL3NyYy90YWIxLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBiZyBmcm9tICcuL2Fzc2V0cy9QaXp6YS5qcGcnO1xuaW1wb3J0IGxvZ28gZnJvbSAnLi9hc3NldHMvcGFwYS5wbmcnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBsb2FkVGFiKHRhYilcbntcbiAgICAvLyBDcmVhdGUgYmx1ciBmb3IgYmFja2dyb3VuZFxuICAgIGNvbnN0IG1haW4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1haW4tY29udGFpbmVyXCIpO1xuICAgIGNvbnRlbnQuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gYHVybCgke2JnfSlgO1xuICAgIG1haW4uc3R5bGUuYmFja2Ryb3BGaWx0ZXIgPSAnYmx1cig3cHgpJztcbiAgICBcbiAgICAvLyBUYWIgYXR0cmlidXRlc1xuICAgIHRhYi5pZCA9IFwidGFiMVwiO1xuICAgIHRhYi5jbGFzc0xpc3QuYWRkKCd0YWInKTtcblxuICAgIC8vIENyZWF0ZSBXZWxjb21lIG1lc3NhZ2UhXG4gICAgY29uc3Qgd2VsY29tZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHdlbGNvbWUudGV4dENvbnRlbnQgPSAnV2VsY29tZSB0byBQYXBhIFBpenphJztcbiAgICB3ZWxjb21lLmlkID0gJ3dlbGNvbWUnO1xuICAgIHRhYi5hcHBlbmRDaGlsZCh3ZWxjb21lKTtcblxuICAgIGNvbnN0IHBhcGEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBwYXBhLnRleHRDb250ZW50ID0gJ1RoZSBQaXp6YSBvZiBQYXBhJztcbiAgICBwYXBhLmlkID0gJ3BhcGEnO1xuICAgIGNvbnN0IGltZyA9IG5ldyBJbWFnZSgpO1xuICAgIGltZy5zcmMgPSBsb2dvO1xuICAgIHBhcGEuYXBwZW5kQ2hpbGQoaW1nKTtcbiAgICB0YWIuYXBwZW5kQ2hpbGQocGFwYSk7XG59Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9