const express = require('express');

const loginRouter = require('./login/index');
const productsRouter = require('./products');
const registerRouter = require('./register');
const salesRouter = require('./sales');

const router = express.Router();

router.use('/login', loginRouter);
router.use('/login/validate', loginRouter);
router.use('/register', registerRouter);
router.use('/products', productsRouter);
router.use('/images', express.static(`${__dirname}/../../public`)); // rota das imagens de produtos
router.use('/sales', salesRouter);

module.exports = router;
