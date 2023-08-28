// external imports
const express = require("express");

// internal imports
const { getUsers } = require("../controller/usersController");
const decorateHtmlResponse = require("../middlewares/common/decorateHtmlResponse");

// initialization
const router = express.Router();

// login page
router.get("/", decorateHtmlResponse("Users"), getUsers);

// exports
module.exports = router;
