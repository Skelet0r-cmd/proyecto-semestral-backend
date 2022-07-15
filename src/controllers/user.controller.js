const db = require("../models");
const config = require("../config/auth.config");
const User = db.user;
const Role = db.role;
const Op = db.Sequelize.Op;
var jwt = require("jsonwebtoken");
var bcrypt = require("bcryptjs");

/*GET USER BY ID*/
exports.getUserById= (req, res)=>{
  const {id} = req.params;
  User.findById(id).then((data)=> res.json(data)).catch((error)=> res.json({message:error}));
};
/*GET ALL USERS*/
exports.getUsers = (req, res)=>{
    User.find().then((data) => res.json(data)).catch((error) => res.json({ message: error }));
};
