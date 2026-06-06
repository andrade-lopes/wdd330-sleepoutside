import { loadHeaderFooter } from "./utils.mjs";

window.addEventListener("load", () => {
    loadHeaderFooter();
});

import CheckoutProcess from './CheckoutProcess.mjs';

const checkout = new CheckoutProcess();

document.querySelector('#checkoutSubmit')
    .addEventListener('click', (e) => {
        e.preventDefault();

        const form = document.forms[0];

        const isValid = form.checkValidity();
        form.reportValidity();

        if (isValid) {
            checkout.checkout();
        }
    });