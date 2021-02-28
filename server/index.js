const express = require("express");
const MongoClient = require("mongodb").MongoClient;
const bodyParser = require("body-parser");
const db = require("./config/db");

const app = express();

const PORT = 5000;

app.use(bodyParser.urlencoded({ extended: true, limit: "5mb" }));

MongoClient.connect(db.url, { useUnifiedTopology: true }, (err, database) => {
  if (err) return console.log(err);
  const worksDb = database.db("portfolio").collection("works");
  require("./routes")(app, worksDb);
  app.listen(PORT, () => {
    console.log("Server port: ", PORT, "ヾ(`ヘ´)ﾉﾞ");
  });
});
