const {
  displayNameSchema,
  emailSchema,
  passwordSchema,
} = require('../utils/joi');

const isValidDisplayName = (req, res, next) => {
  const { name } = req.body;

  const { error } = displayNameSchema.validate({ name });
  if (error) return res.status(400), { message: 'The name length must be at least 8 characters long' };
  
  next();
};

const isValidEmail = (req, res, next) => {
  const { email } = req.body;

  const { error } = emailSchema.validate({ email });
  if (error) return res.status(400), { message: 'The email must be a valid email' };
  
  next();
};

const isValidPassword = (req, res, next) => {
  const { password } = req.body;

  const { error } = passwordSchema.validate({ password });
  if (error) return res.status(400), { message: 'The password length must be at least 6 characters long' };
  
  next();
};

module.exports = {
  isValidDisplayName,
  isValidEmail,
  isValidPassword,
};