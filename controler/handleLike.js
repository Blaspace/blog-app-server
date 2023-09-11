const Like = require("../schemas/likeSchema");

const handleLike = async (req, res) => {
  const { blogId, fromId, likeId } = req.body;

  const duplicate = await Like.findOne({ fromId, blogId });
  if (duplicate) {
    return res.sendStatus(400);
  }

  const newLike = new Like({
    blogId,
    fromId,
    likeId,
  });
  newLike
    .save()
    .then((data) => res.send(data))
    .catch(() => res.sendStatus(400));
};

module.exports = handleLike;
