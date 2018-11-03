const order = require("./shop.js");
const shop = require("./order.js");

module.exports = [ ...order, ...shop ];
