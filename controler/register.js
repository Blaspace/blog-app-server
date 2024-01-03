const bcrypt = require("bcrypt");
const User = require("../schemas/userSchema");
const crypto = require("crypto");

//sign up function
const handleRegister = async (req, res) => {
  const { password, email, username, state, city } = req.body;
  console.log("hollo");

  //chacking if the user with email already exist
  const conflict = await User.findOne({ email }).select("-image");
  if (conflict) return res.status(409).send("user already exist");

  //hashing password with bcript
  const salt = crypto.randomBytes(16).toString("hex");

  const hashedpassword = crypto
    .pbkdf2Sync(password, salt, 10000, 32, "sha256")
    .toString("hex");
  console.log(salt);
  console.log(hashedpassword);

  //saving user to db
  const user = new User({
    password: hashedpassword,
    email,
    username,
    state,
    city,
    hasimage: false,
    salt,
  });
  user
    .save()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => res.sendStatus(400));
};

module.exports = handleRegister;
