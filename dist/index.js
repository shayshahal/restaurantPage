/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../../../../src/assets/Italiana-Regular.ttf */ "./src/assets/Italiana-Regular.ttf"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "@font-face {\n    font-family: 'italian';\n    src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") format('TrueType'),\n      url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") format('TrueType');\n    font-weight: 900;\n    font-style: normal;\n  }\n*\n{\n    box-sizing: border-box;\n    margin: 0;\n    user-select: none;\n    color: #FFF3E4;\n    overflow: hidden;\n    font-family: 'italian', fantasy;\n    text-shadow: 0 .5vh .5vh black;\n}\nhtml\n{\n    height: 100vh;\n    display: flex;\n}\nbody\n{\n    height: 100%;\n    width: 100%;\n}\n#content\n{\n    width: 100%;\n    height: 100%;\n    display: flex;\n    align-items: stretch;\n    align-content: center;\n    background-size: cover;\n    background-repeat: no-repeat;\n    background-position: center;\n    transition: background-image 0.8s ease;\n}\n\n#header\n{\n    position: fixed;\n    display: flex;\n    top: 0;\n    width: 100%;\n    height: 6vh;\n    align-items: center;\n    align-content: center;\n    justify-content: space-between;\n    justify-items: center;\n    background-color: #552c0a;\n    box-shadow: 0px .3vh 1vh .1vh rgba(0, 0, 0, 0.5);\n    z-index: 999;\n}\n\n#logo\n{\n    opacity: 50%;\n    flex-grow: 1;\n}\n#main-container\n{\n    width: 100%;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n}\n#scroll-div\n{\n    position: fixed;\n    left: 1%;\n    bottom: calc(50% - 0.5*(4vh));\n    height: 4vh;\n    width: 4vh;\n    animation: flicker 0.5s linear 0s infinite  alternate ;\n}\n@keyframes flicker {\n    0%\n    {\n        transform: translateY(-7.5%);\n    }\n    100%\n    {\n        transform: translateY(7.5%);\n    }\n}\n#radio-div\n{\n    position: fixed;\n    right: 1%;\n    bottom: calc(50% - 0.5*(7vh));\n    height: 7vh;\n    width: 2vh;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: stretch;\n    gap: 0.5vh;\n}\ninput\n{\n    appearance: none;\n    border-radius: 50%;\n    background-color: transparent;\n    flex-grow: 1;\n    border: .2vw solid rgb(255, 255, 255);\n    transition: background-color .2s ease;\n}\ninput:checked\n{\n    background-color: white;\n}\n.tab\n{\n    flex: 1;\n    animation: .2s;\n    animation-direction: normal;\n    animation-name: slideIn;\n    animation-timing-function: ease ; \n    animation-iteration-count: inherit;\n}\n\n@keyframes slideIn {\n    0%\n    {\n        transform: scale(80%) ;\n    }\n    100%\n    {\n        transform: scale(100%);\n    }\n}\n\n#footer\n{\n    position: fixed;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    flex-grow: 0.01;\n    height: 6vh;\n    bottom: 0;\n    width: 100%;\n    padding: 0vh 1vw;\n    background-color: #310606f3;\n    z-index: 999;\n    box-shadow: 0 .3vh 1vh .1vh rgba(0, 0, 0, 0.5);\n}\n#credits\n{\n    display: flex;\n    align-items: center;\n    font-weight: bolder;\n    font-size: 2vh;\n}\n#github-link\n{\n    align-self: center;\n    display: flex;\n    align-items: center;\n    height: 100%;\n}\nimg \n{\n    height: 0;\n    min-height: 100%;\n    object-fit: contain;\n}\n\n#tab1\n{\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    text-align: center;\n    padding: 1vh;\n}\n#welcome\n{\n    font-size: 12vh;\n    width: 100%;\n    font-weight: 900;\n}\n#papa\n{\n    display: flex;\n    flex-direction: row;\n    justify-content: space-around;\n    gap: 3vh;\n    align-items: center;\n    font-size: 4vh;\n    font-weight: bold;\n}\n#tab2\n{\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    padding: 1vw;\n    \n}\n.menu-list\n{\n    height: 80%;\n    width: 50%;\n    display: flex;\n    background-color: rgb(146, 103, 37);\n    color: black;\n    flex-direction: column;\n    gap: 1vh;\n    padding: 0.5vw;\n    border: 1vh solid #421616;\n    border-radius: 3%;\n}\n.menu-item\n{\n    flex: 1;\n    border: .1vh solid white;\n    border-radius: .5vh;\n    display: flex;\n    flex-direction: row;\n    justify-content: stretch;\n    gap: 0.1vw;\n\n    background-color: rgb(61, 26, 15);\n}\n.item-image-div\n{\n    border-radius: 50%;\n    height: 0;\n    width: 20%;\n    padding-bottom: 20%;\n    align-self: center;\n    background-position: center;\n    background-size: cover;\n    border: 0.4vw solid #834e23;\n}\n.item-words\n{\n    display: flex;\n    gap: 0.5vw;\n    padding: .5vh;\n    border-left: 0.1vw dashed white;\n    width: 80%;\n    flex-direction: column;\n    justify-content: flex-start;\n    align-items: stretch;\n}\n.item-name\n{\n    font-weight: 900;\n    font-size: 2vh;\n    padding: 0.2vh;\n    flex: 1;\n    border-bottom: .05vw dashed white;\n}\n.item-desc\n{\n    word-wrap: break-word;\n    flex: 5;\n}\n.item-price\n{\n    border-top: .05vw dashed white;\n    font-weight: bolder;\n    flex: 1;\n    text-align: end;\n    padding: 1vh 0vh 0vh 0vh;\n}\n#tab3\n{\n    display: flex;\n    flex-direction: column;\n    justify-content: space-evenly;\n    align-items: center;\n    padding: 10vh 10vw;\n    gap: 3vw;\n}\n.tab3-div\n{\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    background-color: rgb(146, 103, 37);\n    gap: 10%;\n    padding: 1%;\n    color: black;\n    text-align: center;\n    white-space: pre;\n    border: 1vh solid #421616;\n    border-radius: 3%;\n}\n.title\n{\n    text-align: center;\n    font-weight: bold;\n    font-size: 4vh;\n}\n.text\n{\n    font-size: 3vh;\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["@font-face {\n    font-family: 'italian';\n    src: url('/src/assets/Italiana-Regular.ttf') format('TrueType'),\n      url('/src/assets/Italiana-Regular.ttf') format('TrueType');\n    font-weight: 900;\n    font-style: normal;\n  }\n*\n{\n    box-sizing: border-box;\n    margin: 0;\n    user-select: none;\n    color: #FFF3E4;\n    overflow: hidden;\n    font-family: 'italian', fantasy;\n    text-shadow: 0 .5vh .5vh black;\n}\nhtml\n{\n    height: 100vh;\n    display: flex;\n}\nbody\n{\n    height: 100%;\n    width: 100%;\n}\n#content\n{\n    width: 100%;\n    height: 100%;\n    display: flex;\n    align-items: stretch;\n    align-content: center;\n    background-size: cover;\n    background-repeat: no-repeat;\n    background-position: center;\n    transition: background-image 0.8s ease;\n}\n\n#header\n{\n    position: fixed;\n    display: flex;\n    top: 0;\n    width: 100%;\n    height: 6vh;\n    align-items: center;\n    align-content: center;\n    justify-content: space-between;\n    justify-items: center;\n    background-color: #552c0a;\n    box-shadow: 0px .3vh 1vh .1vh rgba(0, 0, 0, 0.5);\n    z-index: 999;\n}\n\n#logo\n{\n    opacity: 50%;\n    flex-grow: 1;\n}\n#main-container\n{\n    width: 100%;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n}\n#scroll-div\n{\n    position: fixed;\n    left: 1%;\n    bottom: calc(50% - 0.5*(4vh));\n    height: 4vh;\n    width: 4vh;\n    animation: flicker 0.5s linear 0s infinite  alternate ;\n}\n@keyframes flicker {\n    0%\n    {\n        transform: translateY(-7.5%);\n    }\n    100%\n    {\n        transform: translateY(7.5%);\n    }\n}\n#radio-div\n{\n    position: fixed;\n    right: 1%;\n    bottom: calc(50% - 0.5*(7vh));\n    height: 7vh;\n    width: 2vh;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: stretch;\n    gap: 0.5vh;\n}\ninput\n{\n    appearance: none;\n    border-radius: 50%;\n    background-color: transparent;\n    flex-grow: 1;\n    border: .2vw solid rgb(255, 255, 255);\n    transition: background-color .2s ease;\n}\ninput:checked\n{\n    background-color: white;\n}\n.tab\n{\n    flex: 1;\n    animation: .2s;\n    animation-direction: normal;\n    animation-name: slideIn;\n    animation-timing-function: ease ; \n    animation-iteration-count: inherit;\n}\n\n@keyframes slideIn {\n    0%\n    {\n        transform: scale(80%) ;\n    }\n    100%\n    {\n        transform: scale(100%);\n    }\n}\n\n#footer\n{\n    position: fixed;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    flex-grow: 0.01;\n    height: 6vh;\n    bottom: 0;\n    width: 100%;\n    padding: 0vh 1vw;\n    background-color: #310606f3;\n    z-index: 999;\n    box-shadow: 0 .3vh 1vh .1vh rgba(0, 0, 0, 0.5);\n}\n#credits\n{\n    display: flex;\n    align-items: center;\n    font-weight: bolder;\n    font-size: 2vh;\n}\n#github-link\n{\n    align-self: center;\n    display: flex;\n    align-items: center;\n    height: 100%;\n}\nimg \n{\n    height: 0;\n    min-height: 100%;\n    object-fit: contain;\n}\n\n#tab1\n{\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    text-align: center;\n    padding: 1vh;\n}\n#welcome\n{\n    font-size: 12vh;\n    width: 100%;\n    font-weight: 900;\n}\n#papa\n{\n    display: flex;\n    flex-direction: row;\n    justify-content: space-around;\n    gap: 3vh;\n    align-items: center;\n    font-size: 4vh;\n    font-weight: bold;\n}\n#tab2\n{\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    padding: 1vw;\n    \n}\n.menu-list\n{\n    height: 80%;\n    width: 50%;\n    display: flex;\n    background-color: rgb(146, 103, 37);\n    color: black;\n    flex-direction: column;\n    gap: 1vh;\n    padding: 0.5vw;\n    border: 1vh solid #421616;\n    border-radius: 3%;\n}\n.menu-item\n{\n    flex: 1;\n    border: .1vh solid white;\n    border-radius: .5vh;\n    display: flex;\n    flex-direction: row;\n    justify-content: stretch;\n    gap: 0.1vw;\n\n    background-color: rgb(61, 26, 15);\n}\n.item-image-div\n{\n    border-radius: 50%;\n    height: 0;\n    width: 20%;\n    padding-bottom: 20%;\n    align-self: center;\n    background-position: center;\n    background-size: cover;\n    border: 0.4vw solid #834e23;\n}\n.item-words\n{\n    display: flex;\n    gap: 0.5vw;\n    padding: .5vh;\n    border-left: 0.1vw dashed white;\n    width: 80%;\n    flex-direction: column;\n    justify-content: flex-start;\n    align-items: stretch;\n}\n.item-name\n{\n    font-weight: 900;\n    font-size: 2vh;\n    padding: 0.2vh;\n    flex: 1;\n    border-bottom: .05vw dashed white;\n}\n.item-desc\n{\n    word-wrap: break-word;\n    flex: 5;\n}\n.item-price\n{\n    border-top: .05vw dashed white;\n    font-weight: bolder;\n    flex: 1;\n    text-align: end;\n    padding: 1vh 0vh 0vh 0vh;\n}\n#tab3\n{\n    display: flex;\n    flex-direction: column;\n    justify-content: space-evenly;\n    align-items: center;\n    padding: 10vh 10vw;\n    gap: 3vw;\n}\n.tab3-div\n{\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    background-color: rgb(146, 103, 37);\n    gap: 10%;\n    padding: 1%;\n    color: black;\n    text-align: center;\n    white-space: pre;\n    border: 1vh solid #421616;\n    border-radius: 3%;\n}\n.title\n{\n    text-align: center;\n    font-weight: bold;\n    font-size: 4vh;\n}\n.text\n{\n    font-size: 3vh;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";


var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";


var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/loadPage.js":
/*!*************************!*\
  !*** ./src/loadPage.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ loadPage)
/* harmony export */ });
/* harmony import */ var _assets_logo_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/logo.png */ "./src/assets/logo.png");
/* harmony import */ var _assets_github_logo_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/github-logo.png */ "./src/assets/github-logo.png");
/* harmony import */ var _loadTab_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./loadTab.js */ "./src/loadTab.js");
/* harmony import */ var _assets_scroll_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./assets/scroll.png */ "./src/assets/scroll.png");





// Create content div
const contentDiv = document.createElement("div"); 
contentDiv.id = 'content';
document.body.appendChild(contentDiv);

// Page load function that will be imported in the main JS file
function loadPage()
{
    createHeader(); // Header creation
    createMain(); // Main creation
    createFooter(); // Footer creation
    
    const scrollDiv = document.createElement("div");
    const img = new Image();
    img.src = _assets_scroll_png__WEBPACK_IMPORTED_MODULE_3__;
    scrollDiv.appendChild(img);
    scrollDiv.id = 'scroll-div';
    contentDiv.appendChild(scrollDiv);

    const radioDiv = document.createElement("div");
    radioDiv.id = 'radio-div';
    contentDiv.appendChild(radioDiv);
    for (let i = 0; i < 3; i++) {
        const radio = document.createElement('input');
        radio.type = 'radio';
        if (i === 0)
            radio.checked = true;
        radio.disabled = true;
        radioDiv.appendChild(radio);
    }
}

// Header creation function 
function createHeader()
{
    // Create header div
    let headerDiv = document.createElement('div');
    headerDiv.id = 'header';
    contentDiv.appendChild(headerDiv);

    // Create the logo
    let resLogo = new Image();
    resLogo.id = 'logo';
    resLogo.src = _assets_logo_png__WEBPACK_IMPORTED_MODULE_0__; 
    headerDiv.appendChild(resLogo);
}

// Main creation function
function createMain()
{
    // Create main div
    let mainDiv = document.createElement('div');
    mainDiv.id = 'main-container';
    contentDiv.appendChild(mainDiv);


    // Load tab when call is fulfilled, add it
    (0,_loadTab_js__WEBPACK_IMPORTED_MODULE_2__["default"])(1).then((tab) => 
    {
        mainDiv.appendChild(tab);
    });
}

// Footer creation function
function createFooter()
{
    // Create footer div
    let footerDiv = document.createElement('div');
    footerDiv.id = 'footer';
    contentDiv.appendChild(footerDiv);

    // Create credits div 
    let credits = document.createElement('div');
    credits.id = 'credits';
    footerDiv.appendChild(credits);
    
    // Create text  
    let creditsText = document.createElement('p');
    creditsText.textContent = '© Shay Shahal 2022'
    credits.appendChild(creditsText);

    // Create link 
    let gitLink = document.createElement('a');
    gitLink.id = 'github-link';
    gitLink.href = 'https://github.com/shayshahal/restaurantPage';
    gitLink.target = 'blank'; // Go to new tab
    footerDiv.appendChild(gitLink);

    // Create image
    let gitImg = document.createElement('img')
    gitImg.src = _assets_github_logo_png__WEBPACK_IMPORTED_MODULE_1__;
    gitImg.alt = 'github image';
    gitLink.appendChild(gitImg);

}



/***/ }),

/***/ "./src/loadTab.js":
/*!************************!*\
  !*** ./src/loadTab.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ loadTab)
/* harmony export */ });
// Tab loading function that will be dynamically imported
async function loadTab(tabNum)
{
    // Create tab div
    const tabDiv = document.createElement('div');

    // Call for the correct tab loading JS file 
    const {default: tab} = await __webpack_require__("./src lazy recursive ^\\.\\/tab.*$")("./tab" + tabNum);

    // Load the tab into the created div
    tab(tabDiv);

    return tabDiv;
}

/***/ }),

/***/ "./src lazy recursive ^\\.\\/tab.*$":
/*!************************************************!*\
  !*** ./src/ lazy ^\.\/tab.*$ namespace object ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./tab1": [
		"./src/tab1.js",
		"src_tab1_js"
	],
	"./tab1.js": [
		"./src/tab1.js",
		"src_tab1_js"
	],
	"./tab2": [
		"./src/tab2.js",
		"src_tab2_js"
	],
	"./tab2.js": [
		"./src/tab2.js",
		"src_tab2_js"
	],
	"./tab3": [
		"./src/tab3.js",
		"src_tab3_js"
	],
	"./tab3.js": [
		"./src/tab3.js",
		"src_tab3_js"
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(() => {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return __webpack_require__.e(ids[1]).then(() => {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = () => (Object.keys(map));
webpackAsyncContext.id = "./src lazy recursive ^\\.\\/tab.*$";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./src/assets/Italiana-Regular.ttf":
/*!*****************************************!*\
  !*** ./src/assets/Italiana-Regular.ttf ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "df5f537c56b8f162c1d1.ttf";

/***/ }),

/***/ "./src/assets/github-logo.png":
/*!************************************!*\
  !*** ./src/assets/github-logo.png ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "69ffd9cd5a846c976177.png";

/***/ }),

/***/ "./src/assets/logo.png":
/*!*****************************!*\
  !*** ./src/assets/logo.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "4961631ad67d2e572f84.png";

/***/ }),

/***/ "./src/assets/scroll.png":
/*!*******************************!*\
  !*** ./src/assets/scroll.png ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "a01c4db05ca1b4f3451d.png";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/ensure chunk */
/******/ 	(() => {
/******/ 		__webpack_require__.f = {};
/******/ 		// This file contains only the entry chunk.
/******/ 		// The chunk loading function for additional chunks
/******/ 		__webpack_require__.e = (chunkId) => {
/******/ 			return Promise.all(Object.keys(__webpack_require__.f).reduce((promises, key) => {
/******/ 				__webpack_require__.f[key](chunkId, promises);
/******/ 				return promises;
/******/ 			}, []));
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get javascript chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference async chunks
/******/ 		__webpack_require__.u = (chunkId) => {
/******/ 			// return url for filenames based on template
/******/ 			return "" + chunkId + ".js";
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/load script */
/******/ 	(() => {
/******/ 		var inProgress = {};
/******/ 		var dataWebpackPrefix = "restaurantpage:";
/******/ 		// loadScript function to load a script via script tag
/******/ 		__webpack_require__.l = (url, done, key, chunkId) => {
/******/ 			if(inProgress[url]) { inProgress[url].push(done); return; }
/******/ 			var script, needAttach;
/******/ 			if(key !== undefined) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				for(var i = 0; i < scripts.length; i++) {
/******/ 					var s = scripts[i];
/******/ 					if(s.getAttribute("src") == url || s.getAttribute("data-webpack") == dataWebpackPrefix + key) { script = s; break; }
/******/ 				}
/******/ 			}
/******/ 			if(!script) {
/******/ 				needAttach = true;
/******/ 				script = document.createElement('script');
/******/ 		
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.setAttribute("data-webpack", dataWebpackPrefix + key);
/******/ 				script.src = url;
/******/ 			}
/******/ 			inProgress[url] = [done];
/******/ 			var onScriptComplete = (prev, event) => {
/******/ 				// avoid mem leaks in IE.
/******/ 				script.onerror = script.onload = null;
/******/ 				clearTimeout(timeout);
/******/ 				var doneFns = inProgress[url];
/******/ 				delete inProgress[url];
/******/ 				script.parentNode && script.parentNode.removeChild(script);
/******/ 				doneFns && doneFns.forEach((fn) => (fn(event)));
/******/ 				if(prev) return prev(event);
/******/ 			};
/******/ 			var timeout = setTimeout(onScriptComplete.bind(null, undefined, { type: 'timeout', target: script }), 120000);
/******/ 			script.onerror = onScriptComplete.bind(null, script.onerror);
/******/ 			script.onload = onScriptComplete.bind(null, script.onload);
/******/ 			needAttach && document.head.appendChild(script);
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"index": 0
/******/ 		};
/******/ 		
/******/ 		__webpack_require__.f.j = (chunkId, promises) => {
/******/ 				// JSONP chunk loading for javascript
/******/ 				var installedChunkData = __webpack_require__.o(installedChunks, chunkId) ? installedChunks[chunkId] : undefined;
/******/ 				if(installedChunkData !== 0) { // 0 means "already installed".
/******/ 		
/******/ 					// a Promise means "currently loading".
/******/ 					if(installedChunkData) {
/******/ 						promises.push(installedChunkData[2]);
/******/ 					} else {
/******/ 						if(true) { // all chunks have JS
/******/ 							// setup Promise in chunk cache
/******/ 							var promise = new Promise((resolve, reject) => (installedChunkData = installedChunks[chunkId] = [resolve, reject]));
/******/ 							promises.push(installedChunkData[2] = promise);
/******/ 		
/******/ 							// start chunk loading
/******/ 							var url = __webpack_require__.p + __webpack_require__.u(chunkId);
/******/ 							// create error before stack unwound to get useful stacktrace later
/******/ 							var error = new Error();
/******/ 							var loadingEnded = (event) => {
/******/ 								if(__webpack_require__.o(installedChunks, chunkId)) {
/******/ 									installedChunkData = installedChunks[chunkId];
/******/ 									if(installedChunkData !== 0) installedChunks[chunkId] = undefined;
/******/ 									if(installedChunkData) {
/******/ 										var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 										var realSrc = event && event.target && event.target.src;
/******/ 										error.message = 'Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 										error.name = 'ChunkLoadError';
/******/ 										error.type = errorType;
/******/ 										error.request = realSrc;
/******/ 										installedChunkData[1](error);
/******/ 									}
/******/ 								}
/******/ 							};
/******/ 							__webpack_require__.l(url, loadingEnded, "chunk-" + chunkId, chunkId);
/******/ 						} else installedChunks[chunkId] = 0;
/******/ 					}
/******/ 				}
/******/ 		};
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 		
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkrestaurantpage"] = self["webpackChunkrestaurantpage"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _loadPage_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./loadPage.js */ "./src/loadPage.js");
/* harmony import */ var _loadTab_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./loadTab.js */ "./src/loadTab.js");




// Tab tracker
let currentTab = 1;

// Call for page load
(0,_loadPage_js__WEBPACK_IMPORTED_MODULE_1__["default"])();

// Add event listener
document.addEventListener('wheel', (e) =>
{
    console.log(e.deltaY);
    if(e.deltaY > 0 && currentTab !== 3)
    {
        currentTab += 1;
        (0,_loadTab_js__WEBPACK_IMPORTED_MODULE_2__["default"])(currentTab).then((tab) => switchTab(tab, currentTab - 2, currentTab - 1));
    }
    else if(e.deltaY < 0 && currentTab !== 1)
    {
        currentTab -= 1;
        (0,_loadTab_js__WEBPACK_IMPORTED_MODULE_2__["default"])(currentTab).then((tab) => switchTab(tab, currentTab, currentTab - 1));
    }
})


// Switches current tab with the parameter given
function switchTab(tab, oldRadio, newRadio)
{
    const div = document.getElementById("radio-div");
    div.childNodes[oldRadio].checked = false;
    div.childNodes[newRadio].checked = true;
    const main = document.getElementById("main-container");
    let oldTab = main.childNodes[0];
    oldTab.replaceWith(tab);
}
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFHLFdBQVcseUJBQXlCLHdCQUF3QixxQkFBcUIsR0FBRyxVQUFVLHFCQUFxQixHQUFHLE9BQU8sZ0ZBQWdGLFlBQVksTUFBTSxPQUFPLGFBQWEsYUFBYSxNQUFNLE1BQU0sWUFBWSxXQUFXLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxNQUFNLE1BQU0sVUFBVSxVQUFVLE1BQU0sTUFBTSxVQUFVLFVBQVUsS0FBSyxNQUFNLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sTUFBTSxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxPQUFPLE1BQU0sVUFBVSxVQUFVLE1BQU0sTUFBTSxVQUFVLFVBQVUsWUFBWSxhQUFhLE1BQU0sTUFBTSxVQUFVLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxNQUFNLEtBQUssTUFBTSxZQUFZLE1BQU0sTUFBTSxZQUFZLE1BQU0sS0FBSyxNQUFNLFVBQVUsVUFBVSxZQUFZLFdBQVcsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsS0FBSyxNQUFNLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLE1BQU0sTUFBTSxZQUFZLE1BQU0sTUFBTSxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssTUFBTSxZQUFZLE1BQU0sTUFBTSxZQUFZLE1BQU0sTUFBTSxNQUFNLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLE1BQU0sTUFBTSxVQUFVLFlBQVksYUFBYSxXQUFXLE1BQU0sTUFBTSxZQUFZLFdBQVcsWUFBWSxXQUFXLE1BQU0sTUFBTSxVQUFVLFlBQVksYUFBYSxPQUFPLE1BQU0sVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsTUFBTSxNQUFNLFVBQVUsVUFBVSxZQUFZLE1BQU0sTUFBTSxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksV0FBVyxZQUFZLE1BQU0sTUFBTSxV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Q0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDZkE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQzs7V0FFakM7V0FDQTtXQUNBO1dBQ0EsS0FBSztXQUNMLGVBQWU7V0FDZjtXQUNBO1dBQ0E7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLE1BQU07V0FDTjtXQUNBO1dBQ0E7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsTUFBTSxxQkFBcUI7V0FDM0I7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBOztXQUVBO1dBQ0E7V0FDQTs7Ozs7V0NyRkE7Ozs7Ozs7Ozs7Ozs7OztBQ0FxQjtBQUNXO0FBQ0c7O0FBRW5DO0FBQ0E7O0FBRUE7QUFDQSx3REFBSTs7QUFFSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsdURBQU87QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsdURBQU87QUFDZjtBQUNBLENBQUM7OztBQUdEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50cGFnZS8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudHBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRwYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50cGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRwYWdlLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3Jlc3RhdXJhbnRwYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRwYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50cGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50cGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50cGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRwYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudHBhZ2UvLi9zcmMvbG9hZFBhZ2UuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudHBhZ2UvLi9zcmMvbG9hZFRhYi5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50cGFnZS8uL3NyYy8gbGF6eSBeXFwuXFwvdGFiLiokIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudHBhZ2Uvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudHBhZ2Uvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudHBhZ2Uvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Jlc3RhdXJhbnRwYWdlL3dlYnBhY2svcnVudGltZS9lbnN1cmUgY2h1bmsiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudHBhZ2Uvd2VicGFjay9ydW50aW1lL2dldCBqYXZhc2NyaXB0IGNodW5rIGZpbGVuYW1lIiwid2VicGFjazovL3Jlc3RhdXJhbnRwYWdlL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudHBhZ2Uvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50cGFnZS93ZWJwYWNrL3J1bnRpbWUvbG9hZCBzY3JpcHQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudHBhZ2Uvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50cGFnZS93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50cGFnZS93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50cGFnZS93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudHBhZ2UvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi9zcmMvYXNzZXRzL0l0YWxpYW5hLVJlZ3VsYXIudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGZvbnQtZmFjZSB7XFxuICAgIGZvbnQtZmFtaWx5OiAnaXRhbGlhbic7XFxuICAgIHNyYzogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKSBmb3JtYXQoJ1RydWVUeXBlJyksXFxuICAgICAgdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKSBmb3JtYXQoJ1RydWVUeXBlJyk7XFxuICAgIGZvbnQtd2VpZ2h0OiA5MDA7XFxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG4gIH1cXG4qXFxue1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHVzZXItc2VsZWN0OiBub25lO1xcbiAgICBjb2xvcjogI0ZGRjNFNDtcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gICAgZm9udC1mYW1pbHk6ICdpdGFsaWFuJywgZmFudGFzeTtcXG4gICAgdGV4dC1zaGFkb3c6IDAgLjV2aCAuNXZoIGJsYWNrO1xcbn1cXG5odG1sXFxue1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5ib2R5XFxue1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIHdpZHRoOiAxMDAlO1xcbn1cXG4jY29udGVudFxcbntcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XFxuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcbiAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWltYWdlIDAuOHMgZWFzZTtcXG59XFxuXFxuI2hlYWRlclxcbntcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICB0b3A6IDA7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDZ2aDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzU1MmMwYTtcXG4gICAgYm94LXNoYWRvdzogMHB4IC4zdmggMXZoIC4xdmggcmdiYSgwLCAwLCAwLCAwLjUpO1xcbiAgICB6LWluZGV4OiA5OTk7XFxufVxcblxcbiNsb2dvXFxue1xcbiAgICBvcGFjaXR5OiA1MCU7XFxuICAgIGZsZXgtZ3JvdzogMTtcXG59XFxuI21haW4tY29udGFpbmVyXFxue1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcbiNzY3JvbGwtZGl2XFxue1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIGxlZnQ6IDElO1xcbiAgICBib3R0b206IGNhbGMoNTAlIC0gMC41Kig0dmgpKTtcXG4gICAgaGVpZ2h0OiA0dmg7XFxuICAgIHdpZHRoOiA0dmg7XFxuICAgIGFuaW1hdGlvbjogZmxpY2tlciAwLjVzIGxpbmVhciAwcyBpbmZpbml0ZSAgYWx0ZXJuYXRlIDtcXG59XFxuQGtleWZyYW1lcyBmbGlja2VyIHtcXG4gICAgMCVcXG4gICAge1xcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC03LjUlKTtcXG4gICAgfVxcbiAgICAxMDAlXFxuICAgIHtcXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSg3LjUlKTtcXG4gICAgfVxcbn1cXG4jcmFkaW8tZGl2XFxue1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIHJpZ2h0OiAxJTtcXG4gICAgYm90dG9tOiBjYWxjKDUwJSAtIDAuNSooN3ZoKSk7XFxuICAgIGhlaWdodDogN3ZoO1xcbiAgICB3aWR0aDogMnZoO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XFxuICAgIGdhcDogMC41dmg7XFxufVxcbmlucHV0XFxue1xcbiAgICBhcHBlYXJhbmNlOiBub25lO1xcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgICBmbGV4LWdyb3c6IDE7XFxuICAgIGJvcmRlcjogLjJ2dyBzb2xpZCByZ2IoMjU1LCAyNTUsIDI1NSk7XFxuICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgLjJzIGVhc2U7XFxufVxcbmlucHV0OmNoZWNrZWRcXG57XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbn1cXG4udGFiXFxue1xcbiAgICBmbGV4OiAxO1xcbiAgICBhbmltYXRpb246IC4ycztcXG4gICAgYW5pbWF0aW9uLWRpcmVjdGlvbjogbm9ybWFsO1xcbiAgICBhbmltYXRpb24tbmFtZTogc2xpZGVJbjtcXG4gICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZSA7IFxcbiAgICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiBpbmhlcml0O1xcbn1cXG5cXG5Aa2V5ZnJhbWVzIHNsaWRlSW4ge1xcbiAgICAwJVxcbiAgICB7XFxuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDgwJSkgO1xcbiAgICB9XFxuICAgIDEwMCVcXG4gICAge1xcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxMDAlKTtcXG4gICAgfVxcbn1cXG5cXG4jZm9vdGVyXFxue1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZmxleC1ncm93OiAwLjAxO1xcbiAgICBoZWlnaHQ6IDZ2aDtcXG4gICAgYm90dG9tOiAwO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgcGFkZGluZzogMHZoIDF2dztcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzMxMDYwNmYzO1xcbiAgICB6LWluZGV4OiA5OTk7XFxuICAgIGJveC1zaGFkb3c6IDAgLjN2aCAxdmggLjF2aCByZ2JhKDAsIDAsIDAsIDAuNSk7XFxufVxcbiNjcmVkaXRzXFxue1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBmb250LXdlaWdodDogYm9sZGVyO1xcbiAgICBmb250LXNpemU6IDJ2aDtcXG59XFxuI2dpdGh1Yi1saW5rXFxue1xcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGhlaWdodDogMTAwJTtcXG59XFxuaW1nIFxcbntcXG4gICAgaGVpZ2h0OiAwO1xcbiAgICBtaW4taGVpZ2h0OiAxMDAlO1xcbiAgICBvYmplY3QtZml0OiBjb250YWluO1xcbn1cXG5cXG4jdGFiMVxcbntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgcGFkZGluZzogMXZoO1xcbn1cXG4jd2VsY29tZVxcbntcXG4gICAgZm9udC1zaXplOiAxMnZoO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgZm9udC13ZWlnaHQ6IDkwMDtcXG59XFxuI3BhcGFcXG57XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgICBnYXA6IDN2aDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZm9udC1zaXplOiA0dmg7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG4jdGFiMlxcbntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHBhZGRpbmc6IDF2dztcXG4gICAgXFxufVxcbi5tZW51LWxpc3RcXG57XFxuICAgIGhlaWdodDogODAlO1xcbiAgICB3aWR0aDogNTAlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTQ2LCAxMDMsIDM3KTtcXG4gICAgY29sb3I6IGJsYWNrO1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDF2aDtcXG4gICAgcGFkZGluZzogMC41dnc7XFxuICAgIGJvcmRlcjogMXZoIHNvbGlkICM0MjE2MTY7XFxuICAgIGJvcmRlci1yYWRpdXM6IDMlO1xcbn1cXG4ubWVudS1pdGVtXFxue1xcbiAgICBmbGV4OiAxO1xcbiAgICBib3JkZXI6IC4xdmggc29saWQgd2hpdGU7XFxuICAgIGJvcmRlci1yYWRpdXM6IC41dmg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICAgIGp1c3RpZnktY29udGVudDogc3RyZXRjaDtcXG4gICAgZ2FwOiAwLjF2dztcXG5cXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDYxLCAyNiwgMTUpO1xcbn1cXG4uaXRlbS1pbWFnZS1kaXZcXG57XFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gICAgaGVpZ2h0OiAwO1xcbiAgICB3aWR0aDogMjAlO1xcbiAgICBwYWRkaW5nLWJvdHRvbTogMjAlO1xcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gICAgYm9yZGVyOiAwLjR2dyBzb2xpZCAjODM0ZTIzO1xcbn1cXG4uaXRlbS13b3Jkc1xcbntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOiAwLjV2dztcXG4gICAgcGFkZGluZzogLjV2aDtcXG4gICAgYm9yZGVyLWxlZnQ6IDAuMXZ3IGRhc2hlZCB3aGl0ZTtcXG4gICAgd2lkdGg6IDgwJTtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbiAgICBhbGlnbi1pdGVtczogc3RyZXRjaDtcXG59XFxuLml0ZW0tbmFtZVxcbntcXG4gICAgZm9udC13ZWlnaHQ6IDkwMDtcXG4gICAgZm9udC1zaXplOiAydmg7XFxuICAgIHBhZGRpbmc6IDAuMnZoO1xcbiAgICBmbGV4OiAxO1xcbiAgICBib3JkZXItYm90dG9tOiAuMDV2dyBkYXNoZWQgd2hpdGU7XFxufVxcbi5pdGVtLWRlc2NcXG57XFxuICAgIHdvcmQtd3JhcDogYnJlYWstd29yZDtcXG4gICAgZmxleDogNTtcXG59XFxuLml0ZW0tcHJpY2VcXG57XFxuICAgIGJvcmRlci10b3A6IC4wNXZ3IGRhc2hlZCB3aGl0ZTtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcXG4gICAgZmxleDogMTtcXG4gICAgdGV4dC1hbGlnbjogZW5kO1xcbiAgICBwYWRkaW5nOiAxdmggMHZoIDB2aCAwdmg7XFxufVxcbiN0YWIzXFxue1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgcGFkZGluZzogMTB2aCAxMHZ3O1xcbiAgICBnYXA6IDN2dztcXG59XFxuLnRhYjMtZGl2XFxue1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE0NiwgMTAzLCAzNyk7XFxuICAgIGdhcDogMTAlO1xcbiAgICBwYWRkaW5nOiAxJTtcXG4gICAgY29sb3I6IGJsYWNrO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIHdoaXRlLXNwYWNlOiBwcmU7XFxuICAgIGJvcmRlcjogMXZoIHNvbGlkICM0MjE2MTY7XFxuICAgIGJvcmRlci1yYWRpdXM6IDMlO1xcbn1cXG4udGl0bGVcXG57XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIGZvbnQtc2l6ZTogNHZoO1xcbn1cXG4udGV4dFxcbntcXG4gICAgZm9udC1zaXplOiAzdmg7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxzQkFBc0I7SUFDdEI7Z0VBQzREO0lBQzVELGdCQUFnQjtJQUNoQixrQkFBa0I7RUFDcEI7QUFDRjs7SUFFSSxzQkFBc0I7SUFDdEIsU0FBUztJQUNULGlCQUFpQjtJQUNqQixjQUFjO0lBQ2QsZ0JBQWdCO0lBQ2hCLCtCQUErQjtJQUMvQiw4QkFBOEI7QUFDbEM7QUFDQTs7SUFFSSxhQUFhO0lBQ2IsYUFBYTtBQUNqQjtBQUNBOztJQUVJLFlBQVk7SUFDWixXQUFXO0FBQ2Y7QUFDQTs7SUFFSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLGFBQWE7SUFDYixvQkFBb0I7SUFDcEIscUJBQXFCO0lBQ3JCLHNCQUFzQjtJQUN0Qiw0QkFBNEI7SUFDNUIsMkJBQTJCO0lBQzNCLHNDQUFzQztBQUMxQzs7QUFFQTs7SUFFSSxlQUFlO0lBQ2YsYUFBYTtJQUNiLE1BQU07SUFDTixXQUFXO0lBQ1gsV0FBVztJQUNYLG1CQUFtQjtJQUNuQixxQkFBcUI7SUFDckIsOEJBQThCO0lBQzlCLHFCQUFxQjtJQUNyQix5QkFBeUI7SUFDekIsZ0RBQWdEO0lBQ2hELFlBQVk7QUFDaEI7O0FBRUE7O0lBRUksWUFBWTtJQUNaLFlBQVk7QUFDaEI7QUFDQTs7SUFFSSxXQUFXO0lBQ1gsYUFBYTtJQUNiLHNCQUFzQjtJQUN0Qix1QkFBdUI7QUFDM0I7QUFDQTs7SUFFSSxlQUFlO0lBQ2YsUUFBUTtJQUNSLDZCQUE2QjtJQUM3QixXQUFXO0lBQ1gsVUFBVTtJQUNWLHNEQUFzRDtBQUMxRDtBQUNBO0lBQ0k7O1FBRUksNEJBQTRCO0lBQ2hDO0lBQ0E7O1FBRUksMkJBQTJCO0lBQy9CO0FBQ0o7QUFDQTs7SUFFSSxlQUFlO0lBQ2YsU0FBUztJQUNULDZCQUE2QjtJQUM3QixX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aUI7SUFDakIsY0FBYztBQUNsQjtBQUNBOztJQUVJLGNBQWM7QUFDbEJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGZvbnQtZmFjZSB7XFxuICAgIGZvbnQtZmFtaWx5OiAnaXRhbGlhbic7XFxuICAgIHNyYzogdXJsKCcvc3JjL2Fzc2V0cy9JdGFsaWFuYS1SZWd1bGFyLnR0ZicpIGZvcm1hdCgnVHJ1ZVR5cGUnKSxcXG4gICAgICB1cmwoJy9zcmMvYXNzZXRzL0l0YWxpYW5hLVJlZ3VsYXIudHRmJykgZm9ybWF0KCdUcnVlVHlwZScpO1xcbiAgICBmb250LXdlaWdodDogOTAwO1xcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XFxuICB9XFxuKlxcbntcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcXG4gICAgY29sb3I6ICNGRkYzRTQ7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxuICAgIGZvbnQtZmFtaWx5OiAnaXRhbGlhbicsIGZhbnRhc3k7XFxuICAgIHRleHQtc2hhZG93OiAwIC41dmggLjV2aCBibGFjaztcXG59XFxuaHRtbFxcbntcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAgZGlzcGxheTogZmxleDtcXG59XFxuYm9keVxcbntcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICB3aWR0aDogMTAwJTtcXG59XFxuI2NvbnRlbnRcXG57XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXG4gICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1pbWFnZSAwLjhzIGVhc2U7XFxufVxcblxcbiNoZWFkZXJcXG57XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgdG9wOiAwO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiA2dmg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM1NTJjMGE7XFxuICAgIGJveC1zaGFkb3c6IDBweCAuM3ZoIDF2aCAuMXZoIHJnYmEoMCwgMCwgMCwgMC41KTtcXG4gICAgei1pbmRleDogOTk5O1xcbn1cXG5cXG4jbG9nb1xcbntcXG4gICAgb3BhY2l0eTogNTAlO1xcbiAgICBmbGV4LWdyb3c6IDE7XFxufVxcbiNtYWluLWNvbnRhaW5lclxcbntcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG4jc2Nyb2xsLWRpdlxcbntcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICBsZWZ0OiAxJTtcXG4gICAgYm90dG9tOiBjYWxjKDUwJSAtIDAuNSooNHZoKSk7XFxuICAgIGhlaWdodDogNHZoO1xcbiAgICB3aWR0aDogNHZoO1xcbiAgICBhbmltYXRpb246IGZsaWNrZXIgMC41cyBsaW5lYXIgMHMgaW5maW5pdGUgIGFsdGVybmF0ZSA7XFxufVxcbkBrZXlmcmFtZXMgZmxpY2tlciB7XFxuICAgIDAlXFxuICAgIHtcXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNy41JSk7XFxuICAgIH1cXG4gICAgMTAwJVxcbiAgICB7XFxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoNy41JSk7XFxuICAgIH1cXG59XFxuI3JhZGlvLWRpdlxcbntcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICByaWdodDogMSU7XFxuICAgIGJvdHRvbTogY2FsYyg1MCUgLSAwLjUqKDd2aCkpO1xcbiAgICBoZWlnaHQ6IDd2aDtcXG4gICAgd2lkdGg6IDJ2aDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xcbiAgICBnYXA6IDAuNXZoO1xcbn1cXG5pbnB1dFxcbntcXG4gICAgYXBwZWFyYW5jZTogbm9uZTtcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gICAgZmxleC1ncm93OiAxO1xcbiAgICBib3JkZXI6IC4ydncgc29saWQgcmdiKDI1NSwgMjU1LCAyNTUpO1xcbiAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIC4ycyBlYXNlO1xcbn1cXG5pbnB1dDpjaGVja2VkXFxue1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG59XFxuLnRhYlxcbntcXG4gICAgZmxleDogMTtcXG4gICAgYW5pbWF0aW9uOiAuMnM7XFxuICAgIGFuaW1hdGlvbi1kaXJlY3Rpb246IG5vcm1hbDtcXG4gICAgYW5pbWF0aW9uLW5hbWU6IHNsaWRlSW47XFxuICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UgOyBcXG4gICAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogaW5oZXJpdDtcXG59XFxuXFxuQGtleWZyYW1lcyBzbGlkZUluIHtcXG4gICAgMCVcXG4gICAge1xcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSg4MCUpIDtcXG4gICAgfVxcbiAgICAxMDAlXFxuICAgIHtcXG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMTAwJSk7XFxuICAgIH1cXG59XFxuXFxuI2Zvb3RlclxcbntcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGZsZXgtZ3JvdzogMC4wMTtcXG4gICAgaGVpZ2h0OiA2dmg7XFxuICAgIGJvdHRvbTogMDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIHBhZGRpbmc6IDB2aCAxdnc7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzMTA2MDZmMztcXG4gICAgei1pbmRleDogOTk5O1xcbiAgICBib3gtc2hhZG93OiAwIC4zdmggMXZoIC4xdmggcmdiYSgwLCAwLCAwLCAwLjUpO1xcbn1cXG4jY3JlZGl0c1xcbntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcXG4gICAgZm9udC1zaXplOiAydmg7XFxufVxcbiNnaXRodWItbGlua1xcbntcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxufVxcbmltZyBcXG57XFxuICAgIGhlaWdodDogMDtcXG4gICAgbWluLWhlaWdodDogMTAwJTtcXG4gICAgb2JqZWN0LWZpdDogY29udGFpbjtcXG59XFxuXFxuI3RhYjFcXG57XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIHBhZGRpbmc6IDF2aDtcXG59XFxuI3dlbGNvbWVcXG57XFxuICAgIGZvbnQtc2l6ZTogMTJ2aDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGZvbnQtd2VpZ2h0OiA5MDA7XFxufVxcbiNwYXBhXFxue1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gICAgZ2FwOiAzdmg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGZvbnQtc2l6ZTogNHZoO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuI3RhYjJcXG57XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBwYWRkaW5nOiAxdnc7XFxuICAgIFxcbn1cXG4ubWVudS1saXN0XFxue1xcbiAgICBoZWlnaHQ6IDgwJTtcXG4gICAgd2lkdGg6IDUwJTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE0NiwgMTAzLCAzNyk7XFxuICAgIGNvbG9yOiBibGFjaztcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiAxdmg7XFxuICAgIHBhZGRpbmc6IDAuNXZ3O1xcbiAgICBib3JkZXI6IDF2aCBzb2xpZCAjNDIxNjE2O1xcbiAgICBib3JkZXItcmFkaXVzOiAzJTtcXG59XFxuLm1lbnUtaXRlbVxcbntcXG4gICAgZmxleDogMTtcXG4gICAgYm9yZGVyOiAuMXZoIHNvbGlkIHdoaXRlO1xcbiAgICBib3JkZXItcmFkaXVzOiAuNXZoO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHN0cmV0Y2g7XFxuICAgIGdhcDogMC4xdnc7XFxuXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig2MSwgMjYsIDE1KTtcXG59XFxuLml0ZW0taW1hZ2UtZGl2XFxue1xcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICAgIGhlaWdodDogMDtcXG4gICAgd2lkdGg6IDIwJTtcXG4gICAgcGFkZGluZy1ib3R0b206IDIwJTtcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICAgIGJvcmRlcjogMC40dncgc29saWQgIzgzNGUyMztcXG59XFxuLml0ZW0td29yZHNcXG57XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDogMC41dnc7XFxuICAgIHBhZGRpbmc6IC41dmg7XFxuICAgIGJvcmRlci1sZWZ0OiAwLjF2dyBkYXNoZWQgd2hpdGU7XFxuICAgIHdpZHRoOiA4MCU7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG4gICAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XFxufVxcbi5pdGVtLW5hbWVcXG57XFxuICAgIGZvbnQtd2VpZ2h0OiA5MDA7XFxuICAgIGZvbnQtc2l6ZTogMnZoO1xcbiAgICBwYWRkaW5nOiAwLjJ2aDtcXG4gICAgZmxleDogMTtcXG4gICAgYm9yZGVyLWJvdHRvbTogLjA1dncgZGFzaGVkIHdoaXRlO1xcbn1cXG4uaXRlbS1kZXNjXFxue1xcbiAgICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XFxuICAgIGZsZXg6IDU7XFxufVxcbi5pdGVtLXByaWNlXFxue1xcbiAgICBib3JkZXItdG9wOiAuMDV2dyBkYXNoZWQgd2hpdGU7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XFxuICAgIGZsZXg6IDE7XFxuICAgIHRleHQtYWxpZ246IGVuZDtcXG4gICAgcGFkZGluZzogMXZoIDB2aCAwdmggMHZoO1xcbn1cXG4jdGFiM1xcbntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHBhZGRpbmc6IDEwdmggMTB2dztcXG4gICAgZ2FwOiAzdnc7XFxufVxcbi50YWIzLWRpdlxcbntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxNDYsIDEwMywgMzcpO1xcbiAgICBnYXA6IDEwJTtcXG4gICAgcGFkZGluZzogMSU7XFxuICAgIGNvbG9yOiBibGFjaztcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICB3aGl0ZS1zcGFjZTogcHJlO1xcbiAgICBib3JkZXI6IDF2aCBzb2xpZCAjNDIxNjE2O1xcbiAgICBib3JkZXItcmFkaXVzOiAzJTtcXG59XFxuLnRpdGxlXFxue1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBmb250LXNpemU6IDR2aDtcXG59XFxuLnRleHRcXG57XFxuICAgIGZvbnQtc2l6ZTogM3ZoO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpO1xuXG4gIC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9XG5cbiAgLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IGxvZ28gZnJvbSAnLi9hc3NldHMvbG9nby5wbmcnO1xuaW1wb3J0IGdpdExvZ28gZnJvbSAnLi9hc3NldHMvZ2l0aHViLWxvZ28ucG5nJztcbmltcG9ydCBjYWxsVGFiTG9hZCBmcm9tICcuL2xvYWRUYWIuanMnO1xuaW1wb3J0IHNjcm9sbCBmcm9tICcuL2Fzc2V0cy9zY3JvbGwucG5nJztcblxuLy8gQ3JlYXRlIGNvbnRlbnQgZGl2XG5jb25zdCBjb250ZW50RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTsgXG5jb250ZW50RGl2LmlkID0gJ2NvbnRlbnQnO1xuZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChjb250ZW50RGl2KTtcblxuLy8gUGFnZSBsb2FkIGZ1bmN0aW9uIHRoYXQgd2lsbCBiZSBpbXBvcnRlZCBpbiB0aGUgbWFpbiBKUyBmaWxlXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBsb2FkUGFnZSgpXG57XG4gICAgY3JlYXRlSGVhZGVyKCk7IC8vIEhlYWRlciBjcmVhdGlvblxuICAgIGNyZWF0ZU1haW4oKTsgLy8gTWFpbiBjcmVhdGlvblxuICAgIGNyZWF0ZUZvb3RlcigpOyAvLyBGb290ZXIgY3JlYXRpb25cbiAgICBcbiAgICBjb25zdCBzY3JvbGxEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbnN0IGltZyA9IG5ldyBJbWFnZSgpO1xuICAgIGltZy5zcmMgPSBzY3JvbGw7XG4gICAgc2Nyb2xsRGl2LmFwcGVuZENoaWxkKGltZyk7XG4gICAgc2Nyb2xsRGl2LmlkID0gJ3Njcm9sbC1kaXYnO1xuICAgIGNvbnRlbnREaXYuYXBwZW5kQ2hpbGQoc2Nyb2xsRGl2KTtcblxuICAgIGNvbnN0IHJhZGlvRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICByYWRpb0Rpdi5pZCA9ICdyYWRpby1kaXYnO1xuICAgIGNvbnRlbnREaXYuYXBwZW5kQ2hpbGQocmFkaW9EaXYpO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMzsgaSsrKSB7XG4gICAgICAgIGNvbnN0IHJhZGlvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICAgICAgcmFkaW8udHlwZSA9ICdyYWRpbyc7XG4gICAgICAgIGlmIChpID09PSAwKVxuICAgICAgICAgICAgcmFkaW8uY2hlY2tlZCA9IHRydWU7XG4gICAgICAgIHJhZGlvLmRpc2FibGVkID0gdHJ1ZTtcbiAgICAgICAgcmFkaW9EaXYuYXBwZW5kQ2hpbGQocmFkaW8pO1xuICAgIH1cbn1cblxuLy8gSGVhZGVyIGNyZWF0aW9uIGZ1bmN0aW9uIFxuZnVuY3Rpb24gY3JlYXRlSGVhZGVyKClcbntcbiAgICAvLyBDcmVhdGUgaGVhZGVyIGRpdlxuICAgIGxldCBoZWFkZXJEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBoZWFkZXJEaXYuaWQgPSAnaGVhZGVyJztcbiAgICBjb250ZW50RGl2LmFwcGVuZENoaWxkKGhlYWRlckRpdik7XG5cbiAgICAvLyBDcmVhdGUgdGhlIGxvZ29cbiAgICBsZXQgcmVzTG9nbyA9IG5ldyBJbWFnZSgpO1xuICAgIHJlc0xvZ28uaWQgPSAnbG9nbyc7XG4gICAgcmVzTG9nby5zcmMgPSBsb2dvOyBcbiAgICBoZWFkZXJEaXYuYXBwZW5kQ2hpbGQocmVzTG9nbyk7XG59XG5cbi8vIE1haW4gY3JlYXRpb24gZnVuY3Rpb25cbmZ1bmN0aW9uIGNyZWF0ZU1haW4oKVxue1xuICAgIC8vIENyZWF0ZSBtYWluIGRpdlxuICAgIGxldCBtYWluRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbWFpbkRpdi5pZCA9ICdtYWluLWNvbnRhaW5lcic7XG4gICAgY29udGVudERpdi5hcHBlbmRDaGlsZChtYWluRGl2KTtcblxuXG4gICAgLy8gTG9hZCB0YWIgd2hlbiBjYWxsIGlzIGZ1bGZpbGxlZCwgYWRkIGl0XG4gICAgY2FsbFRhYkxvYWQoMSkudGhlbigodGFiKSA9PiBcbiAgICB7XG4gICAgICAgIG1haW5EaXYuYXBwZW5kQ2hpbGQodGFiKTtcbiAgICB9KTtcbn1cblxuLy8gRm9vdGVyIGNyZWF0aW9uIGZ1bmN0aW9uXG5mdW5jdGlvbiBjcmVhdGVGb290ZXIoKVxue1xuICAgIC8vIENyZWF0ZSBmb290ZXIgZGl2XG4gICAgbGV0IGZvb3RlckRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGZvb3RlckRpdi5pZCA9ICdmb290ZXInO1xuICAgIGNvbnRlbnREaXYuYXBwZW5kQ2hpbGQoZm9vdGVyRGl2KTtcblxuICAgIC8vIENyZWF0ZSBjcmVkaXRzIGRpdiBcbiAgICBsZXQgY3JlZGl0cyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNyZWRpdHMuaWQgPSAnY3JlZGl0cyc7XG4gICAgZm9vdGVyRGl2LmFwcGVuZENoaWxkKGNyZWRpdHMpO1xuICAgIFxuICAgIC8vIENyZWF0ZSB0ZXh0ICBcbiAgICBsZXQgY3JlZGl0c1RleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgY3JlZGl0c1RleHQudGV4dENvbnRlbnQgPSAnwqkgU2hheSBTaGFoYWwgMjAyMidcbiAgICBjcmVkaXRzLmFwcGVuZENoaWxkKGNyZWRpdHNUZXh0KTtcblxuICAgIC8vIENyZWF0ZSBsaW5rIFxuICAgIGxldCBnaXRMaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuICAgIGdpdExpbmsuaWQgPSAnZ2l0aHViLWxpbmsnO1xuICAgIGdpdExpbmsuaHJlZiA9ICdodHRwczovL2dpdGh1Yi5jb20vc2hheXNoYWhhbC9yZXN0YXVyYW50UGFnZSc7XG4gICAgZ2l0TGluay50YXJnZXQgPSAnYmxhbmsnOyAvLyBHbyB0byBuZXcgdGFiXG4gICAgZm9vdGVyRGl2LmFwcGVuZENoaWxkKGdpdExpbmspO1xuXG4gICAgLy8gQ3JlYXRlIGltYWdlXG4gICAgbGV0IGdpdEltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpXG4gICAgZ2l0SW1nLnNyYyA9IGdpdExvZ287XG4gICAgZ2l0SW1nLmFsdCA9ICdnaXRodWIgaW1hZ2UnO1xuICAgIGdpdExpbmsuYXBwZW5kQ2hpbGQoZ2l0SW1nKTtcblxufVxuXG4iLCIvLyBUYWIgbG9hZGluZyBmdW5jdGlvbiB0aGF0IHdpbGwgYmUgZHluYW1pY2FsbHkgaW1wb3J0ZWRcbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGxvYWRUYWIodGFiTnVtKVxue1xuICAgIC8vIENyZWF0ZSB0YWIgZGl2XG4gICAgY29uc3QgdGFiRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgICAvLyBDYWxsIGZvciB0aGUgY29ycmVjdCB0YWIgbG9hZGluZyBKUyBmaWxlIFxuICAgIGNvbnN0IHtkZWZhdWx0OiB0YWJ9ID0gYXdhaXQgaW1wb3J0KCcuL3RhYicgKyB0YWJOdW0pO1xuXG4gICAgLy8gTG9hZCB0aGUgdGFiIGludG8gdGhlIGNyZWF0ZWQgZGl2XG4gICAgdGFiKHRhYkRpdik7XG5cbiAgICByZXR1cm4gdGFiRGl2O1xufSIsInZhciBtYXAgPSB7XG5cdFwiLi90YWIxXCI6IFtcblx0XHRcIi4vc3JjL3RhYjEuanNcIixcblx0XHRcInNyY190YWIxX2pzXCJcblx0XSxcblx0XCIuL3RhYjEuanNcIjogW1xuXHRcdFwiLi9zcmMvdGFiMS5qc1wiLFxuXHRcdFwic3JjX3RhYjFfanNcIlxuXHRdLFxuXHRcIi4vdGFiMlwiOiBbXG5cdFx0XCIuL3NyYy90YWIyLmpzXCIsXG5cdFx0XCJzcmNfdGFiMl9qc1wiXG5cdF0sXG5cdFwiLi90YWIyLmpzXCI6IFtcblx0XHRcIi4vc3JjL3RhYjIuanNcIixcblx0XHRcInNyY190YWIyX2pzXCJcblx0XSxcblx0XCIuL3RhYjNcIjogW1xuXHRcdFwiLi9zcmMvdGFiMy5qc1wiLFxuXHRcdFwic3JjX3RhYjNfanNcIlxuXHRdLFxuXHRcIi4vdGFiMy5qc1wiOiBbXG5cdFx0XCIuL3NyYy90YWIzLmpzXCIsXG5cdFx0XCJzcmNfdGFiM19qc1wiXG5cdF1cbn07XG5mdW5jdGlvbiB3ZWJwYWNrQXN5bmNDb250ZXh0KHJlcSkge1xuXHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKG1hcCwgcmVxKSkge1xuXHRcdHJldHVybiBQcm9taXNlLnJlc29sdmUoKS50aGVuKCgpID0+IHtcblx0XHRcdHZhciBlID0gbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIHJlcSArIFwiJ1wiKTtcblx0XHRcdGUuY29kZSA9ICdNT0RVTEVfTk9UX0ZPVU5EJztcblx0XHRcdHRocm93IGU7XG5cdFx0fSk7XG5cdH1cblxuXHR2YXIgaWRzID0gbWFwW3JlcV0sIGlkID0gaWRzWzBdO1xuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXy5lKGlkc1sxXSkudGhlbigoKSA9PiB7XG5cdFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oaWQpO1xuXHR9KTtcbn1cbndlYnBhY2tBc3luY0NvbnRleHQua2V5cyA9ICgpID0+IChPYmplY3Qua2V5cyhtYXApKTtcbndlYnBhY2tBc3luY0NvbnRleHQuaWQgPSBcIi4vc3JjIGxhenkgcmVjdXJzaXZlIF5cXFxcLlxcXFwvdGFiLiokXCI7XG5tb2R1bGUuZXhwb3J0cyA9IHdlYnBhY2tBc3luY0NvbnRleHQ7IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZiA9IHt9O1xuLy8gVGhpcyBmaWxlIGNvbnRhaW5zIG9ubHkgdGhlIGVudHJ5IGNodW5rLlxuLy8gVGhlIGNodW5rIGxvYWRpbmcgZnVuY3Rpb24gZm9yIGFkZGl0aW9uYWwgY2h1bmtzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmUgPSAoY2h1bmtJZCkgPT4ge1xuXHRyZXR1cm4gUHJvbWlzZS5hbGwoT2JqZWN0LmtleXMoX193ZWJwYWNrX3JlcXVpcmVfXy5mKS5yZWR1Y2UoKHByb21pc2VzLCBrZXkpID0+IHtcblx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmZba2V5XShjaHVua0lkLCBwcm9taXNlcyk7XG5cdFx0cmV0dXJuIHByb21pc2VzO1xuXHR9LCBbXSkpO1xufTsiLCIvLyBUaGlzIGZ1bmN0aW9uIGFsbG93IHRvIHJlZmVyZW5jZSBhc3luYyBjaHVua3Ncbl9fd2VicGFja19yZXF1aXJlX18udSA9IChjaHVua0lkKSA9PiB7XG5cdC8vIHJldHVybiB1cmwgZm9yIGZpbGVuYW1lcyBiYXNlZCBvbiB0ZW1wbGF0ZVxuXHRyZXR1cm4gXCJcIiArIGNodW5rSWQgKyBcIi5qc1wiO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCJ2YXIgaW5Qcm9ncmVzcyA9IHt9O1xudmFyIGRhdGFXZWJwYWNrUHJlZml4ID0gXCJyZXN0YXVyYW50cGFnZTpcIjtcbi8vIGxvYWRTY3JpcHQgZnVuY3Rpb24gdG8gbG9hZCBhIHNjcmlwdCB2aWEgc2NyaXB0IHRhZ1xuX193ZWJwYWNrX3JlcXVpcmVfXy5sID0gKHVybCwgZG9uZSwga2V5LCBjaHVua0lkKSA9PiB7XG5cdGlmKGluUHJvZ3Jlc3NbdXJsXSkgeyBpblByb2dyZXNzW3VybF0ucHVzaChkb25lKTsgcmV0dXJuOyB9XG5cdHZhciBzY3JpcHQsIG5lZWRBdHRhY2g7XG5cdGlmKGtleSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRmb3IodmFyIGkgPSAwOyBpIDwgc2NyaXB0cy5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIHMgPSBzY3JpcHRzW2ldO1xuXHRcdFx0aWYocy5nZXRBdHRyaWJ1dGUoXCJzcmNcIikgPT0gdXJsIHx8IHMuZ2V0QXR0cmlidXRlKFwiZGF0YS13ZWJwYWNrXCIpID09IGRhdGFXZWJwYWNrUHJlZml4ICsga2V5KSB7IHNjcmlwdCA9IHM7IGJyZWFrOyB9XG5cdFx0fVxuXHR9XG5cdGlmKCFzY3JpcHQpIHtcblx0XHRuZWVkQXR0YWNoID0gdHJ1ZTtcblx0XHRzY3JpcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKTtcblxuXHRcdHNjcmlwdC5jaGFyc2V0ID0gJ3V0Zi04Jztcblx0XHRzY3JpcHQudGltZW91dCA9IDEyMDtcblx0XHRpZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5uYykge1xuXHRcdFx0c2NyaXB0LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIF9fd2VicGFja19yZXF1aXJlX18ubmMpO1xuXHRcdH1cblx0XHRzY3JpcHQuc2V0QXR0cmlidXRlKFwiZGF0YS13ZWJwYWNrXCIsIGRhdGFXZWJwYWNrUHJlZml4ICsga2V5KTtcblx0XHRzY3JpcHQuc3JjID0gdXJsO1xuXHR9XG5cdGluUHJvZ3Jlc3NbdXJsXSA9IFtkb25lXTtcblx0dmFyIG9uU2NyaXB0Q29tcGxldGUgPSAocHJldiwgZXZlbnQpID0+IHtcblx0XHQvLyBhdm9pZCBtZW0gbGVha3MgaW4gSUUuXG5cdFx0c2NyaXB0Lm9uZXJyb3IgPSBzY3JpcHQub25sb2FkID0gbnVsbDtcblx0XHRjbGVhclRpbWVvdXQodGltZW91dCk7XG5cdFx0dmFyIGRvbmVGbnMgPSBpblByb2dyZXNzW3VybF07XG5cdFx0ZGVsZXRlIGluUHJvZ3Jlc3NbdXJsXTtcblx0XHRzY3JpcHQucGFyZW50Tm9kZSAmJiBzY3JpcHQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzY3JpcHQpO1xuXHRcdGRvbmVGbnMgJiYgZG9uZUZucy5mb3JFYWNoKChmbikgPT4gKGZuKGV2ZW50KSkpO1xuXHRcdGlmKHByZXYpIHJldHVybiBwcmV2KGV2ZW50KTtcblx0fTtcblx0dmFyIHRpbWVvdXQgPSBzZXRUaW1lb3V0KG9uU2NyaXB0Q29tcGxldGUuYmluZChudWxsLCB1bmRlZmluZWQsIHsgdHlwZTogJ3RpbWVvdXQnLCB0YXJnZXQ6IHNjcmlwdCB9KSwgMTIwMDAwKTtcblx0c2NyaXB0Lm9uZXJyb3IgPSBvblNjcmlwdENvbXBsZXRlLmJpbmQobnVsbCwgc2NyaXB0Lm9uZXJyb3IpO1xuXHRzY3JpcHQub25sb2FkID0gb25TY3JpcHRDb21wbGV0ZS5iaW5kKG51bGwsIHNjcmlwdC5vbmxvYWQpO1xuXHRuZWVkQXR0YWNoICYmIGRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQoc2NyaXB0KTtcbn07IiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcImluZGV4XCI6IDBcbn07XG5cbl9fd2VicGFja19yZXF1aXJlX18uZi5qID0gKGNodW5rSWQsIHByb21pc2VzKSA9PiB7XG5cdFx0Ly8gSlNPTlAgY2h1bmsgbG9hZGluZyBmb3IgamF2YXNjcmlwdFxuXHRcdHZhciBpbnN0YWxsZWRDaHVua0RhdGEgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLm8oaW5zdGFsbGVkQ2h1bmtzLCBjaHVua0lkKSA/IGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA6IHVuZGVmaW5lZDtcblx0XHRpZihpbnN0YWxsZWRDaHVua0RhdGEgIT09IDApIHsgLy8gMCBtZWFucyBcImFscmVhZHkgaW5zdGFsbGVkXCIuXG5cblx0XHRcdC8vIGEgUHJvbWlzZSBtZWFucyBcImN1cnJlbnRseSBsb2FkaW5nXCIuXG5cdFx0XHRpZihpbnN0YWxsZWRDaHVua0RhdGEpIHtcblx0XHRcdFx0cHJvbWlzZXMucHVzaChpbnN0YWxsZWRDaHVua0RhdGFbMl0pO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0aWYodHJ1ZSkgeyAvLyBhbGwgY2h1bmtzIGhhdmUgSlNcblx0XHRcdFx0XHQvLyBzZXR1cCBQcm9taXNlIGluIGNodW5rIGNhY2hlXG5cdFx0XHRcdFx0dmFyIHByb21pc2UgPSBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiAoaW5zdGFsbGVkQ2h1bmtEYXRhID0gaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID0gW3Jlc29sdmUsIHJlamVjdF0pKTtcblx0XHRcdFx0XHRwcm9taXNlcy5wdXNoKGluc3RhbGxlZENodW5rRGF0YVsyXSA9IHByb21pc2UpO1xuXG5cdFx0XHRcdFx0Ly8gc3RhcnQgY2h1bmsgbG9hZGluZ1xuXHRcdFx0XHRcdHZhciB1cmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLnAgKyBfX3dlYnBhY2tfcmVxdWlyZV9fLnUoY2h1bmtJZCk7XG5cdFx0XHRcdFx0Ly8gY3JlYXRlIGVycm9yIGJlZm9yZSBzdGFjayB1bndvdW5kIHRvIGdldCB1c2VmdWwgc3RhY2t0cmFjZSBsYXRlclxuXHRcdFx0XHRcdHZhciBlcnJvciA9IG5ldyBFcnJvcigpO1xuXHRcdFx0XHRcdHZhciBsb2FkaW5nRW5kZWQgPSAoZXZlbnQpID0+IHtcblx0XHRcdFx0XHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhpbnN0YWxsZWRDaHVua3MsIGNodW5rSWQpKSB7XG5cdFx0XHRcdFx0XHRcdGluc3RhbGxlZENodW5rRGF0YSA9IGluc3RhbGxlZENodW5rc1tjaHVua0lkXTtcblx0XHRcdFx0XHRcdFx0aWYoaW5zdGFsbGVkQ2h1bmtEYXRhICE9PSAwKSBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPSB1bmRlZmluZWQ7XG5cdFx0XHRcdFx0XHRcdGlmKGluc3RhbGxlZENodW5rRGF0YSkge1xuXHRcdFx0XHRcdFx0XHRcdHZhciBlcnJvclR5cGUgPSBldmVudCAmJiAoZXZlbnQudHlwZSA9PT0gJ2xvYWQnID8gJ21pc3NpbmcnIDogZXZlbnQudHlwZSk7XG5cdFx0XHRcdFx0XHRcdFx0dmFyIHJlYWxTcmMgPSBldmVudCAmJiBldmVudC50YXJnZXQgJiYgZXZlbnQudGFyZ2V0LnNyYztcblx0XHRcdFx0XHRcdFx0XHRlcnJvci5tZXNzYWdlID0gJ0xvYWRpbmcgY2h1bmsgJyArIGNodW5rSWQgKyAnIGZhaWxlZC5cXG4oJyArIGVycm9yVHlwZSArICc6ICcgKyByZWFsU3JjICsgJyknO1xuXHRcdFx0XHRcdFx0XHRcdGVycm9yLm5hbWUgPSAnQ2h1bmtMb2FkRXJyb3InO1xuXHRcdFx0XHRcdFx0XHRcdGVycm9yLnR5cGUgPSBlcnJvclR5cGU7XG5cdFx0XHRcdFx0XHRcdFx0ZXJyb3IucmVxdWVzdCA9IHJlYWxTcmM7XG5cdFx0XHRcdFx0XHRcdFx0aW5zdGFsbGVkQ2h1bmtEYXRhWzFdKGVycm9yKTtcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH07XG5cdFx0XHRcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5sKHVybCwgbG9hZGluZ0VuZGVkLCBcImNodW5rLVwiICsgY2h1bmtJZCwgY2h1bmtJZCk7XG5cdFx0XHRcdH0gZWxzZSBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPSAwO1xuXHRcdFx0fVxuXHRcdH1cbn07XG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gaW5zdGFsbCBhIEpTT05QIGNhbGxiYWNrIGZvciBjaHVuayBsb2FkaW5nXG52YXIgd2VicGFja0pzb25wQ2FsbGJhY2sgPSAocGFyZW50Q2h1bmtMb2FkaW5nRnVuY3Rpb24sIGRhdGEpID0+IHtcblx0dmFyIFtjaHVua0lkcywgbW9yZU1vZHVsZXMsIHJ1bnRpbWVdID0gZGF0YTtcblx0Ly8gYWRkIFwibW9yZU1vZHVsZXNcIiB0byB0aGUgbW9kdWxlcyBvYmplY3QsXG5cdC8vIHRoZW4gZmxhZyBhbGwgXCJjaHVua0lkc1wiIGFzIGxvYWRlZCBhbmQgZmlyZSBjYWxsYmFja1xuXHR2YXIgbW9kdWxlSWQsIGNodW5rSWQsIGkgPSAwO1xuXHRpZihjaHVua0lkcy5zb21lKChpZCkgPT4gKGluc3RhbGxlZENodW5rc1tpZF0gIT09IDApKSkge1xuXHRcdGZvcihtb2R1bGVJZCBpbiBtb3JlTW9kdWxlcykge1xuXHRcdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKG1vcmVNb2R1bGVzLCBtb2R1bGVJZCkpIHtcblx0XHRcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tW21vZHVsZUlkXSA9IG1vcmVNb2R1bGVzW21vZHVsZUlkXTtcblx0XHRcdH1cblx0XHR9XG5cdFx0aWYocnVudGltZSkgdmFyIHJlc3VsdCA9IHJ1bnRpbWUoX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cdH1cblx0aWYocGFyZW50Q2h1bmtMb2FkaW5nRnVuY3Rpb24pIHBhcmVudENodW5rTG9hZGluZ0Z1bmN0aW9uKGRhdGEpO1xuXHRmb3IoO2kgPCBjaHVua0lkcy5sZW5ndGg7IGkrKykge1xuXHRcdGNodW5rSWQgPSBjaHVua0lkc1tpXTtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oaW5zdGFsbGVkQ2h1bmtzLCBjaHVua0lkKSAmJiBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0pIHtcblx0XHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXVswXSgpO1xuXHRcdH1cblx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPSAwO1xuXHR9XG5cbn1cblxudmFyIGNodW5rTG9hZGluZ0dsb2JhbCA9IHNlbGZbXCJ3ZWJwYWNrQ2h1bmtyZXN0YXVyYW50cGFnZVwiXSA9IHNlbGZbXCJ3ZWJwYWNrQ2h1bmtyZXN0YXVyYW50cGFnZVwiXSB8fCBbXTtcbmNodW5rTG9hZGluZ0dsb2JhbC5mb3JFYWNoKHdlYnBhY2tKc29ucENhbGxiYWNrLmJpbmQobnVsbCwgMCkpO1xuY2h1bmtMb2FkaW5nR2xvYmFsLnB1c2ggPSB3ZWJwYWNrSnNvbnBDYWxsYmFjay5iaW5kKG51bGwsIGNodW5rTG9hZGluZ0dsb2JhbC5wdXNoLmJpbmQoY2h1bmtMb2FkaW5nR2xvYmFsKSk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgJy4vc3R5bGUuY3NzJztcbmltcG9ydCBsb2FkIGZyb20gJy4vbG9hZFBhZ2UuanMnXG5pbXBvcnQgbG9hZFRhYiBmcm9tICcuL2xvYWRUYWIuanMnO1xuXG4vLyBUYWIgdHJhY2tlclxubGV0IGN1cnJlbnRUYWIgPSAxO1xuXG4vLyBDYWxsIGZvciBwYWdlIGxvYWRcbmxvYWQoKTtcblxuLy8gQWRkIGV2ZW50IGxpc3RlbmVyXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCd3aGVlbCcsIChlKSA9Plxue1xuICAgIGNvbnNvbGUubG9nKGUuZGVsdGFZKTtcbiAgICBpZihlLmRlbHRhWSA+IDAgJiYgY3VycmVudFRhYiAhPT0gMylcbiAgICB7XG4gICAgICAgIGN1cnJlbnRUYWIgKz0gMTtcbiAgICAgICAgbG9hZFRhYihjdXJyZW50VGFiKS50aGVuKCh0YWIpID0+IHN3aXRjaFRhYih0YWIsIGN1cnJlbnRUYWIgLSAyLCBjdXJyZW50VGFiIC0gMSkpO1xuICAgIH1cbiAgICBlbHNlIGlmKGUuZGVsdGFZIDwgMCAmJiBjdXJyZW50VGFiICE9PSAxKVxuICAgIHtcbiAgICAgICAgY3VycmVudFRhYiAtPSAxO1xuICAgICAgICBsb2FkVGFiKGN1cnJlbnRUYWIpLnRoZW4oKHRhYikgPT4gc3dpdGNoVGFiKHRhYiwgY3VycmVudFRhYiwgY3VycmVudFRhYiAtIDEpKTtcbiAgICB9XG59KVxuXG5cbi8vIFN3aXRjaGVzIGN1cnJlbnQgdGFiIHdpdGggdGhlIHBhcmFtZXRlciBnaXZlblxuZnVuY3Rpb24gc3dpdGNoVGFiKHRhYiwgb2xkUmFkaW8sIG5ld1JhZGlvKVxue1xuICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicmFkaW8tZGl2XCIpO1xuICAgIGRpdi5jaGlsZE5vZGVzW29sZFJhZGlvXS5jaGVja2VkID0gZmFsc2U7XG4gICAgZGl2LmNoaWxkTm9kZXNbbmV3UmFkaW9dLmNoZWNrZWQgPSB0cnVlO1xuICAgIGNvbnN0IG1haW4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1haW4tY29udGFpbmVyXCIpO1xuICAgIGxldCBvbGRUYWIgPSBtYWluLmNoaWxkTm9kZXNbMF07XG4gICAgb2xkVGFiLnJlcGxhY2VXaXRoKHRhYik7XG59Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9