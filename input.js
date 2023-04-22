// stores the active tcp connection object
let connection;

const handleUserInput = function (conn) {
  if (conn === '\u0003') {
    process.exit();
  }
  if (conn === 'w') {
    connection.write("Move: up"); 
  }
  if (conn === 'a') {
    connection.write("Move: left");
  }
  if (conn === 's') {
    connection.write("Move: down");
  }
  if (conn === 'd') {
    connection.write("Move: right");
  }
  if (conn === 't') {
    connection.write("Say: Hi");
  }
  if (conn === 'g') {
    connection.write("Say: I Win");
  }
  if (conn === 'b') {
    connection.write("Say: Later");
  }
}
const setupInput = function (conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
}

module.exports = { setupInput };