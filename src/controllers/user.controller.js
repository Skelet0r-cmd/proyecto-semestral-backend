const user = require('../models/user')

/*GET USER BY ID*/
exports.getUserById= (req, res)=>{
  const {id} = req.params;
  user.findById(id).then((data)=> res.json(data)).catch((error)=> res.json({message:error}));
};
/*GET ALL USERS*/
exports.getUsers = (req, res)=>{
  user.find().then((data) => res.json(data)).catch((error) => res.json({ message: error }));
};
