const jwt = require("jsonwebtoken");
require("dotenv").config();

const accesRoute = (req, res, next) => {
  const authbody = req.body.accesstoken;
  if (!authbody) return res.sendStatus(403);
  jwt.verify(authbody, process.env.ACCESS_TOKEN, (err, decoded) => {
    if (err) return res.sendStatus(403);

    next();
  });
};

module.exports = accesRoute;
