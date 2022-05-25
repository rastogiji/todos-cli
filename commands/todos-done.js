const conf = require("conf");
const colors = require("colors");

const config = new conf();

const done = () => {
  config.delete("todosList");
  //console.log("Hello from Done");
};

module.exports = done;
