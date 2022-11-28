"use strict";
(self["webpackChunkrestaurantpage"] = self["webpackChunkrestaurantpage"] || []).push([["src_tab3_js"],{

/***/ "./src/tab3.js":
/*!*********************!*\
  !*** ./src/tab3.js ***!
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
     tab.id = "tab3";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX3RhYjNfanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBb0M7O0FBRXJCO0FBQ2Y7QUFDQTtBQUNBO0FBQ0EsNENBQTRDLDhDQUFFLENBQUM7QUFDL0M7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnRwYWdlLy4vc3JjL3RhYjMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGJnIGZyb20gJy4vYXNzZXRzL1BpenphLmpwZyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGxvYWRUYWIodGFiKVxue1xuICAgICAvLyBDaGFuZ2UgYmFja2dyb3VuZCBmb3IgdGFiXG4gICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbnRlbnRcIik7XG4gICAgIGNvbnRlbnQuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gYHVybCgke2JnfSlgO1xuIFxuICAgICAvLyBDcmVhdGUgYmx1ciBmb3IgYmFja2dyb3VuZFxuICAgICBjb25zdCBtYWluID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtYWluLWNvbnRhaW5lclwiKTtcbiAgICAgbWFpbi5zdHlsZS5iYWNrZHJvcEZpbHRlciA9ICdibHVyKDdweCknO1xuXG4gICAgIC8vIFRhYiBhdHRyaWJ1dGVzXG4gICAgIHRhYi5pZCA9IFwidGFiM1wiO1xuICAgICB0YWIuY2xhc3NMaXN0LmFkZCgndGFiJyk7XG4gXG4gICAgIC8vIENyZWF0ZSBXZWxjb21lIG1lc3NhZ2UhXG4gICAgIGNvbnN0IHdlbGNvbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgd2VsY29tZS50ZXh0Q29udGVudCA9ICdXZWxjb21lIHRvIFBhcGEgUGl6emEnO1xuICAgICB3ZWxjb21lLmlkID0gJ3dlbGNvbWUnO1xuICAgICB0YWIuYXBwZW5kQ2hpbGQod2VsY29tZSk7XG4gICAgIGNvbnN0IHBhcGEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgcGFwYS50ZXh0Q29udGVudCA9ICdUaGUgUGl6emEgb2YgUGFwYSc7XG4gICAgIHBhcGEuaWQgPSAncGFwYSc7XG4gICAgIHRhYi5hcHBlbmRDaGlsZChwYXBhKTtcbn0iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=