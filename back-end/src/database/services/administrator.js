const { createToken } = require('../../utils/JWT');
const { user } = require('../models');
const md5 = require('md5');

const registerAdminValidate = async () => {
  const foundUser = await user.findAll();
  return foundUser;
};

const registerAdminProcess = async (dataBody) => {
  const { name, email, password } = dataBody;

  const encode = md5(password);
  const newUser = await user.create({ ...dataBody, password: encode, role: 'administrator' });

  const payload = {
    email,
    role: 'administrator',
  };

  const token = createToken(payload);

  return {
    id: newUser.id,
    name,
    email,
    password: encode,
    role: 'administrator',
    token,
  };
}

module.exports = {
  registerAdminProcess,
  registerAdminValidate,
};
