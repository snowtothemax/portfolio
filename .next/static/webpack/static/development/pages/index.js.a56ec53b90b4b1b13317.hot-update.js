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
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_10__);





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
      cardHeight: 40,
      currentPage: _this.props.currentPage
    };
    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(TopBarNav, [{
    key: "render",
    value: function render() {
      var selectColor1 = '#1F45FC';
      var selectColor2 = '#000000';
      var selectColor3 = '#000000';
      var selectColor4 = '#000000';

      if (this.state.currentPage == 2) {
        selectColor1 = '#000000';
        selectColor2 = '#1F45FC';
      }

      if (this.state.currentPage == 3) {
        selectColor1 = '#000000';
        selectColor2 = '#1F45FC';
      }

      if (this.state.currentPage == 4) {
        selectColor1 = '#000000';
        selectColor2 = '#1F45FC';
      }

      return __jsx("div", {
        className: "jsx-2690877257" + " " + 'topbar',
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37,
          columnNumber: 13
        }
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_10___default.a, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40,
          columnNumber: 17
        }
      }, __jsx(_Card__WEBPACK_IMPORTED_MODULE_7__["default"], {
        clickable: false,
        height: "100%",
        width: "30vw",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41,
          columnNumber: 17
        }
      }, __jsx("img", {
        src: _resources_color_UWcrest_print_png__WEBPACK_IMPORTED_MODULE_8___default.a,
        style: {
          paddingLeft: 55,
          height: 70,
          maxWidth: 60
        },
        className: "jsx-2690877257",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42,
          columnNumber: 21
        }
      }), __jsx("text", {
        style: {
          fontFamily: 'arial',
          fontSize: 50,
          paddingLeft: 20,
          flex: 1
        },
        className: "jsx-2690877257",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43,
          columnNumber: 21
        }
      }, "Max Johnson"))), __jsx(_Card__WEBPACK_IMPORTED_MODULE_7__["default"], {
        clickable: true,
        height: this.state.cardHeight,
        width: "15vw",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51,
          columnNumber: 17
        }
      }, __jsx("text", {
        style: {
          paddingTop: 17,
          fontSize: 40,
          fontFamily: 'arial',
          color: selectColor1
        },
        className: "jsx-2690877257",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52,
          columnNumber: 21
        }
      }, "Home")), __jsx(_Card__WEBPACK_IMPORTED_MODULE_7__["default"], {
        clickable: true,
        height: this.state.cardHeight,
        width: "15vw",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58,
          columnNumber: 17
        }
      }, __jsx("text", {
        style: {
          paddingTop: 17,
          fontSize: 40,
          fontFamily: 'arial',
          color: selectColor2
        },
        className: "jsx-2690877257",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59,
          columnNumber: 21
        }
      }, "Projects")), __jsx(_Card__WEBPACK_IMPORTED_MODULE_7__["default"], {
        clickable: true,
        height: this.state.cardHeight,
        width: "15vw",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65,
          columnNumber: 17
        }
      }, __jsx("text", {
        style: {
          paddingTop: 17,
          fontSize: 40,
          fontFamily: 'arial',
          color: selectColor3
        },
        className: "jsx-2690877257",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66,
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
          lineNumber: 72,
          columnNumber: 17
        }
      }, __jsx("text", {
        style: {
          paddingTop: 17,
          fontSize: 40,
          fontFamily: 'arial',
          color: selectColor4
        },
        className: "jsx-2690877257",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73,
          columnNumber: 21
        }
      }, "Contact")), __jsx(_Card__WEBPACK_IMPORTED_MODULE_7__["default"], {
        clickable: false,
        height: this.state.cardHeight,
        width: "10vw",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79,
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
        className: "jsx-2690877257" + " " + "avatar",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 80,
          columnNumber: 21
        }
      })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a, {
        id: "2690877257",
        __self: this
      }, ".topbar.jsx-2690877257{margin:0;padding:0;border:0;max-height:40;max-width:100%;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}.avatar.jsx-2690877257 img.jsx-2690877257{border-radius:50%;height:50;width:50;-webkit-transform:translate(0,20px);-ms-transform:translate(0,20px);transform:translate(0,20px);position:absolute;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcZnJvbnRcXERvY3VtZW50c1xcR2l0SHViXFxwb3J0Zm9saW9cXGNvbXBvbmVudHNcXFRvcEJhck5hdmlnYXRvclxcaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBbUY0QixBQUc2QixBQVVVLFNBVFQsU0FVQyxDQVRGLFNBQ0ssQUFTSixTQUNtQixLQVRiLGVBQ0kscUVBQ04sT0FRSyxrQkFDdEIsaURBUkEiLCJmaWxlIjoiQzpcXFVzZXJzXFxmcm9udFxcRG9jdW1lbnRzXFxHaXRIdWJcXHBvcnRmb2xpb1xcY29tcG9uZW50c1xcVG9wQmFyTmF2aWdhdG9yXFxpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBDYXJkIGZyb20gJy4uL0NhcmQnXHJcbmltcG9ydCB1d0xvZ28gZnJvbSAnLi4vLi4vcmVzb3VyY2VzL2NvbG9yLVVXY3Jlc3QtcHJpbnQucG5nJ1xyXG5pbXBvcnQgbWVQaG90byBmcm9tICcuLi8uLi9yZXNvdXJjZXMvbWVBdmF0YXIuanBnJ1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUb3BCYXJOYXYgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgICAgICBzdXBlcihwcm9wcylcclxuICAgICAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICAgICAgICBjYXJkSGVpZ2h0OiA0MCxcclxuICAgICAgICAgICAgY3VycmVudFBhZ2U6IHRoaXMucHJvcHMuY3VycmVudFBhZ2UsXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuXHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIHZhciBzZWxlY3RDb2xvcjEgPSAnIzFGNDVGQyc7XHJcbiAgICAgICAgdmFyIHNlbGVjdENvbG9yMiA9ICcjMDAwMDAwJztcclxuICAgICAgICB2YXIgc2VsZWN0Q29sb3IzID0gJyMwMDAwMDAnO1xyXG4gICAgICAgIHZhciBzZWxlY3RDb2xvcjQgPSAnIzAwMDAwMCc7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLnN0YXRlLmN1cnJlbnRQYWdlID09IDIpIHtcclxuICAgICAgICAgICAgc2VsZWN0Q29sb3IxID0gJyMwMDAwMDAnO1xyXG4gICAgICAgICAgICBzZWxlY3RDb2xvcjIgPSAnIzFGNDVGQyc7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLnN0YXRlLmN1cnJlbnRQYWdlID09IDMpIHtcclxuICAgICAgICAgICAgc2VsZWN0Q29sb3IxID0gJyMwMDAwMDAnO1xyXG4gICAgICAgICAgICBzZWxlY3RDb2xvcjIgPSAnIzFGNDVGQyc7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLnN0YXRlLmN1cnJlbnRQYWdlID09IDQpIHtcclxuICAgICAgICAgICAgc2VsZWN0Q29sb3IxID0gJyMwMDAwMDAnO1xyXG4gICAgICAgICAgICBzZWxlY3RDb2xvcjIgPSAnIzFGNDVGQyc7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ndG9wYmFyJz5cclxuXHJcbiAgICAgICAgICAgICAgICB7LyogTXkgbmFtZSBhbmQgd2lzY29uc2luIEltYWdlICovfVxyXG4gICAgICAgICAgICAgICAgPExpbms+XHJcbiAgICAgICAgICAgICAgICA8Q2FyZCBjbGlja2FibGU9e2ZhbHNlfSBoZWlnaHQ9JzEwMCUnIHdpZHRoPSczMHZ3Jz5cclxuICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17dXdMb2dvfSBzdHlsZT17eyBwYWRkaW5nTGVmdDogNTUsIGhlaWdodDogNzAsIG1heFdpZHRoOiA2MCB9fT48L2ltZz5cclxuICAgICAgICAgICAgICAgICAgICA8dGV4dCBzdHlsZT17eyBmb250RmFtaWx5OiAnYXJpYWwnLCBmb250U2l6ZTogNTAsIHBhZGRpbmdMZWZ0OiAyMCwgZmxleDogMSB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgTWF4IEpvaG5zb25cclxuICAgICAgICAgICAgICAgIDwvdGV4dD5cclxuICAgICAgICAgICAgICAgIDwvQ2FyZD5cclxuICAgICAgICAgICAgICAgIDwvTGluaz5cclxuXHJcbiAgICAgICAgICAgICAgICB7LyogSG9tZSBCdXR0b24gKi99XHJcblxyXG4gICAgICAgICAgICAgICAgPENhcmQgY2xpY2thYmxlPXt0cnVlfSBoZWlnaHQ9e3RoaXMuc3RhdGUuY2FyZEhlaWdodH0gd2lkdGg9JzE1dncnPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0ZXh0IHN0eWxlPXt7IHBhZGRpbmdUb3A6IDE3LCBmb250U2l6ZTogNDAsIGZvbnRGYW1pbHk6ICdhcmlhbCcsIGNvbG9yOiBzZWxlY3RDb2xvcjEgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEhvbWVcclxuICAgICAgICAgICAgICAgICAgICA8L3RleHQ+XHJcbiAgICAgICAgICAgICAgICA8L0NhcmQ+XHJcblxyXG4gICAgICAgICAgICAgICAgey8qIFByb2plY3RzIEJ1dHRvbiAqL31cclxuICAgICAgICAgICAgICAgIDxDYXJkIGNsaWNrYWJsZT17dHJ1ZX0gaGVpZ2h0PXt0aGlzLnN0YXRlLmNhcmRIZWlnaHR9IHdpZHRoPScxNXZ3Jz5cclxuICAgICAgICAgICAgICAgICAgICA8dGV4dCBzdHlsZT17eyBwYWRkaW5nVG9wOiAxNywgZm9udFNpemU6IDQwLCBmb250RmFtaWx5OiAnYXJpYWwnLCBjb2xvcjogc2VsZWN0Q29sb3IyIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBQcm9qZWN0c1xyXG4gICAgICAgICAgICAgICAgICAgIDwvdGV4dD5cclxuICAgICAgICAgICAgICAgIDwvQ2FyZD5cclxuXHJcbiAgICAgICAgICAgICAgICB7LyogR2FsbGVyeSBCdXR0b24gKi99XHJcbiAgICAgICAgICAgICAgICA8Q2FyZCBjbGlja2FibGU9e3RydWV9IGhlaWdodD17dGhpcy5zdGF0ZS5jYXJkSGVpZ2h0fSB3aWR0aD0nMTV2dyc+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRleHQgc3R5bGU9e3sgcGFkZGluZ1RvcDogMTcsIGZvbnRTaXplOiA0MCwgZm9udEZhbWlseTogJ2FyaWFsJywgY29sb3I6IHNlbGVjdENvbG9yMyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgR2FsbGVyeVxyXG4gICAgICAgICAgICAgICAgICAgIDwvdGV4dD5cclxuICAgICAgICAgICAgICAgIDwvQ2FyZD5cclxuXHJcbiAgICAgICAgICAgICAgICB7LyoqIENvbnRhY3QgQnV0dG9uICovfVxyXG4gICAgICAgICAgICAgICAgPENhcmQgY2xhc3NOYW1lPSdDYXJkJyBjbGlja2FibGU9e3RydWV9IGhlaWdodD17dGhpcy5zdGF0ZS5jYXJkSGVpZ2h0fSB3aWR0aD0nMTV2dyc+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRleHQgc3R5bGU9e3sgcGFkZGluZ1RvcDogMTcsIGZvbnRTaXplOiA0MCwgZm9udEZhbWlseTogJ2FyaWFsJywgY29sb3I6IHNlbGVjdENvbG9yNCB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgQ29udGFjdFxyXG4gICAgICAgICAgICAgICAgICAgIDwvdGV4dD5cclxuICAgICAgICAgICAgICAgIDwvQ2FyZD5cclxuXHJcbiAgICAgICAgICAgICAgICB7LyoqcGljdHVyZSBvZiBtZSAqL31cclxuICAgICAgICAgICAgICAgIDxDYXJkIGNsaWNrYWJsZT17ZmFsc2V9IGhlaWdodD17dGhpcy5zdGF0ZS5jYXJkSGVpZ2h0fSB3aWR0aD0nMTB2dyc+XHJcbiAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJhdmF0YXJcIiBzcmM9e21lUGhvdG99IHN0eWxlPXt7IGJvcmRlclJhZGl1czogJzUwJScsIGhlaWdodDogNTAsIHdpZHRoOiA1MCwgdHJhbnNmb3JtOiAndHJhbnNsYXRlKDAsMjBweCknLCBwb3NpdGlvbjogJ2Fic29sdXRlJyB9fT5cclxuICAgICAgICAgICAgICAgICAgICA8L2ltZz5cclxuICAgICAgICAgICAgICAgIDwvQ2FyZD5cclxuXHJcbiAgICAgICAgICAgICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgICAgICAgICAudG9wYmFyIHtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW46MDtcclxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOjA7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyOjA7XHJcbiAgICAgICAgICAgICAgICAgICAgbWF4LWhlaWdodDo0MDtcclxuICAgICAgICAgICAgICAgICAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAuYXZhdGFyIGltZyB7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogNTA7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDUwO1xyXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsMjBweCk7XHJcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBgfTwvc3R5bGU+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIClcclxuICAgIH1cclxufSJdfQ== */\n/*@ sourceURL=C:\\\\Users\\\\front\\\\Documents\\\\GitHub\\\\portfolio\\\\components\\\\TopBarNavigator\\\\index.js */"));
    }
  }]);

  return TopBarNav;
}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component);



/***/ })

})
//# sourceMappingURL=index.js.a56ec53b90b4b1b13317.hot-update.js.map