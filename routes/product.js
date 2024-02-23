const express = require("express");
const router = express.Router();
const { verifyToken } = require("../middlewares/authMiddleware");

const { createProduct } = require("../controllers/productController");

router.post("/:categoryId/create", verifyToken, createProduct);

module.exports = router;
