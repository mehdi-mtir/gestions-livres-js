"use strict";
let livres = [
  {id : 1, titre : "The slight edge", auteur : "jeff Olsen", prix : 12.50},
  {id : 2, titre : "Power of habits", auteur : "Charles Duhigg", prix : 18.00},
  {id : 3, titre : "Atomic habits", auteur : "James Clear", prix : 20.00}
];

const afficherLivres = ()=>{
    let newHTML = "";
    livres.forEach(
      livre =>{
          newHTML += `<tr>
                <th scope="row">${livre.id}</th>
                <td>${livre.titre}</td>
                <td>${livre.auteur}</td>
                <td>${livre.prix}</td>
                <td><button class='btn btn-primary'>Editer</button></td>
                <td><button class='btn btn-danger' >Supprimer</button><td>
          </tr>`;
      }
    );
    //document.getElementById("idTbody").innerHTML
    document.querySelector("#idTbody").innerHTML = newHTML;
}

const afficherFormulaireAjout = ()=>{
  document.getElementById("ajout").classList.remove("hide");
}

const ajoutLivre = (event)=>{
  event.preventDefault();
  const newBook = {
    id : livres[livres.length - 1].id + 1,
    titre : document.getElementById("titre").value,
    auteur : document.getElementById("auteur").value,
    prix : document.getElementById("prix").value
  }
  console.log(newBook);
  livres.push(newBook);
  console.table(livres)
  afficherLivres();
  document.getElementById("ajout").classList.add("hide");

}


const init = ()=>{
  afficherLivres();
  document.querySelector("#ajout form").addEventListener("submit", ajoutLivre);
  document.getElementById("btnAjout").addEventListener("click", afficherFormulaireAjout);
}

window.addEventListener("load", init); //init : callback
