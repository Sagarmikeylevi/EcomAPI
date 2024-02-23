const Category = require("../models/Category");
const Product = require("../models/Product");
const User = require("../models/User");

module.exports.createProduct = async (req, res) => {
  try {
    const user = await User.findById(req.userId);

    if (user.role !== "admin") {
      return res
        .status(401)
        .json({ error: "Unauthorized - You are not an admin" });
    }

    const { categoryId } = req.params;

    const { title, price, description, stockCount } = req.body;

    const category = await Category.findById(categoryId);

    if (!category) {
      return res.status(404).json({ error: "Category not found" });
    }

    const newProduct = new Product({
      title,
      price,
      description,
      stockCount,
    });

    const savedProduct = await newProduct.save();

    category.products.push(savedProduct._id);

    await category.save();

    res.status(201).json(savedProduct);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports.showProductsByCategory = async (req, res) => {
  try {
    const { categoryId } = req.params;

    const category = await Category.findById(categoryId);

    if (!category) {
      return res.status(404).json({ error: "Category not found" });
    }

    const productIds = category.products;

    const products = await Product.find({ _id: { $in: productIds } });

    res.status(200).json(products);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
