"use strict";

require("env2")("./.env");
const Hapi = require("hapi");
const Chalk = require("chalk");
const config = require("./config/index.js");
const plugins = require("./plugins/index.js");
const routes = require("./routes/index.js");

const log = console.log;

const server = Hapi.server({
  port: config.port,
  host: config.host,
});

const init = async () => {
  await server.register(plugins);
  server.route(routes);
  await server.start();
  log(Chalk.green("The server is started at 127.0.0.1:3000"));
};

process.on("unhandledRejection", (error) => {
  console.log(error);
  process.exit(1);
});

init();
