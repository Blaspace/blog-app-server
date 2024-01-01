const mongoose = require("mongoose");

const friendSchema = mongoose.Schema({
  from: {
    type: String,
    require,
  },
  to: {
    type: String,
    require,
  },
  status: {
    type: String,
    require,
    default: "pending",
  },
});

const Friend = mongoose.model("Friend", friendSchema);

module.exports = Friend;
