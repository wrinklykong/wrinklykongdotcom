// Taken from Dot-Drip

const express = require("express")
const cors = require("cors")
const mongoose = require("mongoose")
require('dotenv').config()

const app = express()
app.use(cors())
const PORT = process.env.PORT || 4000

// Connect to database

mongoose
    .connect(process.env.MONG_URI, { dbName: "WKWebsite", useNewUrlParser: true })
    .then((r) => console.log('MongoDB connected!'))
    .catch((error) => console.log(error))

mongoose.Promise = global.Promise;

app.use(express.json())

// add routes

app.use("/api/Books", require("./routes/Books"));
app.use("/api/Beer", require("./routes/Beer"));

app.use((err, req, res, next) => {
    console.log(err);
    next();
})

// app listens for server launch
app.listen(PORT, function(err) {
    if (err) console.log("Error in server setup, check port", PORT)
    console.log("Server listening on Port", PORT)
})