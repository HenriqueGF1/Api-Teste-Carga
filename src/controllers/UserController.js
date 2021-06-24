const UserModel = require('../models/UserModel');

const listAllUsers = async (req, res) => {
  let count = 0;
  try {
    // const usuarios = await UserModel.find({});
    // res.send({
    //   message: 'Success',
    //   data: usuarios,
    // });
    res.send({
      message: 'Success',
      data: `Usuário ${count + 1}`,
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
