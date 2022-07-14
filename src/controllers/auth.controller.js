const config = require("../config/auth.config");
const User = require("../models/user");
var jwt = require("jsonwebtoken");
var bcrypt = require("bcryptjs");

exports.signIn = (req, res) => {
  User.findOne({
    username: req.body.username
  }).exec((err, user) => {
    if (err) {
      res.status(500).send({ message: err });
      return;
    }
    if (!user) {
      return res.status(404).send({ message: "USER NOT FOUND" });
    }
    var passwordIsValid = compareSync(req.body.password, user.password);
    if (!passwordIsValid) {
      return res.status(401).send({
        accessToken: null,
        message: "PASSWORD INCORRECT, TRY AGAIN",
      });
    }
    var token = jwt.sign({ id: user.id }, config.secret, {
      expiresIn: 86400, // 24 hours
    });

    res.status(200).send({
      id: user._id,
      username: user.username,
      accessToken: token,
    });
  });
}

exports.signUp = (req, res) => {
  const user = new User({
    username: req.body.username,
    password: bcrypt.hashSync(req.body.password, 5),
    session: req.body.session,
  });
  user.save((err) => {
    if (err) {
      res.status(500).send({ message: err });
      return;
    }
    res.send({ message: "USER REGISTERED" });
  });
}
