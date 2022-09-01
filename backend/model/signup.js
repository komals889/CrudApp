
const mongoose = require("mongoose")

const signupSchema = mongoose.Schema({
    firstName: {
        type: String,
        required:true
    },
    lastName:{
        type:String,
        required:true
    },
    phoneNo:{
        type:Number,
        required:true,
        uniq:true,
    },
    email: {
        type: String,
        required:true,
        uniq:true
    },
    password: {
        type: String,
        required: true
    },
    conPassword:{
        type:String,
        required:true
    },     
    isAdmin: {
        type: Boolean,
        default:false
    }
}, { timestamps: true })

module.exports = mongoose.model("signup",signupSchema)