const fs = require("fs");

const getProfileImage = (req, res) => {
  const filename = req.params.filename;
  const img = fs.readFileSync(`images/${filename}`);
  res.send(img);
};

module.exports = getProfileImage;
