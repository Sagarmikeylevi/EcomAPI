const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("Something on the way");
});

console.log("Routes are running fine");
module.exports = router;
