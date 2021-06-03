const axios = require('axios');

const axiosCart = axios.create({
  baseURL: 'http://cart-service',
});

module.exports = axiosCart;
