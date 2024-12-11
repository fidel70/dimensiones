/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "_ssr_src_app_cambios_tsx";
exports.ids = ["_ssr_src_app_cambios_tsx"];
exports.modules = {

/***/ "(ssr)/./src/app/cambios.tsx":
/*!*****************************!*\
  !*** ./src/app/cambios.tsx ***!
  \*****************************/
/***/ (() => {

eval("// Primero definimos todas las funciones con useCallback\nconst loadPatients = useCallback({\n    \"useCallback[loadPatients]\": async ()=>{\n        const { data } = await supabase.from('pacientes').select('*').order('codigo');\n        if (data) setPatients(data);\n    }\n}[\"useCallback[loadPatients]\"], []);\nconst loadEmociones = useCallback({\n    \"useCallback[loadEmociones]\": async ()=>{\n        const { data, error } = await supabase.from('emociones_tipo').select('*').order('codigo');\n        if (error) {\n            console.error('Error cargando emociones:', error);\n            return;\n        }\n        if (data) setEmociones(data);\n    }\n}[\"useCallback[loadEmociones]\"], []);\n// ... resto de las funciones ...\n// Luego los useEffect\nuseEffect(()=>{\n    loadPatients();\n    loadEmociones();\n}, [\n    loadPatients,\n    loadEmociones\n]);\nuseEffect(()=>{\n    if (selectedPatient) {\n        loadPensamientos();\n        loadEventos();\n    }\n}, [\n    selectedPatient,\n    selectedDate,\n    loadPensamientos,\n    loadEventos\n]);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcZmlkZWxcXGRpbWVuc2lvbmVzXFxzcmNcXGFwcFxcY2FtYmlvcy50c3giXSwic291cmNlc0NvbnRlbnQiOlsiLy8gUHJpbWVybyBkZWZpbmltb3MgdG9kYXMgbGFzIGZ1bmNpb25lcyBjb24gdXNlQ2FsbGJhY2tcclxuY29uc3QgbG9hZFBhdGllbnRzID0gdXNlQ2FsbGJhY2soYXN5bmMgKCkgPT4ge1xyXG4gIGNvbnN0IHsgZGF0YSB9ID0gYXdhaXQgc3VwYWJhc2VcclxuICAgIC5mcm9tKCdwYWNpZW50ZXMnKVxyXG4gICAgLnNlbGVjdCgnKicpXHJcbiAgICAub3JkZXIoJ2NvZGlnbycpXHJcbiAgaWYgKGRhdGEpIHNldFBhdGllbnRzKGRhdGEpXHJcbn0sIFtdKVxyXG5cclxuY29uc3QgbG9hZEVtb2Npb25lcyA9IHVzZUNhbGxiYWNrKGFzeW5jICgpID0+IHtcclxuICBjb25zdCB7IGRhdGEsIGVycm9yIH0gPSBhd2FpdCBzdXBhYmFzZVxyXG4gICAgLmZyb20oJ2Vtb2Npb25lc190aXBvJylcclxuICAgIC5zZWxlY3QoJyonKVxyXG4gICAgLm9yZGVyKCdjb2RpZ28nKVxyXG4gIFxyXG4gIGlmIChlcnJvcikge1xyXG4gICAgY29uc29sZS5lcnJvcignRXJyb3IgY2FyZ2FuZG8gZW1vY2lvbmVzOicsIGVycm9yKVxyXG4gICAgcmV0dXJuXHJcbiAgfVxyXG4gIFxyXG4gIGlmIChkYXRhKSBzZXRFbW9jaW9uZXMoZGF0YSlcclxufSwgW10pXHJcblxyXG4vLyAuLi4gcmVzdG8gZGUgbGFzIGZ1bmNpb25lcyAuLi5cclxuXHJcbi8vIEx1ZWdvIGxvcyB1c2VFZmZlY3RcclxudXNlRWZmZWN0KCgpID0+IHtcclxuICBsb2FkUGF0aWVudHMoKVxyXG4gIGxvYWRFbW9jaW9uZXMoKVxyXG59LCBbbG9hZFBhdGllbnRzLCBsb2FkRW1vY2lvbmVzXSlcclxuXHJcbnVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgaWYgKHNlbGVjdGVkUGF0aWVudCkge1xyXG4gICAgbG9hZFBlbnNhbWllbnRvcygpXHJcbiAgICBsb2FkRXZlbnRvcygpXHJcbiAgfVxyXG59LCBbc2VsZWN0ZWRQYXRpZW50LCBzZWxlY3RlZERhdGUsIGxvYWRQZW5zYW1pZW50b3MsIGxvYWRFdmVudG9zXSkiXSwibmFtZXMiOlsibG9hZFBhdGllbnRzIiwidXNlQ2FsbGJhY2siLCJkYXRhIiwic3VwYWJhc2UiLCJmcm9tIiwic2VsZWN0Iiwib3JkZXIiLCJzZXRQYXRpZW50cyIsImxvYWRFbW9jaW9uZXMiLCJlcnJvciIsImNvbnNvbGUiLCJzZXRFbW9jaW9uZXMiLCJ1c2VFZmZlY3QiLCJzZWxlY3RlZFBhdGllbnQiLCJsb2FkUGVuc2FtaWVudG9zIiwibG9hZEV2ZW50b3MiLCJzZWxlY3RlZERhdGUiXSwibWFwcGluZ3MiOiJBQUFBLHdEQUF3RDtBQUN4RCxNQUFNQSxlQUFlQztpQ0FBWTtRQUMvQixNQUFNLEVBQUVDLElBQUksRUFBRSxHQUFHLE1BQU1DLFNBQ3BCQyxJQUFJLENBQUMsYUFDTEMsTUFBTSxDQUFDLEtBQ1BDLEtBQUssQ0FBQztRQUNULElBQUlKLE1BQU1LLFlBQVlMO0lBQ3hCO2dDQUFHLEVBQUU7QUFFTCxNQUFNTSxnQkFBZ0JQO2tDQUFZO1FBQ2hDLE1BQU0sRUFBRUMsSUFBSSxFQUFFTyxLQUFLLEVBQUUsR0FBRyxNQUFNTixTQUMzQkMsSUFBSSxDQUFDLGtCQUNMQyxNQUFNLENBQUMsS0FDUEMsS0FBSyxDQUFDO1FBRVQsSUFBSUcsT0FBTztZQUNUQyxRQUFRRCxLQUFLLENBQUMsNkJBQTZCQTtZQUMzQztRQUNGO1FBRUEsSUFBSVAsTUFBTVMsYUFBYVQ7SUFDekI7aUNBQUcsRUFBRTtBQUVMLGlDQUFpQztBQUVqQyxzQkFBc0I7QUFDdEJVLFVBQVU7SUFDUlo7SUFDQVE7QUFDRixHQUFHO0lBQUNSO0lBQWNRO0NBQWM7QUFFaENJLFVBQVU7SUFDUixJQUFJQyxpQkFBaUI7UUFDbkJDO1FBQ0FDO0lBQ0Y7QUFDRixHQUFHO0lBQUNGO0lBQWlCRztJQUFjRjtJQUFrQkM7Q0FBWSIsImZpbGUiOiIoc3NyKS8uL3NyYy9hcHAvY2FtYmlvcy50c3giLCJzb3VyY2VSb290IjoiIiwiaWdub3JlTGlzdCI6W119\n//# sourceURL=webpack-internal:///(ssr)/./src/app/cambios.tsx\n");

/***/ })

};
;