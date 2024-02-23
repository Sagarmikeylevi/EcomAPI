const Category = require("../models/Category");
const User = require("../models/User");

module.exports.createCategory = async (req, res) => {
  try {
    const { name, description } = req.body;

    const user = await User.findById(req.userId);

    console.log(user);

    if (user.role !== "admin") {
      return res
        .status(401)
        .json({ error: "Unauthorized - You are not an admin" });
    }

    const existingCategory = await Category.findOne({ name });

    if (existingCategory) {
      return res
        .status(409)
        .json({ error: "Category with this name already exists" });
    }

    const newCategory = new Category({
      name,
      description,
      products: [],
    });

    const savedCategory = await newCategory.save();

    res.status(201).json(savedCategory);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports.showCategories = async (req, res) => {
  try {
    const categories = await Category.find();

    res.status(200).json(categories);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
