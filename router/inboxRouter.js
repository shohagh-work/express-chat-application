// external imports
const express = require("express");

// internal imports
const { getInbox } = require("../controller/inboxController");
const decorateHtmlResponse = require("../middlewares/common/decorateHtmlResponse");
const { checkLogin } = require("../middlewares/common/checkLogin");

// initialization
const router = express.Router();

// login page
router.get("/", decorateHtmlResponse("Inbox"),checkLogin, getInbox);

// exports
module.exports = router;
