const User = require("../schemas/userSchema");

const handleGetAllUser = (req, res) => {
  User.find().then((data) => res.json(data));
};

module.exports = handleGetAllUser;
