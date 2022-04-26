const api = require("../api");

module.exports = (app) => {
  app.route("/dados").get(api.dados);
};
