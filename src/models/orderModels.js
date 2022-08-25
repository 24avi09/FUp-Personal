const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId

const orderSchema = new mongoose.Schema( {
    userId: {
        type: ObjectId,
        ref: "MidW3User"
    },
	productId: {
        type: ObjectId,
        ref: "MidW3product"
    },
	amount: Number,
	isFreeAppUser: {
        type: Boolean,
        default: false //default is false
    },
	date: String

}, { timestamps: true });

module.exports = mongoose.model('MidW3Order', orderSchema)
