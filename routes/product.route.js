const express = require('express');
const productRouter = express.Router();
const productController = require('./../Controller/product.controller');

productRouter.post('/add', productController.addProduct);
productRouter.post('/add/multi', productController.addProducts);
productRouter.delete('/delete', productController.deleteProducts);
productRouter.put('/edit', productController.editProduct);
productRouter.get('/', productController.getAllProduct);
productRouter.get('/:id', productController.getProductById);
productRouter.post('/', productController.getProductsByIds);

module.exports = productRouter;
