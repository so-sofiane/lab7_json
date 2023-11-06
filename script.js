document.addEventListener('DOMContentLoaded', () => {
    // URL du fichier JSON sur GitHub
    const jsonUrl = 'https://so-sofiane.github.io/lab7_json/auto.json';
    
    
    
    const productsContainer = document.getElementById('products-container');
    
    // Fonction pour afficher un produit
    const displayProduct = (voit) => {
    const productDiv = document.createElement('div');
    productDiv.innerHTML = `
    <h3>${voit.brand}</h3>
    <p>${voit.model}</p>
    <p>Price: $${voit.year}</p>
    
    `;
    productsContainer.appendChild(productDiv);
    };

    fetch(jsonUrl)
    .then(response => response.json())
    .then(auto => {
    auto.forEach(displayProduct);
    })
    .catch(error => console.error('Error fetching products:', error));
    });

