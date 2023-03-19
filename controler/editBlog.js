const Blog = require("../schemas/blogSchema");

const handleEditBlog = (req, res) => {
  Blog.findByIdAndUpdate(req.params.id, { blog: req.body.blog })
    .then(() => res.sendStatus(200))
    .catch(() => res.sendStatus(400));
};

module.exports = handleEditBlog;
