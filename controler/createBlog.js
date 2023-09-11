const Blog = require("../schemas/blogSchema");
const fs = require("fs");

const handleNewBlog = (req, res) => {
  const { date, blog, username, userid } = req.body;

  if (!date || !username || !userid) return res.sendStatus(400);

  if (req.file) {
    const newblog = new Blog({
      date,
      blog,
      username,
      userid,
      blogimagename: fs.readFileSync(`images/${req.file.filename}`),
    });
    newblog
      .save()
      .then((data) => res.send(data))
      .catch((err) => console.log(err))
      .finally(() => fs.unlinkSync(`images/${req.file.filename}`));
  } else {
    const newblog = new Blog({
      date,
      blog,
      username,
      userid,
    });
    newblog
      .save()
      .then((data) => res.send(data))
      .catch((err) => console.log(err));
  }
};

module.exports = handleNewBlog;
