const express = require('express');
const loginRoute = require('./login/index');

const router = express.Router();

router.use('/login', loginRoute);

module.exports = router;
