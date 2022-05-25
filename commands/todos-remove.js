const conf = require("conf");
const inquirer = require("inquirer");

const config = new conf();

const remove = () => {
  let list = config.get("todosList");
  if (list && list.length) {
    inquirer
      .prompt([
        {
          name: "index",
          message: "Enter the index of the task you want to remove: "
            .brightBlue,
          type: "input",
        },
      ])
      .then((answer) => {
        if (!isNaN(answer.index)) {
          if (answer.index < list.length) {
            list.splice(answer.index, 1);
            config.set("todosList", list);
            console.log("Task Removed Successfully".bold.brightGreen);
          } else {
            console.log(
              `Please enter an index between 0 and ${list.length - 1}`.bold
                .brightYellow
            );
          }
        } else {
          console.log("Please Enter a valid number".bold.red);
        }
      })
      .catch((err) => {
        console.log(
          `Uncaught Error: ${err}. Please open an issue in the Github Repo`
        );
      });
  }
};

module.exports = remove;
