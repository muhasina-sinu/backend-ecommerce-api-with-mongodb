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
const { verifyRoles,verifyTokenHandler } = require("../middlewares/jwtHandler");

router.get("/brands", getBrands);
router.post("/brands",[verifyTokenHandler,verifyRoles(['admin'])], createBrand);
router.get("/categories", getCategories);
router.post("/categories",[verifyTokenHandler,verifyRoles(['admin'])], createCategory);
router.get("/", getProducts);
router.get("/:id", getProductById);
router.post("/",[verifyTokenHandler,verifyRoles(['admin'])] ,createProduct);
router.patch("/:id",[verifyTokenHandler,verifyRoles(['admin'])], updateProduct);
router.delete("/:id",[verifyTokenHandler,verifyRoles(['admin'])], deleteProduct);
router.get('/brands/search/:brand_id',getProductsByBrandId);
router.get('/categories/search/:category_id',getProductsByCategoryId);


module.exports = router;
