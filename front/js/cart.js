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

function enregistrerPanier(panier) {
    localStorage.setItem("panier", JSON.stringify(panier));
};

function recupererIdArticle (i) {
    let idEtCouleurArticle = JSON.stringify(Object.keys(panier[i]));
    let indexEsperluette = idEtCouleurArticle.indexOf("&");
    let idArticle = idEtCouleurArticle.substring(2, indexEsperluette);
    return idArticle;
};

function recupererCouleurArticle (i) {
    let panier = lirePanier();
    let idEtCouleurArticle = JSON.stringify(Object.keys(panier[i]));
    indexEsperluette = idEtCouleurArticle.indexOf("&");
    indexCrochetFermant = idEtCouleurArticle.indexOf("]");
    couleurArticle = idEtCouleurArticle.substring((indexEsperluette + 1), (indexCrochetFermant - 1));
    return couleurArticle;
};

function recupererQuantiteArticle (i) {
    let panier = lirePanier();
    let quantiteArticle = parseInt(Object.values(panier[i]));
    return quantiteArticle;
};


let sectionArticles = "";

let panier = [];

panier = lirePanier();

const afficherPagePanier = async function(){
    let quantiteTotale = 0;
    let prixTotal = 0;
for (i = 0; i < panier.length; i++) {
    idArticle = recupererIdArticle(i);
    couleurArticle = recupererCouleurArticle(i);
    quantiteArticle = recupererQuantiteArticle(i);
    console.log(idArticle);
    reponse = await fetch(`http://localhost:3000/api/products/${idArticle}`);
    console.log(reponse);
    const produit = await reponse.json();
    console.log(produit);
    sectionArticles = document.querySelector('#cart__items');
    sectionArticles.innerHTML += 
    `<article class="cart__item" data-id="${produit._id}" data-color="${couleurArticle}">
    <div class="cart__item__img">
      <img src="${produit.imageUrl}" alt="Photographie d'un canapé">
    </div>
    <div class="cart__item__content">
      <div class="cart__item__content__description">
        <h2>${produit.name}</h2>
        <p>${couleurArticle}</p>
        <p>${produit.price} €</p>
      </div>
      <div class="cart__item__content__settings">
        <div class="cart__item__content__settings__quantity">
          <p>Qté : </p>
          <input type="number" class="itemQuantity" name="itemQuantity" min="1" max="100" value="${quantiteArticle}">
        </div>
        <div class="cart__item__content__settings__delete">
          <p class="deleteItem">Supprimer</p>
        </div>
      </div>
    </div>
  </article>`
  quantiteTotale += quantiteArticle;
  console.log(quantiteTotale);
  prixTotal += (quantiteArticle * produit.price);
  console.log(prixTotal);
  sectionQuantiteTotale = document.querySelector('#totalQuantity');
  sectionQuantiteTotale.innerHTML = quantiteTotale;
  sectionPrixTotal = document.querySelector('#totalPrice');
  sectionPrixTotal.innerHTML = prixTotal;
};
};

afficherPagePanier();


/*let idEtCouleurArticle = JSON.stringify(Object.keys(panier[1]));
let quantiteArticle = parseInt(Object.values(panier[1]));

let indexEsperluette = idEtCouleurArticle.indexOf("&");
let indexCrochetFermant = idEtCouleurArticle.indexOf("]")

let idArticle = idEtCouleurArticle.substring(2, indexEsperluette);
let couleurArticle = idEtCouleurArticle.substring((indexEsperluette + 1), (indexCrochetFermant - 1));

console.log(idEtCouleurArticle);
console.log(quantiteArticle);
console.log(indexEsperluette);
console.log(indexCrochetFermant);
console.log(idArticle);
console.log(couleurArticle);

x = lirePanier();

let y = panier[1];

let z = recupererIdArticle(1);

let a = recupererCouleurArticle(1);

let b = recupererQuantiteArticle(1); */