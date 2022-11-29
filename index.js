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
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "*\n{\n    box-sizing: border-box;\n    margin: 0;\n    user-select: none;\n    color: #FFF3E4;\n    overflow: hidden;\n    font-family: cursive;\n    font-style: italic;\n}\nhtml\n{\n    height: 100vh;\n    display: flex;\n}\nbody\n{\n    height: 100%;\n    width: 100%;\n}\n#content\n{\n    width: 100%;\n    height: 100%;\n    display: flex;\n    align-items: stretch;\n    align-content: center;\n    background-size: cover;\n    background-repeat: no-repeat;\n    background-position: center;\n    transition: background-image 0.8s ease;\n}\n\n#header\n{\n    position: fixed;\n    display: flex;\n    top: 0;\n    width: 100%;\n    height: 5vh;\n    align-items: center;\n    align-content: center;\n    justify-content: space-between;\n    justify-items: center;\n    background-color: #552c0a;\n    box-shadow: 0px 3px 10px 1px rgba(0, 0, 0, 0.5);\n    z-index: 999;\n}\n\n#logo\n{\n    opacity: 50%;\n    flex-grow: 1;\n}\n#main-container\n{\n    width: 100%;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n}\n#scroll-div\n{\n    position: fixed;\n    left: 1%;\n    bottom: calc(50% - 0.5*(4vh));\n    height: 4vh;\n    width: 4vh;\n    animation: flicker 0.5s linear 0s infinite  alternate ;\n}\n@keyframes flicker {\n    0%\n    {\n        transform: translateY(-7.5%);\n    }\n    100%\n    {\n        transform: translateY(7.5%);\n    }\n}\n#radio-div\n{\n    position: fixed;\n    right: 1%;\n    bottom: calc(50% - 0.5*(7vh));\n    height: 7vh;\n    width: 2vh;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: stretch;\n    gap: 0.5vh;\n}\ninput\n{\n    appearance: none;\n    border-radius: 50%;\n    background-color: transparent;\n    flex-grow: 1;\n    border: 2px solid rgb(255, 255, 255);\n    transition: background-color .2s ease;\n}\ninput:checked\n{\n    background-color: white;\n}\n.tab\n{\n    flex: 1;\n    animation: .2s;\n    animation-direction: normal;\n    animation-name: slideIn;\n    animation-timing-function: ease ; \n    animation-iteration-count: inherit;\n}\n\n@keyframes slideIn {\n    0%\n    {\n        transform: scale(80%) ;\n    }\n    100%\n    {\n        transform: scale(100%);\n    }\n}\n\n#footer\n{\n    position: fixed;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    flex-grow: 0.01;\n    height: 5vh;\n    bottom: 0;\n    width: 100%;\n    padding: 0vh 1vw;\n    background-color: #310606f3;\n    z-index: 999;\n    box-shadow: 0px 3px 10px 1px rgba(0, 0, 0, 0.5);\n}\n#credits\n{\n    display: flex;\n    align-items: center;\n    font-weight: bolder;\n\n}\n#github-link\n{\n    align-self: center;\n    display: flex;\n    align-items: center;\n    height: 100%;\n}\nimg \n{\n    height: 0;\n    min-height: 100%;\n    object-fit: contain;\n}\n\n#tab1\n{\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    text-shadow: 2px 2px 2px black;\n    align-items: center;\n    text-align: center;\n    padding: 1em;\n}\n#welcome\n{\n    font-size: 5.5em;\n    width: 100%;\n    font-weight: 900;\n}\n#papa\n{\n    font-size: 3em;\n    width: 100%;\n    font-weight: bold;\n}\n#tab2\n{\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    padding: 1em;\n    gap: 1em;\n    \n}\n#menu\n{\n    text-align: center;\n    font-weight: bold;\n    font-size: 1.5em;\n\n}\n.menu-list\n{\n    height: 80%;\n    width: 70%;\n    display: flex;\n    background-color: rgb(53, 32, 0);\n    color: black;\n    flex-direction: column;\n    align-items: stretch;\n    gap: 1em;\n    padding: 0.5em;\n    border: 10px solid #360606;\n    border-radius: 1em;\n}\n.menu-item\n{\n    flex: 1;\n    border: 1px solid white;\n    border-radius: 0.5em;\n    display: flex;\n    flex-wrap: wrap;\n    flex-direction: row;\n    padding: 0.3em;\n}\n.item-image-div\n{\n    height: 100%;\n    border-radius: 50%;\n    border: 7px solid #834e23;\n}\n.item-words\n{\n    display: flex;\n    flex: 1;\n    gap: 0.5em;\n    flex-direction: column;\n    justify-content: stretch;\n    align-items: stretch;\n}\n.item-name\n{\n    font-weight: 900;\n    font-size: larger;\n    padding: 0.2em;\n    flex: 1;\n    border-bottom: 1px dashed white;\n}\n.item-desc\n{\n    word-wrap: break-word;\n    flex: 5;\n}\n.item-price\n{\n    border-top: 1px dashed white;\n    font-weight: bolder;\n    flex: 1;\n    text-align: end;\n}\n#tab3\n{\n    display: flex;\n    flex-direction: row;\n    justify-content: center;\n    align-items: center;\n    padding: 1em;\n    gap: 1em;\n}\n#hours-div\n{\n    flex: 1;\n}\n#contact-div\n{\n    flex: 1;\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["*\n{\n    box-sizing: border-box;\n    margin: 0;\n    user-select: none;\n    color: #FFF3E4;\n    overflow: hidden;\n    font-family: cursive;\n    font-style: italic;\n}\nhtml\n{\n    height: 100vh;\n    display: flex;\n}\nbody\n{\n    height: 100%;\n    width: 100%;\n}\n#content\n{\n    width: 100%;\n    height: 100%;\n    display: flex;\n    align-items: stretch;\n    align-content: center;\n    background-size: cover;\n    background-repeat: no-repeat;\n    background-position: center;\n    transition: background-image 0.8s ease;\n}\n\n#header\n{\n    position: fixed;\n    display: flex;\n    top: 0;\n    width: 100%;\n    height: 5vh;\n    align-items: center;\n    align-content: center;\n    justify-content: space-between;\n    justify-items: center;\n    background-color: #552c0a;\n    box-shadow: 0px 3px 10px 1px rgba(0, 0, 0, 0.5);\n    z-index: 999;\n}\n\n#logo\n{\n    opacity: 50%;\n    flex-grow: 1;\n}\n#main-container\n{\n    width: 100%;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n}\n#scroll-div\n{\n    position: fixed;\n    left: 1%;\n    bottom: calc(50% - 0.5*(4vh));\n    height: 4vh;\n    width: 4vh;\n    animation: flicker 0.5s linear 0s infinite  alternate ;\n}\n@keyframes flicker {\n    0%\n    {\n        transform: translateY(-7.5%);\n    }\n    100%\n    {\n        transform: translateY(7.5%);\n    }\n}\n#radio-div\n{\n    position: fixed;\n    right: 1%;\n    bottom: calc(50% - 0.5*(7vh));\n    height: 7vh;\n    width: 2vh;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: stretch;\n    gap: 0.5vh;\n}\ninput\n{\n    appearance: none;\n    border-radius: 50%;\n    background-color: transparent;\n    flex-grow: 1;\n    border: 2px solid rgb(255, 255, 255);\n    transition: background-color .2s ease;\n}\ninput:checked\n{\n    background-color: white;\n}\n.tab\n{\n    flex: 1;\n    animation: .2s;\n    animation-direction: normal;\n    animation-name: slideIn;\n    animation-timing-function: ease ; \n    animation-iteration-count: inherit;\n}\n\n@keyframes slideIn {\n    0%\n    {\n        transform: scale(80%) ;\n    }\n    100%\n    {\n        transform: scale(100%);\n    }\n}\n\n#footer\n{\n    position: fixed;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    flex-grow: 0.01;\n    height: 5vh;\n    bottom: 0;\n    width: 100%;\n    padding: 0vh 1vw;\n    background-color: #310606f3;\n    z-index: 999;\n    box-shadow: 0px 3px 10px 1px rgba(0, 0, 0, 0.5);\n}\n#credits\n{\n    display: flex;\n    align-items: center;\n    font-weight: bolder;\n\n}\n#github-link\n{\n    align-self: center;\n    display: flex;\n    align-items: center;\n    height: 100%;\n}\nimg \n{\n    height: 0;\n    min-height: 100%;\n    object-fit: contain;\n}\n\n#tab1\n{\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    text-shadow: 2px 2px 2px black;\n    align-items: center;\n    text-align: center;\n    padding: 1em;\n}\n#welcome\n{\n    font-size: 5.5em;\n    width: 100%;\n    font-weight: 900;\n}\n#papa\n{\n    font-size: 3em;\n    width: 100%;\n    font-weight: bold;\n}\n#tab2\n{\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    padding: 1em;\n    gap: 1em;\n    \n}\n#menu\n{\n    text-align: center;\n    font-weight: bold;\n    font-size: 1.5em;\n\n}\n.menu-list\n{\n    height: 80%;\n    width: 70%;\n    display: flex;\n    background-color: rgb(53, 32, 0);\n    color: black;\n    flex-direction: column;\n    align-items: stretch;\n    gap: 1em;\n    padding: 0.5em;\n    border: 10px solid #360606;\n    border-radius: 1em;\n}\n.menu-item\n{\n    flex: 1;\n    border: 1px solid white;\n    border-radius: 0.5em;\n    display: flex;\n    flex-wrap: wrap;\n    flex-direction: row;\n    padding: 0.3em;\n}\n.item-image-div\n{\n    height: 100%;\n    border-radius: 50%;\n    border: 7px solid #834e23;\n}\n.item-words\n{\n    display: flex;\n    flex: 1;\n    gap: 0.5em;\n    flex-direction: column;\n    justify-content: stretch;\n    align-items: stretch;\n}\n.item-name\n{\n    font-weight: 900;\n    font-size: larger;\n    padding: 0.2em;\n    flex: 1;\n    border-bottom: 1px dashed white;\n}\n.item-desc\n{\n    word-wrap: break-word;\n    flex: 5;\n}\n.item-price\n{\n    border-top: 1px dashed white;\n    font-weight: bolder;\n    flex: 1;\n    text-align: end;\n}\n#tab3\n{\n    display: flex;\n    flex-direction: row;\n    justify-content: center;\n    align-items: center;\n    padding: 1em;\n    gap: 1em;\n}\n#hours-div\n{\n    flex: 1;\n}\n#contact-div\n{\n    flex: 1;\n}"],"sourceRoot":""}]);
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
/******/ 		// no baseURI
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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YUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsT0FBTyxNQUFNLFVBQVUsVUFBVSxNQUFNLE1BQU0sVUFBVSxVQUFVLFlBQVksYUFBYSxNQUFNLE1BQU0sVUFBVSxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksTUFBTSxLQUFLLE1BQU0sWUFBWSxNQUFNLE1BQU0sWUFBWSxNQUFNLEtBQUssTUFBTSxVQUFVLFVBQVUsWUFBWSxXQUFXLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLEtBQUssTUFBTSxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxNQUFNLE1BQU0sWUFBWSxNQUFNLE1BQU0sVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLE1BQU0sWUFBWSxNQUFNLE1BQU0sWUFBWSxNQUFNLE1BQU0sTUFBTSxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxNQUFNLE1BQU0sVUFBVSxZQUFZLGNBQWMsTUFBTSxNQUFNLFlBQVksV0FBVyxZQUFZLFdBQVcsTUFBTSxNQUFNLFVBQVUsWUFBWSxhQUFhLE9BQU8sTUFBTSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLE1BQU0sTUFBTSxZQUFZLFdBQVcsWUFBWSxNQUFNLE1BQU0sVUFBVSxVQUFVLFlBQVksTUFBTSxNQUFNLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxXQUFXLEtBQUssTUFBTSxZQUFZLGFBQWEsY0FBYyxNQUFNLE1BQU0sVUFBVSxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxhQUFhLE1BQU0sTUFBTSxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxXQUFXLE1BQU0sTUFBTSxVQUFVLFlBQVksYUFBYSxNQUFNLE1BQU0sVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsTUFBTSxNQUFNLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxNQUFNLE1BQU0sWUFBWSxXQUFXLEtBQUss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Q0E7QUFDQSxDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudHBhZ2UvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3Jlc3RhdXJhbnRwYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50cGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRwYWdlLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3Jlc3RhdXJhbnRwYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRwYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50cGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50cGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50cGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRwYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudHBhZ2UvLi9zcmMvbG9hZFBhZ2UuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudHBhZ2UvLi9zcmMvbG9hZFRhYi5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50cGFnZS8uL3NyYy8gbGF6eSBeXFwuXFwvdGFiLiokIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudHBhZ2Uvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudHBhZ2Uvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudHBhZ2Uvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Jlc3RhdXJhbnRwYWdlL3dlYnBhY2svcnVudGltZS9lbnN1cmUgY2h1bmsiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudHBhZ2Uvd2VicGFjay9ydW50aW1lL2dldCBqYXZhc2NyaXB0IGNodW5rIGZpbGVuYW1lIiwid2VicGFjazovL3Jlc3RhdXJhbnRwYWdlL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudHBhZ2Uvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50cGFnZS93ZWJwYWNrL3J1bnRpbWUvbG9hZCBzY3JpcHQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudHBhZ2Uvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50cGFnZS93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50cGFnZS93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50cGFnZS93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudHBhZ2UvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIqXFxue1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHVzZXItc2VsZWN0OiBub25lO1xcbiAgICBjb2xvcjogI0ZGRjNFNDtcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gICAgZm9udC1mYW1pbHk6IGN1cnNpdmU7XFxuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcXG59XFxuaHRtbFxcbntcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAgZGlzcGxheTogZmxleDtcXG59XFxuYm9keVxcbntcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICB3aWR0aDogMTAwJTtcXG59XFxuI2NvbnRlbnRcXG57XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXG4gICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1pbWFnZSAwLjhzIGVhc2U7XFxufVxcblxcbiNoZWFkZXJcXG57XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgdG9wOiAwO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiA1dmg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM1NTJjMGE7XFxuICAgIGJveC1zaGFkb3c6IDBweCAzcHggMTBweCAxcHggcmdiYSgwLCAwLCAwLCAwLjUpO1xcbiAgICB6LWluZGV4OiA5OTk7XFxufVxcblxcbiNsb2dvXFxue1xcbiAgICBvcGFjaXR5OiA1MCU7XFxuICAgIGZsZXgtZ3JvdzogMTtcXG59XFxuI21haW4tY29udGFpbmVyXFxue1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcbiNzY3JvbGwtZGl2XFxue1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIGxlZnQ6IDElO1xcbiAgICBib3R0b206IGNhbGMoNTAlIC0gMC41Kig0dmgpKTtcXG4gICAgaGVpZ2h0OiA0dmg7XFxuICAgIHdpZHRoOiA0dmg7XFxuICAgIGFuaW1hdGlvbjogZmxpY2tlciAwLjVzIGxpbmVhciAwcyBpbmZpbml0ZSAgYWx0ZXJuYXRlIDtcXG59XFxuQGtleWZyYW1lcyBmbGlja2VyIHtcXG4gICAgMCVcXG4gICAge1xcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC03LjUlKTtcXG4gICAgfVxcbiAgICAxMDAlXFxuICAgIHtcXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSg3LjUlKTtcXG4gICAgfVxcbn1cXG4jcmFkaW8tZGl2XFxue1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIHJpZ2h0OiAxJTtcXG4gICAgYm90dG9tOiBjYWxjKDUwJSAtIDAuNSooN3ZoKSk7XFxuICAgIGhlaWdodDogN3ZoO1xcbiAgICB3aWR0aDogMnZoO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XFxuICAgIGdhcDogMC41dmg7XFxufVxcbmlucHV0XFxue1xcbiAgICBhcHBlYXJhbmNlOiBub25lO1xcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgICBmbGV4LWdyb3c6IDE7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHJnYigyNTUsIDI1NSwgMjU1KTtcXG4gICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAuMnMgZWFzZTtcXG59XFxuaW5wdXQ6Y2hlY2tlZFxcbntcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxufVxcbi50YWJcXG57XFxuICAgIGZsZXg6IDE7XFxuICAgIGFuaW1hdGlvbjogLjJzO1xcbiAgICBhbmltYXRpb24tZGlyZWN0aW9uOiBub3JtYWw7XFxuICAgIGFuaW1hdGlvbi1uYW1lOiBzbGlkZUluO1xcbiAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlIDsgXFxuICAgIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IGluaGVyaXQ7XFxufVxcblxcbkBrZXlmcmFtZXMgc2xpZGVJbiB7XFxuICAgIDAlXFxuICAgIHtcXG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoODAlKSA7XFxuICAgIH1cXG4gICAgMTAwJVxcbiAgICB7XFxuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEwMCUpO1xcbiAgICB9XFxufVxcblxcbiNmb290ZXJcXG57XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBmbGV4LWdyb3c6IDAuMDE7XFxuICAgIGhlaWdodDogNXZoO1xcbiAgICBib3R0b206IDA7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBwYWRkaW5nOiAwdmggMXZ3O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzEwNjA2ZjM7XFxuICAgIHotaW5kZXg6IDk5OTtcXG4gICAgYm94LXNoYWRvdzogMHB4IDNweCAxMHB4IDFweCByZ2JhKDAsIDAsIDAsIDAuNSk7XFxufVxcbiNjcmVkaXRzXFxue1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBmb250LXdlaWdodDogYm9sZGVyO1xcblxcbn1cXG4jZ2l0aHViLWxpbmtcXG57XFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbn1cXG5pbWcgXFxue1xcbiAgICBoZWlnaHQ6IDA7XFxuICAgIG1pbi1oZWlnaHQ6IDEwMCU7XFxuICAgIG9iamVjdC1maXQ6IGNvbnRhaW47XFxufVxcblxcbiN0YWIxXFxue1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgdGV4dC1zaGFkb3c6IDJweCAycHggMnB4IGJsYWNrO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIHBhZGRpbmc6IDFlbTtcXG59XFxuI3dlbGNvbWVcXG57XFxuICAgIGZvbnQtc2l6ZTogNS41ZW07XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBmb250LXdlaWdodDogOTAwO1xcbn1cXG4jcGFwYVxcbntcXG4gICAgZm9udC1zaXplOiAzZW07XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuI3RhYjJcXG57XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBwYWRkaW5nOiAxZW07XFxuICAgIGdhcDogMWVtO1xcbiAgICBcXG59XFxuI21lbnVcXG57XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIGZvbnQtc2l6ZTogMS41ZW07XFxuXFxufVxcbi5tZW51LWxpc3RcXG57XFxuICAgIGhlaWdodDogODAlO1xcbiAgICB3aWR0aDogNzAlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNTMsIDMyLCAwKTtcXG4gICAgY29sb3I6IGJsYWNrO1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogc3RyZXRjaDtcXG4gICAgZ2FwOiAxZW07XFxuICAgIHBhZGRpbmc6IDAuNWVtO1xcbiAgICBib3JkZXI6IDEwcHggc29saWQgIzM2MDYwNjtcXG4gICAgYm9yZGVyLXJhZGl1czogMWVtO1xcbn1cXG4ubWVudS1pdGVtXFxue1xcbiAgICBmbGV4OiAxO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcXG4gICAgYm9yZGVyLXJhZGl1czogMC41ZW07XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtd3JhcDogd3JhcDtcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gICAgcGFkZGluZzogMC4zZW07XFxufVxcbi5pdGVtLWltYWdlLWRpdlxcbntcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICAgIGJvcmRlcjogN3B4IHNvbGlkICM4MzRlMjM7XFxufVxcbi5pdGVtLXdvcmRzXFxue1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4OiAxO1xcbiAgICBnYXA6IDAuNWVtO1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHN0cmV0Y2g7XFxuICAgIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xcbn1cXG4uaXRlbS1uYW1lXFxue1xcbiAgICBmb250LXdlaWdodDogOTAwO1xcbiAgICBmb250LXNpemU6IGxhcmdlcjtcXG4gICAgcGFkZGluZzogMC4yZW07XFxuICAgIGZsZXg6IDE7XFxuICAgIGJvcmRlci1ib3R0b206IDFweCBkYXNoZWQgd2hpdGU7XFxufVxcbi5pdGVtLWRlc2NcXG57XFxuICAgIHdvcmQtd3JhcDogYnJlYWstd29yZDtcXG4gICAgZmxleDogNTtcXG59XFxuLml0ZW0tcHJpY2VcXG57XFxuICAgIGJvcmRlci10b3A6IDFweCBkYXNoZWQgd2hpdGU7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XFxuICAgIGZsZXg6IDE7XFxuICAgIHRleHQtYWxpZ246IGVuZDtcXG59XFxuI3RhYjNcXG57XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBwYWRkaW5nOiAxZW07XFxuICAgIGdhcDogMWVtO1xcbn1cXG4jaG91cnMtZGl2XFxue1xcbiAgICBmbGV4OiAxO1xcbn1cXG4jY29udGFjdC1kaXZcXG57XFxuICAgIGZsZXg6IDE7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7O0lBRUksc0JBQXNCO0lBQ3RCLFNBQVM7SUFDVCxpQkFBaUI7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YixlQUFlO0lBQ2YsbUJBQW1CO0lBQ25CLGNBQWM7QUFDbEI7QUFDQTs7SUFFSSxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLHlCQUF5QjtBQUM3QjtBQUNBOztJQUVJLGFBQWE7SUFDYixPQUFPO0lBQ1AsVUFBVTtJQUNWLHNCQUFzQjtJQUN0Qix3QkFBd0I7SUFDeEIsb0JBQW9CO0FBQ3hCO0FBQ0E7O0lBRUksZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQixjQUFjO0lBQ2QsT0FBTztJQUNQLCtCQUErQjtBQUNuQztBQUNBOztJQUVJLHFCQUFxQjtJQUNyQixPQUFPO0FBQ1g7QUFDQTs7SUFFSSw0QkFBNEI7SUFDNUIsbUJBQW1CO0lBQ25CLE9BQU87SUFDUCxlQUFlO0FBQ25CO0FBQ0E7O0lBRUksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLFlBQVk7SUFDWixRQUFRO0FBQ1o7QUFDQTs7SUFFSSxPQUFPO0FBQ1g7QUFDQTs7SUFFSSxPQUFPO0FBQ1hcIixcInNvdXJjZXNDb250ZW50XCI6W1wiKlxcbntcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcXG4gICAgY29sb3I6ICNGRkYzRTQ7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxuICAgIGZvbnQtZmFtaWx5OiBjdXJzaXZlO1xcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XFxufVxcbmh0bWxcXG57XFxuICAgIGhlaWdodDogMTAwdmg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxufVxcbmJvZHlcXG57XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgd2lkdGg6IDEwMCU7XFxufVxcbiNjb250ZW50XFxue1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogc3RyZXRjaDtcXG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxuICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtaW1hZ2UgMC44cyBlYXNlO1xcbn1cXG5cXG4jaGVhZGVyXFxue1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIHRvcDogMDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogNXZoO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTUyYzBhO1xcbiAgICBib3gtc2hhZG93OiAwcHggM3B4IDEwcHggMXB4IHJnYmEoMCwgMCwgMCwgMC41KTtcXG4gICAgei1pbmRleDogOTk5O1xcbn1cXG5cXG4jbG9nb1xcbntcXG4gICAgb3BhY2l0eTogNTAlO1xcbiAgICBmbGV4LWdyb3c6IDE7XFxufVxcbiNtYWluLWNvbnRhaW5lclxcbntcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG4jc2Nyb2xsLWRpdlxcbntcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICBsZWZ0OiAxJTtcXG4gICAgYm90dG9tOiBjYWxjKDUwJSAtIDAuNSooNHZoKSk7XFxuICAgIGhlaWdodDogNHZoO1xcbiAgICB3aWR0aDogNHZoO1xcbiAgICBhbmltYXRpb246IGZsaWNrZXIgMC41cyBsaW5lYXIgMHMgaW5maW5pdGUgIGFsdGVybmF0ZSA7XFxufVxcbkBrZXlmcmFtZXMgZmxpY2tlciB7XFxuICAgIDAlXFxuICAgIHtcXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNy41JSk7XFxuICAgIH1cXG4gICAgMTAwJVxcbiAgICB7XFxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoNy41JSk7XFxuICAgIH1cXG59XFxuI3JhZGlvLWRpdlxcbntcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICByaWdodDogMSU7XFxuICAgIGJvdHRvbTogY2FsYyg1MCUgLSAwLjUqKDd2aCkpO1xcbiAgICBoZWlnaHQ6IDd2aDtcXG4gICAgd2lkdGg6IDJ2aDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xcbiAgICBnYXA6IDAuNXZoO1xcbn1cXG5pbnB1dFxcbntcXG4gICAgYXBwZWFyYW5jZTogbm9uZTtcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gICAgZmxleC1ncm93OiAxO1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCByZ2IoMjU1LCAyNTUsIDI1NSk7XFxuICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgLjJzIGVhc2U7XFxufVxcbmlucHV0OmNoZWNrZWRcXG57XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbn1cXG4udGFiXFxue1xcbiAgICBmbGV4OiAxO1xcbiAgICBhbmltYXRpb246IC4ycztcXG4gICAgYW5pbWF0aW9uLWRpcmVjdGlvbjogbm9ybWFsO1xcbiAgICBhbmltYXRpb24tbmFtZTogc2xpZGVJbjtcXG4gICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZSA7IFxcbiAgICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiBpbmhlcml0O1xcbn1cXG5cXG5Aa2V5ZnJhbWVzIHNsaWRlSW4ge1xcbiAgICAwJVxcbiAgICB7XFxuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDgwJSkgO1xcbiAgICB9XFxuICAgIDEwMCVcXG4gICAge1xcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxMDAlKTtcXG4gICAgfVxcbn1cXG5cXG4jZm9vdGVyXFxue1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZmxleC1ncm93OiAwLjAxO1xcbiAgICBoZWlnaHQ6IDV2aDtcXG4gICAgYm90dG9tOiAwO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgcGFkZGluZzogMHZoIDF2dztcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzMxMDYwNmYzO1xcbiAgICB6LWluZGV4OiA5OTk7XFxuICAgIGJveC1zaGFkb3c6IDBweCAzcHggMTBweCAxcHggcmdiYSgwLCAwLCAwLCAwLjUpO1xcbn1cXG4jY3JlZGl0c1xcbntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcXG5cXG59XFxuI2dpdGh1Yi1saW5rXFxue1xcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGhlaWdodDogMTAwJTtcXG59XFxuaW1nIFxcbntcXG4gICAgaGVpZ2h0OiAwO1xcbiAgICBtaW4taGVpZ2h0OiAxMDAlO1xcbiAgICBvYmplY3QtZml0OiBjb250YWluO1xcbn1cXG5cXG4jdGFiMVxcbntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIHRleHQtc2hhZG93OiAycHggMnB4IDJweCBibGFjaztcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBwYWRkaW5nOiAxZW07XFxufVxcbiN3ZWxjb21lXFxue1xcbiAgICBmb250LXNpemU6IDUuNWVtO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgZm9udC13ZWlnaHQ6IDkwMDtcXG59XFxuI3BhcGFcXG57XFxuICAgIGZvbnQtc2l6ZTogM2VtO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcbiN0YWIyXFxue1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgcGFkZGluZzogMWVtO1xcbiAgICBnYXA6IDFlbTtcXG4gICAgXFxufVxcbiNtZW51XFxue1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBmb250LXNpemU6IDEuNWVtO1xcblxcbn1cXG4ubWVudS1saXN0XFxue1xcbiAgICBoZWlnaHQ6IDgwJTtcXG4gICAgd2lkdGg6IDcwJTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDUzLCAzMiwgMCk7XFxuICAgIGNvbG9yOiBibGFjaztcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XFxuICAgIGdhcDogMWVtO1xcbiAgICBwYWRkaW5nOiAwLjVlbTtcXG4gICAgYm9yZGVyOiAxMHB4IHNvbGlkICMzNjA2MDY7XFxuICAgIGJvcmRlci1yYWRpdXM6IDFlbTtcXG59XFxuLm1lbnUtaXRlbVxcbntcXG4gICAgZmxleDogMTtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDAuNWVtO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LXdyYXA6IHdyYXA7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICAgIHBhZGRpbmc6IDAuM2VtO1xcbn1cXG4uaXRlbS1pbWFnZS1kaXZcXG57XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgICBib3JkZXI6IDdweCBzb2xpZCAjODM0ZTIzO1xcbn1cXG4uaXRlbS13b3Jkc1xcbntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleDogMTtcXG4gICAgZ2FwOiAwLjVlbTtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBzdHJldGNoO1xcbiAgICBhbGlnbi1pdGVtczogc3RyZXRjaDtcXG59XFxuLml0ZW0tbmFtZVxcbntcXG4gICAgZm9udC13ZWlnaHQ6IDkwMDtcXG4gICAgZm9udC1zaXplOiBsYXJnZXI7XFxuICAgIHBhZGRpbmc6IDAuMmVtO1xcbiAgICBmbGV4OiAxO1xcbiAgICBib3JkZXItYm90dG9tOiAxcHggZGFzaGVkIHdoaXRlO1xcbn1cXG4uaXRlbS1kZXNjXFxue1xcbiAgICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XFxuICAgIGZsZXg6IDU7XFxufVxcbi5pdGVtLXByaWNlXFxue1xcbiAgICBib3JkZXItdG9wOiAxcHggZGFzaGVkIHdoaXRlO1xcbiAgICBmb250LXdlaWdodDogYm9sZGVyO1xcbiAgICBmbGV4OiAxO1xcbiAgICB0ZXh0LWFsaWduOiBlbmQ7XFxufVxcbiN0YWIzXFxue1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgcGFkZGluZzogMWVtO1xcbiAgICBnYXA6IDFlbTtcXG59XFxuI2hvdXJzLWRpdlxcbntcXG4gICAgZmxleDogMTtcXG59XFxuI2NvbnRhY3QtZGl2XFxue1xcbiAgICBmbGV4OiAxO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgbG9nbyBmcm9tICcuL2Fzc2V0cy9sb2dvLnBuZyc7XG5pbXBvcnQgZ2l0TG9nbyBmcm9tICcuL2Fzc2V0cy9naXRodWItbG9nby5wbmcnO1xuaW1wb3J0IGNhbGxUYWJMb2FkIGZyb20gJy4vbG9hZFRhYi5qcyc7XG5pbXBvcnQgc2Nyb2xsIGZyb20gJy4vYXNzZXRzL3Njcm9sbC5wbmcnO1xuXG4vLyBDcmVhdGUgY29udGVudCBkaXZcbmNvbnN0IGNvbnRlbnREaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpOyBcbmNvbnRlbnREaXYuaWQgPSAnY29udGVudCc7XG5kb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGNvbnRlbnREaXYpO1xuXG4vLyBQYWdlIGxvYWQgZnVuY3Rpb24gdGhhdCB3aWxsIGJlIGltcG9ydGVkIGluIHRoZSBtYWluIEpTIGZpbGVcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGxvYWRQYWdlKClcbntcbiAgICBjcmVhdGVIZWFkZXIoKTsgLy8gSGVhZGVyIGNyZWF0aW9uXG4gICAgY3JlYXRlTWFpbigpOyAvLyBNYWluIGNyZWF0aW9uXG4gICAgY3JlYXRlRm9vdGVyKCk7IC8vIEZvb3RlciBjcmVhdGlvblxuICAgIFxuICAgIGNvbnN0IHNjcm9sbERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY29uc3QgaW1nID0gbmV3IEltYWdlKCk7XG4gICAgaW1nLnNyYyA9IHNjcm9sbDtcbiAgICBzY3JvbGxEaXYuYXBwZW5kQ2hpbGQoaW1nKTtcbiAgICBzY3JvbGxEaXYuaWQgPSAnc2Nyb2xsLWRpdic7XG4gICAgY29udGVudERpdi5hcHBlbmRDaGlsZChzY3JvbGxEaXYpO1xuXG4gICAgY29uc3QgcmFkaW9EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHJhZGlvRGl2LmlkID0gJ3JhZGlvLWRpdic7XG4gICAgY29udGVudERpdi5hcHBlbmRDaGlsZChyYWRpb0Rpdik7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAzOyBpKyspIHtcbiAgICAgICAgY29uc3QgcmFkaW8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgICAgICByYWRpby50eXBlID0gJ3JhZGlvJztcbiAgICAgICAgaWYgKGkgPT09IDApXG4gICAgICAgICAgICByYWRpby5jaGVja2VkID0gdHJ1ZTtcbiAgICAgICAgcmFkaW8uZGlzYWJsZWQgPSB0cnVlO1xuICAgICAgICByYWRpb0Rpdi5hcHBlbmRDaGlsZChyYWRpbyk7XG4gICAgfVxufVxuXG4vLyBIZWFkZXIgY3JlYXRpb24gZnVuY3Rpb24gXG5mdW5jdGlvbiBjcmVhdGVIZWFkZXIoKVxue1xuICAgIC8vIENyZWF0ZSBoZWFkZXIgZGl2XG4gICAgbGV0IGhlYWRlckRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGhlYWRlckRpdi5pZCA9ICdoZWFkZXInO1xuICAgIGNvbnRlbnREaXYuYXBwZW5kQ2hpbGQoaGVhZGVyRGl2KTtcblxuICAgIC8vIENyZWF0ZSB0aGUgbG9nb1xuICAgIGxldCByZXNMb2dvID0gbmV3IEltYWdlKCk7XG4gICAgcmVzTG9nby5pZCA9ICdsb2dvJztcbiAgICByZXNMb2dvLnNyYyA9IGxvZ287IFxuICAgIGhlYWRlckRpdi5hcHBlbmRDaGlsZChyZXNMb2dvKTtcbn1cblxuLy8gTWFpbiBjcmVhdGlvbiBmdW5jdGlvblxuZnVuY3Rpb24gY3JlYXRlTWFpbigpXG57XG4gICAgLy8gQ3JlYXRlIG1haW4gZGl2XG4gICAgbGV0IG1haW5EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBtYWluRGl2LmlkID0gJ21haW4tY29udGFpbmVyJztcbiAgICBjb250ZW50RGl2LmFwcGVuZENoaWxkKG1haW5EaXYpO1xuXG5cbiAgICAvLyBMb2FkIHRhYiB3aGVuIGNhbGwgaXMgZnVsZmlsbGVkLCBhZGQgaXRcbiAgICBjYWxsVGFiTG9hZCgxKS50aGVuKCh0YWIpID0+IFxuICAgIHtcbiAgICAgICAgbWFpbkRpdi5hcHBlbmRDaGlsZCh0YWIpO1xuICAgIH0pO1xufVxuXG4vLyBGb290ZXIgY3JlYXRpb24gZnVuY3Rpb25cbmZ1bmN0aW9uIGNyZWF0ZUZvb3RlcigpXG57XG4gICAgLy8gQ3JlYXRlIGZvb3RlciBkaXZcbiAgICBsZXQgZm9vdGVyRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZm9vdGVyRGl2LmlkID0gJ2Zvb3Rlcic7XG4gICAgY29udGVudERpdi5hcHBlbmRDaGlsZChmb290ZXJEaXYpO1xuXG4gICAgLy8gQ3JlYXRlIGNyZWRpdHMgZGl2IFxuICAgIGxldCBjcmVkaXRzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY3JlZGl0cy5pZCA9ICdjcmVkaXRzJztcbiAgICBmb290ZXJEaXYuYXBwZW5kQ2hpbGQoY3JlZGl0cyk7XG4gICAgXG4gICAgLy8gQ3JlYXRlIHRleHQgIFxuICAgIGxldCBjcmVkaXRzVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBjcmVkaXRzVGV4dC50ZXh0Q29udGVudCA9ICfCqSBTaGF5IFNoYWhhbCAyMDIyJ1xuICAgIGNyZWRpdHMuYXBwZW5kQ2hpbGQoY3JlZGl0c1RleHQpO1xuXG4gICAgLy8gQ3JlYXRlIGxpbmsgXG4gICAgbGV0IGdpdExpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG4gICAgZ2l0TGluay5pZCA9ICdnaXRodWItbGluayc7XG4gICAgZ2l0TGluay5ocmVmID0gJ2h0dHBzOi8vZ2l0aHViLmNvbS9zaGF5c2hhaGFsL3Jlc3RhdXJhbnRQYWdlJztcbiAgICBnaXRMaW5rLnRhcmdldCA9ICdibGFuayc7IC8vIEdvIHRvIG5ldyB0YWJcbiAgICBmb290ZXJEaXYuYXBwZW5kQ2hpbGQoZ2l0TGluayk7XG5cbiAgICAvLyBDcmVhdGUgaW1hZ2VcbiAgICBsZXQgZ2l0SW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJylcbiAgICBnaXRJbWcuc3JjID0gZ2l0TG9nbztcbiAgICBnaXRJbWcuYWx0ID0gJ2dpdGh1YiBpbWFnZSc7XG4gICAgZ2l0TGluay5hcHBlbmRDaGlsZChnaXRJbWcpO1xuXG59XG5cbiIsIi8vIFRhYiBsb2FkaW5nIGZ1bmN0aW9uIHRoYXQgd2lsbCBiZSBkeW5hbWljYWxseSBpbXBvcnRlZFxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gbG9hZFRhYih0YWJOdW0pXG57XG4gICAgLy8gQ3JlYXRlIHRhYiBkaXZcbiAgICBjb25zdCB0YWJEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICAgIC8vIENhbGwgZm9yIHRoZSBjb3JyZWN0IHRhYiBsb2FkaW5nIEpTIGZpbGUgXG4gICAgY29uc3Qge2RlZmF1bHQ6IHRhYn0gPSBhd2FpdCBpbXBvcnQoJy4vdGFiJyArIHRhYk51bSk7XG5cbiAgICAvLyBMb2FkIHRoZSB0YWIgaW50byB0aGUgY3JlYXRlZCBkaXZcbiAgICB0YWIodGFiRGl2KTtcblxuICAgIHJldHVybiB0YWJEaXY7XG59IiwidmFyIG1hcCA9IHtcblx0XCIuL3RhYjFcIjogW1xuXHRcdFwiLi9zcmMvdGFiMS5qc1wiLFxuXHRcdFwic3JjX3RhYjFfanNcIlxuXHRdLFxuXHRcIi4vdGFiMS5qc1wiOiBbXG5cdFx0XCIuL3NyYy90YWIxLmpzXCIsXG5cdFx0XCJzcmNfdGFiMV9qc1wiXG5cdF0sXG5cdFwiLi90YWIyXCI6IFtcblx0XHRcIi4vc3JjL3RhYjIuanNcIixcblx0XHRcInNyY190YWIyX2pzXCJcblx0XSxcblx0XCIuL3RhYjIuanNcIjogW1xuXHRcdFwiLi9zcmMvdGFiMi5qc1wiLFxuXHRcdFwic3JjX3RhYjJfanNcIlxuXHRdLFxuXHRcIi4vdGFiM1wiOiBbXG5cdFx0XCIuL3NyYy90YWIzLmpzXCIsXG5cdFx0XCJzcmNfdGFiM19qc1wiXG5cdF0sXG5cdFwiLi90YWIzLmpzXCI6IFtcblx0XHRcIi4vc3JjL3RhYjMuanNcIixcblx0XHRcInNyY190YWIzX2pzXCJcblx0XVxufTtcbmZ1bmN0aW9uIHdlYnBhY2tBc3luY0NvbnRleHQocmVxKSB7XG5cdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8obWFwLCByZXEpKSB7XG5cdFx0cmV0dXJuIFByb21pc2UucmVzb2x2ZSgpLnRoZW4oKCkgPT4ge1xuXHRcdFx0dmFyIGUgPSBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgcmVxICsgXCInXCIpO1xuXHRcdFx0ZS5jb2RlID0gJ01PRFVMRV9OT1RfRk9VTkQnO1xuXHRcdFx0dGhyb3cgZTtcblx0XHR9KTtcblx0fVxuXG5cdHZhciBpZHMgPSBtYXBbcmVxXSwgaWQgPSBpZHNbMF07XG5cdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fLmUoaWRzWzFdKS50aGVuKCgpID0+IHtcblx0XHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhpZCk7XG5cdH0pO1xufVxud2VicGFja0FzeW5jQ29udGV4dC5rZXlzID0gKCkgPT4gKE9iamVjdC5rZXlzKG1hcCkpO1xud2VicGFja0FzeW5jQ29udGV4dC5pZCA9IFwiLi9zcmMgbGF6eSByZWN1cnNpdmUgXlxcXFwuXFxcXC90YWIuKiRcIjtcbm1vZHVsZS5leHBvcnRzID0gd2VicGFja0FzeW5jQ29udGV4dDsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5mID0ge307XG4vLyBUaGlzIGZpbGUgY29udGFpbnMgb25seSB0aGUgZW50cnkgY2h1bmsuXG4vLyBUaGUgY2h1bmsgbG9hZGluZyBmdW5jdGlvbiBmb3IgYWRkaXRpb25hbCBjaHVua3Ncbl9fd2VicGFja19yZXF1aXJlX18uZSA9IChjaHVua0lkKSA9PiB7XG5cdHJldHVybiBQcm9taXNlLmFsbChPYmplY3Qua2V5cyhfX3dlYnBhY2tfcmVxdWlyZV9fLmYpLnJlZHVjZSgocHJvbWlzZXMsIGtleSkgPT4ge1xuXHRcdF9fd2VicGFja19yZXF1aXJlX18uZltrZXldKGNodW5rSWQsIHByb21pc2VzKTtcblx0XHRyZXR1cm4gcHJvbWlzZXM7XG5cdH0sIFtdKSk7XG59OyIsIi8vIFRoaXMgZnVuY3Rpb24gYWxsb3cgdG8gcmVmZXJlbmNlIGFzeW5jIGNodW5rc1xuX193ZWJwYWNrX3JlcXVpcmVfXy51ID0gKGNodW5rSWQpID0+IHtcblx0Ly8gcmV0dXJuIHVybCBmb3IgZmlsZW5hbWVzIGJhc2VkIG9uIHRlbXBsYXRlXG5cdHJldHVybiBcIlwiICsgY2h1bmtJZCArIFwiLmpzXCI7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsInZhciBpblByb2dyZXNzID0ge307XG52YXIgZGF0YVdlYnBhY2tQcmVmaXggPSBcInJlc3RhdXJhbnRwYWdlOlwiO1xuLy8gbG9hZFNjcmlwdCBmdW5jdGlvbiB0byBsb2FkIGEgc2NyaXB0IHZpYSBzY3JpcHQgdGFnXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmwgPSAodXJsLCBkb25lLCBrZXksIGNodW5rSWQpID0+IHtcblx0aWYoaW5Qcm9ncmVzc1t1cmxdKSB7IGluUHJvZ3Jlc3NbdXJsXS5wdXNoKGRvbmUpOyByZXR1cm47IH1cblx0dmFyIHNjcmlwdCwgbmVlZEF0dGFjaDtcblx0aWYoa2V5ICE9PSB1bmRlZmluZWQpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGZvcih2YXIgaSA9IDA7IGkgPCBzY3JpcHRzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgcyA9IHNjcmlwdHNbaV07XG5cdFx0XHRpZihzLmdldEF0dHJpYnV0ZShcInNyY1wiKSA9PSB1cmwgfHwgcy5nZXRBdHRyaWJ1dGUoXCJkYXRhLXdlYnBhY2tcIikgPT0gZGF0YVdlYnBhY2tQcmVmaXggKyBrZXkpIHsgc2NyaXB0ID0gczsgYnJlYWs7IH1cblx0XHR9XG5cdH1cblx0aWYoIXNjcmlwdCkge1xuXHRcdG5lZWRBdHRhY2ggPSB0cnVlO1xuXHRcdHNjcmlwdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpO1xuXG5cdFx0c2NyaXB0LmNoYXJzZXQgPSAndXRmLTgnO1xuXHRcdHNjcmlwdC50aW1lb3V0ID0gMTIwO1xuXHRcdGlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLm5jKSB7XG5cdFx0XHRzY3JpcHQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgX193ZWJwYWNrX3JlcXVpcmVfXy5uYyk7XG5cdFx0fVxuXHRcdHNjcmlwdC5zZXRBdHRyaWJ1dGUoXCJkYXRhLXdlYnBhY2tcIiwgZGF0YVdlYnBhY2tQcmVmaXggKyBrZXkpO1xuXHRcdHNjcmlwdC5zcmMgPSB1cmw7XG5cdH1cblx0aW5Qcm9ncmVzc1t1cmxdID0gW2RvbmVdO1xuXHR2YXIgb25TY3JpcHRDb21wbGV0ZSA9IChwcmV2LCBldmVudCkgPT4ge1xuXHRcdC8vIGF2b2lkIG1lbSBsZWFrcyBpbiBJRS5cblx0XHRzY3JpcHQub25lcnJvciA9IHNjcmlwdC5vbmxvYWQgPSBudWxsO1xuXHRcdGNsZWFyVGltZW91dCh0aW1lb3V0KTtcblx0XHR2YXIgZG9uZUZucyA9IGluUHJvZ3Jlc3NbdXJsXTtcblx0XHRkZWxldGUgaW5Qcm9ncmVzc1t1cmxdO1xuXHRcdHNjcmlwdC5wYXJlbnROb2RlICYmIHNjcmlwdC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHNjcmlwdCk7XG5cdFx0ZG9uZUZucyAmJiBkb25lRm5zLmZvckVhY2goKGZuKSA9PiAoZm4oZXZlbnQpKSk7XG5cdFx0aWYocHJldikgcmV0dXJuIHByZXYoZXZlbnQpO1xuXHR9O1xuXHR2YXIgdGltZW91dCA9IHNldFRpbWVvdXQob25TY3JpcHRDb21wbGV0ZS5iaW5kKG51bGwsIHVuZGVmaW5lZCwgeyB0eXBlOiAndGltZW91dCcsIHRhcmdldDogc2NyaXB0IH0pLCAxMjAwMDApO1xuXHRzY3JpcHQub25lcnJvciA9IG9uU2NyaXB0Q29tcGxldGUuYmluZChudWxsLCBzY3JpcHQub25lcnJvcik7XG5cdHNjcmlwdC5vbmxvYWQgPSBvblNjcmlwdENvbXBsZXRlLmJpbmQobnVsbCwgc2NyaXB0Lm9ubG9hZCk7XG5cdG5lZWRBdHRhY2ggJiYgZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChzY3JpcHQpO1xufTsiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIi8vIG5vIGJhc2VVUklcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcImluZGV4XCI6IDBcbn07XG5cbl9fd2VicGFja19yZXF1aXJlX18uZi5qID0gKGNodW5rSWQsIHByb21pc2VzKSA9PiB7XG5cdFx0Ly8gSlNPTlAgY2h1bmsgbG9hZGluZyBmb3IgamF2YXNjcmlwdFxuXHRcdHZhciBpbnN0YWxsZWRDaHVua0RhdGEgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLm8oaW5zdGFsbGVkQ2h1bmtzLCBjaHVua0lkKSA/IGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA6IHVuZGVmaW5lZDtcblx0XHRpZihpbnN0YWxsZWRDaHVua0RhdGEgIT09IDApIHsgLy8gMCBtZWFucyBcImFscmVhZHkgaW5zdGFsbGVkXCIuXG5cblx0XHRcdC8vIGEgUHJvbWlzZSBtZWFucyBcImN1cnJlbnRseSBsb2FkaW5nXCIuXG5cdFx0XHRpZihpbnN0YWxsZWRDaHVua0RhdGEpIHtcblx0XHRcdFx0cHJvbWlzZXMucHVzaChpbnN0YWxsZWRDaHVua0RhdGFbMl0pO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0aWYodHJ1ZSkgeyAvLyBhbGwgY2h1bmtzIGhhdmUgSlNcblx0XHRcdFx0XHQvLyBzZXR1cCBQcm9taXNlIGluIGNodW5rIGNhY2hlXG5cdFx0XHRcdFx0dmFyIHByb21pc2UgPSBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiAoaW5zdGFsbGVkQ2h1bmtEYXRhID0gaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID0gW3Jlc29sdmUsIHJlamVjdF0pKTtcblx0XHRcdFx0XHRwcm9taXNlcy5wdXNoKGluc3RhbGxlZENodW5rRGF0YVsyXSA9IHByb21pc2UpO1xuXG5cdFx0XHRcdFx0Ly8gc3RhcnQgY2h1bmsgbG9hZGluZ1xuXHRcdFx0XHRcdHZhciB1cmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLnAgKyBfX3dlYnBhY2tfcmVxdWlyZV9fLnUoY2h1bmtJZCk7XG5cdFx0XHRcdFx0Ly8gY3JlYXRlIGVycm9yIGJlZm9yZSBzdGFjayB1bndvdW5kIHRvIGdldCB1c2VmdWwgc3RhY2t0cmFjZSBsYXRlclxuXHRcdFx0XHRcdHZhciBlcnJvciA9IG5ldyBFcnJvcigpO1xuXHRcdFx0XHRcdHZhciBsb2FkaW5nRW5kZWQgPSAoZXZlbnQpID0+IHtcblx0XHRcdFx0XHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhpbnN0YWxsZWRDaHVua3MsIGNodW5rSWQpKSB7XG5cdFx0XHRcdFx0XHRcdGluc3RhbGxlZENodW5rRGF0YSA9IGluc3RhbGxlZENodW5rc1tjaHVua0lkXTtcblx0XHRcdFx0XHRcdFx0aWYoaW5zdGFsbGVkQ2h1bmtEYXRhICE9PSAwKSBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPSB1bmRlZmluZWQ7XG5cdFx0XHRcdFx0XHRcdGlmKGluc3RhbGxlZENodW5rRGF0YSkge1xuXHRcdFx0XHRcdFx0XHRcdHZhciBlcnJvclR5cGUgPSBldmVudCAmJiAoZXZlbnQudHlwZSA9PT0gJ2xvYWQnID8gJ21pc3NpbmcnIDogZXZlbnQudHlwZSk7XG5cdFx0XHRcdFx0XHRcdFx0dmFyIHJlYWxTcmMgPSBldmVudCAmJiBldmVudC50YXJnZXQgJiYgZXZlbnQudGFyZ2V0LnNyYztcblx0XHRcdFx0XHRcdFx0XHRlcnJvci5tZXNzYWdlID0gJ0xvYWRpbmcgY2h1bmsgJyArIGNodW5rSWQgKyAnIGZhaWxlZC5cXG4oJyArIGVycm9yVHlwZSArICc6ICcgKyByZWFsU3JjICsgJyknO1xuXHRcdFx0XHRcdFx0XHRcdGVycm9yLm5hbWUgPSAnQ2h1bmtMb2FkRXJyb3InO1xuXHRcdFx0XHRcdFx0XHRcdGVycm9yLnR5cGUgPSBlcnJvclR5cGU7XG5cdFx0XHRcdFx0XHRcdFx0ZXJyb3IucmVxdWVzdCA9IHJlYWxTcmM7XG5cdFx0XHRcdFx0XHRcdFx0aW5zdGFsbGVkQ2h1bmtEYXRhWzFdKGVycm9yKTtcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH07XG5cdFx0XHRcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5sKHVybCwgbG9hZGluZ0VuZGVkLCBcImNodW5rLVwiICsgY2h1bmtJZCwgY2h1bmtJZCk7XG5cdFx0XHRcdH0gZWxzZSBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPSAwO1xuXHRcdFx0fVxuXHRcdH1cbn07XG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gaW5zdGFsbCBhIEpTT05QIGNhbGxiYWNrIGZvciBjaHVuayBsb2FkaW5nXG52YXIgd2VicGFja0pzb25wQ2FsbGJhY2sgPSAocGFyZW50Q2h1bmtMb2FkaW5nRnVuY3Rpb24sIGRhdGEpID0+IHtcblx0dmFyIFtjaHVua0lkcywgbW9yZU1vZHVsZXMsIHJ1bnRpbWVdID0gZGF0YTtcblx0Ly8gYWRkIFwibW9yZU1vZHVsZXNcIiB0byB0aGUgbW9kdWxlcyBvYmplY3QsXG5cdC8vIHRoZW4gZmxhZyBhbGwgXCJjaHVua0lkc1wiIGFzIGxvYWRlZCBhbmQgZmlyZSBjYWxsYmFja1xuXHR2YXIgbW9kdWxlSWQsIGNodW5rSWQsIGkgPSAwO1xuXHRpZihjaHVua0lkcy5zb21lKChpZCkgPT4gKGluc3RhbGxlZENodW5rc1tpZF0gIT09IDApKSkge1xuXHRcdGZvcihtb2R1bGVJZCBpbiBtb3JlTW9kdWxlcykge1xuXHRcdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKG1vcmVNb2R1bGVzLCBtb2R1bGVJZCkpIHtcblx0XHRcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tW21vZHVsZUlkXSA9IG1vcmVNb2R1bGVzW21vZHVsZUlkXTtcblx0XHRcdH1cblx0XHR9XG5cdFx0aWYocnVudGltZSkgdmFyIHJlc3VsdCA9IHJ1bnRpbWUoX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cdH1cblx0aWYocGFyZW50Q2h1bmtMb2FkaW5nRnVuY3Rpb24pIHBhcmVudENodW5rTG9hZGluZ0Z1bmN0aW9uKGRhdGEpO1xuXHRmb3IoO2kgPCBjaHVua0lkcy5sZW5ndGg7IGkrKykge1xuXHRcdGNodW5rSWQgPSBjaHVua0lkc1tpXTtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oaW5zdGFsbGVkQ2h1bmtzLCBjaHVua0lkKSAmJiBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0pIHtcblx0XHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXVswXSgpO1xuXHRcdH1cblx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPSAwO1xuXHR9XG5cbn1cblxudmFyIGNodW5rTG9hZGluZ0dsb2JhbCA9IHNlbGZbXCJ3ZWJwYWNrQ2h1bmtyZXN0YXVyYW50cGFnZVwiXSA9IHNlbGZbXCJ3ZWJwYWNrQ2h1bmtyZXN0YXVyYW50cGFnZVwiXSB8fCBbXTtcbmNodW5rTG9hZGluZ0dsb2JhbC5mb3JFYWNoKHdlYnBhY2tKc29ucENhbGxiYWNrLmJpbmQobnVsbCwgMCkpO1xuY2h1bmtMb2FkaW5nR2xvYmFsLnB1c2ggPSB3ZWJwYWNrSnNvbnBDYWxsYmFjay5iaW5kKG51bGwsIGNodW5rTG9hZGluZ0dsb2JhbC5wdXNoLmJpbmQoY2h1bmtMb2FkaW5nR2xvYmFsKSk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgJy4vc3R5bGUuY3NzJztcbmltcG9ydCBsb2FkIGZyb20gJy4vbG9hZFBhZ2UuanMnXG5pbXBvcnQgbG9hZFRhYiBmcm9tICcuL2xvYWRUYWIuanMnO1xuXG4vLyBUYWIgdHJhY2tlclxubGV0IGN1cnJlbnRUYWIgPSAxO1xuXG4vLyBDYWxsIGZvciBwYWdlIGxvYWRcbmxvYWQoKTtcblxuLy8gQWRkIGV2ZW50IGxpc3RlbmVyXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCd3aGVlbCcsIChlKSA9Plxue1xuICAgIGNvbnNvbGUubG9nKGUuZGVsdGFZKTtcbiAgICBpZihlLmRlbHRhWSA+IDAgJiYgY3VycmVudFRhYiAhPT0gMylcbiAgICB7XG4gICAgICAgIGN1cnJlbnRUYWIgKz0gMTtcbiAgICAgICAgbG9hZFRhYihjdXJyZW50VGFiKS50aGVuKCh0YWIpID0+IHN3aXRjaFRhYih0YWIsIGN1cnJlbnRUYWIgLSAyLCBjdXJyZW50VGFiIC0gMSkpO1xuICAgIH1cbiAgICBlbHNlIGlmKGUuZGVsdGFZIDwgMCAmJiBjdXJyZW50VGFiICE9PSAxKVxuICAgIHtcbiAgICAgICAgY3VycmVudFRhYiAtPSAxO1xuICAgICAgICBsb2FkVGFiKGN1cnJlbnRUYWIpLnRoZW4oKHRhYikgPT4gc3dpdGNoVGFiKHRhYiwgY3VycmVudFRhYiwgY3VycmVudFRhYiAtIDEpKTtcbiAgICB9XG59KVxuXG5cbi8vIFN3aXRjaGVzIGN1cnJlbnQgdGFiIHdpdGggdGhlIHBhcmFtZXRlciBnaXZlblxuZnVuY3Rpb24gc3dpdGNoVGFiKHRhYiwgb2xkUmFkaW8sIG5ld1JhZGlvKVxue1xuICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicmFkaW8tZGl2XCIpO1xuICAgIGRpdi5jaGlsZE5vZGVzW29sZFJhZGlvXS5jaGVja2VkID0gZmFsc2U7XG4gICAgZGl2LmNoaWxkTm9kZXNbbmV3UmFkaW9dLmNoZWNrZWQgPSB0cnVlO1xuICAgIGNvbnN0IG1haW4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1haW4tY29udGFpbmVyXCIpO1xuICAgIGxldCBvbGRUYWIgPSBtYWluLmNoaWxkTm9kZXNbMF07XG4gICAgb2xkVGFiLnJlcGxhY2VXaXRoKHRhYik7XG59Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9