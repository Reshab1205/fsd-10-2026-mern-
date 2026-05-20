const express = require('express')

const router = express.Router()

const productController = require('../controllers/productController')

router.post('/create-product', productController.createProduct)
router.get('/fetch-product', productController.fetchProduct)
router.post('/update-product', productController.updateProduct)
router.post('/delete-product', productController.deleteProduct)

module.exports = router