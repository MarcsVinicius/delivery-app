const express = require('express');
const sellerController = require('../../database/controllers/seller.controller');

const sellerRouter = express.Router();

sellerRouter.get('/:id', sellerController.sellerOrder);
sellerRouter.put('/', sellerController.sellerStatusUpdate);
sellerRouter.get('/:id/orders/:saleId', sellerController.sellerOrderDetails);

module.exports = sellerRouter;