const express = require('express');

const loginRouter = require('./login/index');
const productsRouter = require('./products');
const registerRouter = require('./register');
const usersRouter = require('./users');
const salesRouter = require('./sales');
const sellerRouter = require('./seller');
const customerRouter = require('./customers');

const router = express.Router();

router.use('/login', loginRouter);
router.use('/login/validate', loginRouter);
router.use('/register', registerRouter);
router.use('/products', productsRouter);
router.use('/images', express.static(`${__dirname}/../../public`)); // rota das imagens de produtos
router.use('/users', usersRouter);
router.use('/sales', salesRouter);
router.use('/seller', sellerRouter);
router.use('/customer', customerRouter);
router.use('customer/orders/:id', customerRouter);

module.exports = router;
