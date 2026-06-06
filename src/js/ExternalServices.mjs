export default class ExternalServices {
    constructor() {
        this.baseURL = 'https://your-api-url-here'; // replace with your real endpoint
    }

    async checkout(payload) {
        const response = await fetch(`${this.baseURL}/checkout`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(payload)
        });

        return this.convertToJson(response);
    }

    async convertToJson(res) {
        const jsonResponse = await res.json();

        if (res.ok) {
            return jsonResponse;
        } else {
            throw {
                name: 'servicesError',
                message: jsonResponse
            };
        }
    }
}