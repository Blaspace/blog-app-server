const { string } = require('@hapi/joi')
const mongoose = require('mongoose')

const blogSchema = new mongoose.Schema({
    username:{
        type: String,
        require: true
    },
    date:{
        type: String,
        require: true
    },
    blog:{
        require: true,
        type: String
    }
})

const Blog = mongoose.model('Blog', blogSchema)

module.exports = Blog