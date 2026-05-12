const express = require("express");
const songRouter = express.Router();
const { uploadSong, getSong } = require("../controllers/song.controller.js");
const upload = require("../middleware/upload.middleware.js");

songRouter.post("/", upload.single("song"), uploadSong);
songRouter.get("/", getSong);

module.exports = songRouter;
