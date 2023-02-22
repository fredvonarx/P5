/*const creerFiches = function(){
    for (let i = 0; i < produits.length; i++){
        const produit = produits[i];
        const sectionFichesProduits = document.querySelector('.items');
        const lienFicheProduit = document.createElement('a');
        lienFicheProduit.src = '#';
        const ficheProduit = document.createElement('article');
        ficheProduit.innerText = produit._id;
        const imageProduit = document.createElement('img');
        imageProduit.innerText = produit.imageUrl;
        const nomProduit = document.createElement('h3');
        nomProduit.innerText = produit.name;
        const descriptionProduit = document.createElement('p');
        descriptionProduit.innerText = produit.description;
    }
}*/

const recupererDonneesServeur = async function(){
    const reponse = await fetch('http://localhost:3000/api/products/');
    const produits = await reponse.json();
    console.log(produits);
    console.log(produits.length);
    for (let i = 0; i < produits.length; i++){
        const produit = produits[i];
        const sectionFichesProduits = document.querySelector('.items');
        const lienFicheProduit = document.createElement('a');
        //lienFicheProduit.src = '#';
        lienFicheProduit.href = `http://127.0.0.1:5500/front/html/product.html?${produit._id}`
        const ficheProduit = document.createElement('article');
        //ficheProduit.innerText = produit._id;
        const imageProduit = document.createElement('img');
        imageProduit.src = produit.imageUrl;
        imageProduit.alt = produit.altTxt;
        const nomProduit = document.createElement('h3');
        nomProduit.innerText = produit.name;
        const descriptionProduit = document.createElement('p');
        descriptionProduit.innerText = produit.description;
        console.log(nomProduit);
        sectionFichesProduits.appendChild(lienFicheProduit);
        lienFicheProduit.appendChild(ficheProduit);
        ficheProduit.appendChild(imageProduit);
        ficheProduit.appendChild(nomProduit);
        ficheProduit.appendChild(descriptionProduit);
        console.log(ficheProduit);
        console.log(lienFicheProduit);
    }
   }

recupererDonneesServeur()
