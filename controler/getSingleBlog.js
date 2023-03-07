const Blog = require('../schemas/blogSchema')

const handleGetSingleBlog =(req, res)=>{
    Blog.findById(req.params.id)
    .then((data)=>res.send(data))
    .catch(()=>res.sendStatus(400))
}

module.exports = handleGetSingleBlog