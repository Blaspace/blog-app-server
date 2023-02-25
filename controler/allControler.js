const bcrypt = require('bcrypt')
const User = require('../schemas/userSchema')
const jwt = require('jsonwebtoken')
const Blog = require('../schemas/blogSchema')
require('dotenv').config()

const verifyAccesstoken =(req, res)=>{
    const {accesstoken} = req.body
    if(!accesstoken) return res.sendStatus(401)
    jwt.verify(
        accesstoken,
        process.env.ACCESS_TOKEN,
        (err, decoded)=>{
            if(err) return res.sendStatus(401)
            res.sendStatus(200)
        }
    )
}

//sign up function
const handleRegister = async (req, res)=>{
    const {password, email, username} = req.body

    //chacking if the user with email already exist
    const conflict =await User.findOne({email})
    if(conflict) return res.status(409).send('user already exist')

    //hashing password with bcript
    const salt = await bcrypt.genSalt(10)
    const hashedpassword = await bcrypt.hash(password, salt)
    //saving user to db
    const user = new User({
        password: hashedpassword,
        email: email,
        username: username
    })
    user.save()
    .then((data)=>{
        res.send(data)
    })
    .catch((err)=>console.log(err))
}

//login function
const handleLogin = async (req, res)=>{
    if(!req.body.email) return res.sendStatus(400)
    if(!req.body.password) return res.sendStatus(400)

    //checking if the user is in db
    const founduser = await User.findOne({email : req.body.email})
    if(!founduser) return res.sendStatus(401)

    //checking if the users password is accurate
    const match = await bcrypt.compare(req.body.password, founduser.password)
    if(!match) return res.sendStatus(401)

    //sending jwt tokens
    try{
        const accesstoken = jwt.sign(
            {"email":founduser.email},
             process.env.ACCESS_TOKEN,
             {expiresIn: "1d"}
            )
            //saving accesstoken in db
            User.findOneAndUpdate( req.body.email ,{accesstoken})
            .then(()=> { return } )
            .catch((err)=>console.log(err))
            res.json({accesstoken})
    }catch(err){
        console.log(err);
        res.sendStatus(400)
    }
}

//function to get users info
const handleGet = (req, res)=>{
    const accesstoken = req.body.accesstoken
    //verifying the token
   jwt.verify(
        accesstoken,
        process.env.ACCESS_TOKEN,
        (err, decoded)=>{
            if(err) return res.sendStatus(401)
          User.findOne({email: decoded.email})
            .then(data => res.json({ email: data.username }))
        }
   )
}
const handleLogout= (req, res)=>{
    const {accesstoken} = req.body
    if(!accesstoken) return res.sendStatus(208)
    User.findOneAndUpdate({accesstoken}, {accesstoken:''})
    .then(()=> res.sendStatus(208))
    .catch((err)=> {
        if(err){
            res.sendStatus(400)
        }
    })
}

const handleNewBlog =(req, res)=>{
    const {date, name, blog} = req.body
 console.log(date, name, blog);
    if(!date || !blog){
        res.sendStatus(400)
    }
    const newblog = new Blog({
        date,
        blog
    })
    newblog.save()
    .then(()=> res.sendStatus(204))
    .catch(()=> res.sendStatus(407))
}

const handleGetBlog =(req, res)=>{
    Blog.find()
    .then((data)=> res.json(data))
}

module.exports = {
    handleRegister,
    handleLogin,
    handleGet,
    handleLogout,
    handleNewBlog,
    handleGetBlog,
    verifyAccesstoken
}