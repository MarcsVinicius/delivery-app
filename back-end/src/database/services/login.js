const { user } = require('../models');
const { createToken, decodeToken } = require('../../utils/JWT');
const md5 = require('md5');

const loginService = async (email) => {
  const foundUser = await user.findOne({ where: { email } });
  return foundUser;
};

const loginProcess = async (email) => {
  const foundUser = await loginService(email);
  const payload = {
    email: foundUser.email,
    role: foundUser.role,
  };

  const token = createToken(payload);
  return {
    id: foundUser.id,
    name: foundUser.name,
    email: foundUser.email,
    role: foundUser.role,
    token,
  };
}

const verifyToken = (auth) => {
  const code = decodeToken(auth);

  return code;
};

const encryptor = async (password, email) => {
  const foundUser = await user.findOne({ where: { email } });

  if (foundUser) {
   const encodedPassword = md5(password);
   if (encodedPassword === foundUser.password) return true;
  }
}

module.exports = {
  loginService,
  loginProcess,
  verifyToken,
  encryptor,
};

