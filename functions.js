const Package = require("./src/models/Package");
const SendCommand = require("./src/models/SendCommand");

date = new Date();
const utc_offset = date.getTimezoneOffset();
date.setMinutes(date.getMinutes() - utc_offset);

exports.store = async (data, model, cmd) => {
    Package.create({ date, data, model, cmd });
};

exports.sendCmdTracker = async (data, model) => {
    SendCommand.create({ date, data, model });
};
