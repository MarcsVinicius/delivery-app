const express = require('express');
const sellerController = require('../../database/controllers/seller.controller');

const sellerRouter = express.Router();

sellerRouter.get('/:id/orders', sellerController.sellerOrder);

module.exports = sellerRouter;