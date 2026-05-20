const express = require('express')
const router = express.Router()

const userController = require('../controllers/userController')


router.post('/register', userController.register)
router.post('/login', userController.login)
router.get('/get-users', userController.fetchUsers)
router.post('/update-user/:id', userController.updateUser)
router.post('/delete/:id', userController.deleteUser)
// router.post()


module.exports = router
