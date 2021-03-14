module.exports = function (app, db) {
  app.post("/works", (req, res) => {
    const work = {
      title: req.body.title,
      description: req.body.description,
      link: req.body.link,
      screens: req.body.screens,
      technologies: req.body.technologies,
    };

    db.collection("works").insert(work, (err, result) => {
      if (err) {
        res.send({ error: "An error has occurred" });
      } else {
        res.send(result.ops[0]);
      }
    });
  });
  app.get("/works", async (req, res) => {
    // all technologies
    const technologies = await db.collection("technologies").find().toArray();
    if (!technologies) {
      res.send({ error: "Error when uploading works" });
    } else {
      res.send(technologies[0].list);
    }
  });
  app.get("/works/:string", async (req, res) => {
    // all works of this category/technologie
    const categoryName = req.url.split("/")[2];
    const works = await db
      .collection("works")
      .find({ technologies: categoryName })
      .toArray();

    if (!works) {
      res.send({ error: "Error when uploading works" });
    } else {
      res.send(works);
    }
  });
  app.get("/works/:string/:string", async (req, res) => {
    // work detail
    const workName = req.url.split("/")[3];

    const works = await db
      .collection("works")
      .find({ title: workName })
      .toArray();
    if (!works) {
      res.send({ error: "Error when uploading works" });
    } else {
      res.send(works);
    }
  });
};