const command = require("./CommandController");
const devices = []

exports.sendToDevice = (data, connection) => connection.write(data);

exports.removeDevice = (connection) => devices.splice(devices.indexOf(connection), 1);

exports.searchCommands = async () => {
    const commands = await command.findCmdTracker()
    commands.map((cmd) => send(cmd.uid, cmd.data))
}
   
exports.listDevices = (uid, connection) => {
    const Devices = {uid, connection}
    devices.push(Devices);
}

findDevice = (deviceId) => {
    const dev = devices.find((device) => device.uid == deviceId);
    return dev ? dev.connection : false;
};

send = (uid, data) => {
    const deviceConnection = findDevice(uid)
    if (deviceConnection) {
        deviceConnection.write(data)
    } else {
        console.log("device", uid, "is not online")
    }
}