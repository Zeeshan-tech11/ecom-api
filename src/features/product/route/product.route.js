import express from "express";
import ProductController from "../controller/product.controller.js";
import { upload } from "../../../middleware/fileupload.middleware.js";
const router = express.Router();
const productController = new ProductController();
router.get("/", productController.getAllProducts);
router.get("/:id", productController.getOneProduct);
router.post("/", upload.single("imageUrl"), productController.addProduct);

export default router;
