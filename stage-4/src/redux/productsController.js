const axios = require('axios')
// import axios from 'axios';

const getProducts = () => {
    return axios.get("https://practiceapi.devmountain.com/products/")
    .then(response => response.data);
}

module.exports = {
    getProducts
}