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
/* harmony import */ var _assets_Baratie_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/Baratie.jpg */ "./src/assets/Baratie.jpg");


function loadTab(tab)
{
    // Change background for tab
    const main = document.getElementById("main-container");
    main.style.backgroundImage = `url(${_assets_Baratie_jpg__WEBPACK_IMPORTED_MODULE_0__})`;

    // Tab attributes
    tab.id = "tab1";
    tab.classList.add('tab');

    // Create Welcome message!
    const welcome = document.createElement('h1');
    welcome.textContent = 'Welcome to Baratie';
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX3RhYjFfanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBc0M7O0FBRXZCO0FBQ2Y7QUFDQTtBQUNBO0FBQ0Esd0NBQXdDLGdEQUFFLENBQUM7O0FBRTNDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudHBhZ2UvLi9zcmMvdGFiMS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYmcgZnJvbSAnLi9hc3NldHMvQmFyYXRpZS5qcGcnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBsb2FkVGFiKHRhYilcbntcbiAgICAvLyBDaGFuZ2UgYmFja2dyb3VuZCBmb3IgdGFiXG4gICAgY29uc3QgbWFpbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWFpbi1jb250YWluZXJcIik7XG4gICAgbWFpbi5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBgdXJsKCR7Ymd9KWA7XG5cbiAgICAvLyBUYWIgYXR0cmlidXRlc1xuICAgIHRhYi5pZCA9IFwidGFiMVwiO1xuICAgIHRhYi5jbGFzc0xpc3QuYWRkKCd0YWInKTtcblxuICAgIC8vIENyZWF0ZSBXZWxjb21lIG1lc3NhZ2UhXG4gICAgY29uc3Qgd2VsY29tZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG4gICAgd2VsY29tZS50ZXh0Q29udGVudCA9ICdXZWxjb21lIHRvIEJhcmF0aWUnO1xuICAgIHRhYi5hcHBlbmRDaGlsZCh3ZWxjb21lKTtcbn0iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=