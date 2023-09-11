const User = require("../schemas/userSchema");
const fs = require("fs");

const handleProfileUpload = (req, res) => {
  User.findByIdAndUpdate(req.params.id, {
    image: fs.readFileSync(`images/${req.file.filename}`),
  })
    .then((data) => res.sendStatus(200))
    .catch((err) => res.sendStatus(400))
    .finally(() => fs.unlinkSync(`images/${req.file.filename}`));
};

module.exports = handleProfileUpload;
