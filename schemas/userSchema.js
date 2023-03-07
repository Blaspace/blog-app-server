const { string } = require('@hapi/joi')
const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    username:{
        type: String,
        require: true
    },
    email:{
        type: String,
        require: true
    },
    password:{
        require: true,
        type: String
    },
    accesstoken: String,
    bio:{
        type:String
    },
    job:{
        type:String
    },
    school:{
        type:String
    },
    city:{
        type:String
    },
    state:{
        type: String
    },
    school:{
        type: String
    }
})

const User = mongoose.model('User', UserSchema)

module.exports = User