const loginController = async (req, res, next) => {
  const { email } = req.body;
  try {
    const token = await service.loginService(email);

    return res.status(200).json(token);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  loginController
};
