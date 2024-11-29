/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("_app-pages-browser_src_app_pacientes_P001_lazy_recursive_-_app-pages-browser_src_app_paciente-c05bfa",{

/***/ "(app-pages-browser)/./src/app/pacientes/P001 lazy recursive ^\\.\\/.*$":
/*!****************************************************************!*\
  !*** ./src/app/pacientes/P001/ lazy ^\.\/.*$ namespace object ***!
  \****************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var map = {
	"./RegistroDimensiones": [
		"(app-pages-browser)/./src/app/pacientes/P001/RegistroDimensiones.tsx",
		"_app-pages-browser_src_app_pacientes_P001_RegistroDimensiones_tsx"
	],
	"./RegistroDimensiones.tsx": [
		"(app-pages-browser)/./src/app/pacientes/P001/RegistroDimensiones.tsx",
		"_app-pages-browser_src_app_pacientes_P001_RegistroDimensiones_tsx"
	],
	"./RegistroPensamientos": [
		"(app-pages-browser)/./src/app/pacientes/P001/RegistroPensamientos.tsx",
		"_app-pages-browser_src_app_pacientes_P001_RegistroPensamientos_tsx"
	],
	"./RegistroPensamientos.tsx": [
		"(app-pages-browser)/./src/app/pacientes/P001/RegistroPensamientos.tsx",
		"_app-pages-browser_src_app_pacientes_P001_RegistroPensamientos_tsx"
	],
	"./page": [
		"(app-pages-browser)/./src/app/pacientes/P001/page.tsx"
	],
	"./page.tsx": [
		"(app-pages-browser)/./src/app/pacientes/P001/page.tsx"
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function() { return Object.keys(map); };
webpackAsyncContext.id = "(app-pages-browser)/./src/app/pacientes/P001 lazy recursive ^\\.\\/.*$";
module.exports = webpackAsyncContext;

/***/ })

});