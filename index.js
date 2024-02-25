import express from "express";
import bodyParser from "body-parser";
import productRouter from "./src/features/product/route/product.route.js";
import userRouter from "./src/features/user/route/user.route.js";
import basicAuth from "./src/middleware/basicauth.middleware.js";

const app = express();
app.use(bodyParser.json());
app.use("/api/product", basicAuth, productRouter);
app.use("/api/user", userRouter);
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
