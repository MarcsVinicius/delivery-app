const express = require('express');

const { registerController } = require('../../database/controllers/register');
const {
  isValidRegisterName,
  isValidRegisterEmail,
  isValidRegisterPassword,
} = require('../../middlewares/registerMiddleware');

const registerRouter = express.Router();

registerRouter.post(
  '/',
  isValidRegisterName,
  isValidRegisterEmail,
  isValidRegisterPassword,
  registerController,
);

module.exports = registerRouter;
