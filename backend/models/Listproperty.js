const mongoose = require('mongoose');
const validator = require('validator');

const listproperty = new mongoose.Schema({
    name: {
        type: String,
        // required: [true, "Please enter product name"],
        trim: true,
        maxLength: [20, "name cannot exceed 20 characters"]
    },
    surname: {
        type: String,
        // required: [true, "Please enter product name"],
        trim: true,
        maxLength: [20, "name cannot exceed 20 characters"]
    },
    phone: {
        type: String,
        // required: [true, "Please enter product name"],
        trim: true,
        maxLength: [20, "name cannot exceed 20 characters"]
    },
    email:{
        type: String,
        required: [true, 'Please enter email'],
        unique: true,
        validate: [validator.isEmail, 'Please enter valid email address']
    },
    property: {
        type: String,
        // required: [true, "Please enter product name"],
        trim: true,
        maxLength: [100, "Message cannot exceed 100 characters"]
    },
    typeofproperty: {
        type: String,
        // required: [true, "Please enter product name"],
        trim: true,
        maxLength: [100, "Message cannot exceed 100 characters"]
    },
    websitelink: {
        type: String,
        // required: [true, "Please enter product name"],
        trim: true,
        maxLength: [100, "Message cannot exceed 100 characters"]
    },
})

let model =  mongoose.model('news', listproperty);


module.exports = model;