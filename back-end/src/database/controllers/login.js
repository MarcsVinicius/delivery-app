const {
  verifyToken,
  loginProcess,
  encryptor,
} = require('../services/login')

const loginController = async (req, res, _next) => {
  const { email } = req.body;

  const user = await loginProcess(email);
  if (!user) return res.status(404).json({ message: 'Incorrect email or password' });

  return res.status(200).json(user);
};

const validateRole = (req, res) => {
  const token = req.headers.authorization;

  const user = verifyToken(token);
  if (!user) return res.status(401).json({ message: 'The token must be a valid token' });

  return res.status(200).json({ role: user.role });
}

const validateUser = (req, res) => {
  const { email, password } = req.body;

  encryptor(password, email);
  return res.status(200);
}

module.exports = {
  loginController,
  validateRole,
  validateUser,
};
