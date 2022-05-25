const conf = require("conf");
const colors = require("colors");

const config = new conf();

const show = () => {
  const list = config.get("todosList");
  if (list && list.length) {
    console.log(
      "Tasks in Yellow are Pending. Tasks in Green are Done".bold.blue
    );
    list.forEach((task, index) => {
      if (task.done) {
        console.log(`${index}: ${task.task}`.bold.green);
      } else {
        console.log(`${index}: ${task.task}`.bold.yellow);
      }
    });
  } else {
    console.log("You don't have any tasks yet".bold.red);
  }
};

module.exports = show;
