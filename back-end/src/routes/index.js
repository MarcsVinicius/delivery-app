const express = require('express');

const loginRouter = require('./login/index');
const productsRouter = require('./products');

const router = express.Router();

router.use('/login', loginRouter);
router.use('/products', productsRouter);

module.exports = router;
