const UserModel = require('../models/UserModel');

const listAllUsers = async (req, res) => {
  try {
    const usuarios = await UserModel.find({});
    res.send({
      message: 'Success',
      data: usuarios,
    });
  } catch (error) {
    res.send({
      message: 'Error',
      data: error,
    });
  }
};

module.exports = {
  listAllUsers,
};
