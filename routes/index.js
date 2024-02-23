const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("Something on the way");
});

router.use("/user", require("./user"));
router.use("/category", require("./category"));

console.log("Routes are running fine");
module.exports = router;
