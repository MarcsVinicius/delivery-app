const { encryptor, verifyToken } = require('../database/services/login');

const message = { message: 'Incorrect email or password' };
const message1 = { message: 'All fields must be filled' };
const message2 = { message: 'Token must be a valid token' };
const message3 = { message: 'The password must be at least 6 characters long' };
const message4 = { message: 'The email must be a valid email' };

const isValidEmail = (req, res, next) => {
  const regex = /\S+@\S+\.\S+/;
  const { email } = req.body;

  if (!email || email === '') {
    return res.status(400).json(message1);
  }
  if (!regex.test(email)) {
    return res.status(401).json(message4);
  }
  next();
};

const isValidPassword = async (req, res, next) => {
  const { email, password } = req.body;

  if (!password || password === '') {
    return res.status(400).json(message1);
  }

  if (password.length < 6) return res.status(400).json(message3);

  const confirmUser = await encryptor(password, email);

  if (!confirmUser) {
    return res.status(404).json(message);
  }

  next();
};

const isValidToken = (req, res, next) => {
  try {
    const token = req.headers.authorization;

    verifyToken(token);

    next();
  } catch (error) {
    return res.status(401).json(message2);
  }
};

module.exports = {
  isValidEmail,
  isValidPassword,
  isValidToken,
};
