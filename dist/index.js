/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

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
___CSS_LOADER_EXPORT___.push([module.id, "body{\n    background-color: lightgray;\n    height: 100vh;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    margin: 0px;\n}\n\n.main-header{\n    font-size: 4rem;\n    margin-top: 1rem;\n    margin-bottom: 2.5rem;\n}\n\n#content{\n    height: 78%;\n    width: 90%;\n    border: 3px solid darkgray;\n    border-radius: 10px;\n    display: grid;\n    grid-template-columns: 1fr 3fr;\n    grid-template-rows: 1fr;\n}\n\n.food-image{\n    max-height: 250px;\n    border-radius: 50px;\n    border: 2px solid lightcoral;\n}\n\n.tabs{\n    display: grid;\n    grid-template-rows: 1fr 1fr 1fr 3fr;\n    grid-template-columns: 1fr;\n    gap: 5px;\n    border-right: 3px solid darkgray;\n}\n\n.tab-button{\n    font-size: 3rem;\n    font-weight: bold;\n}\n\n.home-div{\n    padding: 0px 30px 30px 30px;\n    display: grid;\n    grid-template-rows: 1fr 2fr 2fr;\n    grid-template-columns: 30vw auto;\n    gap: 16px;\n    justify-items: center;\n    align-items: center;\n}\n\n.home-div img{\n    height: 100%;\n    max-height: 18vw;\n    border-radius: 15px;\n    border: 5px solid grey;\n}\n\n.home-div > p{\n    width: 90%;\n    font-size: 1.5rem;\n}\n\n.home-title, .menu-title, .contact-title{\n    grid-column: 1 / 3;\n    margin: 0;\n    font-size: 3rem;\n    font-weight: bold;\n}\n\n.hours-of-operations{\n    grid-column: 1 / 3;\n    width: 100%;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    gap: 5px;\n    align-self: start;\n    margin-top: 30px;\n}\n\n.hours-of-operations > h2{\n    font-size: 2rem;\n}\n\n.hours-of-operations > p{\n    margin-top: 0px;\n    margin-bottom: 0px;\n    font-size: 1.25rem;\n}\n\n.menu-div{\n    padding: 0px 30px 30px 30px;\n    display: grid;\n    grid-template-rows: 2fr 3fr 3fr 3fr;\n    grid-template-columns: 1fr;\n    grid-auto-rows: 3fr;\n    gap: 16px;\n    justify-items: center;\n    align-items: center;\n    overflow-y: scroll;\n    overflow-x: hidden;\n}\n\n.food-item{\n    display: flex;\n    grid-column: 1 / 3;\n    justify-content: space-evenly;\n    gap: 20px;\n    align-items: center;\n    width: 95%;\n}\n\n.food-item > img{\n    background-size:100% 100%;\n    height: 150px;\n    width: 150px;\n    min-width: 150px;\n    max-width: 150px;\n    min-height: 150px;\n    max-height: 150px;\n    border: 5px solid olivedrab;\n}\n\n.food-description{\n    margin-right: 50px;\n}\n\n.food-price{\n    font-size: 1.5rem;\n    font-weight: bold;\n}\n\nh2.menu-title, h2.contact-title{\n    margin: 30px 0px;\n}\n\n.contact-div{\n    padding: 0px 30px 30px 30px;\n    display: grid;\n    grid-template-rows: 1fr 4fr;\n    grid-template-columns: 1fr;\n    gap: 16px;\n    justify-items: center;\n    align-items: center;\n}\n\n.contact-form{\n    display: grid;\n    grid-template-columns: 1fr;\n    grid-template-rows: 100px 100px 100px 100px 50px;\n    height: 90%;\n    width: 60%;\n    align-self: flex-start;\n    border: 5px solid black;\n    padding: 20px;\n    font-weight: bold;\n}\n\n.form-row{\n    display: flex;\n    font-size: 2rem;\n    gap: 15px;\n    justify-content: center;\n    align-items: center;\n}\n\n.form-input > input{\n    height: 30px;\n    border-radius: 5px;\n    margin: 5px;\n}\n\n#email, #phone{\n    width: 370px;\n}\n\n.form-row > textarea{\n    height: 80%;\n    width: 350px;\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,2BAA2B;IAC3B,aAAa;IACb,aAAa;IACb,sBAAsB;IACtB,uBAAuB;IACvB,mBAAmB;IACnB,WAAW;AACf;;AAEA;IACI,eAAe;IACf,gBAAgB;IAChB,qBAAqB;AACzB;;AAEA;IACI,WAAW;IACX,UAAU;IACV,0BAA0B;IAC1B,mBAAmB;IACnB,aAAa;IACb,8BAA8B;IAC9B,uBAAuB;AAC3B;;AAEA;IACI,iBAAiB;IACjB,mBAAmB;IACnB,4BAA4B;AAChC;;AAEA;IACI,aAAa;IACb,mCAAmC;IACnC,0BAA0B;IAC1B,QAAQ;IACR,gCAAgC;AACpC;;AAEA;IACI,eAAe;IACf,iBAAiB;AACrB;;AAEA;IACI,2BAA2B;IAC3B,aAAa;IACb,+BAA+B;IAC/B,gCAAgC;IAChC,SAAS;IACT,qBAAqB;IACrB,mBAAmB;AACvB;;AAEA;IACI,YAAY;IACZ,gBAAgB;IAChB,mBAAmB;IACnB,sBAAsB;AAC1B;;AAEA;IACI,UAAU;IACV,iBAAiB;AACrB;;AAEA;IACI,kBAAkB;IAClB,SAAS;IACT,eAAe;IACf,iBAAiB;AACrB;;AAEA;IACI,kBAAkB;IAClB,WAAW;IACX,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,QAAQ;IACR,iBAAiB;IACjB,gBAAgB;AACpB;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI,eAAe;IACf,kBAAkB;IAClB,kBAAkB;AACtB;;AAEA;IACI,2BAA2B;IAC3B,aAAa;IACb,mCAAmC;IACnC,0BAA0B;IAC1B,mBAAmB;IACnB,SAAS;IACT,qBAAqB;IACrB,mBAAmB;IACnB,kBAAkB;IAClB,kBAAkB;AACtB;;AAEA;IACI,aAAa;IACb,kBAAkB;IAClB,6BAA6B;IAC7B,SAAS;IACT,mBAAmB;IACnB,UAAU;AACd;;AAEA;IACI,yBAAyB;IACzB,aAAa;IACb,YAAY;IACZ,gBAAgB;IAChB,gBAAgB;IAChB,iBAAiB;IACjB,iBAAiB;IACjB,2BAA2B;AAC/B;;AAEA;IACI,kBAAkB;AACtB;;AAEA;IACI,iBAAiB;IACjB,iBAAiB;AACrB;;AAEA;IACI,gBAAgB;AACpB;;AAEA;IACI,2BAA2B;IAC3B,aAAa;IACb,2BAA2B;IAC3B,0BAA0B;IAC1B,SAAS;IACT,qBAAqB;IACrB,mBAAmB;AACvB;;AAEA;IACI,aAAa;IACb,0BAA0B;IAC1B,gDAAgD;IAChD,WAAW;IACX,UAAU;IACV,sBAAsB;IACtB,uBAAuB;IACvB,aAAa;IACb,iBAAiB;AACrB;;AAEA;IACI,aAAa;IACb,eAAe;IACf,SAAS;IACT,uBAAuB;IACvB,mBAAmB;AACvB;;AAEA;IACI,YAAY;IACZ,kBAAkB;IAClB,WAAW;AACf;;AAEA;IACI,YAAY;AAChB;;AAEA;IACI,WAAW;IACX,YAAY;AAChB","sourcesContent":["body{\n    background-color: lightgray;\n    height: 100vh;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    margin: 0px;\n}\n\n.main-header{\n    font-size: 4rem;\n    margin-top: 1rem;\n    margin-bottom: 2.5rem;\n}\n\n#content{\n    height: 78%;\n    width: 90%;\n    border: 3px solid darkgray;\n    border-radius: 10px;\n    display: grid;\n    grid-template-columns: 1fr 3fr;\n    grid-template-rows: 1fr;\n}\n\n.food-image{\n    max-height: 250px;\n    border-radius: 50px;\n    border: 2px solid lightcoral;\n}\n\n.tabs{\n    display: grid;\n    grid-template-rows: 1fr 1fr 1fr 3fr;\n    grid-template-columns: 1fr;\n    gap: 5px;\n    border-right: 3px solid darkgray;\n}\n\n.tab-button{\n    font-size: 3rem;\n    font-weight: bold;\n}\n\n.home-div{\n    padding: 0px 30px 30px 30px;\n    display: grid;\n    grid-template-rows: 1fr 2fr 2fr;\n    grid-template-columns: 30vw auto;\n    gap: 16px;\n    justify-items: center;\n    align-items: center;\n}\n\n.home-div img{\n    height: 100%;\n    max-height: 18vw;\n    border-radius: 15px;\n    border: 5px solid grey;\n}\n\n.home-div > p{\n    width: 90%;\n    font-size: 1.5rem;\n}\n\n.home-title, .menu-title, .contact-title{\n    grid-column: 1 / 3;\n    margin: 0;\n    font-size: 3rem;\n    font-weight: bold;\n}\n\n.hours-of-operations{\n    grid-column: 1 / 3;\n    width: 100%;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    gap: 5px;\n    align-self: start;\n    margin-top: 30px;\n}\n\n.hours-of-operations > h2{\n    font-size: 2rem;\n}\n\n.hours-of-operations > p{\n    margin-top: 0px;\n    margin-bottom: 0px;\n    font-size: 1.25rem;\n}\n\n.menu-div{\n    padding: 0px 30px 30px 30px;\n    display: grid;\n    grid-template-rows: 2fr 3fr 3fr 3fr;\n    grid-template-columns: 1fr;\n    grid-auto-rows: 3fr;\n    gap: 16px;\n    justify-items: center;\n    align-items: center;\n    overflow-y: scroll;\n    overflow-x: hidden;\n}\n\n.food-item{\n    display: flex;\n    grid-column: 1 / 3;\n    justify-content: space-evenly;\n    gap: 20px;\n    align-items: center;\n    width: 95%;\n}\n\n.food-item > img{\n    background-size:100% 100%;\n    height: 150px;\n    width: 150px;\n    min-width: 150px;\n    max-width: 150px;\n    min-height: 150px;\n    max-height: 150px;\n    border: 5px solid olivedrab;\n}\n\n.food-description{\n    margin-right: 50px;\n}\n\n.food-price{\n    font-size: 1.5rem;\n    font-weight: bold;\n}\n\nh2.menu-title, h2.contact-title{\n    margin: 30px 0px;\n}\n\n.contact-div{\n    padding: 0px 30px 30px 30px;\n    display: grid;\n    grid-template-rows: 1fr 4fr;\n    grid-template-columns: 1fr;\n    gap: 16px;\n    justify-items: center;\n    align-items: center;\n}\n\n.contact-form{\n    display: grid;\n    grid-template-columns: 1fr;\n    grid-template-rows: 100px 100px 100px 100px 50px;\n    height: 90%;\n    width: 60%;\n    align-self: flex-start;\n    border: 5px solid black;\n    padding: 20px;\n    font-weight: bold;\n}\n\n.form-row{\n    display: flex;\n    font-size: 2rem;\n    gap: 15px;\n    justify-content: center;\n    align-items: center;\n}\n\n.form-input > input{\n    height: 30px;\n    border-radius: 5px;\n    margin: 5px;\n}\n\n#email, #phone{\n    width: 370px;\n}\n\n.form-row > textarea{\n    height: 80%;\n    width: 350px;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



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
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
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
  }

  // For old IE
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
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
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

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ designContact)
/* harmony export */ });
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.js */ "./src/index.js");


const main = document.querySelector('#content');


function designContact(){
    let contactDiv = (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.createElement)('div','contact-div','');
    contactDiv.appendChild((0,_index_js__WEBPACK_IMPORTED_MODULE_0__.createElement)('h2','contact-title','Make A Reservation!'));
    let contactForm = (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.createElement)('form','contact-form','');
    let formRowOne = (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.createElement)('div','form-row','');
    let firstNameInput = createFormElement('first-name','First Name','text','John');
    let lastNameInput = createFormElement('last-name','Last Name','text','Doe');
    formRowOne.appendChild(firstNameInput);
    formRowOne.appendChild(lastNameInput);
    contactForm.appendChild(formRowOne);

    let formRowTwo = (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.createElement)('div','form-row','');
    let emailInput = createFormElement('email','Email Address','email','example@example.com');
    formRowTwo.appendChild(emailInput);
    contactForm.appendChild(formRowTwo);

    let formRowThree = (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.createElement)('div','form-row','');
    let phoneInput = createFormElement('phone','Phone Number','tel','123-456-7890');
    formRowThree.appendChild(phoneInput);
    contactForm.appendChild(formRowThree);

    let reservationDiv = (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.createElement)('div','form-row','');
    let reservation = (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.createElement)('label','','Details About Reservation');
    let details = (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.createElement)('textarea','','');
    reservationDiv.appendChild(reservation);
    reservationDiv.appendChild(details);
    contactForm.appendChild(reservationDiv);

    contactForm.appendChild((0,_index_js__WEBPACK_IMPORTED_MODULE_0__.createElement)('button','','Submit Reservation'));

    contactDiv.appendChild(contactForm);
    main.appendChild(contactDiv);
}

function createFormElement(id,name,inputType,placeholder){
    let formInputDiv = (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.createElement)('div','form-input','');
    let formLabel = (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.createElement)('label','',name);
    formLabel.for = id;
    let formInput = (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.createElement)('input','','');
    formInput.id = id;
    formInput.type = inputType;
    formInput.placeholder = placeholder;
    formInputDiv.appendChild(formLabel);
    formInputDiv.appendChild(formInput);
    return formInputDiv;
}

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ designHome)
/* harmony export */ });
/* harmony import */ var _restaurant_jpeg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./restaurant.jpeg */ "./src/restaurant.jpeg");

const homeStringOne = 
    `Are you ready for the best Indian food of your life? There\'s no place like Ryan\'s Indian food. Freshly cooked just for you, we guarantee that your mouth will thank you
    and your stomach will be forever grateful. Look at the beautiful exterior of our restaurant. This place is to die for!`
const main = document.querySelector('#content');
const hoursOfBusiness = {
    'Monday - Friday': '11:30AM - 7PM',
    'Saturday': '3PM - 3AM',
    'Sunday':  '1PM - 9PM',
}


function designHome(){
    designHomeSummary()
    designHomeHours()
}

function designHomeHours(){
    const homeDiv = document.querySelector('.home-div');
    let hoursOfOperations = document.createElement('div');
    let hoursOfOperationHeader = document.createElement('h2');
    hoursOfOperationHeader.textContent = 'Hours of Operation';
    hoursOfOperations.appendChild(hoursOfOperationHeader);
    hoursOfOperations.classList.add('hours-of-operations');
    for (let days in hoursOfBusiness){
        let hoursRow = document.createElement('p');
        hoursRow.textContent = `${days}: ${hoursOfBusiness[days]}`;
        hoursOfOperations.appendChild(hoursRow);
    }
    homeDiv.appendChild(hoursOfOperations);

}


function designHomeSummary(){
    let homeDiv = document.createElement('div');
    homeDiv.classList.add('home-div');
    let homeTitle = document.createElement('h2');
    homeTitle.classList.add('home-title');
    homeTitle.textContent = 'Home of the Indian Food';
    homeDiv.appendChild(homeTitle);
    const restaurantPhotoVariable = new Image();
    restaurantPhotoVariable.src = _restaurant_jpeg__WEBPACK_IMPORTED_MODULE_0__;
    homeDiv.appendChild(restaurantPhotoVariable);
    let homeStringOneVariable = document.createElement('p');
    homeStringOneVariable.textContent = homeStringOne;
    homeDiv.appendChild(homeStringOneVariable);
    main.appendChild(homeDiv);
}

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createElement": () => (/* binding */ createElement)
/* harmony export */ });
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _init_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./init.js */ "./src/init.js");
/* harmony import */ var _home_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home.js */ "./src/home.js");
/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./menu.js */ "./src/menu.js");
/* harmony import */ var _contact_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./contact.js */ "./src/contact.js");







const main = document.querySelector('#content');


resetAndDesignTab(_home_js__WEBPACK_IMPORTED_MODULE_2__["default"])


window.resetAndDesignTab = resetAndDesignTab;
window.designMenuTab = _menu_js__WEBPACK_IMPORTED_MODULE_3__["default"];
window.designHomeTab = _home_js__WEBPACK_IMPORTED_MODULE_2__["default"];
window.createElement = createElement;



function resetAndDesignTab(createTabFunction){
    main.innerHTML = '';
    (0,_init_js__WEBPACK_IMPORTED_MODULE_1__["default"])();
    createTabFunction();
    const homeButton = document.querySelector('.home-tab');
    homeButton.addEventListener('click',()=>{resetAndDesignTab(_home_js__WEBPACK_IMPORTED_MODULE_2__["default"])});

    const menuButton = document.querySelector('.menu-tab');
    menuButton.addEventListener('click',()=>{resetAndDesignTab(_menu_js__WEBPACK_IMPORTED_MODULE_3__["default"])});

    const contactButton = document.querySelector('.contact-tab');
    contactButton.addEventListener('click',()=>{resetAndDesignTab(_contact_js__WEBPACK_IMPORTED_MODULE_4__["default"])});
}


function createElement(type, classes, text){
    let element = document.createElement(type);
    if (classes.length !== 0){
        typeof(classes) === 'object' ? element.classList.add(...classes) : element.classList.add(classes);
    }
    element.textContent = text;
    return element;
}

/***/ }),

/***/ "./src/init.js":
/*!*********************!*\
  !*** ./src/init.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ createTabs)
/* harmony export */ });
const main = document.querySelector('#content');
const buttonClasses = ['home-tab', 'menu-tab','contact-tab']
const buttonText = ['HOME', 'MENU', 'CONTACT US']

function createTabs() {
    let tabDiv = document.createElement('div');
    tabDiv.classList.add('tabs');
    for (let index in buttonClasses){
        const buttonToAdd = document.createElement('button');
        buttonToAdd.classList.add(buttonClasses[index]);
        buttonToAdd.classList.add('tab-button');
        buttonToAdd.textContent = buttonText[index];
        tabDiv.appendChild(buttonToAdd);
    }
    main.appendChild(tabDiv);
}


/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ designMenu)
/* harmony export */ });
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.js */ "./src/index.js");
/* harmony import */ var _paneer_masala_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./paneer-masala.jpg */ "./src/paneer-masala.jpg");
/* harmony import */ var _lamb_rogan_josh_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lamb-rogan-josh.jpg */ "./src/lamb-rogan-josh.jpg");
/* harmony import */ var _chicken_tikka_masala_jpeg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./chicken-tikka-masala.jpeg */ "./src/chicken-tikka-masala.jpeg");
/* harmony import */ var _chicken_saag_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./chicken-saag.jpg */ "./src/chicken-saag.jpg");
/* harmony import */ var _chicken_vindaloo_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./chicken-vindaloo.jpg */ "./src/chicken-vindaloo.jpg");








const main = document.querySelector('#content');


function designMenu(){
    let menuDiv = (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.createElement)('div','menu-div','');
    menuDiv.appendChild((0,_index_js__WEBPACK_IMPORTED_MODULE_0__.createElement)('h2',['menu-title'],'Indian Place Menu'));
    main.appendChild(menuDiv);
    menuDiv.appendChild(createFoodInMenu(_paneer_masala_jpg__WEBPACK_IMPORTED_MODULE_1__,'Paneer Masala','This freshly made paneer masala is made from the freshest cheese. Cooked in a spiced tomato sauce. Topped off with a cilantro garnish and creamy finish.','$10.99'));
    menuDiv.appendChild(createFoodInMenu(_lamb_rogan_josh_jpg__WEBPACK_IMPORTED_MODULE_2__, 'Lamb Rogan Rosh', 'This earthy dish is sizzling with flavor! Cooked with a variety of vegetables, this dish will bring a strong soothing aroma to any person who takes a bite out of this delicious meal.','$13.99'));
    menuDiv.appendChild(createFoodInMenu(_chicken_tikka_masala_jpeg__WEBPACK_IMPORTED_MODULE_3__,'Chicken Tikka Masala' ,'An indian classic! This tomato-based dish is spicy, creamy, and savory. Bold with flavor, this classic is the official dish of the United Kingdom. Find out why!','$12.99'));
    menuDiv.appendChild(createFoodInMenu(_chicken_saag_jpg__WEBPACK_IMPORTED_MODULE_4__,'Chicken Saag', 'Served with spinish and a variety of spices, this dish will take you by surprise by how delicious it is! This green creamy dish will appease any lover of greens!','$8.99'));
    menuDiv.appendChild(createFoodInMenu(_chicken_vindaloo_jpg__WEBPACK_IMPORTED_MODULE_5__,'Chicken Vindaloo','A spicy dish that is filled with taste, marinated for hours so the chicken can absorb all of the flavors. Try out this dish if you want a kick to your dinner!','$10.99'));

}


function createFoodInMenu(img, name, description, price ){
    let foodDiv = (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.createElement)('div','food-item','');
    let foodImage = new Image();
    foodImage.src = img;
    foodDiv.appendChild(foodImage);
    let foodDescriptionDiv = (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.createElement)('div','food-description-container','');
    foodDescriptionDiv.appendChild((0,_index_js__WEBPACK_IMPORTED_MODULE_0__.createElement)('h2','food-name', name));
    foodDescriptionDiv.appendChild((0,_index_js__WEBPACK_IMPORTED_MODULE_0__.createElement)('p','food-description',description));
    foodDiv.appendChild(foodDescriptionDiv);
    foodDiv.appendChild((0,_index_js__WEBPACK_IMPORTED_MODULE_0__.createElement)('p','food-price',price));
    return foodDiv;
}

/***/ }),

/***/ "./src/chicken-saag.jpg":
/*!******************************!*\
  !*** ./src/chicken-saag.jpg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "bf2d2451a50e0d0571b9.jpg";

/***/ }),

/***/ "./src/chicken-tikka-masala.jpeg":
/*!***************************************!*\
  !*** ./src/chicken-tikka-masala.jpeg ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "b4cdd3aded3f9242557d.jpeg";

/***/ }),

/***/ "./src/chicken-vindaloo.jpg":
/*!**********************************!*\
  !*** ./src/chicken-vindaloo.jpg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "dc653f6823e42c1d7341.jpg";

/***/ }),

/***/ "./src/lamb-rogan-josh.jpg":
/*!*********************************!*\
  !*** ./src/lamb-rogan-josh.jpg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "e4d1211be3f72b6f03f6.jpg";

/***/ }),

/***/ "./src/paneer-masala.jpg":
/*!*******************************!*\
  !*** ./src/paneer-masala.jpg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "ca8cc5eae6403b1ce791.jpg";

/***/ }),

/***/ "./src/restaurant.jpeg":
/*!*****************************!*\
  !*** ./src/restaurant.jpeg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "2ab5a001e4f319b0265e.jpeg";

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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0NmQTs7Ozs7VUVBQTtVQUNBO1VBQ0E7VUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvY29udGFjdC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaG9tZS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2luaXQuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL21lbnUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3N0YXJ0dXAiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcImJvZHl7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JheTtcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIG1hcmdpbjogMHB4O1xcbn1cXG5cXG4ubWFpbi1oZWFkZXJ7XFxuICAgIGZvbnQtc2l6ZTogNHJlbTtcXG4gICAgbWFyZ2luLXRvcDogMXJlbTtcXG4gICAgbWFyZ2luLWJvdHRvbTogMi41cmVtO1xcbn1cXG5cXG4jY29udGVudHtcXG4gICAgaGVpZ2h0OiA3OCU7XFxuICAgIHdpZHRoOiA5MCU7XFxuICAgIGJvcmRlcjogM3B4IHNvbGlkIGRhcmtncmF5O1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAzZnI7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyO1xcbn1cXG5cXG4uZm9vZC1pbWFnZXtcXG4gICAgbWF4LWhlaWdodDogMjUwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIGxpZ2h0Y29yYWw7XFxufVxcblxcbi50YWJze1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAxZnIgMWZyIDNmcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XFxuICAgIGdhcDogNXB4O1xcbiAgICBib3JkZXItcmlnaHQ6IDNweCBzb2xpZCBkYXJrZ3JheTtcXG59XFxuXFxuLnRhYi1idXR0b257XFxuICAgIGZvbnQtc2l6ZTogM3JlbTtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbi5ob21lLWRpdntcXG4gICAgcGFkZGluZzogMHB4IDMwcHggMzBweCAzMHB4O1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAyZnIgMmZyO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDMwdncgYXV0bztcXG4gICAgZ2FwOiAxNnB4O1xcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5ob21lLWRpdiBpbWd7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgbWF4LWhlaWdodDogMTh2dztcXG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcXG4gICAgYm9yZGVyOiA1cHggc29saWQgZ3JleTtcXG59XFxuXFxuLmhvbWUtZGl2ID4gcHtcXG4gICAgd2lkdGg6IDkwJTtcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxufVxcblxcbi5ob21lLXRpdGxlLCAubWVudS10aXRsZSwgLmNvbnRhY3QtdGl0bGV7XFxuICAgIGdyaWQtY29sdW1uOiAxIC8gMztcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBmb250LXNpemU6IDNyZW07XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG4uaG91cnMtb2Ytb3BlcmF0aW9uc3tcXG4gICAgZ3JpZC1jb2x1bW46IDEgLyAzO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiA1cHg7XFxuICAgIGFsaWduLXNlbGY6IHN0YXJ0O1xcbiAgICBtYXJnaW4tdG9wOiAzMHB4O1xcbn1cXG5cXG4uaG91cnMtb2Ytb3BlcmF0aW9ucyA+IGgye1xcbiAgICBmb250LXNpemU6IDJyZW07XFxufVxcblxcbi5ob3Vycy1vZi1vcGVyYXRpb25zID4gcHtcXG4gICAgbWFyZ2luLXRvcDogMHB4O1xcbiAgICBtYXJnaW4tYm90dG9tOiAwcHg7XFxuICAgIGZvbnQtc2l6ZTogMS4yNXJlbTtcXG59XFxuXFxuLm1lbnUtZGl2e1xcbiAgICBwYWRkaW5nOiAwcHggMzBweCAzMHB4IDMwcHg7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMmZyIDNmciAzZnIgM2ZyO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcXG4gICAgZ3JpZC1hdXRvLXJvd3M6IDNmcjtcXG4gICAgZ2FwOiAxNnB4O1xcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcXG4gICAgb3ZlcmZsb3cteDogaGlkZGVuO1xcbn1cXG5cXG4uZm9vZC1pdGVte1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBncmlkLWNvbHVtbjogMSAvIDM7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcbiAgICBnYXA6IDIwcHg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHdpZHRoOiA5NSU7XFxufVxcblxcbi5mb29kLWl0ZW0gPiBpbWd7XFxuICAgIGJhY2tncm91bmQtc2l6ZToxMDAlIDEwMCU7XFxuICAgIGhlaWdodDogMTUwcHg7XFxuICAgIHdpZHRoOiAxNTBweDtcXG4gICAgbWluLXdpZHRoOiAxNTBweDtcXG4gICAgbWF4LXdpZHRoOiAxNTBweDtcXG4gICAgbWluLWhlaWdodDogMTUwcHg7XFxuICAgIG1heC1oZWlnaHQ6IDE1MHB4O1xcbiAgICBib3JkZXI6IDVweCBzb2xpZCBvbGl2ZWRyYWI7XFxufVxcblxcbi5mb29kLWRlc2NyaXB0aW9ue1xcbiAgICBtYXJnaW4tcmlnaHQ6IDUwcHg7XFxufVxcblxcbi5mb29kLXByaWNle1xcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbmgyLm1lbnUtdGl0bGUsIGgyLmNvbnRhY3QtdGl0bGV7XFxuICAgIG1hcmdpbjogMzBweCAwcHg7XFxufVxcblxcbi5jb250YWN0LWRpdntcXG4gICAgcGFkZGluZzogMHB4IDMwcHggMzBweCAzMHB4O1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciA0ZnI7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xcbiAgICBnYXA6IDE2cHg7XFxuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmNvbnRhY3QtZm9ybXtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMTAwcHggMTAwcHggMTAwcHggMTAwcHggNTBweDtcXG4gICAgaGVpZ2h0OiA5MCU7XFxuICAgIHdpZHRoOiA2MCU7XFxuICAgIGFsaWduLXNlbGY6IGZsZXgtc3RhcnQ7XFxuICAgIGJvcmRlcjogNXB4IHNvbGlkIGJsYWNrO1xcbiAgICBwYWRkaW5nOiAyMHB4O1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuLmZvcm0tcm93e1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmb250LXNpemU6IDJyZW07XFxuICAgIGdhcDogMTVweDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5mb3JtLWlucHV0ID4gaW5wdXR7XFxuICAgIGhlaWdodDogMzBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBtYXJnaW46IDVweDtcXG59XFxuXFxuI2VtYWlsLCAjcGhvbmV7XFxuICAgIHdpZHRoOiAzNzBweDtcXG59XFxuXFxuLmZvcm0tcm93ID4gdGV4dGFyZWF7XFxuICAgIGhlaWdodDogODAlO1xcbiAgICB3aWR0aDogMzUwcHg7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSwyQkFBMkI7SUFDM0IsYUFBYTtJQUNiLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxVQUFVO0lBQ1YsMEJBQTBCO0lBQzFCLG1CQUFtQjtJQUNuQixhQUFhO0lBQ2IsOEJBQThCO0lBQzlCLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixtQkFBbUI7SUFDbkIsNEJBQTRCO0FBQ2hDOztBQUVBO0lBQ0ksYUFBYTtJQUNiLG1DQUFtQztJQUNuQywwQkFBMEI7SUFDMUIsUUFBUTtJQUNSLGdDQUFnQztBQUNwQzs7QUFFQTtJQUNJLGVBQWU7SUFDZixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSwyQkFBMkI7SUFDM0IsYUFBYTtJQUNiLCtCQUErQjtJQUMvQixnQ0FBZ0M7SUFDaEMsU0FBUztJQUNULHFCQUFxQjtJQUNyQixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLG1CQUFtQjtJQUNuQixzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxVQUFVO0lBQ1YsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFNBQVM7SUFDVCxlQUFlO0lBQ2YsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLG1CQUFtQjtJQUNuQixRQUFRO0lBQ1IsaUJBQWlCO0lBQ2pCLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLDJCQUEyQjtJQUMzQixhQUFhO0lBQ2IsbUNBQW1DO0lBQ25DLDBCQUEwQjtJQUMxQixtQkFBbUI7SUFDbkIsU0FBUztJQUNULHFCQUFxQjtJQUNyQixtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIsNkJBQTZCO0lBQzdCLFNBQVM7SUFDVCxtQkFBbUI7SUFDbkIsVUFBVTtBQUNkOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLGFBQWE7SUFDYixZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIsaUJBQWlCO0lBQ2pCLDJCQUEyQjtBQUMvQjs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSwyQkFBMkI7SUFDM0IsYUFBYTtJQUNiLDJCQUEyQjtJQUMzQiwwQkFBMEI7SUFDMUIsU0FBUztJQUNULHFCQUFxQjtJQUNyQixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsMEJBQTBCO0lBQzFCLGdEQUFnRDtJQUNoRCxXQUFXO0lBQ1gsVUFBVTtJQUNWLHNCQUFzQjtJQUN0Qix1QkFBdUI7SUFDdkIsYUFBYTtJQUNiLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixlQUFlO0lBQ2YsU0FBUztJQUNULHVCQUF1QjtJQUN2QixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLFdBQVc7QUFDZjs7QUFFQTtJQUNJLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtBQUNoQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJib2R5e1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyYXk7XFxuICAgIGhlaWdodDogMTAwdmg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBtYXJnaW46IDBweDtcXG59XFxuXFxuLm1haW4taGVhZGVye1xcbiAgICBmb250LXNpemU6IDRyZW07XFxuICAgIG1hcmdpbi10b3A6IDFyZW07XFxuICAgIG1hcmdpbi1ib3R0b206IDIuNXJlbTtcXG59XFxuXFxuI2NvbnRlbnR7XFxuICAgIGhlaWdodDogNzglO1xcbiAgICB3aWR0aDogOTAlO1xcbiAgICBib3JkZXI6IDNweCBzb2xpZCBkYXJrZ3JheTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgM2ZyO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmcjtcXG59XFxuXFxuLmZvb2QtaW1hZ2V7XFxuICAgIG1heC1oZWlnaHQ6IDI1MHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCBsaWdodGNvcmFsO1xcbn1cXG5cXG4udGFic3tcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMWZyIDFmciAzZnI7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xcbiAgICBnYXA6IDVweDtcXG4gICAgYm9yZGVyLXJpZ2h0OiAzcHggc29saWQgZGFya2dyYXk7XFxufVxcblxcbi50YWItYnV0dG9ue1xcbiAgICBmb250LXNpemU6IDNyZW07XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG4uaG9tZS1kaXZ7XFxuICAgIHBhZGRpbmc6IDBweCAzMHB4IDMwcHggMzBweDtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMmZyIDJmcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAzMHZ3IGF1dG87XFxuICAgIGdhcDogMTZweDtcXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uaG9tZS1kaXYgaW1ne1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIG1heC1oZWlnaHQ6IDE4dnc7XFxuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XFxuICAgIGJvcmRlcjogNXB4IHNvbGlkIGdyZXk7XFxufVxcblxcbi5ob21lLWRpdiA+IHB7XFxuICAgIHdpZHRoOiA5MCU7XFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcbn1cXG5cXG4uaG9tZS10aXRsZSwgLm1lbnUtdGl0bGUsIC5jb250YWN0LXRpdGxle1xcbiAgICBncmlkLWNvbHVtbjogMSAvIDM7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgZm9udC1zaXplOiAzcmVtO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuLmhvdXJzLW9mLW9wZXJhdGlvbnN7XFxuICAgIGdyaWQtY29sdW1uOiAxIC8gMztcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogNXB4O1xcbiAgICBhbGlnbi1zZWxmOiBzdGFydDtcXG4gICAgbWFyZ2luLXRvcDogMzBweDtcXG59XFxuXFxuLmhvdXJzLW9mLW9wZXJhdGlvbnMgPiBoMntcXG4gICAgZm9udC1zaXplOiAycmVtO1xcbn1cXG5cXG4uaG91cnMtb2Ytb3BlcmF0aW9ucyA+IHB7XFxuICAgIG1hcmdpbi10b3A6IDBweDtcXG4gICAgbWFyZ2luLWJvdHRvbTogMHB4O1xcbiAgICBmb250LXNpemU6IDEuMjVyZW07XFxufVxcblxcbi5tZW51LWRpdntcXG4gICAgcGFkZGluZzogMHB4IDMwcHggMzBweCAzMHB4O1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDJmciAzZnIgM2ZyIDNmcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XFxuICAgIGdyaWQtYXV0by1yb3dzOiAzZnI7XFxuICAgIGdhcDogMTZweDtcXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBvdmVyZmxvdy15OiBzY3JvbGw7XFxuICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcXG59XFxuXFxuLmZvb2QtaXRlbXtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ3JpZC1jb2x1bW46IDEgLyAzO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXG4gICAgZ2FwOiAyMHB4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICB3aWR0aDogOTUlO1xcbn1cXG5cXG4uZm9vZC1pdGVtID4gaW1ne1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6MTAwJSAxMDAlO1xcbiAgICBoZWlnaHQ6IDE1MHB4O1xcbiAgICB3aWR0aDogMTUwcHg7XFxuICAgIG1pbi13aWR0aDogMTUwcHg7XFxuICAgIG1heC13aWR0aDogMTUwcHg7XFxuICAgIG1pbi1oZWlnaHQ6IDE1MHB4O1xcbiAgICBtYXgtaGVpZ2h0OiAxNTBweDtcXG4gICAgYm9yZGVyOiA1cHggc29saWQgb2xpdmVkcmFiO1xcbn1cXG5cXG4uZm9vZC1kZXNjcmlwdGlvbntcXG4gICAgbWFyZ2luLXJpZ2h0OiA1MHB4O1xcbn1cXG5cXG4uZm9vZC1wcmljZXtcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG5oMi5tZW51LXRpdGxlLCBoMi5jb250YWN0LXRpdGxle1xcbiAgICBtYXJnaW46IDMwcHggMHB4O1xcbn1cXG5cXG4uY29udGFjdC1kaXZ7XFxuICAgIHBhZGRpbmc6IDBweCAzMHB4IDMwcHggMzBweDtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgNGZyO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcXG4gICAgZ2FwOiAxNnB4O1xcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5jb250YWN0LWZvcm17XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDEwMHB4IDEwMHB4IDEwMHB4IDEwMHB4IDUwcHg7XFxuICAgIGhlaWdodDogOTAlO1xcbiAgICB3aWR0aDogNjAlO1xcbiAgICBhbGlnbi1zZWxmOiBmbGV4LXN0YXJ0O1xcbiAgICBib3JkZXI6IDVweCBzb2xpZCBibGFjaztcXG4gICAgcGFkZGluZzogMjBweDtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbi5mb3JtLXJvd3tcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZm9udC1zaXplOiAycmVtO1xcbiAgICBnYXA6IDE1cHg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uZm9ybS1pbnB1dCA+IGlucHV0e1xcbiAgICBoZWlnaHQ6IDMwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgbWFyZ2luOiA1cHg7XFxufVxcblxcbiNlbWFpbCwgI3Bob25le1xcbiAgICB3aWR0aDogMzcwcHg7XFxufVxcblxcbi5mb3JtLXJvdyA+IHRleHRhcmVhe1xcbiAgICBoZWlnaHQ6IDgwJTtcXG4gICAgd2lkdGg6IDM1MHB4O1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IHsgY3JlYXRlRWxlbWVudCB9IGZyb20gXCIuL2luZGV4LmpzXCI7XG5cbmNvbnN0IG1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29udGVudCcpO1xuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGRlc2lnbkNvbnRhY3QoKXtcbiAgICBsZXQgY29udGFjdERpdiA9IGNyZWF0ZUVsZW1lbnQoJ2RpdicsJ2NvbnRhY3QtZGl2JywnJyk7XG4gICAgY29udGFjdERpdi5hcHBlbmRDaGlsZChjcmVhdGVFbGVtZW50KCdoMicsJ2NvbnRhY3QtdGl0bGUnLCdNYWtlIEEgUmVzZXJ2YXRpb24hJykpO1xuICAgIGxldCBjb250YWN0Rm9ybSA9IGNyZWF0ZUVsZW1lbnQoJ2Zvcm0nLCdjb250YWN0LWZvcm0nLCcnKTtcbiAgICBsZXQgZm9ybVJvd09uZSA9IGNyZWF0ZUVsZW1lbnQoJ2RpdicsJ2Zvcm0tcm93JywnJyk7XG4gICAgbGV0IGZpcnN0TmFtZUlucHV0ID0gY3JlYXRlRm9ybUVsZW1lbnQoJ2ZpcnN0LW5hbWUnLCdGaXJzdCBOYW1lJywndGV4dCcsJ0pvaG4nKTtcbiAgICBsZXQgbGFzdE5hbWVJbnB1dCA9IGNyZWF0ZUZvcm1FbGVtZW50KCdsYXN0LW5hbWUnLCdMYXN0IE5hbWUnLCd0ZXh0JywnRG9lJyk7XG4gICAgZm9ybVJvd09uZS5hcHBlbmRDaGlsZChmaXJzdE5hbWVJbnB1dCk7XG4gICAgZm9ybVJvd09uZS5hcHBlbmRDaGlsZChsYXN0TmFtZUlucHV0KTtcbiAgICBjb250YWN0Rm9ybS5hcHBlbmRDaGlsZChmb3JtUm93T25lKTtcblxuICAgIGxldCBmb3JtUm93VHdvID0gY3JlYXRlRWxlbWVudCgnZGl2JywnZm9ybS1yb3cnLCcnKTtcbiAgICBsZXQgZW1haWxJbnB1dCA9IGNyZWF0ZUZvcm1FbGVtZW50KCdlbWFpbCcsJ0VtYWlsIEFkZHJlc3MnLCdlbWFpbCcsJ2V4YW1wbGVAZXhhbXBsZS5jb20nKTtcbiAgICBmb3JtUm93VHdvLmFwcGVuZENoaWxkKGVtYWlsSW5wdXQpO1xuICAgIGNvbnRhY3RGb3JtLmFwcGVuZENoaWxkKGZvcm1Sb3dUd28pO1xuXG4gICAgbGV0IGZvcm1Sb3dUaHJlZSA9IGNyZWF0ZUVsZW1lbnQoJ2RpdicsJ2Zvcm0tcm93JywnJyk7XG4gICAgbGV0IHBob25lSW5wdXQgPSBjcmVhdGVGb3JtRWxlbWVudCgncGhvbmUnLCdQaG9uZSBOdW1iZXInLCd0ZWwnLCcxMjMtNDU2LTc4OTAnKTtcbiAgICBmb3JtUm93VGhyZWUuYXBwZW5kQ2hpbGQocGhvbmVJbnB1dCk7XG4gICAgY29udGFjdEZvcm0uYXBwZW5kQ2hpbGQoZm9ybVJvd1RocmVlKTtcblxuICAgIGxldCByZXNlcnZhdGlvbkRpdiA9IGNyZWF0ZUVsZW1lbnQoJ2RpdicsJ2Zvcm0tcm93JywnJyk7XG4gICAgbGV0IHJlc2VydmF0aW9uID0gY3JlYXRlRWxlbWVudCgnbGFiZWwnLCcnLCdEZXRhaWxzIEFib3V0IFJlc2VydmF0aW9uJyk7XG4gICAgbGV0IGRldGFpbHMgPSBjcmVhdGVFbGVtZW50KCd0ZXh0YXJlYScsJycsJycpO1xuICAgIHJlc2VydmF0aW9uRGl2LmFwcGVuZENoaWxkKHJlc2VydmF0aW9uKTtcbiAgICByZXNlcnZhdGlvbkRpdi5hcHBlbmRDaGlsZChkZXRhaWxzKTtcbiAgICBjb250YWN0Rm9ybS5hcHBlbmRDaGlsZChyZXNlcnZhdGlvbkRpdik7XG5cbiAgICBjb250YWN0Rm9ybS5hcHBlbmRDaGlsZChjcmVhdGVFbGVtZW50KCdidXR0b24nLCcnLCdTdWJtaXQgUmVzZXJ2YXRpb24nKSk7XG5cbiAgICBjb250YWN0RGl2LmFwcGVuZENoaWxkKGNvbnRhY3RGb3JtKTtcbiAgICBtYWluLmFwcGVuZENoaWxkKGNvbnRhY3REaXYpO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVGb3JtRWxlbWVudChpZCxuYW1lLGlucHV0VHlwZSxwbGFjZWhvbGRlcil7XG4gICAgbGV0IGZvcm1JbnB1dERpdiA9IGNyZWF0ZUVsZW1lbnQoJ2RpdicsJ2Zvcm0taW5wdXQnLCcnKTtcbiAgICBsZXQgZm9ybUxhYmVsID0gY3JlYXRlRWxlbWVudCgnbGFiZWwnLCcnLG5hbWUpO1xuICAgIGZvcm1MYWJlbC5mb3IgPSBpZDtcbiAgICBsZXQgZm9ybUlucHV0ID0gY3JlYXRlRWxlbWVudCgnaW5wdXQnLCcnLCcnKTtcbiAgICBmb3JtSW5wdXQuaWQgPSBpZDtcbiAgICBmb3JtSW5wdXQudHlwZSA9IGlucHV0VHlwZTtcbiAgICBmb3JtSW5wdXQucGxhY2Vob2xkZXIgPSBwbGFjZWhvbGRlcjtcbiAgICBmb3JtSW5wdXREaXYuYXBwZW5kQ2hpbGQoZm9ybUxhYmVsKTtcbiAgICBmb3JtSW5wdXREaXYuYXBwZW5kQ2hpbGQoZm9ybUlucHV0KTtcbiAgICByZXR1cm4gZm9ybUlucHV0RGl2O1xufSIsImltcG9ydCByZXN0YXVyYW50UGhvdG8gZnJvbSAnLi9yZXN0YXVyYW50LmpwZWcnXG5jb25zdCBob21lU3RyaW5nT25lID0gXG4gICAgYEFyZSB5b3UgcmVhZHkgZm9yIHRoZSBiZXN0IEluZGlhbiBmb29kIG9mIHlvdXIgbGlmZT8gVGhlcmVcXCdzIG5vIHBsYWNlIGxpa2UgUnlhblxcJ3MgSW5kaWFuIGZvb2QuIEZyZXNobHkgY29va2VkIGp1c3QgZm9yIHlvdSwgd2UgZ3VhcmFudGVlIHRoYXQgeW91ciBtb3V0aCB3aWxsIHRoYW5rIHlvdVxuICAgIGFuZCB5b3VyIHN0b21hY2ggd2lsbCBiZSBmb3JldmVyIGdyYXRlZnVsLiBMb29rIGF0IHRoZSBiZWF1dGlmdWwgZXh0ZXJpb3Igb2Ygb3VyIHJlc3RhdXJhbnQuIFRoaXMgcGxhY2UgaXMgdG8gZGllIGZvciFgXG5jb25zdCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRlbnQnKTtcbmNvbnN0IGhvdXJzT2ZCdXNpbmVzcyA9IHtcbiAgICAnTW9uZGF5IC0gRnJpZGF5JzogJzExOjMwQU0gLSA3UE0nLFxuICAgICdTYXR1cmRheSc6ICczUE0gLSAzQU0nLFxuICAgICdTdW5kYXknOiAgJzFQTSAtIDlQTScsXG59XG5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZGVzaWduSG9tZSgpe1xuICAgIGRlc2lnbkhvbWVTdW1tYXJ5KClcbiAgICBkZXNpZ25Ib21lSG91cnMoKVxufVxuXG5mdW5jdGlvbiBkZXNpZ25Ib21lSG91cnMoKXtcbiAgICBjb25zdCBob21lRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhvbWUtZGl2Jyk7XG4gICAgbGV0IGhvdXJzT2ZPcGVyYXRpb25zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbGV0IGhvdXJzT2ZPcGVyYXRpb25IZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICAgIGhvdXJzT2ZPcGVyYXRpb25IZWFkZXIudGV4dENvbnRlbnQgPSAnSG91cnMgb2YgT3BlcmF0aW9uJztcbiAgICBob3Vyc09mT3BlcmF0aW9ucy5hcHBlbmRDaGlsZChob3Vyc09mT3BlcmF0aW9uSGVhZGVyKTtcbiAgICBob3Vyc09mT3BlcmF0aW9ucy5jbGFzc0xpc3QuYWRkKCdob3Vycy1vZi1vcGVyYXRpb25zJyk7XG4gICAgZm9yIChsZXQgZGF5cyBpbiBob3Vyc09mQnVzaW5lc3Mpe1xuICAgICAgICBsZXQgaG91cnNSb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgIGhvdXJzUm93LnRleHRDb250ZW50ID0gYCR7ZGF5c306ICR7aG91cnNPZkJ1c2luZXNzW2RheXNdfWA7XG4gICAgICAgIGhvdXJzT2ZPcGVyYXRpb25zLmFwcGVuZENoaWxkKGhvdXJzUm93KTtcbiAgICB9XG4gICAgaG9tZURpdi5hcHBlbmRDaGlsZChob3Vyc09mT3BlcmF0aW9ucyk7XG5cbn1cblxuXG5mdW5jdGlvbiBkZXNpZ25Ib21lU3VtbWFyeSgpe1xuICAgIGxldCBob21lRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgaG9tZURpdi5jbGFzc0xpc3QuYWRkKCdob21lLWRpdicpO1xuICAgIGxldCBob21lVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICAgIGhvbWVUaXRsZS5jbGFzc0xpc3QuYWRkKCdob21lLXRpdGxlJyk7XG4gICAgaG9tZVRpdGxlLnRleHRDb250ZW50ID0gJ0hvbWUgb2YgdGhlIEluZGlhbiBGb29kJztcbiAgICBob21lRGl2LmFwcGVuZENoaWxkKGhvbWVUaXRsZSk7XG4gICAgY29uc3QgcmVzdGF1cmFudFBob3RvVmFyaWFibGUgPSBuZXcgSW1hZ2UoKTtcbiAgICByZXN0YXVyYW50UGhvdG9WYXJpYWJsZS5zcmMgPSByZXN0YXVyYW50UGhvdG87XG4gICAgaG9tZURpdi5hcHBlbmRDaGlsZChyZXN0YXVyYW50UGhvdG9WYXJpYWJsZSk7XG4gICAgbGV0IGhvbWVTdHJpbmdPbmVWYXJpYWJsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBob21lU3RyaW5nT25lVmFyaWFibGUudGV4dENvbnRlbnQgPSBob21lU3RyaW5nT25lO1xuICAgIGhvbWVEaXYuYXBwZW5kQ2hpbGQoaG9tZVN0cmluZ09uZVZhcmlhYmxlKTtcbiAgICBtYWluLmFwcGVuZENoaWxkKGhvbWVEaXYpO1xufSIsImltcG9ydCAnLi9zdHlsZS5jc3MnO1xuaW1wb3J0IGNyZWF0ZVRhYnMgZnJvbSAnLi9pbml0LmpzJztcbmltcG9ydCBkZXNpZ25Ib21lVGFiIGZyb20gJy4vaG9tZS5qcyc7XG5pbXBvcnQgZGVzaWduTWVudVRhYiBmcm9tICcuL21lbnUuanMnO1xuaW1wb3J0IGRlc2lnbkNvbnRhY3RUYWIgZnJvbSAnLi9jb250YWN0LmpzJztcblxuXG5jb25zdCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRlbnQnKTtcblxuXG5yZXNldEFuZERlc2lnblRhYihkZXNpZ25Ib21lVGFiKVxuXG5cbndpbmRvdy5yZXNldEFuZERlc2lnblRhYiA9IHJlc2V0QW5kRGVzaWduVGFiO1xud2luZG93LmRlc2lnbk1lbnVUYWIgPSBkZXNpZ25NZW51VGFiO1xud2luZG93LmRlc2lnbkhvbWVUYWIgPSBkZXNpZ25Ib21lVGFiO1xud2luZG93LmNyZWF0ZUVsZW1lbnQgPSBjcmVhdGVFbGVtZW50O1xuXG5cblxuZnVuY3Rpb24gcmVzZXRBbmREZXNpZ25UYWIoY3JlYXRlVGFiRnVuY3Rpb24pe1xuICAgIG1haW4uaW5uZXJIVE1MID0gJyc7XG4gICAgY3JlYXRlVGFicygpO1xuICAgIGNyZWF0ZVRhYkZ1bmN0aW9uKCk7XG4gICAgY29uc3QgaG9tZUJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ob21lLXRhYicpO1xuICAgIGhvbWVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCgpPT57cmVzZXRBbmREZXNpZ25UYWIoZGVzaWduSG9tZVRhYil9KTtcblxuICAgIGNvbnN0IG1lbnVCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWVudS10YWInKTtcbiAgICBtZW51QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywoKT0+e3Jlc2V0QW5kRGVzaWduVGFiKGRlc2lnbk1lbnVUYWIpfSk7XG5cbiAgICBjb25zdCBjb250YWN0QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRhY3QtdGFiJyk7XG4gICAgY29udGFjdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsKCk9PntyZXNldEFuZERlc2lnblRhYihkZXNpZ25Db250YWN0VGFiKX0pO1xufVxuXG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVFbGVtZW50KHR5cGUsIGNsYXNzZXMsIHRleHQpe1xuICAgIGxldCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0eXBlKTtcbiAgICBpZiAoY2xhc3Nlcy5sZW5ndGggIT09IDApe1xuICAgICAgICB0eXBlb2YoY2xhc3NlcykgPT09ICdvYmplY3QnID8gZWxlbWVudC5jbGFzc0xpc3QuYWRkKC4uLmNsYXNzZXMpIDogZWxlbWVudC5jbGFzc0xpc3QuYWRkKGNsYXNzZXMpO1xuICAgIH1cbiAgICBlbGVtZW50LnRleHRDb250ZW50ID0gdGV4dDtcbiAgICByZXR1cm4gZWxlbWVudDtcbn0iLCJjb25zdCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRlbnQnKTtcbmNvbnN0IGJ1dHRvbkNsYXNzZXMgPSBbJ2hvbWUtdGFiJywgJ21lbnUtdGFiJywnY29udGFjdC10YWInXVxuY29uc3QgYnV0dG9uVGV4dCA9IFsnSE9NRScsICdNRU5VJywgJ0NPTlRBQ1QgVVMnXVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjcmVhdGVUYWJzKCkge1xuICAgIGxldCB0YWJEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB0YWJEaXYuY2xhc3NMaXN0LmFkZCgndGFicycpO1xuICAgIGZvciAobGV0IGluZGV4IGluIGJ1dHRvbkNsYXNzZXMpe1xuICAgICAgICBjb25zdCBidXR0b25Ub0FkZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICBidXR0b25Ub0FkZC5jbGFzc0xpc3QuYWRkKGJ1dHRvbkNsYXNzZXNbaW5kZXhdKTtcbiAgICAgICAgYnV0dG9uVG9BZGQuY2xhc3NMaXN0LmFkZCgndGFiLWJ1dHRvbicpO1xuICAgICAgICBidXR0b25Ub0FkZC50ZXh0Q29udGVudCA9IGJ1dHRvblRleHRbaW5kZXhdO1xuICAgICAgICB0YWJEaXYuYXBwZW5kQ2hpbGQoYnV0dG9uVG9BZGQpO1xuICAgIH1cbiAgICBtYWluLmFwcGVuZENoaWxkKHRhYkRpdik7XG59XG4iLCJpbXBvcnQgeyBjcmVhdGVFbGVtZW50IH0gZnJvbSBcIi4vaW5kZXguanNcIjtcbmltcG9ydCBwYW5lZXJJbWFnZSBmcm9tICcuL3BhbmVlci1tYXNhbGEuanBnJztcbmltcG9ydCBsYW1iUm9nYW5Kb3NoSW1hZ2UgZnJvbSAnLi9sYW1iLXJvZ2FuLWpvc2guanBnJztcbmltcG9ydCBjaGlja2VuVGlra2FNYXNhbGFJbWFnZSBmcm9tICcuL2NoaWNrZW4tdGlra2EtbWFzYWxhLmpwZWcnO1xuaW1wb3J0IGNoaWNrZW5TYWFnSW1hZ2UgZnJvbSAnLi9jaGlja2VuLXNhYWcuanBnJztcbmltcG9ydCBjaGlja2VuVmluZGFsb29JbWFnZSBmcm9tICcuL2NoaWNrZW4tdmluZGFsb28uanBnJztcblxuXG5jb25zdCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRlbnQnKTtcblxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBkZXNpZ25NZW51KCl7XG4gICAgbGV0IG1lbnVEaXYgPSBjcmVhdGVFbGVtZW50KCdkaXYnLCdtZW51LWRpdicsJycpO1xuICAgIG1lbnVEaXYuYXBwZW5kQ2hpbGQoY3JlYXRlRWxlbWVudCgnaDInLFsnbWVudS10aXRsZSddLCdJbmRpYW4gUGxhY2UgTWVudScpKTtcbiAgICBtYWluLmFwcGVuZENoaWxkKG1lbnVEaXYpO1xuICAgIG1lbnVEaXYuYXBwZW5kQ2hpbGQoY3JlYXRlRm9vZEluTWVudShwYW5lZXJJbWFnZSwnUGFuZWVyIE1hc2FsYScsJ1RoaXMgZnJlc2hseSBtYWRlIHBhbmVlciBtYXNhbGEgaXMgbWFkZSBmcm9tIHRoZSBmcmVzaGVzdCBjaGVlc2UuIENvb2tlZCBpbiBhIHNwaWNlZCB0b21hdG8gc2F1Y2UuIFRvcHBlZCBvZmYgd2l0aCBhIGNpbGFudHJvIGdhcm5pc2ggYW5kIGNyZWFteSBmaW5pc2guJywnJDEwLjk5JykpO1xuICAgIG1lbnVEaXYuYXBwZW5kQ2hpbGQoY3JlYXRlRm9vZEluTWVudShsYW1iUm9nYW5Kb3NoSW1hZ2UsICdMYW1iIFJvZ2FuIFJvc2gnLCAnVGhpcyBlYXJ0aHkgZGlzaCBpcyBzaXp6bGluZyB3aXRoIGZsYXZvciEgQ29va2VkIHdpdGggYSB2YXJpZXR5IG9mIHZlZ2V0YWJsZXMsIHRoaXMgZGlzaCB3aWxsIGJyaW5nIGEgc3Ryb25nIHNvb3RoaW5nIGFyb21hIHRvIGFueSBwZXJzb24gd2hvIHRha2VzIGEgYml0ZSBvdXQgb2YgdGhpcyBkZWxpY2lvdXMgbWVhbC4nLCckMTMuOTknKSk7XG4gICAgbWVudURpdi5hcHBlbmRDaGlsZChjcmVhdGVGb29kSW5NZW51KGNoaWNrZW5UaWtrYU1hc2FsYUltYWdlLCdDaGlja2VuIFRpa2thIE1hc2FsYScgLCdBbiBpbmRpYW4gY2xhc3NpYyEgVGhpcyB0b21hdG8tYmFzZWQgZGlzaCBpcyBzcGljeSwgY3JlYW15LCBhbmQgc2F2b3J5LiBCb2xkIHdpdGggZmxhdm9yLCB0aGlzIGNsYXNzaWMgaXMgdGhlIG9mZmljaWFsIGRpc2ggb2YgdGhlIFVuaXRlZCBLaW5nZG9tLiBGaW5kIG91dCB3aHkhJywnJDEyLjk5JykpO1xuICAgIG1lbnVEaXYuYXBwZW5kQ2hpbGQoY3JlYXRlRm9vZEluTWVudShjaGlja2VuU2FhZ0ltYWdlLCdDaGlja2VuIFNhYWcnLCAnU2VydmVkIHdpdGggc3BpbmlzaCBhbmQgYSB2YXJpZXR5IG9mIHNwaWNlcywgdGhpcyBkaXNoIHdpbGwgdGFrZSB5b3UgYnkgc3VycHJpc2UgYnkgaG93IGRlbGljaW91cyBpdCBpcyEgVGhpcyBncmVlbiBjcmVhbXkgZGlzaCB3aWxsIGFwcGVhc2UgYW55IGxvdmVyIG9mIGdyZWVucyEnLCckOC45OScpKTtcbiAgICBtZW51RGl2LmFwcGVuZENoaWxkKGNyZWF0ZUZvb2RJbk1lbnUoY2hpY2tlblZpbmRhbG9vSW1hZ2UsJ0NoaWNrZW4gVmluZGFsb28nLCdBIHNwaWN5IGRpc2ggdGhhdCBpcyBmaWxsZWQgd2l0aCB0YXN0ZSwgbWFyaW5hdGVkIGZvciBob3VycyBzbyB0aGUgY2hpY2tlbiBjYW4gYWJzb3JiIGFsbCBvZiB0aGUgZmxhdm9ycy4gVHJ5IG91dCB0aGlzIGRpc2ggaWYgeW91IHdhbnQgYSBraWNrIHRvIHlvdXIgZGlubmVyIScsJyQxMC45OScpKTtcblxufVxuXG5cbmZ1bmN0aW9uIGNyZWF0ZUZvb2RJbk1lbnUoaW1nLCBuYW1lLCBkZXNjcmlwdGlvbiwgcHJpY2UgKXtcbiAgICBsZXQgZm9vZERpdiA9IGNyZWF0ZUVsZW1lbnQoJ2RpdicsJ2Zvb2QtaXRlbScsJycpO1xuICAgIGxldCBmb29kSW1hZ2UgPSBuZXcgSW1hZ2UoKTtcbiAgICBmb29kSW1hZ2Uuc3JjID0gaW1nO1xuICAgIGZvb2REaXYuYXBwZW5kQ2hpbGQoZm9vZEltYWdlKTtcbiAgICBsZXQgZm9vZERlc2NyaXB0aW9uRGl2ID0gY3JlYXRlRWxlbWVudCgnZGl2JywnZm9vZC1kZXNjcmlwdGlvbi1jb250YWluZXInLCcnKTtcbiAgICBmb29kRGVzY3JpcHRpb25EaXYuYXBwZW5kQ2hpbGQoY3JlYXRlRWxlbWVudCgnaDInLCdmb29kLW5hbWUnLCBuYW1lKSk7XG4gICAgZm9vZERlc2NyaXB0aW9uRGl2LmFwcGVuZENoaWxkKGNyZWF0ZUVsZW1lbnQoJ3AnLCdmb29kLWRlc2NyaXB0aW9uJyxkZXNjcmlwdGlvbikpO1xuICAgIGZvb2REaXYuYXBwZW5kQ2hpbGQoZm9vZERlc2NyaXB0aW9uRGl2KTtcbiAgICBmb29kRGl2LmFwcGVuZENoaWxkKGNyZWF0ZUVsZW1lbnQoJ3AnLCdmb29kLXByaWNlJyxwcmljZSkpO1xuICAgIHJldHVybiBmb29kRGl2O1xufSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCIiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGlzIHJlZmVyZW5jZWQgYnkgb3RoZXIgbW9kdWxlcyBzbyBpdCBjYW4ndCBiZSBpbmxpbmVkXG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsIiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==