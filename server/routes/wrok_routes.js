module.exports = function (app, db) {
  app.post("/works", (req, res) => {
    const work = {
      title: req.body.title,
      description: req.body.description,
      link: req.body.link,
      screens: req.body.screens,
      technologies: req.body.technologies,
    };

    db.insert(work, (err, result) => {
      if (err) {
        res.send({ error: "An error has occurred" });
      } else {
        console.log("result :", result);
        res.send(result.ops[0]);
      }
    });
  });
};

// ~Beta~ Deleting works ~Beta~
// app.delete("/works", (req, res) => {
//   const title = req.body.title;
//   const details = { title: title };
//   db.deleteMany(details, (err, item) => {
//     if (err) {
//       res.send({ error: "An error has occurred" });
//     } else {
//       res.send("Works with title " + title + "    deleted!");
//     }
//   });
// });
