const express = require("express");
const router = express.Router();
const { verifyToken } = require("../middlewares/authMiddleware");

const { createCategory } = require("../controllers/categoryController");

router.post("/create", verifyToken, createCategory);

module.exports = router;
