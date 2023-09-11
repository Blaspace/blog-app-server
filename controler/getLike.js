const Like = require("../schemas/likeSchema");

const getLike = (req, res) => {
  Like.find()
    .then((data) => res.send(data))
    .catch((err) => res.sendStatus(400));
};

module.exports = getLike;
