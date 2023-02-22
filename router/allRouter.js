const express = require('express')
const controler = require('../controler/allControler')
const auth = require('../midlewear/auth')

const router = express.Router()

router.post('/login', controler.handleLogin)

router.post('/register', controler.handleRegister)

router.get('/refresh', controler.handleGetNewAccessToken)

router.get('/logout', controler.handleLogout)

router.get('/get',auth, controler.handleGet)

module.exports = router