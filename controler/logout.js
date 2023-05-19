const User = require("../schemas/userSchema");

const handleLogout = (req, res) => {
  const { accesstoken } = req.body;
  const refrshtoken = req.cookies.jwt;
  if (!accesstoken) return res.sendStatus(208);
  User.findOneAndUpdate({ accesstoken }, { accesstoken: "" })
    .then(() => {
      res.clearCookie("jwt", refrshtoken, {
        httpOnly: true,
        sameSite: "strict",
        maxAge: 24 * 60 * 60 * 1000,
        secure: true,
        path: "/",
      });

      res.sendStatus(208);
    })
    .catch((err) => {
      if (err) {
        res.sendStatus(400);
      }
    });
};

module.exports = handleLogout;
