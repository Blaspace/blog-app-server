const User = require('../schemas/userSchema')

const getSingleUser =(req, res)=>{
    User.findById(req.params.id)
    .then((data)=>{
        res.send({name: data.username, 
            email: data.name, 
            state: data.state,
            job: data.job,
            _id: data._id,
            city: data.city,
            school: data.school,
            bio: data.bio
        })
    })
    .catch(err=> res.sendStatus(400))
}

module.exports = getSingleUser