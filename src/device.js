const store = require("./controllers/store");

commandHandling = (cmd, trackermodel, data, connection) => {
    const Commands = {
      RG: connection.write(data),
      TX: connection.write(data),
      'MQ#': connection.write(data),
      default: store.saveRaw(data, trackermodel, cmd)
    }
    return Commands[cmd] || Commands.default
  }
  
exports.device = (data, connection) => {
    if (data != "") {
        const trackermodel = "E3";
        const str = data.split(",");
        const parts = {
            start: str[0],
            device_id: str[1],
            cmd: str[2],
        };
        commandHandling(parts.cmd, trackermodel, data, connection)
    }
};
