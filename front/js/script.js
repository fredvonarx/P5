const recupererDonneesServeur = async function(){
    const reponse = await fetch('http://localhost:3000/api/products/');
    const produits = await reponse.json();
    let sectionFichesProduits = ``
    for (let i = 0; i < produits.length; i++){
        const produit = produits[i];
        sectionFichesProduits = document.querySelector('.items');
        sectionFichesProduits.innerHTML += 
        `<a href="http://127.0.0.1:5500/front/html/product.html?${produit._id}">
            <article>
                <img src="${produit.imageUrl}" alt="${produit.altTxt}">
                <h3>${produit.name}</h3>
                <p>${produit.description}</p>
            </article>
        </a>`
    }
   }

recupererDonneesServeur();
