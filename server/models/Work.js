const mongoose = require("mongoose");

const workSchema = mongoose.Schema({
  title: String,
  description: String,
  screens: [String],
  technologies: [String],
  link: String,
});

const Work = mongoose.model("Work", workSchema);

module.exports = Work;
