const express = require('express');
const {
  loginController,
  validateRole,
} = require('../../database/controllers/login');

const {
  isValidEmail,
  isValidPassword,
} = require('../../middlewares/loginMiddleware');

const loginRouter = express.Router();

loginRouter.post('/', isValidEmail, isValidPassword, loginController);
loginRouter.post('/validate', validateRole);

module.exports = loginRouter;
