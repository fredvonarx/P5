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

function recupererListeArticlesDansPanier() {
    let listeArticlesDansPanier = [];
    let listeQuantite = [];
    let panier = localStorage.getItem("panier");
    if (panier) {
        panier = JSON.parse(panier);
    }
    else {
        panier = [];
    }
    for (i = 0; i < panier.length; i++) {
        listeArticlesDansPanier[i] = Object.keys(panier[i]);
        listeQuantite[i] = Object.values(panier[i]);
    }
    return listeArticlesDansPanier;
};

/*function verifierSiArticleDejaPresentDansPanier(cle, listeArticlesDansPanier) {
    let articlePresentDansPanier = listeArticlesDansPanier.includes(cle);
    return articlePresentDansPanier;
};*/

function recupererDonneesFormulaire() {
    const urlProduitRecherche = window.location.search;
    const id = urlProduitRecherche.substring(1);
    let quantiteSaisie = document.getElementById("quantity").value;
    let couleur = document.getElementById("colors").value;
    console.log(couleur);
    let cle = "";
    let articlePresentDansPanier = false;
    cle = JSON.parse(`{"${id}&${couleur}" : ${quantiteSaisie}}`);
    panier = lirePanier();
    if (couleur && parseInt(quantiteSaisie) > 0) {
        for (i = 0; i < panier.length; i++)
            if (JSON.stringify(Object.keys(panier[i])) == `["${id}&${couleur}"]` ) {
                articlePresentDansPanier = true;
                if ((parseInt(Object.values(panier[i])) + parseInt(quantiteSaisie)) <= 100) {
                    quantitieAddition = parseInt(quantiteSaisie) + parseInt(Object.values(panier[i]));
                    cle = JSON.parse(`{"${id}&${couleur}" : ${quantitieAddition}}`);
                    panier.splice(i, 1, cle);
                }
            };
        if (articlePresentDansPanier == false) {
            panier.push(cle);
        };
        enregistrerPanier(panier);
    };
};

function enregistrerPanier(panier) {
    localStorage.setItem("panier", JSON.stringify(panier));
};

function lirePanier() {
    let panier = localStorage.getItem("panier");
    if (panier) {
        panier = JSON.parse(panier);
    }
    else {
        panier = [];
    }
    return panier;
};

const urlProduitRecherche = window.location.search;
const urlProduitRechercheSansInterrogation = urlProduitRecherche.substring(1);
const urlRechercheServeur = `http://localhost:3000/api/products/${urlProduitRechercheSansInterrogation}`;

recupererDonneesServeur();

document.getElementById("addToCart").addEventListener("click", recupererDonneesFormulaire);

let y = recupererListeArticlesDansPanier();


