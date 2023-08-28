// external imports
const express = require("express");

// internal imports
const { getInbox } = require("../controller/inboxController");
const decorateHtmlResponse = require("../middlewares/common/decorateHtmlResponse");

// initialization
const router = express.Router();

// login page
router.get("/", decorateHtmlResponse("Inbox"), getInbox);

// exports
module.exports = router;
