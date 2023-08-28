// get login page
function getLogin(req, res, next) {
  res.render("index");
}

// exports
module.exports = {
  getLogin,
};
