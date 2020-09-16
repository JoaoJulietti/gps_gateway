const Package = require("../models/Package");
const date = require("../helpers/date");

exports.saveRaw = async (data, model, cmd) => {
  Package.create({ date, data, model, cmd });
};


