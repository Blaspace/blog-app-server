const Blog = require('../schemas/blogSchema')

const handleDeleteBlog =(req, res)=>{
    Blog.findByIdAndDelete(req.params.id)
    .then(()=>res.sendStatus(200))
    .catch(err=> res.sendStatus(400))
}

module.exports = handleDeleteBlog