const express = require("express")
const expressRouter = express.Router()
const beer = require("../model/beer")

// ToDo: sanitation so it doesnt crash the server

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
expressRouter.get('/id/:link', async (req, res) => {
    try {
        const singleBeer = await beer.find(JSON.parse('{"link": "'+req.params.link+'"}'));
        console.log(singleBeer)
        return res.status(200).json(singleBeer)
    } catch (error) {
        return res.status(500).send(error)
    }
})

// Get first 10 posts
expressRouter.get('/recent', async (req, res) => {
    const beerRes = await beer.find().sort({_id: -1}).limit(5);
    try {
        return res.status(200).json(beerRes)
    } catch (error) {
        return res.status(500).send(error)
    }
})

// Get N*10 posts
expressRouter.get('/recent/:num', async (req, res) => {
    const { num } = req.params
    const beerRes = await beer.find().sort({_id: -1}).skip( num * 5 ).limit(5);
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