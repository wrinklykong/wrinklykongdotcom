const mongoose = require("mongoose")

const { model, Schema } = mongoose;

const bookList = Schema({
    desc: {
        type: String,
        required: true
    }
});

module.exports = model('books', bookList)
