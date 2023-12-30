const express = require("express")
const expressRouter = express.Router()
const book = require("../model/book")

// Get all
expressRouter.get('/', async (req, res) => {
    const books = await book.find()
    try {
        return res.status(200).json(books)
    } catch (error) {
        return res.status(500).send(error)
    }
})

// Get specific item by ID
expressRouter.get('/:id', async (req, res) => {
    const { id } = req.params
    console.log(id)
    const singleBook = await book.findOne({"bookId": parseInt(id)})
    try {
        return res.status(200).json(singleBook)
    } catch (error) {
        return res.status(500).send(error)
    }
})

module.exports = expressRouter;