const express = require('express')
const login = require('../controler/login')
const register = require('../controler/register')
const verify = require('../controler/verify')
const logout = require('../controler/logout')
const getUer = require('../controler/getUser')
const createBlog = require('../controler/createBlog')
const getBlog = require('../controler/getBlog')
const auth = require('../midlewear/auth')

const router = express.Router()

router.post('/login', login)

router.post('/register', register)

router.post('/verify', verify)

router.post('/logout', logout)

router.post('/get',auth, getUer)

router.post('/newblog', createBlog)

router.post('/blog', getBlog)

module.exports = router