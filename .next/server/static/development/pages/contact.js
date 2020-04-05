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

/***/ "./assets/color-UWcrest-print.png":
/*!****************************************!*\
  !*** ./assets/color-UWcrest-print.png ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/color-UWcrest-print-736529d35728404aecf5f359a4217f52.png";

/***/ }),

/***/ "./assets/emailIcon.png":
/*!******************************!*\
  !*** ./assets/emailIcon.png ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/emailIcon-f33e9d7389425e7ac6523d22988da1ae.png";

/***/ }),

/***/ "./assets/facebook.png":
/*!*****************************!*\
  !*** ./assets/facebook.png ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQ4AAAEOCAYAAAB4sfmlAAAACXBIWXMAAC4jAAAuIwF4pT92AAAFIGlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDUgNzkuMTYzNDk5LCAyMDE4LzA4LzEzLTE2OjQwOjIyICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1sbnM6cGhvdG9zaG9wPSJodHRwOi8vbnMuYWRvYmUuY29tL3Bob3Rvc2hvcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxOSAoTWFjaW50b3NoKSIgeG1wOkNyZWF0ZURhdGU9IjIwMTktMDQtMzBUMTM6MjU6NTYtMDQ6MDAiIHhtcDpNb2RpZnlEYXRlPSIyMDE5LTA0LTMwVDE0OjQ2OjA0LTA0OjAwIiB4bXA6TWV0YWRhdGFEYXRlPSIyMDE5LTA0LTMwVDE0OjQ2OjA0LTA0OjAwIiBkYzpmb3JtYXQ9ImltYWdlL3BuZyIgcGhvdG9zaG9wOkNvbG9yTW9kZT0iMyIgcGhvdG9zaG9wOklDQ1Byb2ZpbGU9InNSR0IgSUVDNjE5NjYtMi4xIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOmViMTgxYzcwLWUx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"

/***/ }),

/***/ "./assets/github.png":
/*!***************************!*\
  !*** ./assets/github.png ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "./assets/instaHover.png":
/*!*******************************!*\
  !*** ./assets/instaHover.png ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/instaHover-0d6d505b796ab78204398550795afc87.png";

/***/ }),

/***/ "./assets/linkedIn.png":
/*!*****************************!*\
  !*** ./assets/linkedIn.png ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/linkedIn-35669f1c3d1bbcb9992b8c6127867b5a.png";

/***/ }),

/***/ "./assets/meAvatar.jpg":
/*!*****************************!*\
  !*** ./assets/meAvatar.jpg ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/meAvatar-f94bc5a516ef38610847328a9a8cc5f2.jpg";

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

/***/ "./components/verticalLine/index.js":
/*!******************************************!*\
  !*** ./components/verticalLine/index.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return VerticalLine; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "C:\\Users\\front\\Documents\\GitHub\\portfolio\\components\\verticalLine\\index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
class VerticalLine extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  render() {
    return __jsx("div", {
      style: {
        borderLeft: '4px solid black',
        height: '70%',
        transform: "translate(0,50px)"
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 6,
        columnNumber: 13
      }
    });
  }

}

/***/ }),

/***/ "./pages/contact.js":
/*!**************************!*\
  !*** ./pages/contact.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Contact; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_TopBarNavigator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/TopBarNavigator */ "./components/TopBarNavigator/index.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _assets_instaHover_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../assets/instaHover.png */ "./assets/instaHover.png");
/* harmony import */ var _assets_instaHover_png__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_assets_instaHover_png__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _assets_facebook_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../assets/facebook.png */ "./assets/facebook.png");
/* harmony import */ var _assets_facebook_png__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_assets_facebook_png__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _assets_github_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../assets/github.png */ "./assets/github.png");
/* harmony import */ var _assets_github_png__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_assets_github_png__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _assets_linkedIn_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../assets/linkedIn.png */ "./assets/linkedIn.png");
/* harmony import */ var _assets_linkedIn_png__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_assets_linkedIn_png__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _components_verticalLine__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/verticalLine */ "./components/verticalLine/index.js");
/* harmony import */ var _components_Card__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/Card */ "./components/Card/index.js");
/* harmony import */ var _assets_emailIcon_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../assets/emailIcon.png */ "./assets/emailIcon.png");
/* harmony import */ var _assets_emailIcon_png__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_assets_emailIcon_png__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_10__);
var _jsxFileName = "C:\\Users\\front\\Documents\\GitHub\\portfolio\\pages\\contact.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;










class Contact extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  render() {
    return __jsx("div", {
      className: "container",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 13
      }
    }, __jsx(_components_TopBarNavigator__WEBPACK_IMPORTED_MODULE_1__["default"], {
      currentPage: 4,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19,
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
        lineNumber: 20,
        columnNumber: 17
      }
    }, __jsx("div", {
      className: "galleryContent",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 21
      }
    }, __jsx("div", {
      style: {
        maxHeight: '40vh',
        maxWidth: '100vw',
        justifyContent: 'center',
        textAlign: 'center',
        flex: 1,
        display: 'flex'
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 25
      }
    }, __jsx("p", {
      style: {
        fontFamily: 'Gilroy',
        fontSize: 40,
        flex: 1,
        marginTop: 120
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 29
      }
    }, "here's how you can contact me.")), __jsx("div", {
      style: {
        flexDirection: 'row',
        display: 'flex',
        justifyContent: "center",
        textAlign: 'center',
        margin: 20
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 25
      }
    }, __jsx(_components_Card__WEBPACK_IMPORTED_MODULE_8__["default"], {
      height: "auto",
      width: "auto",
      clickable: true,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 29
      }
    }, __jsx("img", {
      src: _assets_linkedIn_png__WEBPACK_IMPORTED_MODULE_6___default.a,
      style: {
        maxHeight: 50,
        maxWidth: 50,
        marginRight: 20
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 33
      }
    })), __jsx(_components_Card__WEBPACK_IMPORTED_MODULE_8__["default"], {
      height: "auto",
      width: "auto",
      clickable: true,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 29
      }
    }, __jsx("img", {
      src: _assets_facebook_png__WEBPACK_IMPORTED_MODULE_4___default.a,
      style: {
        maxHeight: 35,
        maxWidth: 35,
        marginRight: 30,
        marginTop: 7
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 33
      }
    })), __jsx("div", {
      style: {
        borderLeft: '2px solid black',
        height: '70%',
        justifyContent: 'center',
        transform: "translate(0, 7px)"
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 29
      }
    }), __jsx("div", {
      style: {
        justifyContent: 'center',
        textAlign: 'center',
        display: 'flex'
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45,
        columnNumber: 29
      }
    }, __jsx("text", {
      style: {
        fontFamily: "Gilroy",
        fontSize: 30,
        marginLeft: 20,
        marginTop: 5
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 33
      }
    }, "Maxwell Johnson"))), __jsx("div", {
      style: {
        flexDirection: 'row',
        display: 'flex',
        justifyContent: "center",
        textAlign: 'center',
        margin: 20
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 53,
        columnNumber: 25
      }
    }, __jsx(_components_Card__WEBPACK_IMPORTED_MODULE_8__["default"], {
      clickable: true,
      height: "auto",
      width: "auto",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 54,
        columnNumber: 29
      }
    }, __jsx("img", {
      src: _assets_instaHover_png__WEBPACK_IMPORTED_MODULE_3___default.a,
      style: {
        maxHeight: 70,
        maxWidth: 70,
        marginTop: 7,
        marginRight: 0,
        marginLeft: -37
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 55,
        columnNumber: 33
      }
    })), __jsx(_components_Card__WEBPACK_IMPORTED_MODULE_8__["default"], {
      clickable: true,
      height: "auto",
      width: "auto",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 59,
        columnNumber: 29
      }
    }, __jsx("img", {
      src: _assets_github_png__WEBPACK_IMPORTED_MODULE_5___default.a,
      style: {
        maxHeight: 50,
        maxWidth: 50,
        marginTop: 0,
        marginRight: 20
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 60,
        columnNumber: 33
      }
    })), __jsx("div", {
      style: {
        borderLeft: '2px solid black',
        height: '80%',
        justifyContent: 'center',
        transform: "translate(0, 7px)"
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 64,
        columnNumber: 29
      }
    }), __jsx("div", {
      style: {
        justifyContent: 'center',
        textAlign: 'center',
        display: 'flex'
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 66,
        columnNumber: 29
      }
    }, __jsx("text", {
      style: {
        fontFamily: "Gilroy",
        fontSize: 30,
        marginLeft: 20,
        marginTop: 5
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 67,
        columnNumber: 33
      }
    }, "snowtothemax"))), __jsx("div", {
      style: {
        flexDirection: 'row',
        display: 'flex',
        justifyContent: "center",
        textAlign: 'center',
        margin: 20,
        marginLeft: 50
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 74,
        columnNumber: 25
      }
    }, __jsx(_components_Card__WEBPACK_IMPORTED_MODULE_8__["default"], {
      clickable: false,
      height: "auto",
      width: "auto",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 75,
        columnNumber: 29
      }
    }, __jsx("img", {
      src: _assets_emailIcon_png__WEBPACK_IMPORTED_MODULE_9___default.a,
      style: {
        maxHeight: 40,
        maxWidth: 40,
        marginTop: 7,
        marginRight: 20
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 76,
        columnNumber: 33
      }
    })), __jsx("div", {
      style: {
        borderLeft: '2px solid black',
        height: '80%',
        justifyContent: 'center',
        transform: "translate(0, 7px)"
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 80,
        columnNumber: 29
      }
    }), __jsx("div", {
      style: {
        justifyContent: 'center',
        textAlign: 'center',
        display: 'flex'
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 82,
        columnNumber: 29
      }
    }, __jsx("text", {
      style: {
        fontFamily: "Gilroy",
        fontSize: 30,
        marginLeft: 20,
        marginTop: 5
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 83,
        columnNumber: 33
      }
    }, "mkjohnson9@wisc.edu"))))));
  }

}

/***/ }),

/***/ 5:
/*!********************************!*\
  !*** multi ./pages/contact.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\front\Documents\GitHub\portfolio\pages\contact.js */"./pages/contact.js");


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
//# sourceMappingURL=contact.js.map