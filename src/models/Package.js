const mongoose = require("mongoose");

const PackageSchema = new mongoose.Schema({
    data: { type: String },
    model: String,
    cmd: String,
    date: Date,
});

module.exports = mongoose.model("Package", PackageSchema);
