/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/***/ (() => {

eval("const form = document.getElementById(\"idForm\");\nconst nom = document.getElementById(\"inputNom\");\nconst prenom = document.getElementById(\"inputPrenom\");\nconst niveau = document.getElementById(\"selectNiveau\");\nconst texterea = document.getElementById(\"inputTexterea\");\nconst btnAdd = document.getElementById(\"ajouter\");\n\nbtnAdd.addEventListener(\"click\", (e)=>{\n    e.preventDefault();\n   let nomSaisi = nom.value;\n   let prenomSaisi = prenom.value;\n   let niveauSaisi = niveau.value;\n   let textereaSaisi = texterea.value;\n   if(nomSaisi === \"\" || prenomSaisi === \"\" || niveauSaisi === \"\" || textereaSaisi === \"\"){\n       alert(\"Aucun champ ne doit pas etre vide\")\n   }\n})\n\n//# sourceURL=webpack://SchoolAppJs/./src/app.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/app.js"]();
/******/ 	
/******/ })()
;