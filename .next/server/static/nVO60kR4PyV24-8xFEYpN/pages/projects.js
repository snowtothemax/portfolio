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
/******/ 	return __webpack_require__(__webpack_require__.s = 9);
/******/ })
/************************************************************************/
/******/ ({

/***/ "30Jy":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Card; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

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
        maxWidth: this.props.width,
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
        maxWidth: this.props.width,
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
        onClick: this.props.onClick
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
        }
      }, this.props.children);
    }
  }

}

/***/ }),

/***/ "4Q3z":
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "5SFx":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/meAvatar-cb03c40c71affade2e1d4453cee7e851.jpg";

/***/ }),

/***/ 9:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("RHEb");


/***/ }),

/***/ "EsZN":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/color-UWcrest-print-e7248716a8624ae9bd40314c8bba8a13.png";

/***/ }),

/***/ "P/9u":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TopBarNav; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("30Jy");
/* harmony import */ var _assets_color_UWcrest_print_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("EsZN");
/* harmony import */ var _assets_color_UWcrest_print_png__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_assets_color_UWcrest_print_png__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _assets_meAvatar_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("5SFx");
/* harmony import */ var _assets_meAvatar_jpg__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_assets_meAvatar_jpg__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("4Q3z");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("xnum");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_5__);

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
      className: "topbar"
    }, __jsx(_Card__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], {
      clickable: false,
      height: "100%",
      width: "40vw"
    }, __jsx("img", {
      src: _assets_color_UWcrest_print_png__WEBPACK_IMPORTED_MODULE_2___default.a,
      style: {
        paddingLeft: 55,
        height: 70,
        maxWidth: 60
      }
    }), __jsx("text", {
      style: {
        fontFamily: 'Gilroy',
        fontSize: 50,
        paddingLeft: 20
      }
    }, "Max Johnson")), __jsx(_Card__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], {
      clickable: true,
      height: this.state.cardHeight,
      width: "13vw",
      onClick: () => next_router__WEBPACK_IMPORTED_MODULE_4___default.a.push("/")
    }, __jsx("text", {
      style: {
        paddingTop: 17,
        fontSize: 30,
        fontFamily: 'Gilroy',
        color: selectColor1,
        paddingRight: 20
      }
    }, "Home")), __jsx(_Card__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], {
      clickable: true,
      height: this.state.cardHeight,
      width: "13vw",
      onClick: () => next_router__WEBPACK_IMPORTED_MODULE_4___default.a.push("/projects")
    }, __jsx("text", {
      style: {
        paddingTop: 17,
        fontSize: 30,
        fontFamily: 'Gilroy',
        color: selectColor2,
        paddingRight: 20
      }
    }, "Projects")), __jsx(_Card__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], {
      clickable: true,
      height: this.state.cardHeight,
      width: "13vw",
      onClick: () => next_router__WEBPACK_IMPORTED_MODULE_4___default.a.push("/gallery")
    }, __jsx("text", {
      style: {
        paddingTop: 17,
        fontSize: 30,
        fontFamily: 'Gilroy',
        color: selectColor3,
        paddingRight: 20
      }
    }, "Gallery")), __jsx(_Card__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], {
      clickable: true,
      height: this.state.cardHeight,
      width: "13vw",
      onClick: () => next_router__WEBPACK_IMPORTED_MODULE_4___default.a.push("/contact")
    }, __jsx("text", {
      style: {
        paddingTop: 17,
        fontSize: 30,
        fontFamily: 'Gilroy',
        color: selectColor4
      }
    }, "Contact")), __jsx(_Card__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], {
      clickable: false,
      height: this.state.cardHeight,
      width: "8vw"
    }, __jsx("img", {
      className: "avatar",
      src: _assets_meAvatar_jpg__WEBPACK_IMPORTED_MODULE_3___default.a,
      style: {
        borderRadius: '50%',
        height: 50,
        width: 50,
        transform: 'translate(0,20px)',
        position: 'absolute'
      }
    })));
  }

}

/***/ }),

/***/ "RHEb":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Project; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_TopBarNavigator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("P/9u");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("xnum");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


class Project extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  render() {
    return __jsx("div", {
      className: "container"
    }, __jsx(_components_TopBarNavigator__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], {
      currentPage: 2
    }), __jsx("div", {
      style: {
        flex: 1,
        display: 'flex',
        flexDirection: 'row',
        margin: 0,
        padding: 0,
        border: 0
      }
    }, __jsx("div", {
      className: "homeContent"
    }, __jsx("text", {
      style: {
        fontFamily: "Gilroy",
        fontSize: 70,
        marginTop: 100
      }
    }, "coming soon!"))));
  }

}

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "xnum":
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ })

/******/ });