import ExternalServices from './ExternalServices.mjs';
import { alertMessage } from './utils.mjs';

export default class CheckoutProcess {
    constructor() {
        this.services = new ExternalServices();
    }

    async checkout() {
        try {
            const form = document.forms[0];

            // build payload from form
            const formData = Object.fromEntries(new FormData(form));

            const result = await this.services.checkout(formData);

            // SUCCESS
            localStorage.removeItem('so-cart');
            window.location.href = './success.html';

        } catch (err) {
            console.log(err);

            const message =
                err?.message?.message ||
                'Checkout failed. Please check your information and try again.';

            alertMessage(message);
        }
    }
}