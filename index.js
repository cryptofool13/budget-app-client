require("dotenv").config();
const express = require("express");

const server = express();

// server.use(express.static(__dirname + "/"));
server.use(express.static("dist"));
server.get("/*", (req, res) => {
  res.sendFile(path.join("dist", "index.html"));
});

server.listen(process.env.PORT, () => {
  console.log(`:robot: server up and running on port ${process.env.PORT}`);
});
