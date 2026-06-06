import { getLocalStorage, setLocalStorage } from './utils.mjs';

const cartElement = document.querySelector('.product-list');
const checkoutButton = document.querySelector('#checkoutSubmit');

let cart = [];

function renderCartContents() {
  cartElement.innerHTML = '';

  if (!cart || cart.length === 0) {
    cartElement.innerHTML = `<li class="empty">Your cart is empty.</li>`;
    return;
  }

  cart.forEach((item) => {
    const li = document.createElement('li');
    li.classList.add('cart-card', 'divider');

    li.innerHTML = `
      <a href="#" class="cart-card__image">
        <img src="${item.Image || item.image}" alt="${item.Name || item.name}">
      </a>

      <div>
        <h2 class="card__name">${item.Name || item.name}</h2>

        <p class="cart-card__color">${item.Colors ? item.Colors[0].ColorName : ''}</p>

        <p class="cart-card__quantity">qty: ${item.quantity}</p>

        <p class="cart-card__price">$${item.FinalPrice || item.price}</p>

        <p class="cart-card__subtotal">
          Subtotal: $${(item.quantity * (item.FinalPrice || item.price)).toFixed(2)}
        </p>
      </div>
    `;

    cartElement.appendChild(li);
  });
}

function calculateTotal() {
  return cart.reduce((total, item) => {
    return total + item.quantity * (item.FinalPrice || item.price);
  }, 0);
}

function renderFooter() {
  const footer = document.createElement('li');
  footer.classList.add('cart-total');

  footer.innerHTML = `
    <h3>Total: $${calculateTotal().toFixed(2)}</h3>
  `;

  cartElement.appendChild(footer);
}

function loadCart() {
  cart = getLocalStorage('so-cart') || [];
  renderCartContents();

  if (cart.length > 0) {
    renderFooter();
  }
}

// Checkout button handler
function setupCheckout() {
  if (!checkoutButton) return;

  checkoutButton.addEventListener('click', (e) => {
    e.preventDefault();

    const form = document.forms[0];

    if (form) {
      const isValid = form.checkValidity();
      form.reportValidity();

      if (!isValid) return;
    }

    // Redirect to checkout page
    window.location.href = '../checkout/index.html';
  });
}

loadCart();
setupCheckout();