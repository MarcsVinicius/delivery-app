const express = require('express');

const { usersController } = require('../../database/controllers/users');

const usersRouter = express.Router();

usersRouter.get('/', usersController);

module.exports = usersRouter;
