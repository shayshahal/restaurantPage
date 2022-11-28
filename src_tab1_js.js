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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX3RhYjFfanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBb0M7OztBQUdyQjtBQUNmO0FBQ0E7QUFDQTtBQUNBLDJDQUEyQyw4Q0FBRSxDQUFDOztBQUU5QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudHBhZ2UvLi9zcmMvdGFiMS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYmcgZnJvbSAnLi9hc3NldHMvUGl6emEuanBnJztcblxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBsb2FkVGFiKHRhYilcbntcbiAgICAvLyBDaGFuZ2UgYmFja2dyb3VuZCBmb3IgdGFiXG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29udGVudFwiKTtcbiAgICBjb250ZW50LnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IGB1cmwoJHtiZ30pYDtcblxuICAgIC8vIENyZWF0ZSBibHVyIGZvciBiYWNrZ3JvdW5kXG4gICAgY29uc3QgbWFpbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWFpbi1jb250YWluZXJcIik7XG4gICAgbWFpbi5zdHlsZS5iYWNrZHJvcEZpbHRlciA9ICdibHVyKDdweCknO1xuICAgIFxuICAgIFxuICAgIC8vIFRhYiBhdHRyaWJ1dGVzXG4gICAgdGFiLmlkID0gXCJ0YWIxXCI7XG4gICAgdGFiLmNsYXNzTGlzdC5hZGQoJ3RhYicpO1xuXG4gICAgLy8gQ3JlYXRlIFdlbGNvbWUgbWVzc2FnZSFcbiAgICBjb25zdCB3ZWxjb21lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgd2VsY29tZS50ZXh0Q29udGVudCA9ICdXZWxjb21lIHRvIFBhcGEgUGl6emEnO1xuICAgIHdlbGNvbWUuaWQgPSAnd2VsY29tZSc7XG4gICAgdGFiLmFwcGVuZENoaWxkKHdlbGNvbWUpO1xuICAgIGNvbnN0IHBhcGEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBwYXBhLnRleHRDb250ZW50ID0gJ1RoZSBQaXp6YSBvZiBQYXBhJztcbiAgICBwYXBhLmlkID0gJ3BhcGEnO1xuICAgIHRhYi5hcHBlbmRDaGlsZChwYXBhKTtcbn0iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=