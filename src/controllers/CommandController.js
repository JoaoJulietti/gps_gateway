const Command = require("../models/Command");
const date = require("../helpers/date");

exports.sendCmdTracker = async (data, model, uid) => Command.create({ date, data, model, uid }); 

exports.findCmdTracker = () => Command.find({})
