const express = require('express');

const { createSaleController } = require('../../database/controllers/sales');
//const { isValidToken } = require('../../middlewares/loginMiddleware');

const salesRouter = express.Router();

salesRouter.post('/', createSaleController);

module.exports = salesRouter;
