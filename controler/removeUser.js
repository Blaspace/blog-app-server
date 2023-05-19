const User = require("../schemas/userSchema");

const handleRemoveUser = (req, res) => {
  User.findOneAndDelete({ _id: req.body._id })
    .then(() => res.sendStatus(200))
    .catch((err) => res.sendStatus(400));
};

module.exports = handleRemoveUser;
