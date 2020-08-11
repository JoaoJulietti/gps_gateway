const mongoose = require("mongoose");

const SendCommandSchema = new mongoose.Schema({
    data: { type: String },
    model: String,
    date: Date,
});

module.exports = mongoose.model("SendCommand", SendCommandSchema);
