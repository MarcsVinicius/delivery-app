const { User } = require('../models');
const { createToken, decodeToken } = require('../../utils/JWT');
const md5 = require('md5');

const loginService = async (email) => {
  const user = await User.findOne({ where: { email } });
  return user;
};

const loginProcess = async (email) => {
  const user = await loginService(email);
  const payload = {
    email: user.email,
    role: user.role,
  };

  const token = createToken(payload);
  return {
    id: user.id,
    name: user.name,
    email: user.email,
    role: user.role,
    token,
  };
}

const verifyToken = (auth) => {
  const code = decodeToken(auth);

  return code;
};

const encryptor = async (password, email) => {
  const user = await User.findOne({ where: { email } });

  if (user) {
   const encodedPassword = md5(password);
   if (encodedPassword === user.password) return true;
  }
}

module.exports = {
  loginService,
  loginProcess,
  verifyToken,
  encryptor,
};

