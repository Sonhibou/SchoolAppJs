/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/CreateCard.js":
/*!***************************!*\
  !*** ./src/CreateCard.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createCard\": () => (/* binding */ createCard)\n/* harmony export */ });\n/* harmony import */ var _app_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.js */ \"./src/app.js\");\n    let i = 1;\n    \nconst createCard = (apprenant)=>{\n\n    const form = document.getElementById(\"idForm\");\n    const nom = document.getElementById(\"inputNom\");\n    const prenom = document.getElementById(\"inputPrenom\");\n    const niveau = document.getElementById(\"selectNiveau\");\n    const texterea = document.getElementById(\"inputTexterea\");\n    const btnAdd = document.getElementById(\"ajouter\");\n    const btnModifier = document.getElementById(\"modifier\");\n    const btnAnnuler = document.getElementById(\"annuler\");\n    const secondCard = document.getElementById(\"form2\")\n    const btnSauvegarder = document.getElementById(\"save\")\n   \n    const idCard = \"idCard-\" + i;\n    const idModifier = \"linkmodifier-\" + i; \n    const idSupprimer = \"linkSupprimer\" + i;\n    const nomSaisi = nom.value;\n    secondCard.insertAdjacentHTML(\"beforeend\", `\n    <div class=\"card\" id=${idCard} style=\"width: 30rem;\">\n   <div></div>\n  <div class=\"card-body \">\n    <h5 class=\"card-title\">${apprenant.prenom} ${apprenant.nom}</h5>\n    <p class=\"card-text\">${apprenant.bio}</p>\n      <i class=\"bi bi-pencil ms-4\" style=\"cursor:pointer;\" id=${idModifier}></i>\n      <i class=\"bi bi-trash ms-4\" style=\"cursor:pointer;\" id=\"${idSupprimer}\"></i>\n  </div>\n</div>`)\n\n  const cardId = document.getElementById(idCard)\n  const linkSupprimer = document.getElementById(idSupprimer)\n  const linkModifier = document.getElementById(idModifier)\n  linkModifier.addEventListener(\"click\", ()=>{\n    btnAdd.style.visibility=\"hidden\";\n    btnModifier.style.visibility=\"visible\"\n    btnAnnuler.style.visibility=\"visible\";\n    nom.value = apprenant.nom;\n    prenom.value = apprenant.prenom;\n    niveau.value = apprenant.niveau;\n    texterea.value = apprenant.bio;\n    _app_js__WEBPACK_IMPORTED_MODULE_0__.tab.splice(_app_js__WEBPACK_IMPORTED_MODULE_0__.tab.indexOf(apprenant), 1)\n    btnAdd;\n    \n  })\n  \n  linkSupprimer.addEventListener(\"click\", (e)=>{\n    cardId.parentNode.removeChild(cardId);\n    var index = _app_js__WEBPACK_IMPORTED_MODULE_0__.tab.indexOf(apprenant)\n    _app_js__WEBPACK_IMPORTED_MODULE_0__.tab.splice(index, 1);\n    console.log(_app_js__WEBPACK_IMPORTED_MODULE_0__.tab)\n  })\n\n  btnAnnuler.addEventListener(\"click\", (e)=>{\n    btnAdd.style.visibility=\"visible\";\n    btnModifier.style.visibility=\"hidden\";\n    btnAnnuler.style.visibility=\"hidden\";\n    form.reset(); \n  })\n  i = i+1;\n}\n\n\n//# sourceURL=webpack://SchoolAppJs/./src/CreateCard.js?");

/***/ }),

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"tab\": () => (/* binding */ tab),\n/* harmony export */   \"btnAdd\": () => (/* binding */ btnAdd)\n/* harmony export */ });\n/* harmony import */ var _CreateCard_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CreateCard.js */ \"./src/CreateCard.js\");\n/* harmony import */ var _config_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./config.js */ \"./src/config.js\");\n/* import { applyRouting } from \"./rooting.js\"; */\n\n/* import { addCard } from \"./ajoutCard.js\"; */\n\n\n\n\nconst form = document.getElementById(\"idForm\");\nconst nom = document.getElementById(\"inputNom\");\nconst prenom = document.getElementById(\"inputPrenom\");\nconst niveau = document.getElementById(\"selectNiveau\");\nconst texterea = document.getElementById(\"inputTexterea\");\nconst btnAdd = document.getElementById(\"ajouter\");\nconst btnModifier = document.getElementById(\"modifier\");\nconst btnAnnuler = document.getElementById(\"annuler\");\nconst secondCard = document.getElementById(\"form2\")\nconst card2 = document.getElementById(\"card2\")\nconst btnSauvegarder = document.getElementById(\"save\")\nconst findAll = document.getElementById(\"list\")\n\nvar tab = [];\n\n\nbtnAdd.addEventListener(\"click\", (e)=>{\n    e.preventDefault();\n    const apprenant = {\n      nom: nom.value,\n      prenom: prenom.value,\n      niveau: niveau.value,\n      bio : texterea.value,\n    }\n    \n   if(nom.value == '' || prenom.value == '' || niveau.value == ''  || texterea.value == ''){\n       alert(\"Aucun champ ne doit pas etre vide\")\n   }else{\n  \n    (0,_CreateCard_js__WEBPACK_IMPORTED_MODULE_0__.createCard)(apprenant)\n\n    tab.push(apprenant)\n    console.log(tab)\n    form.reset();\n}\n}) \n\nbtnSauvegarder.addEventListener(\"click\", (e)=>{\n  if(tab.length == 0){\n    alert(\"Aucune donnée à insérer\")\n  }else{\n  if(confirm(\"Voulez-vous sauvegarder les données des apprenants\") === true){\n  e.preventDefault();\n  fetch(_config_js__WEBPACK_IMPORTED_MODULE_1__.API_URL, {\n    method: \"POST\",\n    headers: {\n      apikey: _config_js__WEBPACK_IMPORTED_MODULE_1__.API_KEY,\n      \"Content-Type\": \"application/json\",\n      Prefer: \"return=representation\",\n    },\n    body: JSON.stringify(tab),\n  })\n  tab = [];\n  alert(\"Apprenant(e)(s) enrégistré(s)(es)\")\n  }\n  }\n})\ndocument.addEventListener(\"DOMContentLoaded\", ()=>{\n  nom.value=\"\"\n  prenom.value=\"\"\n  niveau.value=\"Niveau\"\n  texterea.value=\"\"\n  btnModifier.style.visibility=\"hidden\";\n  btnAnnuler.style.visibility=\"hidden\";\n\n  \n})\n\n// VERIFICATION DES MOTS SAISIS\ntexterea.addEventListener(\"input\", (event) => {\n  const longueurMax = 130\n  const contenuSaisi = texterea.value\n  const longueurSaisi = contenuSaisi.length\n  const reste = longueurMax - longueurSaisi\n\n  //actualiser le dom pour afficher le nombre\n  const paragraphCompteur = document.getElementById(\"limite-text\")\n  const compteurText = document.getElementById(\"text-progress\")\n  const restantText = document.getElementById(\"text-restant\")\n  const btnSuggestion = document.getElementById(\"btn-suggestion\")\n  compteurText.textContent = longueurSaisi\n  restantText.textContent = \" Il vous reste \" + reste\n\n  //changer couleur\n\n  if (reste < 0) {\n    paragraphCompteur.style.color = \"#ce0033\"\n   /*  btnSuggestion.disabled = true */\n  } else if (reste <= 16) {\n    paragraphCompteur.style.color = \"#ce0033\"\n    /* btnSuggestion.disabled = false */\n  } else {\n    paragraphCompteur.style.color = \"#00000\"\n   /*  btnSuggestion.disabled = false */\n  }\n})\n\n/* findAll.addEventListener(\"click\", ()=>{\n  window.addEventListener(\"DOMContentLoaded\", (event) => {\n    //RECUPERATION DES DONNEES VIA API\n    fetch(API_URL, {\n    \n      headers: {\n        apikey: API_KEY,\n      },\n    })\n      .then((response) => response.json())\n      .then((apprenants) => {\n        apprenants.forEach((apprenant) => {\n          createCard(apprenant);\n        })\n      })\n  })\n})\n */\n\n//# sourceURL=webpack://SchoolAppJs/./src/app.js?");

/***/ }),

/***/ "./src/config.js":
/*!***********************!*\
  !*** ./src/config.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"API_KEY\": () => (/* binding */ API_KEY),\n/* harmony export */   \"API_URL\": () => (/* binding */ API_URL)\n/* harmony export */ });\nconst API_KEY = \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTY0MDI2MzU5NCwiZXhwIjoxOTU1ODM5NTk0fQ.cgomN8NIp1401ijodrI_EKG4p5q1YxcZ2U9VVBJ0uzA\"\n\nconst API_URL = \"https://ltamlrsximtociwbiszo.supabase.co/rest/v1/apprenant\"\n\n\n//# sourceURL=webpack://SchoolAppJs/./src/config.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/app.js");
/******/ 	
/******/ })()
;