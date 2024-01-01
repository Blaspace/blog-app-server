const User = require("../schemas/userSchema");

const handleGetAllUser = (req, res) => {
  User.find()
    .select("-image")
    .then((data) => res.json(data));
};

module.exports = handleGetAllUser;
