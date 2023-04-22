const net = require("net");
const connect = function () {
  const conn = net.createConnection({
    host: "192.168.2.84",
    port: 50541, 
  });
  conn.on("connect", () => {
    console.log("Successfully connected to game server.");
  });

  conn.on("connect", () => {
    conn.write("Name: DCR");
    /* setInterval(() => {
      conn.write("Move: up");
     }, 50);
     setTimeout(() => {
      conn.write("Move: up");
     }, 100); */
  });

  conn.on("data", (data) => {
    console.log("Server says:", data);
  });

  conn.setEncoding("utf8");

  return conn;
  };

module.exports = { connect }; 