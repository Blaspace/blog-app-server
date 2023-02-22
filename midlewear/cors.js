const allowedoigin = require('../config/allowedorigin')

const Allow = (req, res, next)=>{
    const origin = req.headers.origin
    if(allowedoigin.includes(origin)){
    res.header('Access-Control-Allow-Credentials', true)
    }
    next();
}
module.exports = {Allow}