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
    const content = document.getElementById("content");
    content.style.backgroundImage = `url(${_assets_Baratie_jpg__WEBPACK_IMPORTED_MODULE_0__})`;

    // Create blur for background
    const main = document.getElementById("main-container");
    main.style.backdropFilter = 'blur(3px)';
    
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX3RhYjFfanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBc0M7O0FBRXZCO0FBQ2Y7QUFDQTtBQUNBO0FBQ0EsMkNBQTJDLGdEQUFFLENBQUM7O0FBRTlDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnRwYWdlLy4vc3JjL3RhYjEuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGJnIGZyb20gJy4vYXNzZXRzL0JhcmF0aWUuanBnJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbG9hZFRhYih0YWIpXG57XG4gICAgLy8gQ2hhbmdlIGJhY2tncm91bmQgZm9yIHRhYlxuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbnRlbnRcIik7XG4gICAgY29udGVudC5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBgdXJsKCR7Ymd9KWA7XG5cbiAgICAvLyBDcmVhdGUgYmx1ciBmb3IgYmFja2dyb3VuZFxuICAgIGNvbnN0IG1haW4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1haW4tY29udGFpbmVyXCIpO1xuICAgIG1haW4uc3R5bGUuYmFja2Ryb3BGaWx0ZXIgPSAnYmx1cigzcHgpJztcbiAgICBcbiAgICAvLyBUYWIgYXR0cmlidXRlc1xuICAgIHRhYi5pZCA9IFwidGFiMVwiO1xuICAgIHRhYi5jbGFzc0xpc3QuYWRkKCd0YWInKTtcblxuXG5cbiAgICAvLyBDcmVhdGUgV2VsY29tZSBtZXNzYWdlIVxuICAgIGNvbnN0IHdlbGNvbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuICAgIHdlbGNvbWUudGV4dENvbnRlbnQgPSAnV2VsY29tZSB0byBCYXJhdGllJztcbiAgICB0YWIuYXBwZW5kQ2hpbGQod2VsY29tZSk7XG59Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9