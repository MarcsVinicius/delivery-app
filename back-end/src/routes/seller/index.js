const express = require('express');
const sellerController = require('../../database/controllers/seller.controller');

const sellerRouter = express.Router();

sellerRouter.get('/:id', sellerController.sellerOrder);
sellerRouter.get('/:id/orders/:saleId', sellerController.sellerOrderDetails);

module.exports = sellerRouter;