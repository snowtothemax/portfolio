module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./assets/alsoFavs.jpg":
/*!*****************************!*\
  !*** ./assets/alsoFavs.jpg ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/alsoFavs-0f6cd233f6049aeeb32903d3895ac71b.jpg";

/***/ }),

/***/ "./assets/ceremony.jpg":
/*!*****************************!*\
  !*** ./assets/ceremony.jpg ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/ceremony-1c9947d3a530ec5f45702ba959e3be60.jpg";

/***/ }),

/***/ "./assets/color-UWcrest-print.png":
/*!****************************************!*\
  !*** ./assets/color-UWcrest-print.png ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/color-UWcrest-print-736529d35728404aecf5f359a4217f52.png";

/***/ }),

/***/ "./assets/dad.jpg":
/*!************************!*\
  !*** ./assets/dad.jpg ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/dad-30a0db773b3b88ae9c89c53bab05069f.jpg";

/***/ }),

/***/ "./assets/fam.jpg":
/*!************************!*\
  !*** ./assets/fam.jpg ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/fam-da9b42ddd743162e5a7983e4b8499a27.jpg";

/***/ }),

/***/ "./assets/favs.jpg":
/*!*************************!*\
  !*** ./assets/favs.jpg ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/favs-82bde7c8da3fda8db4d7a661f5ff41b1.jpg";

/***/ }),

/***/ "./assets/gang.jpg":
/*!*************************!*\
  !*** ./assets/gang.jpg ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/gang-7e566bc47d532ea4ddc994f7ca40efae.jpg";

/***/ }),

/***/ "./assets/humo.jpg":
/*!*************************!*\
  !*** ./assets/humo.jpg ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/humo-6efd71cb622f0e0c0985d49d37f46c27.jpg";

/***/ }),

/***/ "./assets/johnMayer.jpg":
/*!******************************!*\
  !*** ./assets/johnMayer.jpg ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/johnMayer-3468d34d5d203c86bbca823a327af580.jpg";

/***/ }),

/***/ "./assets/meAvatar.jpg":
/*!*****************************!*\
  !*** ./assets/meAvatar.jpg ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/meAvatar-f94bc5a516ef38610847328a9a8cc5f2.jpg";

/***/ }),

/***/ "./assets/meElephant.jpg":
/*!*******************************!*\
  !*** ./assets/meElephant.jpg ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/meElephant-1f6207fbcc8dce72a3a3eeb8acdd50a9.jpg";

/***/ }),

/***/ "./assets/meWithEggs.jpg":
/*!*******************************!*\
  !*** ./assets/meWithEggs.jpg ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/meWithEggs-6677ad7b583c956f4bf58c530d62d973.jpg";

/***/ }),

/***/ "./assets/nat.jpg":
/*!************************!*\
  !*** ./assets/nat.jpg ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/nat-768ff7148d2533f903a97cf0376afbe2.jpg";

/***/ }),

/***/ "./assets/parks.jpg":
/*!**************************!*\
  !*** ./assets/parks.jpg ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/parks-eb0e7050044f88c5f1a0c8f9eadb7af4.jpg";

/***/ }),

/***/ "./assets/theBoys.jpg":
/*!****************************!*\
  !*** ./assets/theBoys.jpg ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/theBoys-7aa0896d6206a66544d516b8af9cb4e5.jpg";

/***/ }),

/***/ "./assets/theBoys2.jpg":
/*!*****************************!*\
  !*** ./assets/theBoys2.jpg ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/theBoys2-90c18eb19374487297270910724a5af4.jpg";

/***/ }),

/***/ "./assets/theater.jpg":
/*!****************************!*\
  !*** ./assets/theater.jpg ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/theater-47806eb5a4f3ec04abc4ff73bcb0e29a.jpg";

/***/ }),

/***/ "./assets/wendys.jpeg":
/*!****************************!*\
  !*** ./assets/wendys.jpeg ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/wendys-8ab7fb5240ccd0730b7c7b1ebabac8c6.jpeg";

/***/ }),

/***/ "./assets/will.jpg":
/*!*************************!*\
  !*** ./assets/will.jpg ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/will-862a0877b771e99a344809b043b8767d.jpg";

/***/ }),

/***/ "./components/Card/index.js":
/*!**********************************!*\
  !*** ./components/Card/index.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Card; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "C:\\Users\\front\\Documents\\GitHub\\portfolio\\components\\Card\\index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
class Card extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor(props) {
    super(props);
    this.state = {
      clickable: this.props.clickable,
      //If the card is clickable or not
      hover: false //whether the card should hover or not

    };
  }

  render() {
    //checks to see if hover is true and which style to choose
    var linkStyle;

    if (this.state.hover) {
      linkStyle = {
        width: this.props.width,
        maxHeight: this.props.height,
        background: '#FFFFFF',
        cursor: 'pointer',
        flexDirection: 'column',
        display: 'flex',
        alignItems: 'center',
        opacity: 1
      };
    } else {
      linkStyle = {
        width: this.props.width,
        maxHeight: this.props.height,
        background: '#FFFFFF',
        flexDirection: 'column',
        display: 'flex',
        alignItems: 'center',
        opacity: .4
      };
    }

    if (this.state.clickable) {
      //the Card that is created if clickable is true
      return __jsx("div", {
        style: linkStyle,
        onMouseEnter: () => this.setState({
          hover: !this.state.hover
        }),
        onMouseLeave: () => this.setState({
          hover: !this.state.hover
        }),
        onClick: this.props.onClick,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24,
          columnNumber: 17
        }
      }, this.props.children); //the card that is created if false
    } else {
      return __jsx("div", {
        style: {
          width: this.props.width,
          maxHeight: this.props.height,
          background: '#FFFFFF',
          flexDirection: 'row',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
          position: 'relative'
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32,
          columnNumber: 17
        }
      }, this.props.children);
    }
  }

}

/***/ }),

/***/ "./components/ImageCard/index.js":
/*!***************************************!*\
  !*** ./components/ImageCard/index.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ImageCard; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Card */ "./components/Card/index.js");
var _jsxFileName = "C:\\Users\\front\\Documents\\GitHub\\portfolio\\components\\ImageCard\\index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

class ImageCard extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor(props) {
    super(props);
    this.state = {
      hover: false,
      height: this.props.height,
      width: this.props.width,
      transform: this.props.transform,
      rotate: this.props.rotate,
      hoverEnable: true
    };
  }

  render() {
    var imgStyle;
    const hoverHeight = this.state.height * 1.05;
    const hoverWidth = this.state.width * 1.05;

    if (this.state.hover) {
      imgStyle = {
        boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.4), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
        transform: "translate(" + this.props.transform + ") " + "rotate(" + this.state.rotate + ")",
        width: hoverWidth,
        height: hoverHeight,
        margin: 50,
        position: 'inherit'
      };
    } else {
      imgStyle = {
        boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.4), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
        transform: "translate(" + this.props.transform + ") " + "rotate(" + this.state.rotate + ")",
        width: this.state.width,
        height: this.state.height,
        margin: 50,
        position: 'inherit'
      };
    }

    return __jsx(_Card__WEBPACK_IMPORTED_MODULE_1__["default"], {
      width: "auto",
      height: "auto",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 13
      }
    }, __jsx("img", {
      src: this.props.source,
      style: imgStyle,
      onMouseEnter: () => this.setState({
        hover: true
      }),
      onMouseLeave: () => this.setState({
        hover: false
      }),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 17
      }
    }));
  }

}

/***/ }),

/***/ "./components/TopBarNavigator/index.js":
/*!*********************************************!*\
  !*** ./components/TopBarNavigator/index.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return TopBarNav; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Card */ "./components/Card/index.js");
/* harmony import */ var _assets_color_UWcrest_print_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../assets/color-UWcrest-print.png */ "./assets/color-UWcrest-print.png");
/* harmony import */ var _assets_color_UWcrest_print_png__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_assets_color_UWcrest_print_png__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _assets_meAvatar_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../assets/meAvatar.jpg */ "./assets/meAvatar.jpg");
/* harmony import */ var _assets_meAvatar_jpg__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_assets_meAvatar_jpg__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName = "C:\\Users\\front\\Documents\\GitHub\\portfolio\\components\\TopBarNavigator\\index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





class TopBarNav extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor(props) {
    super(props);
    this.state = {
      cardHeight: 40,
      currentPage: this.props.currentPage
    };
  }

  render() {
    var selectColor1 = "#000000";
    var selectColor2 = "#000000";
    var selectColor3 = "#000000";
    var selectColor4 = "#000000";
    return __jsx("div", {
      className: "topbar",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 13
      }
    }, __jsx(_Card__WEBPACK_IMPORTED_MODULE_1__["default"], {
      clickable: false,
      height: "100%",
      width: "40vw",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 17
      }
    }, __jsx("img", {
      src: _assets_color_UWcrest_print_png__WEBPACK_IMPORTED_MODULE_2___default.a,
      style: {
        paddingLeft: 55,
        height: 70,
        maxWidth: 60
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 21
      }
    }), __jsx("text", {
      style: {
        fontFamily: 'Gilroy',
        fontSize: 50,
        paddingLeft: 20
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 21
      }
    }, "Max Johnson")), __jsx(_Card__WEBPACK_IMPORTED_MODULE_1__["default"], {
      clickable: true,
      height: this.state.cardHeight,
      width: "13vw",
      onClick: () => next_router__WEBPACK_IMPORTED_MODULE_4___default.a.push("/"),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 17
      }
    }, __jsx("text", {
      style: {
        paddingTop: 17,
        fontSize: 30,
        fontFamily: 'Gilroy',
        color: selectColor1
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 21
      }
    }, "Home")), __jsx(_Card__WEBPACK_IMPORTED_MODULE_1__["default"], {
      clickable: true,
      height: this.state.cardHeight,
      width: "13vw",
      onClick: () => next_router__WEBPACK_IMPORTED_MODULE_4___default.a.push("/projects"),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 17
      }
    }, __jsx("text", {
      style: {
        paddingTop: 17,
        fontSize: 30,
        fontFamily: 'Gilroy',
        color: selectColor2
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 21
      }
    }, "Projects")), __jsx(_Card__WEBPACK_IMPORTED_MODULE_1__["default"], {
      clickable: true,
      height: this.state.cardHeight,
      width: "13vw",
      onClick: () => next_router__WEBPACK_IMPORTED_MODULE_4___default.a.push("/gallery"),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 55,
        columnNumber: 17
      }
    }, __jsx("text", {
      style: {
        paddingTop: 17,
        fontSize: 30,
        fontFamily: 'Gilroy',
        color: selectColor3
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 56,
        columnNumber: 21
      }
    }, "Gallery")), __jsx(_Card__WEBPACK_IMPORTED_MODULE_1__["default"], {
      clickable: true,
      height: this.state.cardHeight,
      width: "13vw",
      onClick: () => next_router__WEBPACK_IMPORTED_MODULE_4___default.a.push("/contact"),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 64,
        columnNumber: 17
      }
    }, __jsx("text", {
      style: {
        paddingTop: 17,
        fontSize: 30,
        fontFamily: 'Gilroy',
        color: selectColor4
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 65,
        columnNumber: 21
      }
    }, "Contact")), __jsx(_Card__WEBPACK_IMPORTED_MODULE_1__["default"], {
      clickable: false,
      height: this.state.cardHeight,
      width: "8vw",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 72,
        columnNumber: 17
      }
    }, __jsx("img", {
      className: "avatar",
      src: _assets_meAvatar_jpg__WEBPACK_IMPORTED_MODULE_3___default.a,
      style: {
        borderRadius: '50%',
        height: 50,
        width: 50,
        transform: 'translate(0,20px)',
        position: 'absolute'
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 73,
        columnNumber: 21
      }
    })));
  }

}

/***/ }),

/***/ "./pages/gallery.js":
/*!**************************!*\
  !*** ./pages/gallery.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Gallery; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_TopBarNavigator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/TopBarNavigator */ "./components/TopBarNavigator/index.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_Card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Card */ "./components/Card/index.js");
/* harmony import */ var _assets_meWithEggs_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../assets/meWithEggs.jpg */ "./assets/meWithEggs.jpg");
/* harmony import */ var _assets_meWithEggs_jpg__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_assets_meWithEggs_jpg__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_ImageCard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/ImageCard */ "./components/ImageCard/index.js");
/* harmony import */ var _assets_favs_jpg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../assets/favs.jpg */ "./assets/favs.jpg");
/* harmony import */ var _assets_favs_jpg__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_assets_favs_jpg__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _assets_dad_jpg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../assets/dad.jpg */ "./assets/dad.jpg");
/* harmony import */ var _assets_dad_jpg__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_assets_dad_jpg__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _assets_ceremony_jpg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../assets/ceremony.jpg */ "./assets/ceremony.jpg");
/* harmony import */ var _assets_ceremony_jpg__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_assets_ceremony_jpg__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _assets_fam_jpg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../assets/fam.jpg */ "./assets/fam.jpg");
/* harmony import */ var _assets_fam_jpg__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_assets_fam_jpg__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _assets_gang_jpg__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../assets/gang.jpg */ "./assets/gang.jpg");
/* harmony import */ var _assets_gang_jpg__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_assets_gang_jpg__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _assets_johnMayer_jpg__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../assets/johnMayer.jpg */ "./assets/johnMayer.jpg");
/* harmony import */ var _assets_johnMayer_jpg__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_assets_johnMayer_jpg__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _assets_meElephant_jpg__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../assets/meElephant.jpg */ "./assets/meElephant.jpg");
/* harmony import */ var _assets_meElephant_jpg__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_assets_meElephant_jpg__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _assets_nat_jpg__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../assets/nat.jpg */ "./assets/nat.jpg");
/* harmony import */ var _assets_nat_jpg__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_assets_nat_jpg__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _assets_parks_jpg__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../assets/parks.jpg */ "./assets/parks.jpg");
/* harmony import */ var _assets_parks_jpg__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_assets_parks_jpg__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _assets_theater_jpg__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../assets/theater.jpg */ "./assets/theater.jpg");
/* harmony import */ var _assets_theater_jpg__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_assets_theater_jpg__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _assets_theBoys_jpg__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../assets/theBoys.jpg */ "./assets/theBoys.jpg");
/* harmony import */ var _assets_theBoys_jpg__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_assets_theBoys_jpg__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _assets_theBoys2_jpg__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../assets/theBoys2.jpg */ "./assets/theBoys2.jpg");
/* harmony import */ var _assets_theBoys2_jpg__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(_assets_theBoys2_jpg__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _assets_will_jpg__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../assets/will.jpg */ "./assets/will.jpg");
/* harmony import */ var _assets_will_jpg__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(_assets_will_jpg__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var _assets_humo_jpg__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../assets/humo.jpg */ "./assets/humo.jpg");
/* harmony import */ var _assets_humo_jpg__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(_assets_humo_jpg__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var _assets_alsoFavs_jpg__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../assets/alsoFavs.jpg */ "./assets/alsoFavs.jpg");
/* harmony import */ var _assets_alsoFavs_jpg__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(_assets_alsoFavs_jpg__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var _assets_wendys_jpeg__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../assets/wendys.jpeg */ "./assets/wendys.jpeg");
/* harmony import */ var _assets_wendys_jpeg__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(_assets_wendys_jpeg__WEBPACK_IMPORTED_MODULE_21__);
var _jsxFileName = "C:\\Users\\front\\Documents\\GitHub\\portfolio\\pages\\gallery.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





















class Gallery extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor(props) {
    super(props);
    this.state = {
      hover: false
    };
  }

  render() {
    var picStyle;
    return __jsx("div", {
      className: "container",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 13
      }
    }, __jsx(_components_TopBarNavigator__WEBPACK_IMPORTED_MODULE_1__["default"], {
      currentPage: 3,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 17
      }
    }), __jsx("div", {
      style: {
        flex: 1,
        display: 'flex',
        flexDirection: 'row',
        margin: 0,
        padding: 0,
        border: 0
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 17
      }
    }, __jsx("div", {
      className: "galleryContent",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 21
      }
    }, __jsx(_components_ImageCard__WEBPACK_IMPORTED_MODULE_5__["default"], {
      source: _assets_meWithEggs_jpg__WEBPACK_IMPORTED_MODULE_4___default.a,
      height: 400,
      width: 600,
      transform: "400px",
      rotate: "0deg",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 25
      }
    }), __jsx(_components_ImageCard__WEBPACK_IMPORTED_MODULE_5__["default"], {
      source: _assets_johnMayer_jpg__WEBPACK_IMPORTED_MODULE_11___default.a,
      height: 400,
      width: 500,
      transform: "-400px",
      rotate: "0deg",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 25
      }
    }), __jsx(_components_ImageCard__WEBPACK_IMPORTED_MODULE_5__["default"], {
      source: _assets_dad_jpg__WEBPACK_IMPORTED_MODULE_7___default.a,
      height: 400,
      width: 500,
      transform: "400px",
      rotate: "0deg",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 25
      }
    }), __jsx(_components_ImageCard__WEBPACK_IMPORTED_MODULE_5__["default"], {
      source: _assets_ceremony_jpg__WEBPACK_IMPORTED_MODULE_8___default.a,
      height: 400,
      width: 600,
      transform: "-400px",
      rotate: "0deg",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 50,
        columnNumber: 25
      }
    }), __jsx(_components_ImageCard__WEBPACK_IMPORTED_MODULE_5__["default"], {
      source: _assets_fam_jpg__WEBPACK_IMPORTED_MODULE_9___default.a,
      height: 400,
      width: 500,
      transform: "400px",
      rotate: "0deg",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 53,
        columnNumber: 25
      }
    }), __jsx(_components_ImageCard__WEBPACK_IMPORTED_MODULE_5__["default"], {
      source: _assets_humo_jpg__WEBPACK_IMPORTED_MODULE_19___default.a,
      height: 400,
      width: 500,
      transform: "-350px",
      rotate: "0deg",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 56,
        columnNumber: 25
      }
    }), __jsx(_components_ImageCard__WEBPACK_IMPORTED_MODULE_5__["default"], {
      source: _assets_gang_jpg__WEBPACK_IMPORTED_MODULE_10___default.a,
      height: 400,
      width: 500,
      transform: "400px,-50px",
      rotate: "90deg",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 59,
        columnNumber: 25
      }
    }), __jsx(_components_ImageCard__WEBPACK_IMPORTED_MODULE_5__["default"], {
      source: _assets_favs_jpg__WEBPACK_IMPORTED_MODULE_6___default.a,
      height: 400,
      width: 600,
      transform: "-400px",
      rotate: "0deg",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 62,
        columnNumber: 25
      }
    }), __jsx(_components_ImageCard__WEBPACK_IMPORTED_MODULE_5__["default"], {
      source: _assets_meElephant_jpg__WEBPACK_IMPORTED_MODULE_12___default.a,
      height: 600,
      width: 400,
      transform: "300px",
      rotate: "0deg",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 66,
        columnNumber: 25
      }
    }), __jsx(_components_ImageCard__WEBPACK_IMPORTED_MODULE_5__["default"], {
      source: _assets_nat_jpg__WEBPACK_IMPORTED_MODULE_13___default.a,
      height: 500,
      width: 400,
      transform: "-300px",
      rotate: "0deg",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 69,
        columnNumber: 25
      }
    }), __jsx(_components_ImageCard__WEBPACK_IMPORTED_MODULE_5__["default"], {
      source: _assets_parks_jpg__WEBPACK_IMPORTED_MODULE_14___default.a,
      height: 400,
      width: 600,
      transform: "300px,-100px",
      rotate: "90deg",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 72,
        columnNumber: 25
      }
    }), __jsx(_components_ImageCard__WEBPACK_IMPORTED_MODULE_5__["default"], {
      source: _assets_theater_jpg__WEBPACK_IMPORTED_MODULE_15___default.a,
      height: 400,
      width: 600,
      transform: "-300px,-100px",
      rotate: "90deg",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 75,
        columnNumber: 25
      }
    }), __jsx(_components_ImageCard__WEBPACK_IMPORTED_MODULE_5__["default"], {
      source: _assets_theBoys_jpg__WEBPACK_IMPORTED_MODULE_16___default.a,
      height: 400,
      width: 600,
      transform: "400px",
      rotate: "0deg",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 78,
        columnNumber: 25
      }
    }), __jsx(_components_ImageCard__WEBPACK_IMPORTED_MODULE_5__["default"], {
      source: _assets_theBoys2_jpg__WEBPACK_IMPORTED_MODULE_17___default.a,
      height: 400,
      width: 500,
      transform: "-350px",
      rotate: "0deg",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 81,
        columnNumber: 25
      }
    }), __jsx(_components_ImageCard__WEBPACK_IMPORTED_MODULE_5__["default"], {
      source: _assets_will_jpg__WEBPACK_IMPORTED_MODULE_18___default.a,
      height: 400,
      width: 600,
      transform: "350px",
      rotate: "0deg",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 84,
        columnNumber: 25
      }
    }), __jsx(_components_ImageCard__WEBPACK_IMPORTED_MODULE_5__["default"], {
      source: _assets_alsoFavs_jpg__WEBPACK_IMPORTED_MODULE_20___default.a,
      height: 400,
      width: 500,
      transform: "-300px",
      rotate: "0deg",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 87,
        columnNumber: 25
      }
    }), __jsx(_components_ImageCard__WEBPACK_IMPORTED_MODULE_5__["default"], {
      source: _assets_wendys_jpeg__WEBPACK_IMPORTED_MODULE_21___default.a,
      height: 400,
      width: 500,
      transform: "400px",
      rotate: "90deg",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 90,
        columnNumber: 25
      }
    }))));
  }

}

/***/ }),

/***/ 5:
/*!********************************!*\
  !*** multi ./pages/gallery.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\front\Documents\GitHub\portfolio\pages\gallery.js */"./pages/gallery.js");


/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ })

/******/ });
//# sourceMappingURL=gallery.js.map