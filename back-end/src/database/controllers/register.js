const {
  registerProcess,
  registerEmail,
  registerName,
} = require('../services/register')

const registerController = async (req, res, _next) => {
  const dataBody = req.body;

  const userEmail = await registerEmail(dataBody.email);
  if(userEmail) return res.status(409).json({ message: 'The email already registered' });

  const userName = await registerName(dataBody.name);
  if(userName) return res.status(409).json({ message: 'The name already registered' });

  const newUser = await registerProcess(dataBody);
  return res.status(201).json(newUser);
};

module.exports = {
  registerController,
};