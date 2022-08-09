const express = require('express');

const { registerController } = require('../../database/controllers/register');
const {
  isValidRegisterName,
  isValidRegisterEmail,
  isValidRegisterPassword,
  roleIsRequired,
} = require('../../middlewares/registerMiddleware');

const registerRouter = express.Router();

registerRouter.post(
  '/',
  isValidRegisterName,
  isValidRegisterEmail,
  isValidRegisterPassword,
  roleIsRequired,
  registerController,
  );

module.exports = registerRouter;
