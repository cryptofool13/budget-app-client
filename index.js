require("dotenv").config();
const express = require("express");
const path = require("path");

const server = express();

// server.use(express.static(__dirname + "/"));
server.use(express.static("dist"));
server.get("/*", (req, res) => {
  const url = path.join(__dirname, "/dist", "index.html");
  if (!url.startsWith("/app/"))
    // we're on local windows
    url = url.substring(1);
  res.sendFile(url);
});

server.listen(process.env.PORT, () => {
  console.log(`:robot: server up and running on port ${process.env.PORT}`);
});
