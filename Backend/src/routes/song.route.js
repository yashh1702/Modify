const express = require("express")
const songRouter = express.Router()
const songModel = require("../models/song.model.js")

module.exports = songRouter