const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        // required: [true, "Please enter product name"],
        trim: true,
        maxLength: [100, "Product name cannot exceed 100 characters"]
    },
   
    images: {
        type: String,
        // required: [true, "Please enter product name"],
    },
    category: {
        type: String,
        default : "all",
        required: [true, "Please enter"],
        enum: {
            values: [
                'all',
                'cottage',
                'villas',
                'chalets'
            ],
            message: "Please select"
        }
    },
   
    description: {
        type: String,
    },
   
    createdAt: {
        type: Date,
        default: Date.now()
    }
})

let schema = mongoose.model('Product', productSchema)

module.exports = schema