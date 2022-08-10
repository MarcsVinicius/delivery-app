const {
  registerProcess,
  registerValidate,
} = require('../services/register')

const registerController = async (req, res, _next) => {
  const dataBody = req.body;

  const isUserRegistered = await registerValidate();
  const filteredEmail = isUserRegistered.filter((e) => e.email === dataBody.email);
  if(filteredEmail) return res.status(409).json({ message: 'The email already registered' });

  const filteredName = isUserRegistered.filter((e) => e.name === dataBody.name);
  if(filteredName) return res.status(409).json({ message: 'The name already registered' });

  const newUser = await registerProcess(dataBody);
  return res.status(201).json(newUser);
};

module.exports = {
  registerController,
};