const inert = require("inert");
const package = require("package");
const HapiSwagger = require("hapi-swagger");
const vision = require("vision");
const HapiPino = require("hapi-pino");

module.exports = [
  vision,
  inert,
  {
    plugin: HapiSwagger,
    options: {
      info: {
        title: "接口文档",
        version: package.version,
      },
      // 定义接口以 tags 属性定义为分组
      grouping: "tags",
      tags: [{ name: "tests", description: "测试相关" }],
    },
  },
  {
    plugin: HapiPino,
    options: {
      prettyPrint: true,
      logEvents: ["onRequest"],
    },
  },
];
