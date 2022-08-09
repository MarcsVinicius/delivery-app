const { createToken } = require('../../utils/JWT');
const { User } = require('../models');
const md5 = require('md5');

const registerService = async (email) => {
  const user = await User.findOne({ where: { email } });
  return user;
};

const registerProcess = async (dataBody) => {
  const { name, email, password, role } = dataBody;

  const newUser = await User.create({ ...dataBody });
  const payload = {
    email,
    role,
  };

  const token = createToken(payload);
  const encode = md5(password);

  return {
    id: newUser.id,
    name,
    email,
    password: encode,
    role,
    token,
  };
}

module.exports = {
  registerProcess,
  registerService,
};

