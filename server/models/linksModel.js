const mongoose = require("mongoose");

const linkSchema = mongoose.Schema({
  title: String,
  imgSrc: String,
  link: String,
});

const Link = mongoose.model("Link", linkSchema);

module.exports = Link;
