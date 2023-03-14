const Blog = require('../schemas/blogSchema')
const fs = require('fs')

const handleNewBlog =(req, res)=>{
    const {date, blog, username, userid} = req.body
    if(req.file.size > 129000){
        return res.sendStatus(400)
    }
    if(!date || !blog || !username || !userid) return res.sendStatus(401)
    
    const newblog = new Blog({
        date,
        blog,
        username,
        userid,
        blogimage: { 
            data: fs.readFileSync( 'images/' + req.file.originalname),
             contentType: 'image/png'
            }
    })
    newblog.save()
    .then(()=> res.sendStatus(204))
    .catch(()=> res.sendStatus(400))
}

module.exports = handleNewBlog