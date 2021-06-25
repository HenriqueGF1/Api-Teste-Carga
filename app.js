const express = require('express');
const app = express();

app.use(express.json());
app.use(require('./routes/User'));
// Iniciar o Servidor
const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`🚀 Servidor Rodando em http://localhost:${port}`);
});
//
require('./database/connection')();
