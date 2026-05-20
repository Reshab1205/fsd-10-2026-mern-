const express = require('express')
const product = require('../models/productModel')


const createProduct = async (req,res) => {
try {
    const inputData = req.body;
    if(Object.keys(inputData).length === 0) {
      return res.status(404).json({message: 'Provide Details to Add Product'})
    }
    const ProductIdExist = await product.findOne({ product_id: inputData.product_id });


    if (ProductIdExist) {
      return res.status(404).json({ message: "Product ID Already Exists" });
    }
    const data = await product.create(inputData);
    // console.log(emailExist)

    return res.status(200).json({ message: "Product Added Successfully", data:data  });
  } catch (err) {
    return res.status(500).json({message: 'Internal Server Error'})
  }
}

const fetchProduct = () => {
    
}

const updateProduct = () => {
    
}


const deleteProduct = () => {
    
}

module.exports = {createProduct, fetchProduct, updateProduct, deleteProduct}