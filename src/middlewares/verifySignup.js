const User = require("../models/user");

checkDuplicateUsernameOrEmail = (req, res, next) => {
  /*Username or Email*/
  User.findOne({
    username: req.body.username
  }).exec((err, user) => {
    if (err) {
      res.status(500).send({ message: err });
      return;
    }
    if (user) {
      res.status(400).send({ message: "USER NAME OR EMAIL IN USE ACTUAL" });
      return;
    }
    next();
  });
};

const verifySignUp = {
    checkDuplicateUsernameOrEmail
};

module.exports = verifySignUp;