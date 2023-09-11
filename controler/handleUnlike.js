const Like = require("../schemas/likeSchema");

const handleUnlike = (req, res) => {
  const { id, likeId } = req.body;

  Like.findOneAndDelete({ _id: id, likeId })
    .then((data) => res.send(data))
    .catch((err) => res.sendStatus(400));
};

module.exports = handleUnlike;
