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

/***/ "(app-pages-browser)/./components/wrappers/full-thumbnail/full-thumbnail.tsx":
/*!***************************************************************!*\
  !*** ./components/wrappers/full-thumbnail/full-thumbnail.tsx ***!
  \***************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _thumball_thumball_item__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../thumball/thumball-item */ \"(app-pages-browser)/./components/wrappers/thumball/thumball-item.tsx\");\n/* harmony import */ var _carousel_carousel_item__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../carousel/carousel-item */ \"(app-pages-browser)/./components/wrappers/carousel/carousel-item.tsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n// Custom CSS to hide scrollbar\nconst hideScrollbarCSS = \"\\n  .hide-scrollbar::-webkit-scrollbar {\\n    display: none;\\n  }\\n  .hide-scrollbar {\\n    -ms-overflow-style: none;  /* IE and Edge */\\n    scrollbar-width: none;  /* Firefox */\\n  }\\n\";\nconst FullThumball = (param)=>{\n    let { hero, setBackground } = param;\n    _s();\n    const containerRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const container = containerRef.current;\n        let scrollAmount = 0;\n        const scroll = ()=>{\n            if (container) {\n                scrollAmount += 1;\n                container.scrollLeft = scrollAmount;\n                if (scrollAmount >= container.scrollWidth - container.clientWidth) {\n                    scrollAmount = 0;\n                }\n            }\n        };\n        const interval = setInterval(scroll, 30); // Adjust speed here for smooth scrolling\n        return ()=>clearInterval(interval);\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"style\", {\n                children: hideScrollbarCSS\n            }, void 0, false, {\n                fileName: \"/Users/viatick/freelancing-projects/anewburma/components/wrappers/full-thumbnail/full-thumbnail.tsx\",\n                lineNumber: 49,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_carousel_carousel_item__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                item: hero[1],\n                background: hero[1].image\n            }, 1, false, {\n                fileName: \"/Users/viatick/freelancing-projects/anewburma/components/wrappers/full-thumbnail/full-thumbnail.tsx\",\n                lineNumber: 50,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                ref: containerRef,\n                className: \"absolute w-[80%] bottom-[50px] left-[10%] z-20 flex gap-5 overflow-x-auto scroll-smooth hide-scrollbar\",\n                children: hero && hero.map((item, idx)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_thumball_thumball_item__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                        item: item,\n                        setBackground: setBackground\n                    }, idx, false, {\n                        fileName: \"/Users/viatick/freelancing-projects/anewburma/components/wrappers/full-thumbnail/full-thumbnail.tsx\",\n                        lineNumber: 57,\n                        columnNumber: 13\n                    }, undefined))\n            }, void 0, false, {\n                fileName: \"/Users/viatick/freelancing-projects/anewburma/components/wrappers/full-thumbnail/full-thumbnail.tsx\",\n                lineNumber: 51,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true);\n};\n_s(FullThumball, \"8puyVO4ts1RhCfXUmci3vLI3Njw=\");\n_c = FullThumball;\n/* harmony default export */ __webpack_exports__[\"default\"] = (FullThumball);\nvar _c;\n$RefreshReg$(_c, \"FullThumball\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvd3JhcHBlcnMvZnVsbC10aHVtYm5haWwvZnVsbC10aHVtYm5haWwudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQ2lEO0FBQ0k7QUFDQTtBQUVyRCwrQkFBK0I7QUFFL0IsTUFBTUssbUJBQW9CO0FBVTFCLE1BQU1DLGVBQWU7UUFBQyxFQUNwQkMsSUFBSSxFQUNKQyxhQUFhLEVBSWQ7O0lBQ0MsTUFBTUMsZUFBZVAsNkNBQU1BLENBQWlCO0lBRTVDRCxnREFBU0EsQ0FBQztRQUNSLE1BQU1TLFlBQVlELGFBQWFFLE9BQU87UUFDdEMsSUFBSUMsZUFBZTtRQUVuQixNQUFNQyxTQUFTO1lBQ2IsSUFBSUgsV0FBVztnQkFDYkUsZ0JBQWdCO2dCQUNoQkYsVUFBVUksVUFBVSxHQUFHRjtnQkFFdkIsSUFBSUEsZ0JBQWdCRixVQUFVSyxXQUFXLEdBQUdMLFVBQVVNLFdBQVcsRUFBRTtvQkFDakVKLGVBQWU7Z0JBQ2pCO1lBQ0Y7UUFDRjtRQUVBLE1BQU1LLFdBQVdDLFlBQVlMLFFBQVEsS0FBSyx5Q0FBeUM7UUFFbkYsT0FBTyxJQUFNTSxjQUFjRjtJQUM3QixHQUFHLEVBQUU7SUFFTCxxQkFDRTs7MEJBQ0UsOERBQUNHOzBCQUFPZjs7Ozs7OzBCQUNSLDhEQUFDRCwrREFBWUE7Z0JBQVNpQixNQUFNZCxJQUFJLENBQUMsRUFBRTtnQkFBRWUsWUFBWWYsSUFBSSxDQUFDLEVBQUUsQ0FBQ2dCLEtBQUs7ZUFBM0M7Ozs7OzBCQUNuQiw4REFBQ0M7Z0JBQ0NDLEtBQUtoQjtnQkFDTGlCLFdBQVU7MEJBRVRuQixRQUNDQSxLQUFLb0IsR0FBRyxDQUFDLENBQUNOLE1BQU1PLG9CQUNkLDhEQUFDekIsK0RBQVlBO3dCQUFXa0IsTUFBTUE7d0JBQU1iLGVBQWVBO3VCQUFoQ29COzs7Ozs7Ozs7Ozs7QUFLL0I7R0E1Q010QjtLQUFBQTtBQThDTiwrREFBZUEsWUFBWUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL3dyYXBwZXJzL2Z1bGwtdGh1bWJuYWlsL2Z1bGwtdGh1bWJuYWlsLnRzeD9lYjExIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENhcm91c2VsVHlwZXMgfSBmcm9tIFwiQC90eXBlc1wiO1xuaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlUmVmIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgVGh1bWJhbGxJdGVtIGZyb20gXCIuLi90aHVtYmFsbC90aHVtYmFsbC1pdGVtXCI7XG5pbXBvcnQgQ2Fyb3VzZWxJdGVtIGZyb20gXCIuLi9jYXJvdXNlbC9jYXJvdXNlbC1pdGVtXCI7XG5cbi8vIEN1c3RvbSBDU1MgdG8gaGlkZSBzY3JvbGxiYXJcblxuY29uc3QgaGlkZVNjcm9sbGJhckNTUyA9IGBcbiAgLmhpZGUtc2Nyb2xsYmFyOjotd2Via2l0LXNjcm9sbGJhciB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuICAuaGlkZS1zY3JvbGxiYXIge1xuICAgIC1tcy1vdmVyZmxvdy1zdHlsZTogbm9uZTsgIC8qIElFIGFuZCBFZGdlICovXG4gICAgc2Nyb2xsYmFyLXdpZHRoOiBub25lOyAgLyogRmlyZWZveCAqL1xuICB9XG5gO1xuXG5jb25zdCBGdWxsVGh1bWJhbGwgPSAoe1xuICBoZXJvLFxuICBzZXRCYWNrZ3JvdW5kLFxufToge1xuICBoZXJvOiBDYXJvdXNlbFR5cGVzW107XG4gIHNldEJhY2tncm91bmQ6ICh2YWx1ZTogc3RyaW5nKSA9PiB2b2lkO1xufSkgPT4ge1xuICBjb25zdCBjb250YWluZXJSZWYgPSB1c2VSZWY8SFRNTERpdkVsZW1lbnQ+KG51bGwpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgY29udGFpbmVyID0gY29udGFpbmVyUmVmLmN1cnJlbnQ7XG4gICAgbGV0IHNjcm9sbEFtb3VudCA9IDA7XG5cbiAgICBjb25zdCBzY3JvbGwgPSAoKSA9PiB7XG4gICAgICBpZiAoY29udGFpbmVyKSB7XG4gICAgICAgIHNjcm9sbEFtb3VudCArPSAxO1xuICAgICAgICBjb250YWluZXIuc2Nyb2xsTGVmdCA9IHNjcm9sbEFtb3VudDtcblxuICAgICAgICBpZiAoc2Nyb2xsQW1vdW50ID49IGNvbnRhaW5lci5zY3JvbGxXaWR0aCAtIGNvbnRhaW5lci5jbGllbnRXaWR0aCkge1xuICAgICAgICAgIHNjcm9sbEFtb3VudCA9IDA7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9O1xuXG4gICAgY29uc3QgaW50ZXJ2YWwgPSBzZXRJbnRlcnZhbChzY3JvbGwsIDMwKTsgLy8gQWRqdXN0IHNwZWVkIGhlcmUgZm9yIHNtb290aCBzY3JvbGxpbmdcblxuICAgIHJldHVybiAoKSA9PiBjbGVhckludGVydmFsKGludGVydmFsKTtcbiAgfSwgW10pO1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxzdHlsZT57aGlkZVNjcm9sbGJhckNTU308L3N0eWxlPlxuICAgICAgPENhcm91c2VsSXRlbSBrZXk9ezF9IGl0ZW09e2hlcm9bMV19IGJhY2tncm91bmQ9e2hlcm9bMV0uaW1hZ2V9IC8+XG4gICAgICA8ZGl2XG4gICAgICAgIHJlZj17Y29udGFpbmVyUmVmfVxuICAgICAgICBjbGFzc05hbWU9XCJhYnNvbHV0ZSB3LVs4MCVdIGJvdHRvbS1bNTBweF0gbGVmdC1bMTAlXSB6LTIwIGZsZXggZ2FwLTUgb3ZlcmZsb3cteC1hdXRvIHNjcm9sbC1zbW9vdGggaGlkZS1zY3JvbGxiYXJcIlxuICAgICAgPlxuICAgICAgICB7aGVybyAmJlxuICAgICAgICAgIGhlcm8ubWFwKChpdGVtLCBpZHgpID0+IChcbiAgICAgICAgICAgIDxUaHVtYmFsbEl0ZW0ga2V5PXtpZHh9IGl0ZW09e2l0ZW19IHNldEJhY2tncm91bmQ9e3NldEJhY2tncm91bmR9IC8+XG4gICAgICAgICAgKSl9XG4gICAgICA8L2Rpdj5cbiAgICA8Lz5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEZ1bGxUaHVtYmFsbDtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVJlZiIsIlRodW1iYWxsSXRlbSIsIkNhcm91c2VsSXRlbSIsImhpZGVTY3JvbGxiYXJDU1MiLCJGdWxsVGh1bWJhbGwiLCJoZXJvIiwic2V0QmFja2dyb3VuZCIsImNvbnRhaW5lclJlZiIsImNvbnRhaW5lciIsImN1cnJlbnQiLCJzY3JvbGxBbW91bnQiLCJzY3JvbGwiLCJzY3JvbGxMZWZ0Iiwic2Nyb2xsV2lkdGgiLCJjbGllbnRXaWR0aCIsImludGVydmFsIiwic2V0SW50ZXJ2YWwiLCJjbGVhckludGVydmFsIiwic3R5bGUiLCJpdGVtIiwiYmFja2dyb3VuZCIsImltYWdlIiwiZGl2IiwicmVmIiwiY2xhc3NOYW1lIiwibWFwIiwiaWR4Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/wrappers/full-thumbnail/full-thumbnail.tsx\n"));

/***/ })

});