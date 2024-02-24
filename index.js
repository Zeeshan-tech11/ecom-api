import express from "express";
import productRouter from "./src/features/product/route/product.route.js";
const app = express();
app.use("/api/products", productRouter);
app.get("/", (req, res) => {
  return res.send("hello");
});
app.listen(3000, (err) => {
  if (err) {
    console.log("server not running");
    return;
  }
  console.log("server is runung ");
});
