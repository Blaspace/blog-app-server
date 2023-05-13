const jwt = require("jsonwebtoken");
const User = require("../schemas/userSchema");

const Verify = (req, res) => {
  const { accesstoken } = req.body;
  if (!accesstoken) return res.sendStatus(401);

  const foundUser = User.findOne({ accesstoken });
  if (!foundUser) return res.sendStatus(401);

  jwt.verify(accesstoken, process.env.ACCESS_TOKEN, (err, decoded) => {
    if (err) {
      return res.sendStatus(401);
    } else {
      return res.sendStatus(200);
    }
  });
};

module.exports = Verify;
