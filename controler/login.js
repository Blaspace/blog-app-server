const User = require("../schemas/userSchema");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const crypto = require("crypto");

const handleLogin = async (req, res) => {
  if (!req.body.email) return res.sendStatus(400);
  if (!req.body.password) return res.sendStatus(400);

  //checking if the user is in db
  const founduser = await User.findOne({ email: req.body.email }).select(
    "-image"
  );
  if (!founduser) return res.sendStatus(401);

  const enteredpassword = crypto
    .pbkdf2Sync(req.body.password, founduser.salt, 10000, 32, "sha256")
    .toString("hex");
  //const match = await bcript.compare(password, foundUser.password);
  if (enteredpassword != founduser.password) return res.sendStatus(401);
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
