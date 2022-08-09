const express = require('express');
const {
  loginController,
  validateRole,
} = require('../../database/controllers/login');

const {
  isValidEmail,
  isValidPassword,
  isValidToken,
} = require('../../middlewares/loginMiddleware');

const loginRouter = express.Router();

loginRouter.post('/', isValidEmail, isValidPassword, isValidToken, loginController);
loginRouter.post('/validate', validateRole);

module.exports = loginRouter;
