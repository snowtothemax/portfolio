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
        className: "jsx-2769210529" + " " + 'topbar',
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
        className: "jsx-2769210529",
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
        className: "jsx-2769210529",
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
        className: "jsx-2769210529",
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
        className: "jsx-2769210529",
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
        className: "jsx-2769210529",
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
        className: "jsx-2769210529",
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
        className: "jsx-2769210529" + " " + "avatar",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55,
          columnNumber: 21
        }
      })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a, {
        id: "2769210529",
        __self: this
      }, ".topbar.jsx-2769210529{margin:0;padding:0;border:0;max-height:40;max-width:100%;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}Card.jsx-2769210529 img.jsx-2769210529{border-radius:50%;height:50;width:50;-webkit-transform:translate(0,20px);-ms-transform:translate(0,20px);transform:translate(0,20px);position:absolute;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcZnJvbnRcXERvY3VtZW50c1xcR2l0SHViXFxwb3J0Zm9saW9cXGNvbXBvbmVudHNcXFRvcEJhck5hdmlnYXRvclxcaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBMER3QixBQUc2QixBQVVVLFNBVFQsU0FVQyxDQVRGLFNBQ0ssQUFTSixTQUNtQixLQVRiLGVBQ0kscUVBQ04sT0FRSyxrQkFDdEIsaURBUkEiLCJmaWxlIjoiQzpcXFVzZXJzXFxmcm9udFxcRG9jdW1lbnRzXFxHaXRIdWJcXHBvcnRmb2xpb1xcY29tcG9uZW50c1xcVG9wQmFyTmF2aWdhdG9yXFxpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBDYXJkIGZyb20gJy4uL0NhcmQnXHJcbmltcG9ydCB1d0xvZ28gZnJvbSAnLi4vLi4vcmVzb3VyY2VzL2NvbG9yLVVXY3Jlc3QtcHJpbnQucG5nJ1xyXG5pbXBvcnQgbWVQaG90byBmcm9tICcuLi8uLi9yZXNvdXJjZXMvbWVBdmF0YXIuanBnJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVG9wQmFyTmF2IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50e1xyXG4gICAgY29uc3RydWN0b3IocHJvcHMpe1xyXG4gICAgICAgIHN1cGVyKHByb3BzKVxyXG4gICAgICAgIHRoaXMuc3RhdGU9e1xyXG4gICAgICAgICAgICBjYXJkSGVpZ2h0OiA0MFxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKXtcclxuICAgICAgICByZXR1cm4oXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSd0b3BiYXInPlxyXG5cclxuICAgICAgICAgICAgICAgIHsvKiBNeSBuYW1lIGFuZCB3aXNjb25zaW4gSW1hZ2UgKi99XHJcbiAgICAgICAgICAgICAgICA8Q2FyZCBjbGlja2FibGU9e2ZhbHNlfSBoZWlnaHQ9JzEwMCUnIHdpZHRoPSczMHZ3Jz5cclxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPXt1d0xvZ299IHN0eWxlPXt7cGFkZGluZ0xlZnQ6IDU1LCBoZWlnaHQ6IDcwLCBtYXhXaWR0aDogNjB9fT48L2ltZz5cclxuICAgICAgICAgICAgICAgICAgICA8dGV4dCBzdHlsZT17eyBmb250RmFtaWx5OiAnYXJpYWwnLCBmb250U2l6ZTogNTAsIHBhZGRpbmdMZWZ0OiAyMCwgZmxleDogMSB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgTWF4IEpvaG5zb25cclxuICAgICAgICAgICAgICAgIDwvdGV4dD5cclxuICAgICAgICAgICAgICAgIDwvQ2FyZD5cclxuXHJcbiAgICAgICAgICAgICAgICB7LyogSG9tZSBCdXR0b24gKi99XHJcbiAgICAgICAgICAgICAgICA8Q2FyZCBjbGlja2FibGU9e3RydWV9IGhlaWdodD17dGhpcy5zdGF0ZS5jYXJkSGVpZ2h0fSB3aWR0aD0gJzE1dncnPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0ZXh0IHN0eWxlPXt7cGFkZGluZ1RvcDogMTcsIGZvbnRTaXplOiA0MCwgZm9udEZhbWlseTogJ2FyaWFsJ319PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBIb21lXHJcbiAgICAgICAgICAgICAgICAgICAgPC90ZXh0PlxyXG4gICAgICAgICAgICAgICAgPC9DYXJkPlxyXG5cclxuICAgICAgICAgICAgICAgIHsvKiBQcm9qZWN0cyBCdXR0b24gKi99XHJcbiAgICAgICAgICAgICAgICA8Q2FyZCBjbGlja2FibGU9e3RydWV9IGhlaWdodD17dGhpcy5zdGF0ZS5jYXJkSGVpZ2h0fSB3aWR0aD0gJzE1dncnPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0ZXh0IHN0eWxlPXt7cGFkZGluZ1RvcDogMTcsIGZvbnRTaXplOiA0MCwgZm9udEZhbWlseTogJ2FyaWFsJ319PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBQcm9qZWN0c1xyXG4gICAgICAgICAgICAgICAgICAgIDwvdGV4dD5cclxuICAgICAgICAgICAgICAgIDwvQ2FyZD5cclxuXHJcbiAgICAgICAgICAgICAgICB7LyogR2FsbGVyeSBCdXR0b24gKi99XHJcbiAgICAgICAgICAgICAgICA8Q2FyZCBjbGlja2FibGU9e3RydWV9IGhlaWdodD17dGhpcy5zdGF0ZS5jYXJkSGVpZ2h0fSB3aWR0aD0gJzE1dncnPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0ZXh0IHN0eWxlPXt7cGFkZGluZ1RvcDogMTcsIGZvbnRTaXplOiA0MCwgZm9udEZhbWlseTogJ2FyaWFsJ319PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBHYWxsZXJ5XHJcbiAgICAgICAgICAgICAgICAgICAgPC90ZXh0PlxyXG4gICAgICAgICAgICAgICAgPC9DYXJkPlxyXG5cclxuICAgICAgICAgICAgICAgIHsvKiogQ29udGFjdCBCdXR0b24gKi99XHJcbiAgICAgICAgICAgICAgICA8Q2FyZCBjbGFzc05hbWU9J0NhcmQnICBjbGlja2FibGU9e3RydWV9IGhlaWdodD17dGhpcy5zdGF0ZS5jYXJkSGVpZ2h0fSB3aWR0aD0gJzE1dncnPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0ZXh0IHN0eWxlPXt7cGFkZGluZ1RvcDogMTcsIGZvbnRTaXplOiA0MCwgZm9udEZhbWlseTogJ2FyaWFsJ319PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBDb250YWN0XHJcbiAgICAgICAgICAgICAgICAgICAgPC90ZXh0PlxyXG4gICAgICAgICAgICAgICAgPC9DYXJkPlxyXG5cclxuICAgICAgICAgICAgICAgIHsvKipwaWN0dXJlIG9mIG1lICovfVxyXG4gICAgICAgICAgICAgICAgPENhcmQgIGNsaWNrYWJsZT17ZmFsc2V9IGhlaWdodD17dGhpcy5zdGF0ZS5jYXJkSGVpZ2h0fSB3aWR0aD0nMTB2dyc+XHJcbiAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJhdmF0YXJcIiBzcmM9e21lUGhvdG99ID5cclxuICAgICAgICAgICAgICAgICAgICA8L2ltZz5cclxuICAgICAgICAgICAgICAgIDwvQ2FyZD5cclxuXHJcbiAgICAgICAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICAgICAgICAgIC50b3BiYXIge1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjowO1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6MDtcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXI6MDtcclxuICAgICAgICAgICAgICAgICAgICBtYXgtaGVpZ2h0OjQwO1xyXG4gICAgICAgICAgICAgICAgICAgIG1heC13aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIENhcmQgaW1nIHtcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA1MDtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogNTA7XHJcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwyMHB4KTtcclxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGB9PC9zdHlsZT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG59Il19 */\n/*@ sourceURL=C:\\\\Users\\\\front\\\\Documents\\\\GitHub\\\\portfolio\\\\components\\\\TopBarNavigator\\\\index.js */"));
    }
  }]);

  return TopBarNav;
}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component);



/***/ })

})
//# sourceMappingURL=index.js.fe7b0e8373e541560ae6.hot-update.js.map