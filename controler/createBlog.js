const Blog = require("../schemas/blogSchema");

const handleNewBlog = (req, res) => {
  const { date, blog, username, userid } = req.body;

  if (!date || !username || !userid) return res.sendStatus(400);
  console.log(req.file.filename);

  if (req.file.filename) {
    const newblog = new Blog({
      date,
      blog,
      username,
      userid,
      blogimagename: req.file.filename,
    });
    newblog
      .save()
      .then((data) => res.send(data))
      .catch((err) => console.log(err));
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
