import { API_KEY } from "./config.js";
import { API_URL } from "./config.js";

const list = document.getElementById('liste');
window.addEventListener("DOMContentLoaded", (event) => {
  event.preventDefault();
  //RECUPERATION DES DONNEES VIA API
  fetch(API_URL, {
    headers: {
      apikey: API_KEY,
    },
  })
    .then((response) => response.json())
    .then((apprenants) => {
      apprenants.forEach((apprenant) => {
        const details = "btn_detail-" + apprenant.id;
        const idListCard = "id-" + apprenant.id;
       liste.insertAdjacentHTML("beforeend", `
      <div class="card card-idea m-2 d-flex flex-row bd-highlight" id="${idListCard}" style="width: 30rem;">
        <div></div>
      <div class="card-body">
        <h5 class="card-title">${apprenant.prenom} ${apprenant.nom}</h5>
        <p class="card-text">${apprenant.bio}</p>
        <p style="color: #CE0033">${apprenant.niveau}</p>
        <button type="button" class="btn btn-outline-secondary" data-toggle="modal" data-target="#exampleModal" id="${details}" style="margin-left: 40%">Details</button>
      </div>
      </div>`) 
      
      const btn_detail = document.getElementById(details);
      btn_detail.addEventListener("click", (e)=>{
        e.preventDefault();
        liste.insertAdjacentHTML("beforeend", `
        <div class="modal" tabindex="-1" role="dialog">
      <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">Modal title</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <p>Modal body text goes here.</p>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-primary">Save changes</button>
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>`)
      })
      })
    }) 
})

