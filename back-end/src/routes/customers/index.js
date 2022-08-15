const express = require('express');

const { customerOrdersController } = require('../../database/controllers/customers');

const customerRouter = express.Router();

customerRouter.get('/orders', customerOrdersController);

module.exports = customerRouter;
