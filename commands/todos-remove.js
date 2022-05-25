const conf = require("conf");

const config = new conf();

const remove = () => {
  config.delete("todosList");
  console.log("Hellow from Delete");
};

module.exports = remove;
