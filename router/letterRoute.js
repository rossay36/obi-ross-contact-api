const express = require("express");
const router = express.Router();

const letterController = require("../controller/letterController");

router.route("/").post(letterController.subscribeNewsletter);

module.exports = router;
