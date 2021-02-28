const mongoose = require("mongoose");

const skillSchema = mongoose.Schema({
  title: String,
  imgSrc: String,
  link: String,
});

const Skill = mongoose.model("Skill", skillSchema);

module.exports = Skill;
