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
    const title = document.createElement('div');
    title.textContent = 'Menu:';
    tab.appendChild(title);

    const list = document.createElement('div');
    list.classList.add("menu-list");
    tab.appendChild(list);
    for (let i = 0; i < 3; i++) 
    {
        const menuItem = document.createElement('div');
        menuItem.classList.add("menu-item");
        list.appendChild(menuItem);

        const itemImg = new Image();
        itemImg.src = _assets_italian_jpg__WEBPACK_IMPORTED_MODULE_1__;
        menuItem.appendChild(itemImg);

        const wordsDiv = document.createElement("div");
        wordsDiv.classList.add('item-words');
        menuItem.appendChild(wordsDiv);

        const name = document.createElement("p");
        name.textContent = "Italian:";
        name.classList.add('item-name');
        wordsDiv.appendChild(name);

        const desc = document.createElement("p");
        desc.textContent = "asdmalsdmladsmlad,mlasd,amdlasdlad, askdjaoskdjaosdkajdoaksdj";
        desc.classList.add('item-desc');
        wordsDiv.appendChild(desc);
    }

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX3RhYjJfanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQW9DO0FBQ087O0FBRTVCO0FBQ2Y7QUFDQTtBQUNBO0FBQ0EsK0NBQStDLDhDQUFFLENBQUM7QUFDbEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsT0FBTztBQUMzQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHNCQUFzQixnREFBTztBQUM3Qjs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnRwYWdlLy4vc3JjL3RhYjIuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGJnIGZyb20gJy4vYXNzZXRzL1BpenphLmpwZyc7XG5pbXBvcnQgaXRhbGlhbiBmcm9tICcuL2Fzc2V0cy9pdGFsaWFuLmpwZyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGxvYWRUYWIodGFiKVxue1xuICAgICAgICAvLyBDaGFuZ2UgYmFja2dyb3VuZCBmb3IgdGFiXG4gICAgICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbnRlbnRcIik7XG4gICAgICAgIGNvbnRlbnQuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gYHVybCgke2JnfSlgO1xuICAgIFxuICAgICAgICAvLyBDcmVhdGUgYmx1ciBmb3IgYmFja2dyb3VuZFxuICAgICAgICBjb25zdCBtYWluID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtYWluLWNvbnRhaW5lclwiKTtcbiAgICAgICAgbWFpbi5zdHlsZS5iYWNrZHJvcEZpbHRlciA9ICdibHVyKDdweCknO1xuICAgICAgICBcbiAgICAvLyBUYWIgYXR0cmlidXRlc1xuICAgIHRhYi5pZCA9IFwidGFiMlwiO1xuICAgIHRhYi5jbGFzc0xpc3QuYWRkKCd0YWInKTtcblxuICAgIC8vIENyZWF0ZSBNZW51IG1lc3NhZ2UhXG4gICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB0aXRsZS50ZXh0Q29udGVudCA9ICdNZW51Oic7XG4gICAgdGFiLmFwcGVuZENoaWxkKHRpdGxlKTtcblxuICAgIGNvbnN0IGxpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBsaXN0LmNsYXNzTGlzdC5hZGQoXCJtZW51LWxpc3RcIik7XG4gICAgdGFiLmFwcGVuZENoaWxkKGxpc3QpO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMzsgaSsrKSBcbiAgICB7XG4gICAgICAgIGNvbnN0IG1lbnVJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIG1lbnVJdGVtLmNsYXNzTGlzdC5hZGQoXCJtZW51LWl0ZW1cIik7XG4gICAgICAgIGxpc3QuYXBwZW5kQ2hpbGQobWVudUl0ZW0pO1xuXG4gICAgICAgIGNvbnN0IGl0ZW1JbWcgPSBuZXcgSW1hZ2UoKTtcbiAgICAgICAgaXRlbUltZy5zcmMgPSBpdGFsaWFuO1xuICAgICAgICBtZW51SXRlbS5hcHBlbmRDaGlsZChpdGVtSW1nKTtcblxuICAgICAgICBjb25zdCB3b3Jkc0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIHdvcmRzRGl2LmNsYXNzTGlzdC5hZGQoJ2l0ZW0td29yZHMnKTtcbiAgICAgICAgbWVudUl0ZW0uYXBwZW5kQ2hpbGQod29yZHNEaXYpO1xuXG4gICAgICAgIGNvbnN0IG5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICAgICAgbmFtZS50ZXh0Q29udGVudCA9IFwiSXRhbGlhbjpcIjtcbiAgICAgICAgbmFtZS5jbGFzc0xpc3QuYWRkKCdpdGVtLW5hbWUnKTtcbiAgICAgICAgd29yZHNEaXYuYXBwZW5kQ2hpbGQobmFtZSk7XG5cbiAgICAgICAgY29uc3QgZGVzYyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgICAgICBkZXNjLnRleHRDb250ZW50ID0gXCJhc2RtYWxzZG1sYWRzbWxhZCxtbGFzZCxhbWRsYXNkbGFkLCBhc2tkamFvc2tkamFvc2RrYWpkb2Frc2RqXCI7XG4gICAgICAgIGRlc2MuY2xhc3NMaXN0LmFkZCgnaXRlbS1kZXNjJyk7XG4gICAgICAgIHdvcmRzRGl2LmFwcGVuZENoaWxkKGRlc2MpO1xuICAgIH1cblxufSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==