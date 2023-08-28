// get login page
function getUsers(req, res, next) {
  res.render("users");
}

// exports
module.exports = {
  getUsers,
};
