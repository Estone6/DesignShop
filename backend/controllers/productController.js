const asyncHandler = require("express-async-handler");
const Product = require("../models/productModel");

// @desc fetch all products
// @route GET /api/products
// @access Public route
const getProducts = asyncHandler(async (req, res) => {
  const products = await Product.find({});
  res.json(products);
});

// @desc fetch single products
// @route GET /api/products/:id
// @access Public route
const getProductById = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id);
  if (product) {
    res.json(product);
  } else {
    res.sendStatus(404);
    throw new Error("Product not found");
  }
});

module.exports = { getProducts, getProductById };
