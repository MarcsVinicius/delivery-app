const express = require('express');
const cors = require('cors');
const errorHandler = require('../middlewares/errorHandler');
const router = require('../routes');

const app = express();
app.use(cors());
app.use(express.json());
app.use(router);
app.use(errorHandler);

// app.get('/', (_req, res) => res.status(200).send('teste'));

module.exports = app;
