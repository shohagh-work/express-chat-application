// external imports
const createError = require("http-errors");

// internal imports
const User = require("../models/People");
const Conversation = require("../models/Conversation");
const Message = require("../models/Message");
const escape = require("../models/People");

// get inbox page
function getInbox(req, res, next) {
  res.render("inbox");
}

// search user

// add conversation

// get messages of a conversation

// send new messages


// exports
module.exports = {
  getInbox,
};
