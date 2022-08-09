const { createToken } = require('../../utils/JWT');
const { user } = require('../models');
const md5 = require('md5');

const registerEmail = async (email) => {
  const foundUser = await user.findOne({ where: { email } });
  return foundUser;
};

const registerName = async (name) => {
  const foundUser = await user.findOne({ where: { name } });
  return foundUser;
};

const registerProcess = async (dataBody) => {
  const { name, email, password } = dataBody;

  const newUser = await user.create({ ...dataBody, role: 'customer' });

  const payload = {
    email,
    role: 'customer'
  };

  const token = createToken(payload);
  const encode = md5(password);

  return {
    id: newUser.id,
    name,
    email,
    password: encode,
    role: 'customer',
    token,
  };
}

module.exports = {
  registerProcess,
  registerEmail,
  registerName,
};

