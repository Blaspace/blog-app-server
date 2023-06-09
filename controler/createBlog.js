const Blog = require("../schemas/blogSchema");
const fs = require("fs");

const handleNewBlog = (req, res) => {
  const { date, blog, username, userid } = req.body;

  if (req.file) {
    if (req.file.size > 129000) {
      return res.sendStatus(400);
    }
    if (!date || !blog || !username || !userid) return res.sendStatus(400);
    const newblog = new Blog({
      date,
      blog,
      username,
      userid,
      blogimage: {
        data: fs.readFileSync("images/" + req.file.originalname),
        contentType: "image/png",
      },
    });
    newblog
      .save()
      .then((data) => {
        res.json(data);
      })
      .catch((err) => {
        res.status(402).send(err._message);
        console.log(err);
      });
  } else if (blog && !req.file) {
    if (!date || !blog || !username || !userid) return res.sendStatus(400);
    const newblog = new Blog({
      date,
      blog,
      username,
      userid,
    });
    newblog
      .save()
      .then((data) => res.send(data))
      .catch(() => res.status(402).send(err._message));
  } else if (req.file && !blog) {
    if (req.file.size > 129000) {
      return res.sendStatus(400);
    }
    const newblog = new Blog({
      date,
      username,
      userid,
      blogimage: {
        data: fs.readFileSync("images/" + req.file.originalname),
        contentType: "image/png",
      },
    });
    newblog
      .save()
      .then((data) => res.send(data))
      .catch((err) => {
        res.status(402).send(err._message);
        console.log(err);
      });
  }
};

module.exports = handleNewBlog;
