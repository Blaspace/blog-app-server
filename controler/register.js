const bcrypt = require('bcrypt')
const User = require('../schemas/userSchema')

//sign up function
const handleRegister = async (req, res)=>{
    const {password, email, username, job, state, city, school} = req.body

    //chacking if the user with email already exist
    const conflict =await User.findOne({email})
    if(conflict) return res.status(409).send('user already exist')

    //hashing password with bcript
    const salt = await bcrypt.genSalt(10)
    const hashedpassword = await bcrypt.hash(password, salt)
    //saving user to db
    const user = new User({
        password: hashedpassword,
        email,
        username,
        job,
        state,
        city,
        school
    })
    user.save()
    .then((data)=>{
        res.send(data)
    })
    .catch((err)=>console.log(err))
}

module.exports = handleRegister