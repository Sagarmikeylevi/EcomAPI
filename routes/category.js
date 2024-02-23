const express = require("express");
const router = express.Router();
const { verifyToken } = require("../middlewares/authMiddleware");

const {
  createCategory,
  showCategories,
} = require("../controllers/categoryController");

router.post("/create", verifyToken, createCategory);
// anyone can acess this
router.get("/allCategories", showCategories);

router.use("/", require("./product"));

module.exports = router;
