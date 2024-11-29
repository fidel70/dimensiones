/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "_ssr_src_app_pacientes_P001_lazy_recursive_-_ssr_src_app_pacientes_P001_page_tsx";
exports.ids = ["_ssr_src_app_pacientes_P001_lazy_recursive_-_ssr_src_app_pacientes_P001_page_tsx"];
exports.modules = {

/***/ "(ssr)/./src/app/pacientes/P001 lazy recursive ^\\.\\/.*$":
/*!****************************************************************!*\
  !*** ./src/app/pacientes/P001/ lazy ^\.\/.*$ namespace object ***!
  \****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./RegistroDimensiones": [
		"(ssr)/./src/app/pacientes/P001/RegistroDimensiones.tsx",
		"vendor-chunks/@react-aria",
		"vendor-chunks/@nextui-org",
		"vendor-chunks/framer-motion",
		"vendor-chunks/@swc",
		"vendor-chunks/@supabase",
		"vendor-chunks/lucide-react",
		"vendor-chunks/@react-stately",
		"vendor-chunks/tailwind-variants",
		"vendor-chunks/@internationalized",
		"vendor-chunks/clsx",
		"vendor-chunks/date-fns",
		"_ssr_src_app_pacientes_P001_RegistroDimensiones_tsx"
	],
	"./RegistroDimensiones.tsx": [
		"(ssr)/./src/app/pacientes/P001/RegistroDimensiones.tsx",
		"vendor-chunks/@react-aria",
		"vendor-chunks/@nextui-org",
		"vendor-chunks/framer-motion",
		"vendor-chunks/@swc",
		"vendor-chunks/@supabase",
		"vendor-chunks/lucide-react",
		"vendor-chunks/@react-stately",
		"vendor-chunks/tailwind-variants",
		"vendor-chunks/@internationalized",
		"vendor-chunks/clsx",
		"vendor-chunks/date-fns",
		"_ssr_src_app_pacientes_P001_RegistroDimensiones_tsx"
	],
	"./RegistroPensamientos": [
		"(ssr)/./src/app/pacientes/P001/RegistroPensamientos.tsx",
		"vendor-chunks/@react-aria",
		"vendor-chunks/@nextui-org",
		"vendor-chunks/framer-motion",
		"vendor-chunks/@swc",
		"vendor-chunks/@supabase",
		"vendor-chunks/lucide-react",
		"vendor-chunks/@react-stately",
		"vendor-chunks/tailwind-variants",
		"vendor-chunks/@internationalized",
		"vendor-chunks/clsx",
		"_ssr_src_app_pacientes_P001_RegistroPensamientos_tsx"
	],
	"./RegistroPensamientos.tsx": [
		"(ssr)/./src/app/pacientes/P001/RegistroPensamientos.tsx",
		"vendor-chunks/@react-aria",
		"vendor-chunks/@nextui-org",
		"vendor-chunks/framer-motion",
		"vendor-chunks/@swc",
		"vendor-chunks/@supabase",
		"vendor-chunks/lucide-react",
		"vendor-chunks/@react-stately",
		"vendor-chunks/tailwind-variants",
		"vendor-chunks/@internationalized",
		"vendor-chunks/clsx",
		"_ssr_src_app_pacientes_P001_RegistroPensamientos_tsx"
	],
	"./page": [
		"(ssr)/./src/app/pacientes/P001/page.tsx"
	],
	"./page.tsx": [
		"(ssr)/./src/app/pacientes/P001/page.tsx"
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(() => {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(() => {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = () => (Object.keys(map));
webpackAsyncContext.id = "(ssr)/./src/app/pacientes/P001 lazy recursive ^\\.\\/.*$";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "(ssr)/./src/app/pacientes/P001/page.tsx":
/*!*****************************************!*\
  !*** ./src/app/pacientes/P001/page.tsx ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(ssr)/./node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(ssr)/./node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dynamic */ \"(ssr)/./node_modules/next/dist/api/app-dynamic.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \n\n\nconst MainPage = ()=>{\n    const [currentView, setCurrentView] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const loadComponent = (component)=>{\n        setCurrentView(component);\n    };\n    const renderComponent = ()=>{\n        if (!currentView) return null;\n        const Component = (0,next_dynamic__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(()=>__webpack_require__(\"(ssr)/./src/app/pacientes/P001 lazy recursive ^\\\\.\\\\/.*$\")(`./${currentView}`), {\n            loading: ()=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    className: \"text-center mt-4 text-black\",\n                    children: \"Cargando componente...\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\fidel\\\\appdimensionespacientes\\\\src\\\\app\\\\pacientes\\\\P001\\\\page.tsx\",\n                    lineNumber: 17,\n                    columnNumber: 22\n                }, undefined)\n        });\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {}, void 0, false, {\n            fileName: \"C:\\\\Users\\\\fidel\\\\appdimensionespacientes\\\\src\\\\app\\\\pacientes\\\\P001\\\\page.tsx\",\n            lineNumber: 20,\n            columnNumber: 12\n        }, undefined);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"min-h-screen bg-white\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"header\", {\n                className: \"bg-blue-600 p-6\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"max-w-4xl mx-auto flex justify-center gap-6\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            onClick: ()=>loadComponent(\"RegistroPensamientos\"),\n                            className: `\r\n              py-3 px-6 rounded-lg font-semibold text-lg\r\n              ${currentView === \"RegistroPensamientos\" ? \"bg-green-500 text-white\" : \"bg-white text-blue-600 hover:bg-gray-100\"}\r\n              shadow-md\r\n            `,\n                            children: \"Registro de Pensamientos\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\fidel\\\\appdimensionespacientes\\\\src\\\\app\\\\pacientes\\\\P001\\\\page.tsx\",\n                            lineNumber: 27,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            onClick: ()=>loadComponent(\"RegistroDimensiones\"),\n                            className: `\r\n              py-3 px-6 rounded-lg font-semibold text-lg\r\n              ${currentView === \"RegistroDimensiones\" ? \"bg-green-500 text-white\" : \"bg-white text-blue-600 hover:bg-gray-100\"}\r\n              shadow-md\r\n            `,\n                            children: \"Registro de Dimensiones\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\fidel\\\\appdimensionespacientes\\\\src\\\\app\\\\pacientes\\\\P001\\\\page.tsx\",\n                            lineNumber: 40,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\fidel\\\\appdimensionespacientes\\\\src\\\\app\\\\pacientes\\\\P001\\\\page.tsx\",\n                    lineNumber: 26,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\fidel\\\\appdimensionespacientes\\\\src\\\\app\\\\pacientes\\\\P001\\\\page.tsx\",\n                lineNumber: 25,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                className: \"container mx-auto p-6\",\n                children: renderComponent()\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\fidel\\\\appdimensionespacientes\\\\src\\\\app\\\\pacientes\\\\P001\\\\page.tsx\",\n                lineNumber: 56,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\fidel\\\\appdimensionespacientes\\\\src\\\\app\\\\pacientes\\\\P001\\\\page.tsx\",\n        lineNumber: 24,\n        columnNumber: 5\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MainPage);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9zcmMvYXBwL3BhY2llbnRlcy9QMDAxL3BhZ2UudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFFd0M7QUFDTDtBQUVuQyxNQUFNRyxXQUFXO0lBQ2YsTUFBTSxDQUFDQyxhQUFhQyxlQUFlLEdBQUdKLCtDQUFRQSxDQUFDO0lBRS9DLE1BQU1LLGdCQUFnQixDQUFDQztRQUNyQkYsZUFBZUU7SUFDakI7SUFFQSxNQUFNQyxrQkFBa0I7UUFDdEIsSUFBSSxDQUFDSixhQUFhLE9BQU87UUFFekIsTUFBTUssWUFBWVAsd0RBQU9BLENBQUMsSUFBTSxnRkFBTyxHQUFHLEVBQUVFLFlBQVksQ0FBQyxDQUFDLEVBQUU7WUFDMURNLFNBQVMsa0JBQU0sOERBQUNDO29CQUFFQyxXQUFVOzhCQUE4Qjs7Ozs7O1FBQzVEO1FBRUEscUJBQU8sOERBQUNIOzs7OztJQUNWO0lBRUEscUJBQ0UsOERBQUNJO1FBQUlELFdBQVU7OzBCQUNiLDhEQUFDRTtnQkFBT0YsV0FBVTswQkFDaEIsNEVBQUNDO29CQUFJRCxXQUFVOztzQ0FDYiw4REFBQ0c7NEJBQ0NDLFNBQVMsSUFBTVYsY0FBYzs0QkFDN0JNLFdBQVcsQ0FBQzs7Y0FFVixFQUFFUixnQkFBZ0IseUJBQ2QsNEJBQ0EsMkNBQ0g7O1lBRUgsQ0FBQztzQ0FDRjs7Ozs7O3NDQUdELDhEQUFDVzs0QkFDQ0MsU0FBUyxJQUFNVixjQUFjOzRCQUM3Qk0sV0FBVyxDQUFDOztjQUVWLEVBQUVSLGdCQUFnQix3QkFDZCw0QkFDQSwyQ0FDSDs7WUFFSCxDQUFDO3NDQUNGOzs7Ozs7Ozs7Ozs7Ozs7OzswQkFNTCw4REFBQ2E7Z0JBQUtMLFdBQVU7MEJBQ2JKOzs7Ozs7Ozs7Ozs7QUFJVDtBQUVBLGlFQUFlTCxRQUFRQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmV4dGpzLWFwcC8uL3NyYy9hcHAvcGFjaWVudGVzL1AwMDEvcGFnZS50c3g/NDljNSJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGNsaWVudCdcclxuXHJcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IGR5bmFtaWMgZnJvbSAnbmV4dC9keW5hbWljJztcclxuXHJcbmNvbnN0IE1haW5QYWdlID0gKCkgPT4ge1xyXG4gIGNvbnN0IFtjdXJyZW50Vmlldywgc2V0Q3VycmVudFZpZXddID0gdXNlU3RhdGUobnVsbCk7XHJcblxyXG4gIGNvbnN0IGxvYWRDb21wb25lbnQgPSAoY29tcG9uZW50KSA9PiB7XHJcbiAgICBzZXRDdXJyZW50Vmlldyhjb21wb25lbnQpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IHJlbmRlckNvbXBvbmVudCA9ICgpID0+IHtcclxuICAgIGlmICghY3VycmVudFZpZXcpIHJldHVybiBudWxsO1xyXG5cclxuICAgIGNvbnN0IENvbXBvbmVudCA9IGR5bmFtaWMoKCkgPT4gaW1wb3J0KGAuLyR7Y3VycmVudFZpZXd9YCksIHtcclxuICAgICAgbG9hZGluZzogKCkgPT4gPHAgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgbXQtNCB0ZXh0LWJsYWNrXCI+Q2FyZ2FuZG8gY29tcG9uZW50ZS4uLjwvcD5cclxuICAgIH0pO1xyXG5cclxuICAgIHJldHVybiA8Q29tcG9uZW50IC8+O1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIm1pbi1oLXNjcmVlbiBiZy13aGl0ZVwiPlxyXG4gICAgICA8aGVhZGVyIGNsYXNzTmFtZT1cImJnLWJsdWUtNjAwIHAtNlwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWF4LXctNHhsIG14LWF1dG8gZmxleCBqdXN0aWZ5LWNlbnRlciBnYXAtNlwiPlxyXG4gICAgICAgICAgPGJ1dHRvbiBcclxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4gbG9hZENvbXBvbmVudCgnUmVnaXN0cm9QZW5zYW1pZW50b3MnKX1cclxuICAgICAgICAgICAgY2xhc3NOYW1lPXtgXHJcbiAgICAgICAgICAgICAgcHktMyBweC02IHJvdW5kZWQtbGcgZm9udC1zZW1pYm9sZCB0ZXh0LWxnXHJcbiAgICAgICAgICAgICAgJHtjdXJyZW50VmlldyA9PT0gJ1JlZ2lzdHJvUGVuc2FtaWVudG9zJyBcclxuICAgICAgICAgICAgICAgID8gJ2JnLWdyZWVuLTUwMCB0ZXh0LXdoaXRlJyBcclxuICAgICAgICAgICAgICAgIDogJ2JnLXdoaXRlIHRleHQtYmx1ZS02MDAgaG92ZXI6YmctZ3JheS0xMDAnXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIHNoYWRvdy1tZFxyXG4gICAgICAgICAgICBgfVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICBSZWdpc3RybyBkZSBQZW5zYW1pZW50b3NcclxuICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgPGJ1dHRvbiBcclxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4gbG9hZENvbXBvbmVudCgnUmVnaXN0cm9EaW1lbnNpb25lcycpfVxyXG4gICAgICAgICAgICBjbGFzc05hbWU9e2BcclxuICAgICAgICAgICAgICBweS0zIHB4LTYgcm91bmRlZC1sZyBmb250LXNlbWlib2xkIHRleHQtbGdcclxuICAgICAgICAgICAgICAke2N1cnJlbnRWaWV3ID09PSAnUmVnaXN0cm9EaW1lbnNpb25lcycgXHJcbiAgICAgICAgICAgICAgICA/ICdiZy1ncmVlbi01MDAgdGV4dC13aGl0ZScgXHJcbiAgICAgICAgICAgICAgICA6ICdiZy13aGl0ZSB0ZXh0LWJsdWUtNjAwIGhvdmVyOmJnLWdyYXktMTAwJ1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICBzaGFkb3ctbWRcclxuICAgICAgICAgICAgYH1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgUmVnaXN0cm8gZGUgRGltZW5zaW9uZXNcclxuICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2hlYWRlcj5cclxuXHJcbiAgICAgIDxtYWluIGNsYXNzTmFtZT1cImNvbnRhaW5lciBteC1hdXRvIHAtNlwiPlxyXG4gICAgICAgIHtyZW5kZXJDb21wb25lbnQoKX1cclxuICAgICAgPC9tYWluPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IE1haW5QYWdlOyJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwiZHluYW1pYyIsIk1haW5QYWdlIiwiY3VycmVudFZpZXciLCJzZXRDdXJyZW50VmlldyIsImxvYWRDb21wb25lbnQiLCJjb21wb25lbnQiLCJyZW5kZXJDb21wb25lbnQiLCJDb21wb25lbnQiLCJsb2FkaW5nIiwicCIsImNsYXNzTmFtZSIsImRpdiIsImhlYWRlciIsImJ1dHRvbiIsIm9uQ2xpY2siLCJtYWluIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./src/app/pacientes/P001/page.tsx\n");

/***/ })

};
;