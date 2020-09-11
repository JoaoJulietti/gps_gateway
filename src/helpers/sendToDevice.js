send = (data, connection) => {
    connection.write(data);
};
module.exports = send;
