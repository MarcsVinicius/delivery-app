const express = require('express');
const productsController = require('../../controllers/products.controller');

const productsRouter = express.Router();

productsRouter.get('/', productsController.getAllProducts);

module.exports = productsRouter; 
