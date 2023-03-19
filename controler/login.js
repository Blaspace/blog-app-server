const User = require("../schemas/userSchema");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const handleLogin = async (req, res) => {
  if (!req.body.email) return res.sendStatus(400);
  if (!req.body.password) return res.sendStatus(400);

  //checking if the user is in db
  const founduser = await User.findOne({ email: req.body.email });
  if (!founduser) return res.sendStatus(401);

  //checking if the users password is accurate
  const match = await bcrypt.compare(req.body.password, founduser.password);
  if (!match) return res.sendStatus(401);

  //sending jwt tokens
  try {
    const accesstoken = jwt.sign(
      { email: founduser.email },
      process.env.ACCESS_TOKEN,
      { expiresIn: "1d" }
    );
    //saving accesstoken in db
    User.findOneAndUpdate(req.body.email, { accesstoken })
      .then(() => {
        return;
      })
      .catch((err) => console.log(err));
    res.json({ accesstoken });
  } catch (err) {
    res.sendStatus(400);
  }
};

module.exports = handleLogin;
