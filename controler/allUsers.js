const User = require('../schemas/userSchema')

const handleGetAllUser =(req, res)=>{
    User.find()
    .then(data=>res.send(data))
}

module.exports = handleGetAllUser