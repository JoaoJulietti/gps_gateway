const store = require("./controllers/store");

exports.device = (data, connection) => {
    if (data != "") {
        const model = "E3";
        const str = data.split(",");
        const parts = {
            start: str[0],
            device_id: str[1],
            cmd: str[2],
        };
        switch (parts.cmd) {
            case "RG":
                connection.write(data);
                break;
            case "TX":
                connection.write(data);
                break;
            case "MQ#":
                connection.write(data);
                break;
            default:
                store.saveRaw(data, model, parts.cmd);
        }
    }
};
