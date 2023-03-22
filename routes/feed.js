const express = require("express");
const feedController = require("../controllers/feed.controller.js");
const router = express.Router();

router.get("/posts", feedController.getPosts);
router.post("/createpost", feedController.postSinglePost);

module.exports = router;
