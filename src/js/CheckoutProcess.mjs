import ExternalServices from './ExternalServices.mjs';
import { alertMessage, getLocalStorage, setLocalStorage } from './utils.mjs';

export default class CheckoutProcess {
    constructor() {
        this.services = new ExternalServices();
    }

    async checkout() {
        try {
            // 1. Get form
            const form = document.forms[0];

            // 2. Build payload
            const formData = Object.fromEntries(new FormData(form));

            // 3. Add cart data to payload
            const cart = getLocalStorage('so-cart') || [];

            const payload = {
                ...formData,
                items: cart
            };

            // 4. Send to API
            const response = await this.services.checkout(payload);

            // 5. SUCCESS ACTIONS
            localStorage.removeItem('so-cart');
            window.location.href = './success.html';

        } catch (err) {
            console.log('Checkout error:', err);

            const message =
                err?.message?.message ||
                'Something went wrong during checkout. Please try again.';

            alertMessage(message);
        }
    }
}