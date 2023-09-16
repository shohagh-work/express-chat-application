// external imports
const express = require("express");

// internal imports
const {
  getInbox,
  searchUser,
  addConversation,
  getMessages,
  sendMessage,
} = require("../controller/inboxController");
const decorateHtmlResponse = require("../middlewares/common/decorateHtmlResponse");
const { checkLogin } = require("../middlewares/common/checkLogin");
const attachmentUpload = require("../middlewares/inbox/attachmentUpload");

// initialization
const router = express.Router();

// inbox page
router.get("/", decorateHtmlResponse("Inbox"), checkLogin, getInbox);

// search user for conversation
router.post("/search", checkLogin, searchUser);

// inbox page
router.post(
  "/conversation",
  decorateHtmlResponse("Inbox"),
  checkLogin,
  getInbox
);

// inbox page
router.get(
  "/messages/:conversation_id",
  decorateHtmlResponse("Inbox"),
  checkLogin,
  getInbox
);

// inbox page
router.post("/message", decorateHtmlResponse("Inbox"), checkLogin, getInbox);

// exports
module.exports = router;
