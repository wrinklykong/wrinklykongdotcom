const express = require("express")
const expressRouter = express.Router()
const book = require("../model/book")

// Get specific item by ID
expressRouter.get('/products/:id', async (req, res) => {
    const id = req.params
    const singleProduct = await product.findById(id)
    try {
        return res.status(200).json(singleProduct)
    } catch (error) {
        return res.status(500).json({message: "Unable to get product"})
    }
})

module.exports = expressRouter;