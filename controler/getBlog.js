const Blog = require('../schemas/blogSchema')

const handleGetBlog =(req, res)=>{
    Blog.find()
    .then((data)=>{res.send(data)})
}

module.exports = handleGetBlog