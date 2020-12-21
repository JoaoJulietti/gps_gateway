const dynamoose = require("dynamoose");

const SendCommandSchema = new dynamoose.Schema({
    id: String,
    data: { type: String },
    trackerModel: String,
    date: Date,
    uid: String,
});

module.exports = dynamoose.model("SendCommand", SendCommandSchema);
