const jwt = require("jsonwebtoken");
const User = require("../schemas/userSchema");

//function to get users info
const handleGet = (req, res) => {
  const { accesstoken } = req.body;
  //verifying the token
  jwt.verify(accesstoken, process.env.ACCESS_TOKEN, (err, decoded) => {
    if (err) return res.sendStatus(403);
    User.findOne({ email: decoded.email })
      .then((data) =>
        res.json({
          name: data.username,
          email: data.name,
          state: data.state,
          job: data.job,
          image: data.image,
          _id: data._id,
        })
      )
      .catch((err) => res.sendStatus(403));
  });
};

module.exports = handleGet;
