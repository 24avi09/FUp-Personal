const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
    bookName: {
        type: String,
        require: true
    },
    authorName: String,
    price: {
        indianPrice: String,
        euroPrice: String
    },
    year: {
        type: String,
        default: 2021
    },
    tags: String,
    totalPages: Number,
    stockAvailabe: Boolean
}, {  timestamps: true  })

module.exports = mongoose.model('BookDetail', bookSchema)  //bookDetails