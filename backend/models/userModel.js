const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    firstName : {
        type: String,
        required : true,
        trim : true,
    },
    lastName : {
        type: String,
        required : true,
        trim : true,
    },
    emailAddress : {
        type : String,
        required : true,
        unique : true,
    },
    password : {
        type : String,
        required : true,
    },
    mobileNumber : {
        type : String,
        required : true
    },
    make : {
        type : String,
        required : true
    },
    model : {
        type : Number,
        required : true
    },
    age : {
        type : Number,
        required : true
    },
    mileage : {
        type : Number,
        required : true
    },
    vin : {
        type : String,
    },
    previousThreadId : {
        type : String,
    }
}, {timestamps : true})

module.exports = mongoose.model('users', userSchema)