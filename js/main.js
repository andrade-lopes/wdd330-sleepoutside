const productContainer = document.querySelector(".products");

async function loadProducts() {
    try {
        const response = await fetch("/data/products.json");
        const products = await response.json();

        displayProducts(products);
    } catch (error) {
        console.error("Error loading products:", error);
    }
}

function displayProducts(products) {
    products.forEach(product => {
        const card = document.createElement("div");
        card.classList.add("product-card");

        card.innerHTML = `
      <img src="${product.image}" alt="${product.name}">
      <h3>${product.name}</h3>
      <p>$${product.price}</p>
    `;

        productContainer.appendChild(card);
    });
}

loadProducts();