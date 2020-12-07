const command = require("./CommandController");
const devices = [];

exports.sendToDevice = (data, connection) => connection.write(new Buffer.from(data, "hex"));

exports.removeDevice = (connection) => devices.splice(devices.indexOf(connection), 1);

exports.commandsDbToDevice = async () => {
    const commands = await command.findCmdDb();
    commands.forEach((cmd) => {
        const deviceConnection = findDevice(cmd.uid);
        deviceConnection ? sendToDevice(cmd.data, deviceConnection) : console.log("device", cmd.uid, "is not online");
    });
};

exports.listDevices = (uid, connection) => {
    const Devices = { uid, connection };
    devices.push(Devices);
};

findDevice = (deviceId) => {
    const dev = devices.find((device) => device.uid == deviceId);
    return dev ? dev.connection : false;
};
