const jwt = require("jsonwebtoken");
const User = require("../schemas/userSchema");

//function to get users info
const handleGet = (req, res) => {
  const refreshtoken = req.cookies.jwt;
  //verifying the token
  User.findOne({ refreshtoken })
    .select("-image")
    .then((data) => {
      res.json(data);
    })
    .catch((err) => res.sendStatus(400));
};

module.exports = handleGet;
