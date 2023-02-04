const express = require('express');
const categoryRouter = express.Router();
const categoryController = require('./../Controller/category.controller');

categoryRouter.post('/add', categoryController.addCategory);
categoryRouter.get('/', categoryController.getAllCategory);
categoryRouter.get('/:id', categoryController.getCategoryById);
categoryRouter.get('/search/:id', categoryController.searchByCategory);
categoryRouter.post('/search', categoryController.getCategoryByManyIds);

module.exports = categoryRouter;
