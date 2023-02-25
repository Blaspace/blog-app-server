const express = require('express')
const controler = require('../controler/allControler')
const auth = require('../midlewear/auth')

const router = express.Router()

router.post('/login', controler.handleLogin)

router.post('/register', controler.handleRegister)

router.post('/verify', controler.verifyAccesstoken)

router.post('/logout', controler.handleLogout)

router.post('/get',auth, controler.handleGet)

router.post('/newblog', controler.handleNewBlog)

router.post('/blog', controler.handleGetBlog)

module.exports = router