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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "/GUV":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/will-667ba381da7e1c80853f6da4762da7bc.jpg";

/***/ }),

/***/ 3:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("dmCw");


/***/ }),

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

/***/ "EsZN":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/color-UWcrest-print-e7248716a8624ae9bd40314c8bba8a13.png";

/***/ }),

/***/ "Kx6P":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/theBoys2-989d07bd98149c53ceb3ea6fa2057684.jpg";

/***/ }),

/***/ "MUPc":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/wendys-c4d21e2707480be1da6ff4cf7ebb4a17.jpeg";

/***/ }),

/***/ "NIU1":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/favs-fc9f4b00812df888bf4526e440a1201a.jpg";

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

/***/ "Rji7":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/johnMayer-03e58ba2a32d4653867de4ac37545edd.jpg";

/***/ }),

/***/ "XGAd":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/meElephant-c2c450e9e0c92811fec3467540e022bf.jpg";

/***/ }),

/***/ "YLL2":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ImageCard; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("30Jy");

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

    return __jsx(_Card__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], {
      width: "auto",
      height: "auto"
    }, __jsx("img", {
      src: this.props.source,
      style: imgStyle,
      onMouseEnter: () => this.setState({
        hover: true
      }),
      onMouseLeave: () => this.setState({
        hover: false
      })
    }));
  }

}

/***/ }),

/***/ "YZML":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/parks-4dbb097c3ab8351ba7792431a710c62f.jpg";

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "dGWm":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/alsoFavs-8f5f39a28476189c4f526f5a2215ae36.jpg";

/***/ }),

/***/ "dmCw":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Gallery; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_TopBarNavigator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("P/9u");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("xnum");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_Card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("30Jy");
/* harmony import */ var _assets_meWithEggs_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("jm+F");
/* harmony import */ var _assets_meWithEggs_jpg__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_assets_meWithEggs_jpg__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_ImageCard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("YLL2");
/* harmony import */ var _assets_favs_jpg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("NIU1");
/* harmony import */ var _assets_favs_jpg__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_assets_favs_jpg__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _assets_dad_jpg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("ovS8");
/* harmony import */ var _assets_dad_jpg__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_assets_dad_jpg__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _assets_ceremony_jpg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("u9im");
/* harmony import */ var _assets_ceremony_jpg__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_assets_ceremony_jpg__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _assets_fam_jpg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("vXCW");
/* harmony import */ var _assets_fam_jpg__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_assets_fam_jpg__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _assets_gang_jpg__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("r7Hn");
/* harmony import */ var _assets_gang_jpg__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_assets_gang_jpg__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _assets_johnMayer_jpg__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("Rji7");
/* harmony import */ var _assets_johnMayer_jpg__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_assets_johnMayer_jpg__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _assets_meElephant_jpg__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("XGAd");
/* harmony import */ var _assets_meElephant_jpg__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_assets_meElephant_jpg__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _assets_nat_jpg__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("wq6z");
/* harmony import */ var _assets_nat_jpg__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_assets_nat_jpg__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _assets_parks_jpg__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("YZML");
/* harmony import */ var _assets_parks_jpg__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_assets_parks_jpg__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _assets_theater_jpg__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__("j4WY");
/* harmony import */ var _assets_theater_jpg__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_assets_theater_jpg__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _assets_theBoys_jpg__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__("xOGF");
/* harmony import */ var _assets_theBoys_jpg__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_assets_theBoys_jpg__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _assets_theBoys2_jpg__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__("Kx6P");
/* harmony import */ var _assets_theBoys2_jpg__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(_assets_theBoys2_jpg__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _assets_will_jpg__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__("/GUV");
/* harmony import */ var _assets_will_jpg__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(_assets_will_jpg__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var _assets_humo_jpg__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__("ygUx");
/* harmony import */ var _assets_humo_jpg__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(_assets_humo_jpg__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var _assets_alsoFavs_jpg__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__("dGWm");
/* harmony import */ var _assets_alsoFavs_jpg__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(_assets_alsoFavs_jpg__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var _assets_wendys_jpeg__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__("MUPc");
/* harmony import */ var _assets_wendys_jpeg__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(_assets_wendys_jpeg__WEBPACK_IMPORTED_MODULE_21__);

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
      className: "container"
    }, __jsx(_components_TopBarNavigator__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], {
      currentPage: 3
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
      className: "galleryContent"
    }, __jsx(_components_ImageCard__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"], {
      source: _assets_meWithEggs_jpg__WEBPACK_IMPORTED_MODULE_4___default.a,
      height: 400,
      width: 600,
      transform: "400px",
      rotate: "0deg"
    }), __jsx(_components_ImageCard__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"], {
      source: _assets_johnMayer_jpg__WEBPACK_IMPORTED_MODULE_11___default.a,
      height: 400,
      width: 500,
      transform: "-400px",
      rotate: "0deg"
    }), __jsx(_components_ImageCard__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"], {
      source: _assets_dad_jpg__WEBPACK_IMPORTED_MODULE_7___default.a,
      height: 400,
      width: 500,
      transform: "400px",
      rotate: "0deg"
    }), __jsx(_components_ImageCard__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"], {
      source: _assets_ceremony_jpg__WEBPACK_IMPORTED_MODULE_8___default.a,
      height: 400,
      width: 600,
      transform: "-400px",
      rotate: "0deg"
    }), __jsx(_components_ImageCard__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"], {
      source: _assets_fam_jpg__WEBPACK_IMPORTED_MODULE_9___default.a,
      height: 400,
      width: 500,
      transform: "400px",
      rotate: "0deg"
    }), __jsx(_components_ImageCard__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"], {
      source: _assets_humo_jpg__WEBPACK_IMPORTED_MODULE_19___default.a,
      height: 400,
      width: 500,
      transform: "-350px",
      rotate: "0deg"
    }), __jsx(_components_ImageCard__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"], {
      source: _assets_gang_jpg__WEBPACK_IMPORTED_MODULE_10___default.a,
      height: 400,
      width: 500,
      transform: "400px,-50px",
      rotate: "90deg"
    }), __jsx(_components_ImageCard__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"], {
      source: _assets_favs_jpg__WEBPACK_IMPORTED_MODULE_6___default.a,
      height: 400,
      width: 600,
      transform: "-400px",
      rotate: "0deg"
    }), __jsx(_components_ImageCard__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"], {
      source: _assets_meElephant_jpg__WEBPACK_IMPORTED_MODULE_12___default.a,
      height: 600,
      width: 400,
      transform: "300px",
      rotate: "0deg"
    }), __jsx(_components_ImageCard__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"], {
      source: _assets_nat_jpg__WEBPACK_IMPORTED_MODULE_13___default.a,
      height: 500,
      width: 400,
      transform: "-300px",
      rotate: "0deg"
    }), __jsx(_components_ImageCard__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"], {
      source: _assets_parks_jpg__WEBPACK_IMPORTED_MODULE_14___default.a,
      height: 400,
      width: 600,
      transform: "300px,-100px",
      rotate: "90deg"
    }), __jsx(_components_ImageCard__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"], {
      source: _assets_theater_jpg__WEBPACK_IMPORTED_MODULE_15___default.a,
      height: 400,
      width: 600,
      transform: "-300px,-100px",
      rotate: "90deg"
    }), __jsx(_components_ImageCard__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"], {
      source: _assets_theBoys_jpg__WEBPACK_IMPORTED_MODULE_16___default.a,
      height: 400,
      width: 600,
      transform: "400px",
      rotate: "0deg"
    }), __jsx(_components_ImageCard__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"], {
      source: _assets_theBoys2_jpg__WEBPACK_IMPORTED_MODULE_17___default.a,
      height: 400,
      width: 500,
      transform: "-350px",
      rotate: "0deg"
    }), __jsx(_components_ImageCard__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"], {
      source: _assets_will_jpg__WEBPACK_IMPORTED_MODULE_18___default.a,
      height: 400,
      width: 600,
      transform: "350px",
      rotate: "0deg"
    }), __jsx(_components_ImageCard__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"], {
      source: _assets_alsoFavs_jpg__WEBPACK_IMPORTED_MODULE_20___default.a,
      height: 400,
      width: 500,
      transform: "-300px",
      rotate: "0deg"
    }), __jsx(_components_ImageCard__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"], {
      source: _assets_wendys_jpeg__WEBPACK_IMPORTED_MODULE_21___default.a,
      height: 400,
      width: 500,
      transform: "400px",
      rotate: "90deg"
    }))));
  }

}

/***/ }),

/***/ "j4WY":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/theater-6836b9fa67535da0469d558b1baedf81.jpg";

/***/ }),

/***/ "jm+F":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/meWithEggs-c62e61efc63bdf018b32c30dae8d6c7a.jpg";

/***/ }),

/***/ "ovS8":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/dad-899b9c32ba8513a27d4147e6f63c507a.jpg";

/***/ }),

/***/ "r7Hn":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/gang-fbc1bee9a63f1966e3491b6e49054e77.jpg";

/***/ }),

/***/ "u9im":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/ceremony-e67a2455f808eac4b01e537f41d56c40.jpg";

/***/ }),

/***/ "vXCW":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/fam-010eea66f81de050396d3a10973804a7.jpg";

/***/ }),

/***/ "wq6z":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/nat-03ca8bdd7bc4b4333ff808c4e80ca113.jpg";

/***/ }),

/***/ "xOGF":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/theBoys-473959ded5a65bcc3f6d11d9e6f1c593.jpg";

/***/ }),

/***/ "xnum":
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "ygUx":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/humo-772b5c6cc2cedba6b346f26770d8f91b.jpg";

/***/ })

/******/ });