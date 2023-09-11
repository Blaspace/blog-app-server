const Comment = require("../schemas/commentSchema");

const handleComment = (req, res) => {
  const { blogId, commenterId, comment } = req.body;

  const newComment = new Comment({
    blogId,
    commenterId,
    comment,
  });

  newComment
    .save()
    .then((data) => res.send(data))
    .catch((err) => res.sendStatus(400));
};

module.exports = handleComment;
