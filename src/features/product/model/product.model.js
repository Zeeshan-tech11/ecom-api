export default class ProductModel {
  constructor({ id, name, desc, price, imageUrl, category, sizes }) {
    this.id = id;
    this.name = name;
    this.desc = desc;
    this.price = price;
    this.imageUrl = imageUrl;
    this.category = category;
    this.sizes = sizes;
  }
  static addProduct(product) {
    product.id = products.length + 1;
    const newProduct = new ProductModel(product);
    products.push(newProduct);
    return newProduct;
  }
  static GetAll() {
    return products;
  }
  static getOneProduct(id) {
    return products.find((product) => product.id == id);
  }
}

var products = [
  new ProductModel({
    id: 1,
    name: "mens wear",
    price: 1122,
    imageUrl: "imageUrl-10furk.jpeg",
    sizes: ["x", "l", "xxl"],
  }),
  new ProductModel({
    id: 2,
    name: "mens wear desi",
    price: 1122,
    imageUrl: "imageUrl-10furk.jpeg",
    sizes: ["x", "l", "xxl"],
  }),
];
