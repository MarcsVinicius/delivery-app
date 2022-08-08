const joi = require('joi');

const emailSchema = joi.object({
  email: joi.string().email({ minDomainSegments: 2 }).required(),
});

const passwordSchema = joi.object({ password: joi.string().min(6).required() });

module.exports = {
  emailSchema,
  passwordSchema,
};
