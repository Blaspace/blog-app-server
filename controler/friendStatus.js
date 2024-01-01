const Friend = require("../schemas/friendSchema");

const handleFriendStatus = (req, res) => {
  const { status, id } = req.body;

  Friend.findByIdAndUpdate(id, { status })
    .then((data) => res.send(data))
    .catch((err) => res.sendStatus(400));
};

module.exports = handleFriendStatus;
