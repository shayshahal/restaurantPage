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


function loadTab(tab)
{
    // Change background for tab
    const content = document.getElementById("content");
    content.style.backgroundImage = `url(${_assets_Pizza_jpg__WEBPACK_IMPORTED_MODULE_0__})`;

    // Create blur for background
    const main = document.getElementById("main-container");
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
    tab.appendChild(papa);
}

/***/ }),

/***/ "./src/assets/Pizza.jpg":
/*!******************************!*\
  !*** ./src/assets/Pizza.jpg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "d8ba615d52e110714e4e.jpg";

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX3RhYjFfanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBb0M7O0FBRXJCO0FBQ2Y7QUFDQTtBQUNBO0FBQ0EsMkNBQTJDLDhDQUFFLENBQUM7O0FBRTlDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudHBhZ2UvLi9zcmMvdGFiMS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYmcgZnJvbSAnLi9hc3NldHMvUGl6emEuanBnJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbG9hZFRhYih0YWIpXG57XG4gICAgLy8gQ2hhbmdlIGJhY2tncm91bmQgZm9yIHRhYlxuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbnRlbnRcIik7XG4gICAgY29udGVudC5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBgdXJsKCR7Ymd9KWA7XG5cbiAgICAvLyBDcmVhdGUgYmx1ciBmb3IgYmFja2dyb3VuZFxuICAgIGNvbnN0IG1haW4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1haW4tY29udGFpbmVyXCIpO1xuICAgIG1haW4uc3R5bGUuYmFja2Ryb3BGaWx0ZXIgPSAnYmx1cig3cHgpJztcbiAgICBcbiAgICAvLyBUYWIgYXR0cmlidXRlc1xuICAgIHRhYi5pZCA9IFwidGFiMVwiO1xuICAgIHRhYi5jbGFzc0xpc3QuYWRkKCd0YWInKTtcblxuICAgIC8vIENyZWF0ZSBXZWxjb21lIG1lc3NhZ2UhXG4gICAgY29uc3Qgd2VsY29tZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHdlbGNvbWUudGV4dENvbnRlbnQgPSAnV2VsY29tZSB0byBQYXBhIFBpenphJztcbiAgICB3ZWxjb21lLmlkID0gJ3dlbGNvbWUnO1xuICAgIHRhYi5hcHBlbmRDaGlsZCh3ZWxjb21lKTtcbiAgICBjb25zdCBwYXBhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgcGFwYS50ZXh0Q29udGVudCA9ICdUaGUgUGl6emEgb2YgUGFwYSc7XG4gICAgcGFwYS5pZCA9ICdwYXBhJztcbiAgICB0YWIuYXBwZW5kQ2hpbGQocGFwYSk7XG59Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9