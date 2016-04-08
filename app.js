"use strict";

const express = require("express");
const app = express();

var port = 3030;

app.use(express.static("./public"));

// Routes

// Starts listening
const server = app.listen(port, () => {
	console.log(`Listening on port ${port}`);
})
