const dynamoose = require("dynamoose");

const PackageSchema = new dynamoose.Schema({
    id: String,
    data: { type: String },
    trackerModel: String,
    cmd: String,
    date: Date,
});

module.exports = dynamoose.model("Package", PackageSchema);
