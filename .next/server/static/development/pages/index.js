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

module.exports = "/_next/static/images/color-UWcrest-print-e7248716a8624ae9bd40314c8bba8a13.png";

/***/ }),

/***/ "./assets/meAvatar.jpg":
/*!*****************************!*\
  !*** ./assets/meAvatar.jpg ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/meAvatar-cb03c40c71affade2e1d4453cee7e851.jpg";

/***/ }),

/***/ "./assets/meLake.jpg":
/*!***************************!*\
  !*** ./assets/meLake.jpg ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/meLake-7103db1e54a745aed8773ac04e850b9d.jpg";

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
          lineNumber: 26,
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
          lineNumber: 34,
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
/* harmony import */ var _Card__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Card */ "./components/Card/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\front\\Documents\\GitHub\\portfolio\\components\\ImageCard\\index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


class ImageCard extends react__WEBPACK_IMPORTED_MODULE_1___default.a.Component {
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

    return __jsx(_Card__WEBPACK_IMPORTED_MODULE_0__["default"], {
      width: "auto",
      height: "auto",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31,
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
        lineNumber: 33,
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
/* harmony import */ var _Card__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Card */ "./components/Card/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _assets_color_UWcrest_print_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../assets/color-UWcrest-print.png */ "./assets/color-UWcrest-print.png");
/* harmony import */ var _assets_color_UWcrest_print_png__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_assets_color_UWcrest_print_png__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _assets_meAvatar_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../assets/meAvatar.jpg */ "./assets/meAvatar.jpg");
/* harmony import */ var _assets_meAvatar_jpg__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_assets_meAvatar_jpg__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName = "C:\\Users\\front\\Documents\\GitHub\\portfolio\\components\\TopBarNavigator\\index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;






class TopBarNav extends react__WEBPACK_IMPORTED_MODULE_1___default.a.Component {
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
        lineNumber: 27,
        columnNumber: 13
      }
    }, __jsx(_Card__WEBPACK_IMPORTED_MODULE_0__["default"], {
      clickable: false,
      height: "100%",
      width: "40vw",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29,
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
        lineNumber: 30,
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
        lineNumber: 31,
        columnNumber: 21
      }
    }, "Max Johnson")), __jsx(_Card__WEBPACK_IMPORTED_MODULE_0__["default"], {
      clickable: true,
      height: this.state.cardHeight,
      width: "13vw",
      onClick: () => next_router__WEBPACK_IMPORTED_MODULE_4___default.a.push("/"),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 17
      }
    }, __jsx("text", {
      style: {
        paddingTop: 17,
        fontSize: 30,
        fontFamily: 'Gilroy',
        color: selectColor1,
        paddingRight: 20
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 21
      }
    }, "Home")), __jsx(_Card__WEBPACK_IMPORTED_MODULE_0__["default"], {
      clickable: true,
      height: this.state.cardHeight,
      width: "13vw",
      onClick: () => next_router__WEBPACK_IMPORTED_MODULE_4___default.a.push("/projects"),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 17
      }
    }, __jsx("text", {
      style: {
        paddingTop: 17,
        fontSize: 30,
        fontFamily: 'Gilroy',
        color: selectColor2,
        paddingRight: 20
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 48,
        columnNumber: 21
      }
    }, "Projects")), __jsx(_Card__WEBPACK_IMPORTED_MODULE_0__["default"], {
      clickable: true,
      height: this.state.cardHeight,
      width: "13vw",
      onClick: () => next_router__WEBPACK_IMPORTED_MODULE_4___default.a.push("/gallery"),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 56,
        columnNumber: 17
      }
    }, __jsx("text", {
      style: {
        paddingTop: 17,
        fontSize: 30,
        fontFamily: 'Gilroy',
        color: selectColor3,
        paddingRight: 20
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 57,
        columnNumber: 21
      }
    }, "Gallery")), __jsx(_Card__WEBPACK_IMPORTED_MODULE_0__["default"], {
      clickable: true,
      height: this.state.cardHeight,
      width: "13vw",
      onClick: () => next_router__WEBPACK_IMPORTED_MODULE_4___default.a.push("/contact"),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 65,
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
        lineNumber: 66,
        columnNumber: 21
      }
    }, "Contact")), __jsx(_Card__WEBPACK_IMPORTED_MODULE_0__["default"], {
      clickable: false,
      height: this.state.cardHeight,
      width: "8vw",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 73,
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
        lineNumber: 74,
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
        lineNumber: 7,
        columnNumber: 13
      }
    });
  }

}

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Index; });
/* harmony import */ var _components_verticalLine__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/verticalLine */ "./components/verticalLine/index.js");
/* harmony import */ var _components_TopBarNavigator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/TopBarNavigator */ "./components/TopBarNavigator/index.js");
/* harmony import */ var _components_ImageCard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/ImageCard */ "./components/ImageCard/index.js");
/* harmony import */ var _assets_meLake_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../assets/meLake.jpg */ "./assets/meLake.jpg");
/* harmony import */ var _assets_meLake_jpg__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_assets_meLake_jpg__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "C:\\Users\\front\\Documents\\GitHub\\portfolio\\pages\\index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement;





class Index extends react__WEBPACK_IMPORTED_MODULE_4___default.a.Component {
  render() {
    return __jsx("div", {
      className: "container",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 13
      }
    }, __jsx(_components_TopBarNavigator__WEBPACK_IMPORTED_MODULE_1__["default"], {
      currentPage: 1,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15,
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
        lineNumber: 16,
        columnNumber: 17
      }
    }, __jsx("div", {
      className: "homeContent",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 21
      }
    }, __jsx("div", {
      style: {
        marginLeft: 60,
        marginRight: 60,
        paddingTop: 50,
        maxWidth: '100vw',
        flex: 1,
        display: "flex",
        flexDirection: 'column',
        textAlign: 'center'
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 25
      }
    }, __jsx("div", {
      style: {
        width: '100vw',
        height: 'auto',
        flex: 1,
        flexDirection: 'row',
        display: 'flex',
        textAlign: 'center',
        justifyContent: 'center'
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 29
      }
    }, __jsx("div", {
      style: {
        flex: 1,
        justifyContent: 'center',
        textAlign: 'center',
        flexDirection: 'column',
        display: 'flex',
        paddingTop: 50,
        maxWidth: '40vw',
        marginRight: 40
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 33
      }
    }, __jsx("text", {
      style: {
        fontFamily: "Gilroy",
        fontSize: 100,
        flex: 1
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 37
      }
    }, "Hi!"), __jsx("text", {
      style: {
        fontFamily: "Gilroy",
        fontSize: 20,
        flex: 1
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 37
      }
    }, "I'm Max Johnson, a Computer Science and Computer Engineering Student at UW-Madison")), __jsx("img", {
      src: _assets_meLake_jpg__WEBPACK_IMPORTED_MODULE_3___default.a,
      style: {
        height: 300,
        width: 400,
        marginRight: 100
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 33
      }
    })), __jsx("div", {
      style: {
        paddingTop: 50,
        width: '100vw',
        height: 'auto',
        flex: 1,
        flexDirection: 'row',
        display: 'flex',
        textAlign: 'center',
        justifyContent: 'center'
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 29
      }
    }, __jsx(_components_verticalLine__WEBPACK_IMPORTED_MODULE_0__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 33
      }
    }), __jsx("div", {
      style: {
        maxWidth: '60vw',
        height: 'auto',
        flex: 1,
        paddingTop: 30,
        margin: 40
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 33
      }
    }, __jsx("p", {
      style: {
        fontFamily: "Gilroy",
        fontSize: 20
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 37
      }
    }, "This is one of my first projects in web development and theres a lot for me to learn in the future! Go take a look around at some of my favorite memories and projects if you'd like. If you would like to get in contact with me, just click \"Contact\"!")), __jsx(_components_verticalLine__WEBPACK_IMPORTED_MODULE_0__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 33
      }
    }))))));
  }

}

/***/ }),

/***/ 5:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\front\Documents\GitHub\portfolio\pages\index.js */"./pages/index.js");


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
//# sourceMappingURL=index.js.map