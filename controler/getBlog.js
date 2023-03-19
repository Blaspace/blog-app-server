const Blog = require("../schemas/blogSchema");

const handleGetBlog = (req, res) => {
  Blog.find()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => res.sendStatus(400));
};

module.exports = handleGetBlog;
