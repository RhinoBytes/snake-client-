const { connect } = require("./client");
const { setupInput } = require("./input");

console.log("Connecting ....");

let connectObj = connect();
setupInput(connectObj);

// setip interface to handle user input from stdin
