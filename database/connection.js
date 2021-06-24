const mongoose = require("mongoose");

require("dotenv").config();

const database = () => {
  const uri = `${process.env.DB_HOST}`;
  mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  });
  mongoose.connection
    .on("connected", () => console.log(`🏦 MONGOOSE, Conectado !!!`))
    .on("disconnected", () =>
      console.log(`🏦 MONGOOSE, Desconectado !!!`)
    )
    .on("error", () => console.log(`🏦 MONGOOSE, Erro na conexão !!!`));
};

module.exports = database;
