import ProductModel from "../model/product.model.js";

export default class ProductController {
  getAllProducts(req, res) {
    const products = ProductModel.GetAll();
    return res.status(200).send(products);
  }
  addProduct(req, res) {
    const { name, price, sizes } = req.body;
    const newProduct = {
      name,
      price: parseFloat(price),
      sizes: sizes.split(","),
      imageUrl: req.file.filename,
    };
    const product = ProductModel.addProduct(newProduct);
    res.status(201).send(product);
  }

  rateProduct(req, res) {}
  getOneProduct(req, res) {
    const id = req.params.id;
    const product = ProductModel.getOneProduct(id);
    if (!product) {
      res.status(404).send("no product");
    }
    res.status(200).send(product);
  }
}
