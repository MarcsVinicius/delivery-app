const { sign, verify } = require('jsonwebtoken');

const secret = 'secret_key';

const SignOptions = {
  expiresIn: '7d',
  algorithm: 'HS256',
};

const createToken = (email) => {
  const token = sign(email, secret, SignOptions);

  return token;
};

const decodeToken = (token) => {
  const decoded = verify(token, secret);
  
  return decoded;
};

module.exports = {
  createToken,
  decodeToken,
};
