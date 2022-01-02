import { createCard } from "./CreateCard";

const form = document.getElementById("idForm");
const nom = document.getElementById("inputNom");
const prenom = document.getElementById("inputPrenom");
const niveau = document.getElementById("selectNiveau");
const texterea = document.getElementById("inputTexterea");
const btnAdd = document.getElementById("ajouter");
const tab = [];

export const addCard = ()=>{
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
    const linkSupprimer = document.getElementById("linkSupprimer")
    const linkModifier = document.getElementById("linkModifier")
    linkModifier.addEventListener("click", ()=>{
    console.log(nom.value)
    })
    linkSupprimer.addEventListener("click", (e)=>{
      secondCard.innerHTML = '';
    })
    form.reset();
}
})
}