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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/menu.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQ2ZBOzs7OztVRUFBO1VBQ0E7VUFDQTtVQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9jb250YWN0LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9ob21lLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaW5pdC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvbWVudS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiYm9keXtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmF5O1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgbWFyZ2luOiAwcHg7XFxufVxcblxcbi5tYWluLWhlYWRlcntcXG4gICAgZm9udC1zaXplOiA0cmVtO1xcbiAgICBtYXJnaW4tdG9wOiAxcmVtO1xcbiAgICBtYXJnaW4tYm90dG9tOiAyLjVyZW07XFxufVxcblxcbiNjb250ZW50e1xcbiAgICBoZWlnaHQ6IDc4JTtcXG4gICAgd2lkdGg6IDkwJTtcXG4gICAgYm9yZGVyOiAzcHggc29saWQgZGFya2dyYXk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDNmcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnI7XFxufVxcblxcbi5mb29kLWltYWdle1xcbiAgICBtYXgtaGVpZ2h0OiAyNTBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogNTBweDtcXG4gICAgYm9yZGVyOiAycHggc29saWQgbGlnaHRjb3JhbDtcXG59XFxuXFxuLnRhYnN7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDFmciAxZnIgM2ZyO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcXG4gICAgZ2FwOiA1cHg7XFxuICAgIGJvcmRlci1yaWdodDogM3B4IHNvbGlkIGRhcmtncmF5O1xcbn1cXG5cXG4udGFiLWJ1dHRvbntcXG4gICAgZm9udC1zaXplOiAzcmVtO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuLmhvbWUtZGl2e1xcbiAgICBwYWRkaW5nOiAwcHggMzBweCAzMHB4IDMwcHg7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDJmciAyZnI7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMzB2dyBhdXRvO1xcbiAgICBnYXA6IDE2cHg7XFxuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmhvbWUtZGl2IGltZ3tcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBtYXgtaGVpZ2h0OiAxOHZ3O1xcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xcbiAgICBib3JkZXI6IDVweCBzb2xpZCBncmV5O1xcbn1cXG5cXG4uaG9tZS1kaXYgPiBwe1xcbiAgICB3aWR0aDogOTAlO1xcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXG59XFxuXFxuLmhvbWUtdGl0bGUsIC5tZW51LXRpdGxlLCAuY29udGFjdC10aXRsZXtcXG4gICAgZ3JpZC1jb2x1bW46IDEgLyAzO1xcbiAgICBtYXJnaW46IDA7XFxuICAgIGZvbnQtc2l6ZTogM3JlbTtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbi5ob3Vycy1vZi1vcGVyYXRpb25ze1xcbiAgICBncmlkLWNvbHVtbjogMSAvIDM7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDVweDtcXG4gICAgYWxpZ24tc2VsZjogc3RhcnQ7XFxuICAgIG1hcmdpbi10b3A6IDMwcHg7XFxufVxcblxcbi5ob3Vycy1vZi1vcGVyYXRpb25zID4gaDJ7XFxuICAgIGZvbnQtc2l6ZTogMnJlbTtcXG59XFxuXFxuLmhvdXJzLW9mLW9wZXJhdGlvbnMgPiBwe1xcbiAgICBtYXJnaW4tdG9wOiAwcHg7XFxuICAgIG1hcmdpbi1ib3R0b206IDBweDtcXG4gICAgZm9udC1zaXplOiAxLjI1cmVtO1xcbn1cXG5cXG4ubWVudS1kaXZ7XFxuICAgIHBhZGRpbmc6IDBweCAzMHB4IDMwcHggMzBweDtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAyZnIgM2ZyIDNmciAzZnI7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xcbiAgICBncmlkLWF1dG8tcm93czogM2ZyO1xcbiAgICBnYXA6IDE2cHg7XFxuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgb3ZlcmZsb3cteTogc2Nyb2xsO1xcbiAgICBvdmVyZmxvdy14OiBoaWRkZW47XFxufVxcblxcbi5mb29kLWl0ZW17XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdyaWQtY29sdW1uOiAxIC8gMztcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxuICAgIGdhcDogMjBweDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgd2lkdGg6IDk1JTtcXG59XFxuXFxuLmZvb2QtaXRlbSA+IGltZ3tcXG4gICAgYmFja2dyb3VuZC1zaXplOjEwMCUgMTAwJTtcXG4gICAgaGVpZ2h0OiAxNTBweDtcXG4gICAgd2lkdGg6IDE1MHB4O1xcbiAgICBtaW4td2lkdGg6IDE1MHB4O1xcbiAgICBtYXgtd2lkdGg6IDE1MHB4O1xcbiAgICBtaW4taGVpZ2h0OiAxNTBweDtcXG4gICAgbWF4LWhlaWdodDogMTUwcHg7XFxuICAgIGJvcmRlcjogNXB4IHNvbGlkIG9saXZlZHJhYjtcXG59XFxuXFxuLmZvb2QtZGVzY3JpcHRpb257XFxuICAgIG1hcmdpbi1yaWdodDogNTBweDtcXG59XFxuXFxuLmZvb2QtcHJpY2V7XFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuaDIubWVudS10aXRsZSwgaDIuY29udGFjdC10aXRsZXtcXG4gICAgbWFyZ2luOiAzMHB4IDBweDtcXG59XFxuXFxuLmNvbnRhY3QtZGl2e1xcbiAgICBwYWRkaW5nOiAwcHggMzBweCAzMHB4IDMwcHg7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDRmcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XFxuICAgIGdhcDogMTZweDtcXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uY29udGFjdC1mb3Jte1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxMDBweCAxMDBweCAxMDBweCAxMDBweCA1MHB4O1xcbiAgICBoZWlnaHQ6IDkwJTtcXG4gICAgd2lkdGg6IDYwJTtcXG4gICAgYWxpZ24tc2VsZjogZmxleC1zdGFydDtcXG4gICAgYm9yZGVyOiA1cHggc29saWQgYmxhY2s7XFxuICAgIHBhZGRpbmc6IDIwcHg7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG4uZm9ybS1yb3d7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZvbnQtc2l6ZTogMnJlbTtcXG4gICAgZ2FwOiAxNXB4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmZvcm0taW5wdXQgPiBpbnB1dHtcXG4gICAgaGVpZ2h0OiAzMHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIG1hcmdpbjogNXB4O1xcbn1cXG5cXG4jZW1haWwsICNwaG9uZXtcXG4gICAgd2lkdGg6IDM3MHB4O1xcbn1cXG5cXG4uZm9ybS1yb3cgPiB0ZXh0YXJlYXtcXG4gICAgaGVpZ2h0OiA4MCU7XFxuICAgIHdpZHRoOiAzNTBweDtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLDJCQUEyQjtJQUMzQixhQUFhO0lBQ2IsYUFBYTtJQUNiLHNCQUFzQjtJQUN0Qix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksV0FBVztJQUNYLFVBQVU7SUFDViwwQkFBMEI7SUFDMUIsbUJBQW1CO0lBQ25CLGFBQWE7SUFDYiw4QkFBOEI7SUFDOUIsdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLG1CQUFtQjtJQUNuQiw0QkFBNEI7QUFDaEM7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsbUNBQW1DO0lBQ25DLDBCQUEwQjtJQUMxQixRQUFRO0lBQ1IsZ0NBQWdDO0FBQ3BDOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLDJCQUEyQjtJQUMzQixhQUFhO0lBQ2IsK0JBQStCO0lBQy9CLGdDQUFnQztJQUNoQyxTQUFTO0lBQ1QscUJBQXFCO0lBQ3JCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsbUJBQW1CO0lBQ25CLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLFVBQVU7SUFDVixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsU0FBUztJQUNULGVBQWU7SUFDZixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsV0FBVztJQUNYLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsbUJBQW1CO0lBQ25CLFFBQVE7SUFDUixpQkFBaUI7SUFDakIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksMkJBQTJCO0lBQzNCLGFBQWE7SUFDYixtQ0FBbUM7SUFDbkMsMEJBQTBCO0lBQzFCLG1CQUFtQjtJQUNuQixTQUFTO0lBQ1QscUJBQXFCO0lBQ3JCLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLGtCQUFrQjtJQUNsQiw2QkFBNkI7SUFDN0IsU0FBUztJQUNULG1CQUFtQjtJQUNuQixVQUFVO0FBQ2Q7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsYUFBYTtJQUNiLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQixpQkFBaUI7SUFDakIsMkJBQTJCO0FBQy9COztBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLDJCQUEyQjtJQUMzQixhQUFhO0lBQ2IsMkJBQTJCO0lBQzNCLDBCQUEwQjtJQUMxQixTQUFTO0lBQ1QscUJBQXFCO0lBQ3JCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYiwwQkFBMEI7SUFDMUIsZ0RBQWdEO0lBQ2hELFdBQVc7SUFDWCxVQUFVO0lBQ1Ysc0JBQXNCO0lBQ3RCLHVCQUF1QjtJQUN2QixhQUFhO0lBQ2IsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLGVBQWU7SUFDZixTQUFTO0lBQ1QsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsV0FBVztBQUNmOztBQUVBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0FBQ2hCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcImJvZHl7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JheTtcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIG1hcmdpbjogMHB4O1xcbn1cXG5cXG4ubWFpbi1oZWFkZXJ7XFxuICAgIGZvbnQtc2l6ZTogNHJlbTtcXG4gICAgbWFyZ2luLXRvcDogMXJlbTtcXG4gICAgbWFyZ2luLWJvdHRvbTogMi41cmVtO1xcbn1cXG5cXG4jY29udGVudHtcXG4gICAgaGVpZ2h0OiA3OCU7XFxuICAgIHdpZHRoOiA5MCU7XFxuICAgIGJvcmRlcjogM3B4IHNvbGlkIGRhcmtncmF5O1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAzZnI7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyO1xcbn1cXG5cXG4uZm9vZC1pbWFnZXtcXG4gICAgbWF4LWhlaWdodDogMjUwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIGxpZ2h0Y29yYWw7XFxufVxcblxcbi50YWJze1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAxZnIgMWZyIDNmcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XFxuICAgIGdhcDogNXB4O1xcbiAgICBib3JkZXItcmlnaHQ6IDNweCBzb2xpZCBkYXJrZ3JheTtcXG59XFxuXFxuLnRhYi1idXR0b257XFxuICAgIGZvbnQtc2l6ZTogM3JlbTtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbi5ob21lLWRpdntcXG4gICAgcGFkZGluZzogMHB4IDMwcHggMzBweCAzMHB4O1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAyZnIgMmZyO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDMwdncgYXV0bztcXG4gICAgZ2FwOiAxNnB4O1xcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5ob21lLWRpdiBpbWd7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgbWF4LWhlaWdodDogMTh2dztcXG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcXG4gICAgYm9yZGVyOiA1cHggc29saWQgZ3JleTtcXG59XFxuXFxuLmhvbWUtZGl2ID4gcHtcXG4gICAgd2lkdGg6IDkwJTtcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxufVxcblxcbi5ob21lLXRpdGxlLCAubWVudS10aXRsZSwgLmNvbnRhY3QtdGl0bGV7XFxuICAgIGdyaWQtY29sdW1uOiAxIC8gMztcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBmb250LXNpemU6IDNyZW07XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG4uaG91cnMtb2Ytb3BlcmF0aW9uc3tcXG4gICAgZ3JpZC1jb2x1bW46IDEgLyAzO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiA1cHg7XFxuICAgIGFsaWduLXNlbGY6IHN0YXJ0O1xcbiAgICBtYXJnaW4tdG9wOiAzMHB4O1xcbn1cXG5cXG4uaG91cnMtb2Ytb3BlcmF0aW9ucyA+IGgye1xcbiAgICBmb250LXNpemU6IDJyZW07XFxufVxcblxcbi5ob3Vycy1vZi1vcGVyYXRpb25zID4gcHtcXG4gICAgbWFyZ2luLXRvcDogMHB4O1xcbiAgICBtYXJnaW4tYm90dG9tOiAwcHg7XFxuICAgIGZvbnQtc2l6ZTogMS4yNXJlbTtcXG59XFxuXFxuLm1lbnUtZGl2e1xcbiAgICBwYWRkaW5nOiAwcHggMzBweCAzMHB4IDMwcHg7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMmZyIDNmciAzZnIgM2ZyO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcXG4gICAgZ3JpZC1hdXRvLXJvd3M6IDNmcjtcXG4gICAgZ2FwOiAxNnB4O1xcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcXG4gICAgb3ZlcmZsb3cteDogaGlkZGVuO1xcbn1cXG5cXG4uZm9vZC1pdGVte1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBncmlkLWNvbHVtbjogMSAvIDM7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcbiAgICBnYXA6IDIwcHg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHdpZHRoOiA5NSU7XFxufVxcblxcbi5mb29kLWl0ZW0gPiBpbWd7XFxuICAgIGJhY2tncm91bmQtc2l6ZToxMDAlIDEwMCU7XFxuICAgIGhlaWdodDogMTUwcHg7XFxuICAgIHdpZHRoOiAxNTBweDtcXG4gICAgbWluLXdpZHRoOiAxNTBweDtcXG4gICAgbWF4LXdpZHRoOiAxNTBweDtcXG4gICAgbWluLWhlaWdodDogMTUwcHg7XFxuICAgIG1heC1oZWlnaHQ6IDE1MHB4O1xcbiAgICBib3JkZXI6IDVweCBzb2xpZCBvbGl2ZWRyYWI7XFxufVxcblxcbi5mb29kLWRlc2NyaXB0aW9ue1xcbiAgICBtYXJnaW4tcmlnaHQ6IDUwcHg7XFxufVxcblxcbi5mb29kLXByaWNle1xcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbmgyLm1lbnUtdGl0bGUsIGgyLmNvbnRhY3QtdGl0bGV7XFxuICAgIG1hcmdpbjogMzBweCAwcHg7XFxufVxcblxcbi5jb250YWN0LWRpdntcXG4gICAgcGFkZGluZzogMHB4IDMwcHggMzBweCAzMHB4O1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciA0ZnI7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xcbiAgICBnYXA6IDE2cHg7XFxuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmNvbnRhY3QtZm9ybXtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMTAwcHggMTAwcHggMTAwcHggMTAwcHggNTBweDtcXG4gICAgaGVpZ2h0OiA5MCU7XFxuICAgIHdpZHRoOiA2MCU7XFxuICAgIGFsaWduLXNlbGY6IGZsZXgtc3RhcnQ7XFxuICAgIGJvcmRlcjogNXB4IHNvbGlkIGJsYWNrO1xcbiAgICBwYWRkaW5nOiAyMHB4O1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuLmZvcm0tcm93e1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmb250LXNpemU6IDJyZW07XFxuICAgIGdhcDogMTVweDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5mb3JtLWlucHV0ID4gaW5wdXR7XFxuICAgIGhlaWdodDogMzBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBtYXJnaW46IDVweDtcXG59XFxuXFxuI2VtYWlsLCAjcGhvbmV7XFxuICAgIHdpZHRoOiAzNzBweDtcXG59XFxuXFxuLmZvcm0tcm93ID4gdGV4dGFyZWF7XFxuICAgIGhlaWdodDogODAlO1xcbiAgICB3aWR0aDogMzUwcHg7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgeyBjcmVhdGVFbGVtZW50IH0gZnJvbSBcIi4vaW5kZXguanNcIjtcblxuY29uc3QgbWFpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb250ZW50Jyk7XG5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZGVzaWduQ29udGFjdCgpe1xuICAgIGxldCBjb250YWN0RGl2ID0gY3JlYXRlRWxlbWVudCgnZGl2JywnY29udGFjdC1kaXYnLCcnKTtcbiAgICBjb250YWN0RGl2LmFwcGVuZENoaWxkKGNyZWF0ZUVsZW1lbnQoJ2gyJywnY29udGFjdC10aXRsZScsJ01ha2UgQSBSZXNlcnZhdGlvbiEnKSk7XG4gICAgbGV0IGNvbnRhY3RGb3JtID0gY3JlYXRlRWxlbWVudCgnZm9ybScsJ2NvbnRhY3QtZm9ybScsJycpO1xuICAgIGxldCBmb3JtUm93T25lID0gY3JlYXRlRWxlbWVudCgnZGl2JywnZm9ybS1yb3cnLCcnKTtcbiAgICBsZXQgZmlyc3ROYW1lSW5wdXQgPSBjcmVhdGVGb3JtRWxlbWVudCgnZmlyc3QtbmFtZScsJ0ZpcnN0IE5hbWUnLCd0ZXh0JywnSm9obicpO1xuICAgIGxldCBsYXN0TmFtZUlucHV0ID0gY3JlYXRlRm9ybUVsZW1lbnQoJ2xhc3QtbmFtZScsJ0xhc3QgTmFtZScsJ3RleHQnLCdEb2UnKTtcbiAgICBmb3JtUm93T25lLmFwcGVuZENoaWxkKGZpcnN0TmFtZUlucHV0KTtcbiAgICBmb3JtUm93T25lLmFwcGVuZENoaWxkKGxhc3ROYW1lSW5wdXQpO1xuICAgIGNvbnRhY3RGb3JtLmFwcGVuZENoaWxkKGZvcm1Sb3dPbmUpO1xuXG4gICAgbGV0IGZvcm1Sb3dUd28gPSBjcmVhdGVFbGVtZW50KCdkaXYnLCdmb3JtLXJvdycsJycpO1xuICAgIGxldCBlbWFpbElucHV0ID0gY3JlYXRlRm9ybUVsZW1lbnQoJ2VtYWlsJywnRW1haWwgQWRkcmVzcycsJ2VtYWlsJywnZXhhbXBsZUBleGFtcGxlLmNvbScpO1xuICAgIGZvcm1Sb3dUd28uYXBwZW5kQ2hpbGQoZW1haWxJbnB1dCk7XG4gICAgY29udGFjdEZvcm0uYXBwZW5kQ2hpbGQoZm9ybVJvd1R3byk7XG5cbiAgICBsZXQgZm9ybVJvd1RocmVlID0gY3JlYXRlRWxlbWVudCgnZGl2JywnZm9ybS1yb3cnLCcnKTtcbiAgICBsZXQgcGhvbmVJbnB1dCA9IGNyZWF0ZUZvcm1FbGVtZW50KCdwaG9uZScsJ1Bob25lIE51bWJlcicsJ3RlbCcsJzEyMy00NTYtNzg5MCcpO1xuICAgIGZvcm1Sb3dUaHJlZS5hcHBlbmRDaGlsZChwaG9uZUlucHV0KTtcbiAgICBjb250YWN0Rm9ybS5hcHBlbmRDaGlsZChmb3JtUm93VGhyZWUpO1xuXG4gICAgbGV0IHJlc2VydmF0aW9uRGl2ID0gY3JlYXRlRWxlbWVudCgnZGl2JywnZm9ybS1yb3cnLCcnKTtcbiAgICBsZXQgcmVzZXJ2YXRpb24gPSBjcmVhdGVFbGVtZW50KCdsYWJlbCcsJycsJ0RldGFpbHMgQWJvdXQgUmVzZXJ2YXRpb24nKTtcbiAgICBsZXQgZGV0YWlscyA9IGNyZWF0ZUVsZW1lbnQoJ3RleHRhcmVhJywnJywnJyk7XG4gICAgcmVzZXJ2YXRpb25EaXYuYXBwZW5kQ2hpbGQocmVzZXJ2YXRpb24pO1xuICAgIHJlc2VydmF0aW9uRGl2LmFwcGVuZENoaWxkKGRldGFpbHMpO1xuICAgIGNvbnRhY3RGb3JtLmFwcGVuZENoaWxkKHJlc2VydmF0aW9uRGl2KTtcblxuICAgIGNvbnRhY3RGb3JtLmFwcGVuZENoaWxkKGNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicsJycsJ1N1Ym1pdCBSZXNlcnZhdGlvbicpKTtcblxuICAgIGNvbnRhY3REaXYuYXBwZW5kQ2hpbGQoY29udGFjdEZvcm0pO1xuICAgIG1haW4uYXBwZW5kQ2hpbGQoY29udGFjdERpdik7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUZvcm1FbGVtZW50KGlkLG5hbWUsaW5wdXRUeXBlLHBsYWNlaG9sZGVyKXtcbiAgICBsZXQgZm9ybUlucHV0RGl2ID0gY3JlYXRlRWxlbWVudCgnZGl2JywnZm9ybS1pbnB1dCcsJycpO1xuICAgIGxldCBmb3JtTGFiZWwgPSBjcmVhdGVFbGVtZW50KCdsYWJlbCcsJycsbmFtZSk7XG4gICAgZm9ybUxhYmVsLmZvciA9IGlkO1xuICAgIGxldCBmb3JtSW5wdXQgPSBjcmVhdGVFbGVtZW50KCdpbnB1dCcsJycsJycpO1xuICAgIGZvcm1JbnB1dC5pZCA9IGlkO1xuICAgIGZvcm1JbnB1dC50eXBlID0gaW5wdXRUeXBlO1xuICAgIGZvcm1JbnB1dC5wbGFjZWhvbGRlciA9IHBsYWNlaG9sZGVyO1xuICAgIGZvcm1JbnB1dERpdi5hcHBlbmRDaGlsZChmb3JtTGFiZWwpO1xuICAgIGZvcm1JbnB1dERpdi5hcHBlbmRDaGlsZChmb3JtSW5wdXQpO1xuICAgIHJldHVybiBmb3JtSW5wdXREaXY7XG59IiwiaW1wb3J0IHJlc3RhdXJhbnRQaG90byBmcm9tICcuL3Jlc3RhdXJhbnQuanBlZydcbmNvbnN0IGhvbWVTdHJpbmdPbmUgPSBcbiAgICBgQXJlIHlvdSByZWFkeSBmb3IgdGhlIGJlc3QgSW5kaWFuIGZvb2Qgb2YgeW91ciBsaWZlPyBUaGVyZVxcJ3Mgbm8gcGxhY2UgbGlrZSBSeWFuXFwncyBJbmRpYW4gZm9vZC4gRnJlc2hseSBjb29rZWQganVzdCBmb3IgeW91LCB3ZSBndWFyYW50ZWUgdGhhdCB5b3VyIG1vdXRoIHdpbGwgdGhhbmsgeW91XG4gICAgYW5kIHlvdXIgc3RvbWFjaCB3aWxsIGJlIGZvcmV2ZXIgZ3JhdGVmdWwuIExvb2sgYXQgdGhlIGJlYXV0aWZ1bCBleHRlcmlvciBvZiBvdXIgcmVzdGF1cmFudC4gVGhpcyBwbGFjZSBpcyB0byBkaWUgZm9yIWBcbmNvbnN0IG1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29udGVudCcpO1xuY29uc3QgaG91cnNPZkJ1c2luZXNzID0ge1xuICAgICdNb25kYXkgLSBGcmlkYXknOiAnMTE6MzBBTSAtIDdQTScsXG4gICAgJ1NhdHVyZGF5JzogJzNQTSAtIDNBTScsXG4gICAgJ1N1bmRheSc6ICAnMVBNIC0gOVBNJyxcbn1cblxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBkZXNpZ25Ib21lKCl7XG4gICAgZGVzaWduSG9tZVN1bW1hcnkoKVxuICAgIGRlc2lnbkhvbWVIb3VycygpXG59XG5cbmZ1bmN0aW9uIGRlc2lnbkhvbWVIb3Vycygpe1xuICAgIGNvbnN0IGhvbWVEaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaG9tZS1kaXYnKTtcbiAgICBsZXQgaG91cnNPZk9wZXJhdGlvbnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBsZXQgaG91cnNPZk9wZXJhdGlvbkhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gICAgaG91cnNPZk9wZXJhdGlvbkhlYWRlci50ZXh0Q29udGVudCA9ICdIb3VycyBvZiBPcGVyYXRpb24nO1xuICAgIGhvdXJzT2ZPcGVyYXRpb25zLmFwcGVuZENoaWxkKGhvdXJzT2ZPcGVyYXRpb25IZWFkZXIpO1xuICAgIGhvdXJzT2ZPcGVyYXRpb25zLmNsYXNzTGlzdC5hZGQoJ2hvdXJzLW9mLW9wZXJhdGlvbnMnKTtcbiAgICBmb3IgKGxldCBkYXlzIGluIGhvdXJzT2ZCdXNpbmVzcyl7XG4gICAgICAgIGxldCBob3Vyc1JvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgaG91cnNSb3cudGV4dENvbnRlbnQgPSBgJHtkYXlzfTogJHtob3Vyc09mQnVzaW5lc3NbZGF5c119YDtcbiAgICAgICAgaG91cnNPZk9wZXJhdGlvbnMuYXBwZW5kQ2hpbGQoaG91cnNSb3cpO1xuICAgIH1cbiAgICBob21lRGl2LmFwcGVuZENoaWxkKGhvdXJzT2ZPcGVyYXRpb25zKTtcblxufVxuXG5cbmZ1bmN0aW9uIGRlc2lnbkhvbWVTdW1tYXJ5KCl7XG4gICAgbGV0IGhvbWVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBob21lRGl2LmNsYXNzTGlzdC5hZGQoJ2hvbWUtZGl2Jyk7XG4gICAgbGV0IGhvbWVUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gICAgaG9tZVRpdGxlLmNsYXNzTGlzdC5hZGQoJ2hvbWUtdGl0bGUnKTtcbiAgICBob21lVGl0bGUudGV4dENvbnRlbnQgPSAnSG9tZSBvZiB0aGUgSW5kaWFuIEZvb2QnO1xuICAgIGhvbWVEaXYuYXBwZW5kQ2hpbGQoaG9tZVRpdGxlKTtcbiAgICBjb25zdCByZXN0YXVyYW50UGhvdG9WYXJpYWJsZSA9IG5ldyBJbWFnZSgpO1xuICAgIHJlc3RhdXJhbnRQaG90b1ZhcmlhYmxlLnNyYyA9IHJlc3RhdXJhbnRQaG90bztcbiAgICBob21lRGl2LmFwcGVuZENoaWxkKHJlc3RhdXJhbnRQaG90b1ZhcmlhYmxlKTtcbiAgICBsZXQgaG9tZVN0cmluZ09uZVZhcmlhYmxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIGhvbWVTdHJpbmdPbmVWYXJpYWJsZS50ZXh0Q29udGVudCA9IGhvbWVTdHJpbmdPbmU7XG4gICAgaG9tZURpdi5hcHBlbmRDaGlsZChob21lU3RyaW5nT25lVmFyaWFibGUpO1xuICAgIG1haW4uYXBwZW5kQ2hpbGQoaG9tZURpdik7XG59IiwiaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5pbXBvcnQgY3JlYXRlVGFicyBmcm9tICcuL2luaXQuanMnO1xuaW1wb3J0IGRlc2lnbkhvbWVUYWIgZnJvbSAnLi9ob21lLmpzJztcbmltcG9ydCBkZXNpZ25NZW51VGFiIGZyb20gJy4vbWVudS5qcyc7XG5pbXBvcnQgZGVzaWduQ29udGFjdFRhYiBmcm9tICcuL2NvbnRhY3QuanMnO1xuXG5cbmNvbnN0IG1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29udGVudCcpO1xuXG5cbnJlc2V0QW5kRGVzaWduVGFiKGRlc2lnbkhvbWVUYWIpXG5cblxud2luZG93LnJlc2V0QW5kRGVzaWduVGFiID0gcmVzZXRBbmREZXNpZ25UYWI7XG53aW5kb3cuZGVzaWduTWVudVRhYiA9IGRlc2lnbk1lbnVUYWI7XG53aW5kb3cuZGVzaWduSG9tZVRhYiA9IGRlc2lnbkhvbWVUYWI7XG53aW5kb3cuY3JlYXRlRWxlbWVudCA9IGNyZWF0ZUVsZW1lbnQ7XG5cblxuXG5mdW5jdGlvbiByZXNldEFuZERlc2lnblRhYihjcmVhdGVUYWJGdW5jdGlvbil7XG4gICAgbWFpbi5pbm5lckhUTUwgPSAnJztcbiAgICBjcmVhdGVUYWJzKCk7XG4gICAgY3JlYXRlVGFiRnVuY3Rpb24oKTtcbiAgICBjb25zdCBob21lQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhvbWUtdGFiJyk7XG4gICAgaG9tZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsKCk9PntyZXNldEFuZERlc2lnblRhYihkZXNpZ25Ib21lVGFiKX0pO1xuXG4gICAgY29uc3QgbWVudUJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tZW51LXRhYicpO1xuICAgIG1lbnVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCgpPT57cmVzZXRBbmREZXNpZ25UYWIoZGVzaWduTWVudVRhYil9KTtcblxuICAgIGNvbnN0IGNvbnRhY3RCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGFjdC10YWInKTtcbiAgICBjb250YWN0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywoKT0+e3Jlc2V0QW5kRGVzaWduVGFiKGRlc2lnbkNvbnRhY3RUYWIpfSk7XG59XG5cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUVsZW1lbnQodHlwZSwgY2xhc3NlcywgdGV4dCl7XG4gICAgbGV0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHR5cGUpO1xuICAgIGlmIChjbGFzc2VzLmxlbmd0aCAhPT0gMCl7XG4gICAgICAgIHR5cGVvZihjbGFzc2VzKSA9PT0gJ29iamVjdCcgPyBlbGVtZW50LmNsYXNzTGlzdC5hZGQoLi4uY2xhc3NlcykgOiBlbGVtZW50LmNsYXNzTGlzdC5hZGQoY2xhc3Nlcyk7XG4gICAgfVxuICAgIGVsZW1lbnQudGV4dENvbnRlbnQgPSB0ZXh0O1xuICAgIHJldHVybiBlbGVtZW50O1xufSIsImNvbnN0IG1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29udGVudCcpO1xuY29uc3QgYnV0dG9uQ2xhc3NlcyA9IFsnaG9tZS10YWInLCAnbWVudS10YWInLCdjb250YWN0LXRhYiddXG5jb25zdCBidXR0b25UZXh0ID0gWydIT01FJywgJ01FTlUnLCAnQ09OVEFDVCBVUyddXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNyZWF0ZVRhYnMoKSB7XG4gICAgbGV0IHRhYkRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHRhYkRpdi5jbGFzc0xpc3QuYWRkKCd0YWJzJyk7XG4gICAgZm9yIChsZXQgaW5kZXggaW4gYnV0dG9uQ2xhc3Nlcyl7XG4gICAgICAgIGNvbnN0IGJ1dHRvblRvQWRkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgIGJ1dHRvblRvQWRkLmNsYXNzTGlzdC5hZGQoYnV0dG9uQ2xhc3Nlc1tpbmRleF0pO1xuICAgICAgICBidXR0b25Ub0FkZC5jbGFzc0xpc3QuYWRkKCd0YWItYnV0dG9uJyk7XG4gICAgICAgIGJ1dHRvblRvQWRkLnRleHRDb250ZW50ID0gYnV0dG9uVGV4dFtpbmRleF07XG4gICAgICAgIHRhYkRpdi5hcHBlbmRDaGlsZChidXR0b25Ub0FkZCk7XG4gICAgfVxuICAgIG1haW4uYXBwZW5kQ2hpbGQodGFiRGl2KTtcbn1cbiIsImltcG9ydCB7IGNyZWF0ZUVsZW1lbnQgfSBmcm9tIFwiLi9pbmRleC5qc1wiO1xuaW1wb3J0IHBhbmVlckltYWdlIGZyb20gJy4vcGFuZWVyLW1hc2FsYS5qcGcnO1xuaW1wb3J0IGxhbWJSb2dhbkpvc2hJbWFnZSBmcm9tICcuL2xhbWItcm9nYW4tam9zaC5qcGcnO1xuaW1wb3J0IGNoaWNrZW5UaWtrYU1hc2FsYUltYWdlIGZyb20gJy4vY2hpY2tlbi10aWtrYS1tYXNhbGEuanBlZyc7XG5pbXBvcnQgY2hpY2tlblNhYWdJbWFnZSBmcm9tICcuL2NoaWNrZW4tc2FhZy5qcGcnO1xuaW1wb3J0IGNoaWNrZW5WaW5kYWxvb0ltYWdlIGZyb20gJy4vY2hpY2tlbi12aW5kYWxvby5qcGcnO1xuXG5cbmNvbnN0IG1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29udGVudCcpO1xuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGRlc2lnbk1lbnUoKXtcbiAgICBsZXQgbWVudURpdiA9IGNyZWF0ZUVsZW1lbnQoJ2RpdicsJ21lbnUtZGl2JywnJyk7XG4gICAgbWVudURpdi5hcHBlbmRDaGlsZChjcmVhdGVFbGVtZW50KCdoMicsWydtZW51LXRpdGxlJ10sJ0luZGlhbiBQbGFjZSBNZW51JykpO1xuICAgIG1haW4uYXBwZW5kQ2hpbGQobWVudURpdik7XG4gICAgbWVudURpdi5hcHBlbmRDaGlsZChjcmVhdGVGb29kSW5NZW51KHBhbmVlckltYWdlLCdQYW5lZXIgTWFzYWxhJywnVGhpcyBmcmVzaGx5IG1hZGUgcGFuZWVyIG1hc2FsYSBpcyBtYWRlIGZyb20gdGhlIGZyZXNoZXN0IGNoZWVzZS4gQ29va2VkIGluIGEgc3BpY2VkIHRvbWF0byBzYXVjZS4gVG9wcGVkIG9mZiB3aXRoIGEgY2lsYW50cm8gZ2FybmlzaCBhbmQgY3JlYW15IGZpbmlzaC4nLCckMTAuOTknKSk7XG4gICAgbWVudURpdi5hcHBlbmRDaGlsZChjcmVhdGVGb29kSW5NZW51KGxhbWJSb2dhbkpvc2hJbWFnZSwgJ0xhbWIgUm9nYW4gUm9zaCcsICdUaGlzIGVhcnRoeSBkaXNoIGlzIHNpenpsaW5nIHdpdGggZmxhdm9yISBDb29rZWQgd2l0aCBhIHZhcmlldHkgb2YgdmVnZXRhYmxlcywgdGhpcyBkaXNoIHdpbGwgYnJpbmcgYSBzdHJvbmcgc29vdGhpbmcgYXJvbWEgdG8gYW55IHBlcnNvbiB3aG8gdGFrZXMgYSBiaXRlIG91dCBvZiB0aGlzIGRlbGljaW91cyBtZWFsLicsJyQxMy45OScpKTtcbiAgICBtZW51RGl2LmFwcGVuZENoaWxkKGNyZWF0ZUZvb2RJbk1lbnUoY2hpY2tlblRpa2thTWFzYWxhSW1hZ2UsJ0NoaWNrZW4gVGlra2EgTWFzYWxhJyAsJ0FuIGluZGlhbiBjbGFzc2ljISBUaGlzIHRvbWF0by1iYXNlZCBkaXNoIGlzIHNwaWN5LCBjcmVhbXksIGFuZCBzYXZvcnkuIEJvbGQgd2l0aCBmbGF2b3IsIHRoaXMgY2xhc3NpYyBpcyB0aGUgb2ZmaWNpYWwgZGlzaCBvZiB0aGUgVW5pdGVkIEtpbmdkb20uIEZpbmQgb3V0IHdoeSEnLCckMTIuOTknKSk7XG4gICAgbWVudURpdi5hcHBlbmRDaGlsZChjcmVhdGVGb29kSW5NZW51KGNoaWNrZW5TYWFnSW1hZ2UsJ0NoaWNrZW4gU2FhZycsICdTZXJ2ZWQgd2l0aCBzcGluaXNoIGFuZCBhIHZhcmlldHkgb2Ygc3BpY2VzLCB0aGlzIGRpc2ggd2lsbCB0YWtlIHlvdSBieSBzdXJwcmlzZSBieSBob3cgZGVsaWNpb3VzIGl0IGlzISBUaGlzIGdyZWVuIGNyZWFteSBkaXNoIHdpbGwgYXBwZWFzZSBhbnkgbG92ZXIgb2YgZ3JlZW5zIScsJyQ4Ljk5JykpO1xuICAgIG1lbnVEaXYuYXBwZW5kQ2hpbGQoY3JlYXRlRm9vZEluTWVudShjaGlja2VuVmluZGFsb29JbWFnZSwnQ2hpY2tlbiBWaW5kYWxvbycsJ0Egc3BpY3kgZGlzaCB0aGF0IGlzIGZpbGxlZCB3aXRoIHRhc3RlLCBtYXJpbmF0ZWQgZm9yIGhvdXJzIHNvIHRoZSBjaGlja2VuIGNhbiBhYnNvcmIgYWxsIG9mIHRoZSBmbGF2b3JzLiBUcnkgb3V0IHRoaXMgZGlzaCBpZiB5b3Ugd2FudCBhIGtpY2sgdG8geW91ciBkaW5uZXIhJywnJDEwLjk5JykpO1xuXG59XG5cblxuZnVuY3Rpb24gY3JlYXRlRm9vZEluTWVudShpbWcsIG5hbWUsIGRlc2NyaXB0aW9uLCBwcmljZSApe1xuICAgIGxldCBmb29kRGl2ID0gY3JlYXRlRWxlbWVudCgnZGl2JywnZm9vZC1pdGVtJywnJyk7XG4gICAgbGV0IGZvb2RJbWFnZSA9IG5ldyBJbWFnZSgpO1xuICAgIGZvb2RJbWFnZS5zcmMgPSBpbWc7XG4gICAgZm9vZERpdi5hcHBlbmRDaGlsZChmb29kSW1hZ2UpO1xuICAgIGxldCBmb29kRGVzY3JpcHRpb25EaXYgPSBjcmVhdGVFbGVtZW50KCdkaXYnLCdmb29kLWRlc2NyaXB0aW9uLWNvbnRhaW5lcicsJycpO1xuICAgIGZvb2REZXNjcmlwdGlvbkRpdi5hcHBlbmRDaGlsZChjcmVhdGVFbGVtZW50KCdoMicsJ2Zvb2QtbmFtZScsIG5hbWUpKTtcbiAgICBmb29kRGVzY3JpcHRpb25EaXYuYXBwZW5kQ2hpbGQoY3JlYXRlRWxlbWVudCgncCcsJ2Zvb2QtZGVzY3JpcHRpb24nLGRlc2NyaXB0aW9uKSk7XG4gICAgZm9vZERpdi5hcHBlbmRDaGlsZChmb29kRGVzY3JpcHRpb25EaXYpO1xuICAgIGZvb2REaXYuYXBwZW5kQ2hpbGQoY3JlYXRlRWxlbWVudCgncCcsJ2Zvb2QtcHJpY2UnLHByaWNlKSk7XG4gICAgcmV0dXJuIGZvb2REaXY7XG59IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgaXMgcmVmZXJlbmNlZCBieSBvdGhlciBtb2R1bGVzIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL21lbnUuanNcIik7XG4iLCIiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=