/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "app/page";
exports.ids = ["app/page"];
exports.modules = {

/***/ "(ssr)/./src/app lazy recursive ^\\.\\/.*$":
/*!*************************************************!*\
  !*** ./src/app/ lazy ^\.\/.*$ namespace object ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./RegistroDimensiones": [
		"(ssr)/./src/app/RegistroDimensiones.tsx",
		"vendor-chunks/@react-aria",
		"vendor-chunks/@supabase",
		"vendor-chunks/@nextui-org",
		"vendor-chunks/framer-motion",
		"vendor-chunks/lucide-react",
		"vendor-chunks/@swc",
		"vendor-chunks/@react-stately",
		"vendor-chunks/tailwind-variants",
		"vendor-chunks/date-fns",
		"vendor-chunks/@internationalized",
		"vendor-chunks/clsx",
		"_ssr_src_app_RegistroDimensiones_tsx"
	],
	"./RegistroDimensiones.tsx": [
		"(ssr)/./src/app/RegistroDimensiones.tsx",
		"vendor-chunks/@react-aria",
		"vendor-chunks/@supabase",
		"vendor-chunks/@nextui-org",
		"vendor-chunks/framer-motion",
		"vendor-chunks/lucide-react",
		"vendor-chunks/@swc",
		"vendor-chunks/@react-stately",
		"vendor-chunks/tailwind-variants",
		"vendor-chunks/date-fns",
		"vendor-chunks/@internationalized",
		"vendor-chunks/clsx",
		"_ssr_src_app_RegistroDimensiones_tsx"
	],
	"./RegistroPensamientos": [
		"(ssr)/./src/app/RegistroPensamientos.tsx",
		"vendor-chunks/@react-aria",
		"vendor-chunks/@supabase",
		"vendor-chunks/@nextui-org",
		"vendor-chunks/framer-motion",
		"vendor-chunks/lucide-react",
		"vendor-chunks/@swc",
		"vendor-chunks/@react-stately",
		"vendor-chunks/tailwind-variants",
		"vendor-chunks/@internationalized",
		"vendor-chunks/clsx",
		"_ssr_src_app_RegistroPensamientos_tsx"
	],
	"./RegistroPensamientos.tsx": [
		"(ssr)/./src/app/RegistroPensamientos.tsx",
		"vendor-chunks/@react-aria",
		"vendor-chunks/@supabase",
		"vendor-chunks/@nextui-org",
		"vendor-chunks/framer-motion",
		"vendor-chunks/lucide-react",
		"vendor-chunks/@swc",
		"vendor-chunks/@react-stately",
		"vendor-chunks/tailwind-variants",
		"vendor-chunks/@internationalized",
		"vendor-chunks/clsx",
		"_ssr_src_app_RegistroPensamientos_tsx"
	],
	"./globals.css": [
		"(ssr)/./src/app/globals.css"
	],
	"./layout": [
		"(ssr)/./src/app/layout.tsx"
	],
	"./layout.tsx": [
		"(ssr)/./src/app/layout.tsx"
	],
	"./page": [
		"(ssr)/./src/app/page.tsx"
	],
	"./page.tsx": [
		"(ssr)/./src/app/page.tsx"
	],
	"./pageback": [
		"(ssr)/./src/app/pageback.tsx",
		"vendor-chunks/@supabase",
		"vendor-chunks/lucide-react",
		"vendor-chunks/date-fns",
		"_ssr_src_app_pageback_tsx"
	],
	"./pageback.tsx": [
		"(ssr)/./src/app/pageback.tsx",
		"vendor-chunks/@supabase",
		"vendor-chunks/lucide-react",
		"vendor-chunks/date-fns",
		"_ssr_src_app_pageback_tsx"
	],
	"./provider": [
		"(ssr)/./src/app/provider.tsx",
		"_ssr_src_app_provider_tsx"
	],
	"./provider.tsx": [
		"(ssr)/./src/app/provider.tsx",
		"_ssr_src_app_provider_tsx"
	],
	"./styles.css": [
		"(ssr)/./src/app/styles.css",
		"_ssr_src_app_styles_css"
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
webpackAsyncContext.id = "(ssr)/./src/app lazy recursive ^\\.\\/.*$";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./action-async-storage.external":
/*!****************************************************************************!*\
  !*** external "next/dist/client/components/action-async-storage.external" ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/client/components/action-async-storage.external");

/***/ }),

/***/ "../../client/components/action-async-storage.external":
/*!*******************************************************************************!*\
  !*** external "next/dist/client/components/action-async-storage.external.js" ***!
  \*******************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/client/components/action-async-storage.external.js");

/***/ }),

/***/ "./request-async-storage.external":
/*!*****************************************************************************!*\
  !*** external "next/dist/client/components/request-async-storage.external" ***!
  \*****************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/client/components/request-async-storage.external");

/***/ }),

/***/ "../../client/components/request-async-storage.external":
/*!********************************************************************************!*\
  !*** external "next/dist/client/components/request-async-storage.external.js" ***!
  \********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/client/components/request-async-storage.external.js");

/***/ }),

/***/ "./static-generation-async-storage.external":
/*!***************************************************************************************!*\
  !*** external "next/dist/client/components/static-generation-async-storage.external" ***!
  \***************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/client/components/static-generation-async-storage.external");

/***/ }),

/***/ "../../client/components/static-generation-async-storage.external":
/*!******************************************************************************************!*\
  !*** external "next/dist/client/components/static-generation-async-storage.external.js" ***!
  \******************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/client/components/static-generation-async-storage.external.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-page.runtime.dev.js":
/*!*************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-page.runtime.dev.js" ***!
  \*************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/app-page.runtime.dev.js");

/***/ }),

/***/ "buffer":
/*!*************************!*\
  !*** external "buffer" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("buffer");

/***/ }),

/***/ "crypto":
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("crypto");

/***/ }),

/***/ "events":
/*!*************************!*\
  !*** external "events" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("events");

/***/ }),

/***/ "http":
/*!***********************!*\
  !*** external "http" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("http");

/***/ }),

/***/ "https":
/*!************************!*\
  !*** external "https" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("https");

/***/ }),

/***/ "net":
/*!**********************!*\
  !*** external "net" ***!
  \**********************/
/***/ ((module) => {

"use strict";
module.exports = require("net");

/***/ }),

/***/ "punycode":
/*!***************************!*\
  !*** external "punycode" ***!
  \***************************/
/***/ ((module) => {

"use strict";
module.exports = require("punycode");

/***/ }),

/***/ "stream":
/*!*************************!*\
  !*** external "stream" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("stream");

/***/ }),

/***/ "tls":
/*!**********************!*\
  !*** external "tls" ***!
  \**********************/
/***/ ((module) => {

"use strict";
module.exports = require("tls");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/***/ ((module) => {

"use strict";
module.exports = require("url");

/***/ }),

/***/ "zlib":
/*!***********************!*\
  !*** external "zlib" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("zlib");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fpage&page=%2Fpage&appPaths=%2Fpage&pagePath=private-next-app-dir%2Fpage.tsx&appDir=C%3A%5CUsers%5Cfidel%5Cappdimensionespacientes%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5Cfidel%5Cappdimensionespacientes&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fpage&page=%2Fpage&appPaths=%2Fpage&pagePath=private-next-app-dir%2Fpage.tsx&appDir=C%3A%5CUsers%5Cfidel%5Cappdimensionespacientes%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5Cfidel%5Cappdimensionespacientes&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GlobalError: () => (/* reexport default from dynamic */ next_dist_client_components_error_boundary__WEBPACK_IMPORTED_MODULE_2___default.a),\n/* harmony export */   __next_app__: () => (/* binding */ __next_app__),\n/* harmony export */   originalPathname: () => (/* binding */ originalPathname),\n/* harmony export */   pages: () => (/* binding */ pages),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   tree: () => (/* binding */ tree)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_future_route_modules_app_page_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/future/route-modules/app-page/module.compiled */ \"(ssr)/./node_modules/next/dist/server/future/route-modules/app-page/module.compiled.js?9d97\");\n/* harmony import */ var next_dist_server_future_route_modules_app_page_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_app_page_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/future/route-kind */ \"(rsc)/./node_modules/next/dist/server/future/route-kind.js\");\n/* harmony import */ var next_dist_client_components_error_boundary__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/client/components/error-boundary */ \"(rsc)/./node_modules/next/dist/client/components/error-boundary.js\");\n/* harmony import */ var next_dist_client_components_error_boundary__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_client_components_error_boundary__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_dist_server_app_render_entry_base__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/dist/server/app-render/entry-base */ \"(rsc)/./node_modules/next/dist/server/app-render/entry-base.js\");\n/* harmony import */ var next_dist_server_app_render_entry_base__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_app_render_entry_base__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};\n/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in next_dist_server_app_render_entry_base__WEBPACK_IMPORTED_MODULE_3__) if([\"default\",\"tree\",\"pages\",\"GlobalError\",\"originalPathname\",\"__next_app__\",\"routeModule\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => next_dist_server_app_render_entry_base__WEBPACK_IMPORTED_MODULE_3__[__WEBPACK_IMPORT_KEY__]\n/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);\n\"TURBOPACK { transition: next-ssr }\";\n\n\n// We inject the tree and pages here so that we can use them in the route\n// module.\nconst tree = {\n        children: [\n        '',\n        {\n        children: ['__PAGE__', {}, {\n          page: [() => Promise.resolve(/*! import() eager */).then(__webpack_require__.bind(__webpack_require__, /*! ./src/app/page.tsx */ \"(rsc)/./src/app/page.tsx\")), \"C:\\\\Users\\\\fidel\\\\appdimensionespacientes\\\\src\\\\app\\\\page.tsx\"],\n          \n        }]\n      },\n        {\n        'layout': [() => Promise.resolve(/*! import() eager */).then(__webpack_require__.bind(__webpack_require__, /*! ./src/app/layout.tsx */ \"(rsc)/./src/app/layout.tsx\")), \"C:\\\\Users\\\\fidel\\\\appdimensionespacientes\\\\src\\\\app\\\\layout.tsx\"],\n'not-found': [() => Promise.resolve(/*! import() eager */).then(__webpack_require__.t.bind(__webpack_require__, /*! next/dist/client/components/not-found-error */ \"(rsc)/./node_modules/next/dist/client/components/not-found-error.js\", 23)), \"next/dist/client/components/not-found-error\"],\n        \n      }\n      ]\n      }.children;\nconst pages = [\"C:\\\\Users\\\\fidel\\\\appdimensionespacientes\\\\src\\\\app\\\\page.tsx\"];\n\n\nconst __next_app_require__ = __webpack_require__\nconst __next_app_load_chunk__ = () => Promise.resolve()\nconst originalPathname = \"/page\";\nconst __next_app__ = {\n    require: __next_app_require__,\n    loadChunk: __next_app_load_chunk__\n};\n\n// Create and export the route module that will be consumed.\nconst routeModule = new next_dist_server_future_route_modules_app_page_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppPageRouteModule({\n    definition: {\n        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_PAGE,\n        page: \"/page\",\n        pathname: \"/\",\n        // The following aren't used in production.\n        bundlePath: \"\",\n        filename: \"\",\n        appPaths: []\n    },\n    userland: {\n        loaderTree: tree\n    }\n});\n\n//# sourceMappingURL=app-page.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIuanM/bmFtZT1hcHAlMkZwYWdlJnBhZ2U9JTJGcGFnZSZhcHBQYXRocz0lMkZwYWdlJnBhZ2VQYXRoPXByaXZhdGUtbmV4dC1hcHAtZGlyJTJGcGFnZS50c3gmYXBwRGlyPUMlM0ElNUNVc2VycyU1Q2ZpZGVsJTVDYXBwZGltZW5zaW9uZXNwYWNpZW50ZXMlNUNzcmMlNUNhcHAmcGFnZUV4dGVuc2lvbnM9dHN4JnBhZ2VFeHRlbnNpb25zPXRzJnBhZ2VFeHRlbnNpb25zPWpzeCZwYWdlRXh0ZW5zaW9ucz1qcyZyb290RGlyPUMlM0ElNUNVc2VycyU1Q2ZpZGVsJTVDYXBwZGltZW5zaW9uZXNwYWNpZW50ZXMmaXNEZXY9dHJ1ZSZ0c2NvbmZpZ1BhdGg9dHNjb25maWcuanNvbiZiYXNlUGF0aD0mYXNzZXRQcmVmaXg9Jm5leHRDb25maWdPdXRwdXQ9JnByZWZlcnJlZFJlZ2lvbj0mbWlkZGxld2FyZUNvbmZpZz1lMzAlM0QhIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxhQUFhLHNCQUFzQjtBQUNpRTtBQUNyQztBQUMvRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQ0FBaUM7QUFDakMsdUJBQXVCLGdKQUFrRztBQUN6SDtBQUNBLFNBQVM7QUFDVCxPQUFPO0FBQ1A7QUFDQSx5QkFBeUIsb0pBQW9HO0FBQzdILG9CQUFvQiwwTkFBZ0Y7QUFDcEc7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ3VCO0FBQzZEO0FBQ3BGLDZCQUE2QixtQkFBbUI7QUFDaEQ7QUFDTztBQUNBO0FBQ1A7QUFDQTtBQUNBO0FBQ3VEO0FBQ3ZEO0FBQ08sd0JBQXdCLDhHQUFrQjtBQUNqRDtBQUNBLGNBQWMseUVBQVM7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0anMtYXBwLz85MTM2Il0sInNvdXJjZXNDb250ZW50IjpbIlwiVFVSQk9QQUNLIHsgdHJhbnNpdGlvbjogbmV4dC1zc3IgfVwiO1xuaW1wb3J0IHsgQXBwUGFnZVJvdXRlTW9kdWxlIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvZnV0dXJlL3JvdXRlLW1vZHVsZXMvYXBwLXBhZ2UvbW9kdWxlLmNvbXBpbGVkXCI7XG5pbXBvcnQgeyBSb3V0ZUtpbmQgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9mdXR1cmUvcm91dGUta2luZFwiO1xuLy8gV2UgaW5qZWN0IHRoZSB0cmVlIGFuZCBwYWdlcyBoZXJlIHNvIHRoYXQgd2UgY2FuIHVzZSB0aGVtIGluIHRoZSByb3V0ZVxuLy8gbW9kdWxlLlxuY29uc3QgdHJlZSA9IHtcbiAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgJycsXG4gICAgICAgIHtcbiAgICAgICAgY2hpbGRyZW46IFsnX19QQUdFX18nLCB7fSwge1xuICAgICAgICAgIHBhZ2U6IFsoKSA9PiBpbXBvcnQoLyogd2VicGFja01vZGU6IFwiZWFnZXJcIiAqLyBcIkM6XFxcXFVzZXJzXFxcXGZpZGVsXFxcXGFwcGRpbWVuc2lvbmVzcGFjaWVudGVzXFxcXHNyY1xcXFxhcHBcXFxccGFnZS50c3hcIiksIFwiQzpcXFxcVXNlcnNcXFxcZmlkZWxcXFxcYXBwZGltZW5zaW9uZXNwYWNpZW50ZXNcXFxcc3JjXFxcXGFwcFxcXFxwYWdlLnRzeFwiXSxcbiAgICAgICAgICBcbiAgICAgICAgfV1cbiAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgJ2xheW91dCc6IFsoKSA9PiBpbXBvcnQoLyogd2VicGFja01vZGU6IFwiZWFnZXJcIiAqLyBcIkM6XFxcXFVzZXJzXFxcXGZpZGVsXFxcXGFwcGRpbWVuc2lvbmVzcGFjaWVudGVzXFxcXHNyY1xcXFxhcHBcXFxcbGF5b3V0LnRzeFwiKSwgXCJDOlxcXFxVc2Vyc1xcXFxmaWRlbFxcXFxhcHBkaW1lbnNpb25lc3BhY2llbnRlc1xcXFxzcmNcXFxcYXBwXFxcXGxheW91dC50c3hcIl0sXG4nbm90LWZvdW5kJzogWygpID0+IGltcG9ydCgvKiB3ZWJwYWNrTW9kZTogXCJlYWdlclwiICovIFwibmV4dC9kaXN0L2NsaWVudC9jb21wb25lbnRzL25vdC1mb3VuZC1lcnJvclwiKSwgXCJuZXh0L2Rpc3QvY2xpZW50L2NvbXBvbmVudHMvbm90LWZvdW5kLWVycm9yXCJdLFxuICAgICAgICBcbiAgICAgIH1cbiAgICAgIF1cbiAgICAgIH0uY2hpbGRyZW47XG5jb25zdCBwYWdlcyA9IFtcIkM6XFxcXFVzZXJzXFxcXGZpZGVsXFxcXGFwcGRpbWVuc2lvbmVzcGFjaWVudGVzXFxcXHNyY1xcXFxhcHBcXFxccGFnZS50c3hcIl07XG5leHBvcnQgeyB0cmVlLCBwYWdlcyB9O1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBHbG9iYWxFcnJvciB9IGZyb20gXCJuZXh0L2Rpc3QvY2xpZW50L2NvbXBvbmVudHMvZXJyb3ItYm91bmRhcnlcIjtcbmNvbnN0IF9fbmV4dF9hcHBfcmVxdWlyZV9fID0gX193ZWJwYWNrX3JlcXVpcmVfX1xuY29uc3QgX19uZXh0X2FwcF9sb2FkX2NodW5rX18gPSAoKSA9PiBQcm9taXNlLnJlc29sdmUoKVxuZXhwb3J0IGNvbnN0IG9yaWdpbmFsUGF0aG5hbWUgPSBcIi9wYWdlXCI7XG5leHBvcnQgY29uc3QgX19uZXh0X2FwcF9fID0ge1xuICAgIHJlcXVpcmU6IF9fbmV4dF9hcHBfcmVxdWlyZV9fLFxuICAgIGxvYWRDaHVuazogX19uZXh0X2FwcF9sb2FkX2NodW5rX19cbn07XG5leHBvcnQgKiBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9hcHAtcmVuZGVyL2VudHJ5LWJhc2VcIjtcbi8vIENyZWF0ZSBhbmQgZXhwb3J0IHRoZSByb3V0ZSBtb2R1bGUgdGhhdCB3aWxsIGJlIGNvbnN1bWVkLlxuZXhwb3J0IGNvbnN0IHJvdXRlTW9kdWxlID0gbmV3IEFwcFBhZ2VSb3V0ZU1vZHVsZSh7XG4gICAgZGVmaW5pdGlvbjoge1xuICAgICAgICBraW5kOiBSb3V0ZUtpbmQuQVBQX1BBR0UsXG4gICAgICAgIHBhZ2U6IFwiL3BhZ2VcIixcbiAgICAgICAgcGF0aG5hbWU6IFwiL1wiLFxuICAgICAgICAvLyBUaGUgZm9sbG93aW5nIGFyZW4ndCB1c2VkIGluIHByb2R1Y3Rpb24uXG4gICAgICAgIGJ1bmRsZVBhdGg6IFwiXCIsXG4gICAgICAgIGZpbGVuYW1lOiBcIlwiLFxuICAgICAgICBhcHBQYXRoczogW11cbiAgICB9LFxuICAgIHVzZXJsYW5kOiB7XG4gICAgICAgIGxvYWRlclRyZWU6IHRyZWVcbiAgICB9XG59KTtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9YXBwLXBhZ2UuanMubWFwIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fpage&page=%2Fpage&appPaths=%2Fpage&pagePath=private-next-app-dir%2Fpage.tsx&appDir=C%3A%5CUsers%5Cfidel%5Cappdimensionespacientes%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5Cfidel%5Cappdimensionespacientes&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(ssr)/./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?modules=C%3A%5CUsers%5Cfidel%5Cappdimensionespacientes%5Cnode_modules%5Cnext%5Cdist%5Cclient%5Ccomponents%5Capp-router.js&modules=C%3A%5CUsers%5Cfidel%5Cappdimensionespacientes%5Cnode_modules%5Cnext%5Cdist%5Cclient%5Ccomponents%5Cerror-boundary.js&modules=C%3A%5CUsers%5Cfidel%5Cappdimensionespacientes%5Cnode_modules%5Cnext%5Cdist%5Cclient%5Ccomponents%5Clayout-router.js&modules=C%3A%5CUsers%5Cfidel%5Cappdimensionespacientes%5Cnode_modules%5Cnext%5Cdist%5Cclient%5Ccomponents%5Cnot-found-boundary.js&modules=C%3A%5CUsers%5Cfidel%5Cappdimensionespacientes%5Cnode_modules%5Cnext%5Cdist%5Cclient%5Ccomponents%5Crender-from-template-context.js&modules=C%3A%5CUsers%5Cfidel%5Cappdimensionespacientes%5Cnode_modules%5Cnext%5Cdist%5Cclient%5Ccomponents%5Cstatic-generation-searchparams-bailout-provider.js&server=true!":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?modules=C%3A%5CUsers%5Cfidel%5Cappdimensionespacientes%5Cnode_modules%5Cnext%5Cdist%5Cclient%5Ccomponents%5Capp-router.js&modules=C%3A%5CUsers%5Cfidel%5Cappdimensionespacientes%5Cnode_modules%5Cnext%5Cdist%5Cclient%5Ccomponents%5Cerror-boundary.js&modules=C%3A%5CUsers%5Cfidel%5Cappdimensionespacientes%5Cnode_modules%5Cnext%5Cdist%5Cclient%5Ccomponents%5Clayout-router.js&modules=C%3A%5CUsers%5Cfidel%5Cappdimensionespacientes%5Cnode_modules%5Cnext%5Cdist%5Cclient%5Ccomponents%5Cnot-found-boundary.js&modules=C%3A%5CUsers%5Cfidel%5Cappdimensionespacientes%5Cnode_modules%5Cnext%5Cdist%5Cclient%5Ccomponents%5Crender-from-template-context.js&modules=C%3A%5CUsers%5Cfidel%5Cappdimensionespacientes%5Cnode_modules%5Cnext%5Cdist%5Cclient%5Ccomponents%5Cstatic-generation-searchparams-bailout-provider.js&server=true! ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("Promise.resolve(/*! import() eager */).then(__webpack_require__.t.bind(__webpack_require__, /*! ./node_modules/next/dist/client/components/app-router.js */ \"(ssr)/./node_modules/next/dist/client/components/app-router.js\", 23));\nPromise.resolve(/*! import() eager */).then(__webpack_require__.t.bind(__webpack_require__, /*! ./node_modules/next/dist/client/components/error-boundary.js */ \"(ssr)/./node_modules/next/dist/client/components/error-boundary.js\", 23));\nPromise.resolve(/*! import() eager */).then(__webpack_require__.t.bind(__webpack_require__, /*! ./node_modules/next/dist/client/components/layout-router.js */ \"(ssr)/./node_modules/next/dist/client/components/layout-router.js\", 23));\nPromise.resolve(/*! import() eager */).then(__webpack_require__.t.bind(__webpack_require__, /*! ./node_modules/next/dist/client/components/not-found-boundary.js */ \"(ssr)/./node_modules/next/dist/client/components/not-found-boundary.js\", 23));\nPromise.resolve(/*! import() eager */).then(__webpack_require__.t.bind(__webpack_require__, /*! ./node_modules/next/dist/client/components/render-from-template-context.js */ \"(ssr)/./node_modules/next/dist/client/components/render-from-template-context.js\", 23));\nPromise.resolve(/*! import() eager */).then(__webpack_require__.t.bind(__webpack_require__, /*! ./node_modules/next/dist/client/components/static-generation-searchparams-bailout-provider.js */ \"(ssr)/./node_modules/next/dist/client/components/static-generation-searchparams-bailout-provider.js\", 23))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWZsaWdodC1jbGllbnQtZW50cnktbG9hZGVyLmpzP21vZHVsZXM9QyUzQSU1Q1VzZXJzJTVDZmlkZWwlNUNhcHBkaW1lbnNpb25lc3BhY2llbnRlcyU1Q25vZGVfbW9kdWxlcyU1Q25leHQlNUNkaXN0JTVDY2xpZW50JTVDY29tcG9uZW50cyU1Q2FwcC1yb3V0ZXIuanMmbW9kdWxlcz1DJTNBJTVDVXNlcnMlNUNmaWRlbCU1Q2FwcGRpbWVuc2lvbmVzcGFjaWVudGVzJTVDbm9kZV9tb2R1bGVzJTVDbmV4dCU1Q2Rpc3QlNUNjbGllbnQlNUNjb21wb25lbnRzJTVDZXJyb3ItYm91bmRhcnkuanMmbW9kdWxlcz1DJTNBJTVDVXNlcnMlNUNmaWRlbCU1Q2FwcGRpbWVuc2lvbmVzcGFjaWVudGVzJTVDbm9kZV9tb2R1bGVzJTVDbmV4dCU1Q2Rpc3QlNUNjbGllbnQlNUNjb21wb25lbnRzJTVDbGF5b3V0LXJvdXRlci5qcyZtb2R1bGVzPUMlM0ElNUNVc2VycyU1Q2ZpZGVsJTVDYXBwZGltZW5zaW9uZXNwYWNpZW50ZXMlNUNub2RlX21vZHVsZXMlNUNuZXh0JTVDZGlzdCU1Q2NsaWVudCU1Q2NvbXBvbmVudHMlNUNub3QtZm91bmQtYm91bmRhcnkuanMmbW9kdWxlcz1DJTNBJTVDVXNlcnMlNUNmaWRlbCU1Q2FwcGRpbWVuc2lvbmVzcGFjaWVudGVzJTVDbm9kZV9tb2R1bGVzJTVDbmV4dCU1Q2Rpc3QlNUNjbGllbnQlNUNjb21wb25lbnRzJTVDcmVuZGVyLWZyb20tdGVtcGxhdGUtY29udGV4dC5qcyZtb2R1bGVzPUMlM0ElNUNVc2VycyU1Q2ZpZGVsJTVDYXBwZGltZW5zaW9uZXNwYWNpZW50ZXMlNUNub2RlX21vZHVsZXMlNUNuZXh0JTVDZGlzdCU1Q2NsaWVudCU1Q2NvbXBvbmVudHMlNUNzdGF0aWMtZ2VuZXJhdGlvbi1zZWFyY2hwYXJhbXMtYmFpbG91dC1wcm92aWRlci5qcyZzZXJ2ZXI9dHJ1ZSEiLCJtYXBwaW5ncyI6IkFBQUEsa09BQTJJO0FBQzNJLDBPQUErSTtBQUMvSSx3T0FBOEk7QUFDOUksa1BBQW1KO0FBQ25KLHNRQUE2SjtBQUM3SiIsInNvdXJjZXMiOlsid2VicGFjazovL25leHRqcy1hcHAvP2I2YjAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0KC8qIHdlYnBhY2tNb2RlOiBcImVhZ2VyXCIgKi8gXCJDOlxcXFxVc2Vyc1xcXFxmaWRlbFxcXFxhcHBkaW1lbnNpb25lc3BhY2llbnRlc1xcXFxub2RlX21vZHVsZXNcXFxcbmV4dFxcXFxkaXN0XFxcXGNsaWVudFxcXFxjb21wb25lbnRzXFxcXGFwcC1yb3V0ZXIuanNcIik7XG5pbXBvcnQoLyogd2VicGFja01vZGU6IFwiZWFnZXJcIiAqLyBcIkM6XFxcXFVzZXJzXFxcXGZpZGVsXFxcXGFwcGRpbWVuc2lvbmVzcGFjaWVudGVzXFxcXG5vZGVfbW9kdWxlc1xcXFxuZXh0XFxcXGRpc3RcXFxcY2xpZW50XFxcXGNvbXBvbmVudHNcXFxcZXJyb3ItYm91bmRhcnkuanNcIik7XG5pbXBvcnQoLyogd2VicGFja01vZGU6IFwiZWFnZXJcIiAqLyBcIkM6XFxcXFVzZXJzXFxcXGZpZGVsXFxcXGFwcGRpbWVuc2lvbmVzcGFjaWVudGVzXFxcXG5vZGVfbW9kdWxlc1xcXFxuZXh0XFxcXGRpc3RcXFxcY2xpZW50XFxcXGNvbXBvbmVudHNcXFxcbGF5b3V0LXJvdXRlci5qc1wiKTtcbmltcG9ydCgvKiB3ZWJwYWNrTW9kZTogXCJlYWdlclwiICovIFwiQzpcXFxcVXNlcnNcXFxcZmlkZWxcXFxcYXBwZGltZW5zaW9uZXNwYWNpZW50ZXNcXFxcbm9kZV9tb2R1bGVzXFxcXG5leHRcXFxcZGlzdFxcXFxjbGllbnRcXFxcY29tcG9uZW50c1xcXFxub3QtZm91bmQtYm91bmRhcnkuanNcIik7XG5pbXBvcnQoLyogd2VicGFja01vZGU6IFwiZWFnZXJcIiAqLyBcIkM6XFxcXFVzZXJzXFxcXGZpZGVsXFxcXGFwcGRpbWVuc2lvbmVzcGFjaWVudGVzXFxcXG5vZGVfbW9kdWxlc1xcXFxuZXh0XFxcXGRpc3RcXFxcY2xpZW50XFxcXGNvbXBvbmVudHNcXFxccmVuZGVyLWZyb20tdGVtcGxhdGUtY29udGV4dC5qc1wiKTtcbmltcG9ydCgvKiB3ZWJwYWNrTW9kZTogXCJlYWdlclwiICovIFwiQzpcXFxcVXNlcnNcXFxcZmlkZWxcXFxcYXBwZGltZW5zaW9uZXNwYWNpZW50ZXNcXFxcbm9kZV9tb2R1bGVzXFxcXG5leHRcXFxcZGlzdFxcXFxjbGllbnRcXFxcY29tcG9uZW50c1xcXFxzdGF0aWMtZ2VuZXJhdGlvbi1zZWFyY2hwYXJhbXMtYmFpbG91dC1wcm92aWRlci5qc1wiKSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?modules=C%3A%5CUsers%5Cfidel%5Cappdimensionespacientes%5Cnode_modules%5Cnext%5Cdist%5Cclient%5Ccomponents%5Capp-router.js&modules=C%3A%5CUsers%5Cfidel%5Cappdimensionespacientes%5Cnode_modules%5Cnext%5Cdist%5Cclient%5Ccomponents%5Cerror-boundary.js&modules=C%3A%5CUsers%5Cfidel%5Cappdimensionespacientes%5Cnode_modules%5Cnext%5Cdist%5Cclient%5Ccomponents%5Clayout-router.js&modules=C%3A%5CUsers%5Cfidel%5Cappdimensionespacientes%5Cnode_modules%5Cnext%5Cdist%5Cclient%5Ccomponents%5Cnot-found-boundary.js&modules=C%3A%5CUsers%5Cfidel%5Cappdimensionespacientes%5Cnode_modules%5Cnext%5Cdist%5Cclient%5Ccomponents%5Crender-from-template-context.js&modules=C%3A%5CUsers%5Cfidel%5Cappdimensionespacientes%5Cnode_modules%5Cnext%5Cdist%5Cclient%5Ccomponents%5Cstatic-generation-searchparams-bailout-provider.js&server=true!\n");

/***/ }),

/***/ "(ssr)/./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?modules=C%3A%5CUsers%5Cfidel%5Cappdimensionespacientes%5Csrc%5Capp%5Clayout.tsx&server=true!":
/*!**************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?modules=C%3A%5CUsers%5Cfidel%5Cappdimensionespacientes%5Csrc%5Capp%5Clayout.tsx&server=true! ***!
  \**************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("Promise.resolve(/*! import() eager */).then(__webpack_require__.bind(__webpack_require__, /*! ./src/app/layout.tsx */ \"(ssr)/./src/app/layout.tsx\"))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWZsaWdodC1jbGllbnQtZW50cnktbG9hZGVyLmpzP21vZHVsZXM9QyUzQSU1Q1VzZXJzJTVDZmlkZWwlNUNhcHBkaW1lbnNpb25lc3BhY2llbnRlcyU1Q3NyYyU1Q2FwcCU1Q2xheW91dC50c3gmc2VydmVyPXRydWUhIiwibWFwcGluZ3MiOiJBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmV4dGpzLWFwcC8/NWFmNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQoLyogd2VicGFja01vZGU6IFwiZWFnZXJcIiAqLyBcIkM6XFxcXFVzZXJzXFxcXGZpZGVsXFxcXGFwcGRpbWVuc2lvbmVzcGFjaWVudGVzXFxcXHNyY1xcXFxhcHBcXFxcbGF5b3V0LnRzeFwiKSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?modules=C%3A%5CUsers%5Cfidel%5Cappdimensionespacientes%5Csrc%5Capp%5Clayout.tsx&server=true!\n");

/***/ }),

/***/ "(ssr)/./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?modules=C%3A%5CUsers%5Cfidel%5Cappdimensionespacientes%5Csrc%5Capp%5Cpage.tsx&server=true!":
/*!************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?modules=C%3A%5CUsers%5Cfidel%5Cappdimensionespacientes%5Csrc%5Capp%5Cpage.tsx&server=true! ***!
  \************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("Promise.resolve(/*! import() eager */).then(__webpack_require__.bind(__webpack_require__, /*! ./src/app/page.tsx */ \"(ssr)/./src/app/page.tsx\"))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWZsaWdodC1jbGllbnQtZW50cnktbG9hZGVyLmpzP21vZHVsZXM9QyUzQSU1Q1VzZXJzJTVDZmlkZWwlNUNhcHBkaW1lbnNpb25lc3BhY2llbnRlcyU1Q3NyYyU1Q2FwcCU1Q3BhZ2UudHN4JnNlcnZlcj10cnVlISIsIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL25leHRqcy1hcHAvPzVmNzIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0KC8qIHdlYnBhY2tNb2RlOiBcImVhZ2VyXCIgKi8gXCJDOlxcXFxVc2Vyc1xcXFxmaWRlbFxcXFxhcHBkaW1lbnNpb25lc3BhY2llbnRlc1xcXFxzcmNcXFxcYXBwXFxcXHBhZ2UudHN4XCIpIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?modules=C%3A%5CUsers%5Cfidel%5Cappdimensionespacientes%5Csrc%5Capp%5Cpage.tsx&server=true!\n");

/***/ }),

/***/ "(ssr)/./src/app/layout.tsx":
/*!****************************!*\
  !*** ./src/app/layout.tsx ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ RootLayout)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(ssr)/./node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./globals.css */ \"(ssr)/./src/app/globals.css\");\n/* harmony import */ var _nextui_org_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @nextui-org/react */ \"(ssr)/./node_modules/@nextui-org/system/dist/chunk-PYQ4KYZP.mjs\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \n\n\nfunction RootLayout({ children }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"html\", {\n        lang: \"en\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"body\", {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_nextui_org_react__WEBPACK_IMPORTED_MODULE_2__.NextUIProvider, {\n                children: children\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\fidel\\\\appdimensionespacientes\\\\src\\\\app\\\\layout.tsx\",\n                lineNumber: 14,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\fidel\\\\appdimensionespacientes\\\\src\\\\app\\\\layout.tsx\",\n            lineNumber: 13,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\fidel\\\\appdimensionespacientes\\\\src\\\\app\\\\layout.tsx\",\n        lineNumber: 12,\n        columnNumber: 5\n    }, this);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9zcmMvYXBwL2xheW91dC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ3NCO0FBRTRCO0FBRW5DLFNBQVNDLFdBQVcsRUFDakNDLFFBQVEsRUFHVDtJQUNDLHFCQUNFLDhEQUFDQztRQUFLQyxNQUFLO2tCQUNULDRFQUFDQztzQkFDQyw0RUFBQ0wsNkRBQWNBOzBCQUNaRTs7Ozs7Ozs7Ozs7Ozs7OztBQUtYIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmV4dGpzLWFwcC8uL3NyYy9hcHAvbGF5b3V0LnRzeD81N2E5Il0sInNvdXJjZXNDb250ZW50IjpbIid1c2UgY2xpZW50J1xuaW1wb3J0ICcuL2dsb2JhbHMuY3NzJ1xuXG5pbXBvcnQgeyBOZXh0VUlQcm92aWRlciB9IGZyb20gXCJAbmV4dHVpLW9yZy9yZWFjdFwiXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFJvb3RMYXlvdXQoe1xuICBjaGlsZHJlbixcbn06IHtcbiAgY2hpbGRyZW46IFJlYWN0LlJlYWN0Tm9kZVxufSkge1xuICByZXR1cm4gKFxuICAgIDxodG1sIGxhbmc9XCJlblwiPlxuICAgICAgPGJvZHk+XG4gICAgICAgIDxOZXh0VUlQcm92aWRlcj5cbiAgICAgICAgICB7Y2hpbGRyZW59XG4gICAgICAgIDwvTmV4dFVJUHJvdmlkZXI+XG4gICAgICA8L2JvZHk+XG4gICAgPC9odG1sPlxuICApXG59XG5cbiJdLCJuYW1lcyI6WyJOZXh0VUlQcm92aWRlciIsIlJvb3RMYXlvdXQiLCJjaGlsZHJlbiIsImh0bWwiLCJsYW5nIiwiYm9keSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(ssr)/./src/app/layout.tsx\n");

/***/ }),

/***/ "(ssr)/./src/app/page.tsx":
/*!**************************!*\
  !*** ./src/app/page.tsx ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(ssr)/./node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(ssr)/./node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dynamic */ \"(ssr)/./node_modules/next/dist/api/app-dynamic.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \n\n\nconst MainPage = ()=>{\n    const [currentView, setCurrentView] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const loadComponent = (component)=>{\n        setCurrentView(component);\n    };\n    const renderComponent = ()=>{\n        if (!currentView) return null;\n        const Component = (0,next_dynamic__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(()=>__webpack_require__(\"(ssr)/./src/app lazy recursive ^\\\\.\\\\/.*$\")(`./${currentView}`), {\n            loading: ()=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    className: \"text-center mt-4 text-black\",\n                    children: \"Cargando componente...\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\fidel\\\\appdimensionespacientes\\\\src\\\\app\\\\page.tsx\",\n                    lineNumber: 17,\n                    columnNumber: 22\n                }, undefined)\n        });\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {}, void 0, false, {\n            fileName: \"C:\\\\Users\\\\fidel\\\\appdimensionespacientes\\\\src\\\\app\\\\page.tsx\",\n            lineNumber: 20,\n            columnNumber: 12\n        }, undefined);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"min-h-screen bg-white\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"header\", {\n                className: \"bg-blue-600 p-6\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"max-w-4xl mx-auto flex justify-center gap-6\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            onClick: ()=>loadComponent(\"RegistroPensamientos\"),\n                            className: `\r\n              py-3 px-6 rounded-lg font-semibold text-lg\r\n              ${currentView === \"RegistroPensamientos\" ? \"bg-green-500 text-white\" : \"bg-white text-blue-600 hover:bg-gray-100\"}\r\n              shadow-md\r\n            `,\n                            children: \"Registro de Pensamientos\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\fidel\\\\appdimensionespacientes\\\\src\\\\app\\\\page.tsx\",\n                            lineNumber: 27,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            onClick: ()=>loadComponent(\"RegistroDimensiones\"),\n                            className: `\r\n              py-3 px-6 rounded-lg font-semibold text-lg\r\n              ${currentView === \"RegistroDimensiones\" ? \"bg-green-500 text-white\" : \"bg-white text-blue-600 hover:bg-gray-100\"}\r\n              shadow-md\r\n            `,\n                            children: \"Registro de Dimensiones\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\fidel\\\\appdimensionespacientes\\\\src\\\\app\\\\page.tsx\",\n                            lineNumber: 40,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\fidel\\\\appdimensionespacientes\\\\src\\\\app\\\\page.tsx\",\n                    lineNumber: 26,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\fidel\\\\appdimensionespacientes\\\\src\\\\app\\\\page.tsx\",\n                lineNumber: 25,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                className: \"container mx-auto p-6\",\n                children: renderComponent()\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\fidel\\\\appdimensionespacientes\\\\src\\\\app\\\\page.tsx\",\n                lineNumber: 56,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\fidel\\\\appdimensionespacientes\\\\src\\\\app\\\\page.tsx\",\n        lineNumber: 24,\n        columnNumber: 5\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MainPage);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9zcmMvYXBwL3BhZ2UudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFFd0M7QUFDTDtBQUVuQyxNQUFNRyxXQUFXO0lBQ2YsTUFBTSxDQUFDQyxhQUFhQyxlQUFlLEdBQUdKLCtDQUFRQSxDQUFDO0lBRS9DLE1BQU1LLGdCQUFnQixDQUFDQztRQUNyQkYsZUFBZUU7SUFDakI7SUFFQSxNQUFNQyxrQkFBa0I7UUFDdEIsSUFBSSxDQUFDSixhQUFhLE9BQU87UUFFekIsTUFBTUssWUFBWVAsd0RBQU9BLENBQUMsSUFBTSxpRUFBTyxHQUFHLEVBQUVFLFlBQVksQ0FBQyxDQUFDLEVBQUU7WUFDMURNLFNBQVMsa0JBQU0sOERBQUNDO29CQUFFQyxXQUFVOzhCQUE4Qjs7Ozs7O1FBQzVEO1FBRUEscUJBQU8sOERBQUNIOzs7OztJQUNWO0lBRUEscUJBQ0UsOERBQUNJO1FBQUlELFdBQVU7OzBCQUNiLDhEQUFDRTtnQkFBT0YsV0FBVTswQkFDaEIsNEVBQUNDO29CQUFJRCxXQUFVOztzQ0FDYiw4REFBQ0c7NEJBQ0NDLFNBQVMsSUFBTVYsY0FBYzs0QkFDN0JNLFdBQVcsQ0FBQzs7Y0FFVixFQUFFUixnQkFBZ0IseUJBQ2QsNEJBQ0EsMkNBQ0g7O1lBRUgsQ0FBQztzQ0FDRjs7Ozs7O3NDQUdELDhEQUFDVzs0QkFDQ0MsU0FBUyxJQUFNVixjQUFjOzRCQUM3Qk0sV0FBVyxDQUFDOztjQUVWLEVBQUVSLGdCQUFnQix3QkFDZCw0QkFDQSwyQ0FDSDs7WUFFSCxDQUFDO3NDQUNGOzs7Ozs7Ozs7Ozs7Ozs7OzswQkFNTCw4REFBQ2E7Z0JBQUtMLFdBQVU7MEJBQ2JKOzs7Ozs7Ozs7Ozs7QUFJVDtBQUVBLGlFQUFlTCxRQUFRQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmV4dGpzLWFwcC8uL3NyYy9hcHAvcGFnZS50c3g/ZjY4YSJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGNsaWVudCdcclxuXHJcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IGR5bmFtaWMgZnJvbSAnbmV4dC9keW5hbWljJztcclxuXHJcbmNvbnN0IE1haW5QYWdlID0gKCkgPT4ge1xyXG4gIGNvbnN0IFtjdXJyZW50Vmlldywgc2V0Q3VycmVudFZpZXddID0gdXNlU3RhdGUobnVsbCk7XHJcblxyXG4gIGNvbnN0IGxvYWRDb21wb25lbnQgPSAoY29tcG9uZW50KSA9PiB7XHJcbiAgICBzZXRDdXJyZW50Vmlldyhjb21wb25lbnQpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IHJlbmRlckNvbXBvbmVudCA9ICgpID0+IHtcclxuICAgIGlmICghY3VycmVudFZpZXcpIHJldHVybiBudWxsO1xyXG5cclxuICAgIGNvbnN0IENvbXBvbmVudCA9IGR5bmFtaWMoKCkgPT4gaW1wb3J0KGAuLyR7Y3VycmVudFZpZXd9YCksIHtcclxuICAgICAgbG9hZGluZzogKCkgPT4gPHAgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgbXQtNCB0ZXh0LWJsYWNrXCI+Q2FyZ2FuZG8gY29tcG9uZW50ZS4uLjwvcD5cclxuICAgIH0pO1xyXG5cclxuICAgIHJldHVybiA8Q29tcG9uZW50IC8+O1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIm1pbi1oLXNjcmVlbiBiZy13aGl0ZVwiPlxyXG4gICAgICA8aGVhZGVyIGNsYXNzTmFtZT1cImJnLWJsdWUtNjAwIHAtNlwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWF4LXctNHhsIG14LWF1dG8gZmxleCBqdXN0aWZ5LWNlbnRlciBnYXAtNlwiPlxyXG4gICAgICAgICAgPGJ1dHRvbiBcclxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4gbG9hZENvbXBvbmVudCgnUmVnaXN0cm9QZW5zYW1pZW50b3MnKX1cclxuICAgICAgICAgICAgY2xhc3NOYW1lPXtgXHJcbiAgICAgICAgICAgICAgcHktMyBweC02IHJvdW5kZWQtbGcgZm9udC1zZW1pYm9sZCB0ZXh0LWxnXHJcbiAgICAgICAgICAgICAgJHtjdXJyZW50VmlldyA9PT0gJ1JlZ2lzdHJvUGVuc2FtaWVudG9zJyBcclxuICAgICAgICAgICAgICAgID8gJ2JnLWdyZWVuLTUwMCB0ZXh0LXdoaXRlJyBcclxuICAgICAgICAgICAgICAgIDogJ2JnLXdoaXRlIHRleHQtYmx1ZS02MDAgaG92ZXI6YmctZ3JheS0xMDAnXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIHNoYWRvdy1tZFxyXG4gICAgICAgICAgICBgfVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICBSZWdpc3RybyBkZSBQZW5zYW1pZW50b3NcclxuICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgPGJ1dHRvbiBcclxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4gbG9hZENvbXBvbmVudCgnUmVnaXN0cm9EaW1lbnNpb25lcycpfVxyXG4gICAgICAgICAgICBjbGFzc05hbWU9e2BcclxuICAgICAgICAgICAgICBweS0zIHB4LTYgcm91bmRlZC1sZyBmb250LXNlbWlib2xkIHRleHQtbGdcclxuICAgICAgICAgICAgICAke2N1cnJlbnRWaWV3ID09PSAnUmVnaXN0cm9EaW1lbnNpb25lcycgXHJcbiAgICAgICAgICAgICAgICA/ICdiZy1ncmVlbi01MDAgdGV4dC13aGl0ZScgXHJcbiAgICAgICAgICAgICAgICA6ICdiZy13aGl0ZSB0ZXh0LWJsdWUtNjAwIGhvdmVyOmJnLWdyYXktMTAwJ1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICBzaGFkb3ctbWRcclxuICAgICAgICAgICAgYH1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgUmVnaXN0cm8gZGUgRGltZW5zaW9uZXNcclxuICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2hlYWRlcj5cclxuXHJcbiAgICAgIDxtYWluIGNsYXNzTmFtZT1cImNvbnRhaW5lciBteC1hdXRvIHAtNlwiPlxyXG4gICAgICAgIHtyZW5kZXJDb21wb25lbnQoKX1cclxuICAgICAgPC9tYWluPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IE1haW5QYWdlOyJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwiZHluYW1pYyIsIk1haW5QYWdlIiwiY3VycmVudFZpZXciLCJzZXRDdXJyZW50VmlldyIsImxvYWRDb21wb25lbnQiLCJjb21wb25lbnQiLCJyZW5kZXJDb21wb25lbnQiLCJDb21wb25lbnQiLCJsb2FkaW5nIiwicCIsImNsYXNzTmFtZSIsImRpdiIsImhlYWRlciIsImJ1dHRvbiIsIm9uQ2xpY2siLCJtYWluIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./src/app/page.tsx\n");

/***/ }),

/***/ "(ssr)/./src/app/globals.css":
/*!*****************************!*\
  !*** ./src/app/globals.css ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (\"ac4c33d8f4b7\");\nif (false) {}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9zcmMvYXBwL2dsb2JhbHMuY3NzIiwibWFwcGluZ3MiOiI7Ozs7QUFBQSxpRUFBZSxjQUFjO0FBQzdCLElBQUksS0FBVSxFQUFFLEVBQXVCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmV4dGpzLWFwcC8uL3NyYy9hcHAvZ2xvYmFscy5jc3M/ZGQ1NCJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBcImFjNGMzM2Q4ZjRiN1wiXG5pZiAobW9kdWxlLmhvdCkgeyBtb2R1bGUuaG90LmFjY2VwdCgpIH1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./src/app/globals.css\n");

/***/ }),

/***/ "(rsc)/./src/app/layout.tsx":
/*!****************************!*\
  !*** ./src/app/layout.tsx ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $$typeof: () => (/* binding */ $$typeof),
/* harmony export */   __esModule: () => (/* binding */ __esModule),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/build/webpack/loaders/next-flight-loader/module-proxy */ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-flight-loader/module-proxy.js");

const proxy = (0,next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__.createProxy)(String.raw`C:\Users\fidel\appdimensionespacientes\src\app\layout.tsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule, $$typeof } = proxy;
const __default__ = proxy.default;


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__default__);

/***/ }),

/***/ "(rsc)/./src/app/page.tsx":
/*!**************************!*\
  !*** ./src/app/page.tsx ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $$typeof: () => (/* binding */ $$typeof),
/* harmony export */   __esModule: () => (/* binding */ __esModule),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/build/webpack/loaders/next-flight-loader/module-proxy */ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-flight-loader/module-proxy.js");

const proxy = (0,next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__.createProxy)(String.raw`C:\Users\fidel\appdimensionespacientes\src\app\page.tsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule, $$typeof } = proxy;
const __default__ = proxy.default;


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__default__);

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/@react-aria","vendor-chunks/@nextui-org","vendor-chunks/framer-motion","vendor-chunks/@swc","vendor-chunks/next"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fpage&page=%2Fpage&appPaths=%2Fpage&pagePath=private-next-app-dir%2Fpage.tsx&appDir=C%3A%5CUsers%5Cfidel%5Cappdimensionespacientes%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5Cfidel%5Cappdimensionespacientes&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();