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

eval("const API_KEY = \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTY0MDI2MzU5NCwiZXhwIjoxOTU1ODM5NTk0fQ.cgomN8NIp1401ijodrI_EKG4p5q1YxcZ2U9VVBJ0uzA\"\nconst API_URL = \"https://ltamlrsximtociwbiszo.supabase.co/rest/v1/apprenant\"\n\n/* const local = JSON.parse(localStorage.getItem(\"apprenant\")); */\n\nconst form = document.getElementById(\"idForm\");\nconst nom = document.getElementById(\"inputNom\");\nconst prenom = document.getElementById(\"inputPrenom\");\nconst niveau = document.getElementById(\"selectNiveau\");\nconst texterea = document.getElementById(\"inputTexterea\");\nconst btnAdd = document.getElementById(\"ajouter\");\nconst secondCard = document.getElementById(\"form2\")\nconst btnSauvegarder = document.getElementById(\"save\")\nvar tab = [];\n\nconst nomSaisi = nom.value;\nconst prenomSaisi = prenom.value;\nconst niveauSaisi = niveau.value;\nconst textereaSaisi = texterea.value;\n\n\n// Fonction create card \nconst createCard = (apprenant)=>{\n\n    secondCard.insertAdjacentHTML(\"beforeend\", `\n    <div class=\"card\" style=\"width: 30rem;\">\n   \n  <div class=\"card-body \">\n    <h5 class=\"card-title\">${prenom.value} ${nom.value}</h5>\n    <p class=\"card-text\">${texterea.value}</p>\n      <i class=\"bi bi-pencil ms-4\" style=\"cursor:pointer;\" id=\"linkModifier\"></i>\n      <i class=\"bi bi-trash ms-4\" style=\"cursor:pointer;\" id=\"linkSupprimer\"></i>\n  </div>\n</div>`)\n\n\n}\n\n\n\nbtnAdd.addEventListener(\"click\", (e)=>{\n    e.preventDefault();\n    const apprenant = {\n      nom: nom.value,\n      prenom: prenom.value,\n      niveau: niveau.value,\n      bio : texterea.value\n    }\n/*    if(nomSaisi == \"\" || prenomSaisi == \"\" || niveauSaisi === \"\" || textereaSaisi === \"\"){\n       alert(\"Aucun champ ne doit pas etre vide\")\n   }else{ */\n \n   /*   createCard(localStorage.setItem(\"apprenant\", JSON.stringify(apprenant)));  */\n  \n    createCard(apprenant)\n\n    tab.push(apprenant)\n    console.log(tab)\n    const linkModifier = document.getElementById(\"linkModifier\")\n    const linkSupprimer = document.getElementById(\"linkSupprimer\")\n    linkModifier.addEventListener(\"click\", (e)=>{\n    e.preventDefault();\n    console.log(nom.value)\n\n  \n})\n  form.reset();\n})\nbtnSauvegarder.addEventListener(\"click\", (e)=>{\n  if(confirm(\"Voulez-vous sauvegarder les données des apprenants\") === true){\n   \n  e.preventDefault();\n  fetch(API_URL, {\n    method: \"POST\",\n    headers: {\n      apikey: API_KEY,\n      \"Content-Type\": \"application/json\",\n      Prefer: \"return=representation\",\n    },\n    body: JSON.stringify(tab),\n  })\n  tab = []\n  alert(\"Apprenant(e)(s) enrégistré(s)(es)\")\n  }\n})\n\n//# sourceURL=webpack://SchoolAppJs/./src/app.js?");

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