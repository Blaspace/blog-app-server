const jwt = require('jsonwebtoken')

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

module.exports = verifyAccesstoken