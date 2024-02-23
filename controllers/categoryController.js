const Category = require("../models/Category");

module.exports.createCategory = async (req, res) => {
  try {
    const { name, description } = req.body;

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
