// external imports
const express = require("express");

// internal imports
const { getLogin } = require("../controller/loginController");
const decorateHtmlResponse = require("../middlewares/common/decorateHtmlResponse");

// initialization
const router = express.Router();

// set page title
const page_title = "Login";

// login page
router.get("/", decorateHtmlResponse(page_title), getLogin);

// process login
router.post("/", decorateHtmlResponse(page_title), getLogin);

// logout
router.delete("/", getLogin);

// exports
module.exports = router;
