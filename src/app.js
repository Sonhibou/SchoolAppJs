import { createCard } from "./CreateCard.js";
/* import { addCard } from "./ajoutCard.js"; */

const API_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTY0MDI2MzU5NCwiZXhwIjoxOTU1ODM5NTk0fQ.cgomN8NIp1401ijodrI_EKG4p5q1YxcZ2U9VVBJ0uzA"
const API_URL = "https://ltamlrsximtociwbiszo.supabase.co/rest/v1/apprenant"

/* const local = JSON.parse(localStorage.getItem("apprenant")); */

const form = document.getElementById("idForm");
const nom = document.getElementById("inputNom");
const prenom = document.getElementById("inputPrenom");
const niveau = document.getElementById("selectNiveau");
const texterea = document.getElementById("inputTexterea");
const btnAdd = document.getElementById("ajouter");
const btnModifier = document.getElementById("modifier");
const btnAnnuler = document.getElementById("annuler");
const secondCard = document.getElementById("form2")
const btnSauvegarder = document.getElementById("save")

var tab = [];
export{tab};


btnAdd.addEventListener("click", (e)=>{
    e.preventDefault();
    const apprenant = {
      nom: nom.value,
      prenom: prenom.value,
      niveau: niveau.value,
      bio : texterea.value,
      
    }
    
   if(nom.value == '' || prenom.value == '' || niveau.value == ''  || texterea.value == ''){
       alert("Aucun champ ne doit pas etre vide")
   }else{
  
    createCard(apprenant)

    tab.push(apprenant)
    console.log(tab)
    form.reset();
}
}) 
export{btnAdd};
btnSauvegarder.addEventListener("click", (e)=>{
  if(tab.length == 0){
    alert("Aucune donnée à insérer")
  }else{
  if(confirm("Voulez-vous sauvegarder les données des apprenants") === true){
  e.preventDefault();
  fetch(API_URL, {
    method: "POST",
    headers: {
      apikey: API_KEY,
      "Content-Type": "application/json",
      Prefer: "return=representation",
    },
    body: JSON.stringify(tab),
  })
  tab = [];
  alert("Apprenant(e)(s) enrégistré(s)(es)")
  }
  }
})
document.addEventListener("DOMContentLoaded", ()=>{
  nom.value=""
  prenom.value=""
  niveau.value="Niveau"
  texterea.value=""
  btnModifier.style.visibility="hidden";
  btnAnnuler.style.visibility="hidden"
})

// VERIFICATION DES MOTS SAISIS
texterea.addEventListener("input", (event) => {
  const longueurMax = 130
  const contenuSaisi = texterea.value
  const longueurSaisi = contenuSaisi.length
  const reste = longueurMax - longueurSaisi

  //actualiser le dom pour afficher le nombre
  const paragraphCompteur = document.getElementById("limite-text")
  const compteurText = document.getElementById("text-progress")
  const restantText = document.getElementById("text-restant")
  const btnSuggestion = document.getElementById("btn-suggestion")
  compteurText.textContent = longueurSaisi
  restantText.textContent = " Il vous reste " + reste

  //changer couleur

  if (reste < 0) {
    paragraphCompteur.style.color = "#ce0033"
   /*  btnSuggestion.disabled = true */
  } else if (reste <= 16) {
    paragraphCompteur.style.color = "#ce0033"
    /* btnSuggestion.disabled = false */
  } else {
    paragraphCompteur.style.color = "#00000"
   /*  btnSuggestion.disabled = false */
  }
})
