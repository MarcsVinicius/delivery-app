const { createToken, decodeToken } = require('../../utils/JWT');
const { user } = require('../models');
const md5 = require('md5');
const { setRole } = require('../../utils/functions');

const registerAdminValidate = async () => {
  const foundUser = await user.findAll();
  return foundUser;
};

const verifyPermission = async (auth) => {
  console.log(auth);
  const code = decodeToken(auth);
  const findUser = await user.findOne({ where: { email: code.email } });

  if (findUser) {
    const encodedPassword = md5(code.password);
  if (
    encodedPassword === findUser.password
    && code.role === 'administrator') {
      return true;
    }
  }
};

const registerAdminProcess = async (dataBody) => {
  const { name, email, password, role } = dataBody;

  // verifyPermission()

  const userRole = setRole(role);
  const encode = md5(password);
  const newUser = await user.create({ ...dataBody, password: encode, role: userRole });


  const payload = {
    email,
    role: userRole,
  };

  const token = createToken(payload);

  return {
    id: newUser.id,
    name,
    email,
    password: encode,
    role: userRole,
    token,
  };
}

module.exports = {
  registerAdminProcess,
  registerAdminValidate,
  verifyPermission,
};