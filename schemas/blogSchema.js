const mongoose = require("mongoose");

const blogSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  userid: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
  blog: {
    type: String,
  },
  blogimagename: Buffer,
});

const Blog = mongoose.model("Blog", blogSchema);

module.exports = Blog;
