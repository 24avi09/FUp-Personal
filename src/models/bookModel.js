const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema(
    {
        name: String,
        author_id: {
            type: Number,
            require:true,
        },
        price: Number,
        ratings: Number
    }
)
 


module.exports = mongoose.model('BookList', bookSchema) //booklists

