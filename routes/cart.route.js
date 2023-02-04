const express = require('express');
const cartRouter = express.Router();
const cartController = require('./../Controller/cart.controller');

cartRouter.post('/add', cartController.addProductToCart);
cartRouter.get('/', cartController.getAllCarts);

module.exports = cartRouter;
