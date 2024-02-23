const express = require("express");
const router = express.Router();
const { verifyToken } = require("../middlewares/authMiddleware");

const {
  createProduct,
  showProductsByCategory,
} = require("../controllers/productController");

router.post("/:categoryId/create", verifyToken, createProduct);
router.get("/:categoryId/showProducts", showProductsByCategory);

module.exports = router;
