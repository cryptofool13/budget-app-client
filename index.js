require("dotenv").config();
const express = require("express");
const path = require("path");

const server = express();
// server;
server.use(express.static("dist"));
server.get("/*", (req, res) => {
  let url = path.join(__dirname, "/dist", "index.html");

  res.sendFile(url);
});

server.listen(process.env.PORT, () => {
  console.log(`:robot: server up and running on port ${process.env.PORT}`);
});
