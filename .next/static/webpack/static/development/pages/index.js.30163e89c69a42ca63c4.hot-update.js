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
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _Card__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../Card */ "./components/Card/index.js");
/* harmony import */ var _resources_color_UWcrest_print_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../resources/color-UWcrest-print.png */ "./resources/color-UWcrest-print.png");
/* harmony import */ var _resources_color_UWcrest_print_png__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_resources_color_UWcrest_print_png__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _resources_meAvatar_jpg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../resources/meAvatar.jpg */ "./resources/meAvatar.jpg");
/* harmony import */ var _resources_meAvatar_jpg__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_resources_meAvatar_jpg__WEBPACK_IMPORTED_MODULE_9__);





var _jsxFileName = "C:\\Users\\front\\Documents\\GitHub\\portfolio\\components\\TopBarNavigator\\index.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement;

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
        className: "jsx-3321574044" + " " + 'topbar',
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 15,
          columnNumber: 13
        }
      }, __jsx(_Card__WEBPACK_IMPORTED_MODULE_7__["default"], {
        clickable: false,
        height: "100%",
        width: "30vw",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18,
          columnNumber: 17
        }
      }, __jsx("img", {
        src: _resources_color_UWcrest_print_png__WEBPACK_IMPORTED_MODULE_8___default.a,
        style: {
          paddingLeft: 55,
          height: 70,
          maxWidth: 60
        },
        className: "jsx-3321574044",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19,
          columnNumber: 17
        }
      }), __jsx("text", {
        style: {
          fontFamily: 'arial',
          fontSize: 50,
          paddingLeft: 20,
          flex: 1
        },
        className: "jsx-3321574044",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20,
          columnNumber: 21
        }
      }, "Max Johnson")), __jsx(_Card__WEBPACK_IMPORTED_MODULE_7__["default"], {
        clickable: true,
        height: this.state.cardHeight,
        width: "15vw",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26,
          columnNumber: 17
        }
      }, __jsx("text", {
        style: {
          paddingTop: 17,
          fontSize: 40,
          fontFamily: 'arial'
        },
        className: "jsx-3321574044",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27,
          columnNumber: 21
        }
      }, "Home")), __jsx(_Card__WEBPACK_IMPORTED_MODULE_7__["default"], {
        clickable: true,
        height: this.state.cardHeight,
        width: "15vw",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33,
          columnNumber: 17
        }
      }, __jsx("text", {
        style: {
          paddingTop: 17,
          fontSize: 40,
          fontFamily: 'arial'
        },
        className: "jsx-3321574044",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34,
          columnNumber: 21
        }
      }, "Projects")), __jsx(_Card__WEBPACK_IMPORTED_MODULE_7__["default"], {
        clickable: true,
        height: this.state.cardHeight,
        width: "15vw",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40,
          columnNumber: 17
        }
      }, __jsx("text", {
        style: {
          paddingTop: 17,
          fontSize: 40,
          fontFamily: 'arial'
        },
        className: "jsx-3321574044",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41,
          columnNumber: 21
        }
      }, "Gallery")), __jsx(_Card__WEBPACK_IMPORTED_MODULE_7__["default"], {
        className: "Card",
        clickable: true,
        height: this.state.cardHeight,
        width: "15vw",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47,
          columnNumber: 17
        }
      }, __jsx("text", {
        style: {
          paddingTop: 17,
          fontSize: 40,
          fontFamily: 'arial'
        },
        className: "jsx-3321574044",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48,
          columnNumber: 21
        }
      }, "Contact")), __jsx(_Card__WEBPACK_IMPORTED_MODULE_7__["default"], {
        clickable: false,
        height: this.state.cardHeight,
        width: "10vw",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54,
          columnNumber: 17
        }
      }, __jsx("img", {
        src: _resources_meAvatar_jpg__WEBPACK_IMPORTED_MODULE_9___default.a,
        style: {
          borderRadius: '50%',
          height: 50,
          width: 50,
          transform: 'translate(0,20px)',
          position: 'absolute'
        },
        className: "jsx-3321574044",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55,
          columnNumber: 21
        }
      })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a, {
        id: "3321574044",
        __self: this
      }, ".topbar.jsx-3321574044{margin:0;padding:0;border:0;max-height:40;max-width:100%;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}.text.jsx-3321574044{font-size:100;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcZnJvbnRcXERvY3VtZW50c1xcR2l0SHViXFxwb3J0Zm9saW9cXGNvbXBvbmVudHNcXFRvcEJhck5hdmlnYXRvclxcaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBMER3QixBQUc2QixBQVVNLFNBVEwsS0FVYixLQVRZLFNBQ0ssY0FDRSxlQUNJLHFFQUNOLDBFQUNqQiIsImZpbGUiOiJDOlxcVXNlcnNcXGZyb250XFxEb2N1bWVudHNcXEdpdEh1YlxccG9ydGZvbGlvXFxjb21wb25lbnRzXFxUb3BCYXJOYXZpZ2F0b3JcXGluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IENhcmQgZnJvbSAnLi4vQ2FyZCdcclxuaW1wb3J0IHV3TG9nbyBmcm9tICcuLi8uLi9yZXNvdXJjZXMvY29sb3ItVVdjcmVzdC1wcmludC5wbmcnXHJcbmltcG9ydCBtZVBob3RvIGZyb20gJy4uLy4uL3Jlc291cmNlcy9tZUF2YXRhci5qcGcnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUb3BCYXJOYXYgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnR7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcyl7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpXHJcbiAgICAgICAgdGhpcy5zdGF0ZT17XHJcbiAgICAgICAgICAgIGNhcmRIZWlnaHQ6IDQwXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpe1xyXG4gICAgICAgIHJldHVybihcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3RvcGJhcic+XHJcblxyXG4gICAgICAgICAgICAgICAgey8qIE15IG5hbWUgYW5kIHdpc2NvbnNpbiBJbWFnZSAqL31cclxuICAgICAgICAgICAgICAgIDxDYXJkIGNsaWNrYWJsZT17ZmFsc2V9IGhlaWdodD0nMTAwJScgd2lkdGg9JzMwdncnPlxyXG4gICAgICAgICAgICAgICAgPGltZyBzcmM9e3V3TG9nb30gc3R5bGU9e3twYWRkaW5nTGVmdDogNTUsIGhlaWdodDogNzAsIG1heFdpZHRoOiA2MH19PjwvaW1nPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0ZXh0IHN0eWxlPXt7IGZvbnRGYW1pbHk6ICdhcmlhbCcsIGZvbnRTaXplOiA1MCwgcGFkZGluZ0xlZnQ6IDIwLCBmbGV4OiAxIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBNYXggSm9obnNvblxyXG4gICAgICAgICAgICAgICAgPC90ZXh0PlxyXG4gICAgICAgICAgICAgICAgPC9DYXJkPlxyXG5cclxuICAgICAgICAgICAgICAgIHsvKiBIb21lIEJ1dHRvbiAqL31cclxuICAgICAgICAgICAgICAgIDxDYXJkIGNsaWNrYWJsZT17dHJ1ZX0gaGVpZ2h0PXt0aGlzLnN0YXRlLmNhcmRIZWlnaHR9IHdpZHRoPSAnMTV2dyc+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRleHQgc3R5bGU9e3twYWRkaW5nVG9wOiAxNywgZm9udFNpemU6IDQwLCBmb250RmFtaWx5OiAnYXJpYWwnfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEhvbWVcclxuICAgICAgICAgICAgICAgICAgICA8L3RleHQ+XHJcbiAgICAgICAgICAgICAgICA8L0NhcmQ+XHJcblxyXG4gICAgICAgICAgICAgICAgey8qIFByb2plY3RzIEJ1dHRvbiAqL31cclxuICAgICAgICAgICAgICAgIDxDYXJkIGNsaWNrYWJsZT17dHJ1ZX0gaGVpZ2h0PXt0aGlzLnN0YXRlLmNhcmRIZWlnaHR9IHdpZHRoPSAnMTV2dyc+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRleHQgc3R5bGU9e3twYWRkaW5nVG9wOiAxNywgZm9udFNpemU6IDQwLCBmb250RmFtaWx5OiAnYXJpYWwnfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFByb2plY3RzXHJcbiAgICAgICAgICAgICAgICAgICAgPC90ZXh0PlxyXG4gICAgICAgICAgICAgICAgPC9DYXJkPlxyXG5cclxuICAgICAgICAgICAgICAgIHsvKiBHYWxsZXJ5IEJ1dHRvbiAqL31cclxuICAgICAgICAgICAgICAgIDxDYXJkIGNsaWNrYWJsZT17dHJ1ZX0gaGVpZ2h0PXt0aGlzLnN0YXRlLmNhcmRIZWlnaHR9IHdpZHRoPSAnMTV2dyc+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRleHQgc3R5bGU9e3twYWRkaW5nVG9wOiAxNywgZm9udFNpemU6IDQwLCBmb250RmFtaWx5OiAnYXJpYWwnfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEdhbGxlcnlcclxuICAgICAgICAgICAgICAgICAgICA8L3RleHQ+XHJcbiAgICAgICAgICAgICAgICA8L0NhcmQ+XHJcblxyXG4gICAgICAgICAgICAgICAgey8qKiBDb250YWN0IEJ1dHRvbiAqL31cclxuICAgICAgICAgICAgICAgIDxDYXJkIGNsYXNzTmFtZT0nQ2FyZCcgIGNsaWNrYWJsZT17dHJ1ZX0gaGVpZ2h0PXt0aGlzLnN0YXRlLmNhcmRIZWlnaHR9IHdpZHRoPSAnMTV2dyc+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRleHQgc3R5bGU9e3twYWRkaW5nVG9wOiAxNywgZm9udFNpemU6IDQwLCBmb250RmFtaWx5OiAnYXJpYWwnfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIENvbnRhY3RcclxuICAgICAgICAgICAgICAgICAgICA8L3RleHQ+XHJcbiAgICAgICAgICAgICAgICA8L0NhcmQ+XHJcblxyXG4gICAgICAgICAgICAgICAgey8qKnBpY3R1cmUgb2YgbWUgKi99XHJcbiAgICAgICAgICAgICAgICA8Q2FyZCAgY2xpY2thYmxlPXtmYWxzZX0gaGVpZ2h0PXt0aGlzLnN0YXRlLmNhcmRIZWlnaHR9IHdpZHRoPScxMHZ3Jz5cclxuICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17bWVQaG90b30gc3R5bGU9e3tib3JkZXJSYWRpdXM6ICc1MCUnLCBoZWlnaHQ6IDUwLCB3aWR0aDogNTAsIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZSgwLDIwcHgpJywgcG9zaXRpb246J2Fic29sdXRlJ319PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvaW1nPlxyXG4gICAgICAgICAgICAgICAgPC9DYXJkPlxyXG5cclxuICAgICAgICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgICAgICAgICAgLnRvcGJhciB7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOjA7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzowO1xyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlcjowO1xyXG4gICAgICAgICAgICAgICAgICAgIG1heC1oZWlnaHQ6NDA7XHJcbiAgICAgICAgICAgICAgICAgICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgLnRleHQge1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTAwO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBgfTwvc3R5bGU+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIClcclxuICAgIH1cclxufSJdfQ== */\n/*@ sourceURL=C:\\\\Users\\\\front\\\\Documents\\\\GitHub\\\\portfolio\\\\components\\\\TopBarNavigator\\\\index.js */"));
    }
  }]);

  return TopBarNav;
}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component);



/***/ })

})
//# sourceMappingURL=index.js.30163e89c69a42ca63c4.hot-update.js.map