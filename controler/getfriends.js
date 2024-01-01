const Friend = require("../schemas/friendSchema");

const getFriends = (req, res) => {
  Friend.find()
    .select("-blogimagename")
    .then((data) => res.send(data))
    .catch((err) => res.sendStatus(400));
};

module.exports = getFriends;
