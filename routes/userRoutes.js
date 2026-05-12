const express = require('express')
const router = express.Router()

const userController = require('../controllers/userController')


router.get('/register', userController.register)
// router.post()


module.exports = router
