const {
  displayNameSchema,
  emailSchema,
  passwordSchema,
  roleSchema,
} = require('../utils/joi');

const isValidRegisterName = (req, _res, next) => {
  const { name } = req.body;

  const { error } = displayNameSchema.validate({ name });
  if (error) next({ status: 400, message: 'The name length must be at least 8 characters long' });
  
  next();
};

const isValidRegisterEmail = (req, _res, next) => {
  const { email } = req.body;

  const { error } = emailSchema.validate({ email });
  if (error) next({ status: 400, message: 'The email must be a valid email' });
  
  next();
};

const isValidRegisterPassword = (req, _res, next) => {
  const { password } = req.body;

  const { error } = passwordSchema.validate({ password });
  if (error) next({ status: 400, message: 'The password length must be at least 6 characters long' });
  
  next();
};

const roleIsRequired = (req, _res, next) => {
  const { role } = req.body;

  const { error } = roleSchema.validate({ role });
  if (error) next({ status: 400, message: 'The field role is required' });
  
  next();
};

module.exports = {
  isValidRegisterName,
  isValidRegisterEmail,
  isValidRegisterPassword,
  roleIsRequired,
};