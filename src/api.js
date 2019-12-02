const BASE_URL = 'http://localhost:2001';
const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

const randomNumber = (min = 0, max = 1) =>
    Math.floor(Math.random() * (max - min + 1)) + min;

const simulateNetworkLatency = (min = 30, max = 1500) =>
    delay(randomNumber(min, max));

async function callApi(endpoint, options = {}) {

    await simulateNetworkLatency();

    options.headers = {
        'Content-Type': 'application/json',
        Accept: 'application/json',
    };

    // fetch('http://localhost:2001?year=1986')
    // .then(res => console.log(1111, res.json()))
    // .then(json => console.log(2222, { data: json }));

    const url = BASE_URL + endpoint;
    const response = await fetch(url, options);
    const data = await response.json();

    return data;
}

const api = {
    cups: {
        list() {
            //throw new Error("Error forzado");
            return callApi('/cups');
        },

        create(cup) {
            return callApi(`/cups`, {
                method: 'POST',
                body: JSON.stringify(cup),
            });
        },

        read(cupId) {
            return callApi(`/cups/${cupId}`);
        },

        update(cupId, updates) {
            return callApi(`/cups/${cupId}`, {
                method: 'PUT',
                body: JSON.stringify(updates),
            });
        },

        remove(cupId) {
            return callApi(`/cups/${cupId}`, {
                method: 'DELETE',
            });
        },
    },
};

export default api;