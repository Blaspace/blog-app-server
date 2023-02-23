const jwt = require('jsonwebtoken')
const User = require('../schemas/userSchema')
require('dotenv').config()

const accesRoute = (req, res, next)=>{
    const authbody = req.body.accesstoken
    if(!authbody) return res.sendStatus(401)
    jwt.verify(
        authbody,
        process.env.ACCESS_TOKEN,
        (err, decoded)=>{
        if(err) return res.sendStatus(401)
            
            next()
        }
    )
}

module.exports = accesRoute