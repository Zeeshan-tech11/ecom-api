import ProductModel from "../model/product.model.js";

export default class ProductController {
  getAllProducts(req, res) {
    const products = ProductModel.GetAll();
    return res.send(products);
  }
  addProduct(req, res) {}
  rateProduct(req, res) {}
  getOneProduct(req, res) {}
}
