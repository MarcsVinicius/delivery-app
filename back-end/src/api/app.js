const express = require('express');

const app = express();

app.get('/coffee', (_req, res) => res.status(200).send('teste'));

module.exports = app;
