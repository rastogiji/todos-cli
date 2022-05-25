#! /usr/bin/env node

const program = require("commander");
const pkg = require("../package.json");
const show = require("../commands/todos-show.js");
const add = require("../commands/todos-add.js");
const done = require("../commands/todos-done.js");
const remove = require("../commands/todos-delete.js");

program.version(pkg.version);

program.command("show").description("Shows all the todos").action(show);

program.command("add").description("Add a Todo").action(add);

program.command("done").description("Marks a Todo as done").action(done);

program
  .command("remove")
  .description("Removes a particular Task")
  .action(remove);

program.parse(process.argv);
