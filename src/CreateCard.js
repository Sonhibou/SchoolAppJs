    let i = 1;
    import { tab } from "./app.js";
export const createCard = (apprenant)=>{

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
   
    const idCard = "idCard-" + i;
    const idModifier = "linkmodifier-" + i; 
    const idSupprimer = "linkSupprimer" + i;
    const nomSaisi = nom.value
    secondCard.insertAdjacentHTML("beforeend", `
    <div class="card" id=${idCard} style="width: 30rem;">
   <div></div>
  <div class="card-body ">
    <h5 class="card-title">${apprenant.prenom} ${apprenant.nom}</h5>
    <p class="card-text">${apprenant.bio}</p>
      <i class="bi bi-pencil ms-4" style="cursor:pointer;" id=${idModifier}></i>
      <i class="bi bi-trash ms-4" style="cursor:pointer;" id="${idSupprimer}"></i>
  </div>
</div>`)

  const cardId = document.getElementById(idCard)
  const linkSupprimer = document.getElementById(idSupprimer)
  const linkModifier = document.getElementById(idModifier)
  linkModifier.addEventListener("click", ()=>{
    btnAdd.style.visibility="hidden";
    btnModifier.style.visibility="visible"
    btnAnnuler.style.visibility="visible";
    nom.value = apprenant.nom;
    prenom.value = apprenant.prenom;
    niveau.value = apprenant.niveau;
    texterea.value = apprenant.bio;
  })
  
  linkSupprimer.addEventListener("click", (e)=>{
    cardId.parentNode.removeChild(cardId);
    var index = tab.indexOf(apprenant)

    tab.splice(index, 1);
    console.log(tab)
   
  })
  
  btnAnnuler.addEventListener("click", (e)=>{
    btnAdd.style.visibility="visible";
    btnModifier.style.visibility="hidden"
    btnAnnuler.style.visibility="hidden";
    form.reset();
  })
  i = i+1;
}
