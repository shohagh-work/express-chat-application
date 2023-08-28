// external imports
const express = require("express");

// internal imports
const { getLogin } = require("../controller/loginController");
const decorateHtmlResponse = require("../middlewares/common/decorateHtmlResponse");

// initialization
const router = express.Router();

// login page
router.get("/", decorateHtmlResponse("Login"), getLogin);

// exports
module.exports = router;
