const express = require('express');
const errorHandler = require('../middlewares/errorHandler');
const router = require('../routes');

const app = express();
app.use(express.json());
app.use(router);
app.use(errorHandler);

// app.get('/', (_req, res) => res.status(200).send('teste'));

module.exports = app;
