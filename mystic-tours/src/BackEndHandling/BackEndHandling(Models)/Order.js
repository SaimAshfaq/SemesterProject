const mongoose = require('mongoose');

const orderSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    product: {type: mongoose.Schema.Types.ObjectId , ref: 'Product'},
    days: {type: Number, default: 1},
    name: {type: String, required: true},
    price: {type: Number, required: true},
    ownerName: {type: String, require: true},
    descriptionRegardingAvailability: {type: String, require: true},
    mobileNumber: {type: String, require: true},
    totalRent: {type: Number, require: true}
});

module.exports = mongoose.model('Order', orderSchema);