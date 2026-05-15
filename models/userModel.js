const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    name:{type:String},
    email:{type:String, required:true, unique:true},
    password:{type:String, required:true},
    mobile_number:{type:String, required:true, unique:true},
    dob:{type:String},
    aadhar_number:{type:Number, unique:true},
    isAadharVerified:{type:Boolean, default:false},
    address: {
        vill:{type:String},
        po:{type:String},
        city:{type:String},
        state:{type:String},
        country:{type:String, default:"India"},
        pincode:{type:Number}
    },
    isActive:{type:String, enum:["Active", "Inactive", "Blocked"]}
})

module.exports = mongoose.model('user', userSchema)