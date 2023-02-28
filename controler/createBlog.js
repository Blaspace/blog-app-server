const Blog = require('../schemas/blogSchema')

const handleNewBlog =(req, res)=>{
    const {date, blog, username} = req.body

    if(!date || !blog || !username) return res.sendStatus(400)
    
    const newblog = new Blog({
        date,
        blog,
        username
    })
    newblog.save()
    .then(()=> res.sendStatus(204))
    .catch(()=> console.log('err'))
}

module.exports = handleNewBlog