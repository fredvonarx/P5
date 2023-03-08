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

panier = lirePanier();
let sectionArticles = "";

/*for (i = 0; i < panier.length; i++) {
    const article = panier[i];
    sectionArticles = document.querySelector('#cart__items');
    sectionArticles.innerHTML += 
    `<article class="cart__item" data-id="{product-ID}" data-color="{product-color}">
    <div class="cart__item__img">
      <img src="../images/product01.jpg" alt="Photographie d'un canapé">
    </div>
    <div class="cart__item__content">
      <div class="cart__item__content__description">
        <h2>Nom du produit</h2>
        <p>Vert</p>
        <p>42,00 €</p>
      </div>
      <div class="cart__item__content__settings">
        <div class="cart__item__content__settings__quantity">
          <p>Qté : </p>
          <input type="number" class="itemQuantity" name="itemQuantity" min="1" max="100" value="42">
        </div>
        <div class="cart__item__content__settings__delete">
          <p class="deleteItem">Supprimer</p>
        </div>
      </div>
    </div>
  </article>`
};*/

y = JSON.stringify(panier[1]);

console.log(y);