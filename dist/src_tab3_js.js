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
/* harmony import */ var _assets_pizza3_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/pizza3.jpg */ "./src/assets/pizza3.jpg");


function loadTab(tab)
{
     // Create blur for background
     content.style.backgroundImage = `url(${_assets_pizza3_jpg__WEBPACK_IMPORTED_MODULE_0__})`;
     const main = document.getElementById("main-container");
     main.style.backdropFilter = 'blur(7px)';

     // Tab attributes
     tab.id = "tab3";
     tab.classList.add('tab');
 
     const hoursDiv = document.createElement('div');
     hoursDiv.classList.add('tab3-div');
     tab.appendChild(hoursDiv);

     const hoursTitle = document.createElement('p');
     hoursTitle.textContent = "Opening hours";
     hoursTitle.classList.add('title');
     hoursDiv.appendChild(hoursTitle);

     const hoursText = document.createElement('p');
     hoursText.textContent = 'Sunday - Thursday: 8:00 - 17:00\nFriday: 8:00 - 13:00';
     hoursText.classList.add('text');
     hoursDiv.appendChild(hoursText);

     const contactDiv = document.createElement('div');
     contactDiv.classList.add('tab3-div');
     tab.appendChild(contactDiv);

     const contactTitle = document.createElement('p');
     contactTitle.textContent = "Call us:";
     contactTitle.classList.add('title');
     contactDiv.appendChild(contactTitle);

     const contactText = document.createElement('p');
     contactText.textContent = 'Papa: 123-34556789\nMama: 987-65432101';
     contactText.classList.add('text');
     contactDiv.appendChild(contactText);
}

/***/ }),

/***/ "./src/assets/pizza3.jpg":
/*!*******************************!*\
  !*** ./src/assets/pizza3.jpg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "10574d5e9082c62abd0d.jpg";

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX3RhYjNfanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBcUM7O0FBRXRCO0FBQ2Y7QUFDQTtBQUNBLDRDQUE0QywrQ0FBRSxDQUFDO0FBQy9DO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50cGFnZS8uL3NyYy90YWIzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBiZyBmcm9tICcuL2Fzc2V0cy9waXp6YTMuanBnJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbG9hZFRhYih0YWIpXG57XG4gICAgIC8vIENyZWF0ZSBibHVyIGZvciBiYWNrZ3JvdW5kXG4gICAgIGNvbnRlbnQuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gYHVybCgke2JnfSlgO1xuICAgICBjb25zdCBtYWluID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtYWluLWNvbnRhaW5lclwiKTtcbiAgICAgbWFpbi5zdHlsZS5iYWNrZHJvcEZpbHRlciA9ICdibHVyKDdweCknO1xuXG4gICAgIC8vIFRhYiBhdHRyaWJ1dGVzXG4gICAgIHRhYi5pZCA9IFwidGFiM1wiO1xuICAgICB0YWIuY2xhc3NMaXN0LmFkZCgndGFiJyk7XG4gXG4gICAgIGNvbnN0IGhvdXJzRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgIGhvdXJzRGl2LmNsYXNzTGlzdC5hZGQoJ3RhYjMtZGl2Jyk7XG4gICAgIHRhYi5hcHBlbmRDaGlsZChob3Vyc0Rpdik7XG5cbiAgICAgY29uc3QgaG91cnNUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgaG91cnNUaXRsZS50ZXh0Q29udGVudCA9IFwiT3BlbmluZyBob3Vyc1wiO1xuICAgICBob3Vyc1RpdGxlLmNsYXNzTGlzdC5hZGQoJ3RpdGxlJyk7XG4gICAgIGhvdXJzRGl2LmFwcGVuZENoaWxkKGhvdXJzVGl0bGUpO1xuXG4gICAgIGNvbnN0IGhvdXJzVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgaG91cnNUZXh0LnRleHRDb250ZW50ID0gJ1N1bmRheSAtIFRodXJzZGF5OiA4OjAwIC0gMTc6MDBcXG5GcmlkYXk6IDg6MDAgLSAxMzowMCc7XG4gICAgIGhvdXJzVGV4dC5jbGFzc0xpc3QuYWRkKCd0ZXh0Jyk7XG4gICAgIGhvdXJzRGl2LmFwcGVuZENoaWxkKGhvdXJzVGV4dCk7XG5cbiAgICAgY29uc3QgY29udGFjdERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICBjb250YWN0RGl2LmNsYXNzTGlzdC5hZGQoJ3RhYjMtZGl2Jyk7XG4gICAgIHRhYi5hcHBlbmRDaGlsZChjb250YWN0RGl2KTtcblxuICAgICBjb25zdCBjb250YWN0VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgIGNvbnRhY3RUaXRsZS50ZXh0Q29udGVudCA9IFwiQ2FsbCB1czpcIjtcbiAgICAgY29udGFjdFRpdGxlLmNsYXNzTGlzdC5hZGQoJ3RpdGxlJyk7XG4gICAgIGNvbnRhY3REaXYuYXBwZW5kQ2hpbGQoY29udGFjdFRpdGxlKTtcblxuICAgICBjb25zdCBjb250YWN0VGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgY29udGFjdFRleHQudGV4dENvbnRlbnQgPSAnUGFwYTogMTIzLTM0NTU2Nzg5XFxuTWFtYTogOTg3LTY1NDMyMTAxJztcbiAgICAgY29udGFjdFRleHQuY2xhc3NMaXN0LmFkZCgndGV4dCcpO1xuICAgICBjb250YWN0RGl2LmFwcGVuZENoaWxkKGNvbnRhY3RUZXh0KTtcbn0iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=