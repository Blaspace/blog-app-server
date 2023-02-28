const jwt = require('jsonwebtoken')
const User = require('../schemas/userSchema')

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
            .then(data => res.json({ name: data.username, email: data.name }))
        }
   )
}

module.exports = handleGet