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
                <td><button class='btn btn-primary' onclick='afficherFormulaireEdit(${livre.id})'>Editer</button></td>
                <td><button class='btn btn-danger' onclick='supprimerLivre(${livre.id})' >Supprimer</button><td>
          </tr>`;
      }
    );
    //document.getElementById("idTbody").innerHTML
    document.querySelector("#idTbody").innerHTML = newHTML;
}

const afficherFormulaireAjout = ()=>{
  document.getElementById("ajout").classList.remove("hide");
}

const afficherFormulaireEdit = (id)=>{
  document.getElementById("edit").classList.remove("hide");
  const livreAEditer = livres.find(
    livre => livre.id == id
  );
  document.getElementById("titreEdit").value = livreAEditer.titre;
  document.getElementById("auteurEdit").value = livreAEditer.auteur;
  document.getElementById("prixEdit").value = livreAEditer.prix;
  document.getElementById("idEdit").value = livreAEditer.id;
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

const editerLivre = (event)=>{
  event.preventDefault();
  const livreEdite = {
    id : document.getElementById("idEdit").value,
    titre : document.getElementById("titreEdit").value,
    auteur : document.getElementById("auteurEdit").value,
    prix : document.getElementById("prixEdit").value,
  }
  console.log(livreEdite);
  livres = livres.map(
    livre => {
      if(livre.id == livreEdite.id)
        return livreEdite
      else
        return livre
    }
  );
  afficherLivres();
  document.getElementById("edit").classList.add("hide");

}

const supprimerLivre = (id)=>{
  if(confirm('Êtes-vous sûre de vouloir supprimer le livre?')){
    livres = livres.filter(
      livre => livre.id != id
    );
    afficherLivres();
  }
}


const init = ()=>{
  afficherLivres();
  document.querySelector("#ajout form").addEventListener("submit", ajoutLivre);
  document.querySelector("#edit form").addEventListener("submit", editerLivre);
  document.getElementById("btnAjout").addEventListener("click", afficherFormulaireAjout);
}

window.addEventListener("load", init); //init : callback
