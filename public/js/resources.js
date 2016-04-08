"use strict";

var pageFn = (common, user, req) => {
  const common = common
  const header = common.header(user)

  return `<html>
  <head>
    <script type="text/javascript" src="/build/explore.js"></script>
  </head>
  <body>
    <div id="viz"></div>
  </body>
</html>`
}

if (typeof module !== "undefined")
  // Node module.
  module.exports = pageFn
else
  // client side.
  pages.explore = pageFn