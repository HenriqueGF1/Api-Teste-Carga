const route = require("express").Router();

// Controller
const UserController = require("../src/controllers/UserController")


route.get("/",UserController.listAllUsers)

route.get("*", function (req, res) {
    res.send({ message: "Erro 404 ,Essa Rota Não Existe" });
});

module.exports = route;