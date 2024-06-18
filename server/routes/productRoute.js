import { Router } from "express";
import { getProducts, createProduct } from "../controllers/productController.js";

// we create the category router
const categoryRouter =Router()

productRouter.get('/product', getProducts)// It get all the products

productRouter.get('/product/:productID', getProductByID)//it get the product by its ID

productRouter.post('/product', createProduct)//it create a product


export default productRouter
