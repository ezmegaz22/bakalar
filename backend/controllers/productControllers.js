import Product from "../models/product";
import productDataJson from "../../data/product.json"

export const newProduct = async (req, res, next) => {
  const product = await Product.create(req.body);
  
  res.status(200).json({
    product,
  });
};

export const getProducts = async (req, res, next) => {
  res.status(200).json(productDataJson);
}
