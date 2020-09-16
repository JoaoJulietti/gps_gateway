const Package = require("./controllers/packageController");
const Device = require("./controllers/DeviceController");

commandHandling = (cmd, trackermodel, data, connection) => { // vai entrar um json
    const Commands = {
      RG: Device.sendToDevice(data, connection),
      TX: Device.sendToDevice(data, connection),
      'MQ#': Device.sendToDevice(data, connection),
      default: Package.saveRaw(data, trackermodel, cmd)
    }
    return Commands[cmd] || Commands.default
  }
  
exports.device = (data, connection) => {
        const trackermodel = "E3";
        const str = data.split(",");
        const parts = {
            start: str[0],
            device_id: str[1],
            cmd: str[2],
        };
        commandHandling(parts.cmd, trackermodel, data, connection)
        Device.listDevices(parts.device_id, connection)
};