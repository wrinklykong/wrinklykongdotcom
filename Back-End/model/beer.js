const mongoose = require("mongoose")

const { model, Schema } = mongoose;

const beerPost = Schema({
    title: {
        type: String,
        required: true
    },
    contents: {
        type: String,
        required: true
    },
    photoLink: {
        type: String,
        required: true
    }
})

module.exports = model('Beer', beerPost)
