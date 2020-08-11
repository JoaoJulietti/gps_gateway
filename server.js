const net = require("net");
const mongoose = require("mongoose");
const { device } = require("./device");
const port = 8090;

const server = net
    .createServer((connection) => {
        connection.on("data", (data) => {
            device(data.toString(), connection);
        });
        connection.on("end", () => {
            console.log("device disconnected");
        });
    })
    .listen(port);

server.on("error", (err) => {
    throw err;
});

mongoose.connect(
    "mongodb+srv://tracker2020:tracker2020@cluster0.xpwki.mongodb.net/trackerRaw?retryWrites=true&w=majority",
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }
);
