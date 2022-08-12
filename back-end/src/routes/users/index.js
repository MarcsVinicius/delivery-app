const express = require('express');

const { usersController } = require('../../database/controllers/users');

const usersRouter = express.Router();

usersRouter.get('/:role', usersController);

module.exports = usersRouter;
