const fs = require("fs");
const User = require("../schemas/userSchema");

const getProfileImage = (req, res) => {
  const filename = req.params.id;
  User.findById(filename)
    .then((data) => {
      res.send(data.image);
    })
    .catch((err) => console.log(err));
};

module.exports = getProfileImage;
