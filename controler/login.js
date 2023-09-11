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
      { expiresIn: "15m" }
    );

    const refreshtoken = jwt.sign(
      { email: founduser.email },
      process.env.REFRESH_TOKEN,
      { expiresIn: "15d" }
    );
    //saving accesstoken in db
    User.findOneAndUpdate(
      { email: req.body.email },
      { refreshtoken: refreshtoken }
    ).catch((err) => console.log(err));

    res.cookie("jwt", refreshtoken, {
      httpOnly: true,
      sameSite: "None",
      maxAge: 1000 * 60 * 60 * 24 * 15,
      secure: true,
      path: "/",
    });
    res.json({ accesstoken });
  } catch (err) {
    res.sendStatus(403);
    console.log(err);
  }
};

module.exports = handleLogin;
