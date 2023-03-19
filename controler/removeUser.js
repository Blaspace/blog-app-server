const User = require("../schemas/userSchema");

const handleRemoveUser = (req, res) => {
  User.findOneAndDelete({ accesstoken: req.body.accesstoken })
    .then(() => res.sendStatus(200))
    .catch((err) => res.sendStatus(400));
};

module.exports = handleRemoveUser;
