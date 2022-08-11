const express = require('express');

const loginRouter = require('./login/index');
const productsRouter = require('./products');
const registerRouter = require('./register');
const sellerRouter = require('./seller');

const router = express.Router();

router.use('/login', loginRouter);
router.use('/login/validate', loginRouter);
router.use('/register', registerRouter);
router.use('/products', productsRouter);
router.use('/seller/:id/orders', sellerRouter);

module.exports = router;
