const joi = require('joi');

const displayNameSchema = joi.object({ name: joi.string().min(8).required() });

const emailSchema = joi.object({
  email: joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net', 'br'] } }).required(),
});

const passwordSchema = joi.object({ password: joi.string().min(6).required() });

const roleSchema = joi.object({ role: joi.string().required() });

module.exports = {
  displayNameSchema,
  emailSchema,
  passwordSchema,
  roleSchema,
};
