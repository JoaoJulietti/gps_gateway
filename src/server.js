const net = require("net");
const { device } = require("./device");
const port = require("./config/index");
const Device = require("./controllers/DeviceController");
const AWS = require("aws-sdk");

//Vai entrar no .env
let awsConfig = {
    region: "us-east-1",
    endpoint: "https://dynamodb.us-east-1.amazonaws.com",
    accessKeyId: "AKIAQ6OTRVTETRSRQ5ES",
    secretAccessKey: "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",
};
AWS.config.update(awsConfig);

const server = net
    .createServer((connection) => {
        connection.on("data", (data) => {
            device(data, connection);
        });
        connection.on("end", () => {
            Device.removeDevice(connection);
            console.log("device disconnected");
        });
        connection.setTimeout(360000);
        connection.on("timeout", () => {
            connection.destroy();
            Device.removeDevice(connection);
            console.log("device timeout");
        });
    })
    .listen(port);

server.on("error", (err) => {
    throw err;
});

// setInterval(() => Device.commandsDbToDevice(), 5000);
