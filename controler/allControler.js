const bcrypt = require('bcrypt')
const User = require('../schemas/userSchema')
const jwt = require('jsonwebtoken')
require('dotenv').config()

const handleRegister = async (req, res)=>{
    const {password, email, username} = req.body

    const conflict =await User.findOne({email})
    if(conflict) return res.status(409).send('user already exist')
    
    const salt = await bcrypt.genSalt(10)
    const hashedpassword = await bcrypt.hash(password, salt)

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

const handleLogin = async (req, res)=>{
    if(!req.body.email) return res.sendStatus(400)
    if(!req.body.password) return res.sendStatus(400)

    const founduser = await User.findOne({email : req.body.email})
    if(!founduser) return res.sendStatus(401)

    const match = await bcrypt.compare(req.body.password, founduser.password)
    if(!match) return res.sendStatus(401)

    try{
        const accesstoken = jwt.sign(
            {"email":founduser.email},
             process.env.ACCESS_TOKEN,
             {expiresIn: "1000s"}
            )
        const refreshtoken = jwt.sign(
            {"email":founduser.email},
                process.env.REFRESH_TOKEN,
                {expiresIn: "1d"}
            )

            User.findOneAndUpdate( req.body.email ,{refreshtoken})
            .then(()=> { return } )
            .catch((err)=>console.log(err))
            res.json({accesstoken, refreshtoken})
    }catch(err){
        console.log(err);
        res.sendStatus(400)
    }
}

const handleGet = (req, res)=>{
    const accesstoken = req.body.accesstoken
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

const handleGetNewAccessToken =(req, res)=>{
    const {refreshtoken} = req.body
    if(!refreshtoken) return res.sendStatus(401)
    const person = User.findOne(refreshtoken)
    if(!person) return res.sendStatus(401)

    jwt.verify(
        refreshtoken,
        process.env.REFRESH_TOKEN,
        (err, decoded)=>{
        if(err) return console.log(err);
        const accesstoken = jwt.sign(
                    {"email":decoded.email},
                    process.env.ACCESS_TOKEN,
                    {expiresIn: "1000s"}
                )
                res.json({accesstoken})
        }
    )
}

const handleLogout = (req, res)=>{
 const cookie = req.cookies.jwt;
 if(!cookie) return res.sendStatus(204)
    User.findOneAndUpdate(cookie, {refreshtoken: ''})
 res.clearCookie('jwt', { httponly: true, secure: true })
 res.sendStatus(204)
}

module.exports = {
    handleRegister,
    handleLogin,
    handleGet,
    handleGetNewAccessToken,
    handleLogout
}