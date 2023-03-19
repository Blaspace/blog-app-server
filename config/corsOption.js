const allowedoigin = require("./allowedorigin");

const corsOption = {
  origin: (origin, callback) => {
    if (allowedoigin.indexOf(origin) !== -1 || !origin) {
      callback(null, true);
    } else {
      callback(new Error("not allowed by CORS"));
    }
  },
  optionsSuccessStatus: 200,
};
module.exports = corsOption;
