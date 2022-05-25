const conf = require("conf");
const colors = require("colors");

const config = new conf();

const reset = () => {
  let list = config.get("todosList");
  if (list) {
    config.delete("todosList");
  } else {
    console.log("You don't have any todos yet".bold.brightRed);
  }
};

module.exports = reset;
