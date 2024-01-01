const Friend = require("../schemas/friendSchema");

const handleFriend = (req, res) => {
  const { from, to } = req.body;

  const newFriend = new Friend({
    from,
    to,
    status: "pending",
  });

  newFriend
    .save()
    .then((data) => res.send(data))
    .catch((err) => res.sendStatus(400));
};

module.exports = handleFriend;
