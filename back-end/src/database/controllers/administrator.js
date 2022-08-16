const {
  registerAdminProcess,
  registerAdminValidate,
} = require('../services/administrator')

const registerAdminController = async (req, res, _next) => {
  const dataBody = req.body;

  const isUserRegistered = await registerAdminValidate();
  const filteredEmail = isUserRegistered.find((e) => e.email === dataBody.email);
  if(filteredEmail) return res.status(409).json({ message: 'The email already registered' });

  const filteredName = isUserRegistered.find((e) => e.name === dataBody.name);
  if(filteredName) return res.status(409).json({ message: 'The name already registered' });

  const newUser = await registerAdminProcess(dataBody);
  return res.status(201).json(newUser);
};

module.exports = {
  registerAdminController,
};