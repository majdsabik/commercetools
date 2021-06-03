const axiosCart = require('./axiosCart');
const axiosCustomer = require('./axiosCustomer');

const createCart = async () => {
  const result = await axiosCart.post('/carts/', { anonId: process.env.anonId });
  return result;
};

const showCart = async () => {
  const cart = await axiosCart.get('/carts/find/', { params: { anonId: process.env.anonId } });
  return cart;
};

const addProduct = async (id, product) => {
  const result = await axiosCart.post(`/add/${id}`, product);
  return result;
};

const removeProduct = async (id, customLineItemId) => {
  const result = await axiosCart.post(`/remove/${id}`, { customLineItemId });
  return result;
};

const login = async (customer) => {
  const result = await axiosCustomer.post('/login/', customer);
  return result;
};

const signup = async (customer) => {
  const customerClone = JSON.parse(JSON.stringify(customer));
  customerClone.anonymousId = process.env.anonId;
  const result = await axiosCustomer.post('/customers/', customerClone);
  return result;
};

module.exports = {
  createCart,
  showCart,
  addProduct,
  removeProduct,
  login,
  signup,
};
