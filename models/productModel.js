const mongoose = require('mongoose')

const productSchema =  mongoose.Schema({
    product_id:{type:String, required:true, unique:true},
    product_name:{type:String, required:true},
    product_quantity:{type:Number, default:1},
    product_mrp:{type:Number, required:true},
    product_availability:{type:String, enum:["Out of Stock", "Available"]},
    product_description:{type:String},
    product_reviews:[{type:String}],
    product_expiry:{type:String},
    product_discount_percentage:{type:Number}

})

module.exports = mongoose.model('product', productSchema)

