
const form = document.getElementById("idForm");
const nom = document.getElementById("inputNom");
const prenom = document.getElementById("inputPrenom");
const niveau = document.getElementById("selectNiveau");
const texterea = document.getElementById("inputTexterea");
const btnAdd = document.getElementById("ajouter");
const secondCard = document.getElementById("form2")


const nomSaisi = nom.value;
const prenomSaisi = prenom.value;
const niveauSaisi = niveau.value;
const textereaSaisi = texterea.value;

 
// Fonction create card 
const createCard = (apprenant)=>{
    secondCard.insertAdjacentHTML("beforeend", `
    <div class="card" style="width: 30rem;">
   
  <div class="card-body ">
    <h5 class="card-title">${prenom.value}  ${nom.value}</h5>
    <p class="card-text">${texterea.value}</p>
      <a href="#" style="cursor:pointer;"><i class="bi bi-pencil ms-4"></i></a>
      <i class="bi bi-trash ms-4"  style="cursor:pointer";></i>
  </div>
</div>`)
}

btnAdd.addEventListener("click", (e)=>{
    e.preventDefault();
/*    if(nomSaisi == "" || prenomSaisi == "" || niveauSaisi === "" || textereaSaisi === ""){
       alert("Aucun champ ne doit pas etre vide")
   }else{ */
    const newcard = {
      nom: nomSaisi,
      prenom: prenomSaisi,
      niveau: niveauSaisi,
      bio : textereaSaisi
    }
    createCard(newcard);
   
   
  form.reset();
})
