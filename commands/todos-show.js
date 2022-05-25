const conf = require("conf");
const colors = require("colors");

const config = new conf();

const show = () => {
  const list = config.get("todosList");
  if (list && list.length) {
    console.log(
      "Tasks in Yellow are Pending. Tasks in Green are Done".bold.brightBlue
    );
    list.forEach((task, index) => {
      if (task.done) {
        console.log(`${index}: ${task.task}`.bold.brightGreen);
      } else {
        console.log(`${index}: ${task.task}`.bold.brightYellow);
      }
    });
  } else {
    console.log("You don't have any todos yet".bold.red);
  }
};

module.exports = show;
