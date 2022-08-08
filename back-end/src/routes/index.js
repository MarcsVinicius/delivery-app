const express = require('express');
const loginRouter = require('./login/index');

const router = express.Router();

router.use('/login', loginRouter);

module.exports = router;
