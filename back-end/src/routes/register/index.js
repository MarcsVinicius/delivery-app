const express = require('express');

const { registerController } = require('../../database/controllers/register');

const registerRouter = express.Router();

registerRouter.post('/', registerController);

module.exports = registerRouter;
