const express = require('express');

const {
  customerOrdersController,
  orderSaleController,
} = require('../../database/controllers/customers');

const customerRouter = express.Router();

customerRouter.get('/orders', customerOrdersController);
customerRouter.get('/orders/:id', orderSaleController);

module.exports = customerRouter;
