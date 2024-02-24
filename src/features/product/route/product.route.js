import express from "express";
import ProductController from "../controller/product.controller.js";

const router = express.Router();
const productController = new ProductController();
router.get("/", productController.getAllProducts);

export default router;
