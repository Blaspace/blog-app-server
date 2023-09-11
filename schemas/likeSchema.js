const mongoose = require("mongoose");

const likeSchema = mongoose.Schema({
  fromId: {
    type: String,
    require,
  },
  blogId: {
    type: String,
    require,
  },
  likeId: {
    type: String,
    require,
  },
});

const Like = mongoose.model("Like", likeSchema);

module.exports = Like;
