const jwt = require('jsonwebtoken')
require('dotenv').config()

const accesRoute = (req, res, next)=>{
    const authheader = req.headers.authorization.slice(7)
    if(!authheader) return res.sendStatus(401)
    jwt.verify(
        authheader,
        process.env.ACCESS_TOKEN,
        (err, decoded)=>{
            if(err) return res.sendStatus(403)
            req.user = decoded.email;
            next()
        }
    )
}

module.exports = accesRoute