"use strict";

const pages = {}
if (typeof module !== "undefined") {
  pages.appDetails = require("./pages/appDetails.js")
  pages.list = require("./pages/list.js")
  pages.explore = require("./pages/explore.js")
  pages.powerBi = require("./pages/powerBi.js")
  pages.dashboard = require("./pages/dashboard.js")
}

const routes = {}

routes["/resources"] = (common, user, req) => pages.resources(common, user, req)

if (typeof module !== "undefined")
  module.exports = routes
