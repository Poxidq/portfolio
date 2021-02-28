const workRoutes = require("./wrok_routes");

module.exports = function (app, db) {
  workRoutes(app, db);
};
