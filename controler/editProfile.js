const User = require("../schemas/userSchema");

const handleEditProfile = (req, res) => {
  User.findOneAndUpdate({ _id: req.params.id }, req.body)
    .then((data) => res.status(200).send(data))
    .catch((err) => res.sendStatus(400));
};

module.exports = handleEditProfile;
