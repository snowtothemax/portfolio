webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/TopBarNavigator/index.js":
/*!*********************************************!*\
  !*** ./components/TopBarNavigator/index.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return TopBarNav; });
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _Card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Card */ "./components/Card/index.js");
/* harmony import */ var _resources_color_UWcrest_print_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../resources/color-UWcrest-print.png */ "./resources/color-UWcrest-print.png");
/* harmony import */ var _resources_color_UWcrest_print_png__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_resources_color_UWcrest_print_png__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _resources_meAvatar_jpg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../resources/meAvatar.jpg */ "./resources/meAvatar.jpg");
/* harmony import */ var _resources_meAvatar_jpg__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_resources_meAvatar_jpg__WEBPACK_IMPORTED_MODULE_8__);





var _jsxFileName = "C:\\Users\\front\\Documents\\GitHub\\portfolio\\components\\TopBarNavigator\\index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement;

function _createSuper(Derived) { return function () { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }





var TopBarNav = /*#__PURE__*/function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(TopBarNav, _React$Component);

  var _super = _createSuper(TopBarNav);

  function TopBarNav(props) {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, TopBarNav);

    _this = _super.call(this, props);
    _this.state = {
      cardHeight: 40
    };
    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(TopBarNav, [{
    key: "render",
    value: function render() {
      return __jsx("div", {
        className: "topbar",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 16,
          columnNumber: 13
        }
      }, __jsx(_Card__WEBPACK_IMPORTED_MODULE_6__["default"], {
        clickable: false,
        height: "100%",
        width: "30vw",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19,
          columnNumber: 17
        }
      }, __jsx("img", {
        src: _resources_color_UWcrest_print_png__WEBPACK_IMPORTED_MODULE_7___default.a,
        style: {
          paddingLeft: 55,
          height: 70,
          maxWidth: 60
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20,
          columnNumber: 17
        }
      }), __jsx("text", {
        style: {
          fontFamily: 'arial',
          fontSize: 50,
          paddingLeft: 20,
          flex: 1
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21,
          columnNumber: 21
        }
      }, "Max Johnson")), __jsx(_Card__WEBPACK_IMPORTED_MODULE_6__["default"], {
        clickable: true,
        height: this.state.cardHeight,
        width: "15vw",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27,
          columnNumber: 17
        }
      }, __jsx("text", {
        style: {
          paddingTop: 17,
          fontSize: 40,
          fontFamily: 'arial'
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28,
          columnNumber: 21
        }
      }, "Home")), __jsx(_Card__WEBPACK_IMPORTED_MODULE_6__["default"], {
        clickable: true,
        height: this.state.cardHeight,
        width: "15vw",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34,
          columnNumber: 17
        }
      }, __jsx("text", {
        style: {
          paddingTop: 17,
          fontSize: 40,
          fontFamily: 'arial'
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35,
          columnNumber: 21
        }
      }, "Projects")), __jsx(_Card__WEBPACK_IMPORTED_MODULE_6__["default"], {
        clickable: true,
        height: this.state.cardHeight,
        width: "15vw",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41,
          columnNumber: 17
        }
      }, __jsx("text", {
        style: {
          paddingTop: 17,
          fontSize: 40,
          fontFamily: 'arial'
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42,
          columnNumber: 21
        }
      }, "Gallery")), __jsx(_Card__WEBPACK_IMPORTED_MODULE_6__["default"], {
        className: "Card",
        clickable: true,
        height: this.state.cardHeight,
        width: "15vw",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48,
          columnNumber: 17
        }
      }, __jsx("text", {
        style: {
          paddingTop: 17,
          fontSize: 40,
          fontFamily: 'arial'
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49,
          columnNumber: 21
        }
      }, "Contact")), __jsx(_Card__WEBPACK_IMPORTED_MODULE_6__["default"], {
        clickable: false,
        height: this.state.cardHeight,
        width: "10vw",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55,
          columnNumber: 17
        }
      }, __jsx("img", {
        src: _resources_meAvatar_jpg__WEBPACK_IMPORTED_MODULE_8___default.a,
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
          lineNumber: 56,
          columnNumber: 21
        }
      })));
    }
  }]);

  return TopBarNav;
}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component);



/***/ })

})
//# sourceMappingURL=index.js.c25e6ab7196209dcd092.hot-update.js.map