//récupération de l'url avec l'id du produit sélectionné en page d'accueil
/*let id = "";
let quantite = 0;
let couleur = "";*/

let panier = [];

const urlProduitRecherche = window.location.search;
const urlProduitRechercheSansInterrogation = urlProduitRecherche.substring(1);
const urlRechercheServeur = `http://localhost:3000/api/products/${urlProduitRechercheSansInterrogation}`;
const recupererDonneesServeur = async function(){
    const reponse = await fetch(urlRechercheServeur);
    const produit = await reponse.json();
    let optionCouleur = ``
    for (let i = 0; i < produit.colors.length; i++){
        optionCouleur = document.querySelector('#colors');
        optionCouleur.innerHTML += 
            `<option value="${produit.colors[i]}">${produit.colors[i]}</option>`
    };
    const imageProduit = document.querySelector('.item__img');
    imageProduit.innerHTML = `<img src="${produit.imageUrl}" alt="${produit.altTxt}">`;
    const nomProduit = document.querySelector('#title');
    nomProduit.innerHTML = produit.name;
    const prixProduit = document.querySelector('#price');
    prixProduit.innerHTML = `${produit.price} `;
    const descriptionProduit = document.querySelector('#description');
    descriptionProduit.innerHTML = produit.description;
    };

    recupererDonneesServeur;

    const ajoutDonneesPanier = async function() {
        try {
            localStorage.setItem("id", id);
            localStorage.setItem("quantite", quantite);
            localStorage.setItem("couleur", couleur);
        }
        catch(e) {
    
        }
    }

const recupererDonneesFormulaire = async function() {
    let id = document.getElementById("title").innerHTML;
    let quantite = document.getElementById("quantity").value;
    let couleur = document.getElementById("colors").value;
    console.log(id);
    console.log(quantite);
    console.log(couleur);
    try {
        localStorage.setItem("panier", id);
        localStorage.setItem("panier.quantite", quantite);
        localStorage.setItem("panier.couleur", couleur);
    }
    catch(e) {

    }
}

recupererDonneesServeur();

//const addToCart.addEventListener("click", recupererDonneesServeur().then(recupererDonneesFormulaire);)
//setTimeout(recupererDonneesFormulaire, 10000);
//const ajoutDonneesFormulaire = document.querySelector('#addToCart');
//ajoutDonneesFormulaire.addEventListener('click', console.log('hello'));

//document.getElementById("addToCart").addEventListener("click", recupererDonneesFormulaire);

/*const ajoutDonneesPanier = async function() {
    try {
        localStorage.setItem("id", id);
        localStorage.setItem("quantite", quantite);
        localStorage.setItem("couleur", couleur);
    }
    catch(e) {

    }
}*/

document.getElementById("addToCart").addEventListener("click", recupererDonneesFormulaire);
