const express = require('express');
const AuthController = require('./AuthController');

const Controller = new AuthController();
const routes = express.Router();

routes.post('/carts', Controller.createCart);
routes.get('/carts', Controller.showCart);
routes.post('/carts/add/:id', Controller.addToCart);
routes.post('/carts/remove/:id', Controller.removeFromCart);
routes.post('/customers', Controller.userSignup);
routes.post('/login', Controller.userLogin);

module.exports = routes;
