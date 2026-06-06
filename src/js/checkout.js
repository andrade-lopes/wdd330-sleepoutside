import CheckoutProcess from './CheckoutProcess.mjs';

const checkoutProcess = new CheckoutProcess();

// button click handler
document.querySelector('#checkoutSubmit')
    .addEventListener('click', (e) => {
        e.preventDefault();

        const form = document.forms[0];

        // HTML validation
        const isValid = form.checkValidity();
        form.reportValidity();

        if (!isValid) return;

        checkoutProcess.checkout();
    });