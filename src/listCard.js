import { API_KEY } from "./config.js";
import { API_URL } from "./config.js";
let i = 1;
window.addEventListener("DOMContentLoaded", (event) => {
  const idCard = "idCard-" + i;
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
       liste.insertAdjacentHTML("beforeend", `
       <div class="card card-idea m-2 d-flex flex-row bd-highlight" id=${idCard} style="width: 30rem;">
        <div></div>
      <div class="card-body">
        <h5 class="card-title">${apprenant.prenom} ${apprenant.nom}</h5>
        <p class="card-text">${apprenant.bio}</p>
        <p style="color: #CE0033">${apprenant.niveau}</p>
        <button type="button" class="btn btn-outline-secondary" style="margin-left: 35%">Details</button>
      </div>
      </div>`) 
      })
    })
    i = i+1;
})