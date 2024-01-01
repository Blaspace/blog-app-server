const Blog = require("../schemas/blogSchema");

const handleGetBlog = (req, res) => {
  Blog.find()
    .select("-blogimagename")
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.sendStatus(400);
      console.log(err);
    });
};

module.exports = handleGetBlog;
