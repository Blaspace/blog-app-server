const User = require("../schemas/userSchema");

const handleLogout = (req, res) => {
  const { accesstoken } = req.body;
  if (!accesstoken) return res.sendStatus(208);
  User.findOneAndUpdate({ accesstoken }, { accesstoken: "" })
    .then(() => res.sendStatus(208))
    .catch((err) => {
      if (err) {
        res.sendStatus(400);
      }
    });
};

module.exports = handleLogout;
