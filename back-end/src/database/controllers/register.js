const {
  registerProcess,
  registerService,
} = require('../services/register')

const registerController = async (req, res, _next) => {
  const dataBody = req.body;

  const user = await registerService(dataBody.email);
  if(user) return res.status(409).json({ message: 'User already registered' });

  const newUser = await registerProcess(dataBody);
  return res.status(201).json(newUser);
};

module.exports = {
  registerController,
};