const { createToken } = require('../../utils/JWT');
const { user } = require('../models');
const md5 = require('md5');

const registerValidate = async () => {
  const foundUser = await user.findAll();
  return foundUser;
};

const registerProcess = async (dataBody) => {
  const { name, email, password } = dataBody;

  const encode = md5(password);
  const newUser = await user.create({ ...dataBody, password: encode, role: 'customer' });

  const payload = {
    email,
    role: 'customer',
  };

  const token = createToken(payload);

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
  registerValidate,
};
