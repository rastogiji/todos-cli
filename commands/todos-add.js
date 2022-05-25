const conf = require("conf");
const inquirer = require("inquirer");
const colors = require("colors");

const config = new conf();
const add = () => {
  inquirer
    .prompt([
      {
        name: "task",
        message: "Please Enter your Task: ".brightBlue,
        type: "input",
      },
    ])
    .then((answer) => {
      let list = config.get("todosList");

      if (!list) {
        list = [];
      }
      list.push({
        task: answer.task,
        done: false,
      });
      config.set("todosList", list);
      console.log("Task has been added successfully".yellow);
    });
};

module.exports = add;
