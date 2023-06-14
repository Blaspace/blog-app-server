const Blog = require("../schemas/blogSchema");

const handleDeleteBlog = (req, res) => {
  Blog.findByIdAndDelete(req.params.id)
    .then((data) => res.send(data))
    .catch((err) => res.sendStatus(400));
};

module.exports = handleDeleteBlog;
