"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/campaign/page",{

/***/ "(app-pages-browser)/./app/campaign/page.tsx":
/*!*******************************!*\
  !*** ./app/campaign/page.tsx ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Campaign; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _components_wrappers_thumball_thumball__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/wrappers/thumball/thumball */ \"(app-pages-browser)/./components/wrappers/thumball/thumball.tsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _constants_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/constants/index */ \"(app-pages-browser)/./constants/index.ts\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\nfunction Campaign() {\n    _s();\n    const [background, setBackground] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(_constants_index__WEBPACK_IMPORTED_MODULE_3__.hero[1].image); // Corrected syntax\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n            className: \"w-screen h-screen overflow-hidden -mt-[72px] relative bg-gray-800 text-white\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_wrappers_thumball_thumball__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                hero: _constants_index__WEBPACK_IMPORTED_MODULE_3__.hero,\n                setBackground: setBackground\n            }, void 0, false, {\n                fileName: \"/Users/viatick/freelancing-projects/anewburma/app/campaign/page.tsx\",\n                lineNumber: 14,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"/Users/viatick/freelancing-projects/anewburma/app/campaign/page.tsx\",\n            lineNumber: 12,\n            columnNumber: 7\n        }, this)\n    }, void 0, false);\n}\n_s(Campaign, \"GPKRkWkwrcr14wqPwXG4dC86d50=\");\n_c = Campaign;\nvar _c;\n$RefreshReg$(_c, \"Campaign\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9jYW1wYWlnbi9wYWdlLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUUrRDtBQUM5QjtBQUNRO0FBRTFCLFNBQVNHOztJQUN0QixNQUFNLENBQUNDLFlBQVlDLGNBQWMsR0FBR0osK0NBQVFBLENBQUNDLGtEQUFJLENBQUMsRUFBRSxDQUFDSSxLQUFLLEdBQUcsbUJBQW1CO0lBRWhGLHFCQUNFO2tCQUNFLDRFQUFDQztZQUFRQyxXQUFVO3NCQUVqQiw0RUFBQ1IsOEVBQVFBO2dCQUNQRSxNQUFNQSxrREFBSUE7Z0JBQ1ZHLGVBQWVBOzs7Ozs7Ozs7Ozs7QUFLekI7R0Fkd0JGO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC9jYW1wYWlnbi9wYWdlLnRzeD8wYjY4Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xuaW1wb3J0IENhcm91c2VsIGZyb20gXCJAL2NvbXBvbmVudHMvd3JhcHBlcnMvY2Fyb3VzZWwvY2Fyb3VzZWxcIjtcbmltcG9ydCBUaHVtYmFsbCBmcm9tIFwiQC9jb21wb25lbnRzL3dyYXBwZXJzL3RodW1iYWxsL3RodW1iYWxsXCI7XG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgaGVybyB9IGZyb20gXCJAL2NvbnN0YW50cy9pbmRleFwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDYW1wYWlnbigpIHtcbiAgY29uc3QgW2JhY2tncm91bmQsIHNldEJhY2tncm91bmRdID0gdXNlU3RhdGUoaGVyb1sxXS5pbWFnZSk7IC8vIENvcnJlY3RlZCBzeW50YXhcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJ3LXNjcmVlbiBoLXNjcmVlbiBvdmVyZmxvdy1oaWRkZW4gLW10LVs3MnB4XSByZWxhdGl2ZSBiZy1ncmF5LTgwMCB0ZXh0LXdoaXRlXCI+XG4gICAgICAgIHsvKiBUaHVtYmFsbCAqL31cbiAgICAgICAgPFRodW1iYWxsXG4gICAgICAgICAgaGVybz17aGVyb31cbiAgICAgICAgICBzZXRCYWNrZ3JvdW5kPXtzZXRCYWNrZ3JvdW5kfVxuICAgICAgICAvPlxuICAgICAgPC9zZWN0aW9uPlxuICAgIDwvPlxuICApO1xufVxuIl0sIm5hbWVzIjpbIlRodW1iYWxsIiwidXNlU3RhdGUiLCJoZXJvIiwiQ2FtcGFpZ24iLCJiYWNrZ3JvdW5kIiwic2V0QmFja2dyb3VuZCIsImltYWdlIiwic2VjdGlvbiIsImNsYXNzTmFtZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/campaign/page.tsx\n"));

/***/ })

});