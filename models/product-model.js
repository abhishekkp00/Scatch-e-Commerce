const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    imaage: String,
    name: String,
    price: Number,
    discount: {
        type: Number,
        default: 0
    },
    bgcolor: String,
    panelcolor: String,
    textcolor: String
});

module.exports = mongoose.model('Product', productSchema);