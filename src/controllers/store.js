const Package = require("../models/Package");
const SendCommand = require("../models/SendCommand");
const date = require("../helpers/date");

exports.saveRaw = async (data, model, cmd) => {
    Package.create({ date, data, model, cmd });
};

exports.sendCmdTracker = async (data, model) => {
    SendCommand.create({ date, data, model });
};
