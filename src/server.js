const net = require("net");
const mongoose = require("mongoose");
const { device, listDevices } = require("./device");
const port = require("./config/index");
const sendToDevice = require("./helpers/sendToDevice");


const devices = listDevices()

const server = net
    .createServer((connection) => {
        connection.on("data", (data) => {
           device(data.toString(), connection);
        });
        connection.on("end", () => {
            devices.splice(devices.indexOf(connection), 1);
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

find_device = (deviceId) => {
    const dev = devices.find((device) => device.uid == deviceId);
    return dev ? dev.connection : false;
};

send = (uid, data) => {
    const deviceConnection = find_device(uid)
    if (deviceConnection != false) {
        sendToDevice(data, deviceConnection)
    } else {
        console.log("device is not online")
    }
}