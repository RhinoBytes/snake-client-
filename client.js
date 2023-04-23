const { IP, PORT } = require("./constants");
const net = require("net");
// handles connection to snek server
const connect = function() {
  const conn = net.createConnection({
    host: IP,
    port: PORT,
  });
  conn.on("connect", () => {
    console.log("Successfully connected to game server.");
  });

  conn.on("connect", () => {
    conn.write("Name: DCR");
  });

  conn.on("data", (data) => {
    console.log("Server says:", data);
  });

  conn.setEncoding("utf8");

  return conn;
};

module.exports = { connect }; 