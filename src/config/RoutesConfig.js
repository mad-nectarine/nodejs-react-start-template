"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = RouteConfig;
function RouteConfig(app) {
    app.use("/", require("../routes/index"));
    app.use("/index", require("../routes/index"));
}