const { User } = require('../models')

const loginService = async (email) => {
  const user = await User.findOne({ where: { email } });

  return user;
}

const loginProcess = async (email) => {
  const user = await loginService(email);
  const payload = {
    email: user.email,
    role: user.role,
  };

  const token = JWT.createToken(payload); // o payload deve ser um objeto;

  return { token };
}

const verifyToken = (auth) => {
  const code = JWT.decodeToken(auth);

  return code;
}

const encryptor = async (password, email) => {
  const user = await User.findOne({ where: { email } });

  if (user) {
    return encryptor.compare(password, user.password);
  }
}

module.exports = {
  loginService,
  loginProcess,
  verifyToken,
  encryptor,
};

