const express = require("express");
const router = express.Router();
const { getBrands, createBrand } = require("../controllers/brands");
const { getCategories, createCategory } = require("../controllers/categories");
const {
  getProducts,
  createProduct,
  getProductById,
  updateProduct,
  deleteProduct,
  getProductsByBrandId,
  getProductsByCategoryId
} = require("../controllers/products");

router.get("/brands", getBrands);
router.post("/brands", createBrand);
router.get("/categories", getCategories);
router.post("/categories", createCategory);
router.get("/", getProducts);
router.get("/:id", getProductById);
router.post("/", createProduct);
router.patch("/:id", updateProduct);
router.delete("/:id", deleteProduct);
router.get('/brands/search/:brand_id',getProductsByBrandId);
router.get('/categories/search/:category_id',getProductsByCategoryId);


module.exports = router;
