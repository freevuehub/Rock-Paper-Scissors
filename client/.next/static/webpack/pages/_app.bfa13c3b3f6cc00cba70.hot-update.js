webpackHotUpdate_N_E("pages/_app",{

/***/ "./pages/_app.tsx":
/*!************************!*\
  !*** ./pages/_app.tsx ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd/dist/antd.css */ "./node_modules/antd/dist/antd.css");
/* harmony import */ var antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! socket.io-client */ "./node_modules/socket.io-client/build/index.js");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(socket_io_client__WEBPACK_IMPORTED_MODULE_4__);



var _jsxFileName = "C:\\Users\\Hong\\Desktop\\Project\\rock_paper_scissors\\client\\pages\\_app.tsx",
    _this = undefined;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }




var HeaderStyle = {
  position: 'fixed',
  left: 0,
  top: 0,
  width: '100%'
};
var ContentStyle = {
  height: 'calc(100vh - 70px)',
  paddingTop: '64px'
};
var socket = socket_io_client__WEBPACK_IMPORTED_MODULE_4___default()('http://localhost:3544');

var MyApp = function MyApp(_ref) {
  var Component = _ref.Component,
      pageProps = _ref.pageProps;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_3__["Layout"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_3__["Layout"].Header, {
      style: HeaderStyle,
      children: "Header"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_3__["Layout"].Content, {
      style: ContentStyle,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
        className: "site-layout-content",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(Component, _objectSpread(_objectSpread({}, pageProps), {}, {
          socket: socket
        }), void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 26,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_3__["Layout"].Footer, {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("b", {
        children: "FreeVue"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 9
      }, _this), " Copyright \xA9 2021"]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 20,
    columnNumber: 5
  }, _this);
};

_c = MyApp;
/* harmony default export */ __webpack_exports__["default"] = (MyApp);

var _c;

$RefreshReg$(_c, "MyApp");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvX2FwcC50c3giXSwibmFtZXMiOlsiSGVhZGVyU3R5bGUiLCJwb3NpdGlvbiIsImxlZnQiLCJ0b3AiLCJ3aWR0aCIsIkNvbnRlbnRTdHlsZSIsImhlaWdodCIsInBhZGRpbmdUb3AiLCJzb2NrZXQiLCJpbyIsIk15QXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUE7QUFDQTtBQUdBLElBQU1BLFdBQTBCLEdBQUc7QUFDakNDLFVBQVEsRUFBRSxPQUR1QjtBQUVqQ0MsTUFBSSxFQUFFLENBRjJCO0FBR2pDQyxLQUFHLEVBQUUsQ0FINEI7QUFJakNDLE9BQUssRUFBRTtBQUowQixDQUFuQztBQU1BLElBQU1DLFlBQTJCLEdBQUc7QUFDbENDLFFBQU0sRUFBRSxvQkFEMEI7QUFFbENDLFlBQVUsRUFBRTtBQUZzQixDQUFwQztBQUlBLElBQU1DLE1BQU0sR0FBR0MsdURBQUUsQ0FBQyx1QkFBRCxDQUFqQjs7QUFDQSxJQUFNQyxLQUF5QixHQUFHLFNBQTVCQSxLQUE0QixPQUE4QjtBQUFBLE1BQTNCQyxTQUEyQixRQUEzQkEsU0FBMkI7QUFBQSxNQUFoQkMsU0FBZ0IsUUFBaEJBLFNBQWdCO0FBQzlELHNCQUNFLHFFQUFDLDJDQUFEO0FBQUEsNEJBQ0UscUVBQUMsMkNBQUQsQ0FBUSxNQUFSO0FBQWUsV0FBSyxFQUFFWixXQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURGLGVBSUUscUVBQUMsMkNBQUQsQ0FBUSxPQUFSO0FBQWdCLFdBQUssRUFBRUssWUFBdkI7QUFBQSw2QkFDRTtBQUFLLGlCQUFTLEVBQUMscUJBQWY7QUFBQSwrQkFDRSxxRUFBQyxTQUFELGtDQUFlTyxTQUFmO0FBQTBCLGdCQUFNLEVBQUVKO0FBQWxDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUpGLGVBU0UscUVBQUMsMkNBQUQsQ0FBUSxNQUFSO0FBQUEsOEJBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFURjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQWVELENBaEJEOztLQUFNRSxLO0FBa0JTQSxvRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9fYXBwLmJmYTEzYzNiM2Y2Y2MwMGNiYTcwLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJ2FudGQvZGlzdC9hbnRkLmNzcydcbmltcG9ydCB7IEFwcFByb3BzIH0gZnJvbSAnbmV4dC9hcHAnXG5pbXBvcnQgeyBMYXlvdXQgfSBmcm9tICdhbnRkJ1xuaW1wb3J0IGlvIGZyb20gJ3NvY2tldC5pby1jbGllbnQnXG5pbXBvcnQgeyBDU1NQcm9wZXJ0aWVzIH0gZnJvbSAncmVhY3QnXG5cbmNvbnN0IEhlYWRlclN0eWxlOiBDU1NQcm9wZXJ0aWVzID0ge1xuICBwb3NpdGlvbjogJ2ZpeGVkJyxcbiAgbGVmdDogMCxcbiAgdG9wOiAwLFxuICB3aWR0aDogJzEwMCUnLFxufVxuY29uc3QgQ29udGVudFN0eWxlOiBDU1NQcm9wZXJ0aWVzID0ge1xuICBoZWlnaHQ6ICdjYWxjKDEwMHZoIC0gNzBweCknLFxuICBwYWRkaW5nVG9wOiAnNjRweCcsXG59XG5jb25zdCBzb2NrZXQgPSBpbygnaHR0cDovL2xvY2FsaG9zdDozNTQ0JylcbmNvbnN0IE15QXBwOiBSZWFjdC5GQzxBcHBQcm9wcz4gPSAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPExheW91dD5cbiAgICAgIDxMYXlvdXQuSGVhZGVyIHN0eWxlPXtIZWFkZXJTdHlsZX0+XG4gICAgICAgIEhlYWRlclxuICAgICAgPC9MYXlvdXQuSGVhZGVyPlxuICAgICAgPExheW91dC5Db250ZW50IHN0eWxlPXtDb250ZW50U3R5bGV9PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNpdGUtbGF5b3V0LWNvbnRlbnRcIj5cbiAgICAgICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IHNvY2tldD17c29ja2V0fSAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvTGF5b3V0LkNvbnRlbnQ+XG4gICAgICA8TGF5b3V0LkZvb3Rlcj5cbiAgICAgICAgPGI+RnJlZVZ1ZTwvYj4gQ29weXJpZ2h0IMKpIDIwMjFcbiAgICAgIDwvTGF5b3V0LkZvb3Rlcj5cbiAgICA8L0xheW91dD5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBNeUFwcFxuIl0sInNvdXJjZVJvb3QiOiIifQ==