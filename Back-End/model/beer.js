const mongoose = require("mongoose")

const { model, Schema } = mongoose;

const beerPost = Schema({
    link: {
        type: String,
        required: true
    },
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
