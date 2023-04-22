const { connect } = require("./client");
const { setupInput } = require("./input");

console.log("Connecting ....");

connect();
setupInput();

// setip interface to handle user input from stdin
