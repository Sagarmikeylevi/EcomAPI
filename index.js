const express = require("express");
const server = express();
require("dotenv").config();
const PORT = process.env.PORT;
const cors = require("cors");
const mongoose = require("./config/mongoose");

server.use(express.json());
server.use(cors());

server.use("/api", require("./routes"));

server.listen(PORT, () => {
  console.log(`Server is running on PORT: ${PORT}`);
});
