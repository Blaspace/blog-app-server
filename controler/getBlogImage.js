const fs = require("fs");

const getBlogImage = (req, res) => {
  const img = fs.readFileSync(`images/${req.params.filename}`);
  res.send(img);
};

module.exports = getBlogImage;
