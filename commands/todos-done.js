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
        if (answer.index < list.length) {
          list[answer.index].done = true;
          config.set("todosList", list);
          console.log("Task Marked Done Successfully".bold.brightGreen);
        } else {
          console.log(
            `Please enter an index between 0 and ${list.length - 1}`.bold
              .brightYellow
          );
        }
      });
  } else {
    console.log("Please add some tasks first".bold.red);
  }
};

module.exports = done;
