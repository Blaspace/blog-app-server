const User = require("../schemas/userSchema");
const fs = require("fs");

const handleProfileUpload = (req, res) => {
  if (req.file.size > 128000) {
    return res.sendStatus(400);
  }
  User.findByIdAndUpdate(req.params.id, {
    image: {
      data: fs.readFileSync("images/" + req.file.originalname),
      contentType: "image/png",
    },
  })
    .then((data) => res.sendStatus(200))
    .catch((err) => res.sendStatus(400));
};

module.exports = handleProfileUpload;
