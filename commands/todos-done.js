const conf = require("conf");
const colors = require("colors");
const inquirer = require("inquirer");

const config = new conf();

const done = () => {
  let list = config.get("todosList");
  if (list && list.length) {
    inquirer
      .prompt([
        {
          name: "index",
          message: "Enter the index of the task to be marked done: ".brightBlue,
          type: "input",
        },
      ])
      .then((answer) => {
        list[answer.index].done = true;
        config.set("todosList", list);
      });
  } else {
    console.log("Please add some tasks first".bold.red);
  }
};

module.exports = done;
