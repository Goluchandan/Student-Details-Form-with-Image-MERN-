const mongoose = require("mongoose");


const userSchema = new mongoose.Schema({
    fname:{
        type:String,
        required:true
    },
    father:{
        type:String,
        required:true
    },
    mother:{
        type:String,
        required:true
    },
    stdcode:{
        type:String|| Number,
        required:true
    },
    dob:{
        type:Date,
        required:true
    },
    number:{
        type:Number,
        required:true
    },
    education:{
        type:String,
        required:true
    },
    hobbies:{
        type:String,
        required:true
    },
    desc:{
        type:String,
        required:true
    },
    address:{
        type:String,
        required:true
    },
    imgpath:{
        type:String,
        required:true
    },
    date:{
        type:Date
    }
});

// create model

const users = new mongoose.model("users",userSchema);

module.exports = users;

