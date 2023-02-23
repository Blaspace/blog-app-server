const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const router = require('./router/allRouter')
const cookieParser = require('cookie-parser')
const credentials = require('./midlewear/cors')
const corsOption = require('./config/corsOption')

const app =express()
app.use(credentials.Allow)
app.use(cors(corsOption))
app.use(cookieParser())
mongoose.set('strictQuery', true)
mongoose.connect('mongodb://localhost:27017/todo-list', ()=>{
    app.listen(3500, ()=> console.log('listening'))
})
app.use(express.json())
app.use(router)