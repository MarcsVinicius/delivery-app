const express = require('express');
const { loginController } = require('../../database/controllers/login');

const loginRouter = express.Router();

loginRouter.post('/', loginController);

module.exports = loginRouter;
