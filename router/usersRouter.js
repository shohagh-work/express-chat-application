// external imports
const express = require("express");

// internal imports
const { getUsers } = require("../controller/usersController");
const decorateHtmlResponse = require("../middlewares/common/decorateHtmlResponse");

// initialization
const router = express.Router();

// user page
router.get("/", decorateHtmlResponse("Users"), getUsers);

// add user
router.post("/", decorateHtmlResponse("Users"), getUsers);

// remove user
router.delete("/", decorateHtmlResponse("Users"), getUsers);

// exports
module.exports = router;
