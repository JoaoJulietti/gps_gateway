const Package = require("./controllers/packageController");
const Device = require("./controllers/DeviceController");

commandHandling = (cmd, trackermodel, data, connection, convertedData) => {
    // vai entrar um json
    const Commands = {
        RG: Device.sendToDevice(data, connection),
        TX: Device.sendToDevice(data, connection),
        "MQ#": Device.sendToDevice(data, connection),
        default: Package.saveRaw(convertedData, trackermodel, cmd),
    };
    return Commands[cmd] || Commands.default;
};

exports.device = (data, connection) => {
    let convertedData = data.toString();
    const trackermodel = "E3";
    const str = convertedData.split(",");
    const parts = {
        start: str[0],
        device_id: str[1],
        cmd: str[2],
    };
    commandHandling(parts.cmd, trackermodel, data, connection, convertedData);
    Device.listDevices(parts.device_id, connection);
};
