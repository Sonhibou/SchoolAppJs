const API_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTY0MDI2MzU5NCwiZXhwIjoxOTU1ODM5NTk0fQ.cgomN8NIp1401ijodrI_EKG4p5q1YxcZ2U9VVBJ0uzA"
const API_URL = "https://ltamlrsximtociwbiszo.supabase.co/rest/v1/apprenant"

/* const local = JSON.parse(localStorage.getItem("apprenant")); */

const form = document.getElementById("idForm");
const nom = document.getElementById("inputNom");
const prenom = document.getElementById("inputPrenom");
const niveau = document.getElementById("selectNiveau");
const texterea = document.getElementById("inputTexterea");
const btnAdd = document.getElementById("ajouter");
const secondCard = document.getElementById("form2")
const btnSauvegarder = document.getElementById("save")
var tab = [];

const nomSaisi = nom.value;
const prenomSaisi = prenom.value;
const niveauSaisi = niveau.value;
const textereaSaisi = texterea.value;


// Fonction create card 
const createCard = (apprenant)=>{

    secondCard.insertAdjacentHTML("beforeend", `
    <div class="card" style="width: 30rem;">
   
  <div class="card-body ">
    <h5 class="card-title">${prenom.value} ${nom.value}</h5>
    <p class="card-text">${texterea.value}</p>
      <i class="bi bi-pencil ms-4" style="cursor:pointer;" id="linkModifier"></i>
      <i class="bi bi-trash ms-4" style="cursor:pointer;" id="linkSupprimer"></i>
  </div>
</div>`)


}



btnAdd.addEventListener("click", (e)=>{
    e.preventDefault();
    const apprenant = {
      nom: nom.value,
      prenom: prenom.value,
      niveau: niveau.value,
      bio : texterea.value
    }
/*    if(nomSaisi == "" || prenomSaisi == "" || niveauSaisi === "" || textereaSaisi === ""){
       alert("Aucun champ ne doit pas etre vide")
   }else{ */
 
   /*   createCard(localStorage.setItem("apprenant", JSON.stringify(apprenant)));  */
  
    createCard(apprenant)

    tab.push(apprenant)
    console.log(tab)
    const linkModifier = document.getElementById("linkModifier")
    const linkSupprimer = document.getElementById("linkSupprimer")
    linkModifier.addEventListener("click", (e)=>{
    e.preventDefault();
    console.log(nom.value)

  
})
  form.reset();
})
btnSauvegarder.addEventListener("click", (e)=>{
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
  tab = []
  alert("Apprenant(e)(s) enrégistré(s)(es)")
  }
})