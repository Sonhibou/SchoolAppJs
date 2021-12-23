const form = document.getElementById("idForm");
const nom = document.getElementById("inputNom");
const prenom = document.getElementById("inputPrenom");
const niveau = document.getElementById("selectNiveau");
const texterea = document.getElementById("inputTexterea");
const btnAdd = document.getElementById("ajouter");

btnAdd.addEventListener("click", (e)=>{
    e.preventDefault();
   let nomSaisi = nom.value;
   let prenomSaisi = prenom.value;
   let niveauSaisi = niveau.value;
   let textereaSaisi = texterea.value;
   if(nomSaisi === "" || prenomSaisi === "" || niveauSaisi === "" || textereaSaisi === ""){
       alert("Aucun champ ne doit pas etre vide")
   }
})