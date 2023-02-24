//récupération de l'url avec l'id du produit sélectionné en page d'accueil
const urlProduitRecherche = window.location.search;
const urlProduitRechercheSansInterrogation = urlProduitRecherche.substring(1);
const urlRechercheServeur = `http://localhost:3000/api/products/${urlProduitRechercheSansInterrogation}`;
const recupererDonneesServeur = async function(){
    const reponse = await fetch(urlRechercheServeur);
    const produit = await reponse.json();
    let urlOptionCouleur = ``
    for (let i = 0; i < produit.colors.length; i++){
        urlOptionCouleur = document.querySelector('#colors');
        urlOptionCouleur.innerHTML += 
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

    recupererDonneesServeur();