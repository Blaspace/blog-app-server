const User = require("../schemas/userSchema");

const handleGetAllUser = (req, res) => {
  User.find()
    .then((data) => res.send(data))
    .catch((err) => {
      res.sendStatus(400);
      console.log(err);
    });
};

module.exports = handleGetAllUser;
