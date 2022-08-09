const { createToken } = require('../../utils/JWT');
const { User } = require('../models');
const md5 = require('md5');

const registerEmail = async (email) => {
  const user = await User.findOne({ where: { email } });
  return user;
};

const registerName = async (name) => {
  const user = await User.findOne({ where: { name } });
  return user;
};

const registerProcess = async (dataBody) => {
  const { name, email, password } = dataBody;

  const newUser = await User.create({ ...dataBody, role: 'customer' });

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

