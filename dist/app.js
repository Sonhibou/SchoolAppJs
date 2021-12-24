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

eval("\nconst form = document.getElementById(\"idForm\");\nconst nom = document.getElementById(\"inputNom\");\nconst prenom = document.getElementById(\"inputPrenom\");\nconst niveau = document.getElementById(\"selectNiveau\");\nconst texterea = document.getElementById(\"inputTexterea\");\nconst btnAdd = document.getElementById(\"ajouter\");\nconst secondCard = document.getElementById(\"form2\")\n\n\nconst nomSaisi = nom.value;\nconst prenomSaisi = prenom.value;\nconst niveauSaisi = niveau.value;\nconst textereaSaisi = texterea.value;\n\n \n// Fonction create card \nconst createCard = (apprenant)=>{\n    secondCard.insertAdjacentHTML(\"beforeend\", `\n    <div class=\"card\" style=\"width: 30rem;\">\n   \n  <div class=\"card-body \">\n    <h5 class=\"card-title\">${prenom.value}  ${nom.value}</h5>\n    <p class=\"card-text\">${texterea.value}</p>\n      <a href=\"#\" style=\"cursor:pointer;\"><i class=\"bi bi-pencil ms-4\"></i></a>\n      <i class=\"bi bi-trash ms-4\"  style=\"cursor:pointer\";></i>\n  </div>\n</div>`)\n}\n\nbtnAdd.addEventListener(\"click\", (e)=>{\n    e.preventDefault();\n/*    if(nomSaisi == \"\" || prenomSaisi == \"\" || niveauSaisi === \"\" || textereaSaisi === \"\"){\n       alert(\"Aucun champ ne doit pas etre vide\")\n   }else{ */\n    const newcard = {\n      nom: nomSaisi,\n      prenom: prenomSaisi,\n      niveau: niveauSaisi,\n      bio : textereaSaisi\n    }\n    createCard(newcard);\n   \n   \n  form.reset();\n})\n\n\n//# sourceURL=webpack://SchoolAppJs/./src/app.js?");

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