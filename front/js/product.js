//récupération de l'url avec l'id du produit sélectionné en page d'accueil
const urlProduitRecherche = window.location.search;
const urlProduitRechercheSansInterrogation = urlProduitRecherche.substring(1);
console.log(urlProduitRecherche);
console.log(urlProduitRechercheSansInterrogation);
const urlRechercheServeur = `http://localhost:3000/api/products/${urlProduitRechercheSansInterrogation}`;
console.log(urlRechercheServeur);
const recupererDonneesServeur = async function(){
    const reponse = await fetch(urlRechercheServeur);
    const produit = await reponse.json();
    console.log(produit);
    console.log(produit.length);
    const imageProduit = document.querySelector('.item__img');
    const urlImageProduit = document.createElement('img');
    urlImageProduit.src = produit.imageUrl;
    urlImageProduit.alt = produit.altTxt;
    imageProduit.appendChild(urlImageProduit);
    const nomProduit = document.querySelector('#title');
    const urlNomProduit = document.createElement('p'); /* Est ce qu'il faut utiliser un p?*/
    urlNomProduit.innerText = produit.name;
    nomProduit.appendChild(urlNomProduit);
    const prixProduit = document.querySelector('#price');
    const urlPrixProduit = document.createElement('p'); /* Est ce qu'il faut utiliser un p?*/
    urlPrixProduit.innerText = produit.price.toString();
    prixProduit.appendChild(urlPrixProduit);
    const descriptionProduit = document.querySelector('#description');
    const urlDescriptionProduit = document.createElement('p');
    urlDescriptionProduit.innerText = produit.description;
    descriptionProduit.appendChild(urlDescriptionProduit);
    console.log(produit.colors);
    const optionCouleurs = document.querySelector('#colors');
    for (let i = 0; i < produit.colors.length; i++){
        const urlOptionCouleurOption = document.createElement('option');
        const urlOptionCouleurText = document.createElement('p');
        urlOptionCouleurOption.innerText = produit.colors[i];
        console.log(urlOptionCouleurOption);
        optionCouleurs.appendChild(urlOptionCouleurOption);
    }
    };

    recupererDonneesServeur();