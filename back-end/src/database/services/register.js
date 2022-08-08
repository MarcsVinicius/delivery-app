const { User } = require('../models');

const registerService = async (email) => {
  const user = await User.findOne({ where: { email } });
  return user;
};

const registerProcess = async (dataBody) => {
  const newUser = await User.create(dataBody);
  const payload = {
    email: dataBody.email,
    role: dataBody.role,
  };

  const token = createToken(payload);
  return newUser = {
    id,
    name: dataBody.name,
    email: dataBody.email,
    role: dataBody.role,
    token,
  };
}

module.exports = {
  registerProcess,
  registerService,
};

