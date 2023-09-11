const Blog = require("../schemas/blogSchema");

const getBlogImage = (req, res) => {
  const id = req.params.id;

  Blog.findById(id)
    .then((data) => res.send(data.blogimagename))
    .catch(() => res.sendStatus(400));
};

module.exports = getBlogImage;
