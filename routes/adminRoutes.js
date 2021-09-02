
const express = require('express')
const router = express.Router()
const adminController = require('../controller/adminController')

router.post('/addUser',adminController.addUser)

router.get('/login',adminController.login)

module.exports = router