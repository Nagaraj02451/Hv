const mongoose = require('mongoose');
const validator = require('validator');

const roomlist = new mongoose.Schema({
    name: {
        type: String,
        // required: [true, "Please enter product name"],
        trim: true,
        maxLength: [1000, "name cannot exceed 20 characters"]
    },
    size: {
        type: String,
        // required: [true, "Please enter product name"],
        trim: true,
        maxLength: [1000, "name cannot exceed 20 characters"]
    },
    description: {
        type: String,
        // required: [true, "Please enter product name"],
        trim: true,
        maxLength: [1000, "name cannot exceed 20 characters"]
    },

    rate: {
        type: String,
        // required: [true, "Please enter product name"],
        trim: true,
        maxLength: [1000, "Message cannot exceed 100 characters"]
    },
    images: {
         type: String,
        // required: [true, "Please enter product name"],
    },
})

let model =  mongoose.model('news', roomlist);


module.exports = model;