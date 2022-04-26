const http = require("http");
const app = require("./config/express");

const PORT = process.env.PORT || 8080;

http.createServer(app).listen(PORT, () => {
  console.log(`Servidor escutando na porta: ${PORT}`);
});
