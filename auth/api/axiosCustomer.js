const axios = require('axios');

const axiosCustomer = axios.create({
  baseURL: 'http://customer-service',
});

module.exports = axiosCustomer;
