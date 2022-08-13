const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
    "bookName": "string",
    "authorName": "string",
    "category": "string",
    "year": Number
},{timestamps: true});

module.exports = mongoose.model('Book', bookSchema) //books     