const express = require('express');
const productsController = require('../../database/controllers/products.controller');

const productsRouter = express.Router();

productsRouter.get('/', productsController.getAllProducts);

module.exports = productsRouter; 
