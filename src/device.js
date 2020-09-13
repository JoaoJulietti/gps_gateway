const store = require("./controllers/store");
const sendToDevice = require("./helpers/sendToDevice");

const devices = []
exports.listDevices = () => {
  return devices
}

listDevices = (uid, connection) => {
  const Devices = {uid, connection}
  devices.push(Devices);
}


commandHandling = (cmd, trackermodel, data, connection) => { // vai entrar um json
    const Commands = {
      RG: sendToDevice(data, connection),
      TX: sendToDevice(data, connection),
      'MQ#': sendToDevice(data, connection),
      default: store.saveRaw(data, trackermodel, cmd)
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
        listDevices(parts.device_id, connection)
};