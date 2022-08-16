const express = require('express');

const {
  isValidRegisterName,
  isValidRegisterEmail,
  isValidRegisterPassword,
} = require('../../middlewares/registerMiddleware');
const {
  registerAdminController,
} = require('../../database/controllers/administrator');

const adminRouter = express.Router();

adminRouter.post(
  '/',
  isValidRegisterName,
  isValidRegisterEmail,
  isValidRegisterPassword,
  registerAdminController,
);

module.exports = adminRouter;
