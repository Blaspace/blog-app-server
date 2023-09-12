const jwt = require("jsonwebtoken");
const User = require("../schemas/userSchema");

//function to get users info
const handleGet = (req, res) => {
  const refreshtoken = req.cookies.jwt;
  //verifying the token
  User.findOne({ refreshtoken })
    .then((data) => {
      let i = () => {
        if (data.image) {
          return true;
        } else {
          return false;
        }
      };
      res.json({
        name: data.username,
        email: data.email,
        state: data.state,
        job: data.job,
        image: i(),
        _id: data._id,
      });
    })
    .catch((err) => res.sendStatus(400));
};

module.exports = handleGet;
