const Product = require('../model/productModel');

const getProducts = async (req, res) => {
  try {
    const products = await Product.find();

    if (products.length === 0) {
      return res.status(200).json({ message: "There is no product" });
    }

    res.status(200).json({
      success: true,
      products
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Internal Server Error"
    });
  }
};

module.exports = { getProducts }; // ✅ export as object
