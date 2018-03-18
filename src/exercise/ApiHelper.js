import 'whatwg-fetch';

export default class ApiHelper {

    constructor(base_url) {

        this.base_url = base_url;
    };

    get() {

        return fetch(this.base_url, {
            credentials: 'same-origin'
        }).then((response) => {

            return response.json();
        });
    }
};