const User = require("../models/user.js");

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
