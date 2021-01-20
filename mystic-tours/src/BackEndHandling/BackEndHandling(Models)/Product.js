const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: {type: String, required: true},
    price: {type: Number, required: true},
    ownerName: {type: String, require: true},
    descriptionRegardingAvailability: {type: Boolean, require: true},
    mobileNumber: {type: String, require: true}
});

module.exports = mongoose.model('Product', productSchema);