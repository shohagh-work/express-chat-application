// get login page
function getInbox(req, res, next) {
  res.render("inbox");
}

// exports
module.exports = {
  getInbox,
};
