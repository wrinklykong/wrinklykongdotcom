const express = require("express")
const expressRouter = express.Router()
const beer = require("../model/beer")

// Get all
expressRouter.get('/', async (req, res) => {
    const beers = await beer.find()
    try {
        return res.status(200).json(beers)
    } catch (error) {
        return res.status(500).send(error)
    }
})

// Get specific item by ID
expressRouter.get('/id/:id', async (req, res) => {
    const { id } = req.params
    console.log(id)
    const singleBeer = await beer.findById(id)
    try {
        return res.status(200).json(singleBeer)
    } catch (error) {
        return res.status(500).send(error)
    }
})

// Get first 10 posts
expressRouter.get('/recent', async (req, res) => {
    const beerRes = await beer.find().sort({_id: -1}).limit(10);
    try {
        return res.status(200).json(beerRes)
    } catch (error) {
        return res.status(500).send(error)
    }
})

// get by query
expressRouter.get('/query/:q', async (req, res) => {
    console.log(JSON.parse(req.params.q));
    const beerRes = await beer.find(JSON.parse(req.params.q));
    try {
        return res.status(200).json(beerRes)
    } catch (error) {
        return res.status(500).send(error)
    }
})

module.exports = expressRouter;