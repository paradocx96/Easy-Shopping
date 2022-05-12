import axios from "axios";

// TODO: Declare url for rest api
const ADDRESS_API_BASE_URL_WSO2 = "http://localhost:8280/delivery";
const POSTMAN_API_BASE_URL_WSO2 = "http://localhost:8280/delivery";
const REMOTE_URL = "http://20.24.134.24:8080";

// const ADDRESS_API_BASE_URL_REST_API = "http://localhost:8083/api/address";
// const POSTMAN_API_BASE_URL_REST_API = "http://localhost:8083/api/postman";

class AddressService {

    // TODO: Getting calculated value for address
    postCalculateAddress(address) {
        return axios.post(REMOTE_URL + '/calculatedelivery', address)
            .then((data)=>{
                return data.data;
            });
    }

    // TODO: Add new address to database
    postAddress(address) {
        return axios.post(REMOTE_URL + '/newaddress', address);
    }

    // TODO: Add order from checkout process
    postCheckoutOrder(postman) {
        return axios.post(REMOTE_URL + '/add', postman);
    }

    // TODO: Get last added order from database
    getLastOrder() {
        return axios.get(REMOTE_URL + '/last');
    }
}

export default new AddressService();
