const Command = require("../models/Command");
const date = require("../helpers/date");

exports.sendCmdDb = async (data, model, uid) => Command.create({ date, data, model, uid });

exports.findCmdDb = () => Command.find({});
