const User = require("../models/user");

exports.userBoard = (req, res) => {
  res.status(200).send("USE");
};

exports.allAccess = (req, res) => {
  res.status(200).send("ALL");
};

/*GET USER BY ID*/
exports.getUserById= (req, res)=>{
  const {id} = req.params;
  User
      .findById(id)
      .then((data)=> res.json(data))
      .catch((error)=> res.json({message:error}));
};
/*GET ALL USERS*/
exports.getUsers = (req, res)=>{
    User
      .find()
      .then((data) => res.json(data))
      .catch((error) => res.json({ message: error }));
};